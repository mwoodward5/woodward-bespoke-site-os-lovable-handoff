import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-terms-stub` — polish-rules recipe. */
export const always_terms_stub_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-terms-stub", cat: "polish-rules" }));
