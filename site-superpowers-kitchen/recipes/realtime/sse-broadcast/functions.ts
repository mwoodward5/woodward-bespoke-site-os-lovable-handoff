import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sse-broadcast`. */
export const sse_broadcast_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sse-broadcast" }));
