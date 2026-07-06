import { createServerFn } from "@tanstack/react-start";
/** Server fn for `csv-export`. */
export const csv_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "csv-export" }));
