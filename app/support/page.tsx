import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import DonateSection from '../components/DonateSection';
export const metadata: Metadata = {title: 'Support our work',description: 'Support accessible programmes for disabled women'};
export default function Page(){return <><div className="vod-subpage-banner"><div className="container"><p className="section-label">Voice of Disability · Creating access for all</p><h1>Support our work</h1><p>Support accessible programmes for disabled women.</p></div></div>
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
</>}
