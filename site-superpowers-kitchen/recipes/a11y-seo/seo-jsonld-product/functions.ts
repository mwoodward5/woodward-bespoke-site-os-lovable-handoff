import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-product`. */
export const seo_jsonld_product_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-product" }));
