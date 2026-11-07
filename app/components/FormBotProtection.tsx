'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef, useState } from 'react';

type Props = { idPrefix: string };
type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  remove: (widgetId: string) => void;
};
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export default function FormBotProtection({ idPrefix }: Props) {
  const [startedAt] = useState(() => Date.now());
  const [scriptFailed, setScriptFailed] = useState(false);
  const [verificationProblem, setVerificationProblem] = useState('');
  const [verified, setVerified] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  const honeypotId = `${idPrefix}-website-field`;

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetId.current) return;
    try {
      widgetId.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        size: 'flexible',
        appearance: 'always',
        'response-field': false,
        callback: (token: string) => {
          const input = containerRef.current?.closest('form')?.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]');
          if (input) input.value = token;
          setVerified(true);
          setVerificationProblem('');
        },
        'expired-callback': () => {
          const input = containerRef.current?.closest('form')?.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]');
          if (input) input.value = '';
          setVerified(false);
          setVerificationProblem('The security check has expired. Please complete it again before submitting.');
        },
        'error-callback': () => {
          const input = containerRef.current?.closest('form')?.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]');
          if (input) input.value = '';
          setVerified(false);
          setVerificationProblem('The security check could not be completed. Please use the email option below if it remains unavailable.');
          return true;
        },
      });
    } catch {
      setVerificationProblem('Security verification could not load. Please use the email option below.');
    }
  }, [siteKey]);

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetId.current && window.turnstile) {
        try { window.turnstile.remove(widgetId.current); } catch { /* Widget may already be removed. */ }
        widgetId.current = null;
      }
    };
  }, [renderWidget]);

  return (
    <>
      {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={renderWidget} onError={() => setScriptFailed(true)} />}
      <input type="hidden" name="startedAt" value={startedAt} />
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id={`${idPrefix}-security-instructions`} style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
        Security verification must complete before submitting. If it does not appear, you can contact us by email instead.
      </p>
      <input type="hidden" name="cf-turnstile-response" defaultValue="" />
      {siteKey && <div ref={containerRef} aria-describedby={`${idPrefix}-security-instructions`} style={{ minHeight: '65px', maxWidth: '100%' }} />}
      {verified && <p role="status">Security check completed. You can now submit the form.</p>}
      {(scriptFailed || verificationProblem || !siteKey) && (
        <p role="alert" style={{ color: '#8A1F1F', fontWeight: 600 }}>
          {verificationProblem || 'Online security verification is unavailable. Your form has not been submitted. Please email fadila@voiceofdisability.com instead.'}
        </p>
      )}
    </>
  );
}
