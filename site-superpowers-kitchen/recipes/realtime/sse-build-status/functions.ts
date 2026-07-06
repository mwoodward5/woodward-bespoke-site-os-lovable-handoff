import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sse-build-status`. */
export const sse_build_status_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sse-build-status" }));
