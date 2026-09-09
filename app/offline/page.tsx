import Link from 'next/link';

export const metadata = {
  title: 'Offline',
};

export default function OfflinePage() {
  return (
    <section className="content-section" aria-labelledby="offline-title">
      <div className="container narrow">
        <p className="eyebrow">Voice of Disability app</p>
        <h1 id="offline-title">You are currently offline</h1>
        <p>
          Some saved pages and resources may still be available. Reconnect to the internet to load the latest rights information, programmes, events and updates.
        </p>
        <p>
          <Link className="button button-primary" href="/">
            Return to home
          </Link>
        </p>
      </div>
    </section>
  );
}
