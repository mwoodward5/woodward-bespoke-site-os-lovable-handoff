import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-sitemap-index`. */
export const seo_sitemap_index_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-sitemap-index" }));
