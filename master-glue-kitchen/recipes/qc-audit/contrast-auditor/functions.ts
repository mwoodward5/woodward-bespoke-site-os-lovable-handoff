import { createServerFn } from "@tanstack/react-start";
/** Server fn for `contrast-auditor` — qc-audit recipe. */
export const contrast_auditor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "contrast-auditor", cat: "qc-audit" }));
