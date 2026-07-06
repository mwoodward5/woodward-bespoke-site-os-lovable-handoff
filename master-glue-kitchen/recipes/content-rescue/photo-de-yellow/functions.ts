import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-de-yellow` — content-rescue recipe. */
export const photo_de_yellow_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-de-yellow", cat: "content-rescue" }));
