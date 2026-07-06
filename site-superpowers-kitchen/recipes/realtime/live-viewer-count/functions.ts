import { createServerFn } from "@tanstack/react-start";
/** Server fn for `live-viewer-count`. */
export const live_viewer_count_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "live-viewer-count" }));
