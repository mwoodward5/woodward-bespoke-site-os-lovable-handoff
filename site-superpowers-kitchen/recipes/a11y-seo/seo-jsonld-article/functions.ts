import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-article`. */
export const seo_jsonld_article_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-article" }));
