import { createServerFn } from "@tanstack/react-start";
/** Server fn for `xlsx-export`. */
export const xlsx_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "xlsx-export" }));
