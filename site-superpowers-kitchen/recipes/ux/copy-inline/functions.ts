import { createServerFn } from "@tanstack/react-start";
/** Server fn for `copy-inline`. */
export const copy_inline_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "copy-inline" }));
