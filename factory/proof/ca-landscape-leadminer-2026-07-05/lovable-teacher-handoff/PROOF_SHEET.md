# Proof Sheet — What We Actually Did

## Assignment

Run a real CA landscape prospect build loop, generate five local-business preview sites, wire them through the three-kitchen design system, deploy them to Vercel, smoke-test them, and package the result for Lovable review.

## Source And Enrichment

- Used the CA landscape LeadMiner queue.
- Ran Firecrawl enrichment where source sites were discoverable.
- Extracted or attempted extraction of:
  - website URL
  - logo candidates
  - image candidates
  - brand color signals
  - rendered screenshot/markdown/HTML where available
- Used source logos only when they were real image assets.
- Rejected junk assets such as Wix error graphics, favicons, social icons, CSS files, tiny avatars, and unrelated widgets.

## Site Matrix

| Business | City | Theme | Fonts | Source logo | Source images | Live URL |
|---|---:|---|---|---|---:|---|
| Landscape Connection, Inc. | Clovis | Estate Editorial | Cormorant Garamond + Manrope | yes | 4 | https://wss-ca-landscape-landscape-connection-inc.vercel.app |
| AJP LANDSCAPE INC | Los Angeles | Architect Grid | Space Grotesk + IBM Plex Sans | proposed | 0 | https://wss-ca-landscape-ajp-landscape-inc.vercel.app |
| Barriga Landscaping | Sacramento | Sunlit Neighborhood Letter | Fraunces + Nunito Sans | proposed | 0 | https://wss-ca-landscape-barriga-landscaping.vercel.app |
| Signature Landscape | Mission Viejo | Coastal Atlas | Newsreader + DM Sans | yes | 12 | https://wss-ca-landscape-signature-landscape.vercel.app |
| Richard Diaz Landscape | Orange | Stone Material Lab | Bricolage Grotesque + Source Sans 3 | yes | 23 | https://wss-ca-landscape-richard-diaz-landscape.vercel.app |

## Build Changes

- Rebuilt all five as distinct local-business previews, not proof dashboards.
- Added full route set:
  - `/`
  - `/services/`
  - `/gallery/`
  - `/quote/`
  - `/source/`
  - `/package/`
  - `/privacy/`
  - `/terms/`
  - `404.html`
  - `offline.html`
- Added favicon, manifest, robots, sitemap, security.txt, humans.txt, llms.txt, and OG SVG.
- Added hero video asset per site.
- Added kitchen wiring metadata.
- Replaced the stale quote/contact form with a modern estimate-studio component:
  - service chips
  - project size chips
  - timeline rail
  - stepper cards
  - liquid/HDR surface
  - mobile CTA dock
  - active choice JavaScript
- Removed public-facing internal language from the homepages.

## Verification

- Strict three-kitchen gate: passed.
- Vercel deploy and alias pinning: passed for all five.
- Public smoke test: passed for all five.
- Public route checks: home/source/package reachable.
- Video checks: hero MP4 assets reachable with `video/mp4`.
- Header checks: `X-Robots-Tag: noindex, nofollow` present.
- Homepage checks: no platform/source/package controls exposed.
- Homepage checks: banned internal phrases not detected.
- Screenshot checks: desktop and mobile captures created.
- Font checks in screenshots: custom Google fonts loaded.
- Layout checks in screenshots: no horizontal overflow.

## Proof Files

- `proof/CA_LANDSCAPE_LIVE_SMOKE.json`
- `proof/CA_LANDSCAPE_LIVE_SMOKE.md`
- `proof/CA_LANDSCAPE_DEPLOYMENTS_2026-07-06.json`
- `proof/CA_LANDSCAPE_THREE_KITCHEN_REBUILD_2026-07-06.json`
- `proof/CA_LANDSCAPE_APLUS_REBUILD_2026-07-06.md`
- `proof/screenshots/manifest.json`
- `proof/screenshots/*.png`

## Honest Caveat

This is not final A+ design. It is a working, deployed, smoke-tested draft with better structure and real proof. The remaining work is taste, visual richness, brand/media recovery, and making each site feel like a real premium local business website instead of a sophisticated generated preview.

