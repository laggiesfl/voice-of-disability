const MAX_AUDIO_BYTES = 4 * 1024 * 1024;

function getRuntimeToken(req) {
  const oidcHeader = Array.isArray(req.headers?.['x-vercel-oidc-token'])
    ? req.headers['x-vercel-oidc-token'][0]
    : req.headers?.['x-vercel-oidc-token'];
  return process.env.AI_GATEWAY_API_KEY || oidcHeader || process.env.VERCEL_OIDC_TOKEN;
}

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
    const mediaType = typeof req.body?.mediaType === 'string' ? req.body.mediaType.split(';')[0] : 'audio/webm';

    if (!audio) return res.status(400).json({ error: 'No audio recording was received.' });
    if (estimateBytes(audio) > MAX_AUDIO_BYTES) {
      return res.status(413).json({ error: 'The recording is too long. Please record a shorter message.' });
    }

    const token = getRuntimeToken(req);
    if (!token) {
      console.error('AI Gateway authentication unavailable for transcription.');
      return res.status(503).json({ error: 'Speech transcription is temporarily unavailable. Please type your question instead.' });
    }

    const gatewayResponse = await fetch('https://ai-gateway.vercel.sh/v4/ai/transcription-model', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'ai-model-id': 'openai/whisper-1',
      },
      body: JSON.stringify({ audio, mediaType }),
    });

    const data = await gatewayResponse.json().catch(() => ({}));
    if (!gatewayResponse.ok) {
      console.error('AI Gateway transcription error', gatewayResponse.status, data);
      return res.status(502).json({ error: 'I could not transcribe that recording. Please try again or type your question.' });
    }

    const text = typeof data?.text === 'string' ? data.text.trim() : '';
    if (!text) return res.status(502).json({ error: 'No speech was detected. Please try again or type your question.' });

    return res.status(200).json({ text, language: data?.language || null });
  } catch (error) {
    console.error('Transcription API error', error);
    return res.status(500).json({ error: 'Speech transcription failed. Please try again or type your question.' });
  }
}
