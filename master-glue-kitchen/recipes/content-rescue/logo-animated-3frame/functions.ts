import { createServerFn } from "@tanstack/react-start";
/** Server fn for `logo-animated-3frame` — content-rescue recipe. */
export const logo_animated_3frame_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "logo-animated-3frame", cat: "content-rescue" }));
