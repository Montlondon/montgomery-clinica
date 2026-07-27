// Troca a chave de renovação do Google por uma chave de acesso nova.
//
// Por que isto vive no servidor e não na página: o Google só aceita a troca se
// quem pede provar que é o aplicativo, apresentando o segredo do cliente
// (client_secret). Segredo dentro de página aberta no navegador não é segredo.
// Aqui ele fica guardado nas variáveis do Supabase e nunca sai daqui.
//
// Variáveis necessárias (Supabase → Edge Functions → Secrets):
//   GOOGLE_CLIENT_ID      — o mesmo id usado no login do Google
//   GOOGLE_CLIENT_SECRET  — o segredo do mesmo aplicativo no Google Cloud
//
// Entrada:  { "refresh_token": "..." }
// Saída:    { "access_token": "...", "expires_in": 3599 }

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...CORS, 'Content-Type': 'application/json' },
    });

  try {
    const client_id = Deno.env.get('GOOGLE_CLIENT_ID');
    const client_secret = Deno.env.get('GOOGLE_CLIENT_SECRET');
    if (!client_id || !client_secret) {
      return json({ error: 'GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET não configurados' }, 500);
    }

    const { refresh_token } = await req.json().catch(() => ({}));
    if (!refresh_token) return json({ error: 'refresh_token ausente' }, 400);

    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id,
        client_secret,
        refresh_token,
        grant_type: 'refresh_token',
      }),
    });

    const j = await r.json();
    if (!r.ok || !j.access_token) {
      // Não devolvemos o corpo cru do Google para não vazar detalhe do aplicativo.
      console.error('Google recusou a renovação:', r.status, j?.error);
      return json({ error: 'renovação recusada pelo Google', code: j?.error || r.status }, 400);
    }

    return json({ access_token: j.access_token, expires_in: j.expires_in ?? 3600 });
  } catch (e) {
    console.error(e);
    return json({ error: 'falha inesperada' }, 500);
  }
});
