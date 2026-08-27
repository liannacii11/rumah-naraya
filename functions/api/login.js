import { sessionCookie } from "../_auth.js";

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));

  if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD || !env.SESSION_SECRET) {
    return Response.json(
      { error: "Admin belum dikonfigurasi." },
      { status: 503 }
    );
  }

  if (
    body.email?.toLowerCase() !== env.ADMIN_EMAIL.toLowerCase() ||
    body.password !== env.ADMIN_PASSWORD
  ) {
    return Response.json(
      { error: "Email atau password salah." },
      { status: 401 }
    );
  }

  return new Response(
    JSON.stringify({ ok: true }),
    {
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": sessionCookie(crypto.randomUUID())
      }
    }
  );
}
