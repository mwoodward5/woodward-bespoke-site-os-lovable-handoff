import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-heavy-anim-gate`. */
export const perf_heavy_anim_gate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-heavy-anim-gate" }));
