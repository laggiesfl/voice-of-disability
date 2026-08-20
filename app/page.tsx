import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from './components/MembershipForm';
import NewsletterForm from './components/NewsletterForm';
import ContactForm    from './components/ContactForm';
import DonateSection  from './components/DonateSection';

export const metadata: Metadata = {
  title: 'Voice of Disability | Your voice. Your rights. Your community.',
};

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" aria-labelledby="hero-h">
        <div className="container hero-inner">
          <div>
            <p className="section-label">Led by disabled women, in South Africa</p>
            <h1 id="hero-h">
              Your voice. Your rights.<br />
              <span>Your community.</span>
            </h1>
            <p className="hero-desc">
              Voice of Disability is a movement of disabled women making their own voices heard.
              We remove the barriers that disable people — through advocacy, Universal Design,
              and knowing our rights.
            </p>
            <div className="hero-btns">
              <Link href="#membership" className="btn btn-primary">Join the movement</Link>
              <Link href="#programmes" className="btn btn-outline">See our programmes</Link>
            </div>
          </div>

          <div className="hero-card" role="complementary" aria-label="Our mission">
            <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="hcGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="rgba(255,255,255,0.3)"/>
                  <stop offset="1" stopColor="rgba(255,255,255,0.05)"/>
                </linearGradient>
              </defs>
              <path fill="url(#hcGrad)" d="M28 12h64a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20H52l-20 18a3 3 0 0 1-5-2.4V92a20 20 0 0 1-20-20V32A20 20 0 0 1 28 12Z"/>
              <g fill="#fff">
                <rect x="34" y="52" width="8" height="16" rx="4" opacity="0.7"/>
                <rect x="49" y="42" width="8" height="36" rx="4" opacity="0.85"/>
                <rect x="64" y="30" width="8" height="60" rx="4" fill="#FFC24B"/>
                <rect x="79" y="42" width="8" height="36" rx="4" opacity="0.85"/>
                <rect x="94" y="52" width="8" height="16" rx="4" opacity="0.7"/>
              </g>
            </svg>
            <blockquote>&ldquo;Nothing About Us Without Us&rdquo;</blockquote>
            <p>
              Nothing will change for disabled women without them making their own voices heard.
              This platform gives those voices a home.
            </p>
            <Link href="/our-position" className="hero-card-link">Why we exist →</Link>
          </div>
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="about" id="about" aria-labelledby="about-h">
        <div className="container">
          <div className="about-intro">
            <p className="section-label">Who we are</p>
            <h2 id="about-h">Disability is created by barriers — not by people</h2>
            <p>
              Disability is the loss or limitation of opportunities to take part in the normal life
              of the community on an equal level with others, due to physical and social barriers
              (Disabled People&rsquo;s International, 1994).
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>The social model</h3>
              <p>
                A person with a physical impairment in a fully accessible environment is not disabled.
                Barriers — not bodies — create disability. Remove the barrier and you remove the disability.
              </p>
            </div>
            <div className="about-card">
              <h3>Universal Design</h3>
              <p>
                We remove disabling factors through reasonable accommodation and the seven principles of
                Universal Design, so spaces work for everyone.
              </p>
            </div>
            <div className="about-card">
              <h3>Disabled women&rsquo;s leadership</h3>
              <p>
                Disabled women are not a footnote. We lead the conversation about our own lives,
                rights, and futures — because we are the experts on our own experience.
              </p>
            </div>
          </div>

          <div className="belief-block" role="note">
            <blockquote>
              &ldquo;If it is not accessible, it is not equal.&rdquo;
            </blockquote>
            <p>
              Our belief is simple: access is a right, not a privilege. When systems, spaces and
              services are designed for everyone from the start, nobody is left behind. This is
              what Universal Design means in practice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="founder" id="founder" aria-labelledby="founder-h">
        <div className="container">
          <p className="section-label">Why we exist</p>
          <div className="founder-inner">
            <div className="founder-text">
              <h2 id="founder-h">Our Founder</h2>
              <p>
                Voice of Disability NPC was founded in 2010 by Fadila Lagadien — a disabled
                Black woman, quadriplegic wheelchair user, and disability rights advocate of forty years.
              </p>
              <p>
                In 1986, Fadila was left in a hospital corridor through the night after a car accident
                while her white partner received immediate care. Her spinal cord was severed. A specialist
                unit existed but was not available to her under apartheid. She was given seven years to live.
              </p>
              <p>
                She is sixty-seven. She has spent four decades fighting structural discrimination —
                contributing to South Africa&rsquo;s disability legislation, building organisations for disabled
                women, and teaching herself every new technology that could expand what was possible for a
                quadriplegic woman with one working hand.
              </p>
              <p>
                She holds an MBA from the University of Liverpool, which admitted her through Recognition
                of Prior Learning — recognising decades of self-taught expertise that South African
                institutions refused to credit.
              </p>
              <p>
                She is now an AI-Enabled Accessibility and Disability Inclusion Specialist, applying
                AI to make the movement faster, louder, and harder to ignore.
              </p>
              <Link href="/our-position" className="btn btn-primary" style={{marginTop: '1.5rem'}}>
                Read her full statement →
              </Link>
            </div>

            <div>
              <div className="founder-accent">
                <h3>Four decades of impact</h3>
                <div className="stat">40+</div>
                <p>Years of disability rights advocacy</p>
              </div>
              <div className="founder-accent" style={{marginTop: '1.25rem', background: 'var(--light-purple)'}}>
                <h3 style={{color: 'var(--purple-deep)'}}>Voice of Disability NPC</h3>
                <p style={{color: 'var(--text-muted)'}}>
                  A registered non-profit organisation in South Africa. Programmes, rights clinics,
                  and accessible materials — all led by and for disabled women.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programmes ── */}
      <section className="programmes" id="programmes" aria-labelledby="prog-h">
        <div className="container">
          <p className="section-label">Programmes &amp; events</p>
          <h2 id="prog-h">What we do</h2>
          <p style={{maxWidth: 600}}>
            Our programmes are designed by disabled women, for disabled women. Everything we run
            is accessible — from the venue to the format to the language used.
          </p>

          <div className="prog-grid">
            <div className="prog-card">
              <div className="prog-card-icon" aria-hidden="true">⚖️</div>
              <h3>Rights clinics</h3>
              <p>
                Know your rights under South African law, the Employment Equity Act, and the
                UN Convention on the Rights of Persons with Disabilities.
              </p>
            </div>
            <div className="prog-card">
              <div className="prog-card-icon" aria-hidden="true">😙️</div>
              <h3>Voices Circle</h3>
              <p>
                A members-only space for disabled women to connect, share experiences, and
                support each other — held online and in person.
              </p>
            </div>
            <div className="prog-card">
              <div className="prog-card-icon" aria-hidden="true">🖥️</div>
              <h3>Digital access training</h3>
              <p>
                Practical sessions on using assistive technology, navigating accessible digital
                tools, and building digital skills on your own terms.
              </p>
            </div>
            <div className="prog-card">
              <div className="prog-card-icon" aria-hidden="true">📢</div>
              <h3>Advocacy workshops</h3>
              <p>
                Learn how to speak up for yourself in workplaces, healthcare settings, and
                public spaces — and how to hold institutions accountable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section className="resources" id="resources" aria-labelledby="res-h">
        <div className="container">
          <p className="section-label">Resource library</p>
          <h2 id="res-h">Tools for your rights</h2>
          <p style={{maxWidth: 600}}>
            Guides, templates, and tools to help disabled women navigate systems,
            claim their rights, and make their voices heard.
          </p>

          <div className="resource-grid">
            <div className="resource-card">
              <span className="tag">Rights</span>
              <h3>Your rights in the workplace</h3>
              <p>A plain-language guide to reasonable accommodation and the Employment Equity Act.</p>
              <Link href="/#resources">Download guide →</Link>
            </div>
            <div className="resource-card">
              <span className="tag">Universal Design</span>
              <h3>The 7 Principles of Universal Design</h3>
              <p>What Universal Design means, why it matters, and how to apply it.</p>
              <Link href="/#resources">Read more →</Link>
            </div>
            <div className="resource-card">
              <span className="tag">Advocacy</span>
              <h3>How to write a reasonable accommodation request</h3>
              <p>A template letter you can adapt for your workplace or institution.</p>
              <Link href="/#resources">Get template →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="blog-section" id="blog" aria-labelledby="blog-h">
        <div className="container">
          <p className="section-label">Blog</p>
          <h2 id="blog-h">Voices &amp; views</h2>
          <p style={{maxWidth: 600}}>
            Perspectives from the movement — on disability rights, access, AI, policy, and the
            lived experience of disabled women in South Africa and beyond.
          </p>
          <div style={{marginTop: '2rem'}}>
            <Link href="/blog" className="btn btn-primary">Read the blog →</Link>
          </div>
        </div>
      </section>

      {/* ── Membership ── */}
      <section className="membership" id="membership" aria-labelledby="mem-h">
        <div className="container">
          <div className="membership-inner">
            <div>
              <p className="section-label">Join us</p>
              <h2 id="mem-h">Become a member</h2>
              <p>
                Membership is free. Add your voice, get invited to programmes, and help shape
                the movement. We&rsquo;ll only use your details to stay in touch about Voice of Disability.
              </p>
              <ul className="membership-perks" role="list">
                <li>Priority invitations to programmes and the Voices Circle</li>
                <li>Members-only updates and resources</li>
                <li>A community that puts disabled women first</li>
              </ul>
            </div>

            <div className="membership-form-wrap">
              <MembershipForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Donate ── */}
      <section className="donate" id="donate" aria-labelledby="donate-h">
        <div className="container">
          <div className="donate-inner">
            <div>
              <p className="section-label" style={{color: 'var(--gold)'}}>Support the work</p>
              <h2 id="donate-h">Fund a barrier-free future</h2>
              <p>
                Voice of Disability is a registered non-profit. Your gift funds programmes,
                rights clinics and accessible materials for disabled women.
                Every contribution helps a voice be heard.
              </p>
            </div>

            <DonateSection />
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="newsletter" aria-labelledby="nl-h">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2 id="nl-h" style={{fontSize: '1.4rem'}}>Get updates from Voice of Disability</h2>
            <p style={{margin: 0}}>News, events, and resources — straight to your inbox. No spam, ever.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="contact" id="contact" aria-labelledby="contact-h">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info">
              <p className="section-label">Get in touch</p>
              <h2 id="contact-h">Contact us</h2>
              <p>
                Questions, media, partnerships or accessibility requests — we&rsquo;d love to hear from you.
              </p>
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">📍</span>
                <div>
                  <strong>Based in:</strong><br />
                  Cape Town, South Africa
                </div>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-icon" aria-hidden="true">✉️</span>
                <div>
                  <strong>Media, partnerships and advocacy enquiries:</strong><br />
                  <a href="mailto:fadila@voiceofdisability.com">fadila@voiceofdisability.com</a>
                </div>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com/VoiceofDisability" target="_blank" rel="noopener noreferrer" aria-label="Follow Voice of Disability on Facebook">
                  Facebook
                </a>
                <a href="https://www.twitter.com/VoiceofDisability" target="_blank" rel="noopener noreferrer" aria-label="Follow Voice of Disability on X (Twitter)">
                  X (Twitter)
                </a>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
