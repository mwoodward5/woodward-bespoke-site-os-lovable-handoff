import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opentype-small-caps` — typography recipe. */
export const opentype_small_caps_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opentype-small-caps", cat: "typography" }));
