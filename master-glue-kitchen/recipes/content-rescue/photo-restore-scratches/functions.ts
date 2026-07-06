import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-restore-scratches` — content-rescue recipe. */
export const photo_restore_scratches_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-restore-scratches", cat: "content-rescue" }));
