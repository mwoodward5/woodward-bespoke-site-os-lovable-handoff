# SECURITY CHECKLIST

Every recipe follows these rules. Verify before shipping:

- [ ] `LOVABLE_API_KEY` never appears in a file under `src/` that is not `*.server.ts` / handler body / server route.
- [ ] Every webhook route verifies HMAC / provider signature before touching DB.
- [ ] Every DB table has GRANTs and RLS enabled.
- [ ] Every auth-protected server fn uses `requireSupabaseAuth`.
- [ ] User roles are stored in `public.user_roles`, checked via `public.has_role()`.
- [ ] Every AI recipe passes user input through inbound moderation before hitting the model, and output through outbound moderation before rendering.
- [ ] Every rate-limited endpoint honors `tokens/rate-limits.json`.
- [ ] Every voice/AI recipe caps cost via `tokens/costs-per-1k.json` and a daily quota.
- [ ] Public `/api/public/*` routes never return PII.
