import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brutalist-grid` — layouts recipe. */
export const brutalist_grid_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brutalist-grid", cat: "layouts" }));
