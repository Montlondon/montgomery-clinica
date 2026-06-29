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
- Seção "Sobre / Formação" no menu lateral: galeria de diplomas/certificados (em ordem cronológica real, 2015-2024), com upload self-service em Configurações (Montgomery sobe novos diplomas direto pela tela, sem precisar pedir ajuda) — imagens comprimidas no navegador antes de salvar (ficam ~30-65KB cada), guardadas na tabela `diplomas` do Supabase
- Resolvido de vez o desalinhamento do rodapé no Android: causa real era a configuração "Tamanho da Exibição" do próprio Android (densidade de tela), que competia com o `zoom:1.1`/depois `font-size:110%` que o CSS aplicava por cima. Removido o ajuste de fonte extra do CSS mobile — agora o site não compete com a configuração de exibição do aparelho, cada usuário controla o tamanho pelo próprio Android sem efeito colateral no layout
- Diplomas: corrigido bug em que o clique pra abrir a imagem em tamanho maior não funcionava no Android (o navegador bloqueia navegação para links `data:` em nova aba) — agora abre no visualizador de imagem já existente no app
- **Roda do Bagua — Círculo 1 (Acupuntura), completo e publicado:** visualização circular com os 12 meridianos coloridos por elemento (Wu Xing), boneco do Balance Method sempre no centro (mostra o par Yin/Yang ao clicar num meridiano, indicador de "órgão de plantão" pelo horário, selo com contagem de sistemas já na ficha). Sintomas/síndromes de cada lado Yin/Yang agora são clicáveis — selecionar adiciona à ficha do paciente (salvo no Supabase, aparece no resumo e no PDF impresso), mesmo padrão dos outros módulos.
- Tabela do Balanço Método: síndromes clicáveis também na "Tabela Completa" (não só na roda do Bagua), lendo/escrevendo o mesmo estado — clicar em qualquer um dos dois lugares atualiza ambos.
- Recomendação Terapêutica: corrigido travamento ao compartilhar/baixar quando `navigator.share()` falha (ex: autorização do navegador expira enquanto a imagem é gerada) — agora cai automaticamente para download do JPG em vez de só mostrar erro.
- Balanço Método: coluna "Relação / Lógica" da Tabela Completa agora fica oculta por padrão, atrás de um botão "Mostrar/Ocultar" — informação de consulta ocasional, não precisa ocupar espaço sempre.
- Auriculoterapia: card agora mostra sempre o desenho da orelha com os 64 pontos (antes só apareciam os pontos filtrados pela busca). Tentei mostrar o nome de cada ponto fixo no desenho e ficou ilegível (101 pares de texto sobrepostos) — solução foi manter os pontos como círculos clicáveis com tooltip nativo; clicar abre nome e detalhes no mesmo painel que a busca já usava.
- **Item 2 concluído — Sintomas clicáveis em 5 Elementos e Pontos do Corpo:** mesmo padrão do Balanço Método/Bagua. Conteúdo real, não inventado: 5 Elementos usa os "Sinais de desequilíbrio" do Módulo 6 do livro de curso "Acupuntura Para Todos"; Cervical/Lombar/Sacroilíaca usam os quadros de "efeitos das raízes nervosas" e sinais sacroilíacos da `APOSTILA DE QUIRO ATUALIZADA.pdf` que o Montgomery adicionou ao repositório. Joelho/Cotovelo/Pelve/Tornozelo não têm quadro de sintomas nas apostilas (só técnica de ajuste) — usada semiologia musculoesquelética geral, sinalizado como tal. Criada também a região **Torácica (T1-T12)** em Pontos do Corpo, que não existia, a partir do quadro rico de raízes nervosas torácicas da mesma apostila.
- **Item 2 completo — Motor de sugestões cruzadas entre módulos:** a partir do que já está na ficha (Pontos do Corpo via `canal`, Elementos, Sistemas ABC selecionados), o sistema calcula o meridiano em foco (usando a correspondência Wu Xing padrão dos 12 meridianos, conhecimento geral de MTC) e sugere — sem adicionar automático — o Elemento, Sistema ABC e pontos de Auriculoterapia relacionados pelo mesmo meridiano/órgão. Cada sugestão tem botão "+ adicionar"; some da lista quando o item já está na ficha. Card "Sugestões cruzadas" aparece no Diagnóstico Integrado sempre que há algo selecionado.

## Visão de longo prazo — "Bússola Holográfica" (círculos concêntricos)

Visão do Montgomery pra evoluir o Bagua: ao invés de só Acupuntura, a roda terá **4 círculos concêntricos**, cada um um módulo terapêutico, todos atualizando o mesmo boneco central — vértebras/sintomas da Quiropraxia/Seitai enriquecendo o boneco, temas de Psicanálise (Édipo, abusos, culpa, medo, vergonha) clicáveis, e Fitoterapia/Florais/Suplementos organizados pelos 5 Elementos. Reiki/Chakras como módulo oculto (toggle em Configurações), e uma futura camada de Árvore da Vida (Kabbalah) conectando às emoções/meridianos já mapeados. Documentação completa da visão em `bagua_visao_prompt.md` e `Bussola_Holografica_Genesis.md` (não versionados no git, só locais).

**Status:** Círculo 1 (Acupuntura) pronto. Retomar dizendo só "Bagua" pra seguir com o Círculo 2 (Quiropraxia/Seitai).
- Meridianos Mágicos: localizados nas páginas 15-19 do `apostila-meq-completa-202320.pdf` (8/4/12 Meridianos Mágicos, Conversão de Meridianos) — ainda não estruturado como dado, texto saiu embaralhado na extração automática e precisa ser conferido com calma página por página antes de virar conteúdo na plataforma.

## Em planejamento

### 1. Boneco do Balanço Método — refinar ilustração (v2)
A v1 já está no ar: boneco esquemático em traços simples (círculos + linhas), funcional, lendo `sistemasABC[].pontos` via `abcBonecoSVG()`. Próximo passo, se quiser: trocar o traço simples por uma ilustração mais anatômica do corpo (braços erguidos), mantendo a mesma lógica de dados.


**Sub-item concluído (29/06):** sintomas/sinais clicáveis dentro dos cards "5 Elementos" e "Pontos do Corpo" — mesmo padrão de Balanço Método/Bagua, conteúdo extraído das apostilas reais do Montgomery (ver item na seção Concluído). O que falta é só a camada de sugestão automática cruzando os dados, não mais a anotação em si.

### 3a. Autosave em todos os formulários
Hoje (30/06) o autosave de verdade (salva sozinho ~1,5s depois de parar de digitar, sem precisar clicar em nada) só existe no cadastro de **Novo Paciente** (`mudou()`/`salvarRasc()`, guarda em `localStorage['rascunho']`). Os outros formulários só salvam quando o terapeuta clica no botão "Salvar":
- Diagnóstico Integrado (avaliação do paciente)
- Recomendação Terapêutica
- Nova Sessão
- Suplementos (cadastro/edição de produto)
- Despesas (Financeiro)
- Configurações

Risco: se o navegador fechar, o celular travar ou a aba recarregar no meio do preenchimento, o que foi digitado nesses formulários se perde — só o cadastro de paciente está protegido disso hoje. Quando for fazer, replicar o mesmo padrão (`mudou()` com debounce + indicador "Não salvo"/"Salvo automaticamente" + restaurar rascunho se a tela for reaberta sem ter sido salva).

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
- **Resolvido (30/06) — Recomendação/Diagnóstico: cartão "mudava de formato" toda hora.** Causa real: o cartão usava `max-width:640px` em vez de largura fixa, então o tamanho final do JPG dependia da tela de quem gerou (celular = apertado, desktop = esticado e com espaço vazio). Trocado para `width:420px` fixo nos dois (Recomendação e Diagnóstico) — agora a imagem fica sempre com a mesma proporção, em qualquer aparelho.
