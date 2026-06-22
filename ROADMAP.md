# Roadmap — Montgomery Saúde Integrativa

Documento vivo para acompanhar o que já foi feito e o que está planejado. Atualizar conforme avançamos.

## Concluído

- Nova estética geral (Lora/Inter, paleta terrosa, fio dos cinco elementos, ícones SVG em toda a plataforma)
- Aba Clínica/Pessoal no Financeiro (despesas + pró-labore, tabela `despesas` no Supabase)
- Botão de ocultar/exibir valores no Painel
- Seção "Balanço Método (Sistemas ABC)" em Diagnóstico Integrado — tabela completa + filtro por meridiano (lê `sistemasABC`, id padronizado em `BP`)
- "Pontos do Corpo" com ícone próprio por região + adição de Pelve, Sacroilíaca e Tornozelo

## Em planejamento

### 1. Boneco clicável — Balanço Método
Silhueta humana (braços erguidos, como nas fotos de referência do Dr. Tan) com pontos clicáveis nos 4 segmentos (braço esq./dir., perna esq./dir.). Ao selecionar um sistema, desenhar as linhas do meridiano afetado até os meridianos de balanço, usando os dados que já existem em `sistemasABC[].pontos`. Reaproveita a lógica de `abcFiltrarMeridiano()` já implementada — é uma camada visual nova sobre dados que já existem.

### 2. Integração Sintoma → Elemento/Meridiano
Objetivo do Montgomery: clicar no sintoma e o sistema já indicar qual elemento/meridiano equilibrar — unificando "Pontos do Corpo" (quiropraxia), "5 Elementos" (MTC) e "Balanço Método (ABC)" num fluxo só, em vez de três seções separadas. Cada uma já guarda uma ponta dessa lógica (`canal` em `pontosCorpo`, `balance` em `matrizCincoElementos`, `pontos` em `sistemasABC`) — o trabalho é cruzar esses dados num único motor de sugestão.

### 3. Módulo de Aurículoterapia
Baseado no livro do curso do Montgomery (arquivo local, não vai para o Git — material com direitos de autor). Planejar estrutura de dados (zonas auriculares, indicações, pontos) e tela de visualização, no mesmo padrão usado para Sistemas ABC e Pontos do Corpo.

### 4. Login na plataforma
Hoje o app é aberto, sem autenticação — qualquer pessoa com o link acessa. Decisão: login via conta Google (OAuth), aproveitando que o app já usa Supabase.

**O que precisa ser feito (envolve passos manuais fora do código):**
- Criar credenciais OAuth no Google Cloud Console (Client ID/Secret)
- Habilitar o provedor Google em Supabase → Authentication → Providers
- No código: trocar as chamadas REST diretas (`user_id='montgomery'` fixo) por sessão autenticada do Supabase Auth, e adicionar uma tela de login antes de liberar o painel
- Decidir: login fica restrito só ao e-mail do Montgomery, ou permite múltiplos terapeutas no futuro?

Esse é o item mais "arquitetural" da lista — muda a forma como o app fala com o banco. Vale planejar com calma antes de implementar.

## Pendências / decisões em aberto

- Tabela `despesas` no Supabase: confirmar se RLS/policy está ativa igual às outras tabelas
- Expandir "Pontos do Corpo" com mais regiões conforme a prática pedir
