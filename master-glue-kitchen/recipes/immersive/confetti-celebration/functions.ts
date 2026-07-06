import { createServerFn } from "@tanstack/react-start";
/** Server fn for `confetti-celebration` — immersive recipe. */
export const confetti_celebration_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "confetti-celebration", cat: "immersive" }));
