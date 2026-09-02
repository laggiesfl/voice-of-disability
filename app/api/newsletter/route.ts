export async function POST() {
  return Response.json(
    {
      error:
        'Online newsletter sign-up is temporarily paused while we strengthen our spam protection. Please email fadila@voiceofdisability.com if you would like to receive Voice of Disability updates.',
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
