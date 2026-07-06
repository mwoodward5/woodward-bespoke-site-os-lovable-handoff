import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-howto`. */
export const seo_jsonld_howto_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-howto" }));
