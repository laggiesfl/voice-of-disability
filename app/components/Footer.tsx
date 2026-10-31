import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="/brand/vod-concept-a-logo-horizontal.svg"
              alt="Voice of Disability — Nothing About Us Without Us"
              width="330"
              height="74"
            />
            <p>Voice of Disability is a South African movement led by disabled women, advancing disability rights, accessibility and equality. Registered non-profit organisation.</p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul role="list">
              <li><Link href="/#about">Who we are</Link></li>
              <li><Link href="/#founder">Our Founder</Link></li>
              <li><Link href="/our-position">Our Position</Link></li>
              <li><Link href="/#programmes">Programmes</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Take action</h4>
            <ul role="list">
              <li><Link href="/#membership">Become a member</Link></li>
              <li><Link href="/#volunteer">Volunteer with us</Link></li>
              <li><Link href="/#donate">Donate</Link></li>
              <li><Link href="/#contact">Contact us</Link></li>
              <li><Link href="/accessibility-statement">Accessibility statement</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/refund-policy">Refund policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Voice of Disability NPC. All rights reserved.</span>
          <span>Designed with <Link href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.2</Link> and Universal Design principles · <Link href="/accessibility-statement">See testing status</Link></span>
        </div>
      </div>

      <style>{`
        .footer .not-ok-campaign { display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap; padding: 1.5rem 0; margin-bottom: 1.5rem; border-top: 1px solid rgba(255,255,255,.35); }
        .footer .not-ok-campaign img { width: 112px; height: 112px; object-fit: contain; }
        .footer .not-ok-campaign > div { flex: 1 1 240px; max-width: 55ch; }
        .footer .not-ok-campaign h4 { color: #fff; margin: 0 0 .5rem; }
        .footer .not-ok-campaign p { color: #fff; margin: 0 0 .5rem; line-height: 1.6; }
        .footer .not-ok-campaign a { color: #fff; text-decoration: underline; text-underline-offset: 3px; }
        .footer .not-ok-campaign a:focus-visible { outline: 3px solid #fff; outline-offset: 4px; border-radius: 4px; }
        .footer .footer-brand img { background: #FFFFFF; padding: .55rem; border-radius: .45rem; box-sizing: border-box; }\n        .footer .footer-brand img {
          width: min(330px, 100%);
          height: auto;
          margin-bottom: 1rem;
        }
        .footer .footer-brand p {
          color: #FFFFFF;
        }
        .footer .footer-col h4 {
          color: #FFFFFF;
        }
        .footer .footer-col a,
        .footer .footer-bottom,
        .footer .footer-bottom a {
          color: #FFFFFF;
        }
        .footer .footer-col a {
          text-decoration-thickness: 1.5px;
          text-underline-offset: 3px;
        }
        .footer .footer-col a:hover,
        .footer .footer-bottom a:hover {
          color: #E8EEF3;
        }
      `}</style>
    </footer>
  );
}
