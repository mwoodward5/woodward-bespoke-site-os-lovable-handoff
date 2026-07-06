import { createServerFn } from "@tanstack/react-start";
/** Server fn for `spreadsheet-to-pricing` — content-extraction recipe. */
export const spreadsheet_to_pricing_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "spreadsheet-to-pricing", cat: "content-extraction" }));
