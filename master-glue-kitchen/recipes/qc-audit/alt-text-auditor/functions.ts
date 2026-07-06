import { createServerFn } from "@tanstack/react-start";
/** Server fn for `alt-text-auditor` — qc-audit recipe. */
export const alt_text_auditor_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "alt-text-auditor", cat: "qc-audit" }));
