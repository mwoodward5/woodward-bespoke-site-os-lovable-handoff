import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-privacy-stub` — polish-rules recipe. */
export const always_privacy_stub_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-privacy-stub", cat: "polish-rules" }));
