import { createServerFn } from "@tanstack/react-start";
/** Server fn for `fluid-type-generator` — typography recipe. */
export const fluid_type_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "fluid-type-generator", cat: "typography" }));
