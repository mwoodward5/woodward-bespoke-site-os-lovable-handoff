-- live-status-badge — messages table with RLS
create table if not exists public.ssk_live_status_badge (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  payload jsonb not null,
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.ssk_live_status_badge to authenticated;
grant all on public.ssk_live_status_badge to service_role;
alter table public.ssk_live_status_badge enable row level security;
create policy "ssk_live_status_badge_owner_read"   on public.ssk_live_status_badge for select to authenticated using (auth.uid() = user_id);
create policy "ssk_live_status_badge_owner_write"  on public.ssk_live_status_badge for insert to authenticated with check (auth.uid() = user_id);
