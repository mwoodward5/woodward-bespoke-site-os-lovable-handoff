import { createServerFn } from "@tanstack/react-start";
/** Server fn for `trust-band` — layouts recipe. */
export const trust_band_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "trust-band", cat: "layouts" }));
