import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opentype-stylistic-sets` — typography recipe. */
export const opentype_stylistic_sets_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opentype-stylistic-sets", cat: "typography" }));
