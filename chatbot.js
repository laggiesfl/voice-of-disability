(() => {
  'use strict';

  const LANGUAGES = [
    { value: 'AUTO', label: 'Auto-detect', locale: 'en-ZA' },
    { value: 'English', label: 'English', locale: 'en-ZA' },
    { value: 'isiZulu', label: 'isiZulu', locale: 'zu-ZA' },
    { value: 'isiXhosa', label: 'isiXhosa', locale: 'xh-ZA' },
    { value: 'Afrikaans', label: 'Afrikaans', locale: 'af-ZA' },
    { value: 'Sepedi', label: 'Sepedi', locale: 'nso-ZA' },
    { value: 'Setswana', label: 'Setswana', locale: 'tn-ZA' },
    { value: 'Sesotho', label: 'Sesotho', locale: 'st-ZA' },
    { value: 'XiTsonga', label: 'XiTsonga', locale: 'ts-ZA' },
    { value: 'siSwati', label: 'siSwati', locale: 'ss-ZA' },
    { value: 'Tshivenda', label: 'Tshivenda', locale: 've-ZA' },
    { value: 'isiNdebele', label: 'isiNdebele', locale: 'nr-ZA' }
  ];

  const style = document.createElement('style');
  style.textContent = `
    .vod-chat-launcher{position:fixed;right:22px;bottom:22px;z-index:1200;border:3px solid #fff;
      border-radius:999px;background:#17324D;color:#fff;font:700 1rem/1.2 system-ui,-apple-system,"Segoe UI",sans-serif;
      padding:14px 18px;min-height:52px;box-shadow:0 8px 28px rgba(0,0,0,.25);cursor:pointer}
    .vod-chat-launcher:hover{background:#7A1F5C}
    .vod-chat-launcher:focus-visible,.vod-chat button:focus-visible,.vod-chat select:focus-visible,.vod-chat textarea:focus-visible{
      outline:4px solid #D9A441;outline-offset:3px;box-shadow:0 0 0 7px rgba(23,50,77,.35)}
    .vod-chat{position:fixed;right:22px;bottom:88px;z-index:1200;width:min(430px,calc(100vw - 28px));
      max-height:min(720px,calc(100vh - 112px));background:#F7F4EF;color:#222;border:3px solid #17324D;
      border-radius:18px;box-shadow:0 16px 44px rgba(0,0,0,.28);display:none;overflow:hidden;
      font:400 1rem/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
    .vod-chat[data-open="true"]{display:flex;flex-direction:column}
    .vod-chat__head{background:#17324D;color:#fff;padding:14px 16px;display:flex;align-items:flex-start;gap:12px;justify-content:space-between}
    .vod-chat__head h2{font-size:1.15rem;margin:0;color:#fff}.vod-chat__head p{font-size:.88rem;margin:4px 0 0;color:#E8EEF3}
    .vod-chat__close{background:#fff;color:#17324D;border:2px solid #fff;border-radius:10px;min-width:44px;min-height:44px;font-weight:800;cursor:pointer}
    .vod-chat__controls{padding:12px 14px;border-bottom:2px solid #d7d0c7;background:#fff}
    .vod-chat__controls label{display:block;font-weight:700;margin-bottom:5px}.vod-chat__controls select{width:100%;min-height:44px;border:2px solid #17324D;border-radius:9px;padding:7px 10px;font:inherit;background:#fff;color:#222}
    .vod-chat__log{padding:14px;overflow:auto;flex:1;min-height:220px;scrollbar-gutter:stable}
    .vod-chat__msg{margin:0 0 14px}.vod-chat__msg p{margin:0;white-space:pre-wrap;overflow-wrap:anywhere}
    .vod-chat__msg--assistant{background:#fff;border:2px solid #d7d0c7;border-radius:14px 14px 14px 4px;padding:11px 12px}
    .vod-chat__msg--user{background:#E8EEF3;border:2px solid #17324D;border-radius:14px 14px 4px 14px;padding:11px 12px;margin-left:34px}
    .vod-chat__speaker{font-size:.78rem;font-weight:800;color:#17324D;margin-bottom:4px}.vod-chat__msg--user .vod-chat__speaker{color:#17324D}
    .vod-chat__listen{margin-top:8px;border:2px solid #17324D;background:#fff;color:#17324D;border-radius:9px;padding:7px 10px;min-height:38px;font:700 .86rem/1 system-ui;cursor:pointer}
    .vod-chat__status{padding:0 14px;min-height:26px;font-size:.88rem;font-weight:650;color:#17324D}
    .vod-chat__composer{border-top:2px solid #d7d0c7;background:#fff;padding:12px 14px}
    .vod-chat__composer label{display:block;font-weight:700;margin-bottom:5px}.vod-chat__composer textarea{width:100%;min-height:78px;max-height:150px;resize:vertical;border:2px solid #17324D;border-radius:10px;padding:10px;font:inherit;color:#222;background:#fff}
    .vod-chat__actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.vod-chat__actions button{border:2px solid #17324D;border-radius:10px;padding:9px 12px;min-height:44px;font:700 .92rem/1.1 system-ui;cursor:pointer}
    .vod-chat__send{background:#17324D;color:#fff}.vod-chat__speak{background:#fff;color:#17324D}.vod-chat__stop{background:#fff;color:#7A1F5C;border-color:#7A1F5C!important}
    .vod-chat__note{font-size:.78rem;color:#4a4152;margin:7px 0 0}.vod-chat__link{color:#7A1F5C;font-weight:700}
    @media(max-width:520px){.vod-chat{right:7px;bottom:74px;width:calc(100vw - 14px);max-height:calc(100vh - 86px);border-radius:14px}.vod-chat-launcher{right:12px;bottom:12px}}
    @media(prefers-reduced-motion:reduce){.vod-chat,.vod-chat-launcher{scroll-behavior:auto;transition:none!important}}
  `;
  document.head.appendChild(style);

  const launcher = document.createElement('button');
  launcher.type = 'button';
  launcher.className = 'vod-chat-launcher';
  launcher.setAttribute('aria-haspopup', 'dialog');
  launcher.setAttribute('aria-expanded', 'false');
  launcher.textContent = 'Ask Voice of Disability';

  const panel = document.createElement('section');
  panel.className = 'vod-chat';
  panel.id = 'vod-chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-labelledby', 'vod-chat-title');
  panel.setAttribute('data-open', 'false');
  panel.innerHTML = `
    <div class="vod-chat__head">
      <div>
        <h2 id="vod-chat-title">Voice of Disability Guide</h2>
        <p>Your voice. Your rights. Your community.</p>
      </div>
      <button class="vod-chat__close" type="button" aria-label="Close chatbot">Close</button>
    </div>
    <div class="vod-chat__controls">
      <label for="vod-chat-language">Language</label>
      <select id="vod-chat-language" aria-describedby="vod-chat-language-help"></select>
      <p class="vod-chat__note" id="vod-chat-language-help">Choose a South African language, or let the chatbot detect it.</p>
      <div id="vod-chat-audio-controls" class="vod-chat__actions" hidden aria-label="Read-aloud controls">
        <button id="vod-chat-pause" type="button" class="vod-chat__speak">Pause</button>
        <button id="vod-chat-resume" type="button" class="vod-chat__speak">Resume</button>
        <button id="vod-chat-audio-stop" type="button" class="vod-chat__stop">Stop</button>
        <label for="vod-chat-speed" style="display:inline-flex;align-items:center;gap:6px;margin:0">Speed
          <select id="vod-chat-speed" aria-label="Read-aloud speed" style="width:auto;min-height:44px">
            <option value="0.75">0.75×</option>
            <option value="1" selected>1×</option>
            <option value="1.25">1.25×</option>
            <option value="1.5">1.5×</option>
          </select>
        </label>
      </div>
    </div>
    <div class="vod-chat__log" id="vod-chat-log" role="log" aria-live="polite" aria-relevant="additions text" tabindex="0"></div>
    <div class="vod-chat__status" id="vod-chat-status" role="status" aria-live="polite"></div>
    <form class="vod-chat__composer" id="vod-chat-form">
      <label for="vod-chat-input">Your message</label>
      <textarea id="vod-chat-input" maxlength="2400" required placeholder="Type your question here"></textarea>
      <div class="vod-chat__actions">
        <button class="vod-chat__send" type="submit">Send</button>
        <button class="vod-chat__speak" type="button">Speak</button>
        <button class="vod-chat__stop" type="button" hidden>Stop recording</button>
      </div>
      <p class="vod-chat__note">Voice is optional. If your browser supports speech recognition, it may use your browser or device speech service. Your spoken words appear here as an editable transcript and are not sent to the chatbot until you press Send. You can always type instead.</p>
    </form>
  `;

  document.body.append(panel, launcher);

  const closeBtn = panel.querySelector('.vod-chat__close');
  const form = panel.querySelector('#vod-chat-form');
  const input = panel.querySelector('#vod-chat-input');
  const log = panel.querySelector('#vod-chat-log');
  const status = panel.querySelector('#vod-chat-status');
  const language = panel.querySelector('#vod-chat-language');
  const speakBtn = panel.querySelector('.vod-chat__speak');
  const stopBtn = panel.querySelector('.vod-chat__stop');
  const audioControls = panel.querySelector('#vod-chat-audio-controls');
  const pauseAudioBtn = panel.querySelector('#vod-chat-pause');
  const resumeAudioBtn = panel.querySelector('#vod-chat-resume');
  const stopAudioBtn = panel.querySelector('#vod-chat-audio-stop');
  const audioSpeed = panel.querySelector('#vod-chat-speed');
  let lastFocus = null;
  let history = [];
  let recognition = null;
  let isRecording = false;

  LANGUAGES.forEach(lang => {
    const option = document.createElement('option');
    option.value = lang.value;
    option.textContent = lang.label;
    language.appendChild(option);
  });

  const savedLanguage = localStorage.getItem('vod-chat-language');
  if (savedLanguage && LANGUAGES.some(l => l.value === savedLanguage)) language.value = savedLanguage;
  language.addEventListener('change', () => localStorage.setItem('vod-chat-language', language.value));

  function setStatus(message) { status.textContent = message || ''; }
  function scrollLog() { log.scrollTop = log.scrollHeight; }

  function addMessage(role, text, options = {}) {
    const wrap = document.createElement('div');
    wrap.className = `vod-chat__msg vod-chat__msg--${role}`;
    const speaker = document.createElement('div');
    speaker.className = 'vod-chat__speaker';
    speaker.textContent = role === 'assistant' ? 'Voice of Disability Guide' : 'You';
    const body = document.createElement('p');
    body.textContent = text;
    wrap.append(speaker, body);

    if (role === 'assistant' && options.listen !== false && 'speechSynthesis' in window) {
      const listen = document.createElement('button');
      listen.type = 'button';
      listen.className = 'vod-chat__listen';
      listen.textContent = 'Listen to this response';
      listen.addEventListener('click', () => speakText(text));
      wrap.appendChild(listen);
    }

    log.appendChild(wrap);
    scrollLog();
  }

  function getLocale() {
    const selected = LANGUAGES.find(l => l.value === language.value);
    return selected?.locale || 'en-ZA';
  }

  function speakText(text) {
    if (!('speechSynthesis' in window)) {
      setStatus('Text-to-speech is not available in this browser. The full response remains available as text.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getLocale();
    const voices = window.speechSynthesis.getVoices();
    const exact = voices.find(v => v.lang.toLowerCase() === utterance.lang.toLowerCase());
    const family = voices.find(v => v.lang.toLowerCase().startsWith(utterance.lang.slice(0, 2).toLowerCase()));
    if (exact || family) utterance.voice = exact || family;
    utterance.rate = Number(audioSpeed?.value || 1);
    utterance.onstart = () => {
      if (audioControls) audioControls.hidden = false;
      setStatus('Reading the response aloud. Use Pause, Resume, Stop or the speed control at any time.');
    };
    utterance.onend = () => {
      if (audioControls) audioControls.hidden = true;
      setStatus('Finished reading the response.');
    };
    utterance.onerror = () => {
      if (audioControls) audioControls.hidden = true;
      setStatus('Audio could not be played. The full response is still available as text.');
    };
    window.speechSynthesis.speak(utterance);
  }

  pauseAudioBtn?.addEventListener('click', () => {
    if (window.speechSynthesis?.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
      setStatus('Reading paused.');
    }
  });
  resumeAudioBtn?.addEventListener('click', () => {
    if (window.speechSynthesis?.paused) {
      window.speechSynthesis.resume();
      setStatus('Reading resumed.');
    }
  });
  stopAudioBtn?.addEventListener('click', () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (audioControls) audioControls.hidden = true;
    setStatus('Reading stopped.');
  });

  function openPanel() {
    lastFocus = document.activeElement;
    panel.setAttribute('data-open', 'true');
    launcher.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
  }

  function closePanel() {
    panel.setAttribute('data-open', 'false');
    launcher.setAttribute('aria-expanded', 'false');
    if (recognition && isRecording) recognition.stop();
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    if (audioControls) audioControls.hidden = true;
    (lastFocus || launcher).focus();
  }

  launcher.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && panel.getAttribute('data-open') === 'true') closePanel();
  });

  addMessage('assistant', 'Welcome. I can help with Voice of Disability, membership, programmes, resources, disability rights, accessibility and advocacy. Choose one of South Africa’s 11 languages, or use auto-detect.', { listen: false });

  form.addEventListener('submit', async event => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) return;

    addMessage('user', message);
    input.value = '';
    input.disabled = true;
    form.querySelector('.vod-chat__send').disabled = true;
    setStatus('Preparing a response…');

    const pageContext = [
      document.title,
      ...Array.from(document.querySelectorAll('main h1, main h2, main h3, main p, main li'))
        .slice(0, 80)
        .map(el => el.textContent.trim())
        .filter(Boolean)
    ].join('\n').slice(0, 6000);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          language: language.value,
          pageContext,
          history: history.slice(-10)
        })
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.error || 'Chat service unavailable');
      addMessage('assistant', data.reply);
      history.push({ role: 'user', content: message }, { role: 'assistant', content: data.reply });
      history = history.slice(-10);
      setStatus('Response ready.');
    } catch (error) {
      addMessage('assistant', error.message || 'I could not answer that just now. Please use the Contact section for help.', { listen: false });
      setStatus('The chatbot could not complete that request.');
    } finally {
      input.disabled = false;
      form.querySelector('.vod-chat__send').disabled = false;
      input.focus();
    }
  });

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    speakBtn.hidden = true;
    setStatus('Voice input is not available in this browser. You can use the chatbot fully by typing.');
  } else {
    speakBtn.addEventListener('click', () => {
      if (isRecording) return;
      recognition = new SpeechRecognition();
      recognition.lang = getLocale();
      recognition.interimResults = true;
      recognition.continuous = false;
      recognition.maxAlternatives = 1;
      let transcript = '';

      recognition.onstart = () => {
        isRecording = true;
        speakBtn.hidden = true;
        stopBtn.hidden = false;
        setStatus('Recording. Speak now. Nothing will be sent until you review the transcript and press Send.');
      };
      recognition.onresult = event => {
        transcript = Array.from(event.results).map(result => result[0].transcript).join(' ');
        input.value = transcript;
      };
      recognition.onerror = () => setStatus('I could not capture that speech. You can try again or type your message.');
      recognition.onend = () => {
        isRecording = false;
        speakBtn.hidden = false;
        stopBtn.hidden = true;
        if (input.value.trim()) setStatus('Transcript ready. Review or edit it, then press Send.');
      };
      recognition.start();
    });

    stopBtn.addEventListener('click', () => {
      if (recognition && isRecording) recognition.stop();
    });
  }
})();
