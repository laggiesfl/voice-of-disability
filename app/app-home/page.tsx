import Link from 'next/link';
import styles from './app-home.module.css';

const tasks = [
  { href: '/app-home/rights', title: 'Know my rights', text: 'Plain-language guidance on disability rights, access and reasonable accommodation.' },
  { href: '/#contact', title: 'Get help', text: 'Find the right Voice of Disability contact or support route.' },
  { href: '/app-home/ask', title: 'Ask Voice of Disability', text: 'Start with your question and get directed to relevant information.' },
  { href: '/app-home/resources', title: 'Find a resource', text: 'Guides, templates and rights resources in one place.' },
  { href: '/app-home/programmes', title: 'Join a programme', text: 'See rights clinics, Voices Circle, digital access training and advocacy activities.' },
  { href: '/app-home/accessibility', title: 'Accessibility settings', text: 'Choose display and interaction preferences for the app experience.' },
];

type BlogPost = {
  slug: string;
  title: string;
  summary: string | null;
  published_at: string | null;
};

const SUPABASE_URL = 'https://uuvxqyrqhqktkeovkivx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_B9aFyfK496rI7gw2reMdLg_E44OksPK';

async function getLatestPosts(): Promise<BlogPost[]> {
  const url = `${SUPABASE_URL}/rest/v1/vod_blog_posts?select=slug,title,summary,published_at&status=eq.published&order=published_at.desc&limit=3`;
  try {
    const response = await fetch(url, {
      headers: { apikey: SUPABASE_KEY },
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    return (await response.json()) as BlogPost[];
  } catch {
    return [];
  }
}

function formatDate(value: string | null) {
  if (!value) return null;
  return new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value));
}

export default async function AppHomePage() {
  const posts = await getLatestPosts();

  return (
    <div className={styles.shell}>
      <section className={styles.hero} aria-labelledby="app-home-title">
        <span className={styles.eyebrow}>Voice of Disability app</span>
        <h1 id="app-home-title">What do you need today?</h1>
        <p>Your voice. Your rights. Your community.</p>
      </section>

      <section className={styles.section} aria-labelledby="quick-actions-title">
        <h2 id="quick-actions-title">Quick actions</h2>
        <p className={styles.lead}>Choose one task. You can always return here from the navigation at the bottom.</p>
        <div className={styles.grid}>
          {tasks.map((task, index) => (
            <Link key={task.href} href={task.href} className={`${styles.card} ${index === 0 ? styles.primary : ''}`}>
              <strong>{task.title}</strong>
              <span>{task.text}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="latest-title">
        <h2 id="latest-title">Latest from Voice of Disability</h2>
        {posts.length > 0 ? (
          <div className={styles.latestGrid}>
            {posts.map((post) => (
              <article key={post.slug} className={styles.latestCard}>
                {formatDate(post.published_at) && <p className={styles.meta}>{formatDate(post.published_at)}</p>}
                <h3>{post.title}</h3>
                {post.summary && <p>{post.summary}</p>}
                <Link href={`/blog/${post.slug}`}>Read article</Link>
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.status} role="status">
            <p><strong>No published updates are available right now.</strong></p>
            <p className={styles.note}>The app is connected to the same Voice of Disability content source used by the website.</p>
          </div>
        )}
        <div className={styles.actions}>
          <Link className={styles.buttonSecondary} href="/blog">Read all articles</Link>
          <Link className={styles.buttonSecondary} href="/app-home/programmes">View programmes</Link>
        </div>
      </section>

      <nav className={styles.bottomNav} aria-label="App navigation">
        <Link href="/app-home" aria-current="page">Home</Link>
        <Link href="/app-home/rights">My rights</Link>
        <Link href="/app-home/resources">Resources</Link>
        <Link href="/blog">Updates</Link>
        <Link href="/#join">More</Link>
      </nav>
    </div>
  );
}
