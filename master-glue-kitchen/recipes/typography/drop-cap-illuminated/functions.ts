import { createServerFn } from "@tanstack/react-start";
/** Server fn for `drop-cap-illuminated` — typography recipe. */
export const drop_cap_illuminated_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "drop-cap-illuminated", cat: "typography" }));
