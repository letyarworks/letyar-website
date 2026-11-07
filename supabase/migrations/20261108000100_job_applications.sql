-- Job application intake for letyarlabs.com/jobform
-- Private records and private attachments. Only server-side service credentials may access them.

create table if not exists public.job_applications (
  id uuid primary key,
  full_name text not null,
  age smallint not null check (age >= 18 and age <= 65),
  phone text not null,
  alternate_phone text,
  address text not null,
  gender text,
  marital_status text,
  position text not null,
  skill_level text,
  experience text,
  machine_skills text,
  accommodation text,
  work_schedule text,
  available_date date,
  emergency_name text,
  emergency_phone text,
  emergency_relation text,
  attachments jsonb not null default '{}'::jsonb,
  status text not null default 'pending' check (status in ('pending','reviewed','interview','accepted','rejected','withdrawn')),
  admin_notes text,
  consent_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists job_applications_created_at_idx on public.job_applications (created_at desc);
create index if not exists job_applications_status_idx on public.job_applications (status);

alter table public.job_applications enable row level security;
revoke all on table public.job_applications from anon, authenticated;
grant all on table public.job_applications to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('job-applications', 'job-applications', false, 2097152, array['image/jpeg','image/png','image/webp','application/pdf'])
on conflict (id) do update set public = false, file_size_limit = 2097152, allowed_mime_types = excluded.allowed_mime_types;

-- Do not create anon/authenticated storage policies: uploads and signed downloads are server-mediated.
