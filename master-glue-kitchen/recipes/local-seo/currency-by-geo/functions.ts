import { createServerFn } from "@tanstack/react-start";
/** Server fn for `currency-by-geo` — local-seo recipe. */
export const currency_by_geo_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "currency-by-geo", cat: "local-seo" }));
