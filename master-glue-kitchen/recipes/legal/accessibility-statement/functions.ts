import { createServerFn } from "@tanstack/react-start";
/** Server fn for `accessibility-statement` — legal recipe. */
export const accessibility_statement_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "accessibility-statement", cat: "legal" }));
