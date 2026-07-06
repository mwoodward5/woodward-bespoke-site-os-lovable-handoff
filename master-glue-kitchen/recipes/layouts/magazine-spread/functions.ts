import { createServerFn } from "@tanstack/react-start";
/** Server fn for `magazine-spread` — layouts recipe. */
export const magazine_spread_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "magazine-spread", cat: "layouts" }));
