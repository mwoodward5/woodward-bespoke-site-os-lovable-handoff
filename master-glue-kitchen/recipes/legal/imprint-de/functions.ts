import { createServerFn } from "@tanstack/react-start";
/** Server fn for `imprint-de` — legal recipe. */
export const imprint_de_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "imprint-de", cat: "legal" }));
