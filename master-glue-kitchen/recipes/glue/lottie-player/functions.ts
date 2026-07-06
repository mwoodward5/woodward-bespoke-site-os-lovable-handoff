import { createServerFn } from "@tanstack/react-start";
/** Server fn for `lottie-player` — glue recipe. */
export const lottie_player_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "lottie-player", cat: "glue" }));
