# CA Landscape Three-Kitchen Rebuild

Status: generated locally with explicit kitchen wiring.

What changed:
- The old FFmpeg placeholder loop was removed. Sites now use a provider-generated `assets/hero-video.mp4` when present, otherwise they ship an explicit Gemini/Veo request manifest and source-photo fallback.
- Generator reads root kitchen tokens and polish rules before building.
- Public pages no longer use placeholder/source-report gallery copy on the home page.
- Heavy all-bold typography is reduced; nav, buttons, cards, and captions have separate weights.
- Each site ships `kitchen-wiring.json` documenting recipes, API policy, and recipe stack.

Live targets:
- Landscape Connection, Inc.: https://wss-ca-landscape-landscape-connection-inc.vercel.app (estateLedger, Cormorant Garamond + Manrope)
- AJP LANDSCAPE INC: https://wss-ca-landscape-ajp-landscape-inc.vercel.app (architectGrid, Antonio + IBM Plex Sans)
- Barriga Landscaping: https://wss-ca-landscape-barriga-landscaping.vercel.app (sunlitLetter, Fraunces + Nunito Sans)
- Signature Landscape: https://wss-ca-landscape-signature-landscape.vercel.app (coastalAtlas, Playfair Display + DM Sans)
- Richard Diaz Landscape: https://wss-ca-landscape-richard-diaz-landscape.vercel.app (stoneBlueprint, Bricolage Grotesque + Inter)
