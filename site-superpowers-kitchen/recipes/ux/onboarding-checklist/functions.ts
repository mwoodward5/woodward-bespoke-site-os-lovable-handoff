import { createServerFn } from "@tanstack/react-start";
/** Server fn for `onboarding-checklist`. */
export const onboarding_checklist_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "onboarding-checklist" }));
