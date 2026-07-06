import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gallery-poster-generate` — content-rescue recipe. */
export const gallery_poster_generate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gallery-poster-generate", cat: "content-rescue" }));
