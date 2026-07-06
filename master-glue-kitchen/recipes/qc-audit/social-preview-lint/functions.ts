import { createServerFn } from "@tanstack/react-start";
/** Server fn for `social-preview-lint` — qc-audit recipe. */
export const social_preview_lint_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "social-preview-lint", cat: "qc-audit" }));
