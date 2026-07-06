import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bento-2x2` — layouts recipe. */
export const bento_2x2_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bento-2x2", cat: "layouts" }));
