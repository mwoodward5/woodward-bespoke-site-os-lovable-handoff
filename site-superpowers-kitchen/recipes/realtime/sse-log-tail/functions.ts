import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sse-log-tail`. */
export const sse_log_tail_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sse-log-tail" }));
