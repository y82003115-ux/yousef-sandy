insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types) values ('cinema-films','cinema-films',false,1073741824,array['video/mp4','video/webm','video/quicktime','video/x-matroska']) on conflict (id) do update set public=excluded.public,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;
drop policy if exists "cinema members read" on storage.objects;
drop policy if exists "cinema members upload" on storage.objects;
drop policy if exists "cinema members delete" on storage.objects;
create policy "cinema members read" on storage.objects for select to authenticated using (bucket_id='cinema-films');
create policy "cinema members upload" on storage.objects for insert to authenticated with check (bucket_id='cinema-films');
create policy "cinema members delete" on storage.objects for delete to authenticated using (bucket_id='cinema-films');
