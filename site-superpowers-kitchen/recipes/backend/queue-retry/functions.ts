import { createServerFn } from "@tanstack/react-start";
/** Server fn for `queue-retry`. */
export const queue_retry_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "queue-retry" }));
