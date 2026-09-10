import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src="/brand/vod-concept-a-logo-reversed.svg"
              alt="Voice of Disability — Nothing About Us Without Us"
              width="330"
              height="66"
            />
            <p>Voice of Disability is a movement of disabled women making their own voices heard. Registered Non-Profit Organisation, South Africa.</p>
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
              <li><Link href="/#donate">Donate</Link></li>
              <li><Link href="/#contact">Contact us</Link></li>
              <li><Link href="/privacy">Privacy policy</Link></li>
              <li><Link href="/terms">Terms of use</Link></li>
              <li><Link href="/refund-policy">Refund policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Voice of Disability NPC. All rights reserved.</span>
          <span>Built to <Link href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer">WCAG 2.2</Link> Level AA · Universal Design Principles Applied</span>
        </div>
      </div>

      <style>{`
        .footer .footer-brand img {
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
