import { createServerFn } from "@tanstack/react-start";
/** Server fn for `custom-domain-checklist` — deploy recipe. */
export const custom_domain_checklist_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "custom-domain-checklist", cat: "deploy" }));
