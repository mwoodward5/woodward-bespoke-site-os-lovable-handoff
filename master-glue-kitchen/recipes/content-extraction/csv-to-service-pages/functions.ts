import { createServerFn } from "@tanstack/react-start";
/** Server fn for `csv-to-service-pages` — content-extraction recipe. */
export const csv_to_service_pages_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "csv-to-service-pages", cat: "content-extraction" }));
