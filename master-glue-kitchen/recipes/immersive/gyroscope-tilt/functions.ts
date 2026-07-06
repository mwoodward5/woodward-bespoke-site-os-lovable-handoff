import { createServerFn } from "@tanstack/react-start";
/** Server fn for `gyroscope-tilt` — immersive recipe. */
export const gyroscope_tilt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "gyroscope-tilt", cat: "immersive" }));
