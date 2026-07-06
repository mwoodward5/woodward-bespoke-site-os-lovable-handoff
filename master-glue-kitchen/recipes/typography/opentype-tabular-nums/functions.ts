import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opentype-tabular-nums` — typography recipe. */
export const opentype_tabular_nums_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opentype-tabular-nums", cat: "typography" }));
