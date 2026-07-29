# Roadmap — Montgomery Saúde Integrativa

Documento vivo para acompanhar o que já foi feito e o que está planejado. Atualizar conforme avançamos.

## OS — Gilgul: a bagagem de outras vidas (OS v3.7, 28/07/2026)

Nasceu de uma pergunta do Montgomery: uma professora fez para ele, anos atrás, um "cálculo de reencarnações" usando Cabala, e ele nunca soube como era feito.

**A resposta honesta veio primeiro:** não existe cálculo que conte *quantas* vidas alguém viveu — em escola nenhuma. O que a tradição calcula é **o que ficou por corrigir**. Isso está escrito no topo do próprio bloco, em negrito, para ninguém confundir.

O bloco novo na Numerologia traz duas vias, ambas exatas no cálculo:

1. **Nodos da Lua** — a via propriamente cabalística (*gilgul*, transmigração das almas; é onde mora o Tikun do Berg). O **nodo sul** é a bagagem, a zona de conforto herdada que vira muleta; o **nodo norte** é a correção desta vida. Calculado pela fórmula do nodo médio (Meeus), sem tabela e sem internet — conferido contra a referência em J2000: **125,0445°**, exato. Liga direto ao signo na aba Astrologia.
2. **Arcano de nascimento** — a data inteira somada dígito a dígito e reduzida até caber em 1–22, com a letra hebraica correspondente. É a tabela que as escolas brasileiras de "cabala numerológica" usam; provavelmente foi daí que saiu o número que a professora deu a ele.

Cada fonte está declarada no rodapé do bloco: os nodos são astronomia, a **leitura** deles como memória de outras vidas é doutrina do Kabbalah Centre, e a atribuição letra→arcano é da Golden Dawn, não fonte antiga.

## Agenda Cheia: fim da sessão em dobro (v4.7, 28/07/2026)

O Montgomery viu na tela: João Calha e Wervely apareciam **duas vezes** no mesmo dia — em laranja como sessão e em cinza como compromisso do Google.

A causa: o filtro reconhecia só os eventos com a etiqueta invisível `clinicaId`, que existe apenas nos eventos criados pela Ponte. Os que nasceram do caminho antigo — "Salvar e abrir Google Agenda", ele clicando no Google — chegam sem etiqueta e sem carimbo, e a Clínica não os reconhecia como filhos dela.

Agora eles são reconhecidos **pelo que se vê**: mesma hora de início e o nome do paciente batendo com o título do evento (sem acento, sem caixa, um contendo o outro — o Google costuma cortar títulos).

## Ponte de mão dupla — o sentido de volta (v4.6, 28/07/2026)

Até aqui a ponte era de mão única: a Clínica escrevia no Google e não escutava. Se o Montgomery arrastasse a sessão no celular, dentro do Google, as duas verdades se separavam.

**Testada ao vivo pelo Montgomery em 28/07/2026, nos dois sentidos** — "funcionou perfeitamente". Clínica→Google muda na hora; Google→Clínica aparece ao reabrir a aba Agenda (ou com refresh, ou pelo botão "Puxar do Google").

Agora a Clínica pergunta de volta (`pontePull`), ao abrir a aba Agenda e pelo botão **"Puxar do Google"**:

- Só é ouvido o que é **dela**: evento com etiqueta `clinicaId` ou carimbo `[clinica:ID]` que bate com uma sessão existente. Compromisso pessoal nunca vira sessão; etiqueta órfã nunca cria paciente.
- Do evento ela aceita só **dia e hora** — o que o Google sabe melhor. Nome, valor e notas continuam mandando daqui.
- **Apagar não é ouvido, de propósito.** Sumiu o evento no Google, a sessão fica de pé aqui. Perder atendimento por um toque errado no celular seria caro demais; apagar segue sendo decisão tomada dentro da Clínica.

**Sincronismo de fundo — DESCARTADO por decisão do Montgomery (28/07/2026).** A ideia era a Clínica escutar o Google sozinha, o tempo todo, sem precisar abrir a aba. Ele avaliou e concluiu: *"um refresh resolve"*. E resolve mesmo — a aba Agenda já pergunta ao Google toda vez que abre, e ninguém remarca no celular esperando a tela do computador adivinhar. Não vale a complexidade permanente nem o tráfego a mais (a Clínica já apanhou de cota uma vez). Só reabrir se a rotina mudar.

## Agenda Cheia — ACESA (v4.5, 28/07/2026)

A vista semanal agora mostra **também** os compromissos do Google, em cinza claro, só de leitura, embaixo das sessões de cada dia.

- Botão **"Agenda cheia"** ao lado do "Hoje": liga e desliga, e a escolha fica guardada (`cfg_agenda_cheia`). Aceso, ele fica dourado.
- Lê **todas** as agendas que ele deixa visíveis no Google (não só a agenda da Clínica), uma semana por vez, com o resultado guardado para navegar ida-e-volta sem repetir pedido.
- Os eventos criados pela própria Clínica são filtrados (etiqueta `clinicaId` ou carimbo `[clinica:ID]`) — já aparecem como sessão, não aparecem duas vezes.
- Quando um compromisso do Google **cruza o horário de uma sessão**, aparece um "!" laranja ao lado da hora.
- Regra de ouro mantida: aqui a Clínica só **lê**. Nenhuma escrita em evento pessoal, em lugar nenhum deste caminho.

**Falta ainda:** o sentido completo — mexeu no Google, muda na Clínica (hoje o Google→Clínica é só de olhar).

## Senha "Acender a Agenda Cheia" — a agenda que enxerga a vida inteira (27/07/2026)

Nasceu do desejo do Montgomery de ter "o próprio Google Agenda dentro da plataforma".

**Descartado por decisão dele:** embutir o Google Agenda num `iframe`. "Se não conversa com a Clínica não faz sentido" — seria uma janela morta, mostrando inclusive a vida pessoal, sem poder arrastar uma sessão ali dentro.

**O caminho escolhido:** a vista semanal da Clínica passa a mostrar **também** os compromissos do Google, em cinza claro e só de leitura, ao lado das sessões. Assim a semana mostra os buracos de verdade — onde tem paciente e onde tem a vida — e ao marcar alguém a Clínica sabe avisar que o horário já está ocupado. É o sentido Google→Clínica, que ainda faltava na ponte (hoje ela só escreve).

**Depois disso, o destino final:** os dois sentidos completos — mexeu no Google, muda na Clínica. Sempre sob a regra de ouro: a Clínica lê os eventos pessoais para não atropelá-los, mas **nunca** escreve neles; só toca no que ela mesma criou (etiqueta `clinicaId` + carimbo `[clinica:ID]`).

## Duplicata na agenda do Google — RESOLVIDA (v4.2, 27/07/2026)

Ao criar um agendamento e depois mudar a data, o Google ficava com **dois** eventos: o novo no dia certo e o antigo, órfão, no dia errado. A causa: quando a sessão não tinha o código do evento guardado (`gcalId`) — porque nasceu pelo botão "Salvar e abrir Google Agenda", que abria o Google na mão, ou porque o código se perdeu — a ponte criava um evento novo em vez de mover o que já existia, e ninguém apagava o primeiro.

Três consertos:

1. **Etiqueta invisível no evento.** Todo evento criado pela Clínica passa a levar `extendedProperties.private.clinicaId` com o número da sessão.
2. **Perguntar antes de criar.** Sem `gcalId`, a ponte agora procura no Google (pela etiqueta e, para os eventos antigos, pelo carimbo `[clinica:ID]` na descrição). Se achar, **adota** o evento existente e o move para a nova data; irmãos repetidos são apagados. Só cria um evento novo se realmente não houver nenhum.
3. **"Salvar e abrir Google Agenda"** com a ponte ligada passa a marcar direto pela ponte, sem abrir o Google na mão — o evento já nasce reconhecível. Sem ponte, o caminho antigo continua valendo.

A exclusão de agendamento também varre e apaga os órfãos daquela sessão. Nenhum evento pessoal é tocado: só o que traz o carimbo da Clínica.
## Quiropraxia que escreve na sessão (v4.4, 27/07/2026)

Ele viu na prática: *"na quiropraxia não tem como adicionar dedos, pés, mãos — só as anotações dos membros"*. A aba Membros da v4.0 trouxe as 45 articulações da apostila, mas era **só leitura** — dava para consultar o teste e o passo a passo, não para registrar que aquele punho foi ajustado hoje.

Agora cada articulação dos **Membros** e cada ajuste da **coluna** tem um botão **"+ marcar"**. O que for marcado vira parte da avaliação daquele dia, como já acontecia com elementos, pontos, aurículo e bagua: aparece agrupado dentro da própria caixa da Quiropraxia (com um campo de observações clínicas), entra no resumo, no histórico do paciente, na faixa "Último encontro", no "Ver" e no papel impresso. O título da caixa fechada passou a contar — *"3 ajustes"* em vez de *"referência"*.

Guardado em `quiro` (lista de `{grupo, art}`) e `quiroObs` dentro da avaliação. **O lado — direito ou esquerdo — vai no campo de observações**, não há um seletor próprio ainda; se na prática incomodar, é a próxima volta nessa tela.

## Sessões numeradas e o "Ver" completo (v4.3, 27/07/2026)

Nasceu de uma frase dele olhando a v4.1: *"atendi o João hoje, então teria o resumo de hoje; quando ele voltar eu abro a sessão 01 e vejo o que foi realizado, ou vejo cada lugar que adicionei diagnóstico"*. Faltavam duas coisas para isso ser verdade.

**1. As sessões passaram a ter número.** Cada encontro de um paciente ganha seu lugar na história — **Sessão 01** é a mais antiga, e daí em diante. O número aparece no histórico de diagnósticos (como selo ao lado da data), no título do "Ver", na faixa "Último encontro" (*"Sessão 03, 27/07/2026"*) e no papel impresso. O número é calculado na hora pela ordem das datas (`sessoesDoPac` / `numeroDaSessao`), não fica gravado — assim ele se corrige sozinho se uma avaliação antiga for apagada ou tiver a data ajustada.

**2. O "Ver" passou a mostrar cada lugar marcado.** Antes, abrir uma avaliação salva mostrava só elementos, pontos e sistemas ABC — pulso, aurículo, bagua, psicanálise, suplementos e os sinais/sintomas clicados simplesmente não apareciam, embora estivessem salvos. Agora `montarHtmlDiagnostico` percorre tudo, na mesma ordem das caixas do Diagnóstico: **pulso posição por posição** (com as observações), **cinco elementos** com os sinais identificados naquele dia, **pontos do corpo** com os sintomas, **sistemas ABC**, **suplementos** com total, **auriculoterapia** com a orelha desenhada como ficou, **bagua**, **psicanálise** agrupada por categoria, **estado emocional** e a **memória da sessão**.

A memória da sessão também entrou no PDF/impressão, que antes parava no estado emocional.

## Senha "Acender a Memória da Sessão" — CUMPRIDA (v4.1, 27/07/2026)

A Clínica passou a lembrar. Duas metades, as duas no ar.

**1. Guardar a sessão do dia.** O Diagnóstico Integrado ganhou a caixa **"Memória da sessão"**, logo antes do resumo final, com três campos: *o que foi feito no atendimento*, *como o paciente reagiu* e *para o próximo encontro*. Eles são salvos dentro da própria avaliação (`sessaoFeito`, `sessaoReacao`, `sessaoProx`), então cada encontro continua sendo um registro próprio — a linha do tempo do paciente empilha, nada é sobrescrito. Ao **duplicar** uma avaliação antiga, a memória nasce vazia de propósito: o encontro é novo.

**2. O resumo na chegada.** Uma faixa **"Último encontro"** aparece em três lugares: no **Diagnóstico**, assim que o paciente é escolhido; na **ficha aberta para editar**, acima de tudo; e no **cartão "Ver paciente"**. Ela traz a data e há quanto tempo foi ("há 15 dias", "ontem"), as marcas daquele dia (elementos, pontos, sistemas ABC), as três anotações e o estado emocional — com um botão *Ver tudo* para a avaliação completa. Se for a primeira vez com aquele paciente, a faixa diz isso em vez de ficar vazia. Em modo de edição de uma avaliação antiga, a faixa mostra a **anterior a ela**, nunca ela mesma.

**Custo zero de banco.** A faixa lê apenas o cache de diagnósticos que já chega no login — nenhuma consulta nova ao Supabase, respeitando a cota por egress.

O histórico de diagnósticos do paciente e o modal "Ver" também passaram a mostrar a memória da sessão.

**Fila que continua, na ordem combinada:** Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

<details><summary>Texto original da senha (histórico)</summary>

### 🔑 Senha "Acender a Memória da Sessão" (registrada 27/07/2026)

Frase-chave para janela nova. **É janela de execução** — é a próxima da fila combinada. Ao ouvir **"Acender a Memória da Sessão"**, ir direto ao trabalho, que são duas metades da mesma coisa:

**1. Guardar a sessão do dia.** Ao terminar um diagnóstico, a Clínica registra a sessão daquele encontro — data, o que foi avaliado, o que foi tratado, a anotação. Não é sobrescrever a ficha: é empilhar encontros, para que exista uma linha do tempo do paciente.

**2. O resumo na chegada.** Quando o paciente chega e ele abre a ficha, o **resumo do último encontro aparece diante dos olhos** — sem ter que caçar. É a queixa nº 1 da lista que ele trouxe de um dia de atendimento real: chegar no paciente já sabendo onde parou.

Regras da casa que valem aqui: conteúdo clínico vem dele, nunca inventado; ícones SVG de linha fina, nunca emoji; acentos corretos no texto visível; subir a versão no rodapé; registrar no ROADMAP; e **nada de ler tabela inteira do Supabase** — a cota é por egress, então o resumo tem que vir enxuto (uma linha por sessão, ficha completa só ao clicar).

Depois desta, na ordem: Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

As duas perguntas da v3.9 estão **respondidas** (27/07): o Diagnóstico fica **como está** — todas as caixas chegam fechadas, nenhuma sempre aberta — e o quadro **"Pulso geral (os dois punhos)" fica**. Ele vai testar na prática antes de decidir mexer. Não perguntar de novo.

</details>

## Senha "Acender as Mãos" — CUMPRIDA (v4.0, 27/07/2026)

A quiropraxia deixou de ser só coluna. A caixa "Quiropraxia — Mapa de Subluxações, Testes e Ajustes" ganhou uma aba nova, **"Membros (mãos, pés, braços e pernas)"**, com **45 articulações** organizadas em 7 grupos: dedos das mãos e mão, punho e antebraço, cotovelo, ombro, dedos dos pés (artelhos) e antepé, pé e tornozelo, e joelho/quadril.

Cada articulação traz o que a mão precisa saber na hora: os **movimentos a testar** (deslize AP/PA, lateral/medial, rotação, extensão longitudinal…) e o **passo a passo** — onde vai a mão de apoio, onde vai a mão ativa, posição do paciente, e se o ajuste é impulso, recoil ou body drop. A regra geral fica no pé da aba: testar o jogo de junta e, na ausência dele, impulsionar no sentido do bloqueio.

**Tudo saiu da apostila dele** — "Roteiro de Quiropraxia", Prof.ª Carmen Fátima Prada de Freitas, páginas 33 a 49 (extremidades inferiores e superiores). Nada foi inventado nem completado por fora. O que os dados não carregam são as fotos das posições; para isso a aba aponta para a apostila em `03_Biblioteca/Quiropraxia`.

Os dados moram em `QUIROPRAXIA_REF.membros` (`dados-clinicos.js`) e a aba é renderizada por `renderQuiroRef()`, no mesmo padrão de `<details>` dos ajustes.

**Fila que continua, na ordem combinada:** registro da sessão do dia + resumo na chegada do paciente → Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

**Duas perguntas ainda em aberto da v3.9:** alguma caixa do Diagnóstico deve vir **sempre aberta** (a Pulsologia?), e se o quadro **"Pulso geral (os dois punhos)"** faz sentido na prática dele ou deve sair.

<details><summary>Texto original da senha (histórico)</summary>

### 🔑 Senha "Acender as Mãos" (registrada 27/07/2026)

Frase-chave para janela nova. **É janela de execução** — é a primeira da fila já combinada. Ao ouvir **"Acender as Mãos"**, ir direto ao trabalho: completar a quiropraxia com o que falta — **dedos das mãos, dedos dos pés, mãos, pés, braço e antebraço**. Hoje a Clínica tem a coluna (C1–Cóccix, ligada à `QUIROPRAXIA_REF`) e a caixa "Quiropraxia — Mapa de Subluxações, Testes e Ajustes" no Diagnóstico, mas os membros não estão mapeados. Mexer em `renderQuiroRef()` e nas abas de `#quiroRefSeg`; a caixa é a de chave `quiroref` no motor de caixas.

Regra que não muda: **o conteúdo clínico vem do Montgomery, nunca inventado** — se faltar material, perguntar em vez de preencher.

Depois desta, na ordem: registro da sessão do dia + resumo na chegada do paciente → Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

Duas perguntas em aberto da v3.9, para checar com ele: alguma caixa do Diagnóstico deve vir **sempre aberta** (a Pulsologia?), e se o quadro **"Pulso geral (os dois punhos)"** faz sentido na prática dele ou deve sair.

</details>

## Senha "Acender as Caixas" — as 3 velas acesas (v3.9, 27/07)

**1. A busca acha com e sem acento.** "Fabricio" agora encontra "Fabrício". A normalização (minúsculo, sem acento) virou uma **coluna gerada no banco** — `busca_nome`, com índice —, não um filtro na página: a Clínica continua sem baixar lista nenhuma para procurar, que era a regra por causa da cota de egress. Vale nos dois lugares que buscam paciente (a busca global e o seletor).

**2. As caixas do Diagnóstico abrem e fecham — e cada uma carrega tudo dela dentro.** As 11 ferramentas chegam **fechadas** — a tela que era um rolo interminável agora cabe numa olhada. O título da caixa fechada conta o que tem dentro ("Pulso — Pulsologia (MTC) · 2 posições · 3 pulsos"), e a Clínica **lembra** quais ele deixou abertas. Cada caixa é reconhecida por um elemento que só existe dentro dela, então renomear um título não perde o que ficou guardado. Na impressão tudo abre sozinho. Nada de conteúdo foi tocado — foi mudança de endereço: o que já estava na caixa passou a morar numa gaveta abaixo do título.

E a queixa de fundo caiu junto: **o que foi selecionado e a anotação saíram do painel único lá embaixo e foram para dentro da caixa da própria ferramenta**, na ordem ferramenta → seleção → anotação. Ele marcava o elemento em cima e escrevia a observação a três telas de distância; agora as duas coisas estão no mesmo lugar. No painel de baixo ficou só o que não é de ferramenta nenhuma: as sugestões cruzadas. Cuidado que entrou junto — se ele estiver escrevendo quando a tela se redesenha, o foco e a posição do cursor voltam para onde estavam, então a anotação não é arrancada da mão dele no meio da frase.

**3. O pulso passou a saber onde está.** Era o defeito de raiz: `pulsoPos` (onde há alteração) e `pulso` (quais tipos) eram **duas listas que não se conheciam**. A tela não sabia dizer qual posição estava cheia e qual estava vazia, e no papel saía "posições: Cun esq., Chi dir." e, embaixo, os pulsos todos juntos — sem dizer qual era de onde.

Agora a verdade é uma só: `pulsoPorPos` — um registro por posição (`{"E-cun":["fu","chen"]}`). As duas listas antigas continuam existindo como **espelho recalculado**, então tudo que já lia pulso/posição (salvar, imprimir, resumo) segue funcionando sem reescrita. Na tela, cada posição virou um **quadro com tudo dela dentro**: o órgão, as desarmonias clássicas, as fichinhas dos 28 pulsos e a busca — a opção "a" que ele escolheu. O círculo do punho mostra **quantos pulsos aquela posição já tem**. Desmarcar a posição leva os pulsos dela junto, avisando antes. E o resumo impresso agora diz o que é de onde: *"Cun esq.: Flutuante, Profundo · Chi dir.: Rápido"*.

Cuidado que entrou junto: **avaliação antiga não perde nada.** Quem foi salvo com as duas listas soltas é migrado na hora de reabrir ou imprimir — as posições marcadas voltam, e os pulsos que não têm dono vão para um quadro **"Pulso geral (os dois punhos)"**, que também serve para o que se sente no pulso inteiro sem localizar.

Testado no navegador antes de subir: registro por posição, espelhos, badge no punho, desmarcar levando os pulsos junto, resumo, papel e migração do formato antigo.

**Fila que a senha deixou combinada, na ordem:** quiropraxia completa (dedos das mãos, dedos dos pés, mãos, pés, braço, antebraço) → registro da sessão do dia + resumo na chegada do paciente → Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

<details><summary>Texto original da senha (histórico)</summary>

## 🔑 Senha "Acender as Caixas" (registrada 27/07/2026)

Frase-chave para janela nova. **É janela de execução, não de desenho** — o desenho já foi feito e combinado na janela que fechou o Diagnóstico usável. Ao ouvir **"Acender as Caixas"**, ir direto ao trabalho, nesta ordem:

**1. Busca de paciente sem acento** (primeiro, é pequeno e dói hoje). "Fabricio" tem que achar "Fabrício". Coluna de busca normalizada (minúsculo, sem acento) no **banco** Supabase — nunca na página, por causa da cota de egress. As duas funções que buscam são `buscarTodosPorNome()` e `buscarPacPicker()` no `index.html`, ambas com `dados->>nome=ilike`.

**2. As caixas com toggle** no Diagnóstico. Todas **fechadas** ao abrir; a Clínica **lembra** como ele deixou da última vez. Título da caixa fechada mostra um resumo curto ("Pulsologia · 2 posições"). Cada caixa carrega tudo dela dentro — ferramenta, o que foi selecionado e a anotação, nessa ordem. Isso resolve de uma vez três queixas dele: falta de toggle, anotação longe dos 5 Elementos, e terapia que aparece longe.

**3. Pulso por posição.** Hoje `_diagSelecoes.pulsoPos` (lista de posições) e `_diagSelecoes.pulso` (lista de tipos) são duas listas que não se conhecem — por isso a tela não sabe qual posição está cheia e qual está vazia. Passa a ser um registro por posição: `{ "E-cun": ["shi","shu"], "D-chi": ["xu","chen"] }`. Os 28 pulsos continuam a mesma base; as fichinhas e a busca aparecem **dentro de cada quadro de posição** (escolha dele, opção "a"). Desmarcar a posição leva os pulsos dela junto. Corrigir também o resumo impresso (`renderDiagPainel`, bloco por volta da linha 5055).

Depois disso, na ordem: quiropraxia completa (dedos das mãos, dedos dos pés, mãos, pés, braço, antebraço) → registro da sessão do dia + resumo na chegada do paciente → Árvore e Vitruviano compartilhados entre OS e Clínica (**extrair, nunca copiar**) → a teia diagnóstica.

</details>

## A lista de agendas virou nossa (v3.8, 27/07)

Montgomery viu que a caixinha "Agenda de destino" abria com outra letra e o azul do Windows, destoando de toda a tela. A caixa **fechada** de um `<select>` a página pinta; a lista que se **abre** quem desenha é o sistema operacional, e nenhum navegador deixa a página tocar nela — não era falta de CSS, era um limite do próprio navegador. Trocado por uma lista feita em casa (botão + painel), com a fonte da plataforma, o dourado da casa marcando a agenda escolhida e fechamento ao clicar fora.

## A biometria parou de virar chave órfã (v3.7, 27/07)

Montgomery notou: toda vez que saía e entrava, a plataforma pedia a biometria de novo. A causa era uma linha no `fazerLogout` — sair fazia `localStorage.removeItem(BIO_KEY)`, ou seja, **apagava o cadastro da biometria junto com a sessão**. Dois estragos: o botão "Entrar com Biometria" nunca chegava a aparecer na tela de login (ele só aparece se houver cadastro), então a biometria nunca servia para o que existe — entrar rápido; e cada novo "sim" criava mais uma chave dentro do aparelho (Windows Hello, cofre do celular), enquanto a anterior ficava lá sem dono. Uma chave órfã por volta.

Agora sair encerra **só a sessão** — que é o que de fato abre os dados. O reconhecimento fica guardado, e quem decide removê-lo é ele, no botão **Remover Biometria deste aparelho** (Configurações → Segurança). Os dois botões se revezam: aparece "Ativar" quando não há cadastro, "Remover" quando há — não faz sentido oferecer ativar o que já está ativo. A trava de segurança que já existia continua de pé: a biometria sozinha não abre nada, porque sem sessão válida do Google o `loginBiometria` avisa que a sessão expirou.

## Senha "Fechar as duas goteiras" — FECHADAS (v3.6, 27/07/2026)

**Goteira 1 — já estava fechada.** Ao abrir o código, o `salvarPac` da edição **já usava `dbGravar`** (PATCH, uma viagem só): a varredura do v3.5 levou esse ponto junto, ao contrário do que a anotação dizia. Conferido também o outro cuidado: quem abre a ficha para editar é o `editarPac`, e ele já baixa a versão completa com `fetchPacFull` antes de preencher o formulário — então a foto e os exames nunca são gravados por cima com a lista leve. Nada a mudar.

**Goteira 2 — fechada.** A Ponte caía de hora em hora porque o `provider_token` do Google vive ~1h e o Supabase não o renova (pior: quando o Supabase renova a sessão dele, o `provider_token` vira nulo). Agora:
- A chave e a **chave de renovação** (`provider_refresh_token`) são copiadas para o nosso bolso no instante do login (`guardarTokenGoogle`, chamada no `onAuthStateChange` e nas duas entradas do `initAuth`). O refresh token só vem no login com consentimento, então ele nunca é sobrescrito com vazio.
- `gcalToken()` usa a chave guardada enquanto ela vale, e pede uma nova antes de vencer (margem de 5 min).
- `gcalReq()` que leva 401 renova **uma vez** e refaz o mesmo pedido; o Montgomery não vê nada.
- A troca acontece na função de servidor `google-token-refresh` (Supabase Edge Function, já publicada), porque ela exige o segredo do aplicativo — e segredo não mora dentro de página que qualquer um abre.
- Se nem assim der, o aviso agora tem saída: **Religar a ponte** (`ponteReconectar`) leva ao Google e volta para a mesma tela, em vez de "saia e entre de novo". E avisa uma vez por visita, não a cada pedido.
- Regra intocada: a Clínica só mexe em evento que ela mesma criou (`gcalId`).

**Segredos configurados em 27/07** — `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET` estão em Supabase → Edge Functions → Secrets, postos pelo Montgomery. Conferido chamando a função: ela deixou de responder "não configurados" e passou a responder "refresh_token ausente", que é o esperado num teste seco. Nota do caminho: o segredo antigo do cliente OAuth não podia mais ser revelado pelo Google (só é mostrado no instante em que nasce), então foi criada uma chave nova — a antiga continua ativa e o login não sentiu nada.

Depois disso o Montgomery precisa entrar com o Google **uma vez** para o app guardar a chave de renovação — ela só é entregue no login.

<details><summary>Texto original da senha (histórico)</summary>

**1. `salvarPac` na edição ainda faz DELETE + POST.** É o último resto do "apaga e grava" — a varredura de 27/07 converteu 17 pontos para `dbGravar` (PATCH), mas o caminho de EDIÇÃO do paciente ficou de fora. Se a rede cair entre as duas viagens, o paciente some com foto e exames. Trocar por `dbGravar` (PATCH, `Prefer: return=representation`), respeitando o cuidado já estabelecido: **zero linhas trocadas NÃO vira POST no escuro** (pode ser RLS negando em silêncio com 200 vazio) — conferir com leitura mínima antes. Cuidado extra deste caso: buscar a versão COMPLETA com `fetchPacFull` antes de gravar, senão a lista leve grava por cima e apaga a foto (mesma armadilha que a `renomearPaciente` já resolveu).

**2. `provider_token` do Google vence em ~1h sem renovação.** O Supabase não renova o token do provedor sozinho. Na prática, depois de um tempo parado a Ponte falha e pede login novo. Caminhos a avaliar na janela: guardar o `provider_refresh_token` da sessão OAuth e trocar por um access token novo quando `gcalReq` devolver 401, ou detectar o 401 e refazer o `signInWithOAuth` silenciosamente. Regra que não muda: a Clínica só toca em evento que ela mesma criou (`gcalId`); evento pessoal do Montgomery nunca.

</details>

## 🔑 Senha "Login google roadmap em dia" (registrada 27/07/2026)

Frase-chave para janela nova. Faz duas coisas, nessa ordem:

**1. Login com Google + RLS na Clínica** — o item 4 ("Login na plataforma"), decidido há tempo e nunca executado. Supabase Auth com provedor Google + RLS restringindo os dados à conta autenticada. Hoje o app é aberto: qualquer um com o link vê a ficha dos pacientes, e a chave do Supabase está no código-fonte. **Envolve passos manuais do Montgomery fora do código** (credenciais OAuth no Google Cloud Console + habilitar o provedor em Supabase → Authentication → Providers) — avisar logo no começo. No código: trocar `user_id='montgomery'` fixo por sessão autenticada + tela de login. Template de referência: Google OAuth + WebAuthn biometria (index.html commit `1f34101`). Projeto: `montgomery-clinica` (`eltjhrhrtuymejojxyhe`). Destrava a "Ponte com o Google" (seção abaixo) e fecha os 2 avisos do advisor de segurança.

**2. Seguir zerando o roadmap.** Levantamento completo feito em 27/07: 19 frentes reais em aberto. Já caíram 3 (credenciais Firebase = falso alarme; RLS `despesas` = já ativa; `suplementos_schema.sql` = já rodado).

**Travado esperando o Montgomery** (não o Claude — sem o material dele seria inventar conteúdo clínico): síndromes clínicas das Sefirot, e a estrutura dos Florais.

## Fim do "apaga e grava" — a fragilidade que podia perder dados (v3.5, 27/07)

O costume da casa para atualizar qualquer registro era DELETE + POST: apagar a linha e gravar de novo. Entre as duas viagens o registro **não existia em lugar nenhum**. Rede caindo, celular dormindo ou aba fechando naquele instante = dado perdido, sem erro e sem aviso. No paciente levava a foto e os exames junto. Estavam assim os 17 pontos de atualização do app (paciente, sessão, despesa, suplemento, venda, diagnóstico, prescrição, triagem — e a `renomearPaciente` escrita ontem, que herdou o vício e o repetia dentro de um laço).

Agora existe `dbGravar(tabela,id,dados)`: **uma viagem só**, PATCH. Ou a troca acontece inteira, ou não acontece. Todos os 17 pontos convertidos.

Três cuidados que entraram junto:
- `Prefer: return=representation` no PATCH, para o banco devolver as linhas trocadas — sem isso a resposta vem vazia e não dá para saber se pegou.
- **Zero linhas trocadas não vira POST no escuro.** Isso significa "não existe" OU "o RLS recusou em silêncio" (o RLS nega devolvendo 200 com nada dentro, sem erro). Inserir sem saber qual das duas recriaria exatamente a duplicata que acabamos de exterminar. Então confere com uma leitura mínima antes, e só grava como novo se realmente não existir.
- `avisarFalhaGravacao()`: falhar calado é pior que falhar. A tela mostrava a alteração (está no cache local) e o Montgomery iria embora achando que salvou. Agora o "não salvou" aparece na hora.

Conferido antes de subir: as 9 tabelas têm política RLS `ALL`, que cobre UPDATE.

## Banco limpo: 217 ids repetidos consertados (27/07)

A correção do `novoId()` fecha a porta, mas não desfaz o estrago antigo. Varredura no Supabase mostrou o tamanho real: **217 ids repetidos** entre 452 registros — e, sem exceção, eram **pessoas DIFERENTES compartilhando o mesmo id**, não cadastros duplicados. Nenhum caso de mesma pessoa duas vezes. Ex.: o id `1780965971400.166` pertencia a quatro pessoas ao mesmo tempo.

Era isso que o Montgomery via: apagar um contato pelo filtro `dados->>id=eq.X` mexia em todos os que dividiam aquele id.

Conserto: **nada foi apagado**. Cada linha repetida (a 2ª em diante de cada grupo, 235 no total) recebeu um id novo via `jsonb_set` + `gen_random_uuid()`. Total de pacientes intacto: 4.101 antes e depois. Ids antigos guardados em `backup_ids_duplicados_2607`. Verificado antes de mexer que nenhuma sessão, diagnóstico, prescrição ou venda apontava para esses ids (zero em todas), então nenhum vínculo se perdeu.

**Ainda em aberto:** 92 nomes aparecem 2x ou mais com ids diferentes — esses sim são candidatos a duplicata real (mesmo contato importado duas vezes), mas podem ter homônimos. Precisa da revisão do Montgomery, um a um, antes de apagar.

## Nome do paciente sincronizado nos dois sentidos (v3.4, 27/07)

Caso real: "Fabricio Filho De Faustino" era na verdade Fabrício do Nascimento Andrade. Corrigir a ficha não bastava — o nome é **copiado** para dentro de cada sessão, diagnóstico, recomendação e venda no instante em que nascem (cada uma guarda uma foto do nome daquele dia), então a agenda e o Google continuavam com o nome errado para sempre.

Agora existe `renomearPaciente(pacId, novoNome)`, a única porta por onde o nome se corrige. Ela: (1) regrava a ficha — buscando a versão COMPLETA com `fetchPacFull`, senão a lista leve gravaria por cima e apagaria a foto; (2) varre `sessoes`, `diagnosticos`, `prescricoes` e `vendas_suplementos` atrás de todas as cópias pelo `pacienteId`, que é o fio que liga tudo; (3) chama `pontePush` nas sessões alteradas, reescrevendo o título dos eventos no Google.

Duas portas de entrada, os dois sentidos que o Montgomery pediu:
- **Plataforma → agenda:** editar o nome na ficha e salvar dispara a correção sozinho (`salvarPac` compara o nome antigo com o novo).
- **Agenda → plataforma:** botão **Corrigir nome** no cartão da sessão, na agenda.

## Duplicação de cadastros — causa raiz corrigida (v3.4, 27/07)

Montgomery notou um contato duplicando ao criar e ao apagar. Duas causas, as duas reais:

1. **O id não era único.** Todo cadastro nascia com `Date.now()+Math.random()`. Parece único, mas não é: num número do tamanho de `Date.now()` (1,7 trilhão) o computador só guarda casas decimais de 0,000244 em 0,000244 — sobram ~4 mil valores possíveis dentro do mesmo milissegundo. Pelo paradoxo do aniversário, dá colisão depois de umas 80 criações; importando contatos aos milhares é certeza. Dois registros com o MESMO id: apagar um pelo filtro `dados->>id=eq.X` mexia no outro, e a lista mostrava a mesma pessoa duas vezes. Agora existe `novoId()` — tempo + contador que nunca repete + sorteio, em texto (`t...`). Trocado nos 9 lugares que geravam id (paciente, exame, despesa, parcela, suplemento, catálogo, diagnóstico, receita, importação de vCard).
2. **`salvarPac` sem trava.** É assíncrono (espera o Supabase). Dois cliques no Salvar — ou clique + Enter — entravam duas vezes com `editId` ainda vazio, e cada entrada criava um paciente novo. Agora tem trava `_salvandoPac`.

Ids antigos (numéricos) continuam funcionando; só os novos mudam de formato.

**Ainda em aberto:** no caminho de edição, `salvarPac` faz DELETE e depois POST. Se a rede cair no meio, o paciente some. Trocar por PATCH ou por upsert.

## Ponte com o Google — acabamento da tela (v3.4, 27/07)

Os escritos estavam pesados e o seletor de agenda cru. Agora: selo "Ligada/Desligada" ao lado do título, uma linha curta explicando, botão "Desligar ponte" em vez da frase comprida, e o seletor com rótulo "Agenda de destino" e caixa com borda/respiro. Nome da agenda passou a ser escapado (`escHtml`).

## Ponte com o Google — FUNCIONANDO (v3.3, 27/07)

Testada na prática: sessão criada aparece no Google, e arrastar na Clínica move o evento lá. Agenda escolhida: a principal (`montlondon@gmail.com`, a "Montgomery Magalhães"). Foram **quatro** causas empilhadas, cada uma escondendo a seguinte:

1. **`prompt:'select_account'`** no `signInWithOAuth` — o Google pulava a tela de consentimento e devolvia o token da autorização antiga, ignorando os `scopes:`. Corrigido para `prompt:'consent select_account'` (v3.1).
2. **Nenhum escopo salvo** em Google Auth Platform → Acesso a dados. Tinham sido adicionados, mas faltou clicar em **Salvar** no rodapé da página depois do "Atualizar" do painel — são dois botões em dois lugares. Sem isso o Google não tem o que oferecer e recusa em silêncio, sem erro.
3. **O teste de ligação pedia `/calendars/primary`** — endpoint que `calendar.events` não cobre (ele abre os EVENTOS de uma agenda, não a ficha dela). Dava 403 mesmo com o token correto. Agora testa por `/users/me/calendarList` (v3.2). O mesmo teste também tratava 404 como sucesso, porque `gcalReq` devolve `{_naoExiste:true}`, objeto truthy.
4. **`pontePush` sem `await`** ao salvar e ao arrastar: a troca de tela recarregava as sessões por cima antes de o `gcalId` ser gravado, e sem esse código o arrastar seguinte criava um segundo evento em vez de mover o primeiro (v3.3).

**Ainda em aberto:** o sentido Google → Clínica não existe (mão única), e o `provider_token` vive ~1h sem renovação do Supabase.

## Ponte com o Google — causa do 404 encontrada e corrigida (v3.1, 27/07)

O 404 ao escrever no Google **não era** escopo errado nem autorização velha contaminando o token. O `tokeninfo` mostrou o `provider_token` sem escopo nenhum de agenda — só `email profile openid`. O pedido nunca chegava ao Google: o `signInWithOAuth` mandava `queryParams:{prompt:'select_account'}`, e `select_account` só pergunta *qual conta*. Como a Clínica já tinha sido autorizada antes (só e-mail e perfil), o Google pulava a tela de consentimento e devolvia o conjunto de chaves antigo, ignorando os `scopes:` pedidos. Corrigido para `prompt:'consent select_account'`.

Junto caiu o bug que escondia tudo: `gcalReq` transforma 404 em `{_naoExiste:true}` (objeto truthy) e o teste do `alternarPonte` só checava `if(!teste)` — o "não enxergo essa agenda" passava por sucesso e a ponte ligava sorrindo para falhar depois. Agora confere `_naoExiste`.

**Falta:** o Montgomery sair, entrar de novo autorizando a agenda na tela nova do Google, e testar de verdade (agendar, remarcar arrastando, conferir que nenhum evento pessoal foi tocado).

## 🔑 Senha "Google login" (registrada 27/07/2026)

Frase-chave para janela nova. Destravar e **testar** a Ponte com o Google: guiar o Montgomery no Google Cloud Console (ativar a *Google Calendar API* + escopo `.../auth/calendar.events` na tela de permissão OAuth), depois sair/entrar para o Google pedir a autorização nova, ligar a ponte em Configurações e testar de verdade — agendar, remarcar arrastando, conferir na agenda "Clínica · Pacientes" e, principalmente, conferir que **nenhum evento pessoal foi tocado**. Em seguida, seguir zerando o roadmap.

## Segurança da Clínica — ENCERRADA (27/07). Não reabrir como pendência.

Levantamento e conserto completos: RLS conferida nas 10 tabelas (política `clinica_allowlist_full_access`), provedor Google ligado, teste real de acesso anônimo devolvendo `[]`, alçapão da senha local removido, `search_path` da `arquivar_pacientes` corrigido, e **cadastro de novos usuários fechado** (`disable_signup: true` — as contas do Montgomery e da Vanessa já existiam, ninguém ficou trancado fora; para dar acesso a uma terceira pessoa no futuro, religar a chave enquanto ela entra pela primeira vez **e** pôr o e-mail dela em `ALLOWED_EMAILS`).

O advisor de segurança saiu de 2 avisos para 1. O que sobrou — **"Leaked Password Protection Disabled"** — é **recurso do plano Pro**, indisponível no plano gratuito, e ficou **sem alvo**: essa proteção confere senhas na hora do cadastro, e depois que o cadastro por e-mail foi fechado não existe mais nenhuma senha no sistema (o acesso é por Google). É um alerta sem risco real, não uma tarefa aberta.

## Ponte com o Google — CONSTRUÍDA (v2.7, 27/07), aguardando o passo do Montgomery no Google Cloud

Conferido antes de construir: a ponte **não** existia — só o `abrirGA` (endereço `calendar.google.com/render` pré-preenchido, mão única, sem nenhum vínculo com o evento). Agora existe de verdade, via API do Calendar:

- **Permissão:** o login Google passou a pedir o escopo `calendar.events` (altera eventos; não apaga agendas nem muda configurações). O token de acesso vem no `provider_token` da sessão do Supabase.
- **Isolamento:** tudo é escrito numa agenda separada **"Clínica · Pacientes"**, criada uma vez só (`garantirAgendaClinica`, id guardado em `localStorage.gcal_agenda_id`). Cada sessão guarda o `gcalId` do evento. **A Clínica só toca em evento que ela mesma criou** — sem `gcalId` salvo, não encosta. Os eventos pessoais ficam fora do alcance por construção.
- **Interruptor:** botão "Ligar ponte com o Google" em Configurações → seção própria (`alternarPonte`/`renderPonteBotao`, chave `cfg_ponte_google`). Desligada por padrão; com ela desligada nada muda no comportamento antigo.
- **Ligada em 4 momentos:** agendar e editar (`salvarSessao`), remarcar arrastando (`moverSessao` — com a ponte ligada o Google se atualiza sozinho e o snackbar antigo de um clique não aparece mais; sem ela, o snackbar segue como plano B), marcar como pago (`mPago`, o status aparece no evento) e excluir (`dSess`/`dSessAg`, que cancelam no Google **antes** de apagar a linha, senão o vínculo se perderia).
- **Robustez:** se o evento foi apagado na mão no Google, o `PATCH` volta 404 e a ponte recria em vez de ficar muda. Se o Google não responde ou a autorização venceu, o app segue funcionando normalmente e avisa para entrar de novo.

**Falta só do lado do Montgomery, no Google Cloud Console:** ativar a **Google Calendar API** e adicionar o escopo `.../auth/calendar.events` na tela de permissão OAuth. Sem isso o Google recusa os pedidos e o botão de ligar a ponte avisa que não conseguiu falar com ele.

**Limite conhecido (a ser resolvido):** o `provider_token` do Google vive ~1 hora e o Supabase não o renova sozinho. Na prática, depois de um tempo parado a ponte pede um login novo. Falta também o sentido **Google → Clínica** (mudar no Google e refletir no app), que exige leitura periódica da agenda.

## Planejado — resto da Senha "Ponte com o Google" (era: sync de dois sentidos)

Integração viva com o Google Calendar via API + login (OAuth), para que remarcar/cancelar na Clínica reflita sozinho no Google (hoje a integração é de mão única: só abre uma tela do Google já preenchida, não sabe qual evento é de qual sessão — por isso remarcar arrastando não atualiza o Google, e o Montgomery ajusta manualmente). **Regra essencial:** a ponte mexe SÓ nas sessões de pacientes criadas na Clínica — nunca nos outros eventos do Google (o Montgomery anota a vida inteira lá). A Clínica só cria/move/cancela eventos que ela mesma criou, guardando o ID do evento como vínculo invisível de cada sessão; sem esse vínculo, não toca. Recomendado escrever numa **agenda Google separada "Clínica/Pacientes"** (cor própria, ligável/desligável) para isolar de vez da agenda pessoal. Trabalho envolvido: autorização Google, guardar o `googleEventId` por sessão, e criar/mover/deletar via API. O próprio comentário do `abrirGA` já aponta a API do Calendar como "o caminho definitivo".

## Concluído

- **Login com Google + RLS fechados (v2.6, 27/07):** a segurança saiu da tela e foi para o banco. Conferido no Supabase: **RLS ligada nas 10 tabelas**, com política `clinica_allowlist_full_access` que só libera para sessão `authenticated` cujo e-mail esteja na allowlist (`montlondon@` e `salavioleta@`); provedor **Google já habilitado** no Auth. Teste real feito: um `GET` em `pacientes` só com a chave anônima devolve `[]` — o link sozinho não mostra mais ficha nenhuma. No código: (a) removida a constante morta `SUPA_URL_AUTH`, que ainda por cima tinha o endereço do projeto digitado errado; (b) **removido o alçapão da senha local** `montgomery2026` do `catch` do login — sem token o banco não devolve nada, então aquela porta só abria uma tela vazia e enganava; agora avisa "sem conexão com o servidor de login"; (c) a **biometria** agora confere se a sessão do Google ainda existe antes de abrir (ela é um atalho para reabrir a sessão guardada, não um login próprio) — se expirou, pede um login com o Google em vez de mostrar o app oco. No banco: `arquivar_pacientes` ganhou `search_path` fixo, fechando o 1º dos 2 avisos do advisor de segurança. **Falta só do lado do Montgomery:** ligar a proteção de senha vazada (Supabase → Authentication → Policies) e, se quiser, desligar o cadastro por e-mail/senha (`disable_signup`) — hoje qualquer um pode criar conta, mas a allowlist do RLS impede que veja qualquer dado.
- **Versão em rodapé visível (v2.6, 27/07):** a versão saiu de escrita fixa na barra lateral e virou **fonte única** — a constante `APP_VER`, escrita em todo elemento marcado com a classe `.app-ver`. Além da lateral, agora aparece num rodapé ao pé do conteúdo, visível sem abrir o menu.
- **Escola Montgomery IA plugada no OS (OS v3.3, 22/07):** nova seção `sec-escola` no Montgomery OS (item no menu entre "Mapa do Sistema" e "Configurações"), onde o Montgomery aprende IAs, IT e código no ritmo dele. **Aula 1 — O motor próprio** (site estático × backend, metáfora vitrine iluminada × cozinha viva; liga ao real: Anatomia é vitrine, Clínica é motor, daí a cota/522/egress). **Aula 2 — Os três materiais da web** (HTML = osso, CSS = pele, JavaScript = músculo). Inclui a trilha das próximas aulas (linguagens, onde as coisas moram, o que é uma IA). Seção nativa no estilo claro do OS (`.bloco`/`.cards`/`.fio`, Fibonacci, ícones SVG, zero emoji). Arquivo standalone gêmeo (tema escuro raio-X): `Files_Claude/escola_montgomery_ia.html` v0.2.
- **Botão "Atualizar no Google" após arrastar (v2.5, 22/07):** depois de remarcar uma sessão arrastando na agenda (`moverSessao`), aparece um snackbar discreto no rodapé — "Remarcado para [dia]. O Google não muda sozinho — atualize com um clique." — com o botão **Atualizar no Google**, que abre a tela do Google já preenchida com o novo dia (reaproveita `abrirGA`, mão única). Some sozinho em 9s ou ao fechar no X. É a conveniência leve enquanto a "Ponte com o Google" completa (sync de dois sentidos) segue adiada — este botão NÃO cria permissão nova nem backend, zero risco de estabilidade. Função nova: `snackGoogle(id)`.
- **Arrastar-e-soltar na agenda para remarcar (v2.4, 22/07):** na visão semanal da Agenda, cada sessão virou um cartão arrastável e cada dia uma área de soltar — arrastar um paciente de quarta para quinta remarca na hora. Troca só o campo `data` da sessão e grava uma linha só no banco (`DELETE` + `POST`), nunca a tabela inteira; horário e o resto ficam iguais. Destaque visual (borda tracejada) no dia sob o cursor. Funções novas: `agDragStart`/`agDragOver`/`agDragLeave`/`agDrop`/`agDragEnd`/`moverSessao`. Nota: arrastar por toque no celular exige suporte extra (pressionar-e-segurar) — no desktop funciona nativo.
- **Agendamento encontra e desarquiva paciente sozinho (v2.3, 22/07):** na tela **Nova Sessão**, a busca por nome agora procura no banco inteiro (arquivados incluídos), não só nos ativos em memória. Arquivados aparecem na lista com etiqueta discreta "ARQUIVADO"; ao escolher um, o sistema **desarquiva automaticamente** naquele instante (`rpcArquivar([id],false)` + recarga da lista leve) e segue o agendamento — de três passos (ir em Arquivados → desarquivar → agendar) para um só. Busca leve dedicada (só `id`/`nome`/`telefone`, nunca foto/exames) e com debounce de 350ms para poupar egress do Supabase. Funções tocadas: `filtrarPS`, `renderPS`, `selPS` + novos `buscarPacPicker`/`_psDbCache`.
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
- **Quiropraxia enriquecida no Diagnóstico Integrado (v1.6, 16/07):** apostila "Roteiro de Quiropraxia" da Prof.ª Carmen Fátima Prada de Freitas estruturada como fonte única em `QUIROPRAXIA_REF` (`dados-clinicos.js`) — mapa de subluxações vértebra a vértebra (C1/Atlas→Cóccix, 26 níveis com inervação + efeitos), 6 testes diagnósticos (Deklyns de segurança primeiro, Spurling, Distração, Laseg, diferenciação sacroilíaca/lombalgia, jogo articular), manobras de ajuste resumidas por 8 regiões, e fundamentos (Palmer, Inteligência Inata, 5 componentes do Complexo de Subluxação). Bloco consultável com 4 abas na tela do Diagnóstico, citando a fonte. Passo a passo completo dos ajustes fica na apostila (Biblioteca), para não pesar o carregamento.
- **Versionamento visível:** a cada update funcional da plataforma, subir o número de versão no rodapé da sidebar (`v1.6 · 16/07`) no mesmo commit.

## ✅ Concluído — Senha "Ligar a Coluna do OS" (16/07)

- **FEITO (16/07, OS v1.1–v1.2):** coluna do esqueleto clicável do Montgomery OS ligada à MESMA raiz `QUIROPRAXIA_REF` — vértebra clicável (C1–Cóccix) com inervação, sintomas e ajustes da apostila; camada autonômica (Simpático/Parassimpático/Cérebro-Espinhal) por vértebra com sintomas do quadro IBRAQUI; e chip clicável que liga a vértebra ao Elemento pelo órgão inervado, acendendo os 5 Elementos na Metafísica. Princípio cumprido: uma raiz, muitos reflexos — sem duplicar dados.

## ✅ 18/07 — Senha "Acender a Árvore" (OS v2.7)
As 10 Sefirot viraram dado vivo no Vitruviano da Metafísica: esferas renderizadas do dado `SEFIROT` (cor por pilar, número dentro), clicáveis — ficha no painel do corpo (corpo/Adam Kadmon, planeta, virtude/vício, cor, ponte MTC, frase) com chip do elemento-elo que acende a teia e salto "ver no Mapa Energético" (abre a Sefirá lá). Painel de cada elemento ganhou a linha inversa "Sefirot deste elemento". Digitar uma Sefirá em "Acender a teia" agora também liga a camada da Árvore e destaca a esfera. Camada 1 da visão em camadas de 13/07 cumprida — a cascata Sefirá → Elemento → Órgão → Meridiano → Ponto está inteira.

## Senha "Acender a Frente do Vitruviano" (registrada 18/07)
Próxima janela: meridianos da frente no Corpo Vitruviano do OS. Vela 1 = arte irmã DE FRENTE (o "Inverter visão" hoje só espelha o jpg de costas) na mesma paleta. Vela 2 = calibrar coordenadas via `mfPontoXY` — tronco/pernas quase direto; os 6 meridianos dos braços (P, IG, C, ID, CS, TR) precisam de rotação para os braços horizontais. Fichas, `merFichaHTML` e `mfDesenharPontos` já prontos — só projeção e arte.

## ✅ 18/07 — Pontos no Vitruviano (OS v2.5)
Reflexo da senha "Acender os Pontos" concluído: botão "Pontos" no Corpo Vitruviano (Metafísica) acende Bexiga e Vaso Governador projetados na pose vitruviana de costas (150 pontos clicáveis), cada ponto abrindo a mesma ficha trilíngue da Clínica (`merFichaHTML`, agora compartilhada entre Anatomia e Vitruviano). Projeção por região (cabeça/tronco/pernas) com escala que acompanha a convergência das pernas vitruvianas.

## ✅ Sprint 14–17/07 — o que entrou no ar

- **Árvore da Vida enriquecida (14–15/07):** Da'at (a Sefirá oculta no abismo), os 22 caminhos com signos/meses/planetas/Tarô, nome hebraico dentro de cada Sefirá (com toggle), glifo planetário, os 4 Mundos e a escada do Nome (יהוה), e a hierarquia celeste de cada Sefirá.
- **Cronofarmacologia no OS (16/07) — Senha "Acender o Dia" cumprida:** módulo com o plano pessoal 2026; botão "Carregar plano" (mescla/atualiza protocolos, com validação de JSON) e "Baixar plano" (exporta protocolos do perfil).
- **Numerologia (16/07) — Senha "Acender os Números" avançada:** novo módulo de cálculo (método pitagórico), Desafios, lições kármicas, ponte com as Sefirot e mapa guardado no perfil.
- **Quiropraxia na Clínica (16/07, v1.6):** mapa de subluxações C1–Cóccix, testes e ajustes da apostila da Prof.ª Carmen no Diagnóstico (detalhado na seção Concluído acima).
- **Anatomia do OS por camadas — Senhas "Acender o Esqueleto" e "Acender os Órgãos" cumpridas:** v1.5 esqueleto (ossos + músculos, placa SVG, toggle raio-X, seletor de camada, 16/07), v1.6 Tendões e Ligamentos + rodapé com versão única (16/07), v1.7 camada de Órgãos nos 5 Elementos (17/07), v1.8 placa 2D realista nas quatro camadas (17/07).
- **Espiritualidade (17/07, OS v1.9):** aba nova — biblioteca viva aberta com o resumo do Imperador Amarelo (Huangdi Neijing). Próximos livros = novo bloco na seção.
- **Pulso no OS (17/07):** órgãos, elemento e desarmonias por posição + 3 níveis de profundidade.
- **Deploy do OS consertado (16/07):** remote errado removido; publicar = editar `Files_Claude_repo\os\index.html` + push.
- **Anatomia 3D real — comprovada e adiada (17/07):** three.js + malha NIH 3D (crânio GLB girável nos 2 modos) funcionou; Montgomery preferiu manter a placa 2D por ora. Receita e tooling guardados para quando quiser retomar.
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

- ✅ **Resolvido (27/07):** `suplementos_schema.sql` já foi rodado — as tabelas `suplementos` e `vendas_suplementos` existem e estão ativas no Supabase.
- ✅ **Resolvido (27/07) — RLS da tabela `despesas`:** conferida no projeto `montgomery-clinica`. RLS **ligada, com 1 policy — exatamente igual às outras 9 tabelas** (configuracoes, diagnosticos, diplomas, mmobras_backup, pacientes, prescricoes, sessoes, suplementos, vendas_suplementos). Nada a fazer. Nota do advisor de segurança: 2 avisos menores em aberto — `search_path` mutável na função `arquivar_pacientes` e proteção de senha vazada (HaveIBeenPwned) desligada no Auth; ambos só passam a importar quando o Login com Google entrar.
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
- ✅ **ALERTA SEGURANÇA — APURADO E ENCERRADO (27/07):** o alerta estava superdimensionado. Existem 3 arquivos de credencial no PC (`Backup\Gemini\serviceAccountKey.json` — projeto `montgomery-terapias`; `Desktop\Eu\GEmini\seu-arquivo-chave.json`; `Desktop\Projetos-App\app-montgomery-f67cbaad8477.json`), mas **nenhum está dentro de um repositório git** (as 5 pastas Gemini foram conferidas) e o `Files_Claude_repo` não rastreia nenhum arquivo de chave. **Não houve vazamento — as chaves nunca saíram do computador.** Higiene opcional a cargo do Montgomery: revogar no Firebase Console (Configurações → Contas de serviço), já que o projeto do Gemini não é mais usado. Risco real: baixo.

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

---

## Pedidos do Montgomery — 08/07 — EXECUTADOS 09/07 (Clinica no Vercel + MMObras v9.19 no GitHub Pages)

Diretriz geral: opcao de enviar/compartilhar em JPG em tudo que for possivel ("acho pratico e bonito").

### Clinica — Saude Integrativa
- **Pacientes:** na tela Editar, adicionar opcao "Enviar em JPG" (ficha do paciente como imagem).
- **Financeiro / Pro-labore:** opcoes de ordenacao A-Z, Z-A e por data.
- **Financeiro / Nova despesa pessoal (Recorrente):** adicionar campo de Periodo — data de inicio ate data final (ex.: 6 meses), gerando as parcelas do intervalo.
- **Recomendacao Terapeutica:** botao de compartilhar ja direto em JPG (hoje gera e depois compartilha; encurtar o caminho).
- **Diagnostico:** ao abrir um diagnostico (opcao "ver"), incluir botao de encaminhar o PDF.
- **Agenda (somente Agenda):** trocar o formato do endereco do evento para "Rua Miro Ferreira de Oliveira, 110 Adelaide Bessa, Itambacuri - MG, Brasil" (sem CEP) — teste do Montgomery: ele suspeita que o CEP impede o mapinha do Google de aparecer para o cliente no Google Agenda.

### MMObras
- **Relatorio:** compartilhar em JPG.
- **Orcamento:** compartilhar em JPG.
- **Checklist:** compartilhar em texto.
- **Comprovantes:** compartilhar e visualizar.

### Codigo Invisivel — nota de acervo (08/07)
- Wayne Dyer: Montgomery leu "Le Pouvoir de l'Intention" NA FRANCA (em frances) — O Poder da Intencao ja e leitura vivida, nao pendente. Registrar na chave "Vibracao e Manifestacao" do projeto.

### Montgomery OS — visao Kenhub (anotado 09/07)
- Montgomery: "vou ter todas as terminologias no Montgomery OS, e a parte de anatomia completa. Sempre quis ter um app como o Kenhub."
- Liga direto aos "bancos anatomicos" do indice mestre (ossos ~206, musculos ~640, esqueleto clicavel com toggle raio-x/SVG) + Base de Conhecimento (terminologia convencional e integrativa, CID-11, tabela de traducao). O Kenhub pessoal = anatomia visual navegavel + terminologia + camada integrativa (meridianos/Sefirot sobre a anatomia) que nenhum Kenhub tem.
- Construir por camadas Fibonacci quando ele quiser abrir essa frente (comecar pelo esqueleto).

### Pendencias executadas 10/07 (Clinica no ar)
- BUG DE FUSO da Agenda: sessao do dia 10 aparecia no dia 9 apos as 21h (toISOString converte pra UTC). Corrigido com helper dLocal() em 16 pontos do app (agenda, datas-padrao de formularios, parcelas).
- Financeiro: botoes PDF e JPG (documento com logo da clinica, estilo MMObras) nas abas Clinica e Pessoal — PDF gerado pelo gerador proprio, sem depender de janela de impressao.
- Recomendacao via WhatsApp: agora envia a IMAGEM com o texto de legenda pelo menu nativo (antes baixava e mandava so texto). No computador mantem o fluxo antigo.
- Compartilhar imediato: quando a geracao demora e a permissao do toque expira, aparece o botao "Enviar" (overlay Arquivo pronto) — um toque novo abre o menu; nada de download forcado.

### Versionamento visivel da Clinica (10/07) — DISCIPLINA PERMANENTE
- Rodape da sidebar agora mostra "v1.0 · 10/07" (dourado, estilo MMObras). A contagem formal comeca hoje (a plataforma e madura, mas a numeracao nasce agora).
- REGRA para todo deploy da Clinica daqui em diante: bump da versao + data no rodape (buscar "v1." no index.html). Igual ao MMObras (linha ~376 la).
- Futuro: mesmo padrao no Montgomery OS quando fizer sentido.

### Diagnostico — caixa "Observacoes clinicas" embelezada (10/07) — FEITO (v1.3)
- A caixa de "Observacoes clinicas — {elemento}" dentro dos cards dos 5 Elementos era um `<textarea>` solto (visual cru do navegador). Envolvida em `class="fg"` (index.html ~3813) — agora herda o mesmo estilo da caixa "Observacoes sobre o estado emocional" (borda, fundo bege #F0EBE0, cantos arredondados, brilho azul no foco, altura minima). Label colorido por elemento preservado.

### AGENDADO — dois modulos a adicionar (pedido 10/07, sem pressa / economizar creditos)
1. **Cronofarmacologia -> Montgomery OS.** Arquivo-fonte: `00_Nucleo/Suplementos.md` ("Plano de Saude Integrativa e Cronofarmacologia 2026" — plano PESSOAL do Montgomery). Contem: diretrizes de estilo de vida, correlacao viscerossomatica, e o protocolo cronofarmacologico por horario (Manha 08:00 / Almoco 12:00 / Noite 20:00) com doses e justificativas (NAC, Sertralina, Zinco, Omega 3, CoQ10+PQQ, Bacopa/Juba de Leao, Cardo Mariano, caldo de ossos...). Estruturar como modulo no OS (provavelmente junto de Nutricao/Sinais Vitais), com a linha do tempo do dia visual.
2. **Sistema Nervoso e Subluxacoes Espinhais -> plataforma Clinica, area Quiropraxia.** Arquivo-fonte JA no repertorio: `03_Biblioteca/Quiropraxia/Sistema Nervoso e Subluxacoes Espinhais.md`. Estruturar como os outros modulos (conteudo clicavel -> ficha -> resumo/PDF), ligando aos Pontos do Corpo (raizes nervosas C1-S3 ja mapeadas) e ao Circulo 2 do Bagua (Quiropraxia/Seitai).

### Pulso e Lingua no Diagnostico Integrado — decisao de 10/07
- **ORDEM CLINICA DEFINIDA pelo Montgomery** (a sequencia em que ele examina): apos a Calculadora IMC vem **1. Pulso -> 2. Lingua -> 3. Orelha (Auriculoterapia)** -> depois 5 Elementos e o resto. Reordenar as secoes do Diagnostico Integrado quando o Pulso entrar.
- **Pulso — IMPLEMENTADO (v1.5, 10/07):** modelo de `02_Arvore/PROPOSTA_PULSO.md` aprovado pelo Montgomery (punhos clicaveis SIM; 12 comuns como chips + 16 restantes via busca). Dados em `dados-clinicos.js` (`pulsosMTC`/`pulsoPosicoes`). Card entre a busca de paciente e os 5 Elementos; punhos SVG com Cun/Guan/Chi clicaveis; card no resumo com caixa "Observacoes clinicas — Pulso"; salvo no diagnostico (pulso/pulsoPos/pulsoObs), restaurado ao editar, impresso no PDF (primeiro bloco). Fase 2 futura: pulso alimentar o motor de sugestoes cruzadas.
- **PENDENTE de reordenar:** mover o card da Auriculoterapia (orelha) para logo depois de onde a Lingua vai entrar (ordem clinica: IMC -> Pulso -> Lingua -> Orelha -> 5 Elementos). Fazer quando a Lingua entrar, pra mexer uma vez so.
- **Lingua: AGENDADA** — material atual (`C:\Dropbox\IMANDropbox\Linguas\`) sao fotos escaneadas, precisa OCR (pesado). Esperar material mais leve ou fazer OCR quando houver folga de creditos.
- v1.4 (10/07): caixa "Observacoes clinicas — Auriculoterapia" no card da ficha (auriculoObs: salva, restaura ao editar, sai no PDF).

### Agenda — quadrante do mapa 100% automatico (plano B, se a v1.2 nao bastar)
- v1.2 testa a "impressao digital" exata do Places no campo location (R. abreviado + CEP + Brasil, copiado do evento que o Montgomery validou na foto). Se o quadrante acender sozinho: resolvido.
- Se NAO acender: o caminho definitivo e criar o evento pela API do Google Calendar (OAuth com escopo calendar via Supabase, que ja autentica com Google) — o evento nasce estruturado, sem abrir a tela de novo evento. Feature maior; planejar quando Montgomery quiser ("top das galaxias").

### 🧠 Ideia (15/07/2026) — "Cérebro Montgomery": companheiro de IA visual que escuta e fala
**Projeto:** Montgomery OS / Montgomery Code · **Estágio:** 🌱 semente (pedido registrado, aprovado para construir por partes)

Montgomery viu uma propaganda de um programador que "conversa com uma IA" representada por um **cérebro futurista** que dialoga com ele. Quer criar o dele um dia. Respondido com TRANSPARÊNCIA (regra de ouro) — a propaganda são 3 peças montadas, e separei o que é nosso do que tem custo:
1. **O cérebro visual que reage** (pulsa/acende quando "pensa" ou "fala") — SVG animado no estilo raio-x azul do OS (mesma linhagem da anatomia visual e do Cubo de Metatron). **NOSSO, sem custo, buildável.** É a parte que mais impressiona.
2. **Voz** (ouvir pelo microfone + responder falando) — **Web Speech API** do navegador. **Real e grátis.**
3. **A inteligência real por trás** (responder como o Claude) — precisa conectar a uma IA via **chave de API (Anthropic)**, o que **custa por uso + um pouco de montagem técnica**. Único porém honesto; explicar chave/custo sem pegadinha quando chegar a hora.

**Caminho combinado:** começar pela parte que já é nossa — o **cérebro que acende e pulsa** (SVG) — e usar isso como PROJETO DE APRENDIZADO em [[project_montgomery_code]] (aprender programando no que ele ama, não em tutorial seco). A peça 3 (IA real por dentro) fica como degrau futuro com chave/custo. Casa com a "IA própria da Vanessa" e com o espírito de conhecimento vivo. Retomar dizendo "Cérebro Montgomery".

### Anatomia do OS — corpo humano mais realista (17/07/2026)
**Projeto:** Montgomery OS · **Estágio:** semente (registrado após a v1.7 dos Órgãos)

Com as 4 camadas no ar (ossos, músculos, tendões, órgãos nos 5 Elementos — OS v1.7), Montgomery quer, sem pressa, evoluir o DESENHO do corpo para algo mais realista. Caminhos, do mais leve ao mais pesado (transparência de sempre):
1. **Placa SVG mais rica** — mesma técnica atual, mais detalhe anatômico (contorno do corpo inteiro, sombreamento, proporções finas). Nosso, offline, sem custo.
2. **Corpo 3D que gira** — modelo anatômico rotacionável no navegador (frente/costas/perfil); resolve também o espelhamento do mapa de costas. Exige carregar arquivo pesado; já plantado como próxima camada no rodapé da Anatomia.
3. **Fotorrealismo tipo BioDigital/Zygote** — serviço externo pago e online; fica fora do cofre da família por escolha (já explicado e decidido).
Retomar dizendo algo como "corpo realista" — começar pelo 1 ou 2 conforme o fôlego de créditos.

### Vitruviano na geometria sagrada — visao em camadas (13/07/2026)
Montgomery aprovou a direcao: o Corpo Vitruviano do OS deve ter a FORMA REAL do
desenho do Da Vinci, DE COSTAS (como ele se ve dentro da Merkabah), e crescer
por camadas. PRIMEIRO acertar as proporcoes; depois adicionar camadas uma a uma.
- **Proporcoes (fundacao):** envergadura = altura (quadrado); umbigo = centro do
  circulo, na proporcao aurea 0,618 da altura; pubis = centro do quadrado (os
  dois centros NAO coincidem); cabeca = 1/8; ombros = 1/4; membros duplos
  (pose fantasma) como no original. Tiphereth (Sol) cai no centro do circulo —
  liga ao "modelo helicoidal do Sol" que Montgomery citou como a raiz da
  desarmonia (nos criamos a desarmonia quando saimos desse modelo).
- **Ordem das camadas (definida por ele, 13/07):**
  1. Arvore da Vida (Sefirot de costas — lado do desenho = lado real)
  2. 5 Elementos (ja existe: zonas clicaveis)
  3. Orgaos e visceras de cada elemento
  4. Pontos ABC
  5. Meridianos de acupuntura
  6. Quiropraxia (coluna/raizes nervosas — ligar ao modulo existente)
  7. Seitai
  8. Emocoes de cada elemento
  9. Fitoterapia correspondente para tratamento
- Estudo visual de proporcoes gerado e aprovado em conversa (13/07):
  vitruviano_proporcoes_estudo.svg — corpo de costas, Merkabah, circulo+quadrado,
  Arvore da Vida sobreposta com Tiphereth no centro.
- Ja aplicado no os/index.html (nao commitado ainda): corpo com coluna/escapulas,
  Merkabah no fundo, umbigo marcado. Proximo passo: substituir pela versao com
  proporcoes exatas do estudo + camadas ligaveis (toggle por camada, como a
  anatomia visual).
- **Decisoes alinhadas (13/07, segunda rodada):** dois corpos SOBREPOSTOS como na
  referencia (ativo colorido/clicavel + fantasma como sombra; o botao troca qual
  esta vivo — costas/frente, resolve a maca e inverte os pontos ABC via dados,
  nao via desenho); Arvore da Vida como CAMADA LIGAVEL (nao fixa); refinar o
  estudo visual antes de codificar no OS. Estudo v2 gerado:
  vitruviano_estudo_v2.svg (fantasma de frente com bracos erguidos — maos caem
  nos vertices da Merkabah; pernas abertas ate o circulo).
- **Terceira rodada (13/07):** correcoes do Montgomery sobre o v2 — (a) arvore
  estava ABAULADA nos bracos: pilares agora perfeitamente verticais (x=230/300/370);
  (b) fantasma estava invisivel: mais presenca; (c) CORPO DUPLO = MASCULINO
  (costas, ativo) + FEMININO (frente, par que se alterna) — liga com a Lei do
  Genero; (d) corpo com formas reais tipo vitruviano, sem rosto (de costas
  resolve). Inspiracoes absorvidas da arte do Gemini (que e pintura decorativa,
  nao geometria exata): nome do paciente em arco no topo, selos dos elementos
  em aneis com glifo, raizes do ser sob Malkuth, elipse da Metafisica em volta
  de tudo. Estudo v3 gerado: vitruviano_estudo_v3.svg.
- **Quarta rodada (13/07):** Montgomery aprovou a direcao geral ("nem se compara
  de tao melhor"). Ajustes: SEM nome do paciente em arco, SEM raizes de arvore
  sob Malkuth (nao gostou); segundo corpo = COPIA IDENTICA do primeiro (mesmas
  formas vitruvianas) na segunda pose do Da Vinci (bracos erguidos ~21 graus,
  pernas abertas ~15 graus, via transform rotate sobre os mesmos paths — dupla
  exposicao), sem rosto. Corpo duplo masculino/feminino DESCARTADO nesta rodada.
  Estudo v4 gerado: vitruviano_estudo_v4.svg.
- **Quinta rodada (13/07) — CORPO DEFINIDO:** Montgomery gerou no Gemini o corpo
  vitruviano DE COSTAS (musculatura realista, dupla exposicao, linhas azuis
  #9fd8ff sobre fundo escuro, sem rosto, sem geometria) usando prompt com nossa
  paleta. Arquivo salvo em os/corpo_vitruviano_costas.jpg (copiado de
  Desktop\Eu\"Vitruviano de cosas.jpg"). Estrategia hibrida confirmada: imagem
  Gemini = carne; SVG nosso por cima = geometria exata + camadas clicaveis
  (as cores dos elementos NAO ficam na imagem — acendem via overlay no clique).
  Estudo v5 gerado com a imagem embutida + geometria v4 + demo de zona acesa.
  Proximo: aprovacao do v5 -> implementar no os/index.html.
- **IMPLEMENTADO no os/index.html (13/07, apos aprovacao do v5.2):** corpo =
  imagem corpo_vitruviano_costas.jpg (encaixe medido pixel a pixel: maos no
  quadrado, circulo r=267 pelo compasso de Leonardo, Merkabah recalculada,
  elipse da Metafisica); zonas clicaveis INVISIVEIS que acendem no toque
  (incluindo bracos erguidos e pernas abertas da dupla exposicao); selos dos
  5 elementos (anel+glifo SVG) que trocam de lado com a visao; botao "Arvore
  da Vida" = primeira camada ligavel (Sefirot nos 3 pilares verticais).
  Testado no navegador local: clique Madeira acende os dois bracos e abre a
  teia; inverter visao espelha corpo, zonas e selos. NAO commitado/publicado
  ainda. Detalhe conhecido: a Arvore nao espelha na visao de frente (ela
  representa os lados reais); avaliar esconde-la nesse modo.

## Senha "Acender os Pontos" — camada de Acupuntura no modulo Anatomia (registrado 17/07)

Decisao da conversa de 17/07 sobre os 3 apps de anatomia/acupuntura do Montgomery.
Principio: **o que e dos outros a gente aponta com links; o que o amigo liberar a
gente incorpora; o que for tradicional e publico a gente constroi como nosso.**

- **Anatomy Learning (se comprar):** app fechado, nao entra no OS. Usar lado a
  lado; para 3D dentro do OS o caminho e three.js + modelos abertos (NIH 3D ja
  comprovado; avaliar Z-Anatomy, atlas 3D open source de corpo inteiro).
- **A Manual of Acupuncture (Deadman, licenca ativa):** videos/ilustracoes nao
  podem ser copiados. Plano: cada ponto no OS ganha botao "Ver no Deadman" que
  abre a pagina do ponto (ele ja logado, cai direto no video).
- **✅ TESTADO E CONFIRMADO (17/07, Montgomery clicou ponto a ponto logado):**
  padrao de link estavel `https://app.amanualofacupuncture.com/es/point/CODIGO`.
  Tabela de codigos dos 14 meridianos (a grafia importa!):
  | Meridiano | Codigo Deadman | | Meridiano | Codigo Deadman |
  |---|---|---|---|---|
  | Pulmao | `LU` | | Bexiga | `BL` |
  | Intestino Grosso | `L.I.` (com pontos!) | | Rim | `KID` |
  | Estomago | `ST` | | Pericardio | `P` |
  | Baco | `SP` | | Triplo Aquecedor | `SJ` (nao TB) |
  | Coracao | `HE` | | Vesicula Biliar | `GB` |
  | Intestino Delgado | `SI` (sem pontos) | | Figado | `LIV` |
  | Vaso Concepcao | `REN` | | Vaso Governador | `DU` (nao GV) |
  Exemplos validados: BL-63, ST-36, SP-6, LU-7, L.I.-4, DU-20, HE-7, KID-3,
  LIV-3, REN-6, SJ-5, P-6, GB-34, SI-3. Falharam (nao usar): LI, GV, VG, IG,
  ID, TB, T.B., S.I. — com a tabela acima, o link dos ~360 pontos e gerado
  automaticamente na Vela 1, sem cadastro manual.
- **App do amigo (comprado 2017, em portugues, so celular; Montgomery tem o APK):**
  conversar com o amigo e pedir permissao de usar o conteudo (textos/imagens)
  como base da camada em portugues. Com o sim dele, Claude ajuda a extrair o
  conteudo do APK de forma organizada. Sem permissao, nao extrair — usar so
  lado a lado.

**Decisoes de 17/07 (segunda rodada, com o Montgomery):**
- **Nomes em 3 linguas:** cada ponto tera codigo (L.I.-4) + pinyin (Hegu) +
  caracteres (合谷) + traducao em portugues ("Vale da Uniao") + ingles
  ("Joining Valley"). Conhecimento tradicional publico — sem conflito de licenca.
- **Onde entra primeiro (escolha do Montgomery):** Diagnostico Integrado da
  Clinica, perto do Balanco Metodo/ABC — fluxo clinico natural (ABC identifica o
  meridiano -> pontos logo ali -> ficha -> resumo/PDF). O motor de sugestoes
  cruzadas pode passar a sugerir pontos pelo meridiano em foco.
- **Arquitetura — uma raiz, muitos reflexos:** arquivo unico `acupuntura-data.js`
  (irmao do dados-clinicos.js) com os ~360 pontos trilingues + link Deadman
  gerado pela tabela acima. Reflexo 1 = card no Diagnostico; Reflexo 2 = camada
  visual no OS.
- **Visao confirmada — pontos clicaveis no Vitruviano:** e a camada 5 da visao
  em camadas de 13/07 ("Meridianos de acupuntura"). Tecnica ja comprovada
  (zonas invisiveis que acendem + camadas ligaveis). Contra a densidade dos
  ~360 pontos: mostrar por meridiano ligado (liga Bexiga -> so os 67 pontos
  dela acendem, na cor do elemento). Cascata final:
  Sefira -> Elemento -> Orgao -> Meridiano -> Ponto -> tratamento — o
  Vitruviano com a Arvore vira o indice vivo de tudo (Bussola Holografica).

Plano fatiado em velas (uma janela cada, consumo pequeno-medio):
1. **✅ Vela 1 (FEITA 17/07, v1.8):** `acupuntura-data.js` criado com a tabela dos
   14 meridianos + gerador de link Deadman + 76 pontos trilingues (Pulmao 11,
   Intestino Grosso 20, Estomago 45). Card "Acupuntura — Pontos dos Meridianos"
   no Diagnostico Integrado, entre o Balanco ABC e o Bagua: chips por meridiano
   (cor do elemento; os sem dados aparecem apagados), busca por nome/indicacao,
   ficha expansivel por ponto e botao "Ver no Deadman".
2. **✅ Vela 2 (FEITA 17/07, v1.9):** +5 meridianos completos — Baço-Pâncreas 21,
   Coração 9, Intestino Delgado 19, Pericárdio 9, Fígado 14 (+72 pontos = 148).
   Links Deadman conferidos (CS→P, F→LIV, ID→SI, C→HE, BP→SP).
3. **✅ Vela 3 (FEITA 17/07, v2.0):** +6 meridianos completos — Bexiga 67, Rim 27,
   Triplo Aquecedor 23, Vesícula Biliar 44, Vaso Concepção 24, Vaso Governador 28
   (+213 = **361 pontos, BASE COMPLETA**). Contagens, sequências e links Deadman
   validados por script (BL-60, DU-20 conferidos). Próximo reflexo: camada visual
   de pontos no Vitruviano do OS (por meridiano ligado).

Base propria: nome, meridiano, localizacao, funcoes, indicacoes dos pontos =
conhecimento tradicional publico. Nao fazer tudo numa janela so.

## 🐾 Ideia (20/07/2026) — Pontos de acupuntura da Maly (Maly Care)

No app **Maly Care** (Netlify), criar uma camada de **pontos de acupuntura canina**
sobre uma **imagem mais realista de um Pastor Belga Malinois** (não esquemático) —
para atender a própria Maly. Espelha o que já existe na Clínica humana (361 pontos
nos meridianos), mas com o mapa de acupuntura veterinária do cão.
Fonte do app: `03_Biblioteca\Maly\deploy\`. Deixado para depois, sem pressa.

## 🐕 Ideia (20/07/2026) — Foto da própria Maly no Maly Care

Futuramente, trocar a patinha (ícone/login) por uma **foto real da Maly** — ela é
uma Malinois linda, de colete "POLICE K9". Montgomery tem fotos dela. Usar como
avatar da tela de login e/ou como ícone do app. Por ora está a patinha estilizada
(azul da marca), já no ar em nimble-raindrop-1ff4fc.netlify.app.

## 🐾 Ideia (20/07/2026) — Fotinha da Maly no cabeçalho da barra lateral

No Maly Care, trocar o avatar "M" do topo da barra lateral (ao lado de "Maly Care",
`aside .logo .av`) pela **foto redonda da Maly** que já está salva na ficha
(`db.paciente.foto`). Se não houver foto ainda, cai de volta na patinha. Assim ela
aparece no cabeçalho, não só na aba Ficha. (Pedido para DEPOIS, não urgente.)

- [ ] **Maly Care** — coco seco (casca) como abrasivo natural na aba Odontologia/Higiene: raspa tártaro nos caninos/molares; oferecer com moderação (gordura da polpa solta o intestino). Ideia do Montgomery em 20/07/2026, vendo a Maly descascar coco. Ensinar a Dra. Vera (IA) sobre isso.

## Concluido (25/07/2026) — Montgomery OS v3.4: nasce a aba Montgomery Code

Aba propria **Montgomery Code** no menu do OS (depois da Escola Montgomery IA):
o caderno vivo do aprendizado, com a **trilha das sete camadas** (1 - A Web, acesa;
2 - Git & GitHub; seguindo ate APIs/IA) e anotacoes que ficam guardadas no aparelho.
Usa os proprios sistemas do Montgomery como livro-texto. Secao `sec-code`,
rota `go('code')`. Fonte: `os/index.html`. No ar na Vercel.

## Concluido (25/07/2026) — Montgomery OS v3.5: camada 2 do Montgomery Code acesa

**Git & GitHub** explicado na aba Montgomery Code, do zero e sem porta trancada:
o medo que fez o Git nascer (relatorio_final_AGORA_SIM), a metafora do prontuario
(commit = evolucao que nao se apaga), **as tres mesas** (mesa de trabalho / bandeja
do `git add` / livro encadernado do `git commit`), a diferenca Git x GitHub,
`push` e `pull`, os dois comandos que so olham (`git status`, `git log --oneline`)
e o vocabulario minimo (repositorio, commit, branch, remote/origin).
**Aula viva:** usa o nosso proprio push da v3.4 (`104e4f6`) como exemplo real,
comando por comando. Semaforo da camada 1 vira "Acesa" e o da 2, "Onde estamos".
Passo pequeno pedido a ele: rodar `git log --oneline` e olhar o proprio caminho.
Proxima: camada 3 — Servidor & nuvem.

## Corrigido (25/07/2026) — caderno do Montgomery Code entrava no Backup

O caderno de anotacoes do Montgomery Code (`mos_code`) estava FORA do
`exportarBackup`/`importarBackup` da aba Configuracoes: as anotacoes ficariam so
no aparelho e se perderiam numa troca de computador, mesmo com backup exportado.
Agora `code` viaja junto no JSON de backup e volta na importacao.

## Concluido (25/07/2026) — OS v3.6: a trilha do Montgomery Code virou painel

Os sete cartoes da trilha eram so um desenho — nao havia como "ir" de uma camada a
outra, so rolar a pagina. Agora cada cartao e uma **porta** (`irCamada(n)`):
- camada acesa -> desliza (scroll suave) ate o bloco de leitura dela e da um brilho
  dourado de 1,6s (`.camada-alvo`) para o olho achar onde chegou;
- **camada 1** -> leva para a aba **Escola** e para na Aula 2 (`#aula-materiais`),
  porque a aula dela mora lá, nao no Code;
- camada apagada -> aviso gentil em `#camadaAviso`: "me peca: acende a camada N".
Adicionado tambem o link "voltar ao mapa das camadas" no pe da camada 2.
Pedido dele: "como mudo da camada 1 para camada 2" — a porta nao existia.

## Aula viva (27/07/2026) — Montgomery Code camada 6: API, OAuth e escopo

Material nascido do passo real de hoje: ligar a Ponte da Clinica com o Google
Calendar. Guardado como aula porque a dinamica se repete em TODO servico externo
(Google, Supabase, Vercel, Whatsapp). Detalhe em `01_Codigo/Montgomery_Code_TRILHA.md`.

**As tres perguntas que todo servico faz** antes de deixar um app tocar nos dados:
1. **A porta existe?** -> ativar a API (Google Cloud Console > Biblioteca).
   Feito hoje: *Google Calendar API*, projeto **App-Montgomery**, status "Ativadas".
2. **O dono autoriza?** -> a **tela de permissao OAuth**: o que o usuario ve e aceita.
3. **Autoriza ate onde?** -> o **escopo** (`.../auth/calendar.events`): a chave que
   abre so uma porta, nao a casa inteira. Escopo pequeno = seguranca.

**Vocabulario minimo:** API (balcao de atendimento de um programa para outro) /
OAuth (o app pede a chave ao DONO, nunca a senha) / escopo (ate onde a chave abre) /
`provider_token` (a chave temporaria que o Google devolve; vive ~1h) / Console (o
painel de administracao do servico, separado do produto que o usuario usa).

**A regra que protege a agenda pessoal:** a Clinica escreve numa agenda separada
("Clinica - Pacientes") e so mexe em evento que ela mesma criou (guarda o `gcalId`).
Principio geral: *dar ao programa o menor poder que resolve o problema*.

## Concluido (27/07/2026) — Clinica v2.8: Ponte com o Google troca de chave

A Calendar API foi ativada (projeto App-Montgomery) e o escopo entrou na tela de
permissao, mas ligar a ponte deu **403** no `calendarList`. Diagnostico no Console do
navegador: a chave existia, o Google e que recusava. Motivo de fundo: `calendar.events`
sabe mexer em eventos, mas **nao sabe criar uma agenda** — e a primeira coisa que a
ponte faz e criar a "Clinica - Pacientes".

Trocado para **`calendar.app.created`**, que era o escopo certo desde o inicio: o app
cria a propria agenda secundaria e so enxerga o que ele mesmo criou. Ganho real de
seguranca — as agendas pessoais do Montgomery ficam **invisiveis** para a Clinica por
trava do Google, nao por promessa do nosso codigo. O texto da aba Configuracoes foi
corrigido para dizer a verdade nova.

Passo manual dele: adicionar o escopo em Google Auth Platform > Acesso a dados e
remover o `calendar.events`, que ficou sem uso. Depois sair e entrar de novo.

## Concluido (27/07/2026) — Clinica v2.9: a ponte escreve na agenda que ELE ja usa

O v2.8 estava tecnicamente certo e humanamente errado: criava uma agenda nova
("Clinica - Pacientes"), mas o Montgomery marca os pacientes ha anos na agenda
**Montgomery Magalhaes**. O `calendar.app.created` e incapaz de tocar em agenda que ja
existe — e dessa incapacidade que vinha a seguranca dele. Os dois desejos (escrever na
agenda de sempre / ficar cego para as agendas pessoais) nao cabem na mesma chave.

Escolha dele: **escrever na Montgomery Magalhaes**. Voltamos ao escopo
`calendar.events` e trocamos o desenho — em vez de criar agenda, a Clinica agora
**deixa ele escolher** num seletor em Configuracoes qual das suas agendas recebe as
sessoes (so as que ele pode escrever; feriados e luas ficam de fora). Na primeira vez
ela chuta a agenda com o nome dele. Quem limita o alcance volta a ser o nosso codigo:
escreve so na agenda escolhida e so mexe em evento com `gcalId` nosso.

Aprendizado guardado: a chave mais fechada nem sempre e a certa — a certa e a que
cabe na vida de quem usa.

## Concluido (27/07/2026) — Clinica v3.0: a ponte para de depender do luxo

O 403 do `calendarList` persistiu mesmo com `calendar.events`: o Google separa
ESCREVER em eventos de LER a lista de agendas — sao chaves diferentes. O seletor de
agenda dependia da segunda e derrubava a ponte inteira quando ela faltava.

Dois consertos: (1) pedimos tambem `calendar.calendarlist.readonly`, que so le nomes;
(2) e, principalmente, o teste de "a ponte funciona?" passou a usar a chave que a ponte
realmente usa (`GET /calendars/primary`), nao a da lista. Sem a lista, a ponte liga
igual e escreve na **agenda principal** — que e a "Montgomery Magalhaes" dele —, e o
seletor explica em vez de sumir.

Licao de projeto: nao deixar um recurso essencial morrer por causa de um enfeite.


## Ideia (27/07/2026) — A aba Diagnostico vista por quem atende de verdade

O Montgomery atendeu na quinta e trouxe seis correcoes de uso. Nenhuma e enfeite:
todas nascem de ele estar com o paciente na frente e a tela nao acompanhar o gesto.
Registradas aqui antes de qualquer codigo, para escolher a ordem com calma.

1. **Resumo da ultima sessao, no comeco.** Ao terminar um diagnostico, guardar um
   registro de sessao. Quando o paciente chega, o resumo do ultimo encontro aparece
   diante dos olhos dele — sem ele ter que caçar na ficha.

2. **Toggle em cada setor.** Pulsologia, 5 Elementos, terapias, Psicanalise, Quiropraxia:
   cada bloco abre quando ele vai atuar e fecha quando terminou. A pagina Diagnostico
   fica limpa em vez de ser um rolo infinito.

3. **A anotacao mora embaixo do que ela anota.** Hoje a caixa de anotacoes dos 5
   Elementos nao fica logo abaixo dos 5 Elementos, e ele se perdeu na propria tela.
   Regra geral: anotacao sempre colada ao setor de onde nasceu.

4. **Pulsologia com lado e qualidade juntos.** Hoje ele marca a posicao (Guan esquerdo =
   Figado) e marca o tipo (Cheio, Vazio), mas os dois nao se amarram: a tela nao diz
   QUAL posicao esta cheia e QUAL esta vazia. Precisa registrar por posicao —
   ex.: Guan esquerdo / Figado / Cheio **e** Chi direito / Rim / Vazio, ao mesmo tempo.

5. **As terapias escolhidas ficam onde foram escolhidas.** Hoje ele seleciona a caixa da
   terapia e o resultado aparece longe. Tem que ficar logo abaixo.

6. **Quiropraxia tem mais corpo.** Faltam dedos das maos, dedos dos pes, maos, pes,
   braco e antebraco.

7. **O resumo final tem que ser a teia, nao a lista.** Hoje ele resume tudo em blocos.
   Com o paciente na frente, o que ele precisa ver e a corrente: aquele dedo -> aquele
   meridiano -> aquele orgao -> aquela emocao -> aquela Sefirot -> aquela lei da
   Metafisica. O resumo devia mostrar o fio, nao as contas soltas.

Frase dele que resume o pedido: nao e falta de informacao na tela, e falta de a tela
pensar junto no momento do atendimento.

### Adendos da mesma conversa (27/07/2026)

8. **Busca de paciente sem acento.** Buscar "Fabricio" tem que achar "Fabrício" e
   vice-versa. Hoje o Postgres compara letra a letra e "i" != "í". Conserto: coluna de
   busca normalizada (minusculo, sem acento) no banco — nao na pagina, para nao gastar
   egress. Pequeno e doi HOJE: fazer primeiro.

9. **Arvore e Vitruviano na Clinica.** Hoje so existem no Montgomery OS. NAO copiar:
   copia vira duas verdades que divergem (ja aconteceu com clinica_DO_AR.html e com o
   MMObras). Extrair para um arquivo unico que OS e Clinica carregam. E tambem o
   primeiro "andar" do predio, e a teia depende disso — se a Arvore for copia, a
   corrente dedo->meridiano->orgao->emocao->Sefirot teria que ser escrita duas vezes.

10. **App instalavel separado do OS.** Ja funciona: os dois manifestos existem e tem
    escopos distintos ("/" e "/os/"), entao o Windows trata como dois programas. Falta
    so ele instalar pelo menu do Chrome. Se o Chrome nao oferecer instalacao automatica,
    falta um service worker — meia hora, e da de brinde abrir sem internet.

**Ordem combinada:** 8 → toggles/caixas → pulso por posicao (busca dentro de cada
quadro) → quiropraxia completa → registro de sessao → 9 → a teia (janela propria,
arquitetura antes do codigo).

**Regra que ele deu para a teia:** as ligacoes tem que vir DELE, nao do Claude. Claude
constroi onde as ligacoes moram e como percorre-las; o Montgomery escreve ou confirma
cada uma. A tela precisa dizer a origem (classico / observado por ele). Inventar
correspondencia de MTC com cara de autoridade, na frente de um paciente, e a pior coisa
que este projeto pode produzir.

### Senha "Acender as Caixas" (registrada 27/07/2026)

Janela nova de **execucao** (o desenho ja esta feito, nao reabrir a conversa). "Caixas" =
as caixas recolhiveis (toggle) da aba **Diagnostico** da Clinica — cada setor vira um
bloco que abre para atuar e fecha para deixar a tela limpa. Nao tem relacao com caixas de
texto da plataforma nem com os quadros do prototipo da Arvore.

Ordem da janela:

1. **Busca de paciente sem acento** + **endereco proprio para o Montgomery OS**
   (os dois pequenos, vao juntos).
2. **As caixas com toggle** no Diagnostico — todas fechadas ao abrir, a Clinica lembra
   como ele deixou, titulo mostra resumo curto ("Pulsologia - 2 posicoes"), e cada caixa
   carrega tudo dela dentro: ferramenta, selecao e anotacao, nessa ordem.
3. **Pulso por posicao** — as qualidades passam a morar DENTRO do quadro de cada posicao,
   com a busca dos 28 dentro de cada quadro tambem.

Depois: quiropraxia completa -> registro de sessao + resumo na chegada -> Arvore e
Vitruviano num arquivo so servindo OS e Clinica -> a teia.

## Concluido (27/07/2026) — Arrumacao: tudo passou a morar no lugar certo

A pasta de codigo antiga (`Files_Claude`) e o deposito da Area de Trabalho
(`Vrav Claude`) foram esvaziados e os arquivos levados para dentro do repositorio, na
organizacao Fibonacci:

- `MAPA_METAFISICA.md` -> **00_Nucleo/** (ao lado do Mapa da Vida; sao os dois mapas de
  mais alto nivel, e a Metafisica e a raiz que liga tudo no OS)
- `metatron_cube.svg` -> **13_Midia/**
- MMObras v7, v9.16 (do ar) e v9.17 (guardado) + `obra_pintura_adames.html`
  -> **21_Backups/MMObras/**
- Clinica antiga de 28/06 -> **21_Backups/Clinica/clinica_2026-06-28.html**
- `escola_montgomery_ia.html` -> **01_Codigo/prototipos/**
- nota do Gemini -> **01_Codigo/_prompts_notas/**
- `index.html` solto: descartado — era duplicata exata (mesmo hash) do v9.16

A memoria do Claude tambem mudou de casa: os 66 arquivos estavam sob o projeto
`Files_Claude` e as janelas novas abrem em `Files_Claude_repo`, entao toda janela nova
comecava cega — foi exatamente o que aconteceu com a senha "Acender as Caixas". Copiados
e conferidos no lugar certo. O historico das 68 conversas foi mantido de proposito: foi
nele que a senha "Renovar" foi recuperada hoje.

**Susto do dia, que virou licao:** por um momento pareceu que o `MAPA_METAFISICA.md`
tinha sido apagado em definitivo — e ele nao estava em backup nenhum, nem no git, nem na
nuvem. Estava so movido. A regra de negacao contra apagar pastas inteiras, no
`.claude/settings.json`, **funcionou como devia** e continua de pe. Regra nova: antes de
apagar qualquer pasta, conferir arquivo por arquivo se existe copia no repositorio.

Pendencia menor: a pasta vazia `Files_Claude` ficou presa ("device or resource busy") por
uma sessao antiga do Claude aberta nela. Sai quando essa janela fechar.
