import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ab-tests`. */
export const ab_tests_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ab-tests" }));
