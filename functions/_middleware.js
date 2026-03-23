const PASSWORD = "finoxos2026";
const COOKIE_NAME = "finox_auth";
const COOKIE_MAX_AGE = 86400 * 7; // 7 jours

function htmlPage(error = "") {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accès protégé</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .card {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      padding: 40px;
      width: 360px;
      text-align: center;
    }
    .logo { font-size: 28px; font-weight: 700; color: #fff; margin-bottom: 8px; }
    .subtitle { color: rgba(255,255,255,0.5); font-size: 14px; margin-bottom: 32px; }
    input[type="password"] {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      background: rgba(255,255,255,0.08);
      color: #fff;
      font-size: 16px;
      outline: none;
      transition: border-color 0.2s;
    }
    input[type="password"]:focus { border-color: #3b82f6; }
    input[type="password"]::placeholder { color: rgba(255,255,255,0.3); }
    button {
      width: 100%;
      margin-top: 16px;
      padding: 12px;
      border: none;
      border-radius: 10px;
      background: #3b82f6;
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    button:hover { background: #2563eb; }
    .error { color: #f87171; font-size: 13px; margin-top: 12px; }
  </style>
</head>
<body>
  <form class="card" method="POST">
    <div class="logo">FINOX</div>
    <div class="subtitle">Entrez le mot de passe pour continuer</div>
    <input type="password" name="password" placeholder="Mot de passe" autofocus required />
    <button type="submit">Entrer</button>
    ${error ? `<div class="error">${error}</div>` : ""}
  </form>
</body>
</html>`;
}

function getCookie(request, name) {
  const cookies = request.headers.get("Cookie") || "";
  const match = cookies.split(";").find((c) => c.trim().startsWith(name + "="));
  return match ? match.split("=")[1].trim() : null;
}

export async function onRequest(context) {
  const { request } = context;

  // Si le cookie auth est valide, laisser passer
  if (getCookie(request, COOKIE_NAME) === PASSWORD) {
    return context.next();
  }

  // POST = soumission du formulaire
  if (request.method === "POST") {
    const formData = await request.formData();
    const password = formData.get("password");

    if (password === PASSWORD) {
      // Mot de passe correct — set cookie et redirect
      const url = new URL(request.url);
      const response = new Response(null, {
        status: 302,
        headers: { Location: url.pathname },
      });
      response.headers.set(
        "Set-Cookie",
        `${COOKIE_NAME}=${PASSWORD}; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Lax`
      );
      return response;
    }

    // Mauvais mot de passe
    return new Response(htmlPage("Mot de passe incorrect"), {
      status: 403,
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  }

  // GET sans cookie — afficher le formulaire
  return new Response(htmlPage(), {
    status: 401,
    headers: { "Content-Type": "text/html;charset=UTF-8" },
  });
}
