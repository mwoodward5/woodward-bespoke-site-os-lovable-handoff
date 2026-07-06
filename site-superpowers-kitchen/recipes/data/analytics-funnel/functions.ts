import { createServerFn } from "@tanstack/react-start";
/** Server fn for `analytics-funnel`. */
export const analytics_funnel_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "analytics-funnel" }));
