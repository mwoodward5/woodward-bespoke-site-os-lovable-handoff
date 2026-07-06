import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pdf-export`. */
export const pdf_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pdf-export" }));
