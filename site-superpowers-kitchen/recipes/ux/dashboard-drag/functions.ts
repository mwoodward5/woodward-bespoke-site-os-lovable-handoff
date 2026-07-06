import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dashboard-drag`. */
export const dashboard_drag_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dashboard-drag" }));
