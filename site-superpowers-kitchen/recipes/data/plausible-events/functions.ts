import { createServerFn } from "@tanstack/react-start";
/** Server fn for `plausible-events`. */
export const plausible_events_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "plausible-events" }));
