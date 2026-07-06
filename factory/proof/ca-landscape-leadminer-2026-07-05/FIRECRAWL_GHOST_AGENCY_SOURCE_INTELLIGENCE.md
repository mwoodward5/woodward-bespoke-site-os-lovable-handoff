# Firecrawl Source Intelligence Plan

Generated: 2026-07-05

## Boss Summary

Firecrawl should become the source-intelligence engine between LeadMiner and the
site factory. Google Places finds and scores the business. Firecrawl turns the
business website into usable build fuel: HTML, screenshot, links, brand clues,
logo candidates, media candidates, crawlable page map, and structured extraction.

## What We Use Now

- Google Places: find California landscape prospects and return name, phone,
  address, rating, reviews, hours, website, and maps URL.
- Direct HTML scrape: detect platform, meta title/description, colors, logo
  candidates, visible images, and broken-site signals.
- Firecrawl-ready code path: `run-ca-landscape-leadminer.mjs` now calls
  Firecrawl when `FIRECRAWL_API_KEY` exists in the process environment.
- Vercel previews: each generated site includes source/platform/package dropdown
  controls for the future a-la-carte product.

## Firecrawl API Roles

- Scrape: one URL into HTML, markdown, screenshot, branding, and links.
- Map: discover the URL structure before deciding what to scrape.
- Crawl: pull a small approved slice of the site, such as home, services,
  gallery, about, and contact.
- Extract: convert messy pages into typed fields like services, service areas,
  proof claims, owner names, hours, image URLs, social links, and trust signals.
- Batch scrape: run the top prospect URLs in parallel after LeadMiner scoring.

Official docs checked:

- https://docs.firecrawl.dev/api-reference/introduction
- https://docs.firecrawl.dev/api-reference/endpoint/scrape
- https://docs.firecrawl.dev/api-reference/endpoint/extract
- https://docs.firecrawl.dev/api-reference/endpoint/crawl
- https://docs.firecrawl.dev/api-reference/endpoint/map

## Product Flow

1. LeadMiner queries a vertical and market.
2. Google Places returns 100 candidates.
3. Score weak web presence: no site, broken site, bad platform, no logo, thin
   media, missing meta, low reviews, slow response, non-HTTPS.
4. Firecrawl enriches the top 10:
   - scrape official website
   - map linked pages
   - crawl service/gallery/about/contact pages
   - extract structured build fields
   - capture rendered screenshot
   - detect branding/media candidates
5. Build the top 5 previews.
6. Each preview ships with:
   - home route
   - source route
   - package route
   - source packet JSON
   - dropdowns for source, platform, and package
   - noindex headers until owner approval

## Magic Tricks To Add Next

- Logo pull: prefer header/custom-logo/brand selectors, then favicon only as
  last-resort placeholder.
- Brand token extraction: colors, typography hints, button shape, image mood,
  and source-site visual language.
- Media remaster queue: crop, sharpen, color-grade, denoise, convert AVIF/WebP,
  and generate lightbox variants.
- Motion from stills: create layered parallax hero plates, foreground cutouts,
  dust/water/grass overlays, and scroll-linked gallery movement. Do not rely on
  generic Ken Burns zoom as the only motion.
- Source confidence meter: show how much of the preview comes from verified
  source versus premium fallback.
- A-la-carte controls: platform, source, media package, launch target, and
  rebuild type should all update the recommendation.

## Important Truth

The new Firecrawl API key was provided in chat, but this run did not persist it
to disk. The scan re-ran with direct HTML fallback because the key was not in the
local clipboard/environment at execution time. The code is wired so the same
command uses Firecrawl as soon as `FIRECRAWL_API_KEY` is set for the process or
the local environment.

## Files Created

- `run-ca-landscape-leadminer.mjs`
- `generate-ca-landscape-preview-sites.mjs`
- `smoke-ca-landscape-sites.mjs`
- `ca-landscape-top-100.json`
- `ca-landscape-top-100.csv`
- `ca-landscape-top-10.json`
- `ca-landscape-build-queue.json`
- `CA_LANDSCAPE_LIVE_SMOKE.json`
- `CA_LANDSCAPE_LIVE_SMOKE.md`
