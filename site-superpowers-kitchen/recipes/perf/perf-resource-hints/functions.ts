import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-resource-hints`. */
export const perf_resource_hints_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-resource-hints" }));
