import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-lang-attr`. */
export const a11y_lang_attr_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-lang-attr" }));
