import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function Privacy() {
  return (
    <>
      <section className="page-hero" aria-labelledby="priv-h">
        <div className="container">
          <h1 id="priv-h">Privacy Policy</h1>
          <p>How Voice of Disability NPC collects, uses, and protects your information.</p>
        </div>
      </section>
      <div className="prose">
        <Link href="/" className="back-link">← Back to homepage</Link>
        <p>Voice of Disability NPC (&ldquo;oe&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy.
          This policy explains how we handle your personal information.</p>
        <h2>What we collect</h2>
        <p>We collect information you give us directly — such as your name, email address and phone
          number when you become a member, make a donation, or contact us. We may also collect
          information about how you use our website.</p>
        <h2>How we use your information</h2>
        <p>We use your information to: send you updates and newsletters you have opted into; process
          donations; invite you to programmes and events; respond to your enquiries; and improve
          our website and services.</p>
        <h2>Sharing your information</h2>
        <p>We do not sell or share your personal information with third parties for marketing purposes.
          We may share information with service providers who help us run our operations (such as
          email platforms), under strict confidentiality agreements.</p>
        <h2>Your rights</h2>
        <p>Under South Africa&rsquo;s Protection of Personal Information Act (POPIA), you have the right
          to access, correct, or request deletion of your personal information. To exercise these
          rights, contact us at <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>.</p>
        <h2>Data security</h2>
        <p>We take reasonable steps to protect your personal information. However, no method of
          internet transmission is 100% secure.</p>
        <h2>Contact</h2>
        <p>Questions about this policy? Email <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>.</p>
        <p><em>Last updated: August 2026</em></p>
      </div>
    </>
  );
}
