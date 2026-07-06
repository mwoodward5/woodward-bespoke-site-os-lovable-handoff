import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-doc-scan`. */
export const image_doc_scan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-doc-scan" }));
