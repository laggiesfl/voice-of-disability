export async function POST() {
  return Response.json(
    {
      error:
        'The online contact form is temporarily paused while we strengthen our spam protection. Please email fadila@voiceofdisability.com directly.',
    },
    {
      status: 503,
      headers: {
        'Cache-Control': 'no-store',
        'Retry-After': '3600',
      },
    }
  );
}
