# SiteForge on Vercel — deployment topology

Decision (Mark, 2026-07-07): everything runs on **our Vercel + our own boxes**.
No Lovable, no Supabase. `app/schema.sql` is plain Postgres (the `auth.uid()`
RLS policies are optional hardening — on our own Postgres the app's code-level
owner checks, already implemented and smoke-tested, do the same job).

## Three tiers

**1. Public site (`siteforge-web`) — Vercel static. Ready now.**
`node app/scripts/deploy-vercel.mjs --prod` exports the landing, templates,
pricing, legal, and the six forged demo sites and deploys via the v13 API.
Needs `VERCEL_TOKEN` in `.env.local` (create at vercel.com/account/settings/tokens,
scope Woodward Software Systems). Try-on/auth/checkout CTAs degrade to beta
mailto on the static tier.

**2. The app (auth, dashboard, billing, previews) — one small Node box.**
`node app/server.mjs` is the whole thing. Point a Vercel domain/subdomain
(app.siteforge…) at it, or run it on Fly/Render/a VPS. Data: JSON store today;
cut to any Postgres with `app/schema.sql` when concurrency demands it (Neon or
Vercel Postgres both fine — no Supabase dependency anywhere).

**3. The forge runner — same box as (2), or its own.**
Playwright + QC can't run in serverless functions; this is a hard platform
constraint, not a preference. The runner is what publishes each customer site
to its own Vercel project (`publishToVercel` in `app/lib/engine-adapter.mjs`
is implemented and takes the same token).

## Status
- Stripe live catalog: ✅ created 2026-07-07 (8 products, 8 prices, lookup keys
  match `app/config/plans.json`; `stage:prelaunch` metadata; zero charges).
  Test-mode mirror: run the same lookup keys with an sk_test key before launch.
- Firecrawl: ✅ live key verified (colors + copy extracted from a real site);
  wired via `.env.local`.
- Tier 1: ✅ **LIVE 2026-07-07** → https://siteforge-web-three.vercel.app
  (also siteforge-web-rocketsites.vercel.app; project `siteforge-web`, team
  rocketsites; every route 200 incl. demos/robots/llms/sitemap). Token in
  `.env.local`; redeploy anytime: `node app/scripts/deploy-vercel.mjs --prod`.
  Attach a real domain in the Vercel project settings when picked.
- Git commit: ⏳ `.git/index.lock` held (Ghost Agency session active in repo).
  When clear: `git add app docs/launch .gitignore && git commit`.
