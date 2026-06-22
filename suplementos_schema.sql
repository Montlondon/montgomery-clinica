-- Módulo Suplementos — Montgomery Saúde Integrativa
-- Mesmo padrão das tabelas existentes (pacientes, sessoes, despesas, diagnosticos)

create table if not exists suplementos (
  id bigint generated always as identity primary key,
  user_id text not null,
  dados jsonb not null,
  created_at timestamptz default now()
);

create table if not exists vendas_suplementos (
  id bigint generated always as identity primary key,
  user_id text not null,
  dados jsonb not null,
  created_at timestamptz default now()
);

-- RLS — mesma política permissiva já usada nas outras tabelas do projeto
alter table suplementos enable row level security;
alter table vendas_suplementos enable row level security;

create policy "acesso total suplementos" on suplementos for all using (true);
create policy "acesso total vendas_suplementos" on vendas_suplementos for all using (true);
