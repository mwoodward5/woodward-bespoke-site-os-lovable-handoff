import { createServerFn } from "@tanstack/react-start";
/** Server fn for `timeline-horizontal` — layouts recipe. */
export const timeline_horizontal_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "timeline-horizontal", cat: "layouts" }));
