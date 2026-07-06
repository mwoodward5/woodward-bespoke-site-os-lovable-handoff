import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-contrast-audit` — polish-rules recipe. */
export const always_contrast_audit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-contrast-audit", cat: "polish-rules" }));
