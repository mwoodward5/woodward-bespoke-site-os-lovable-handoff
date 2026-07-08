# SiteForge — Go-Live Checklist (Stripe billing)

Everything in the app is built and verified. What remains are the steps that need
**Mark's hands** (secrets, dashboard toggles). This document is the exact, ordered
runbook. Nothing here can be done by an agent because it requires the live secret key.

## Current state (verified)
- Stripe account: **Woodward Software LLC** (`acct_1QS0oRLEuaGjNcch`).
- 8 **LIVE** Prices exist and are active; their IDs are baked into `app/config/plans.json`
  as `stripe_price_id`, matched by `stripe_lookup_key` and amount:

  | Item | lookup_key | Price ID | Amount |
  |---|---|---|---|
  | Host & Care (starter) | siteforge_starter_monthly | price_1TqWFXLEuaGjNcchH6XeU6yf | $29/mo |
  | Care+ (pro) | siteforge_pro_monthly | price_1TqWFvLEuaGjNcchYfKhbpbK | $99/mo |
  | Agency | siteforge_agency_monthly | price_1TqWFxLEuaGjNcch7WVeh08N | $199/mo |
  | Done-For-You Build | siteforge_dfy_build | price_1TqWFyLEuaGjNcchwPdj38wP | $495 |
  | Done-For-You Build Pro | siteforge_dfy_build_pro | price_1TqWG0LEuaGjNcchXdYMhYXo | $995 |
  | AI Voice Receptionist | siteforge_addon_voice_ai | price_1TqWG1LEuaGjNcchhPBP1r2w | $79/mo |
  | Local SEO Boost | siteforge_addon_seo_boost | price_1TqWG2LEuaGjNcchkVGqXmLQ | $49/mo |
  | AI Site Concierge | siteforge_addon_concierge | price_1TqWG4LEuaGjNcchEG5BKZ35 | $29/mo |

- The app runs **mock checkout** by default (no key), **Stripe test** with an `sk_test_` key,
  and **live** ONLY when it sees an `sk_live_` key **AND** `STRIPE_ALLOW_LIVE=1`.
  A live key without the flag is **refused at boot** — this is intentional so a stray key
  can never silently start charging real customers.

## Safety model (why two switches)
`app/lib/billing.mjs` reads:
- `STRIPE_SECRET_KEY` — `sk_test_…` → test API; `sk_live_…` → live API; empty → mock.
- `STRIPE_ALLOW_LIVE` — must equal `1` to arm a live key. Missing/anything else + a live
  key ⇒ the server throws on boot with a clear message. Test and mock never need this flag.

## Go-live steps (do in order)

### 1. Get your keys from the Stripe dashboard
- Secret key: https://dashboard.stripe.com/acct_1QS0oRLEuaGjNcch/apikeys → **Reveal live key** (`sk_live_…`).
- (Do this after step 3 so you have the webhook secret too.)

### 2. Put keys in `.env.local` at the repo root (never commit this file — it's gitignored)
```
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
STRIPE_ALLOW_LIVE=1
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx   # from step 3
```

### 3. Register the webhook endpoint (Stripe dashboard → Developers → Webhooks → Add endpoint)
- URL: `https://siteforge-app-rocketsites.vercel.app/api/webhooks/stripe`
  (or your custom domain + `/api/webhooks/stripe`).
- Events to send: `checkout.session.completed`, `customer.subscription.deleted`.
- Copy the **Signing secret** (`whsec_…`) into `.env.local` as `STRIPE_WEBHOOK_SECRET`.

### 4. Deploy the app (pushes the Stripe env vars to Vercel automatically)
From the repo root:
```
node app/scripts/deploy-app.mjs
```
`deploy-app.mjs` now passes `STRIPE_SECRET_KEY`, `STRIPE_ALLOW_LIVE`, and
`STRIPE_WEBHOOK_SECRET` through to the Vercel project when they are present in `.env.local`.
> Note: the script only **adds** env vars that are not already set on the project. To
> **rotate** a key later, change it in the Vercel dashboard (Project → Settings → Environment
> Variables) and redeploy, or delete the var first and re-run the script.

### 5. Verify live
- `curl -s -o /dev/null -w "%{http_code}" https://siteforge-app-rocketsites.vercel.app/healthz` → `200`.
- Sign in (any email + beta code `FORGE-WSS-2026`), go to `/pricing`, click a plan.
  You should land on **real Stripe Checkout** (checkout.stripe.com), not the mock page.
- Complete one purchase with a real card (or a small plan) → you land on `/billing/success`,
  the account shows the plan active, and a **Manage billing** button appears (Stripe portal).
- Confirm the webhook shows a delivered `checkout.session.completed` in the Stripe dashboard.

### 6. (Optional) Enable the Stripe Customer Portal product settings
Live portal sessions require the portal to be configured once:
https://dashboard.stripe.com/settings/billing/portal → **Save** a default configuration
(allow cancel, update payment method). Without this, `/billing/portal` returns a Stripe error.

## Rollback
- Set `STRIPE_ALLOW_LIVE=0` (or remove it) in Vercel and redeploy → app falls back to refusing
  the live key / mock. No customer is charged going forward. Existing subscriptions stay in Stripe.

## What is NOT wired (by design, needs a decision)
- Taxes (Stripe Tax) — off. Turn on in dashboard if you need it.
- Trials — none. Add `trial_period_days` to the checkout call in `billing.mjs` if desired.
- Proration on plan change — handled by Stripe automatically once a subscription exists and the
  customer changes plan through the portal.
