'use client';

import Script from 'next/script';
import { useState } from 'react';

type Props = { idPrefix: string };

export default function FormBotProtection({ idPrefix }: Props) {
  const [startedAt] = useState(() => Date.now());
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';
  const honeypotId = `${idPrefix}-website-field`;

  return (
    <>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      <input type="hidden" name="startedAt" value={startedAt} />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}
      >
        <label htmlFor={honeypotId}>Leave this field empty</label>
        <input id={honeypotId} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id={`${idPrefix}-security-instructions`} style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>Security verification: if a checkbox appears below, complete it before submitting. If verification does not load, disable browser content blocking for this site or contact us by email.</p>
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
