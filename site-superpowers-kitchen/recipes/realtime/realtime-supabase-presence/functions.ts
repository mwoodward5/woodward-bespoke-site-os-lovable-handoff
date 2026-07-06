import { createServerFn } from "@tanstack/react-start";
/** Server fn for `realtime-supabase-presence`. */
export const realtime_supabase_presence_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "realtime-supabase-presence" }));
