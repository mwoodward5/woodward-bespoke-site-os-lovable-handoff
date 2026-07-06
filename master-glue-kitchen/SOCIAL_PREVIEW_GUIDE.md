# SOCIAL PREVIEW GUIDE

## Ship OG image on every route
Never rely on the site's default OG image. Generate one per route via `recipes/social-preview/og-dynamic-generator` at build time (or on request).

## Per-platform aspect ratios
See `tokens/social-specs.json`. Each platform has different crops:
- OG: 1200×630
- Twitter: 1200×628
- LinkedIn: 1200×627
- Pinterest: 1000×1500
- Instagram square: 1080×1080, story: 1080×1920
- TikTok / Reels / Shorts: 1080×1920
- YouTube thumb: 1280×720

## Per-language OG
When the site ships hreflang, generate one OG image per locale so shares in French show French text.

## Rich preview beyond OG
- `whatsapp-preview` — WhatsApp reads OG but caps image size at 300KB.
- `slack-unfurl` — Slack respects OG + `og:image:width`/`height`; ship both.
- `discord-embed` — Discord reads `theme-color` for the strip color.
- `imessage-rich-link` — needs a specific icon set in the manifest.

## Debugging
After changing a preview, the platform's cache means shares won't update immediately. Send the user to the platform's debugger:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
