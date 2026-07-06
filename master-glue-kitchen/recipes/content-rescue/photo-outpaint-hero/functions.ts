import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-outpaint-hero` — content-rescue recipe. */
export const photo_outpaint_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-outpaint-hero", cat: "content-rescue" }));
