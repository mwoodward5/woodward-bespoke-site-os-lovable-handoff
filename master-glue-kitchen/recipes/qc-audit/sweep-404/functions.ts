import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sweep-404` — qc-audit recipe. */
export const sweep_404_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sweep-404", cat: "qc-audit" }));
