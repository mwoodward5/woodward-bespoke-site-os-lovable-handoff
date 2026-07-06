# Builder Engine Spec

## Product Goal

Create a web app where an operator can paste a business/build prompt, attach or fetch source assets, click **Create Site**, and receive a production-grade preview website deployed to Vercel.

The engine should reduce repeated AI spend by caching enrichment, reusing kitchen recipes, and running deterministic verification before any expensive model call.

## Target Flow

1. Operator enters business name, market, category, current website, GBP URL if known, phone, city, and desired offer.
2. Engine runs source discovery:
   - Google/business web lookup.
   - Firecrawl website crawl.
   - GBP/profile scrape where allowed.
   - Logo extraction from header/social/metadata.
   - Color, typography, photo, reviews, services, hours, NAP, and location extraction.
3. Engine builds a `business_packet.json`.
4. Engine chooses a unique design direction:
   - visual metaphor,
   - type pair,
   - hero structure,
   - media treatment,
   - motion vocabulary,
   - section order,
   - CTA grammar.
5. Engine composes with the three kitchens:
   - `master-glue-kitchen` first for polish rules, typography, layout, content rescue, local SEO, GEO/AEO, QC.
   - `razzle-fx-kitchen` for visual/motion ingredients.
   - `site-superpowers-kitchen` for behavior, forms, maps, chat, payments, data, and routes.
6. Engine generates the site bundle.
7. Engine runs gates:
   - screenshot desktop/mobile,
   - duplicate-layout detector,
   - hero-shape detector,
   - typography detector,
   - media count detector,
   - no internal language detector,
   - local SEO/schema detector,
   - accessibility/core-web-vitals budget.
8. Engine deploys to Vercel preview.
9. Engine returns:
   - live URL,
   - screenshot sheet,
   - grade,
   - next fix list,
   - source proof,
   - downloadable handoff package.

## Builder UI Requirements

The app should have one clear operator console:

- Prompt textarea.
- Business fields.
- Source URL / GBP URL fields.
- Dropdowns for build type: single-page cinematic, premier multi-page, service landing page, offer page.
- Dropdowns for source platform: unknown, Wix, WordPress, Squarespace, Shopify, custom, no website.
- Asset upload for logos/photos.
- Toggles for Firecrawl, GBP scrape, BrightData/local SERP, video generation, map embeds, AI chat, voice narration, payment CTA.
- Button: **Create Preview Site**.
- Status timeline: discover, scrape, rescue, design, build, verify, deploy.
- Output panel: live URL, screenshots, grade, JSON packet, deploy log.

## A+ Design Gate

A build should fail if:

- The hero is just a centered text block plus one rectangular image card.
- Two sites in the same batch share the same hero silhouette.
- Two sites in the same batch share the same first four section shapes.
- The logo is initials-only when a source logo exists or can be reconstructed.
- The hero has fewer than five visible layers.
- The page looks more like a SaaS dashboard than a local business website.
- The site has fewer than six meaningful real/source/remastered media assets when source material is available.
- The type system uses the same font pair as another batch site without an intentional reason.
- CTA buttons, cards, and nav pills share the same geometry across batch sites.

## Model/Cost Policy

- Cache all source packets.
- Use deterministic local transforms first.
- Use lower-cost text models for extraction and content mapping.
- Use premium visual/video models only after the packet is complete and the design direction is locked.
- Never burn premium calls to compensate for missing source discovery.

## Public Copy Boundary

The generated client preview site should talk only to the local business buyer:

- what the business does,
- why the website feels trustworthy,
- services,
- location,
- proof,
- estimate/contact CTA.

It should not mention Woodward internals, kitchens, LeadMiner, agents, proof boards, Codex, Lovable, PageHub, or migration language.

