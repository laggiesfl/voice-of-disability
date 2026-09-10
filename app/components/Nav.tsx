'use client';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" aria-label="Voice of Disability home">
          <img
            src="/brand/vod-concept-a-logo-horizontal.svg"
            alt=""
            width="310"
            height="70"
            aria-hidden="true"
          />
        </Link>

        <ul className="nav-links" role="list">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#founder">Our Founder</Link></li>
          <li><Link href="/our-position">Our Position</Link></li>
          <li><Link href="/#programmes">Programmes</Link></li>
          <li><Link href="/resources">Resources</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/#membership">Join</Link></li>
          <li><Link href="/#donate">Donate</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>

        <Link href="/app-home" className="btn btn-primary nav-cta">
          Open Voice of Disability App
        </Link>
      </div>
    </nav>
  );
}
