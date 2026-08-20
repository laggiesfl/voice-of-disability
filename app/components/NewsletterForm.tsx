'use client';

import { useState, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const emailRef  = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');

    const email = emailRef.current?.value.trim() ?? '';

    try {
      const res  = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
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
      <div
        role="status"
        aria-live="polite"
        style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}
      >
        <span style={{ fontSize: '1.25rem' }} aria-hidden="true">✓</span>
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--purple-deep)' }}>
          You're subscribed — check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter sign-up" noValidate>
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        ref={emailRef}
        type="email"
        id="nl-email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        required
        aria-required="true"
        aria-describedby={errMsg ? 'nl-error' : undefined}
        disabled={status === 'submitting'}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
      </button>

      {/* Error message — visible and announced to screen readers */}
      <span
        ref={statusRef}
        id="nl-error"
        role="alert"
        aria-live="assertive"
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        {status === 'error' && errMsg && (
          <span
            style={{
              display: 'block',
              marginTop: '0.5rem',
              color: '#c00',
              fontSize: '0.85rem',
              width: '100%',
            }}
          >
            {errMsg}
          </span>
        )}
      </span>
    </form>
  );
}
