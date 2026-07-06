import { createServerFn } from "@tanstack/react-start";
/** Server fn for `onboarding-progress`. */
export const onboarding_progress_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "onboarding-progress" }));
