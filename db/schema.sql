-- AKODE PostgreSQL foundation
-- Apply this migration only after connecting the project to the intended Neon database.

create extension if not exists pgcrypto;

create table if not exists site_users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  display_name text,
  role text not null default 'user' check (role in ('user','admin','editor')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  name text,
  status text not null default 'active' check (status in ('active','unsubscribed')),
  source text,
  subscribed_at timestamptz not null default now(),
  unsubscribed_at timestamptz
);

create table if not exists page_events (
  id bigserial primary key,
  session_id text,
  user_id uuid references site_users(id) on delete set null,
  path text not null,
  event_name text not null,
  referrer text,
  country text,
  device text,
  browser text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists page_events_path_created_idx on page_events(path, created_at desc);
create index if not exists page_events_name_created_idx on page_events(event_name, created_at desc);

create table if not exists ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references site_users(id) on delete set null,
  session_id text,
  title text,
  model text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists ai_messages (
  id bigserial primary key,
  conversation_id uuid not null references ai_conversations(id) on delete cascade,
  role text not null check (role in ('user','assistant','tool','system')),
  content text not null,
  tool_name text,
  latency_ms integer,
  created_at timestamptz not null default now()
);

create table if not exists agent_runs (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid references ai_conversations(id) on delete set null,
  action text not null,
  target_url text,
  status text not null,
  result jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists ad_events (
  id bigserial primary key,
  path text not null,
  placement text not null,
  event_name text not null,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  subject text,
  message text not null,
  status text not null default 'new' check (status in ('new','read','replied','archived')),
  created_at timestamptz not null default now()
);
