'use client';

import { useEffect, useRef, useState } from 'react';
import FormBotProtection from './FormBotProtection';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm({ resourceRequest = false, volunteerInterest = false }: { resourceRequest?: boolean; volunteerInterest?: boolean }) {
  const [status, setStatus] = useState<Status>('idle');
  const [errMsg, setErrMsg] = useState('');
  const [ackSent, setAckSent] = useState(false);
  const [startedAt] = useState(() => Date.now());
  const statusRef = useRef<HTMLDivElement>(null);
  const securityReady = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

  useEffect(() => {
    if (status === 'success' || (status === 'error' && errMsg)) {
      const announcement = statusRef.current;
      if (!announcement) return;
      announcement.scrollIntoView({ block: 'center', behavior: 'auto' });
      announcement.focus({ preventScroll: true });
    }
  }, [status, errMsg]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrMsg('');
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get('name') ?? '').trim(),
      email: String(form.get('email') ?? '').trim(),
      subject: String(form.get('subject') ?? '').trim(),
      message: String(form.get('message') ?? '').trim(),
      website: String(form.get('website') ?? ''),
      startedAt: Number(form.get('startedAt')),
      turnstileToken: String(form.get('cf-turnstile-response') ?? ''),
    };

    try {
      const res = await fetch(volunteerInterest ? '/api/volunteer' : '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || json.error) {
        setErrMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setAckSent(Boolean(json.emailSent));
        setStatus('success');
      }
    } catch {
      setErrMsg('Could not connect. Please check your internet connection and try again.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div ref={statusRef} role="status" aria-live="polite" aria-atomic="true" tabIndex={-1} style={{ padding: '2rem', background: '#E8EEF3', color: '#17324D', border: '3px solid #17324D', borderRadius: '12px', textAlign: 'left', scrollMarginTop: '7rem' }}>
        <h3 style={{ color: '#17324D', marginBottom: '0.5rem' }}>{volunteerInterest ? 'Volunteer interest sent successfully' : 'Message sent successfully'}</h3>
        <p style={{ margin: 0 }}>{volunteerInterest ? (ackSent ? 'Thank you. Your volunteer interest was recorded and an acknowledgement email was requested. You do not need to submit again. An assignment is not guaranteed.' : 'Thank you. Your volunteer interest was recorded, but an acknowledgement email could not be confirmed. Please do not submit again. An assignment is not guaranteed.') : 'Thank you. Your message was sent successfully. You do not need to submit it again.'}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-label={volunteerInterest ? "Volunteer interest form" : resourceRequest ? "Request or suggest a resource" : "Contact form"} noValidate>
      <div ref={statusRef} role="alert" aria-live="assertive" aria-atomic="true" tabIndex={-1} style={{ outline: 'none' }}>
        {status === 'error' && errMsg && <p style={{ background: '#fff0f0', border: '1px solid #c00', borderRadius: '6px', padding: '0.75rem 1rem', marginBottom: '1rem', color: '#900', fontSize: '0.9rem' }}>{errMsg}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="c-name">Full name <span aria-hidden="true">*</span></label>
        <input type="text" id="c-name" name="name" autoComplete="name" required aria-required="true" maxLength={100} placeholder="Your full name" disabled={status === 'submitting'} />
      </div>
      <div className="form-group">
        <label htmlFor="c-email">Email <span aria-hidden="true">*</span></label>
        <input type="email" id="c-email" name="email" autoComplete="email" required aria-required="true" maxLength={254} placeholder="your@email.com" disabled={status === 'submitting'} />
      </div>
      <div className="form-group">
        <label htmlFor="c-subject">Subject</label>
        <input type="text" id="c-subject" name="subject" maxLength={140} defaultValue={volunteerInterest ? "Volunteer interest" : resourceRequest ? "Resource request or suggestion" : ""} placeholder="What is this about?" disabled={status === 'submitting'} />
      </div>
      <div className="form-group">
        <label htmlFor="c-message">{volunteerInterest ? "How would you like to volunteer?" : resourceRequest ? "What resource would help you?" : "Message"} <span aria-hidden="true">*</span></label>
        <textarea id="c-message" name="message" rows={5} required aria-required="true" maxLength={5000} placeholder={volunteerInterest ? "Tell us which activities interest you (rights clinics, advocacy, training, resources or other support), relevant experience, preferred way to contribute and any access arrangements you would like us to discuss. Please avoid sensitive details." : resourceRequest ? "Describe the guide, template or information you would like, and any accessible format you prefer. Please do not include sensitive personal details." : "Your message…"} disabled={status === 'submitting'} />
      </div>

      {volunteerInterest ? (
        <>
          <input type="hidden" name="startedAt" value={startedAt} />
          <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
            <label htmlFor="volunteer-website">Leave this field empty</label>
            <input type="text" id="volunteer-website" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <p style={{ fontSize: '0.9rem' }}>Your volunteer interest is protected by automated spam checks. We will acknowledge your message by email where possible.</p>
        </>
      ) : <FormBotProtection idPrefix="contact" />}

      <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'submitting' || (!volunteerInterest && !securityReady)} aria-busy={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : volunteerInterest ? 'Send volunteer interest' : resourceRequest ? 'Send resource suggestion' : 'Send message'}
      </button>
    </form>
  );
}
