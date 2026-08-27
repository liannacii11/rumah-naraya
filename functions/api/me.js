import { hasValidSession } from "../_auth.js";

export async function onRequestGet({ request, env }) {
  const valid = await hasValidSession(
    request,
    env.SESSION_SECRET
  );

  if (!valid) {
    return Response.json(
      { authenticated: false },
      {
        status: 401,
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  }

  return Response.json(
    { authenticated: true },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
