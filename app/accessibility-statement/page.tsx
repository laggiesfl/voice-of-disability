import Link from 'next/link';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Accessibility statement', description: 'Accessibility commitments and user testing evidence for Voice of Disability.' };
export default function AccessibilityStatement() {
 return (<>
 <section className="page-hero" aria-labelledby="accessibility-title"><div className="container"><h1 id="accessibility-title">Accessibility statement</h1><p>Our commitment to access and accessibility.</p></div></section>
 <section style={{padding:'3rem 0'}}><div className="container" style={{maxWidth:850}}>
 <p>Voice of Disability, led by disabled women, aims to make this website usable with a range of assistive technologies. WCAG 2.2 and Universal Design guide our work.</p>
 <h2>User testing evidence — 15 October 2026</h2>
 <ul>
 <li><strong>200% zoom:</strong> User-tested on the homepage. The user reported that no content fell off the sides, supported by a full-page screenshot.</li>
 <li><strong>400% zoom:</strong> User-tested on the homepage. A screenshot shows single-column reflow without obvious clipping in the visible upper sections; the entire site was not inspected at this zoom.</li>
 <li><strong>Keyboard navigation:</strong> User-tested in the course of reviewing the website. The user reported using the keyboard. Full verification of every interactive control remains outstanding.</li>
 <li><strong>Text-to-speech reading:</strong> A user-provided screenshot shows the live homepage text displayed in a reading tool. This demonstrates a reading workflow, but does not establish compatibility with all screen readers or assistive technologies.</li>
 </ul>
 <p>These are recorded observations, not a complete WCAG conformance audit. Additional testing is needed for all pages, keyboard focus and controls, form submissions, and reflow at 320 CSS pixels. Testing by blind users with different screen-reading software is planned and has not yet been completed.</p>
 <h2>Report an accessibility barrier</h2>
 <p>If a page, form or document is difficult to use, <Link href="/#contact">contact us</Link> or email <a href="mailto:hello@voiceofdisability.com?subject=Website%20accessibility">hello@voiceofdisability.com</a>. Tell us the affected page and preferred response format; sensitive medical details are not required.</p>
 <p><Link href="/">← Back to homepage</Link></p>
 </div></section>
 </>);
}