import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sticky-side-story` — layouts recipe. */
export const sticky_side_story_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sticky-side-story", cat: "layouts" }));
