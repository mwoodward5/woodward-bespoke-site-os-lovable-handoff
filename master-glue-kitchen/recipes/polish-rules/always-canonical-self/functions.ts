import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-canonical-self` — polish-rules recipe. */
export const always_canonical_self_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-canonical-self", cat: "polish-rules" }));
