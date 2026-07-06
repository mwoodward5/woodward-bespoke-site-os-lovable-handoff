import { createServerFn } from "@tanstack/react-start";
/** Server fn for `easter-konami` — immersive recipe. */
export const easter_konami_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "easter-konami", cat: "immersive" }));
