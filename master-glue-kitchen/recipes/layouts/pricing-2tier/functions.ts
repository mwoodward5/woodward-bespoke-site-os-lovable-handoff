import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pricing-2tier` — layouts recipe. */
export const pricing_2tier_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pricing-2tier", cat: "layouts" }));
