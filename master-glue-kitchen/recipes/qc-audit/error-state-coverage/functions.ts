import { createServerFn } from "@tanstack/react-start";
/** Server fn for `error-state-coverage` — qc-audit recipe. */
export const error_state_coverage_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "error-state-coverage", cat: "qc-audit" }));
