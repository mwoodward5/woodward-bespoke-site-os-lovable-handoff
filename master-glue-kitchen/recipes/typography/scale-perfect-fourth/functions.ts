import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scale-perfect-fourth` — typography recipe. */
export const scale_perfect_fourth_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scale-perfect-fourth", cat: "typography" }));
