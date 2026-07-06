import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bento-4x3` — layouts recipe. */
export const bento_4x3_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bento-4x3", cat: "layouts" }));
