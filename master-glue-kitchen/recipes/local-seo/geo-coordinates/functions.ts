import { createServerFn } from "@tanstack/react-start";
/** Server fn for `geo-coordinates` — local-seo recipe. */
export const geo_coordinates_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "geo-coordinates", cat: "local-seo" }));
