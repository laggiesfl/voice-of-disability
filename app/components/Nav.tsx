'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" aria-label="Voice of Disability home">
          <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5B2A86"/>
                <stop offset=".55" stopColor="#B0227A"/>
                <stop offset="1" stopColor="#D6246E"/>
              </linearGradient>
            </defs>
            <path fill="url(#navGrad)" d="M28 12h64a20 20 0 0 1 20 20v40a20 20 0 0 1-20 20H52l-20 18a3 3 0 0 1-5-2.4V92a20 20 0 0 1-20-20V32A20 20 0 0 1 28 12Z"/>
            <g fill="#fff">
              <rect x="34" y="52" width="8" height="16" rx="4"/>
              <rect x="49" y="42" width="8" height="36" rx="4"/>
              <rect x="64" y="30" width="8" height="60" rx="4" fill="#FFC24B"/>
              <rect x="79" y="42" width="8" height="36" rx="4"/>
              <rect x="94" y="52" width="8" height="16" rx="4"/>
            </g>
          </svg>
          <span className="nav-brand-text">
            <span className="nav-brand-name">Voice of Disability</span>
            <span className="nav-brand-tag">Nothing About Us Without Us</span>
          </span>
        </Link>

        <ul className="nav-links" role="list">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#founder">Our Founder</Link></li>
          <li><Link href="/our-position">Our Position</Link></li>
          <li><Link href="/#programmes">Programmes</Link></li>
          <li><Link href="/#resources">Resources</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#membership">Join</Link></li>
          <li><Link href="/#donate">Donate</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        <Link href="/#membership" className="btn btn-primary nav-cta">
          Become a member
        </Link>
      </div>
    </nav>
  );
}
