import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scroll-audio-triggers` — immersive recipe. */
export const scroll_audio_triggers_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scroll-audio-triggers", cat: "immersive" }));
