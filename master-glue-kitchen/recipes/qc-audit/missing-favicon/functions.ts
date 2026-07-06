import { createServerFn } from "@tanstack/react-start";
/** Server fn for `missing-favicon` — qc-audit recipe. */
export const missing_favicon_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "missing-favicon", cat: "qc-audit" }));
