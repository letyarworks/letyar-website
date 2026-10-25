-- Customer-owned editable template drafts.
-- Apply only after confirming the Letyar Labs Supabase project is healthy.
create table if not exists public.customer_sites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  template_slug text not null,
  site_name text not null default 'My Business',
  tagline text not null default '',
  accent_color text not null default '#19D3E6',
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, template_slug)
);

alter table public.customer_sites enable row level security;

create policy "Users can view their own customer sites"
  on public.customer_sites for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "Users can create their own customer sites"
  on public.customer_sites for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own customer sites"
  on public.customer_sites for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "Users can delete their own customer sites"
  on public.customer_sites for delete
  to authenticated
  using ((select auth.uid()) = user_id);

create or replace function public.set_customer_sites_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger customer_sites_updated_at
  before update on public.customer_sites
  for each row execute function public.set_customer_sites_updated_at();

grant select, insert, update, delete on public.customer_sites to authenticated;
