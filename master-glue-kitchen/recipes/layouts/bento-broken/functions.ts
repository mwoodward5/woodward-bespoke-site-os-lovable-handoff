import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bento-broken` — layouts recipe. */
export const bento_broken_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bento-broken", cat: "layouts" }));
