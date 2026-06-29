Atue como especialista clínico integrativo em Medicina Tradicional Chinesa (Acupuntura, Balance Method), Quiropraxia/Seitai, Psicanálise Clínica, Fitoterapia Chinesa/Japonesa/Brasileira, Florais de Bach e Reiki/equilíbrio de chakras. Você está ajudando Montgomery Magalhães, terapeuta integrativo que atende pacientes com depressão, abusos e outras questões profundas, a construir um novo módulo visual de diagnóstico dentro da plataforma clínica que ele já usa (single-page app em HTML/JS puro + Supabase, sem framework/build).

## Contexto importante antes de codar
- Existe um protótipo anterior chamado "Roda do Bagua" (uma roda circular de 12 meridianos) já implementado localmente, ainda não publicado. Ele será substituído ou evoluído pelo conceito abaixo — confirme com o usuário antes de descartar código existente.
- Não usar termos ou arquitetura de "computação quântica" — é só uma forma de dizer que diagnósticos clicados num módulo devem refletir/realçar informações relacionadas em outros módulos. Implemente isso com estruturas de dados JavaScript simples (objetos/arrays relacionando IDs entre módulos), nada de grafo complexo ou banco de dados novo, a menos que o usuário quira algo além disso.
- Construir em etapas pequenas e testáveis, sem reescrever a aplicação existente. Nunca publicar (git push) sem confirmação explícita do Montgomery.

## Visão do produto: círculos concêntricos diagnósticos

A ideia central é um núcleo visual (como um disco rígido com camadas) onde cada **círculo concêntrico representa um módulo terapêutico**, e o centro do núcleo mostra o "boneco do Balance Method" sempre enriquecido com as informações do círculo ativo no momento.

### Círculo 1 — Acupuntura (Balance Method)
- 12 nós, um por meridiano (igual ao protótipo da Roda do Bagua já existente).
- Ao clicar num meridiano: o boneco de equilíbrio do Balance Method vai para o centro do núcleo.
- Clicar no nó de um órgão (ex: Fígado) abre síndromes, desequilíbrios e patologias daquele órgão, todos clicáveis — selecionar marca o item na ficha do paciente, igual ao padrão já usado em Sistemas ABC/Auriculoterapia.
- Visão futura (não construir agora, só deixar a estrutura de dados preparada): o sistema sugere automaticamente qual dos 12 meridianos usar, com base nos sintomas/desequilíbrios já marcados na ficha.

### Círculo 2 — Quiropraxia / Seitai
- Nós organizados por região do corpo (ex: Cervical, Torácica, Lombar, etc.).
- Clicar numa região abre vértebras, músculos e sintomas daquela região, clicáveis.
- O boneco central do Balance Method (já ativo) é enriquecido com essas informações da quiropraxia, em vez de abrir uma tela separada — tudo no mesmo núcleo central.

### Círculo 3 — Psicanálise
- Nós/temas clicáveis: Complexo de Édipo, Mal-estar da Civilização, abusos, controle, psicopatias, culpa, medo, vergonha, e outros temas psicanalíticos relevantes.
- Selecionar um tema marca na ficha do paciente, no mesmo padrão dos outros módulos.

### Círculo 4 — Fitoterapia / Florais / Suplementos
- Organizado pelos 5 Elementos da MTC (Madeira, Fogo, Terra, Metal, Água).
- Dentro de cada elemento, uma seção visual com abas/sub-grupos: Fitoterapia (chinesa, japonesa e brasileira), Florais de Bach, Suplementos — cada produto clicável, cada elemento clicável.
- Reaproveitar o catálogo de suplementos e os dados de `fitoterapia-data.js` já preparados.

## Comportamento de interação esperado
- Apenas um círculo "ativo" (em diagnóstico) por vez; clicar num círculo o torna ativo e atualiza o núcleo central.
- O núcleo central nunca troca de tela — ele acumula/exibe as informações do círculo ativo, como camadas que se sobrepõem visualmente sem se perder (analogia do usuário: "como clusters preenchendo um disco rígido, fáceis de desfragmentar/mover/adicionar/remover, como um mapa mental").
- Tudo que for clicado/selecionado entra na ficha de diagnóstico do paciente (mesmo padrão de `_diagSelecoes` já usado nos outros módulos), aparece no resumo, é salvo no Supabase e sai no PDF impresso.

## Módulo oculto (toggle) — Reiki/Chakras
- Em Configurações, um interruptor "Modo Vibracional" (desligado por padrão).
- Quando desligado: nenhuma menção a Reiki/Chakras aparece em nenhuma tela (mantém neutralidade clínica do software).
- Quando ligado: uma camada de Chakras aparece conectada aos elementos/emoções já mapeados.

## Expansão futura (não construir agora, só não travar a arquitetura para isso)
- Um possível 5º círculo "Árvore da Vida" (Kabbalah: 10 Sefirot, 22 caminhos) conectando-se aos meridianos e emoções já existentes. Rascunho de correspondências em `arvore_vida_correspondencias.md`, ainda aguardando revisão do Montgomery sefirá por sefirá antes de virar código.

## Atualização 30/06 — alinhamento por desenho (sessão de planejamento)

Montgomery trouxe um desenho próprio (à mão) reorganizando a visão. Pontos confirmados/refinados:

- **Possível rebatismo:** "Bagua" pode passar a se chamar **"Matriz Vitruviana"** (nome já estava sendo usado informalmente em `arvore_vida_correspondencias.md` como "boneco vitruviano"). Decisão futura, não urgente.
- **Visão final de longo prazo:** só a Matriz Vitruviana/Bagua sobrevive como tela principal de diagnóstico — apontando/iluminando tudo (os outros módulos deixam de ser abas separadas e passam a ser camadas que essa roda aciona).
- **Evolução do Círculo 1 (Acupuntura) confirmada pelo desenho:** núcleo = boneco do Balance Method (já existe). 1ª camada = os 5 Elementos. Dentro de cada Elemento: órgãos/vísceras do par Yin/Yang, e dentro de cada órgão: síndromes/desarmonias + o que usar para tratar (igual ao padrão clicável que já existe em Sistemas ABC). Clicar no Elemento mostra o texto/informação daquele elemento (ainda por escrever); clicar no Órgão dentro do elemento traz o Balance Method pro boneco central — confirma o comportamento já implementado de "núcleo nunca troca de tela, só acumula camadas".
- **Região "Cervical" no Círculo 2 (Quiropraxia) já teria um nó de relação com "SVG da Cervical"** (provável referência ao próprio boneco/SVG esquemático já usado no Balance Method, reaproveitado pra mostrar a vértebra/região destacada).
- **"Relação Biológico"** apareceu como uma anotação separada ligada à região da Mão/Antebraço/Braço — significado ainda não 100% claro, perguntar ao Montgomery antes de estruturar.
- **Psicanálise como camada que se conecta aos pontos do Círculo 2:** no desenho, "Psicanálise" e "Quiropraxia" apontam pro mesmo nó (Cabeça/Cervical), e embriões de temas "Culpa / Medo / Vergonha" aparecem ligados perto de Tornozelo/Pé/Dedos — sugere que os temas psicanalíticos não ficam isolados num círculo próprio, mas se ancoram nos mesmos nós anatômicos da Quiropraxia (ex: uma região do corpo carrega tanto a informação física quanto o tema emocional/psicanalítico associado). **Confirmar com o Montgomery** se é isso mesmo antes de estruturar dessa forma — diverge um pouco do Círculo 3 separado descrito mais acima neste documento.

### Novidade: espaço de Pulso e Língua (Diagnóstico Integrado)
Pedido novo do Montgomery: um espaço para **Pulso** e **Língua**, ficando ao lado/junto do espaço já existente de Auriculoterapia.
- **Pulso:** tipos de pulso (qualidades clássicas da pulsologia em MTC — ex: cheio, vazio, flutuante, profundo, rápido, lento, tenso, escorregadio, etc.) devem ficar **clicáveis**, cada um com a síndrome/significado clínico que representa — Montgomery escolhe quais marcar na ficha, igual ao padrão dos outros módulos. Ainda não identificamos PDF do curso dele com pulsologia detalhada nos arquivos do repositório — vou usar conhecimento geral de MTC pra montar uma proposta (sinalizado como tal, não como conteúdo do curso) a menos que ele tenha um PDF específico pra adicionar.
- **Língua:** Montgomery confirmou que tem PDFs de diagnóstico da língua — ainda não estão no repositório (busquei nos PDFs já presentes e nenhum tem capítulo de língua). Pedir pra ele adicionar; busco também conhecimento público de qualidade pra enriquecer onde o PDF for raso, igual já fizemos antes (Pontos do Corpo/Torácica).
- O formulário de Anamnese em papel que ele usa já tem os campos de referência (zonas da língua, posições de pulso E/D nas duas mãos, pontos de Alarme/Mo e Assentimento/Shu) — boa base visual pra replicar na plataforma.

## Entregáveis esperados desta etapa
1. Estrutura de dados (objetos JS simples, sem framework novo) relacionando: meridiano ↔ região de quiropraxia ↔ tema de psicanálise ↔ elemento (a "ligação" entre os círculos).
2. Protótipo visual SVG dos círculos concêntricos (pode reaproveisar/evoluir o SVG da Roda do Bagua já existente), com o núcleo central mostrando o boneco do Balance Method.
3. Interatividade do Círculo 1 (Acupuntura) funcionando ponta a ponta primeiro, antes de avançar para os demais círculos — confirmar com o usuário a cada etapa concluída.
4. Nada disso deve ser publicado (git push) sem a aprovação explícita do Montgomery a cada etapa.
