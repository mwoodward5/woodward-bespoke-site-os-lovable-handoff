import { createServerFn } from "@tanstack/react-start";
/** Server fn for `onboarding-tour`. */
export const onboarding_tour_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "onboarding-tour" }));
