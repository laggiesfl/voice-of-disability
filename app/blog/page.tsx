import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — Voices & Views',
  description:
    'Perspectives from the Voice of Disability movement — on disability rights, access, AI, policy, and the lived experience of disabled women.',
};

export default function Blog() {
  return (
    <>
      <section className="page-hero" aria-labelledby="blog-h">
        <div className="container">
          <p className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Blog</p>
          <h1 id="blog-h">Voices &amp; views</h1>
          <p>
            Perspectives from the movement — on disability rights, access, AI, policy,
            and the lived experience of disabled women in South Africa and beyond.
          </p>
        </div>
      </section>

      <div style={{padding: '4rem 0', background: 'var(--white)'}}>
        <div className="container">
          <Link href="/" className="back-link" style={{marginBottom: '2rem', display: 'inline-flex'}}>← Back to homepage</Link>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability inclusion</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/south-africa-china-disability-inclusion" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    South Africa and China Deepen Cooperation on Disability Inclusion
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  South Africa and China are exploring deeper cooperation on disability data, Universal Design,
                  accessible communication, AI and assistive technology. Voice of Disability looks at what is
                  being proposed — and why implementation and accountability will matter.
                </p>
                <Link href="/blog/south-africa-china-disability-inclusion">Read more →</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC · August 2026
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Advocacy</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/our-position" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    The Door That Would Not Open — Now It Is an Algorithm
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  Forty years ago, I was left in a corridor. The exclusion I experienced then is being
                  rebuilt in digital systems South Africa is deploying right now — at its borders and
                  in its identity infrastructure.
                </p>
                <Link href="/our-position">Read more →</Link>
                <div className="blog-card-meta">
                  By Fadila Lagadien · Founder, Voice of Disability NPC
                </div>
              </div>
            </article>
          </div>

          <p style={{marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.95rem'}}>
            <Link href="/#membership">Become a member</Link> to get notified when new posts are published.
          </p>
        </div>
      </div>
    </>
  );
}
