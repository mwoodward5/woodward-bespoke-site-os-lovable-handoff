import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scale-major-third` — typography recipe. */
export const scale_major_third_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scale-major-third", cat: "typography" }));
