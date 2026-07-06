import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pricing-toggle-annual` — layouts recipe. */
export const pricing_toggle_annual_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pricing-toggle-annual", cat: "layouts" }));
