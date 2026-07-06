import { createServerFn } from "@tanstack/react-start";
/** Server fn for `kinetic-marquee` — typography recipe. */
export const kinetic_marquee_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "kinetic-marquee", cat: "typography" }));
