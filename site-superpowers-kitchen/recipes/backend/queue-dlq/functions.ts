import { createServerFn } from "@tanstack/react-start";
/** Server fn for `queue-dlq`. */
export const queue_dlq_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "queue-dlq" }));
