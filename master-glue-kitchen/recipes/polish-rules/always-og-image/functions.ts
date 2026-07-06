import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-og-image` — polish-rules recipe. */
export const always_og_image_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-og-image", cat: "polish-rules" }));
