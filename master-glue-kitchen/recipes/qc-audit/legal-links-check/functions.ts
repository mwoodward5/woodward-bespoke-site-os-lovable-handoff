import { createServerFn } from "@tanstack/react-start";
/** Server fn for `legal-links-check` — qc-audit recipe. */
export const legal_links_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "legal-links-check", cat: "qc-audit" }));
