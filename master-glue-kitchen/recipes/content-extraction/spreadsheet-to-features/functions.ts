import { createServerFn } from "@tanstack/react-start";
/** Server fn for `spreadsheet-to-features` — content-extraction recipe. */
export const spreadsheet_to_features_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "spreadsheet-to-features", cat: "content-extraction" }));
