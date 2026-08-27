import { createSessionCookie } from "../_auth.js";

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));

  if (!env.ADMIN_EMAIL || !env.ADMIN_PASSWORD || !env.SESSION_SECRET) {
    return Response.json(
      { error: "Admin belum dikonfigurasi." },
      { status: 503 }
    );
  }

  const email = String(body.email || "").trim().toLowerCase();
  const password = String(body.password || "");

  if (
    email !== env.ADMIN_EMAIL.trim().toLowerCase() ||
    password !== env.ADMIN_PASSWORD
  ) {
    return Response.json(
      { error: "Email atau password salah." },
      { status: 401 }
    );
  }

  const cookie = await createSessionCookie(env.SESSION_SECRET);

  return new Response(
    JSON.stringify({ ok: true }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": cookie,
        "Cache-Control": "no-store"
      }
    }
  );
}
