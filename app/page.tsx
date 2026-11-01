import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from './components/MembershipForm';
import NewsletterForm from './components/NewsletterForm';
import ContactForm    from './components/ContactForm';
import DonateSection  from './components/DonateSection';

export const metadata: Metadata = {
  title: 'Voice of Disability | Your voice. Your rights. Your community.',
};

export default function Home(){return <>
      <section className="hero" aria-labelledby="hero-h">
        <div className="container hero-inner">
          <div>
            <p className="section-label">Led by disabled women, in South Africa</p>
            <h1 id="hero-h">
              Your voice. Your rights.<br />
              <span>Your community.</span>
            </h1>
            <p className="hero-desc">
              Voice of Disability is a South African movement led by disabled women, advocating for equality,
              accessibility and meaningful participation in society. We challenge the barriers that
              exclude disabled people through rights advocacy, education and Universal Design.
            </p>
            <div className="hero-btns">
              <Link href="/get-involved" className="btn btn-primary">Join the movement</Link>
              <Link href="/programmes" className="btn btn-outline">See our programmes</Link>
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
              Disabled women lead decisions about our lives, rights and futures.
              This platform amplifies our voices and collective action.
            </p>
            <Link href="/our-position" className="hero-card-link">Why we exist →</Link>
          </div>
        </div>
      </section>
<section className="vod-home-pathways" aria-labelledby="vod-pathways"><div className="container"><h2 id="vod-pathways">Explore Voice of Disability</h2><p>Find the information, programmes and ways to participate that matter to you.</p><div className="vod-pathway-grid"><Link href="/about" className="vod-pathway-card"><h3>About us</h3><p>Learn about our leadership, history and rights-based approach.</p></Link>
<Link href="/programmes" className="vod-pathway-card"><h3>Programmes</h3><p>Explore rights clinics, Voices Circle and advocacy activities.</p></Link>
<Link href="/resources" className="vod-pathway-card"><h3>Resources</h3><p>Find guides and practical accessibility information.</p></Link>
<Link href="/get-involved" className="vod-pathway-card"><h3>Get involved</h3><p>Join, volunteer and help shape our work.</p></Link>
<Link href="/support" className="vod-pathway-card"><h3>Support our work</h3><p>Contribute to rights advocacy and accessible programmes.</p></Link>
<Link href="/contact" className="vod-pathway-card"><h3>Contact</h3><p>Enquiries, partnerships and accessibility requests.</p></Link></div></div></section>
</>}
