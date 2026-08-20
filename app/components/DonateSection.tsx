'use client';

import { useState, useRef, useId } from 'react';

const PRESET_AMOUNTS = ['100', '250', '500'];
type Status = 'idle' | 'submitting' | 'error';

export default function DonateSection() {
  const [selected, setSelected]   = useState('250');
  const [custom, setCustom]       = useState('');
  const [status, setStatus]       = useState<Status>('idle');
  const [errMsg, setErrMsg]       = useState('');
  const nameRef    = useRef<HTMLInputElement>(null);
  const emailRef   = useRef<HTMLInputElement>(null);
  const customRef  = useRef<HTMLInputElement>(null);
  const statusRef  = useRef<HTMLDivElement>(null);
  const customId   = useId();

  const amount = selected === 'Other' ? custom : selected;

  async function handleDonate() {
    setStatus('submitting');
    setErrMsg('');

    const name  = nameRef.current?.value.trim()  ?? '';
    const email = emailRef.current?.value.trim()  ?? '';
    const amtNum = parseFloat(amount);

    if (isNaN(amtNum) || amtNum < 5) {
      setErrMsg('Please enter an amount of at least R5.');
      setStatus('error');
      setTimeout(() => statusRef.current?.focus(), 100);
      return;
    }

    try {
      const res  = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: amtNum.toFixed(2), name, email }),
      });
      const json = await res.json();

      if (!res.ok || json.error) {
        setErrMsg(json.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        setTimeout(() => statusRef.current?.focus(), 100);
        return;
      }

      // Build and submit PayFast form
      const { payFastUrl, fields } = json as {
        payFastUrl: string;
        fields: Record<string, string>;
      };

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = payFastUrl;
      // Open in same window so the return/cancel URL brings them back
      for (const [key, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type  = 'hidden';
        input.name  = key;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
      // Don't reset status — page will navigate away
    } catch {
      setErrMsg('Could not connect. Please check your internet connection and try again.');
      setStatus('error');
      setTimeout(() => statusRef.current?.focus(), 100);
    }
  }

  return (
    <div>
      {/* Error live region */}
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
              background: 'rgba(255,100,100,0.15)',
              border: '1px solid rgba(255,100,100,0.5)',
              borderRadius: '6px',
              padding: '0.75rem 1rem',
              marginBottom: '1rem',
              color: '#ffd5d5',
              fontSize: '0.9rem',
            }}
          >
            {errMsg}
          </p>
        )}
      </div>

      <p
        style={{
          color: 'rgba(255,255,255,0.7)',
          marginBottom: '0.75rem',
          fontSize: '0.9rem',
        }}
      >
        Choose an amount (ZAR)
      </p>

      {/* Amount selector */}
      <div
        className="donate-amounts"
        role="group"
        aria-label="Donation amount options"
        style={{ marginBottom: selected === 'Other' ? '0.75rem' : '1rem' }}
      >
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            type="button"
            onClick={() => { setSelected(amt); setCustom(''); }}
            aria-pressed={selected === amt}
            style={
              selected === amt
                ? { background: 'var(--gold)', color: '#1A0A2E', fontWeight: 700 }
                : {}
            }
          >
            R{amt}
          </button>
        ))}
        <button
          type="button"
          onClick={() => { setSelected('Other'); setTimeout(() => customRef.current?.focus(), 50); }}
          aria-pressed={selected === 'Other'}
          style={
            selected === 'Other'
              ? { background: 'var(--gold)', color: '#1A0A2E', fontWeight: 700 }
              : {}
          }
        >
          Other
        </button>
      </div>

      {/* Custom amount input — shown only when 'Other' is selected */}
      {selected === 'Other' && (
        <div className="form-group" style={{ marginBottom: '1rem' }}>
          <label
            htmlFor={customId}
            style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem' }}
          >
            Enter amount (ZAR) <span aria-hidden="true">*</span>
          </label>
          <input
            ref={customRef}
            id={customId}
            type="number"
            min="5"
            step="1"
            placeholder="e.g. 150"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            aria-required="true"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: '#fff',
            }}
          />
        </div>
      )}

      <div className="form-group" style={{ marginBottom: '1rem' }}>
        <label htmlFor="donate-name" className="sr-only">
          Your name (optional)
        </label>
        <input
          ref={nameRef}
          type="text"
          id="donate-name"
          placeholder="Your name (optional)"
          autoComplete="name"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            color: '#fff',
          }}
        />
      </div>

      <div className="form-group" style={{ marginBottom: '1.25rem' }}>
        <label htmlFor="donate-email" className="sr-only">
          Your email (optional — for your receipt)
        </label>
        <input
          ref={emailRef}
          type="email"
          id="donate-email"
          placeholder="Your email — for your receipt (optional)"
          autoComplete="email"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.3)',
            color: '#fff',
          }}
        />
      </div>

      <button
        type="button"
        className="btn btn-gold"
        style={{ width: '100%', justifyContent: 'center' }}
        onClick={handleDonate}
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting'
          ? 'Redirecting to PayFast…'
          : `Donate R${selected === 'Other' ? (custom || '—') : selected} securely`}
      </button>

      <p
        style={{
          marginTop: '0.75rem',
          fontSize: '0.8rem',
          color: 'rgba(255,255,255,0.5)',
          textAlign: 'center',
        }}
      >
        Secured by PayFast · South African payment processor
      </p>
    </div>
  );
}
