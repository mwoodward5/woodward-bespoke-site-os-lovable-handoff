import { createServerFn } from "@tanstack/react-start";
/** Server fn for `faq-mine-from-tickets` — content-extraction recipe. */
export const faq_mine_from_tickets_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "faq-mine-from-tickets", cat: "content-extraction" }));
