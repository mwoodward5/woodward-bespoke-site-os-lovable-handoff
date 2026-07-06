import { createServerFn } from "@tanstack/react-start";
/** Server fn for `visual-regression-baseline` — qc-audit recipe. */
export const visual_regression_baseline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "visual-regression-baseline", cat: "qc-audit" }));
