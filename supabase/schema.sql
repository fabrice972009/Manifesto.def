-- Run this in the Supabase SQL editor

-- Orders table: one row per successful Stripe preorder
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  stripe_session_id text unique not null,
  amount_total integer,
  status text not null default 'pending', -- pending | paid
  created_at timestamptz not null default now()
);

-- Releases table: catalog of downloadable albums (past + the new one)
create table if not exists public.releases (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  file_path text not null,       -- path inside the 'releases' storage bucket
  cover_path text,
  available_at timestamptz not null default now(), -- when it unlocks (e.g. July 31 for Manifesto)
  is_bonus boolean not null default true, -- true = past album bonus, false = the main preorder album
  sort_order integer not null default 0
);

-- enable RLS
alter table public.orders enable row level security;
alter table public.releases enable row level security;

-- only server (service role) reads/writes orders directly; no public policy needed
-- releases metadata can be read by anyone (titles/covers are not the protected asset, the file itself is)
create policy "releases are publicly readable" on public.releases
  for select using (true);

-- Storage: create a private bucket called "releases" in the Supabase dashboard
-- (Storage > New bucket > name "releases" > Public: OFF)
-- Actual file downloads are served through /api/download which checks
-- the user's session + a paid order for their email before generating
-- a short-lived signed URL. Do not make this bucket public.

-- Public albums table: discography available to everyone (no paywall)
create table if not exists public.public_albums (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  artist text not null default 'Def Fondamantal',
  year text,
  cover_url text,        -- public URL from the 'albums' storage bucket or external
  zip_url text,          -- public URL for full album ZIP download
  tracks jsonb,          -- [{title, url}] for the audio player
  sort_order integer not null default 0,
  active boolean not null default true
);

alter table public.public_albums enable row level security;
create policy "public albums readable by all" on public.public_albums
  for select using (true);

-- STORAGE BUCKETS (create in Supabase dashboard > Storage):
-- 1. "releases"  → PRIVATE  → gated Manifesto files (signed URL via /api/download)
-- 2. "albums"    → PUBLIC   → free discography MP3s + ZIPs (paste public URLs into public_albums)
