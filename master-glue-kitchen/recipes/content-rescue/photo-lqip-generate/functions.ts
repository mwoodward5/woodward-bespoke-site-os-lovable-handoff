import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-lqip-generate` — content-rescue recipe. */
export const photo_lqip_generate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-lqip-generate", cat: "content-rescue" }));
