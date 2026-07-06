import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-canonical`. */
export const seo_canonical_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-canonical" }));
