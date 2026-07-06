import { createServerFn } from "@tanstack/react-start";
/** Server fn for `referral-generator` — glue recipe. */
export const referral_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "referral-generator", cat: "glue" }));
