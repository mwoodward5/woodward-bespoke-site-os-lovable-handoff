import { createServerFn } from "@tanstack/react-start";
/** Server fn for `queue-simple`. */
export const queue_simple_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "queue-simple" }));
