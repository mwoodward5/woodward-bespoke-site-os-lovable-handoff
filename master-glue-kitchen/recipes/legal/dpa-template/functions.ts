import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dpa-template` — legal recipe. */
export const dpa_template_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dpa-template", cat: "legal" }));
