import { createServerFn } from "@tanstack/react-start";
/** Server fn for `wcag-22-aa-sweep` — qc-audit recipe. */
export const wcag_22_aa_sweep_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "wcag-22-aa-sweep", cat: "qc-audit" }));
