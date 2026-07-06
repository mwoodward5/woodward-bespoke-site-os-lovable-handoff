import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-lang-attr` — polish-rules recipe. */
export const always_lang_attr_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-lang-attr", cat: "polish-rules" }));
