import { createServerFn } from "@tanstack/react-start";
/** Server fn for `camera-live-filter`. */
export const camera_live_filter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "camera-live-filter" }));
