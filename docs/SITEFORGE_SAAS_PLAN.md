# Woodward SiteForge — A La Carte SaaS Plan
2026-07-07 · companion to COMPETITIVE_LANDSCAPE_2026-07.md and FORGE_PROMPT_SYSTEM.md

## Product thesis
"One shot. Real proof. Graded before it ships." Every competitor either makes users iterate (vibe-coders monetize their own failure loops) or ships template sameness with thin local SEO. SiteForge's deterministic QC gate makes flat-priced guaranteed quality possible — structurally hard for credit-metered competitors to copy. (Evidence: competitive doc, 40+ sources.)

## Architecture (reuses infrastructure that is already live)

```
Customer (SaaS)          Ghost Agency (internal)
      │                          │
      ▼                          ▼
SiteForge Web App  ──────►  /api/ghost-agency/orchestrate (live today)
 (auth + billing)                │ ticket: site.generate
      │                          ▼
      └────────►  FORGE RUNNER (worker box / CI runner)
                   pnpm forge --from-intake|--prompt … (exit 0 = grade A)
                          │
              ┌───────────┼───────────────┐
              ▼           ▼               ▼
        packet.json   generated-site   qc-report.json
                          │
                          ▼ (deploy hook, per-site Vercel project)
                    live customer site
```

- **Auth**: Supabase Auth (already configured live_write in the backend). Email + OAuth.
- **Billing**: existing Stripe account. Products: one-time Build SKUs + recurring Care subscriptions (webhook → entitlement → build credit). Reuse `/api/webhooks/stripe` entitlement pattern; proof runner stays test-mode-guarded (guard shipped 2026-07-07).
- **Quotas**: 1 build credit = 1 forge run reaching QC A; failed runs don't consume (exit code makes this trivial).
- **Runner**: forge is headless and CI-safe. Phase 1: Codex/local runner polls tickets. Phase 2: GitHub Action or small VM worker. (Vercel serverless can't run Playwright builds — runner must be a real box.)
- **Progress UX**: pipeline already emits SSE-style stage events — stream them to the customer's build screen ("discovering your business… grading…"). This is the "watch it forge" moment.

## Pricing (from competitive research; final call is Mark's)
- **Build $495** one-time · **Build Pro $995** (more pages, video hero, priority) — under B12's $1,999 DFY anchor, far above DIY-toy pricing, signals done-for-you quality.
- **Host & Care $29/mo** · **Care+ $99/mo** (edits included) · **Growth $249/mo** (reports, follow-up) — Care+ aligns with the agency's $99 canon; Growth stays under the $499 managed ladder so SaaS never cannibalizes agency.
- **Agency/white-label $199/mo** + per-build — sells the engine to other agencies. Never credits. Flat prices, quality guaranteed by the QC gate ("grade A or you don't pay" is claimable because the gate is enforced in code).

## Out-class posture (each claim maps to an enforced gate — see competitive doc §4)
Layered cinematic heroes (≥6 layers, QC-counted) · anti-template layout dedup (SHA-256 signature, hamming ≤4 fails the batch) · real-proof-only content (provenance-tagged enrichment, no fabricated testimonials — an FTC-grade differentiator) · full local-SEO/AEO stack enforced (LocalBusiness/Service/FAQ/Breadcrumb JSON-LD, speakable, llms.txt) · 320px integrity · reduced-motion compliance · per-build QC report card the customer can see. Nobody else issues a graded build artifact.

## Roadmap
1. **Now (done)**: forge CLI proven — prompt/intake → grade A → live URL, deterministic.
2. **Next sprint**: SiteForge web app shell (Next.js on the existing Vercel team or Lovable-built): login, prompt box with live stage stream, QC report viewer, Stripe checkout for Build SKUs. Runner: ticket poller wrapping forge.
3. **Then**: footprint connectors in-product (GBP OAuth import, site URL crawl w/ Firecrawl), asset picker (choose photos/logo candidates), domain connect flow.
4. **Quality flywheel**: kitchen recipe expansion (more hero families, trade-specific motif packs), QC thresholds ratcheted (contrast, LCP budget, a11y), visual-regression goldens per hero family.
5. **Ghost Agency loop closes**: intake → auto preview build (`--demo`) → Riley/email shows preview → checkout → `--deploy` to customer project. Every stage already exists; only the ticket poller is new code.

## Honest constraints
- Playwright-based builds need a worker, not serverless.
- Firecrawl/Lovable enrichment adds non-determinism at the *asset* level (engine handles fallbacks; layout stays deterministic).
- "Beats lovable.dev in one shot" is claimable for the local-service vertical (where the QC gates + real-footprint grounding apply), not for arbitrary web apps — position accordingly.
