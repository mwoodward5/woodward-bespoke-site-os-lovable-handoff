import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-transactional-unsub` — deploy recipe. */
export const email_transactional_unsub_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-transactional-unsub", cat: "deploy" }));
