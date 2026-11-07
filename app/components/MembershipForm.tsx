'use client';

import { useRef, useState } from 'react';


type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function MembershipForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const statusRef = useRef<HTMLDivElement>(null);
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');

    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') ?? '').trim(),
      email: String(form.get('email') ?? '').trim(),
      phone: String(form.get('phone') ?? '').trim(),
      website: String(form.get('website') ?? ''),
      startedAt: Number(form.get('startedAt')),
      turnstileToken: String(form.get('cf-turnstile-response') ?? ''),
    };

    try {
      const res = await fetch('/api/membership', {
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
      <div ref={statusRef} role="status" aria-live="polite" tabIndex={-1} className="membership-success" style={{ outline: 'none' }}>
        <h3 style={{ color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>Check your email to confirm membership</h3>
        <p>Your request has been submitted. Please open the confirmation link sent to your email address to activate membership and resource access.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label="Membership sign-up form" noValidate>
      <div ref={statusRef} role="alert" aria-live="assertive" aria-atomic="true" tabIndex={-1} style={{ outline: 'none' }}>
        {status === 'error' && errMsg && <p className="form-error-banner" style={{ background: '#fff0f0', border: '1px solid #c00', borderRadius: '6px', padding: '0.75rem 1rem', marginBottom: '1rem', color: '#900', fontSize: '0.9rem' }}>{errMsg}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="m-name">Full name <span aria-hidden="true">*</span></label>
        <input type="text" id="m-name" name="name" autoComplete="name" required aria-required="true" maxLength={100} placeholder="Your full name" disabled={status === 'submitting'} />
      </div>
      <div className="form-group">
        <label htmlFor="m-email">Email <span aria-hidden="true">*</span></label>
        <input type="email" id="m-email" name="email" autoComplete="email" required aria-required="true" maxLength={254} placeholder="your@email.com" disabled={status === 'submitting'} />
      </div>
      <div className="form-group">
        <label htmlFor="m-phone">Phone (optional)</label>
        <input type="tel" id="m-phone" name="phone" autoComplete="tel" maxLength={40} placeholder="+27 …" disabled={status === 'submitting'} />
      </div>

      <input type="hidden" name="startedAt" value={startedAt} />
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="membership-hp">Leave this field empty</label>
        <input id="membership-hp" type="text" name="website" autoComplete="off" tabIndex={-1} />
      </div>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>To protect your membership, we will email you a confirmation link. Your membership is not active until you confirm it. If the form is unavailable, email <a href="mailto:fadila@voiceofdisability.com?subject=Membership%20enquiry">fadila@voiceofdisability.com</a>.</p>

      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }} disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Join the movement — it’s free'}
      </button>
    </form>
  );
}
