import { createServerFn } from "@tanstack/react-start";
/** Server fn for `nps-widget`. */
export const nps_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "nps-widget" }));
