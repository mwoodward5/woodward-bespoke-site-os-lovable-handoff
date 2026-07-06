-- pay-invoice-history — subscriptions table
create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  status text not null,
  price_id text,
  current_period_end timestamptz,
  created_at timestamptz not null default now()
);
grant select on public.subscriptions to authenticated;
grant all    on public.subscriptions to service_role;
alter table public.subscriptions enable row level security;
create policy "sub_owner_read" on public.subscriptions for select to authenticated using (auth.uid() = user_id);
