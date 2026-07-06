# WIRING GUIDE

## 1. Lovable Cloud
Enable Lovable Cloud in your project. It provisions:
- Supabase-backed DB, auth, storage, realtime
- Automatic `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` on the client
- Automatic `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` on the server
- Automatic `LOVABLE_API_KEY` for the AI Gateway

You never paste any of these keys manually.

## 2. AI Gateway
All AI recipes call `https://ai.gateway.lovable.dev/v1/...` with `Authorization: Bearer ${process.env.LOVABLE_API_KEY}`.
Never call the gateway from the browser — always from a server fn or server route.

## 3. Voice
TTS: `POST /v1/audio/speech` with `model: "openai/gpt-4o-mini-tts"`.
Default response: `stream_format: "sse"`, `response_format: "pcm"`.
Chunk any input longer than ~400 words before sending.

## 4. Auth
Add providers via Lovable Cloud → Backend → Auth. Never store role on the profile table — use the `user_roles` table + `has_role()` security-definer function (see `recipes/auth/auth-role-check/sql.sql`).

## 5. Payments (Stripe)
Set `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` via the secrets tool. Webhook route must call `stripe.webhooks.constructEvent()` before touching DB.

## 6. Realtime
Use `supabase.channel(...)` for Supabase Realtime, or plain SSE via `/api/*` routes.

## 7. Migrations
Copy any `sql.sql` files into a single migration and run it. Every migration must:
- CREATE TABLE
- GRANT to roles you allow
- ENABLE RLS
- CREATE POLICY
