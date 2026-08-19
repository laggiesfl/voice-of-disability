import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Refund Policy' };

export default function RefundPolicy() {
  return (
    <>
      <section className="page-hero" aria-labelledby="ref-h">
        <div className="container">
          <h1 id="ref-h">Refund Policy</h1>
          <p>Voice of Disability NPC&rsquo;s policy on donations and refunds.</p>
        </div>
      </section>
      <div className="prose">
        <Link href="/" className="back-link">← Back to homepage</Link>
        <p>Voice of Disability NPC is a registered non-profit organisation. We are grateful for
          every donation we receive.</p>
        <h2>Donation refunds</h2>
        <p>If you believe a donation was made in error — for example, due to a duplicate charge
          or an incorrect amount — please contact us within 14 days of the transaction at
          <a href="mailto:fadila@voiceofdisability.com"> fadila@voiceofdisability.com</a> and
          we will review your request.</p>
        <p>We are unable to refund donations made more than 14 days prior to your request,
          or donations that have already been allocated to programme costs.</p>
        <h2>Programme fees</h2>
        <p>Where programmes carry a participation fee, refund terms will be stated clearly
          at the time of registration.</p>
        <h2>Questions</h2>
        <p>Contact us at <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>
          — we are always happy to help.</p>
        <p><em>Last updated: August 2026</em></p>
      </div>
    </>
  );
}
