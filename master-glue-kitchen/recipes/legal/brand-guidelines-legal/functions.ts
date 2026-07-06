import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-guidelines-legal` — legal recipe. */
export const brand_guidelines_legal_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-guidelines-legal", cat: "legal" }));
