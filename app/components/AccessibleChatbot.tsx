'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type ChatMessage = { role: 'user' | 'assistant'; content: string };

const LANGUAGES = [
  ['AUTO', 'Auto-detect', 'en-ZA'],
  ['English', 'English', 'en-ZA'],
  ['isiZulu', 'isiZulu', 'zu-ZA'],
  ['isiXhosa', 'isiXhosa', 'xh-ZA'],
  ['Afrikaans', 'Afrikaans', 'af-ZA'],
  ['Sepedi', 'Sepedi', 'nso-ZA'],
  ['Setswana', 'Setswana', 'tn-ZA'],
  ['Sesotho', 'Sesotho', 'st-ZA'],
  ['XiTsonga', 'XiTsonga', 'ts-ZA'],
  ['siSwati', 'siSwati', 'ss-ZA'],
  ['Tshivenda', 'Tshivenda', 've-ZA'],
  ['isiNdebele', 'isiNdebele', 'nr-ZA'],
] as const;

export default function AccessibleChatbot() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('AUTO');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [speechPaused, setSpeechPaused] = useState(false);
  const [rate, setRate] = useState(1);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem('vod-chat-language');
    if (saved && LANGUAGES.some(([value]) => value === saved)) setLanguage(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('vod-chat-language', language);
  }, [language]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const previous = document.body.style.overflow;
    if (window.matchMedia('(max-width: 520px)').matches) document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
      window.speechSynthesis?.cancel();
      recognitionRef.current?.stop?.();
    };
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: 'auto' });
  }, [messages, status]);

  function closeChat() {
    setOpen(false);
    setStatus('');
    window.speechSynthesis?.cancel();
    recognitionRef.current?.stop?.();
    setRecording(false);
    setSpeaking(false);
    setSpeechPaused(false);
    window.setTimeout(() => launcherRef.current?.focus(), 0);
  }

  function localeForSelectedLanguage() {
    return LANGUAGES.find(([value]) => value === language)?.[2] || 'en-ZA';
  }

  async function sendMessage(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || sending) return;

    const userMessage: ChatMessage = { role: 'user', content: text };
    const priorHistory = messages.slice(-10);
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setSending(true);
    setStatus('Voice of Disability Guide is preparing a response.');

    try {
      const pageContext = document.querySelector('main')?.textContent?.replace(/\s+/g, ' ').trim().slice(0, 6000) || '';
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, language, history: priorHistory, pageContext }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.reply) throw new Error(data.error || 'The chatbot could not answer just now.');
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
      setStatus('Response ready.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'The chatbot could not answer just now.';
      setStatus(`${message} You can still use the Contact section for help.`);
    } finally {
      setSending(false);
    }
  }

  function startRecording() {
    if (recording) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      setStatus('Speech input is not supported by this browser. Please type your question instead.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = localeForSelectedLanguage();
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => {
      setRecording(true);
      setStatus('Listening. Your speech will appear as editable text before anything is sent.');
    };
    recognition.onresult = (event: any) => {
      const transcript = event.results?.[0]?.[0]?.transcript || '';
      setInput(transcript);
      setStatus('Transcript ready. Review or edit it, then press Send.');
    };
    recognition.onerror = () => setStatus('Speech could not be recognised. Please try again or type your question.');
    recognition.onend = () => setRecording(false);
    recognitionRef.current = recognition;
    recognition.start();
  }

  function stopRecording() {
    recognitionRef.current?.stop?.();
    setRecording(false);
    setStatus('Recording stopped. Review the transcript before sending.');
  }

  function listen(text: string) {
    if (!('speechSynthesis' in window)) {
      setStatus('Read-aloud is not supported by this browser. The full response remains available as text.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = localeForSelectedLanguage();
    utterance.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const exact = voices.find(v => v.lang.toLowerCase() === utterance.lang.toLowerCase());
    const family = voices.find(v => v.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));
    if (exact || family) utterance.voice = exact || family || null;
    utterance.onstart = () => { setSpeaking(true); setSpeechPaused(false); setStatus('Reading response aloud.'); };
    utterance.onend = () => { setSpeaking(false); setSpeechPaused(false); setStatus('Finished reading response.'); };
    utterance.onerror = () => { setSpeaking(false); setSpeechPaused(false); setStatus('Audio could not be played. The full response remains visible as text.'); };
    window.speechSynthesis.speak(utterance);
  }

  function pauseSpeech() {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setSpeechPaused(true);
      setStatus('Reading paused.');
    }
  }

  function resumeSpeech() {
    if (window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      setSpeechPaused(false);
      setStatus('Reading resumed.');
    }
  }

  function stopSpeech() {
    window.speechSynthesis?.cancel();
    setSpeaking(false);
    setSpeechPaused(false);
    setStatus('Reading stopped.');
  }

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        className="vodLauncher"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="vod-chat-panel"
        onClick={() => setOpen(true)}
        hidden={open}
      >
        Ask Voice of Disability
      </button>

      {open && (
        <section id="vod-chat-panel" className="vodChat" role="dialog" aria-modal="false" aria-labelledby="vod-chat-title">
          <header className="vodHead">
            <div>
              <h2 id="vod-chat-title">Voice of Disability Guide</h2>
              <p>Your voice. Your rights. Your community.</p>
            </div>
            <button ref={closeRef} type="button" className="vodClose" onClick={closeChat}>Close</button>
          </header>

          <div className="vodLanguage">
            <label htmlFor="vod-language">Language</label>
            <select id="vod-language" value={language} onChange={e => setLanguage(e.target.value)}>
              {LANGUAGES.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
            <p>Choose one of South Africa&apos;s 11 official spoken languages, or use auto-detect.</p>
          </div>

          <div ref={logRef} className="vodLog" role="log" aria-live="polite" aria-relevant="additions text" tabIndex={0}>
            {messages.length === 0 && (
              <div className="vodAssistantMsg">
                <strong>Voice of Disability Guide</strong>
                <p>Ask about disability rights, our work, membership, programmes, Universal Design, advocacy, donations or how to contact us.</p>
              </div>
            )}
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === 'assistant' ? 'vodAssistantMsg' : 'vodUserMsg'}>
                <strong>{message.role === 'assistant' ? 'Voice of Disability Guide' : 'You'}</strong>
                <p>{message.content}</p>
                {message.role === 'assistant' && (
                  <button type="button" className="vodSecondary" onClick={() => listen(message.content)}>Listen to this response</button>
                )}
              </div>
            ))}
          </div>

          <div className="vodStatus" role="status" aria-live="polite">{status}</div>

          {speaking && (
            <div className="vodAudio" aria-label="Read-aloud controls">
              <button type="button" className="vodSecondary" onClick={pauseSpeech} disabled={speechPaused}>Pause</button>
              <button type="button" className="vodSecondary" onClick={resumeSpeech} disabled={!speechPaused}>Resume</button>
              <button type="button" className="vodSecondary" onClick={stopSpeech}>Stop</button>
              <label htmlFor="vod-speed">Speed</label>
              <select id="vod-speed" value={rate} onChange={e => setRate(Number(e.target.value))}>
                <option value="0.75">0.75×</option><option value="1">1×</option><option value="1.25">1.25×</option><option value="1.5">1.5×</option>
              </select>
            </div>
          )}

          <form className="vodComposer" onSubmit={sendMessage}>
            <label htmlFor="vod-message">Your message</label>
            <textarea id="vod-message" value={input} onChange={e => setInput(e.target.value)} maxLength={2400} required placeholder="Type your question here" />
            <div className="vodActions">
              <button type="submit" className="vodPrimary" disabled={sending}>{sending ? 'Sending…' : 'Send'}</button>
              {!recording ? (
                <button type="button" className="vodSecondary" onClick={startRecording}>Speak</button>
              ) : (
                <button type="button" className="vodSecondary" onClick={stopRecording}>Stop recording</button>
              )}
            </div>
            <p className="vodPrivacy">Voice is optional. Speech recognition is provided by your browser and may use its speech service. Your transcript is shown for review and is not sent until you press Send.</p>
          </form>
        </section>
      )}

      <style jsx>{`
        .vodLauncher{position:fixed;right:22px;bottom:22px;z-index:1200;border:3px solid #fff;border-radius:999px;background:#17324D;color:#fff;font:700 1rem/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;padding:14px 18px;min-height:52px;box-shadow:0 8px 28px rgba(0,0,0,.25);cursor:pointer}
        .vodLauncher:hover{background:#7A1F5C}.vodLauncher:focus-visible,.vodChat button:focus-visible,.vodChat select:focus-visible,.vodChat textarea:focus-visible{outline:4px solid #D9A441;outline-offset:3px}
        .vodChat{position:fixed;right:22px;bottom:22px;z-index:1200;width:min(430px,calc(100vw - 28px));height:min(720px,calc(100vh - 44px));display:grid;grid-template-rows:auto auto minmax(120px,1fr) auto auto auto;background:#F7F4EF;color:#222;border:3px solid #17324D;border-radius:18px;box-shadow:0 16px 44px rgba(0,0,0,.28);overflow:hidden;font:400 1rem/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
        .vodHead{background:#17324D;color:#fff;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;justify-content:space-between}.vodHead h2{font-size:1.15rem;margin:0;color:#fff}.vodHead p{font-size:.88rem;margin:4px 0 0;color:#E8EEF3}.vodClose{background:#fff;color:#17324D;border:2px solid #fff;border-radius:10px;min-width:58px;min-height:44px;font-weight:800;cursor:pointer}
        .vodLanguage{padding:10px 14px;border-bottom:2px solid #d7d0c7;background:#fff}.vodLanguage label,.vodComposer label{display:block;font-weight:700;margin-bottom:4px}.vodLanguage select,.vodAudio select{width:100%;min-height:44px;border:2px solid #17324D;border-radius:9px;padding:7px 10px;font:inherit;background:#fff;color:#222}.vodLanguage p,.vodPrivacy{font-size:.78rem;color:#4a4152;margin:6px 0 0}
        .vodLog{padding:12px 14px;overflow:auto;overscroll-behavior:contain;scrollbar-gutter:stable;background:#F7F4EF}.vodAssistantMsg,.vodUserMsg{margin:0 0 12px;padding:11px 12px;border-radius:14px;overflow-wrap:anywhere}.vodAssistantMsg{background:#fff;border:2px solid #d7d0c7;border-radius:14px 14px 14px 4px}.vodUserMsg{background:#E8EEF3;border:2px solid #17324D;border-radius:14px 14px 4px 14px;margin-left:30px}.vodAssistantMsg strong,.vodUserMsg strong{font-size:.82rem;color:#17324D}.vodAssistantMsg p,.vodUserMsg p{white-space:pre-wrap;margin:4px 0 0}
        .vodStatus{padding:4px 14px;min-height:28px;font-size:.82rem;font-weight:650;color:#17324D;background:#fff}.vodAudio{padding:8px 14px;background:#E8EEF3;display:flex;align-items:center;gap:7px;flex-wrap:wrap}.vodAudio select{width:auto}.vodAudio label{font-weight:700}
        .vodComposer{border-top:2px solid #d7d0c7;background:#fff;padding:10px 14px}.vodComposer textarea{box-sizing:border-box;width:100%;min-height:64px;max-height:120px;resize:vertical;border:2px solid #17324D;border-radius:10px;padding:10px;font:inherit;color:#222;background:#fff}.vodActions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.vodPrimary,.vodSecondary{border:2px solid #17324D;border-radius:10px;padding:9px 12px;min-height:44px;font:700 .92rem/1.1 system-ui;cursor:pointer}.vodPrimary{background:#17324D;color:#fff}.vodSecondary{background:#fff;color:#17324D;margin-top:8px}.vodActions .vodSecondary,.vodAudio .vodSecondary{margin-top:0}.vodPrimary:disabled,.vodSecondary:disabled{opacity:.6;cursor:not-allowed}
        @media(max-width:520px){.vodLauncher{right:12px;bottom:12px}.vodChat{right:7px;bottom:7px;width:calc(100vw - 14px);height:calc(100vh - 14px);border-radius:14px}}
        @media(prefers-reduced-motion:reduce){.vodChat,.vodLauncher{scroll-behavior:auto;transition:none!important}}
      `}</style>
    </>
  );
}
