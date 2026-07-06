import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-noise-cheap`. */
export const perf_noise_cheap_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-noise-cheap" }));
