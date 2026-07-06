import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-to-cinemagraph` — content-rescue recipe. */
export const photo_to_cinemagraph_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-to-cinemagraph", cat: "content-rescue" }));
