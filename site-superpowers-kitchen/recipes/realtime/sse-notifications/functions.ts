import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sse-notifications`. */
export const sse_notifications_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sse-notifications" }));
