import { createServerFn } from "@tanstack/react-start";
/** Server fn for `trustpilot-widget` — glue recipe. */
export const trustpilot_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "trustpilot-widget", cat: "glue" }));
