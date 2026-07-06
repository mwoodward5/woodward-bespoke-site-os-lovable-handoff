import { createServerFn } from "@tanstack/react-start";
/** Server fn for `reels-preview` — social-preview recipe. */
export const reels_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "reels-preview", cat: "social-preview" }));
