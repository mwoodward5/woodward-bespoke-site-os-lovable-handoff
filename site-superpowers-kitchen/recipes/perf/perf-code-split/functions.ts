import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-code-split`. */
export const perf_code_split_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-code-split" }));
