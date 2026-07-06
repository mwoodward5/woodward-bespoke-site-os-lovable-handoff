import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hero-split` — layouts recipe. */
export const hero_split_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hero-split", cat: "layouts" }));
