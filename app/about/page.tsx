import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import DonateSection from '../components/DonateSection';
export const metadata: Metadata = {title: 'About Voice of Disability',description: 'Our approach, the social model and the founder of Voice of Disability'};
export default function Page(){return <><div className="vod-subpage-banner"><div className="container"><p className="section-label">Voice of Disability · Creating access for all</p><h1>About Voice of Disability</h1><p>Our approach, the social model and the founder of Voice of Disability.</p></div></div>
      <section className="about" id="about" aria-labelledby="about-h">
        <div className="container">
          <div className="about-intro">
            <p className="section-label">Who we are</p>
            <h2 id="about-h">Disability is created by barriers — not by people</h2>
            <p>
              The United Nations Convention on the Rights of Persons with Disabilities recognises
              that disability is an evolving concept arising from the interaction between people
              with impairments and attitudinal and environmental barriers that hinder their full
              and effective participation in society on an equal basis with others.
              This is the Convention&rsquo;s approach in its Preamble, paragraph (e).
              <a href="https://www.un.org/disabilities/documents/convention/convention_accessible_pdf.pdf"
                 target="_blank" rel="noopener noreferrer">Read the UN Convention (accessible PDF)</a>.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-card">
              <h3>The social model</h3>
              <p>
                Disabled people face exclusion when environments, attitudes, institutions and systems
                create barriers to equal participation. Removing those barriers advances independence,
                dignity and inclusion.
              </p>
            </div>
            <div className="about-card">
              <h3>Universal Design</h3>
              <p>
                Universal Design anticipates diverse needs from the outset so environments, services and
                technologies work for as many people as possible. Reasonable accommodation complements
                Universal Design by addressing individual access requirements.
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
              Access is a right, not a privilege. Access and accessibility are not the same:
              reaching a service does not mean it can be used independently, effectively or equally.
              We advocate for both access to services and accessibility in their use.
            </p>
          </div>
        </div>
      </section>

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
                Following a car accident in December 1985, Fadila was left in a hospital corridor through the night
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
                She is now an AI-Driven Accessibility &amp; Disability Inclusion Innovator, applying
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
</>}
