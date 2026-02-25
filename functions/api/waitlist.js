const ZOHO_URL =
  'https://forms.zohopublic.ca/Finox/form/WaitlistFinoxOSConseillers/formperma/HHK7J7cucQPW3b1Y0D95g2yUxw7Vm2antELMCEUhpII/htmlRecords/submit';

export async function onRequestPost(context) {
  const origin = context.request.headers.get('Origin') || '';

  // Lire le body envoyé par le frontend
  const body = await context.request.text();

  // Relayer vers Zoho côté serveur (pas de CORS)
  const zohoRes = await fetch(ZOHO_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body,
  });

  const ok = zohoRes.ok;

  return new Response(JSON.stringify({ ok }), {
    status: ok ? 200 : 502,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin,
    },
  });
}

// Gérer le preflight CORS
export async function onRequestOptions(context) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': context.request.headers.get('Origin') || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
