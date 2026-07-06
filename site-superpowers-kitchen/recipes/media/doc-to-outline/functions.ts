import { createServerFn } from "@tanstack/react-start";
/** Server fn for `doc-to-outline`. */
export const doc_to_outline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "doc-to-outline" }));
