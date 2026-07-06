import { createServerFn } from "@tanstack/react-start";
/** Server fn for `csv-import`. */
export const csv_import_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "csv-import" }));
