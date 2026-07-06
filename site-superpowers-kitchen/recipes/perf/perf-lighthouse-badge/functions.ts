import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-lighthouse-badge`. */
export const perf_lighthouse_badge_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-lighthouse-badge" }));
