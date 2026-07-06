import { createServerFn } from "@tanstack/react-start";
/** Server fn for `imprint-ch` — legal recipe. */
export const imprint_ch_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "imprint-ch", cat: "legal" }));
