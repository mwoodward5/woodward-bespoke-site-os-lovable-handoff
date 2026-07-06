import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-transactional-receipt` — deploy recipe. */
export const email_transactional_receipt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-transactional-receipt", cat: "deploy" }));
