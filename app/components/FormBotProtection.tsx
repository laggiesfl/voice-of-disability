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
      {siteKey ? (
        <div
          className="cf-turnstile"
          data-sitekey={siteKey}
          data-theme="light"
          data-size="flexible"
          data-appearance="interaction-only"
          aria-label="Security verification"
        />
      ) : (
        <p role="status" style={{ fontSize: '0.9rem' }}>
          Online form security is being configured. Please email fadila@voiceofdisability.com for assistance.
        </p>
      )}
    </>
  );
}
