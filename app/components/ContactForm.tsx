'use client';

import { useState, useRef } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const msgRef     = useRef<HTMLTextAreaElement>(null);
  const statusRef  = useRef<HTMLDivElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');

    const name    = nameRef.current?.value.trim()    ?? '';
    const email   = emailRef.current?.value.trim()   ?? '';
    const subject = subjectRef.current?.value.trim() ?? '';
    const message = msgRef.current?.value.trim()     ?? '';

    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
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
        ref={statusRef}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        style={{
          outline: 'none',
          padding: '2rem',
          background: '#f8f4ff',
          border: '2px solid var(--purple-deep)',
          borderRadius: '12px',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }} aria-hidden="true">✓</p>
        <h3 style={{ color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>Message sent!</h3>
        <p style={{ margin: 0 }}>
          Thank you for getting in touch. We'll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Contact form"
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
        <label htmlFor="c-name">
          Full name <span aria-hidden="true">*</span>
        </label>
        <input
          ref={nameRef}
          type="text"
          id="c-name"
          name="name"
          autoComplete="name"
          required
          aria-required="true"
          placeholder="Your full name"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="c-email">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          ref={emailRef}
          type="email"
          id="c-email"
          name="email"
          autoComplete="email"
          required
          aria-required="true"
          placeholder="your@email.com"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="c-subject">Subject</label>
        <input
          ref={subjectRef}
          type="text"
          id="c-subject"
          name="subject"
          placeholder="What is this about?"
          disabled={status === 'submitting'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="c-message">
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          ref={msgRef}
          id="c-message"
          name="message"
          rows={5}
          required
          aria-required="true"
          placeholder="Your message…"
          disabled={status === 'submitting'}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', justifyContent: 'center' }}
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
