import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sse-progress-bar`. */
export const sse_progress_bar_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sse-progress-bar" }));
