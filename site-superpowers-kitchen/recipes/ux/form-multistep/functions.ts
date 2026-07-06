import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-multistep`. */
export const form_multistep_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-multistep" }));
