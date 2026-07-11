# SiteForge — The Repeatable Prompt-Website System
2026-07-07 · `scripts/forge.mjs` · verified end-to-end in a clean environment

One command turns a plain-English prompt (or a Ghost Agency intake payload) into a validated packet, a built site, a QC grade, and optionally a live deployment.

## Commands

```bash
pnpm forge --prompt "Build a premium site for Summit Roofing in Plano, TX. Family-owned, 22 years, owner is Dale Summers. Services: storm damage repair, metal roofing. Phone (972) 555-0144."
pnpm forge --from-intake intake.json            # ghost-agency /intake payload → site
pnpm forge --prompt "..." --footprint lm.json   # merge LeadMiner/GBP evidence (higher provenance)
# flags: --slug <s> --hero <family> --build-type <t> --demo --dry-run --no-build --deploy
```

Exit code 0 **only** when QC grade is A — safe for CI, queues, and agents.

## What it does

1. **Extract** — deterministic parser pulls business name, trade, city/state, phone, email, website, years, owner, services, tone cues, and *verbatim* quoted snippets from the prompt. Every fact lands in `enrichment_sources` with `{source: "prompt"|"intake_form"|"footprint", confidence}`. Nothing is invented; ambiguity is recorded at reduced confidence, never asserted (the engine's real-proof-only rule holds).
2. **Forge packet** — builds a `generator-queue-v5` packet: slug, deterministic `layout_seed` (sha256 of slug), hero family chosen by slug hash (overridable), toggles inferred conservatively (firecrawl only if a URL *and* key exist; map on; chat/payment only if asked). Validates against `generator-queue-v5.schema.json`; refuses to build if required business facts are missing, telling you exactly which.
3. **Build + QC** — runs the existing 7-stage pipeline; parses the QC event stream; reports the grade.
4. **Demo guard** (`--demo`) — injects `noindex,nofollow` + demo comment into every page so a demo can never masquerade as a real business site.
5. **Deploy** — pipeline's deploy stage stays gated behind `VERCEL_DEPLOY_HOOK_URL` and the `--deploy` flag; without both, deploy is skipped by design.

## Verified this session (clean sandbox, no local state)

| Check | Result |
|---|---|
| `gate:kitchens --strict` | ok:true, 40/40 polish rules |
| Existing packet rebuild → QC | grade A |
| Fresh prompt (Summit Roofing) → site | grade A, one shot |
| **Determinism**: same prompt run twice | **identical HTML fingerprints** (`8f99f337dbba7134`) |
| Ghost Agency `/intake` payload → site | grade A (`siteforge-intake-bridge-test`) |
| Live deploy of demo | https://siteforge-demo-summit-roofing.vercel.app (noindex, 7 hero-layer markers, JSON-LD) |
| Parser regression found+fixed | quoted testimonial no longer mistaken for business name |

## Ghost Agency integration contract

The `/intake` form on the public shell already emits exactly what `--from-intake` consumes (`businessName, industry, city, state, ownerEmail, phone, currentWebsite, services, notes`). Loop: intake → orchestrator ticket → runner executes `pnpm forge --from-intake <payload> --demo` → QC A → preview URL attached to the prospect record → consented follow-up (Riley/email) shows the preview. Non-demo (paid) builds drop `--demo` and use the deploy hook.

## Environment

Node 22 + `pnpm install` + `npx playwright install chromium`. On minimal Linux, one system lib may be missing (`libXdamage.so.1`) — extract from the `libxdamage1` deb and set `LD_LIBRARY_PATH` if you can't apt-install. `FIRECRAWL_API_KEY` optional (enrichment), `LOVABLE_API_KEY` optional (logo rescue), `VERCEL_DEPLOY_HOOK_URL` gates deploy.
