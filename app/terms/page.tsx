import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Terms of Use' };

export default function Terms() {
  return (
    <>
      <section className="page-hero" aria-labelledby="terms-h">
        <div className="container">
          <h1 id="terms-h">Terms of Use</h1>
          <p>The terms and conditions for using the Voice of Disability website.</p>
        </div>
      </section>
      <div className="prose">
        <Link href="/" className="back-link">← Back to homepage</Link>
        <p>By accessing and using this website, you agree to the following terms of use.</p>
        <h2>Use of content</h2>
        <p>All content on this website — including text, images, and graphics — is the property of
          Voice of Disability NPC unless otherwise stated. You may share our content for
          non-commercial purposes with attribution. You may not reproduce content for commercial
          purposes without our written permission.</p>
        <h2>Membership</h2>
        <p>Membership in Voice of Disability NPC is free and voluntary. We reserve the right to
          remove members who act contrary to our values or community guidelines.</p>
        <h2>Donations</h2>
        <p>Donations are voluntary gifts to Voice of Disability NPC, a registered non-profit
          organisation. Please review our <Link href="/refund-policy">Refund Policy</Link> for
          information about donation refunds.</p>
        <h2>Disclaimer</h2>
        <p>Information on this website is provided for general guidance only and does not constitute
          legal advice. For legal advice specific to your situation, please consult a qualified
          professional.</p>
        <h2>Changes to these terms</h2>
        <p>We may update these terms from time to time. Continued use of the website after any
          changes constitutes acceptance of the new terms.</p>
        <h2>Contact</h2>
        <p>Questions? Email <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>.</p>
        <p><em>Last updated: August 2026</em></p>
      </div>
    </>
  );
}
