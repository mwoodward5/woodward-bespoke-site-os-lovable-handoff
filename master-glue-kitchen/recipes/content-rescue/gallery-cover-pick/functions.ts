import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gallery-cover-pick` — content-rescue recipe. */
export const gallery_cover_pick_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gallery-cover-pick", cat: "content-rescue" }));
