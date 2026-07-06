import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-subject-focal` — content-rescue recipe. */
export const photo_subject_focal_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-subject-focal", cat: "content-rescue" }));
