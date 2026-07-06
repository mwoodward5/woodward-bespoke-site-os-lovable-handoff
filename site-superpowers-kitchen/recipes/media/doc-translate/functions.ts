import { createServerFn } from "@tanstack/react-start";
/** Server fn for `doc-translate`. */
export const doc_translate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "doc-translate" }));
