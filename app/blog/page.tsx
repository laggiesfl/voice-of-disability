import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog Ã¢ÂÂ Voices & Views',
  description:
    'Perspectives from the Voice of Disability movement Ã¢ÂÂ on disability rights, access, AI, policy, and the lived experience of disabled women.',
};

export default function Blog() {
  return (
    <>
      <section className="page-hero" aria-labelledby="blog-h">
        <div className="container">
          <p className="section-label" style={{color: 'rgba(255,255,255,0.7)'}}>Blog</p>
          <h1 id="blog-h">Voices &amp; views</h1>
          <p>
            Perspectives from the movement Ã¢ÂÂ on disability rights, access, AI, policy,
            and the lived experience of disabled women in South Africa and beyond.
          </p>
        </div>
      </section>

      <div style={{padding: '4rem 0', background: 'var(--white)'}}>
        <div className="container">
          <Link href="/" className="back-link" style={{marginBottom: '2rem', display: 'inline-flex'}}>Ã¢ÂÂ Back to homepage</Link>

          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/disability-rights-bill-two-years-on" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    Two Years On, South Africa Still Has No Disability Rights Act
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  South Africa has signed the promises. What it still has not done is pass the law that makes those promises enforceable.
                </p>
                <Link href="/blog/disability-rights-bill-two-years-on">Read more →</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC · 7 October 2026
                </div>
              </div>
            </article>


            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/un-findings-us-ruling-right-to-live-in-community" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    UN Findings and a US Court Ruling Expose a Global Fight Over the Right to Live in Community
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  New UN Committee findings on five countries and a US court ruling stripping community integration protections show how fragile the right to live in community still is, and why South Africa cannot take its own UNCRPD commitments for granted.
                </p>
                <Link href="/blog/un-findings-us-ruling-right-to-live-in-community">Read more â</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC Â· 28 September 2026
                </div>
              </div>
            </article>


            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/deaf-awareness-month-2026-law-reality-gap" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    Deaf Awareness Month Spotlights the Gap Between Law and Lived Reality in South Africa
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  South Africa&apos;s Deaf Awareness Month launch brought renewed government calls for sign language access
                  across public services, but the distance between legal obligation and daily experience for Deaf South Africans remains wide.
                </p>
                <Link href="/blog/deaf-awareness-month-2026-law-reality-gap">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC ÃÂ· 8 September 2026
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/charity-not-enough-south-africa-disability-rights-2026" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    Charity Is Not Enough: South Africa Gets Serious About Disability Rights
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  Two senior South African government voices delivered powerful messages about disability rights this month.
                  Voice of Disability unpacks what they said, why it matters, and what needs to happen next.
                </p>
                <Link href="/blog/charity-not-enough-south-africa-disability-rights-2026">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC ÃÂ· 14 September 2026
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Intersectionality &amp; disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/intersectionality-disability-rights-south-africa" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    Our Lives Are Not Single-Issue: What Intersectional Disability Rights Actually Looks Like in South Africa
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  Disability, gender, race, age and place do not create barriers one at a time. Voice of Disability examines
                  what intersectional disability rights means in practice for disabled women in South Africa.
                </p>
                <Link href="/blog/intersectionality-disability-rights-south-africa">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC ÃÂ· 5 September 2026
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Disability rights</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/blog/uncrpd-global-accountability" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    UNCRPD in Action: Global Accountability
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  Twenty years after the CRPD was adopted, the question is no longer only what governments
                  have promised, but what they can demonstrate has changed. Voice of Disability looks at
                  implementation, representation and accountability.
                </p>
                <Link href="/blog/uncrpd-global-accountability">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC ÃÂ· 24 August 2026
                </div>
              </div>
            </article>

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
                  being proposed Ã¢ÂÂ and why implementation and accountability will matter.
                </p>
                <Link href="/blog/south-africa-china-disability-inclusion">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  Voice of Disability NPC ÃÂ· August 2026
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-body">
                <span className="tag">Advocacy</span>
                <h2 style={{fontSize: '1.1rem', marginBottom: '0.5rem'}}>
                  <Link href="/our-position" style={{color: 'var(--dark)', textDecoration: 'none'}}>
                    The Door That Would Not Open Ã¢ÂÂ Now It Is an Algorithm
                  </Link>
                </h2>
                <p style={{fontSize: '0.9rem', marginBottom: '1rem'}}>
                  Forty years ago, I was left in a corridor. The exclusion I experienced then is being
                  rebuilt in digital systems South Africa is deploying right now Ã¢ÂÂ at its borders and
                  in its identity infrastructure.
                </p>
                <Link href="/our-position">Read more Ã¢ÂÂ</Link>
                <div className="blog-card-meta">
                  By Fadila Lagadien ÃÂ· Founder, Voice of Disability NPC
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