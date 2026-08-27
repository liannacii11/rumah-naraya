export function sessionCookie(v) {
  return `rn_session=${v}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`;
}

export function clearCookie() {
  return "rn_session=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0";
}

export function isAuthenticated(request) {
  return (request.headers.get("Cookie") || "").includes("rn_session=");
}
