# LAYOUT GUIDE

40 layout systems. Pick by content shape, not by taste:

| Content shape | Layout |
|---|---|
| Founder + product + 3 photos | `hero-split` or `hero-centered` |
| Long story | `longscroll-storyline` or `sticky-side-story` |
| Portfolio | `masonry-normalize` (with `gallery-aspect-harmonize` first!) |
| Pricing | `pricing-3tier` (default) or `comparison-table` |
| Team | `card-fan` or `zigzag-alt` |
| News / blog | `magazine-spread` or `editorial-12col` |
| Product features | `feature-matrix` or `bento-3x3` |
| Case studies | `manifesto-page` |

## The gallery rule
Never render a gallery without first running `gallery-aspect-harmonize`. Mixed aspect ratios look amateur. The recipe crops to a single ratio, respecting the detected subject focal point.
