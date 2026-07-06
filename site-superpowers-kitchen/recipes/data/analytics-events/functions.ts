import { createServerFn } from "@tanstack/react-start";
/** Server fn for `analytics-events`. */
export const analytics_events_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "analytics-events" }));
