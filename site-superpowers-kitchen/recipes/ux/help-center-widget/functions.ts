import { createServerFn } from "@tanstack/react-start";
/** Server fn for `help-center-widget`. */
export const help_center_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "help-center-widget" }));
