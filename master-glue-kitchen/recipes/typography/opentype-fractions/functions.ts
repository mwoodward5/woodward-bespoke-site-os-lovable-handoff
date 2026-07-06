import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opentype-fractions` — typography recipe. */
export const opentype_fractions_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opentype-fractions", cat: "typography" }));
