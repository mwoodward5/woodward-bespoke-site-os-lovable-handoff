import { createServerFn } from "@tanstack/react-start";
/** Server fn for `imprint-at` — legal recipe. */
export const imprint_at_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "imprint-at", cat: "legal" }));
