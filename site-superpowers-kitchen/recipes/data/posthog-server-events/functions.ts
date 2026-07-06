import { createServerFn } from "@tanstack/react-start";
/** Server fn for `posthog-server-events`. */
export const posthog_server_events_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "posthog-server-events" }));
