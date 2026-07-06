import { createServerFn } from "@tanstack/react-start";
/** Server fn for `noise-to-hero` — content-rescue recipe. */
export const noise_to_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "noise-to-hero", cat: "content-rescue" }));
