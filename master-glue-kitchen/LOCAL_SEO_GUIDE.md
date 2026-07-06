# LOCAL SEO GUIDE

## Absolute basics
- `LocalBusiness` JSON-LD on every location page.
- `GeoCoordinates` with real lat/long.
- NAP consistency (Name/Address/Phone) — identical across site + Google Business Profile + directories.
- Opening hours with timezone.
- Real embedded map (custom style, not raw Google iframe when possible).

## Multi-location
- One URL per location: `/locations/{city}/{neighborhood}`.
- One `LocalBusiness` schema per URL — not one aggregate.
- Service-area schema when service is delivered off-site.
- Internal cross-links between location pages via `BreadcrumbList`.

## City × Service pages
Generate `{city}-{service}` pages when the service is location-sensitive:
`/plumbing-in-brooklyn`, `/plumbing-in-queens`, etc.
Recipe: `recipes/local-seo/city-service-generator`.

## Timezone-aware content
Show opening status ("Open until 8pm") in the visitor's timezone, not the business's.
Recipe: `recipes/local-seo/hours-timezone`.
