'use client';

import { useRef, useState } from 'react';


type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const statusRef = useRef<HTMLSpanElement>(null);
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');
    const form = new FormData(e.currentTarget);
    const payload = {
      email: String(form.get('email') ?? '').trim(),
      website: String(form.get('website') ?? ''),
      startedAt: Number(form.get('startedAt')),
      turnstileToken: String(form.get('cf-turnstile-response') ?? ''),
    };

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        setErrMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrMsg('Could not connect. Please check your internet connection and try again.');
      setStatus('error');
    }
    setTimeout(() => statusRef.current?.focus(), 100);
  }

  if (status === 'success') {
    return (
      <div role="status" aria-live="polite">
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--purple-deep)' }}>
          Check your inbox and confirm your subscription before you are added to the mailing list.
        </p>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter sign-up" noValidate>
      <label htmlFor="nl-email" className="sr-only">Email address</label>
      <input type="email" id="nl-email" name="email" placeholder="your@email.com" autoComplete="email" required aria-required="true" maxLength={254} aria-describedby={errMsg ? 'nl-error' : undefined} disabled={status === 'submitting'} />
      <input type="hidden" name="startedAt" value={startedAt} />
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="newsletter-hp">Leave this field empty</label>
        <input id="newsletter-hp" name="website" type="text" autoComplete="off" tabIndex={-1} />
      </div>
      <p className="newsletter-help">A confirmation link will be sent to your email address. You will not be subscribed until you confirm. For help, email <a href="mailto:fadila@voiceofdisability.com?subject=Newsletter%20enquiry">fadila@voiceofdisability.com</a>.</p>
      <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>
      <span ref={statusRef} id="nl-error" role="alert" aria-live="assertive" tabIndex={-1} style={{ outline: 'none' }}>
        {status === 'error' && errMsg && <span style={{ display: 'block', marginTop: '0.5rem', color: '#900', fontSize: '0.85rem', width: '100%' }}>{errMsg}</span>}
      </span>
    </form>
  );
}
