import { createServerFn } from "@tanstack/react-start";
/** Server fn for `analytics-retention`. */
export const analytics_retention_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "analytics-retention" }));
