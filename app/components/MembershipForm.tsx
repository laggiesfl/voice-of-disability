'use client';

import { useState, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MembershipForm() {
  const [status, setStatus]   = useState<Status>('idle');
  const [errMsg, setErrMsg]   = useState('');
  const nameRef  = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');

    const name  = nameRef.current?.value.trim()  ?? '';
    const email = emailRef.current?.value.trim()  ?? '';
    const phone = phoneRef.current?.value.trim()  ?? '';

    try {
      const res  = await fetch('/api/membership', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
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

    // Move focus to the live region so screen readers announce the result
    setTimeout(() => statusRef.current?.focus(), 100);
  }

  if (status === 'success') {
    return (
      <div
        ref={statusRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        className="membership-success"
        style={{ outline: 'none' }}
      >
        <p style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎉</p>
        <h3 style={{ color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>Welcome to Voice of Disability!</h3>
        <p>You'll receive a welcome email shortly. We're glad you're here.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Membership sign-up form"
      noValidate
    >
      {/* Live region for errors */}
      <div
        ref={statusRef}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        {status === 'error' && errMsg && (
          <p
            className="form-error-banner"
            style={{
              background: '#fff0f0',
              border: '1px solid #c00',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '1rem',
              color: '#c00',
              fontSize: '0.9rem',
            }}
          >
            {errMsg}
          </p>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="m-name">
          Full name <span aria-hidden="true">*</span>
        </label>
        <input
          ref={nameRef}
          type="text"
          id="m-name"
          name="name"
          autoComplete="name"
          required
          aria-required="true"
          placeholder="Your full name"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="m-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          ref={emailRef}
          type="email"
          id="m-email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          placeholder="your@email.com"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="m-phone">Phone (optional)</label>
        <input
          ref={phoneRef}
          type="tel"
          id="m-phone"
          name="phone"
          autoComplete="tel"
          placeholder="+27 …"
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Join the movement — it’s free'}
      </button>
    </form>
  );
}
