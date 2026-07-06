import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-wave` — typography recipe. */
export const kinetic_wave_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-wave", cat: "typography" }));
