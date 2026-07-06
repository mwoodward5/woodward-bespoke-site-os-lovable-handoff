import { createServerFn } from "@tanstack/react-start";
/** Server fn for `realtime-supabase-postgres`. */
export const realtime_supabase_postgres_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "realtime-supabase-postgres" }));
