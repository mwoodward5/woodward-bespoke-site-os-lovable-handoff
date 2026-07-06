import { createServerFn } from "@tanstack/react-start";
/** Server fn for `card-stack-peek` — layouts recipe. */
export const card_stack_peek_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "card-stack-peek", cat: "layouts" }));
