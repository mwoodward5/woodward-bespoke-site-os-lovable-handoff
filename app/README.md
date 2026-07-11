# SiteForge SaaS — the app layer

The sellable product around the Bespoke Site OS v5 engine. Zero npm
dependencies of its own (Node 22+): the engine's `jsdom` + `playwright` at the
repo root are all it needs.

## Run it

```bash
node app/server.mjs                 # → http://localhost:8787
node app/scripts/seed-demos.mjs     # once: forge the 6 template-gallery demos
node app/test/smoke.mjs             # 19-check end-to-end suite
```

No config needed for a full local run: magic-link emails land in `/dev/inbox`,
checkout uses the built-in mock (clearly labeled), publishing serves from
`/sites/<slug>/`. QC runs the full browser gate when Playwright's Chromium is
installed (`npx playwright install chromium`), and degrades honestly (grade
cap, "deferred" flags) when it isn't.

## Environment (all optional, each unlocks a live integration)

| Var | Unlocks |
|---|---|
| `FIRECRAWL_API_KEY` | Live "Find My Business" crawling (logo/colors/copy/photos/services/SEO gaps) |
| `STRIPE_SECRET_KEY` (sk_test_…) | Real Stripe **test-mode** checkout. `sk_live_` is refused by a hard guard |
| `STRIPE_WEBHOOK_SECRET` | Signature-verified `/api/webhooks/stripe` entitlements |
| `GOOGLE_CLIENT_ID/SECRET` | Google OAuth sign-in |
| `RESEND_API_KEY` | Real magic-link + receipt email delivery |
| `VERCEL_TOKEN` + `VERCEL_TEAM_ID` | Real Vercel publishing (else local publish) |
| `LOVABLE_API_KEY` | Logo remaster pipeline in asset rescue |
| `SITEFORGE_SESSION_SECRET` | Session HMAC (set in production!) |
| `SITEFORGE_DATA_DIR` | Data root override (default `app/data/`) |

## Layout

```
app/
├─ server.mjs            # router, SSE, preview/publish serving, all API routes
├─ lib/                  # store (JSON twin of schema.sql), auth, billing,
│  │                     # engine-adapter (forge bridge + jobs + QC), discovery
├─ views/                # server-rendered pages (design system: Foundry Editorial)
├─ public/               # theme.css, app.js (no framework, no build step)
├─ config/plans.json     # the commercial catalog (plans, add-ons, DFY)
├─ schema.sql            # production Postgres/Supabase DDL with RLS
├─ scripts/seed-demos.mjs
└─ test/smoke.mjs        # auth→forge→pay→publish, 19 checks
```

Data lives in `app/data/` (gitignored): `db.json`, generated site versions,
published bundles, try-on previews, demo sites.

## Product rules encoded here

- Free to forge and preview; **publishing requires a paid plan and a grade-A
  QC report**. Failed forges never consume quota.
- Every fact on a generated site traces to a source (prompt, intake, crawl,
  GBP, or user upload). The engine refuses to invent reviews or claims.
- Demo/try-on builds are noindexed and watermarked; paid publishes are not.
- Flat pricing, never credits. Mock/test billing until launch day.
