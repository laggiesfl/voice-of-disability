import Link from 'next/link';
import type { Metadata } from 'next';
import MembershipForm from '../components/MembershipForm';
import NewsletterForm from '../components/NewsletterForm';
import ContactForm from '../components/ContactForm';
import DonateSection from '../components/DonateSection';
export const metadata: Metadata = {title: 'Contact Voice of Disability',description: 'Reach the Voice of Disability team'};
export default function Page(){return <><div className="vod-subpage-banner"><div className="container"><p className="section-label">Voice of Disability · Creating access for all</p><h1>Contact Voice of Disability</h1><p>Reach the Voice of Disability team.</p></div></div>
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
                  <a href="mailto:hello@voiceofdisability.com">hello@voiceofdisability.com</a>
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
</>}
