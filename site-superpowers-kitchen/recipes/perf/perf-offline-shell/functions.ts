import { createServerFn } from "@tanstack/react-start";
/** Server fn for `perf-offline-shell`. */
export const perf_offline_shell_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "perf-offline-shell" }));
