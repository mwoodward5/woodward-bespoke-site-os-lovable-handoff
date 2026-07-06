import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pricing-3tier` — layouts recipe. */
export const pricing_3tier_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pricing-3tier", cat: "layouts" }));
