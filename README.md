# Woodward Bespoke Site OS - Lovable A+ Handoff

This repo is the external handoff for the **Woodward Bespoke Site OS**: a prompt-driven local-business website builder engine. The goal is not for Codex to hand-build every customer site forever. The goal is a repeatable tool where a business packet, prompt, source assets, and enrichment data go in, and an A+ client-ready preview site comes out.

Lovable should treat this as the source repo to grade, patch, and optimize.

## What This Is

- A builder engine seed for the Ghost Agency website product.
- Three recipe libraries installed at repo root:
  - `razzle-fx-kitchen/` for visual effects and motion.
  - `site-superpowers-kitchen/` for behavior, routes, AI, voice, payments, auth, data, and UX patterns.
  - `master-glue-kitchen/` for typography, layouts, content rescue, local SEO, GEO/AEO, polish rules, and QA gates.
- A generator in `factory/` that builds five California landscape preview sites from enriched LeadMiner-style packets.
- Generated static outputs in `generated-sites/`.
- Smoke/proof artifacts in `proof/`.
- A product-level builder spec in `engine/` for turning this into a click-to-create app.

## Current Live Examples

- [Landscape Connection](https://wss-ca-landscape-landscape-connection-inc.vercel.app)
- [AJP Landscape](https://wss-ca-landscape-ajp-landscape-inc.vercel.app)
- [Barriga Landscaping](https://wss-ca-landscape-barriga-landscaping.vercel.app)
- [Signature Landscape](https://wss-ca-landscape-signature-landscape.vercel.app)
- [Richard Diaz Landscape](https://wss-ca-landscape-richard-diaz-landscape.vercel.app)

These are better than the first passes, but still not A+. The current ask is for Lovable to improve the engine so future generated sites do not plateau at B/B+.

## How To Run The Current Factory

```bash
npm run gate:kitchens
npm run build:ca-landscape
npm run smoke:ca-landscape
npm run capture:ca-landscape
```

The current landscape generator reads:

- `factory/proof/ca-landscape-leadminer-2026-07-05/ca-landscape-build-queue-enriched.json`
- fallback: `factory/proof/ca-landscape-leadminer-2026-07-05/ca-landscape-build-queue.json`

It outputs static site bundles to:

- `factory/dist-ca-landscape-sites/`

The already-deployed static bundles are also copied into:

- `generated-sites/`

## What Lovable Should Fix

We need the builder engine to produce local-business sites that feel individually designed, not assembled from five reusable hero card shapes.

Primary upgrade targets:

- Replace rectangular hero tiles with organic, one-of-one hero compositions.
- Use 8-12 visible layers per first viewport: video, stills, logo, line art, glass, texture, map/geo detail, service proof, before/after, CTA, local marker, and trust surface.
- Remaster/source logos and make brand marks feel intentional, usually 72-80 px where the layout supports it.
- Improve Veo/Gemini video prompt generation per business vertical and source facts.
- Improve source asset rescue: scrape site, GBP, photos, reviews, colors, logo, service terms, and local proof before design.
- Ensure each generated site has unique typography, button grammar, section order, card geometry, motion language, and hero silhouette.
- Add hard QA gates that fail the run if two sites in a batch share the same visual structure.

## Important Product Framing

This is **not** a platform we sell to agencies to build websites. This is Woodward Software Labs' own automated local website agency machine:

1. LeadMiner finds weak local businesses.
2. Report systems show ranking and web-presence gaps.
3. The Site OS prebuilds a polished preview website.
4. VAPI/Twilio agents follow up with prospects who engage.
5. The business buys a managed website subscription.
6. Our backend team/agents handle edits, delivery, support, and billing.

Public pages should never expose internal words like kitchen, LeadMiner, proof board, migration, PageHub, or Codex.

## Security

This repo is sanitized for external review. It intentionally includes no real `.env` files or live API secrets. Any API files are examples or docs only.

