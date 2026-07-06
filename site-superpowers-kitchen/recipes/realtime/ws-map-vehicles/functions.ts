import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ws-map-vehicles`. */
export const ws_map_vehicles_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ws-map-vehicles" }));
