'use client';

import Script from 'next/script';
import { useState } from 'react';

type Props = { idPrefix: string };

export default function FormBotProtection({ idPrefix }: Props) {
  const [startedAt] = useState(() => Date.now());
  const [scriptFailed, setScriptFailed] = useState(false);
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  const honeypotId = `${idPrefix}-website-field`;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" onError={() => setScriptFailed(true)} />
      <input type="hidden" name="startedAt" value={startedAt} />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id={`${idPrefix}-security-instructions`} style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Security verification: if a checkbox appears below, complete it before submitting. If verification is unavailable, do not repeatedly submit the form. Contact us by email instead.</p>
      {scriptFailed && <p role="alert" style={{ color: "#8A1F1F", fontWeight: 600 }}>Security verification did not load. Please email fadila@voiceofdisability.com to request assistance with membership.</p>}
      {siteKey ? (
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-theme="light"
          data-size="flexible"
          data-appearance="always"
          aria-label="Security verification"
          aria-describedby={`${idPrefix}-security-instructions`}

        />
      ) : (
        <p role="status" style={{ fontSize: '0.9rem' }}>
          Online form security is being configured. Please email fadila@voiceofdisability.com for assistance.
        </p>
      )}
    </>
  );
}
