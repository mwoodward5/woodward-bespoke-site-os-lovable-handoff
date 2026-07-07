# New-thread takeover prompt (paste into a fresh session with the folder connected)

THE PROJECT FOLDER: everything lives in
`C:\Users\Main\Documents\New project 2\woodward-bespoke-site-os-lovable-handoff`
The workspace folder `C:\Users\Main\Documents\New project 2` is already connected
to this session — do NOT ask for access, do NOT ask clarifying questions. Go
straight into the repo above and start working.

STEP 1 — read these four files from that repo, in this order, before any code:
1. `docs\launch\RENDERER_V7_BRIEF.md` — your mission, priority-ordered
2. `docs\launch\ENGINE_VISUAL_STANDARDS.md` — hard rules, never violate
3. `docs\templates\SINGLE-PAGE CINEMATIC Remic.txt` and `docs\templates\PREMIER MULTI-PAGE Remic.txt` — the visual formulas
4. `docs\launch\LAUNCH_PACK.md` — architecture, API map, smoke evidence
Quality bar to study in a browser: https://vivid-vertex-builder.lovable.app/

STEP 2 — build Renderer V7 per the brief, single pass: media engine (logo
upload endpoint + AI logo candidates + labeled AI ambiance photos — never fake
job photos or proof), Firecrawl GBP deep import (hours, review snippets with
attribution, photos, lat/lng), satellite map + directions block (MapLibre +
Esri imagery), both Remic formulas as real section architectures for
single_page_cinematic and premier_multi_page, a visible optimization scorecard
on the preview tab, and upload dropzones in the Import tab.

ACCEPTANCE: forge "Woodward Pool Builders, Mission Viejo, CA, pool service"
from name/city/trade only → looks sellable, zero empty panes. QC must print
11/11 including the batch anti-template gate. Then redeploy both live targets
and verify the URLs return 200 with the new output.

CURRENT LIVE STATE (all verified working — don't rebuild, extend):
- Marketing site: https://siteforge-web-three.vercel.app (Vercel project `siteforge-web`, team rocketsites)
- Builder app: https://siteforge-app-rocketsites.vercel.app (project `siteforge-app`, serverless entry `api\index.mjs`, state in Vercel Blob store `siteforge-data`; sign in with any email + beta code `FORGE-WSS-2026`)
- Active renderer: `factory\pipeline\05-build-v6.mjs` (trade-true, QC 11/11). The old `05-build.mjs` is retired — never import it again.
- App code: `app\` (server.mjs, lib\, views\, scripts\, test\smoke.mjs — 19-check E2E suite, chunk with SITEFORGE_SMOKE_PART=1|2|3)
- Secrets: `.env.local` at repo root — VERCEL_TOKEN (if expired, ask Mark to mint a new one at vercel.com/account/settings/tokens, scope "Woodward Software Systems"), FIRECRAWL_API_KEY (verified live), VERCEL_TEAM_ID.
- Deploy commands (run from repo root): `node app/scripts/deploy-vercel.mjs --prod` (marketing) · `node app/scripts/deploy-app.mjs` (builder app). Local run: `node app/server.mjs` → localhost:8787.
- Stripe: live catalog already created (8 products, stage:prelaunch, lookup keys match `app\config\plans.json`); app uses mock checkout until Mark supplies sk_test_ keys.

ENVIRONMENT LANDMINES (cost the last session hours — respect them):
- Sandbox bash: background processes DIE when a call ends. Foreground only, chunk work to <40s per call.
- Mount sync lag: files EDITED via Write/Edit can read back TRUNCATED in the sandbox for minutes (the host file is always correct). Keep a sandbox working copy at ~/sf (rsync the repo minus node_modules/.git), mirror every edit into ~/sf with python string-replace, run/test in ~/sf. Brand-new files sync fine.
- Repo node_modules is Windows-pnpm — unusable in the Linux sandbox. In ~/sf run `npm install --no-save jsdom@24 playwright@1.47` (strip "workspaces" from the package.json copy first). Chromium: `npx playwright install chromium`, then run everything with LD_LIBRARY_PATH=/tmp/xdlibs/usr/lib/x86_64-linux-gnu (if /tmp was wiped: `cd /tmp && apt-get download libxdamage1 && dpkg-deb -x libxdamage1*.deb /tmp/xdlibs`).
- Git: `.git/index.lock` may be held by the parallel Ghost Agency session. Don't force it. When free, commit: app, docs/launch, docs/templates, factory/pipeline/05-build-v6.mjs, api, vercel.json, .gitignore.
- Shared-lane rule: NEVER edit `scripts\forge.mjs`, the old `factory\pipeline\0*.mjs` stages, `qc-audit\qc.mjs`, or any kitchen folder. Extend via new files (that's why v6 is a new file).
- On Vercel there's no Chromium: QC runs degraded there (grade caps at B, publish accepts B+degraded). The full 14-check gate runs locally — that's where acceptance is measured.

Tone: concise boss mode. Verify every claim with a command or a live URL. Mark
is present to approve anything that needs his hands (tokens, purchases, domains).
