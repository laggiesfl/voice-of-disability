import Link from 'next/link';
import styles from '../app-home.module.css';
import { getUpcomingEvents } from '../../lib/vod-public-data';

const programmeAreas = [
  ['Rights Clinics', 'Practical rights information and navigation support.'],
  ['Voices Circle', 'A member space for connection, discussion and participation.'],
  ['Digital Access Training', 'Build practical confidence around accessible digital participation.'],
  ['Advocacy Workshops', 'Develop knowledge and tools for disability-rights advocacy.'],
];

function formatEventDate(value: string) {
  return new Intl.DateTimeFormat('en-ZA', { dateStyle: 'long' }).format(new Date(`${value}T00:00:00`));
}

export default async function ProgrammesScreen() {
  const events = await getUpcomingEvents();

  return (
    <div className={styles.shell}>
      <Link href="/app-home" className={styles.back}>← Back to app home</Link>
      <section className={styles.hero} aria-labelledby="programmes-title">
        <span className={styles.eyebrow}>Programmes</span>
        <h1 id="programmes-title">Take part in Voice of Disability</h1>
        <p>Programme information and published events stay connected to the shared Voice of Disability platform.</p>
      </section>

      <section className={styles.section} aria-labelledby="events-title">
        <h2 id="events-title">Upcoming events</h2>
        {events.length > 0 ? (
          <ul className={styles.list}>
            {events.map((event) => (
              <li className={styles.item} key={event.id}>
                <strong>{event.title}</strong>
                <p><span className={styles.note}>{formatEventDate(event.event_date)}{event.start_time ? ` · ${event.start_time.slice(0,5)}` : ''}</span></p>
                {(event.location || event.is_online) && <p>{event.is_online ? 'Online' : event.location}</p>}
                {event.summary && <p>{event.summary}</p>}
                {event.registration_url && <div className={styles.actions}><a className={styles.button} href={event.registration_url} target="_blank" rel="noreferrer">Register for this event</a></div>}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.status}>
            <p><strong>There are no published upcoming events at the moment.</strong></p>
            <p>Programme areas remain available below. New events will appear here automatically when they are published.</p>
          </div>
        )}
      </section>

      <section className={styles.section} aria-labelledby="programme-list-title">
        <h2 id="programme-list-title">Programme areas</h2>
        <ul className={styles.list}>
          {programmeAreas.map(([name, text]) => <li className={styles.item} key={name}><strong>{name}</strong><p>{text}</p></li>)}
        </ul>
        <div className={styles.actions}>
          <Link className={styles.button} href="/#programmes">View programme details</Link>
          <Link className={styles.buttonSecondary} href="/#join">Join Voice of Disability</Link>
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home">Home</Link><Link href="/app-home/rights">My rights</Link><Link href="/app-home/resources">Resources</Link><Link href="/blog">Updates</Link><Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
