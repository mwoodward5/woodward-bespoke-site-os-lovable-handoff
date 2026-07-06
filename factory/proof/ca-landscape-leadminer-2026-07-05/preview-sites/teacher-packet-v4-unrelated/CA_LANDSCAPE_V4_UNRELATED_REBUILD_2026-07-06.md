# CA Landscape V4 Unrelated Rebuild

Generated: 2026-07-06

## Live URLs
- Landscape Connection, Inc.: https://wss-ca-landscape-landscape-connection-inc.vercel.app
- AJP LANDSCAPE INC: https://wss-ca-landscape-ajp-landscape-inc.vercel.app
- Barriga Landscaping: https://wss-ca-landscape-barriga-landscaping.vercel.app
- Signature Landscape: https://wss-ca-landscape-signature-landscape.vercel.app
- Richard Diaz Landscape: https://wss-ca-landscape-richard-diaz-landscape.vercel.app

## What Changed
- Rebuilt the generator around five different hero models: split-editorial, service-map, magazine-letter, atlas-grid, and material-lab.
- Separated typography, button shapes, section order, hero widget design, image geometry, nav treatment, and quote-intake language for every site.
- Removed public kitchen-stack markers, widget recipe labels, and internal proof language from the generated public pages.
- Added a stricter public ban scan and fixed the visible/DOM copy issues before deployment.
- Preserved the map/directions flow, satellite map embeds, quote routes, service routes, gallery routes, source/package proof routes, and noindex headers.
- Repaired hero CTA overlap on the estate, scrapbook, and material-lab layouts after screenshot inspection.

## Proof
- Build: `node bespoke-site-os-factory/build-ca-landscape-aplus-sites.mjs` passed.
- Kitchen gate: `node scripts/three-kitchen-gate.mjs --strict` passed.
- Public ban scan: `BAN_SCAN_OK`.
- Live smoke: `bespoke-site-os-factory/proof/ca-landscape-leadminer-2026-07-05/preview-sites/CA_LANDSCAPE_LIVE_SMOKE.json` is green.
- Screenshots: `bespoke-site-os-factory/proof/ca-landscape-leadminer-2026-07-05/preview-sites/screenshots/`.

## Honest Caveats
- These are deployed, smoke-tested previews, not final owner-approved production sites.
- AJP and Barriga still need better owner/source media because the source passes returned weak or missing usable assets.
- Lighthouse, pa11y, and full JSON-LD validation were not run in this speed pass.
- The next A+ jump is not another template pass; it is deeper client asset recovery, better live media, and per-site microinteractions.
