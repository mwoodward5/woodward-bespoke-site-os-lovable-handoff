import { createServerFn } from "@tanstack/react-start";
/** Server fn for `yelp-widget` — glue recipe. */
export const yelp_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "yelp-widget", cat: "glue" }));
