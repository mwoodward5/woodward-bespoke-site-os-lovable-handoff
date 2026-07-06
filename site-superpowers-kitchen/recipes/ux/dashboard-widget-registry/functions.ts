import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dashboard-widget-registry`. */
export const dashboard_widget_registry_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dashboard-widget-registry" }));
