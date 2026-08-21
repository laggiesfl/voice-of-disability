import { experimental_transcribe as transcribe } from 'ai';
import { gateway } from '@ai-sdk/gateway';

const MAX_AUDIO_BYTES = 4 * 1024 * 1024;

function estimateBytes(base64) {
  if (!base64) return 0;
  const padding = base64.endsWith('==') ? 2 : base64.endsWith('=') ? 1 : 0;
  return Math.floor((base64.length * 3) / 4) - padding;
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const audio = typeof req.body?.audio === 'string' ? req.body.audio : '';

    if (!audio) return res.status(400).json({ error: 'No audio recording was received.' });
    if (estimateBytes(audio) > MAX_AUDIO_BYTES) {
      return res.status(413).json({ error: 'The recording is too long. Please record a shorter message.' });
    }

    const result = await transcribe({
      model: gateway.transcriptionModel('openai/whisper-1'),
      audio: Buffer.from(audio, 'base64'),
    });

    const text = typeof result?.text === 'string' ? result.text.trim() : '';
    if (!text) return res.status(502).json({ error: 'No speech was detected. Please try again or type your question.' });

    return res.status(200).json({
      text,
      language: result?.language || null,
      durationInSeconds: result?.durationInSeconds || null,
    });
  } catch (error) {
    console.error('Transcription API error', error);
    return res.status(502).json({ error: 'I could not transcribe that recording. Please try again or type your question.' });
  }
}
