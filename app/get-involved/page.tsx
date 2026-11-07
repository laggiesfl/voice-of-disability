import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import DonateSection from '../components/DonateSection';
export const metadata: Metadata = {title: 'Get involved',description: 'Volunteer and join the Voice of Disability movement'};
export default function Page(){return <><div className="vod-subpage-banner"><div className="container"><p className="section-label">Voice of Disability · Creating access for all</p><h1>Get involved</h1><p>Volunteer and join the Voice of Disability movement.</p></div></div>
      <section className="about" id="volunteer" aria-labelledby="volunteer-h">
        <div className="container">
          <p className="section-label">Get involved</p>
          <h2 id="volunteer-h">Volunteer with Voice of Disability</h2>
          <p style={{maxWidth: 760}}>
            Help advance the rights, leadership and independence of disabled women.
            Disabled volunteers and allies are welcome. You can contribute remotely,
            in person or through occasional projects, depending on your interests and availability.
          </p>
          <div className="about-grid">
            <div className="about-card"><h3>Rights clinics</h3><p>Help with information sessions, administration, research and referrals. Specialist rights advice is provided only by appropriately qualified people.</p></div>
            <div className="about-card"><h3>Advocacy and campaigns</h3><p>Support community consultations, accessible communications, research and campaigns challenging disabling barriers.</p></div>
            <div className="about-card"><h3>Training and digital inclusion</h3><p>Assist with workshops, accessible technology demonstrations, learning resources and practical digital skills.</p></div>
          </div>
          <div style={{maxWidth: 740, marginTop: '2rem', padding: '1.5rem', background: 'var(--light-purple)', borderRadius: 12}}>
            <h3>Tell us how you would like to help</h3>
            <p>No membership or previous volunteering experience is required to express interest.
              We will discuss suitable opportunities, accessibility and reasonable accommodation with you.
              Sending the form does not guarantee a placement.</p>
            <p>Please do not include sensitive personal or medical information.
              We use your details to respond to your enquiry. See our <Link href="/privacy">privacy policy</Link>.</p>
            <ContactForm volunteerInterest />
            <p style={{marginTop: '1rem'}}>Prefer email? Write to <a href="mailto:fadila@voiceofdisability.com?subject=Volunteer%20interest">fadila@voiceofdisability.com</a>.</p>
          </div>
        </div>
      </section>

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

      <section className="newsletter" aria-labelledby="nl-h">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <h2 id="nl-h" style={{fontSize: '1.4rem'}}>Get updates from Voice of Disability</h2>
            <p style={{margin: 0}}>News, events, and resources — straight to your inbox. No spam, ever.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>
</>}
