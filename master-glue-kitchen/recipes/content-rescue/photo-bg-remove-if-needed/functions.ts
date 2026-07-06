import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-bg-remove-if-needed` — content-rescue recipe. */
export const photo_bg_remove_if_needed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-bg-remove-if-needed", cat: "content-rescue" }));
