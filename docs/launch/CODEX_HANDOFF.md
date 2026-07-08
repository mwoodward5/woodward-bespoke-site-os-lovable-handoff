# SiteForge — Full Handoff to Codex

**Audience:** the next engineer/agent (Codex) who maintains and extends SiteForge.
**Goal of this doc:** you can run, test, deploy, and safely change this product *without
access to Fable/Cowork*, and without repeating the mistakes that have cost past sessions hours.

Read this top to bottom once. Then keep `ENGINE_VISUAL_STANDARDS.md`, `RENDERER_V7_BRIEF.md`,
and `GO_LIVE.md` open as references.

---

## 0. TL;DR — the five rules that keep you out of trouble
1. **Never import the retired renderer.** Active renderer is `factory/pipeline/05-build-v7.mjs`.
   `05-build.mjs` and `05-build-v6.mjs` are retired — do not import them.
2. **Never edit the frozen files** (see §6). Extend by adding *new* files.
3. **The sandbox mount lies about freshly-edited files.** Host is always right; the sandbox
   can read your just-edited file back truncated for minutes (see §5). Verify from a clean
   copy, never from a stale read.
4. **Don't fight `.git`.** A parallel session may hold `.git/index.lock`. If git is locked or
   the index is corrupt, work in a clone and hand off a **bundle** (see §7) — don't force it.
5. **Live money is double-locked.** Stripe only charges real cards when `sk_live_…` **and**
   `STRIPE_ALLOW_LIVE=1` are both set. Keep it that way (see §4).

---

## 1. What SiteForge is
A website builder for local service businesses. A user types their business (name, city, trade),
SiteForge **discovers** real content (their old site + Google Business Profile via Firecrawl),
**forges** a one-of-one premium website with local SEO + GEO/AEO optimization, **grades** every
build with a hard QC gate, and **publishes** it. Flat pricing, no per-generation credits.

Two live surfaces:
- **Marketing site** — https://siteforge-web-three.vercel.app (Vercel project `siteforge-web`).
- **Builder app (the product)** — https://siteforge-app-rocketsites.vercel.app
  (Vercel project `siteforge-app`, team `rocketsites` / `team_d1RUoZ8HnmCsYLmbqEtHdrb3`).
  Serverless entry `api/index.mjs`; state persists in Vercel Blob store `siteforge-data`.
  Sign in with any email + beta code `FORGE-WSS-2026`.

## 2. Repo map (what matters)
```
app/                     the SaaS product (Node, no framework, server-rendered)
  server.mjs             HTTP router + all routes (auth, projects, forge, billing, webhooks)
  api/index.mjs          Vercel serverless entry -> wraps server.mjs handler
  lib/
    billing.mjs          Stripe checkout, entitlements, webhook, portal  (see §4)
    store.mjs            data layer; Vercel Blob in prod, file/memory locally
    blob-store.mjs       Blob persistence adapter
    discovery.mjs        import a business's site/assets
    media-engine.mjs     logo upload, AI logo candidates, labeled AI ambiance
    engine-adapter.mjs   bridges the app to the factory renderer + QC
    env.mjs              loads .env.local into process.env (FIRST import everywhere)
    util.mjs             helpers (ids, money, form/json parsing, csrf)
  views/
    pages-public.mjs     marketing + pricing pages
    pages-app.mjs        dashboard, project, account, checkout, billing views
  config/plans.json      the commercial catalog (plans/addons/one-times + live price ids)
  scripts/
    deploy-app.mjs       deploy the app to Vercel siteforge-app (sets env vars)
    deploy-vercel.mjs    deploy the marketing site to Vercel siteforge-web
    export-static.mjs    static export of the marketing site
    seed-demos.mjs       forge the demo businesses
  test/smoke.mjs         end-to-end smoke (chunk with SITEFORGE_SMOKE_PART=1|2|3)
factory/
  pipeline/05-build-v7.mjs   ACTIVE renderer (trade-true, QC 11/11)   <-- the one to use
  lib/ambiance-v7.mjs        deterministic per-trade textures + glyphs (no fake photos)
asset-pipeline/
  gbp-deep.mjs           Firecrawl GBP deep import (hours, reviews, photos, lat/lng)
  logo-candidates.mjs    3 proposed logo marks (procedural SVG; no external image API needed)
qc-audit/
  qc.mjs                 base QC gate (FROZEN — do not edit)
  qc-v7-ext.mjs          V7 QC extension gate (batch anti-template + media/source checks)
docs/launch/             briefs, standards, this handoff, GO_LIVE
.env.local               secrets (gitignored) — VERCEL_TOKEN, FIRECRAWL_API_KEY, STRIPE_* 
```

## 3. Run / test / deploy
**Local dev:**
```
node app/server.mjs           # http://localhost:8787
```
Boot log tells you the Stripe mode and whether Chromium (full QC) is available.

**Smoke tests** (run in a Linux env with deps installed):
```
npm install --no-save jsdom@24 playwright@1.47   # strip "workspaces" from package.json copy first
npx playwright install chromium
SITEFORGE_SMOKE_PART=1 node app/test/smoke.mjs   # then PART=2, PART=3
```

**QC a forged site** locally (full gate needs Chromium; Vercel has none so QC caps at grade B there):
the app runs QC automatically on every forge; the gate must print **11/11** plus the V7 3/3.

**Deploy** (from repo root, needs `.env.local` with `VERCEL_TOKEN`):
```
node app/scripts/deploy-app.mjs          # the builder app  -> siteforge-app
node app/scripts/deploy-vercel.mjs --prod # the marketing site -> siteforge-web
```
Verify: `curl -s -o /dev/null -w "%{http_code}" https://siteforge-app-rocketsites.vercel.app/healthz` → `200`.

## 4. Billing (Stripe) — how it works now
File: `app/lib/billing.mjs`. Catalog: `app/config/plans.json`.

- Each paid catalog item carries a **verified live `stripe_price_id`** (see `GO_LIVE.md` table).
- `createCheckout()` builds a Stripe Checkout Session and **prefers the real `stripe_price_id`**
  (falls back to inline `price_data` only if an id is missing). It creates/reuses **one Stripe
  Customer per user** (id cached on the user row) so subscriptions and the Billing Portal stay
  stitched together. Promotion codes are allowed.
- **Mode selection** (single source of truth, exported):
  - no key → `mock` (built-in fake checkout page, no charge)
  - `sk_test_`/`rk_test_` → `stripe-test` (real Stripe test API, no real money)
  - `sk_live_`/`rk_live_` **and** `STRIPE_ALLOW_LIVE=1` → `stripe-live` (real money)
  - a live key **without** the flag → **throws on boot** (safe by design)
- `createBillingPortal()` → `/billing/portal` route → Stripe Customer Portal (manage/cancel).
- Webhook: `POST /api/webhooks/stripe`, signature-verified, idempotent; grants entitlements on
  `checkout.session.completed`, downgrades on `customer.subscription.deleted`.
- Entitlements/gating (`entitlementFor`, `generationGate`, `projectGate`) drive publish rights,
  custom domain, multipage export, edit requests, and monthly forge-run limits.

**To change prices:** edit them in Stripe, then update both `price_cents` and `stripe_price_id`
in `plans.json` (keep the `stripe_lookup_key` stable). Never let `plans.json` and Stripe drift.

**Go live:** follow `docs/launch/GO_LIVE.md` (needs Mark's live key — agent cannot do it).

## 5. Environment landmines (the time-wasters — read before touching the sandbox)
These apply to the Fable/Cowork sandbox. If you're on a normal machine, ignore them.
- **Foreground only.** Background processes die between shell calls. Keep commands < ~40s.
- **Mount sync lag / truncated reads.** Files you edit via the editor tools are correct on the
  host immediately, but the Linux sandbox mount can read them back **truncated for minutes**.
  Never trust `node --check`/`cat` of a just-edited file on the mount. Instead: pull the true
  content from git objects (`git archive HEAD <path> | tar -x -C /tmp/x`) or a clone, re-apply
  edits there with a python string-replace, and validate that copy. Brand-new files sync fine.
- **Repo `node_modules` is Windows/pnpm** — unusable in Linux. Install fresh throwaway deps
  (`npm install --no-save …`) in a copy with `"workspaces"` stripped from `package.json`.
- **`.git` may be locked/corrupt** from a parallel session. Don't remove the lock, don't force.
  Clone and hand off a bundle (see §7).
- **Vercel has no Chromium** → QC there is degraded (grade caps at B). The real gate runs locally.

## 6. FROZEN — do NOT edit these (extend with new files instead)
- `scripts/forge.mjs`
- `factory/pipeline/0*.mjs` old stages (anything except `05-build-v7.mjs`)
- `factory/pipeline/05-build.mjs`, `factory/pipeline/05-build-v6.mjs` (retired renderers)
- `qc-audit/qc.mjs` (base QC gate)
- the `kitchen/` folders
Touching these has broken builds before. If you need different behavior, add a new module and
wire it in; never mutate a frozen file.

## 7. Git — how this handoff reaches the canonical repo
Because the shared `.git` was locked/corrupt at handoff time, the billing work was committed in a
clean clone and delivered as a **git bundle**: `SiteForge-Codex-Handoff/siteforge-full.bundle`.
It contains full history through commit **`42325d9` "Billing V7: live-capable Stripe checkout"**
(parent `03b8934` "Renderer V7…").

**To inspect the bundle anywhere (no Fable needed):**
```
git bundle verify siteforge-full.bundle
git clone siteforge-full.bundle siteforge          # full working repo from the bundle
```
**To apply it onto the canonical repo once `.git` is healthy (lock released):**
```
cd <canonical repo>
git bundle verify /path/to/siteforge-full.bundle
git fetch /path/to/siteforge-full.bundle codex/site-os-v5-builder-engine:billing-v7
git log --oneline billing-v7 -3          # confirm 42325d9 on top of 03b8934
git merge --ff-only billing-v7           # fast-forward the branch (or cherry-pick 42325d9)
```
The billing commit changes only 5 files (`plans.json`, `billing.mjs`, `server.mjs`,
`pages-app.mjs`, `deploy-app.mjs`) on top of the verified V7 tree, so a fast-forward is clean.

> Working-tree note: on the host, `git status` may show many files as "modified" vs `03b8934`.
> Those are cosmetic mount-vs-committed drift from prior sessions — the committed tree `03b8934`
> is the verified-live V7. When in doubt, trust the commit, not the dirty working tree.

## 8. Verification log (what was proven at handoff)
- Stripe account `acct_1QS0oRLEuaGjNcch`; all 8 live Prices active, amounts match `plans.json`.
- `node --check` passes on all changed files; `plans.json` parses; all 8 paid items have a price id.
- `billing.mjs` loads and reports the correct mode for all four states:
  no key → `mock`; `sk_test_` → `stripe-test`; `sk_live_`+flag → `stripe-live`;
  `sk_live_` alone → **refused at boot**.
- Live endpoints returned `200` at handoff: app `/healthz`, app `/pricing`, marketing root.

## 9. What still needs a human (Mark)
- Paste the live `sk_live_` key + set `STRIPE_ALLOW_LIVE=1` + webhook secret, then deploy (`GO_LIVE.md`).
- Save a Stripe Customer Portal configuration once (dashboard) so `/billing/portal` works live.
- Custom domain purchase/DNS, if desired.
- If the Vercel token has expired, mint a new one (scope: "Woodward Software Systems").
