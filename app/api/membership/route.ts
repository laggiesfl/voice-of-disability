export async function POST() {
  return Response.json(
    {
      error:
        'Online membership applications are temporarily paused while we strengthen our spam protection. Please email fadila@voiceofdisability.com to join Voice of Disability.',
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
