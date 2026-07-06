import { createServerFn } from "@tanstack/react-start";
/** Server fn for `moodboard-generate` — content-extraction recipe. */
export const moodboard_generate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "moodboard-generate", cat: "content-extraction" }));
