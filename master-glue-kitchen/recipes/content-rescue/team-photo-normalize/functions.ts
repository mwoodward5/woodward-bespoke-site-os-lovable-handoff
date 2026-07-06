import { createServerFn } from "@tanstack/react-start";
/** Server fn for `team-photo-normalize` — content-rescue recipe. */
export const team_photo_normalize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "team-photo-normalize", cat: "content-rescue" }));
