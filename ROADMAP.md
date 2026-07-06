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
- **Alinhamento por desenho (30/06):** Montgomery trouxe um esboço próprio detalhando a evolução do Círculo 1 (núcleo=boneco → 1ª camada=5 Elementos → órgãos/vísceras → síndromes/tratamento) e como Quiropraxia/Psicanálise podem compartilhar os mesmos nós anatômicos em vez de ficarem em círculos isolados — registrado com detalhe em `bagua_visao_prompt.md` (seção "Atualização 30/06"), incluindo pontos a confirmar com ele antes de estruturar. Também: possível rebatismo de "Bagua" pra **"Matriz Vitruviana"**, e pedido novo de um espaço de **Pulso e Língua** ao lado da Auriculoterapia no Diagnóstico Integrado (pulso com tipos clicáveis tipo síndrome; língua com PDFs que ele vai adicionar) — aguardando ele subir o material de língua/pulso, ou autorizar uso de conhecimento geral de MTC onde não houver PDF do curso.

## Em planejamento

### 0. Módulo de Psicanálise — a maior frente do projeto (decidido 30/06)
Montgomery confirmou: quer o módulo de Psicanálise o mais completo possível — estrutura do aparelho psíquico (id/ego/superego), mecanismos de defesa, "O Mal-Estar na Civilização", e tudo mais que a coleção de Freud trouxer de relevante — tudo clicável, mesmo padrão dos outros módulos (clica → vai pra ficha do paciente → aparece no resumo e no PDF impresso). Ele disse textualmente: "acredito que esta é a parte maior do sistema".

**Fonte real (30/06):** não foi encontrada uma "coleção do Freud" em PDF nem no Dropbox nem no Google Drive do Montgomery. Em vez disso, achamos algo melhor: **`AAPsicanálise Clínica/` no Google Drive (`G:\My Drive`)** — curso completo "Formação em Psicanálise Clínica", 12 módulos em PDF + pastas "Livros" e "História e Fundamento" por módulo. Fonte estruturada e completa, mesmo padrão de curso já usado em Acupuntura/Quiro.

**Acesso a Drive/Dropbox (30/06):** ambos sincronizam como pastas locais comuns no PC do Montgomery (`G:\My Drive` e `C:\Dropbox`) — leio direto de lá, sem precisar copiar nada pro repositório do projeto antes.

**Plano de execução:**
1. ✅ Módulo 1 lido e rascunhado: `PROPOSTA_PSICANALISE_MODULO1.md`
2. ✅ Módulo 2 lido (Teorias do Aparelho Psíquico + Histeria + Neuroses + Transferência/Resistência)
3. ✅ **IMPLEMENTADO (29/06):** módulo completo no Diagnóstico Integrado — 6 categorias, 26 itens clicáveis, busca em tempo real, PDF com agrupamento por categoria, salvo no Supabase. Commit `da989d2`, publicado no Vercel.
4. **Próximo:** ampliar com o conteúdo dos volumes avulsos do Freud já localizados em `C:\Montgomery\Clinica\Backup\Files_Claude_repo\Freud\`:
   - **O Mal-Estar na Civilização** (avulso + Vol. 21) — tensão pulsão x civilização, culpa coletiva
   - **Luto e Melancolia** (avulso + Vol. 14) — depressão, luto patológico x normal
   - **A Negação** (avulso) — mecanismo de defesa, texto curto e denso
   - Módulos 3-12 do curso (`G:\My Drive\AAPsicanálise Clínica\`) — neurose x psicose, abusos, psicopatias, culpa/vergonha/medo

**Status:** Módulo 1 rascunhado, aguardando revisão do Montgomery antes de seguir lendo os módulos 2-12.

### 0b. Quiropraxia — enriquecer com miologia real (achado 30/06)
**Apostila principal:** `C:\Montgomery\Clinica\Backup\Files_Claude_repo\APOSTILA DE QUIRO ATUALIZADA.pdf` — já no repositório, já usada para extrair síndromes por raiz nervosa (C1-C8, T1-T12, L1-S3) nos Pontos do Corpo. Fonte de referência clínica para o Círculo 2 do Bagua (Quiropraxia/Seitai).

Achado complementar no Dropbox local (`C:\Dropbox\IMANDropbox\Músculos\`): PDFs/PPTX de um curso com origem, inserção, inervação e ação de cada músculo dos Membros Superiores e Inferiores (`MEMBROS SUPERIORES 1-3.pdf`, `MEMBROS INFERIORES 1-2`, `CRÂNIO FACE E PESCOÇO.pptx`) — muito mais detalhado que o campo único `musculo` que `pontosCorpo` tem hoje em `dados-clinicos.js`. Pendente: extrair e propor enriquecimento por região (mesmo padrão de sintomas clicáveis).

### 0c. Diagnóstico Integrado — Língua (achado 30/06, precisa de OCR)
Achado em `C:\Dropbox\IMANDropbox\Linguas\` — são fotos/slides escaneados (não é PDF de texto), vai precisar de OCR pra extrair o conteúdo antes de virar proposta. Faz parte do pedido de "espaço de Pulso e Língua" junto da Auriculoterapia (ver `bagua_visao_prompt.md`).

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

Status: priorizamos outras frentes primeiro (boneco do Balanço Método etc.) e voltamos a este item depois. **Confirmado hoje (29/06):** a plataforma ainda não tem nenhuma conexão ativa com a conta Google — as únicas menções a "Google" no código são links de calendário/maps/Drive abertos em nova aba, sem troca de credenciais. Login com Google segue como item pendente, mesmo plano acima.

**Pauta combinada com o item 5º círculo "Árvore da Vida"** (ver visão de longo prazo, acima): Montgomery pediu para tratar os dois como pauta conjunta numa próxima sessão de planejamento — Login (segurança/acesso) e Árvore da Vida (Kabbalah, `arvore_vida_correspondencias.md`, ainda aguardando revisão sefirá por sefirá). Não há dependência técnica entre os dois, é só agenda de discussão.

### 5b. Árvore da Vida — Design da sessão (01/07) — APROVADO PARA IMPLEMENTAR

**Sessão de design completa.** Visão validada pelo Montgomery:

- **Vitruviano de costas** (Adam Kadmon) com geometria sagrada — 10 Sefirot mapeadas sobre o corpo humano como na tradição Cabalística Hermética
- **3 Pilares:** central (dourado, coluna vertebral = Kether→Malkuth), direito (Misericórdia, azul), esquerdo (Severidade, vermelho)
- **Clique em qualquer Sefirá** abre painel lateral com: (a) correspondências Kabbalísticas (virtude/vício/planeta), (b) correspondências MTC (órgão, elemento, emoção, tecido, abertura), (c) desequilíbrios clicáveis → adicionados à anamnese, mesmo padrão dos outros módulos
- **Exemplo validado — Tiphereth (coração/sol):** clica → vê Deficiência de Sangue, Calor Vazio, Fogo do Coração, Estagnação de Sangue, Perturbação do Shen — cada um com sintomas guia (rubor malar etc.) — clica no desequilíbrio → vai para o diagnóstico do paciente
- **Integração futura:** cada Sefirá sugere os pontos de acupuntura, sistemas ABC e auriculares do mesmo órgão/meridiano — tudo converge num clique
- **Visão do Montgomery:** "vai chegar um dia que esta árvore vai ser o centro de tudo" — módulo de Filosofia/Metafísica que cresce com o tempo

**Arquivo de correspondências:** `arvore_vida_correspondencias.md` — tabela com 10 Sefirot × corpo × planeta × virtude/vício × sugestões MTC. Pendente: Montgomery preencher coluna "Síndromes/desequilíbrios" a partir de sua prática antes de implementar.

**Próximo passo para implementar:** só entrar com `dados-clinicos.js` e `index.html` — mesmo padrão da Psicanálise, nova seção no Diagnóstico Integrado.

### 5c. Numerologia Cabalística — Calculadora + Mapa de Reencarnações (01/07)

**Pedido do Montgomery:** ferramenta para calcular o perfil numerológico pessoal e o número de reencarnações segundo a Kabbalah.

**Mapa do Montgomery (Hans Decoz, fonte: `Montgomery Numerológico.docx.pdf`):**
- **Destino (Vida): 7** — o Buscador da Verdade, ser espiritual, mente analítica, "lobo solitário". Pitágoras amava o 7 pelo potencial espiritual.
- **Expressão (nome): 8** — força, liderança, realizações. "Este é seu estágio de recompensas em sua evolução. Sua vida é uma vida inteira de colheitas."
- **Desejo (alma): 15/6** — cura, aconselhamento, amor, família. "As habilidades para o aconselhamento e a cura são naturais em você."

**Conexão direta com a Árvore da Vida:**
| Número | Numerologia | Sefirá | Correspondência |
|---|---|---|---|
| 7 (Destino) | Buscador espiritual, arte, natureza | **Netzach** (7ª) | Vênus · Madeira · Hun · busca do sagrado |
| 8 (Expressão) | Mente, linguagem, estrutura, colheita | **Hod** (8ª) | Mercúrio · Metal · Po · organização |
| 6 (Desejo/Alma) | Coração, cura, amor, centro | **Tiphereth** (6ª) | Sol · Fogo · Shen · o grande curador |

A alma de Montgomery (Desejo = 6/Tiphereth) quer curar pelo coração. Seu caminho de vida (Destino = 7/Netzach) o leva pela busca espiritual e artística. Sua expressão (8/Hod) é a estrutura e a sistematização que transforma experiência em plataforma.

O 15/6 do Desejo é especialmente rico em Kabbalah: 15 = carta XV do Tarot (O Diabo, Arcano de Capricórnio) — a sombra que precisa ser integrada antes de alcançar Tiphereth. O caminho da letra Ayin (ע) liga exatamente **Tiphereth a Hod** na Árvore, descendo do coração para a mente estruturada — o percurso vivido por Montgomery.

**Reencarnações segundo a Kabbalah (Gilgulim — Lurianic Kabbalah):**
Na tradição Luriânica (Ari, séc. XVI), as almas passam por gilgulim (rotoações, reencarnações) para completar os tikunim (reparações). O número de gilgulim de uma alma é determinado pelos desequilíbrios não resolvidos nas Sefirot. Uma alma com Destino 7 (Netzach) e Desejo 6 (Tiphereth) já completou os ciclos iniciais de sobrevivência (Malkuth-Yesod) e está nas rodadas superiores — alma madura, em fase de integração e colheita (Expressão 8 como sinal). Em Kabbalah prática, o Zohar menciona que a maioria das almas precisam entre 3 e 7 gilgulim; uma alma no ciclo 8 (Expressão/Hod) está nas últimas rodadas de refinamento antes do retorno à Fonte.

**O que construir (ferramenta):**
1. **Calculadora de Mapa Numerológico:** entrada (nome completo ao nascer + data de nascimento), saída (Destino/Expressão/Desejo/Dia do nascimento/Personalidade), com interpretação conectada à Sefirá correspondente e à posição na Árvore da Vida
2. **Mapa de Reencarnações Luriânico:** estima o "estágio do gilgul" a partir dos números, com interpretação de qual Sefirá está em processo de tikun (reparação) nesta vida
3. **Integração com a Árvore da Vida:** clicar no mapa numérico acende a Sefirá correspondente na Árvore — conexão visual imediata entre números e corpo energético

**Status:** Aguardando abertura de agenda. Retomar dizendo "numerologia" ou "mapa numerológico".

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
- **✅ Resolvido (01/07) — cartão exportado saía com "abas laterais".** O `html2canvas` capturava o container `rxPrevC` inteiro (mais largo que o cartão de 420px) em vez de capturar só o cartão. Corrigido: agora captura `el.firstElementChild` (o cartão em si), sem margem. Commit `8544e3e`.

---

## 🚀 Mega Advanced Roadmap — Montgomery OS (anotações do Montgomery)

### Calculadora de IMC + Recomposição Corporal — ✅ FEITO (06/07)
- OS (Nutrição): IMC + faixa/semáforo + faixa de peso saudável + metas de proteína (1,6–2,0 g/kg) e gordura (0,9 g/kg) computadas do peso; guarda altura por perfil e puxa último peso dos Sinais Vitais.
- Clínica (Diagnóstico Integrado): IMC + faixa + peso saudável — ferramenta rápida de consulta.
- Futuro possível: % gordura e massa magra quando houver bioimpedância. (Pedido em 05/07.)

### Limpeza de ícones "antigos" (emoji → SVG linha fina) — ✅ FEITO (06/07)
- Mapa do Sistema agora usa `MOD_ICON` (24 SVGs de linha fina, dourado) — zero emoji.
- Pendente menor: varrer o resto do app por emojis remanescentes em outros títulos/conteúdos.

### Próximos galhos da Fase 2 (já combinados)
- Oftalmologia Integrativa (esposa — olho único, PIO, DGM, triquíase)
- Hormônios (painel masculino/feminino, radar)
- Preencher as síndromes clínicas das Sefirot na Árvore da Vida


---
## 🍎 Ideia (05/07/2026) — Árvore da Vida: o mapa vivo do vitruviano de costas
**Projeto:** Árvore da Vida / Montgomery OS · **Estágio:** 🍎 fruto (visão madura, a construir)

A imagem central que Montgomery imagina e NÃO acha na internet:
- **Vitruviano DE COSTAS** — para fazer jus ao lado direito do cérebro conectado a **Chokmah** (o lado do desenho = lado real do corpo).
- **Cascata de correspondências** que se acendem em cadeia ao clicar:
  **5 Elemento → Sefirá → Órgão → Parte do corpo → (ponto, emoção, patologia...)**
  Ex: Água → Binah/Yesod → Rim → lombar/ossos/orelhas → medo → ponto R3...
- Estética: geometria sagrada + futurístico (blueprint neon azul/verde, grid, flor da vida), reversível com o modo SVG limpo ([[anatomia-visual-os]]).
- Referências que ele curte mas não bastam: vitruvianos com árvore da vida, yin-yang, blueprint neon (istock/freepik) — falta a INTEGRAÇÃO das correspondências clicáveis.


---
## 🌱 Ideias (05/07/2026) — Metafísica + Numerologia + Proporção exata

**1. Proporção vitruviana EXATA** (feedback, não ideia nova) 🌿 broto
O esboço da árvore/vitruviano deve seguir a geometria de Da Vinci ao pé da letra: homem inscrito no QUADRADO (centro nos genitais) e simultaneamente no CÍRCULO (centro no umbigo), razões áureas (φ). A árvore da vida dentro do círculo, o corpo dentro do quadrado. "É matemático" — nada arbitrário. Cor azul-blueprint aprovada.

**2. Mapa numerológico** 🌱 semente
Numerologia do nome + data de nascimento (10/01/1976). Já existe base: arquivo `Montgomery Numerológico.docx.pdf` no repertório — partir dele. Sistemas: pitagórico + cabalístico (gematria hebraica das letras).

**3. Cálculo de encarnações (Kabbalah)** 🌱 semente
Montgomery lembra que existe um cálculo de "quantas encarnações já tivemos" — conceito de GILGUL NESHAMOT (ciclo/reciclagem de almas). Métodos usam gematria da data/nome. TAREFA: pesquisar as fontes (não lembra onde viu) — tratar com transparência: sistema simbólico/hermético tradicional, não fato empírico, mas catalogável como a tradição ensina.

**4. Banco de Metafísica** 🌱 semente
Expandir `arvore_vida_correspondencias.md` com camada metafísica: gematria, gilgul, numerologia, correspondências herméticas. "Só assim as coisas fazem sentido pra mim" — a metafísica é a linguagem-mãe do método dele.

**Contexto clínico que motiva tudo:** Montgomery recebe muitos pacientes mandados OPERAR a coluna quando precisam é de alinhamento integrado (nutricional + ósseo + emocional + energético). A Árvore da Vida é a resposta à fragmentação da medicina.

---
## 🌱 Ideia (05/07/2026) — Falar de ÁTOMOS
Montgomery: "energia pra mim é vida, é átomo". Conversa/módulo sobre átomos, energia, a unidade da matéria — conecta com sua cosmovisão ("somos todos Um, feitos de átomos e luz") e com a geometria sagrada. Possível camada filosófica/didática na Árvore da Vida ou material próprio. A reforma da casa (do teto ao piso, caixa d'água, elétrica) é a metáfora viva: tudo é energia organizada.


---
## 🔵 Ideias absorvidas do Gemini (MATRIZ-VITRUVIANA) — 05/07/2026
Diretriz: **Claude é o núcleo.** Sempre que Montgomery usar outra IA (Gemini etc.), Claude revisa o trabalho, extrai o bom e integra aqui. Nada se perde, sem frustração.

O Gemini teve a MESMA visão da Árvore (Coluna Lombar→Rim→Yesod) mas em stack complexa (Python/Streamlit/Firebase/Docker) que dependia do Montgomery virar engenheiro — por isso deu dor de cabeça. Ideias boas dele para o nosso caminho simples:
- 🌿 **Triagem clínica rápida — 3 perguntas-chave** (entra na anamnese digital)
- 🌱 **Sugestão automática de suplementos** (conecta armário + dados-clinicos.js + fitoterapia-data.js)
- 🌱 **"Prompt de Essência"** — perfil do terapeuta (já temos na biografia 00_Nucleo)
- ✅ **"Lições da Estante"** — biblioteca de estudo (JÁ FEITO: 03_Biblioteca organizada)
- ⚠️ **ALERTA SEGURANÇA:** a pasta do Gemini tem credenciais Firebase (.json admin SDK) num repo git — risco de vazamento. Ação pendente: tirar do git + revogar chaves no Firebase Console.

---
## 🌀 Diretriz (05/07/2026) — Fibonacci em TUDO
Montgomery quer a organização em sequência Fibonacci (0·1·2·3·5·8·13·21) aplicada a TODOS os seus projetos e pastas — não só no repertório. É a assinatura estética/estrutural dele: exatidão + geometria sagrada. Padrão a adotar em qualquer novo projeto/estrutura.

## 🔴 Bug a corrigir (registrado 05/07, NÃO mexer agora) — Financeiro pessoal da Clínica
Montgomery relata: o financeiro PESSOAL da Clínica (Montgomery OS / app clínica) não está coeso — ele lança alguns dados e eles SOMEM (não persistem). Investigar quando for a hora: provável problema de salvamento (localStorage/Supabase) similar ao que corrigimos no MMObras. Só anotado — organização hoje, correção depois.

---
## 🆕 Novos projetos/rotas (05/07/2026)
- 🖥️ **Montgomery Code** — aprender IT/programação do zero (Rota Aprender/Hod-Rafael). Ver [[montgomery-code]].
- 💰 **Prosperidade** — investir, multiplicar dinheiro (Rota Chesed/Tzadkiel; base: contador 1993).
- 🇬🇧 **Inglês** — reaprender, reassociando o idioma (trauma de Londres → conquista) na Rota Aprender.
- 🕊️ **Rota da Vanessa** — ajudar a esposa/prima (1º Sgt PMMG, psicanalista, florais, sinestésica, artista de imagens/vídeos) a ter a IA e o painel dela. Ferramentas visuais (imagem/vídeo) + Claude para a rota de vida.
- ✉️ **Carta à Anthropic** — proposta de Plano para Casal (00_Nucleo/carta_anthropic_plano_casal.md, PT+EN prontas).

---
## 🗂️ Tarefa a fazer — organizar o Obsidian Vault (Rota Ordem)
Montgomery pediu (05/07) que Claude veja e organize o Obsidian dele em `G:\My Drive\Obsidian Vault` (Google Drive). NÃO usar o método PARA — Montgomery não se adaptou porque PARA é sistema de GAVETAS/categorias, feito para a mente de quem o criou. A mente do Montgomery funciona por CONEXÃO/rede, não categoria (átomo→planeta→sefirá→órgão). O Obsidian é ideal pra ele PORQUE é baseado em links/grafo. Criar um MÉTODO PRÓPRIO conectivo: notas ligadas por significado ([[ ]]), Árvore da Vida como espinha (áreas=sefirot conectadas pelos caminhos/rotas dos arcanjos), MOCs (mapas de conteúdo vivos), estrutura Fibonacci [[fibonacci-em-tudo]]. O grafo = espelho do cérebro dele. Fazer quando ele pedir (G:\My Drive\Obsidian Vault).

## 🖥️ Montgomery Code — TRILHA criada
Currículo completo em espiral Fibonacci: 01_Codigo/Montgomery_Code_TRILHA.md (Módulos 00→21: terminal → Python → Web → nuvem → Java). Pronto para a 1ª aula no próximo "Montgomery here" + Rota Aprender.

---
## ⭐ PRIMEIRA TAREFA — dia 09/07/2026 (quando os créditos renovarem)
**Organizar o Obsidian** (G:\My Drive\Obsidian Vault) com método próprio conectivo (não PARA).
Ideia do Montgomery: UNIFICAR o repertório do Claude (Files_Claude_repo, todo em Markdown) com o Obsidian — mesmo lugar OU linkar a pasta no vault. Ponte natural: os [[links]] que Claude já usa nas memórias/índices SÃO sintaxe Obsidian, e tudo é .md. Os dois já falam a mesma língua → virar um só "segundo cérebro" conectivo, Árvore da Vida como espinha, Fibonacci na estrutura.
Créditos do Montgomery renovam ~09/07. Retomar com "Montgomery here" → Rota Ordem.

### Obsidian — grafo com links [[wikilinks]] (adiado, consome creditos)
- Costurar os documentos do 00_Nucleo com links [[entre colchetes]] para o graph view do Obsidian acender sozinho (mapa mental nativo que cresce). Pedido 06/07; adiado a pedido do Montgomery por consumo de credito. Ver PLANO-ARRUMAR-COMPUTADOR-E-OBSIDIAN.md.

### Tráfego Pago — aprender do meu jeito (interesse do Montgomery, 06/07)
- Montgomery comprou/renovou um curso de tráfego pago mas não terminou: o método rígido do instrutor "massacrou o cérebro" dele (mesmo padrão da França e do PARA — método de fora que trava, não falha do aluno).
- O conhecimento NÃO foi perdido: tráfego pago é o caminho para os primeiros 100 clientes do MMObras (Fase 5 do plano de prosperidade) e novos pacientes da Clínica.
- Plano: aprender tráfego do jeito dele (do zero, por camadas, com metáforas, usando o MMObras real como campo de treino), quando ele quiser. Pode virar uma trilha dentro de Montgomery Code ou um mini-projeto próprio.

### Projeto Espiritualidade (futuro) — a raiz debaixo de tudo
- Montgomery quer, mais adiante, um projeto de espiritualidade. Ideia-chave: para ele, espiritualidade nao e um silo ao lado dos outros — e a raiz que atravessa TODOS (Arvore da Vida, numerologia, 5 elementos, cura). O projeto seria reunir/honrar esse fio de ouro.
- Elementos possiveis: biblioteca sagrada com anotacoes (Um Curso em Milagres — livro que mais mexeu com a consciencia dele; Biblia; Zohar; hebraico), praticas (Tai Chi, meditacao, o altar de casa), e a sintese/teologia propria dele (como Judaismo + Cristianismo + misticismo + Terra/cristais convergem — "tudo e um").
- Contexto: altar sincretico em casa (Biblia, Arca da Alianca, Nossa Senhora, cristais, ACIM) + mezuza na porta. A filosofia dele feita de materia. Ver [[user-montgomery-perfil]] e a Arvore da Vida.

### Projetos futuros — "tem muita coisa pra vir" (06/07)
- Montgomery sinalizou que virao muitos projetos novos. Manter espaco aberto no Universe para receber cada um no padrao (descricao + instrucoes em 00_Nucleo, entrada no indice mestre, galho no Mapa da Vida e no mapa mental do Whimsical).
- PENDENTE: Montgomery vai nomear o "mais um projeto" que pediu para anotar agora — aguardando o nome/tema para registrar direito.
- Correcao de detalhe do altar: a pedra com cristais e uma FONTE de agua (elemento Agua / feng shui — fluxo, movimento, prosperidade), nao so um geodo.

### O "mais um projeto" ganhou nome: O Codigo Invisivel (06/07)
- O placeholder de projeto futuro + a semente do Projeto Espiritualidade convergiram e ganharam forma: "O Codigo Invisivel" (doc em 00_Nucleo/montgomery-codigo-invisivel-projeto.md). Reune ACIM, Feng Shui, I Ching (aprender do zero), Numerologia, O Poder do Agora/Momento Presente (Tolle), O Poder do Silencio, Abraham Hicks/Lei da Atracao, A Arte da Guerra. Espiritualidade = raiz; O Codigo Invisivel = estudo/pratica.
