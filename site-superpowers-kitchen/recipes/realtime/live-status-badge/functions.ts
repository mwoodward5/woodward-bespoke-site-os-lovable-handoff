import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-status-badge`. */
export const live_status_badge_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-status-badge" }));
