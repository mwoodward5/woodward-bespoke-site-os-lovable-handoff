import { createServerFn } from "@tanstack/react-start";
/** Server fn for `card-fan` — layouts recipe. */
export const card_fan_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "card-fan", cat: "layouts" }));
