export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const runtimeOidcToken = Array.isArray(req.headers?.['x-vercel-oidc-token'])
    ? req.headers['x-vercel-oidc-token'][0]
    : req.headers?.['x-vercel-oidc-token'];
  const token = process.env.AI_GATEWAY_API_KEY || runtimeOidcToken || process.env.VERCEL_OIDC_TOKEN;

  if (!token) {
    return res.status(503).json({ ok: false, stage: 'auth', error: 'No AI Gateway credential at runtime' });
  }

  try {
    const response = await fetch('https://ai-gateway.vercel.sh/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'alibaba/qwen3.5-flash',
        temperature: 0,
        max_tokens: 20,
        messages: [
          { role: 'system', content: 'Reply with exactly: CHATBOT_OK' },
          { role: 'user', content: 'Health check' }
        ]
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('Chat health gateway error', response.status, data);
      return res.status(502).json({ ok: false, stage: 'gateway', status: response.status, error: data?.error?.message || 'Gateway request failed' });
    }

    const reply = data?.choices?.[0]?.message?.content?.trim() || '';
    return res.status(200).json({ ok: reply.includes('CHATBOT_OK'), model: data?.model || 'alibaba/qwen3.5-flash', reply });
  } catch (error) {
    console.error('Chat health error', error);
    return res.status(500).json({ ok: false, stage: 'runtime', error: error?.message || 'Unknown runtime error' });
  }
}
