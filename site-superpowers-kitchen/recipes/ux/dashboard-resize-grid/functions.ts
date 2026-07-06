import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dashboard-resize-grid`. */
export const dashboard_resize_grid_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dashboard-resize-grid" }));
