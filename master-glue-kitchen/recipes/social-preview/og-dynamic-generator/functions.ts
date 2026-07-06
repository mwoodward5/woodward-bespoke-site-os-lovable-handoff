import { createServerFn } from "@tanstack/react-start";
/** Server fn for `og-dynamic-generator` — social-preview recipe. */
export const og_dynamic_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "og-dynamic-generator", cat: "social-preview" }));
