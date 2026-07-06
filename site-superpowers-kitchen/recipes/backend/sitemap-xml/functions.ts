import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sitemap-xml`. */
export const sitemap_xml_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sitemap-xml" }));
