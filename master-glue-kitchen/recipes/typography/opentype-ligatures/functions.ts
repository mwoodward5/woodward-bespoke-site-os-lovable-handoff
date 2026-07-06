import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opentype-ligatures` — typography recipe. */
export const opentype_ligatures_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opentype-ligatures", cat: "typography" }));
