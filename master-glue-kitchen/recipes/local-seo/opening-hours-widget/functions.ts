import { createServerFn } from "@tanstack/react-start";
/** Server fn for `opening-hours-widget` — local-seo recipe. */
export const opening_hours_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "opening-hours-widget", cat: "local-seo" }));
