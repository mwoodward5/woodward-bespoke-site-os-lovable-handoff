# CA Landscape Remic Formula Rebuild - 2026-07-06

## What Changed

- Rebuilt the five CA landscape preview sites from the uploaded Remic formulas.
- Applied the split requested by the owner:
  - First three sites: Single-Page Cinematic formula.
  - Last two sites: Premier Multi-Page formula.
- Added Google Maps satellite embeds using `t=k`, nearby service-area pin lists, and direct Google directions links.
- Kept the three-kitchen gate active: `razzle-fx-kitchen`, `site-superpowers-kitchen`, and `master-glue-kitchen`.
- Redeployed all five Vercel aliases to fresh production deployments.
- Smoke-tested live home/source/package routes, hero videos, and the map/directions route requirements.

## Live URLs

| Site | Formula Lane | Live URL | Map Path |
| --- | --- | --- | --- |
| Landscape Connection, Inc. | Single-Page Cinematic | https://wss-ca-landscape-landscape-connection-inc.vercel.app | `/#map` |
| AJP LANDSCAPE INC | Single-Page Cinematic | https://wss-ca-landscape-ajp-landscape-inc.vercel.app | `/#map` |
| Barriga Landscaping | Single-Page Cinematic | https://wss-ca-landscape-barriga-landscaping.vercel.app | `/#map` |
| Signature Landscape | Premier Multi-Page | https://wss-ca-landscape-signature-landscape.vercel.app | `/service-areas/` |
| Richard Diaz Landscape | Premier Multi-Page | https://wss-ca-landscape-richard-diaz-landscape.vercel.app | `/service-areas/` |

## Verification

- Kitchen strict gate: passed.
- Vercel deployment aliases: passed.
- Live route smoke: passed for home, source, package, and hero MP4 assets.
- Map route smoke: passed for all five sites.
- Desktop/mobile screenshots: captured for all five homepages.

## Proof Files

- `CA_LANDSCAPE_DEPLOYMENTS_2026-07-06.json`
- `CA_LANDSCAPE_LIVE_SMOKE.json`
- `CA_LANDSCAPE_MAP_ROUTE_CHECK_2026-07-06.json`
- `screenshots/manifest.json`
- `screenshots/*-desktop.png`
- `screenshots/*-mobile.png`

## Honest Caveats

- These are live preview builds, not final A+ client-ready sites.
- The two premier multi-page sites now have real extra routes, but they are not yet fully expanded into deep 1,200-word authority pages.
- Some businesses still have weak source media or blocked/missing original sites, so the next quality jump is a stronger Firecrawl/GBP/owner-photo enrichment pass.
- Lighthouse, visual-diff scoring, schema validation, and full social-preview validation were not completed in this pass.
