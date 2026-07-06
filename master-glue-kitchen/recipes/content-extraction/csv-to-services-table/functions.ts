import { createServerFn } from "@tanstack/react-start";
/** Server fn for `csv-to-services-table` — content-extraction recipe. */
export const csv_to_services_table_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "csv-to-services-table", cat: "content-extraction" }));
