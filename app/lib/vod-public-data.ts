const SUPABASE_URL = 'https://uuvxqyrqhqktkeovkivx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_B9aFyfK496rI7gw2reMdLg_E44OksPK';

async function getJson<T>(path: string): Promise<T[]> {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      next: { revalidate: 300 },
    });
    if (!response.ok) return [];
    return (await response.json()) as T[];
  } catch {
    return [];
  }
}

export type VodResource = {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  external_url: string | null;
  file_url: string | null;
  sort_order: number | null;
};

export type VodEvent = {
  id: string;
  title: string;
  summary: string | null;
  description: string | null;
  event_date: string;
  start_time: string | null;
  location: string | null;
  is_online: boolean | null;
  registration_url: string | null;
};

export type VodBlogPost = {
  slug: string;
  title: string;
  summary: string | null;
  published_at: string | null;
};

export async function getPublishedResources() {
  return getJson<VodResource>(
    'vod_resources?select=id,title,description,category,external_url,file_url,sort_order&published=eq.true&order=sort_order.asc.nullslast,created_at.desc'
  );
}

export async function getUpcomingEvents() {
  const today = new Date().toISOString().slice(0, 10);
  return getJson<VodEvent>(
    `vod_events?select=id,title,summary,description,event_date,start_time,location,is_online,registration_url&published=eq.true&event_date=gte.${today}&order=event_date.asc,start_time.asc`
  );
}

export async function getLatestPosts(limit = 6) {
  return getJson<VodBlogPost>(
    `vod_blog_posts?select=slug,title,summary,published_at&status=eq.published&order=published_at.desc&limit=${limit}`
  );
}
