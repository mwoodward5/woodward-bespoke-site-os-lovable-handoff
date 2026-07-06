import { createServerFn } from "@tanstack/react-start";
/** Server fn for `email-transactional-welcome` — deploy recipe. */
export const email_transactional_welcome_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "email-transactional-welcome", cat: "deploy" }));
