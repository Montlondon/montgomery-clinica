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
- Cancelar venda de suplemento no Financeiro devolve a quantidade ao estoque automaticamente (cliente desiste, troca de produto etc.)
- Suplementos integrados ao Diagnóstico Integrado: busca por digitação para marcar suplementos na avaliação (igual Elementos/Pontos/ABC), salvos no registro do diagnóstico e levados automaticamente para a Recomendação ao clicar "Enviar"
- Busca por digitação (em vez de lista suspensa) para escolher suplemento na Recomendação Terapêutica, igual à busca de paciente
- **Correção de bug crítico de perda de dados:** `marcarTriagemSel`/`delPacsSel` (Pacientes) e as funções de estoque de Suplementos usavam `dbSet()` (reescreve a tabela inteira a partir do cache local) — se o cache não tivesse 100% sincronizado, o resto era apagado de verdade no Supabase. Foi a causa da queda de ~4.259 para 2.340 pacientes em 22/06/2026. Restaurados 1.765 pacientes a partir de um backup exportado a tempo; todas essas funções foram trocadas por updates/deletes pontuais, linha a linha, que nunca tocam o resto da tabela
- Janela de "Imprimir" (Recomendação e Diagnóstico) estreitada de 800px para 460px, para o cartão preencher a tela igual já acontece no celular, em vez de sobrar margem branca nas laterais no desktop
- Financeiro (aba Clínica) reorganizado: Resumo Geral no topo somando Sessões + Suplementos − Despesas (Recebido/Pendente/Despesas/Saldo), títulos de seção (Sessões/Suplementos/Despesas) deixando claro que cada bloco é uma fonte separada, e correção de contraste do "Saldo" (estava em tom escuro sobre fundo escuro, ilegível)
- Editar lançamentos de Despesas (Clínica e Pessoal) — antes só dava para excluir e lançar de novo
- Suplementos: botão "Exportar Excel" (.csv, abre no Excel/Google Sheets) e "Imprimir" do catálogo, pensados para compartilhar a lista de estoque com quem faz a compra; dica visual (title) nos botões Editar/Excluir que já existiam mas passavam despercebidos
- Organização do código: dados estáticos do Diagnóstico Integrado (`bancoIntegrativoCompleto`, `sistemasABC`, catálogo inicial de suplementos) extraídos do `index.html` para `dados-clinicos.js`, carregado via `<script src>` — reduz o arquivo principal sem mudar nenhum comportamento
- `.claude/settings.json` configurado para reduzir a fricção do "Allow once" em comandos de rotina (usar `git -C "pasta"` em vez de `cd pasta &&`, que o Claude Code trata como arriscado por padrão e ignora permissões configuradas)
- Módulo de Auriculoterapia no Diagnóstico Integrado: 64 pontos e 54 protocolos extraídos do livro do curso (`auriculoPontos`/`auriculoProtocolos` em `dados-clinicos.js`), esquema original da orelha em SVG (não usa imagens do material licenciado), busca por queixa/protocolo ou por ponto específico — só os pontos relevantes aparecem destacados na orelha por vez. Posições calibradas com o mapa auricular numerado oficial do livro. Pontos adicionados à ficha são salvos no diagnóstico e aparecem no PDF impresso.
- Roda do Bagua (diagnóstico circular) no Diagnóstico Integrado: visualização nova baseada num diagrama que o Montgomery criou em seus estudos — 12 nós (um por meridiano) dispostos em círculo, coloridos pelo elemento (Wu Xing), clicáveis. Ao clicar, mostra o par Yin/Yang completo lado a lado (ex.: Coração/Intestino Delgado), cada lado com seu próprio boneco de equilíbrio (reaproveita `abcBonecoSVG` do Balanço Método) e lista de síndromes. Pensado para crescer: fitoterapia por elemento, sintomas clicáveis, e futuramente ligação com emoções/psicanálise. **Construído e testado localmente, ainda não publicado no site** — aguardando ok do Montgomery para o `git push`.

## Em planejamento

### 1. Boneco do Balanço Método — refinar ilustração (v2)
A v1 já está no ar: boneco esquemático em traços simples (círculos + linhas), funcional, lendo `sistemasABC[].pontos` via `abcBonecoSVG()`. Próximo passo, se quiser: trocar o traço simples por uma ilustração mais anatômica do corpo (braços erguidos), mantendo a mesma lógica de dados.

### 2. Integração Sintoma → Elemento/Meridiano
Objetivo do Montgomery: clicar no sintoma e o sistema já indicar qual elemento/meridiano equilibrar — unificando "Pontos do Corpo" (quiropraxia), "5 Elementos" (MTC), "Balanço Método (ABC)" e agora "Auriculoterapia" num fluxo só, em vez de seções separadas. Cada uma já guarda uma ponta dessa lógica (`canal` em `pontosCorpo`, `balance` em `matrizCincoElementos`, `pontos` em `sistemasABC`, `indicacoes` em `auriculoPontos`) — o trabalho é cruzar esses dados num único motor de sugestão.

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

### 7. Editar uma venda de suplemento já lançada
Hoje no Financeiro só dá para marcar como pago ou cancelar (devolve estoque) uma venda de suplemento. Falta poder editar (corrigir quantidade/produto) sem precisar cancelar e lançar de novo.

### 8. Suplementos/Fitoterapia como "fontes" do Diagnóstico, com link de fornecedor (dropshipping)
Visão do Montgomery: o Diagnóstico Integrado é o centro do raciocínio do paciente, e cada módulo (Suplementos, futura Fitoterapia Chinesa, Florais) é uma fonte de onde se escolhe itens — só o que for clicado aparece na ficha, mantendo-a limpa. Primeira peça já feita: Suplementos buscável dentro do Diagnóstico. Próximas peças, no mesmo padrão: Fitoterapia Chinesa (dados já preparados em `fitoterapia-data.js`/`fitoterapia_schema.sql`) e Florais.
Ideia futura adicional: campo de link do fornecedor (Amazon, Shopee, Mercado Livre etc.) na Recomendação, para venda por dropshipping de fitoterápicos — o paciente compraria direto pelo link, sem o Montgomery precisar manter estoque desses itens.

## Pendências / decisões em aberto

- **Ação necessária do Montgomery:** rodar `suplementos_schema.sql` no Supabase (SQL Editor) antes de usar o módulo Suplementos — cria as tabelas `suplementos` e `vendas_suplementos`
- Tabela `despesas` no Supabase: confirmar se RLS/policy está ativa igual às outras tabelas
- Expandir "Pontos do Corpo" com mais regiões conforme a prática pedir
- Ajuste de zoom mobile (10% hoje, reduzido de 18% por causar corte de tabelas) — acompanhar se está confortável de ler/tocar ou se precisa de mais um ajuste fino
