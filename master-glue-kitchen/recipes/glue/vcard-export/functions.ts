import { createServerFn } from "@tanstack/react-start";
/** Server fn for `vcard-export` — glue recipe. */
export const vcard_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "vcard-export", cat: "glue" }));
