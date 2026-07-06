# HOW TO ASK

The phrase mapper is fuzzy but literal. Say what you want in plain English:

| You say | It maps to |
|---|---|
| "make the logo shimmer" | `recipes/logos/shimmer-sweep` |
| "aurora background" | `recipes/backgrounds/aurora-mesh` |
| "kinetic marquee headline" | `recipes/type/kinetic-marquee` |
| "brutalist card" | `recipes/surfaces/brutalist-hard` |
| "corner brackets" | `recipes/decor/corner-brackets` |

Rules:
1. Prefer the noun + verb form ("make X do Y").
2. Include the target ("logo", "headline", "card", "background").
3. If ambiguous, the mapper returns the top 3 with confidence scores — pick one.

See `phrases.json` for the full 1000 canonical triggers or `phrases.full.json` for exhaustive.
