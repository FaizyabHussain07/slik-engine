-- =========================
-- 1. USERS TABLE
-- =========================
create table if not exists public.users (
  id uuid primary key references auth.users on delete cascade,
  name text,
  email text unique,
  role text default 'user' check (role in ('user', 'admin')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create index if not exists idx_users_id on public.users(id);

alter table public.users enable row level security;

-- =========================
-- 2. HELPER FUNCTION (SECURE)
-- =========================
create or replace function public.is_admin()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  return exists (
    select 1
    from public.users
    where id = auth.uid() and role = 'admin'
  );
end;
$$;

-- =========================
-- 3. SECURITY POLICIES
-- =========================

-- READ
drop policy if exists "read own or admin" on public.users;
create policy "read own or admin"
on public.users for select
using (
  auth.uid() = id OR public.is_admin()
);

-- INSERT
drop policy if exists "insert own profile" on public.users;
create policy "insert own profile"
on public.users for insert
with check (auth.uid() = id);

-- UPDATE
drop policy if exists "update own or admin" on public.users;
create policy "update own or admin"
on public.users for update
using (
  auth.uid() = id OR public.is_admin()
)
with check (
  auth.uid() = id OR public.is_admin()
);

-- DELETE
drop policy if exists "delete admin only" on public.users;
create policy "delete admin only"
on public.users for delete
using (public.is_admin());

-- =========================
-- 4. AUTO CREATE USER PROFILE
-- =========================
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.users (id, email, name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', 'New User'),
    'user'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- =========================
-- 5. UPDATED_AT TRIGGER
-- =========================
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists users_updated_at on public.users;

create trigger users_updated_at
before update on public.users
for each row execute procedure public.handle_updated_at();

-- =========================
-- 6. PERMISSIONS
-- =========================
grant usage on schema public to anon, authenticated;
grant select, insert, update on public.users to authenticated;
grant select on public.users to anon;