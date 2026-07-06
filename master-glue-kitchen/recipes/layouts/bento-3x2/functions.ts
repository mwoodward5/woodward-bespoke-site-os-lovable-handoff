import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bento-3x2` — layouts recipe. */
export const bento_3x2_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bento-3x2", cat: "layouts" }));
