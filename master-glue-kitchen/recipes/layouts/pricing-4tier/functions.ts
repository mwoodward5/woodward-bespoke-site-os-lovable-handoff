import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pricing-4tier` — layouts recipe. */
export const pricing_4tier_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pricing-4tier", cat: "layouts" }));
