import { createServerFn } from "@tanstack/react-start";
/** Server fn for `collab-doc-yjs-scaffold`. */
export const collab_doc_yjs_scaffold_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "collab-doc-yjs-scaffold" }));
