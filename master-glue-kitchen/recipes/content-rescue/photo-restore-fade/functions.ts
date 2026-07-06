import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-restore-fade` — content-rescue recipe. */
export const photo_restore_fade_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-restore-fade", cat: "content-rescue" }));
