import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-brochure-from-site` — glue recipe. */
export const pdf_brochure_from_site_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-brochure-from-site", cat: "glue" }));
