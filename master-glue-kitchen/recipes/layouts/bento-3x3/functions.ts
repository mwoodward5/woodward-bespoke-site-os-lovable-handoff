import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bento-3x3` — layouts recipe. */
export const bento_3x3_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bento-3x3", cat: "layouts" }));
