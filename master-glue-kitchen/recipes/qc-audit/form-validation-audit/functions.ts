import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-validation-audit` — qc-audit recipe. */
export const form_validation_audit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-validation-audit", cat: "qc-audit" }));
