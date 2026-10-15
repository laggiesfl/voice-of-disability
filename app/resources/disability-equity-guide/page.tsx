import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disability Equity Guide — Member Resource',
  description:
    'Use the Disability Equity Guide GPT temporarily while a permanent accessible resource is prepared.',
};

export default function DisabilityEquityGuideResource() {
  return (
    <>
      <section className="page-hero" aria-labelledby="resource-h">
        <div className="container">
          <p className="byline">Member resource · AI assistant · GPT</p>
          <h1 id="resource-h">Disability Equity Guide</h1>
          <p>
            An AI guide to help explore disability equity, inclusion, accessibility and rights-based practice.
          </p>
        </div>
      </section>

      <section style={{padding: '4rem 0', background: 'var(--white)'}} aria-labelledby="launch-h">
        <div className="container" style={{maxWidth: 760}}>
          <Link href="/resources" className="back-link">
            ← Back to Resources
          </Link>

          <nav aria-label="Resource navigation" style={{display:'flex',flexWrap:'wrap',gap:'1rem',margin:'0.5rem 0 1.5rem'}}>
            <Link href="/resources" className="btn btn-outline">← Previous: Resource library</Link>
            <Link href="/" className="btn btn-outline">Return to homepage</Link>
          </nav>
          <h2 id="launch-h" style={{marginTop: '1rem'}}>Open the Disability Equity Guide</h2>
          <p>
            This GPT remains available until its scheduled retirement on 11 December 2026, subject to OpenAI's applicable account notices. Migration does not automatically make the replacement plugin available to website visitors. We are preparing an independent, accessible resource to replace this link.
          </p>
          <p>
            The guide opens in ChatGPT in a new browser tab. This Voice of Disability page stays open so you can return to the resource library at any time.
          </p>

          <p>
            <a
              href="https://chatgpt.com/g/g-69ff2ea6ed4c819183da45735fff7b07-disability-equity-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-describedby="new-tab-note"
            >
              Open Disability Equity Guide
            </a>
          </p>

          <p id="new-tab-note" style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>
            Opens in a new tab. Close that tab or switch back to return to Voice of Disability.
          </p>
          <p><Link href="/resources" className="btn btn-outline">← Back to Resource library</Link></p>
        </div>
      </section>
    </>
  );
}
