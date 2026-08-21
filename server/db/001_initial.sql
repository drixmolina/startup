create table if not exists contacts (
  id bigserial primary key,
  name text not null,
  business text,
  email text not null,
  phone text,
  industry text,
  project text,
  budget text,
  timeline text,
  description text not null,
  created_at timestamptz not null default now()
);

create table if not exists ai_conversations (
  id uuid primary key,
  agent_id text not null,
  created_at timestamptz not null default now()
);

create table if not exists ai_messages (
  id bigserial primary key,
  conversation_id uuid not null references ai_conversations(id),
  role text not null check (role in ('user', 'assistant')),
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists contacts_created_at_idx on contacts (created_at desc);
create index if not exists contacts_email_idx on contacts (email);
create index if not exists ai_conversations_agent_id_idx on ai_conversations (agent_id);
create index if not exists ai_messages_conversation_id_idx on ai_messages (conversation_id, created_at);
