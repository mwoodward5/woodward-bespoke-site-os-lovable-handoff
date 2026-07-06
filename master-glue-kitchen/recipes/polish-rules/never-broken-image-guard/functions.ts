import { createServerFn } from "@tanstack/react-start";
/** Server fn for `never-broken-image-guard` — polish-rules recipe. */
export const never_broken_image_guard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "never-broken-image-guard", cat: "polish-rules" }));
