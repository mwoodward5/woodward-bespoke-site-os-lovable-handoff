# SiteForge — Go-Live Runbook
2026-07-07 · Written after full audit of live deployments + this repo. Companion to docs/SITEFORGE_SAAS_PLAN.md.

## Where things actually are (verified live today)

| Surface | URL | State |
|---|---|---|
| Marketing (static export) | siteforge-web-three.vercel.app | LIVE but a dead end — built by `app/scripts/export-static.mjs`, every CTA is a `mailto:` beta ask. No path into the product. |
| The real app | siteforge-app-seven.vercel.app | LIVE. Full marketing pages, /pricing (all plans render from config/plans.json), /templates, /login. /new correctly gates behind auth. Private-beta mode: `SITEFORGE_BETA_CODE` is set, magic-link email NOT live (no RESEND_API_KEY), Google OAuth NOT configured. Stripe TEST MODE by design (sk_live_ refused by hard guard). |
| Forge engine | this repo (`app/lib/engine-adapter`, root engine) | Proven locally end-to-end (auth→forge→pay→publish smoke suite). On Vercel serverless, Playwright QC degrades honestly (grade cap) — full QC needs a runner box. |
| Operator/admin queue UI | — | DOES NOT EXIST yet. Top product gap. |

## The disconnect the front end has today
siteforge-web-three is an intentionally de-fanged static snapshot. The product front door should be the app itself.

**Decision needed (Mark):** retire siteforge-web-three via permanent redirect → siteforge-app-seven (one tiny deploy), or keep two properties and rebuild the static site's CTAs to link into the app's /new + /login. Recommendation: redirect. One product, one funnel.

## Go-live sequence

### Phase 1 — Front door + signup (can be done today)
1. Redirect siteforge-web-three → app (deploy decision above).
2. Set env vars in Vercel project `siteforge-app` (team rocketsites):
   - `SITEFORGE_SESSION_SECRET` — long random string (REQUIRED in prod).
   - `RESEND_API_KEY` + verified from-domain — turns on real magic-link signup; the beta-code gate automatically swaps out when email is live (`app/server.mjs:159`).
   - Keep `SITEFORGE_BETA_CODE` only if you want to stay invite-only.
   - `FIRECRAWL_API_KEY` — arms live "Find My Business" discovery.
   - `GOOGLE_CLIENT_ID/SECRET` — optional, enables Google sign-in.
   - `STRIPE_SECRET_KEY` (sk_test_…) + `STRIPE_WEBHOOK_SECRET` — real test-mode checkout; run `app/scripts/stripe-sync.mjs` once to create Prices.
   - `VERCEL_TOKEN` + `VERCEL_TEAM_ID` — real publishing to per-site Vercel projects.
3. Data: app currently uses JSON store (`app/data/db.json`) — fine for beta; `app/schema.sql` is the Supabase DDL when accounts matter.

### Phase 2 — Real forge runs for customers
- Vercel serverless cannot run Playwright: stand up the forge runner (ticket poller wrapping `pnpm forge`) on a real box / GitHub Action. Until then, in-app forges run with degraded QC (grade-capped, honest).
- Stream stage events to the build screen (SSE already emitted by pipeline).

### Phase 3 — Operator dashboard (missing today)
Build `/ops` (gated by role, schema already has roles): job queue, per-build QC report, asset-approval workflow, edit-request inbox, DFY order board. This is the "site building engine dashboard" to watch work land.

### Phase 4 — Money goes live (deliberate flip)
- Swap sk_test → sk_live (removes hard guard deliberately), re-run stripe-sync in live mode, verify webhook, THEN make /pricing buttons real. Never before Phases 1–2 are stable.

## SaaS plans (already encoded — confirm or adjust)
config/plans.json: Free Preview $0 (5 runs/mo, no publish) · Host & Care $29/mo · Care+ $99/mo (3 sites, edits) · Agency $199/mo (10 sites, white-label) · DFY Build $495 / Pro $995 · Add-ons: Voice AI $79, SEO Boost $49, Concierge $29. Flat pricing, failed forges never consume quota, publish requires grade A.

## Known hazards
- The Cowork sandbox bash mount serves truncated copies of files in this repo (verified: smoke.mjs, server.mjs). Never commit or run tests from the sandbox mount — use host tools / Codex on the real filesystem.
- Marketing claims are QC-gate-backed; keep the "no fabricated reviews" line everywhere.
