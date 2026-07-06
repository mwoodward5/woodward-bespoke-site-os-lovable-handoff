import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-manifest` — polish-rules recipe. */
export const always_manifest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-manifest", cat: "polish-rules" }));
