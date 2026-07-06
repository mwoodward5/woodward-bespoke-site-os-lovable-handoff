# STACK COMPATIBILITY

Recipes assume **TanStack Start** by default:
- `functions.ts` → `createServerFn` from `@tanstack/react-start`
- `route.ts` → `createFileRoute` from `@tanstack/react-router`

To adapt:
- **Next.js:** move `route.ts` → `app/api/<slug>/route.ts` and replace `createFileRoute` with a plain `POST` export.
- **Remix / React Router 7:** `route.ts` → `app/routes/api.<slug>.ts` with `action` export.
- **Classic Vite + Supabase Edge Functions:** move handler body into `supabase/functions/<slug>/index.ts`.

`component.tsx` is portable across all stacks — no framework-specific imports.
