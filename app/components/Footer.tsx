import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
              <defs>
                <linearGradient id="footGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#5B2A86"/>
                  <stop offset=".55" stopColor="#B0227A"/>
                  <stop offset="1" stopColor="#D6246E"/>
                </linearGradient>
              </defs>
              <path fill="url(#footGrad)" d="M28 12h64a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20H52l-20 18a3 3 0 0 1-5-2.4V92a20 20 0 0 1-20-20V32A20 20 0 0 1 28 12Z"/>
              <g fill="#fff">
                <rect x="34" y="52" width="8" height="16" rx="4"/>
                <rect x="49" y="42" width="8" height="36" rx="4"/>
                <rect x="64" y="30" width="8" height="60" rx="4" fill="#FFC24B"/>
                <rect x="79" y="42" width="8" height="36" rx="4"/>
                <rect x="94" y="52" width="8" height="16" rx="4"/>
              </g>
            </svg>
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
    </footer>
  );
}
