import { createServerFn } from "@tanstack/react-start";
/** Server fn for `doc-highlight-key`. */
export const doc_highlight_key_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "doc-highlight-key" }));
