import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-breadcrumb`. */
export const seo_jsonld_breadcrumb_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-breadcrumb" }));
