import { createServerFn } from "@tanstack/react-start";
/** Server fn for `og-seasonal-rotator` — social-preview recipe. */
export const og_seasonal_rotator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "og-seasonal-rotator", cat: "social-preview" }));
