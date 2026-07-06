import { createServerFn } from "@tanstack/react-start";
/** Server fn for `optimistic-mutations`. */
export const optimistic_mutations_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "optimistic-mutations" }));
