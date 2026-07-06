import { createServerFn } from "@tanstack/react-start";
/** Server fn for `tone-of-voice-profile` — content-extraction recipe. */
export const tone_of_voice_profile_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "tone-of-voice-profile", cat: "content-extraction" }));
