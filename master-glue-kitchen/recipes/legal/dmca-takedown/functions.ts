import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dmca-takedown` — legal recipe. */
export const dmca_takedown_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dmca-takedown", cat: "legal" }));
