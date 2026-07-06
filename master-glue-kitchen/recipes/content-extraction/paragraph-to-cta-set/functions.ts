import { createServerFn } from "@tanstack/react-start";
/** Server fn for `paragraph-to-cta-set` — content-extraction recipe. */
export const paragraph_to_cta_set_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "paragraph-to-cta-set", cat: "content-extraction" }));
