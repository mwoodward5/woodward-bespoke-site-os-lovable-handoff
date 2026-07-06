import { createServerFn } from "@tanstack/react-start";
/** Server fn for `doc-to-summary`. */
export const doc_to_summary_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "doc-to-summary" }));
