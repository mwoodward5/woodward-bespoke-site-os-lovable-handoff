import { createServerFn } from "@tanstack/react-start";
/** Server fn for `swiss-grid` — layouts recipe. */
export const swiss_grid_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "swiss-grid", cat: "layouts" }));
