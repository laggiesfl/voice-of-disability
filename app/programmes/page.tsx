import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import DonateSection from '../components/DonateSection';
export const metadata: Metadata = {title: 'Programmes',description: 'Rights clinics, Voices Circle and accessible programmes'};
export default function Page(){return <><div className="vod-subpage-banner"><div className="container"><p className="section-label">Voice of Disability · Creating access for all</p><h1>Programmes</h1><p>Rights clinics, Voices Circle and accessible programmes.</p></div></div>
      <section className="programmes" id="programmes" aria-labelledby="prog-h">
        <div className="container">
          <p className="section-label">Programmes &amp; events</p>
          <h2 id="prog-h">What we do</h2>
          <p style={{maxWidth: 600}}>
            Our programmes are led by and designed with disabled women. We work to ensure
            accessible venues, formats and communication, and respond to individual access requirements.
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
</>}
