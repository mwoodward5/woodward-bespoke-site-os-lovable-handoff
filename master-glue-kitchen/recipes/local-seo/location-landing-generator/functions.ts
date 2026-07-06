import { createServerFn } from "@tanstack/react-start";
/** Server fn for `location-landing-generator` — local-seo recipe. */
export const location_landing_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "location-landing-generator", cat: "local-seo" }));
