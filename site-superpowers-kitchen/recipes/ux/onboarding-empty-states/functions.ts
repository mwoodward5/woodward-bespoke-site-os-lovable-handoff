import { createServerFn } from "@tanstack/react-start";
/** Server fn for `onboarding-empty-states`. */
export const onboarding_empty_states_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "onboarding-empty-states" }));
