# Roadmap — Montgomery Saúde Integrativa

Documento vivo para acompanhar o que já foi feito e o que está planejado. Atualizar conforme avançamos.

## Concluído

- Nova estética geral (Lora/Inter, paleta terrosa, fio dos cinco elementos, ícones SVG em toda a plataforma)
- Aba Clínica/Pessoal no Financeiro (despesas + pró-labore, tabela `despesas` no Supabase)
- Botão de ocultar/exibir valores no Painel
- Seção "Balanço Método (Sistemas ABC)" em Diagnóstico Integrado — tabela completa + filtro por meridiano (lê `sistemasABC`, id padronizado em `BP`)
- "Pontos do Corpo" com ícone próprio por região + adição de Pelve, Sacroilíaca e Tornozelo
- Boneco esquemático (SVG) no Balanço Método — ao filtrar por meridiano, cada sistema mostra a posição do meridiano afetado destacada e os outros 3 meridianos de balanço, igual às fotos de referência do Dr. Tan
- Boneco e rótulos esquerdo/direito corrigidos conforme decúbito dorsal (desenho literal + rótulo clínico invertido, validado sistema a sistema com o Montgomery)
- Sistemas ABC integrados ao Diagnóstico Integrado: clicar num sistema o adiciona à avaliação do paciente, junto com Elementos e Pontos do Corpo (resumo, histórico e persistência no Supabase)
- Triagem de contatos importados: novos contatos via VCF entram com etiqueta "NOVO", filtro dedicado em Pacientes e ação em massa para marcar como revisado, facilitando limpar a base
- Módulo Suplementos: catálogo/estoque (71 produtos importados da planilha "Tabela de preços"), seleção de suplementos na Recomendação Terapêutica com desconto automático de estoque, e registro financeiro separado (pendente/pago) somado ao Painel sem se misturar com sessão

## Em planejamento

### 1. Boneco do Balanço Método — refinar ilustração (v2)
A v1 já está no ar: boneco esquemático em traços simples (círculos + linhas), funcional, lendo `sistemasABC[].pontos` via `abcBonecoSVG()`. Próximo passo, se quiser: trocar o traço simples por uma ilustração mais anatômica do corpo (braços erguidos), mantendo a mesma lógica de dados.

### 2. Integração Sintoma → Elemento/Meridiano
Objetivo do Montgomery: clicar no sintoma e o sistema já indicar qual elemento/meridiano equilibrar — unificando "Pontos do Corpo" (quiropraxia), "5 Elementos" (MTC) e "Balanço Método (ABC)" num fluxo só, em vez de três seções separadas. Cada uma já guarda uma ponta dessa lógica (`canal` em `pontosCorpo`, `balance` em `matrizCincoElementos`, `pontos` em `sistemasABC`) — o trabalho é cruzar esses dados num único motor de sugestão.

### 3. Módulo de Aurículoterapia
Baseado no livro do curso do Montgomery (arquivo local, não vai para o Git — material com direitos de autor). Planejar estrutura de dados (zonas auriculares, indicações, pontos) e tela de visualização, no mesmo padrão usado para Sistemas ABC e Pontos do Corpo.

### 3b. Florais
Item novo, ainda sem detalhamento — Montgomery vai trazer um resumo de como quer estruturar isso (provavelmente floral indicado por estado emocional/queixa, possivelmente cruzando com a Escala de Orientação Emocional que já existe em Diagnóstico Integrado).

### 4. Login na plataforma — **DECIDIDO, agendado para depois**
Hoje o app é aberto, sem autenticação — qualquer pessoa com o link acessa, e a chave do Supabase já fica visível no código-fonte da página. Um botão de login "decorativo" (só na tela) não protegeria os dados de verdade, porque a chave continuaria acessível direto pela API.

**Decisão tomada:** Supabase Auth com provedor Google, porque vincula login real ao e-mail do Montgomery e permite configurar RLS (regra no banco) restringindo os dados só à conta autenticada — a segurança fica no banco, não na tela.

**O que precisa ser feito quando formos implementar (envolve passos manuais fora do código):**
- Criar credenciais OAuth no Google Cloud Console (Client ID/Secret)
- Habilitar o provedor Google em Supabase → Authentication → Providers
- No código: trocar as chamadas REST diretas (`user_id='montgomery'` fixo) por sessão autenticada do Supabase Auth, e adicionar uma tela de login antes de liberar o painel
- Decidir: login fica restrito só ao e-mail do Montgomery, ou permite múltiplos terapeutas no futuro?

Status: priorizamos outras frentes primeiro (boneco do Balanço Método etc.) e voltamos a este item depois.

### 5. Publicar como app nativo na Play Store (TWA) — **BEM FUTURO, sem pressa**
Empacotar o site como Trusted Web Activity (caminho oficial do Google): gera um `.apk`/`.aab` de verdade, instalável pela Play Store, abrindo sem barra de navegador — visualmente idêntico a um app nativo. Exige conta de desenvolvedor Google Play (taxa única ~US$25) e processo de build/assinatura do pacote. Pré-requisito natural: ter o login (item 4) resolvido antes, já que um app na loja precisa de autenticação real.

### 6. Carregamento mais rápido dos dados (cache local)
Hoje todo carregamento do app baixa do zero todos os pacientes/sessões/diagnósticos/despesas do Supabase (4.000+ pacientes), por isso a tela "Conectando ao banco de dados..." demora alguns segundos. Possível melhoria futura: guardar os dados no próprio celular e mostrar na hora, atualizando em segundo plano — sem mudar nada na forma de usar o app.

## Pendências / decisões em aberto

- **Ação necessária do Montgomery:** rodar `suplementos_schema.sql` no Supabase (SQL Editor) antes de usar o módulo Suplementos — cria as tabelas `suplementos` e `vendas_suplementos`
- Tabela `despesas` no Supabase: confirmar se RLS/policy está ativa igual às outras tabelas
- Expandir "Pontos do Corpo" com mais regiões conforme a prática pedir
- Ajuste de zoom mobile (10% hoje, reduzido de 18% por causar corte de tabelas) — acompanhar se está confortável de ler/tocar ou se precisa de mais um ajuste fino
- Configurar `settings.json` (permissões do Claude Code) para pré-autorizar comandos de rotina (git, node) e o Montgomery não precisar clicar "Allow once" toda hora — combinado de fazer depois, não é parte da plataforma em si, é ajuste de fluxo de trabalho
