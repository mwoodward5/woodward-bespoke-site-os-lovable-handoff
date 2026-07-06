import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scale-custom` — typography recipe. */
export const scale_custom_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scale-custom", cat: "typography" }));
