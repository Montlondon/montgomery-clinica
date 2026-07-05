-- Módulo Fitoterapia Chinesa — Montgomery Saúde Integrada
-- Tabelas seguem o padrão das existentes (pacientes, sessoes, prescricoes, diagnosticos)

create table if not exists fitoterapia_ervas (
  id text primary key,
  nome_pinyin text not null,
  nome_cientifico text,
  nome_popular text,
  categoria text not null,          -- ex: 'Tonificantes do Qi', 'Dispersam Vento-Frio'...
  sabor text[],                     -- ex: ['amargo','doce']
  natureza text,                    -- 'quente' | 'morna' | 'neutra' | 'fresca' | 'fria'
  meridianos text[],                -- meridianos de entrada
  acoes text not null,
  indicacoes text not null,
  contraindicacoes text,
  dosagem_referencia text,
  elemento_relacionado text,        -- vínculo com os 5 elementos (Diagnóstico Integrado)
  created_at timestamptz default now()
);

create table if not exists fitoterapia_formulas (
  id text primary key,
  nome_pinyin text not null,
  nome_traducao text,
  categoria text not null,
  composicao jsonb not null,        -- [{erva_id, papel, proporcao}]
  acao_principal text not null,
  indicacoes text not null,
  padrao_mtc text,                  -- padrão de diagnóstico associado (ex: 'Deficiência de Qi do Baço')
  contraindicacoes text,
  elemento_relacionado text,
  created_at timestamptz default now()
);

-- RLS — ajuste à mesma política usada nas demais tabelas do projeto
alter table fitoterapia_ervas enable row level security;
alter table fitoterapia_formulas enable row level security;

create policy "leitura publica ervas" on fitoterapia_ervas for select using (true);
create policy "leitura publica formulas" on fitoterapia_formulas for select using (true);
-- Escrita: restrinja conforme seu padrão de auth (hoje sua RLS está permissiva — revisar antes de produção)
