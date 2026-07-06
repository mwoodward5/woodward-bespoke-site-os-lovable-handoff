import { createServerFn } from "@tanstack/react-start";
/** Server fn for `edge-locations-guide` — deploy recipe. */
export const edge_locations_guide_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "edge-locations-guide", cat: "deploy" }));
