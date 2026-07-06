import { createServerFn } from "@tanstack/react-start";
/** Server fn for `headshot-lighting-match` — content-rescue recipe. */
export const headshot_lighting_match_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "headshot-lighting-match", cat: "content-rescue" }));
