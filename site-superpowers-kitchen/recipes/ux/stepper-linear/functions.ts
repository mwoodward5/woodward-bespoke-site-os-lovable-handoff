import { createServerFn } from "@tanstack/react-start";
/** Server fn for `stepper-linear`. */
export const stepper_linear_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "stepper-linear" }));
