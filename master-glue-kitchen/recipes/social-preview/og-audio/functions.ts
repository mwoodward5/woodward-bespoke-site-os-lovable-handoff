import { createServerFn } from "@tanstack/react-start";
/** Server fn for `og-audio` — social-preview recipe. */
export const og_audio_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "og-audio", cat: "social-preview" }));
