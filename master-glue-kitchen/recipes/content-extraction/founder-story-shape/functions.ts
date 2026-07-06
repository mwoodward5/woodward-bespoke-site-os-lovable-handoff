import { createServerFn } from "@tanstack/react-start";
/** Server fn for `founder-story-shape` — content-extraction recipe. */
export const founder_story_shape_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "founder-story-shape", cat: "content-extraction" }));
