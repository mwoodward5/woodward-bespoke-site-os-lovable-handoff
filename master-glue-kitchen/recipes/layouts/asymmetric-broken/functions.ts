import { createServerFn } from "@tanstack/react-start";
/** Server fn for `asymmetric-broken` — layouts recipe. */
export const asymmetric_broken_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "asymmetric-broken", cat: "layouts" }));
