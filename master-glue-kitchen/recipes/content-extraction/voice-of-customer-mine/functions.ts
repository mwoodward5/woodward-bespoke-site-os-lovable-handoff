import { createServerFn } from "@tanstack/react-start";
/** Server fn for `voice-of-customer-mine` — content-extraction recipe. */
export const voice_of_customer_mine_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "voice-of-customer-mine", cat: "content-extraction" }));
