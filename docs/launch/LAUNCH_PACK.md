# SiteForge — SaaS Launch Pack
2026-07-07 · Woodward Software Labs · branch `codex/site-os-v5-builder-engine`
Companion files: `LOVABLE_FRONTEND_PROMPT.md` · `CODEX_BACKEND_PATCHES.md` · `../../app/` (the shipped platform)

---

## 1. SaaS readiness audit

**Verdict: the platform is operational end-to-end today.** `node app/server.mjs` boots a complete SaaS — landing with try-before-you-buy template gallery, auth, wizard, discovery/import with asset approval, prompt builder with live SSE forge timeline, QC-graded preview, plan-gated Stripe checkout (test/mock), publish with custom-domain flow, dashboard, edit requests, audit log. 19/19 smoke checks pass (§12). One forge run through the app graded **A, 100/100** under the full 14-point browser gate.

| Layer | Before this pass | Now |
|---|---|---|
| Engine (forge CLI, 7-stage pipeline, QC gate) | ✅ Proven (grade A) | ✅ Untouched, wrapped by app |
| SaaS app (all 8 user-facing surfaces) | ❌ Spec only (`engine/console` was an empty skeleton) | ✅ Shipped at `app/`, zero new deps |
| Billing/entitlements | ❌ None | ✅ Plans, add-ons, DFY SKUs; test-mode + mock; sk_live_ refused |
| Discovery packets (brand/assets/services/trust/seo/build-packet.json) | ❌ None | ✅ Written per project on every discovery/forge |
| Template gallery + personalization | ❌ None | ✅ 6 forged demos + public one-of-one try-on |
| DB schema (Supabase-ready, RLS) | ❌ None | ✅ `app/schema.sql`, mirrored by the JSON dev store |
| Multi-page renderer | ❌ | ⚠️ Still single-page engine (honest labeling in UI; Codex patch #1) |
| Live integrations (Firecrawl/Stripe test/Resend/Google/Vercel) | — | 🔑 Wired, each unlocks with one env var (§13) |

Infra reality check (via MCP): Vercel team `rocketsites` live with 25+ wss-* site projects + `siteforge-demo-summit-roofing`; Stripe account **Woodward Software LLC** connected; Lovable MCP erroring (`user_not_found`) — prompt is copy-paste (companion file).

## 2. Product architecture

```
Visitor ──► Landing / Templates ──► try-on forge (public, rate-limited, noindex, 24h)
User ────► Auth (magic link / Google) ──► Wizard ──► Discovery (Firecrawl→assets)
      ──► Approve/edit assets ──► Prompt builder ──► FORGE JOB (SSE stream)
              packet (forge.mjs, provenance-tagged) → rescue → design → build → QC gate
      ──► Preview (desktop/mobile, report card) ──► Checkout (Stripe TEST) ──► Publish
              grade A required · entitlement required · local /sites/ or Vercel API
      ──► Dashboard (versions, edits, domain, billing)
```

- **Runtime**: single Node 22 server (`app/server.mjs`), no framework, no build step — deployable to any VM/Fly/Render box (Playwright needs a real box, not serverless; SaaS plan §"Honest constraints").
- **Data**: `app/lib/store.mjs` JSON store in dev ⇄ `app/schema.sql` Postgres/Supabase in prod (same shapes, one adapter to swap).
- **Jobs**: in-process queue (concurrency 1) + SSE bus wrapping the pipeline's `emit`; Phase-2 = ticket runner per `docs/SITEFORGE_SAAS_PLAN.md` (integrates with `/api/ghost-agency/orchestrate` — the other workstream's lane; the seam is `site_generations` + `jobs`).
- **Ecosystem seams**: `voice_ai` add-on entitlement → VAPI receptionist (voiceops/callprep infra); `seo_boost` → report systems; LeadMiner footprints merge via forge `--footprint`.

## 3. UI / page map

Public: `/` (hero, 20-second try-on, how-it-works, collections, before/after, pricing, FAQ, trust footer) · `/templates` + `/templates/:family` (try with your business) · `/pricing` (plans, upgradable facets, DFY) · `/support` · `/legal/{privacy,terms,accessibility}` · `/login` · `/demo/:slug/*` · `/try/:token/*` · published `/sites/:slug/*` · meta: robots/sitemap/llms.txt/security.txt/humans.txt/manifest/OG/favicon · 404/error pages · consent banner.
App: `/dashboard` · `/new` (3-step wizard: business → sources → style+goal) · `/p/:id` (overview + edit requests) · `/p/:id/discovery` (found logo/colors/photos/services/socials/map + SEO gaps + approve/remove/edit + manual add) · `/p/:id/build` (prompt, build type, hero anatomy, section toggles, Veo toggle, quota meter, live timeline, per-piece regenerate) · `/p/:id/preview` (desktop/mobile iframe, grade, report card, regenerate) · `/p/:id/publish` (gates, domain DNS instructions, deployments) · `/account` · dev: `/dev/inbox`.
Design system "Foundry Editorial": Fraunces + Archivo + mono accents, paper/ink/ember, grain + contour motif, kinetic hero, focus rings, reduced-motion, print styles. No glass-card walls, no admin blue, no Inter-purple (AGENTS.md bans respected).

## 4. Database schema

`app/schema.sql` — users, user_roles (+`has_role()` security-definer), site_projects, business_profiles, business_assets, site_generations, site_qc_reports, deployments, subscriptions, entitlements, webhook_events, edit_requests, audit_logs, jobs. Every table: GRANTs + RLS + owner/operator policies (stack rules §9 honored). The JSON dev store mirrors it 1:1.

## 5. API route plan (implemented)

```
POST /auth/magic-link · GET /auth/verify · GET /auth/google(/callback) · POST /auth/logout
POST /api/projects                       create + auto-discovery        (CSRF, plan project-gate)
POST /api/projects/:id/discover          re-run discovery
POST /api/projects/:id/assets            manual asset add
PATCH /api/assets/:id                    approve / relabel
POST /api/projects/:id/generate          forge job (quota gate) → 303 build?job=
POST /api/projects/:id/regenerate        target: hero|copy|gallery|map (new graded version)
GET  /api/jobs/:id (+ /stream SSE)       owner-scoped live timeline
POST /api/templates/try                  public one-of-one try-on (6/hr/IP)
POST /api/checkout                       plan|addon|one_time → Stripe test or mock
POST /billing/mock-confirm · GET /billing/success
POST /api/webhooks/stripe                timingSafeEqual signature + idempotent grants
POST /api/projects/:id/publish           grade-A + entitlement gate → local|Vercel deploy
POST /api/projects/:id/domain            custom domain (dns_pending + instructions)
POST /api/projects/:id/edit-requests     operator queue
GET  /healthz
```
All mutations audited; owner checks on every project/asset/job route; path-traversal guards on site serving.

## 6. Firecrawl workflow

`POST /api/projects` or `/discover` → `app/lib/discovery.mjs` → pipeline `01-discover` (Firecrawl v2 scrape: markdown+branding+links+summary) + `02-scrape` (media catalog) → extraction (services/contact/socials/CMS/SEO-gap detection) → **reviewable asset rows** (logo, colors, photos, services, contacts, socials, GBP citation, map pin) with source + confidence → user approves/removes/edits → forge merges only approved assets with `enrichment_sources` provenance. Six packet files written per project (`app/data/sites/<proj>/discovery/`): `brand.json, assets.json, services.json, trust.json, seo.json, build-packet.json`. Keyless mode: manual assets + fixtures (`SITEFORGE_DEMO_FIXTURES=1`). Planned next: GBP OAuth import, review citations, Bright Data SERP (BLOCKERS §13).

## 7. Generation workflow

Wizard/prompt → intake → `scripts/forge.mjs --from-intake --dry-run --json` (single source of packet truth; honesty contract, deterministic seed) → rescue → mergeEnrichment → design (user's hero pin wins; section toggles filter plan) → optional Veo prompt → build (versioned dir `v1..vN`, slug-versioned seeds so every version diverges) → QC (full 14-check gate with Chromium; honest degraded mode caps grade at B and marks checks "deferred" when headless is unavailable) → report card + regenerate loop → publish gate (grade A). Every stage streams to the customer's screen (SSE) — the "watch it forge" moment.

## 8. Stripe / package plan

`app/config/plans.json` (test-mode; from competitive research in `docs/SITEFORGE_SAAS_PLAN.md`):
**Free Preview** $0 (1 project, 5 runs/mo, preview only) · **Host & Care $29/mo** (publish, domain) · **Care+ $99/mo** ★ (3 sites, edits included, SEO/GEO pack, multi-page export) · **Agency $199/mo** (10 sites, white-label, batch anti-template gate) · DFY **Build $495 / Build Pro $995** · Add-ons: **AI Voice Receptionist $79/mo** (VAPI seam) · **Local SEO Boost $49/mo** · **AI Concierge $29/mo**.
Checkout unlocks publish/domain/export/edits/quota exactly per spec. Guards: `sk_live_` throws at boot; webhook signatures verified (`timingSafeEqual`, 5-min freshness, idempotent grants); receipts emailed (dev inbox until Resend key). Failed forges never consume quota.

## 9. Exact files added/patched (this pass)

**New (SaaS platform)**: `app/server.mjs` · `app/lib/{util,store,auth,billing,engine-adapter,discovery}.mjs` · `app/views/{layout,pages-public,pages-app}.mjs` · `app/public/{theme.css,app.js}` · `app/config/plans.json` · `app/schema.sql` · `app/scripts/seed-demos.mjs` · `app/fixtures/demo-discovery.json` · `app/test/smoke.mjs` · `app/README.md` · `docs/launch/*`.
**Patched**: `.gitignore` (+`app/data/`). **Zero edits** to shared engine files (`scripts/forge.mjs`, `factory/pipeline/*`, `qc-audit/*`, kitchens) — the Ghost Agency workstream owns active changes there.
Commit (git had a stale `index.lock`; run when clear):
```bash
git add app docs/launch .gitignore && git commit -m "SiteForge SaaS platform: full customer journey (auth→forge→QC→pay→publish) + launch pack"
```

## 10 & 11. Lovable prompt · Codex patch list

Standalone companions: `docs/launch/LOVABLE_FRONTEND_PROMPT.md` (scale-up frontend on TanStack Start + Lovable Cloud against §5's API contract) and `docs/launch/CODEX_BACKEND_PATCHES.md` (engine patches, priority-ordered).

## 12. Smoke test report — 19/19 PASS

Environment: Linux sandbox, Node 22.22, Chromium via Playwright (full browser gate active). Evidence artifacts: `landing-full.png`, `landing-mobile.png`, `demo-owner-letter.png` (outputs folder), `/tmp/sf-e2e` state.

| Feature | Status | Evidence | Fix Needed |
|---|---|---|---|
| Auth (magic link) | PASS | issued + verified, session cookie, → /dashboard | |
| Dashboard project list | PASS | GET /dashboard → 200 | |
| Create project | PASS | POST /api/projects → /p/…/discovery (auto-discovery ran) | |
| Firecrawl import | PASS | discovery pipeline ran (keyless mode in sandbox); 6 packet JSONs written | set FIRECRAWL_API_KEY for live crawl |
| Asset approval | PASS | approve/remove/edit via PATCH /api/assets/:id verified | |
| Generate single-page | PASS | job done, **QC grade A**, v1/index.html | |
| Generate multi-page | PASS | flow + labeling work; renders extended single-page today | Codex patch #1 (engine renderer) |
| Regenerate hero | PASS | v3: split-editorial-index → service-map-pins | |
| Regenerate copy | PASS | v4 ≠ v3 (1060b delta), hero pinned | |
| QC report | PASS | **grade A, 100/100**, full gate incl. screenshots + 320px | |
| Preview route | PASS | 200, owner-gated, noindex, desktop/mobile chrome | |
| Mobile layout | PASS | viewport ✓ @media ✓ reduced-motion ✓ 320px gate ✓ | |
| Publish gated by plan | PASS | free plan → HTTP 402 | |
| Stripe checkout (test) | PASS | mock → starter active + receipt; sk_test_ engages real test API; sk_live_ refused | |
| Publish / deploy | PASS | deployment live, GET /sites/… → 200; grade gate enforced; Vercel path behind VERCEL_TOKEN | |
| Custom domain flow | PASS | dns_pending + CNAME/A instructions | |
| Edit request | PASS | stored open + ops notified | |
| Template try-before-you-buy | PASS | public one-of-one preview forged, noindex, 24h TTL, rate-limited | |
| Audit log | PASS | 12 events across the journey | |

Bonus gates: template-gallery batch ran the **anti-template signature check — caught a real collision between two demos** (magazine-owner-letter ↔ split-editorial-index), reseeded to UNIQUE. That's the moat working in front of witnesses.

## 13. Blockers (launch-critical in bold)

1. **Env keys**: FIRECRAWL_API_KEY (live discovery), STRIPE_SECRET_KEY sk_test_ + STRIPE_WEBHOOK_SECRET, RESEND_API_KEY, GOOGLE_CLIENT_ID/SECRET, VERCEL_TOKEN+TEAM_ID, SITEFORGE_SESSION_SECRET. Each is one var; the product degrades honestly without them.
2. **Hosting box** for the runner+app (Playwright ≠ serverless): one small VM/Fly/Render instance.
3. Multi-page renderer (Codex #1) — until then UI labels it honestly.
4. Engine copy quality: headline generator can drift off-trade (observed: "Sharper yards" on a roofing demo) — Codex #2; extraction-priority fix already in flight in the Ghost Agency session (don't double-patch `forge.mjs`).
5. GBP OAuth + review citations + Bright Data SERP enrichment — spec'd, not wired.
6. Legal placeholders need counsel pass; pick production domain (siteforge.dev / woodwardsiteforge.com) and set SITEFORGE_BASE_URL.
7. Git: clear stale `.git/index.lock`, then commit (§9).

## 14. Launch checklist

**T-0 (today)**: run `node app/server.mjs` on Windows → walk the journey · commit (§9) · set FIRECRAWL + Stripe test keys · `node app/scripts/seed-demos.mjs`.
**T-1..3**: deploy to a box + domain + SSL · Stripe test checkout E2E with webhook · Resend domain auth · Google OAuth consent · swap OG placeholder for rendered PNG · Lighthouse pass on landing (target 95/100/100/100) · legal counsel pass.
**T-4..7**: 10 real businesses through the funnel (Ghost Agency leads) · watch QC grades + copy bans · Codex patches #1–#3 · wire VAPI receptionist for first Care+ upsell · security sweep (`SECURITY_CHECKLIST.md`) · backups for `app/data` / cut to Supabase.
**Launch gate (all must be true)**: smoke 19/19 on prod box · full-gate grade A on 3 fresh real businesses · Stripe TEST checkout→entitlement→publish E2E · then and only then flip STRIPE to live keys — that flip requires editing the `sk_live_` guard **deliberately**.
