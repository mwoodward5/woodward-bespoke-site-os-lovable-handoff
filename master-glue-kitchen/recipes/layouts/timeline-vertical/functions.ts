import { createServerFn } from "@tanstack/react-start";
/** Server fn for `timeline-vertical` — layouts recipe. */
export const timeline_vertical_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "timeline-vertical", cat: "layouts" }));
