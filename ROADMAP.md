# Roadmap — Montgomery Saúde Integrativa

Documento vivo: **só o que ainda respira**. O que já foi entregue mora em
[`00_Nucleo/ROADMAP_ARQUIVO.md`](00_Nucleo/ROADMAP_ARQUIVO.md), inteiro, sem resumo.
A planta da tela do Diagnóstico mora em [`00_Nucleo/TELA_UNICA.md`](00_Nucleo/TELA_UNICA.md).
O mapa de onde mora cada coisa dentro do `index.html` mora em
[`00_Nucleo/PLANTA_DO_PREDIO.md`](00_Nucleo/PLANTA_DO_PREDIO.md) — **ler antes de mexer no arquivo**.

> **Regra da casa:** tudo tem que ser registrado aqui. As janelas de conversa têm limite e acabam —
> este documento não. O que não está escrito aqui, some. **Ao concluir**, o bloco desce para o
> arquivo e some daqui: o diário fica magro de propósito.

## O FOCO — a semana de organização (decidido por ele em 03/08/2026)

*Ele deu autorização máxima para dizer honestamente o que fazer, e escolheu isto como maior foco
a partir de hoje. A ordem abaixo é de dependência, não de gosto: cada passo torna o seguinte
barato. Não pular.*

0. ~~**A rede embaixo do trapézio.**~~ **FEITA em 03/08.** Onze provas em um segundo, sem
   internet e sem custo. Rodar **antes de todo push**, daqui em diante:
   `node 01_Codigo/conferencia/conferir.mjs`. O bloco inteiro está no `ROADMAP_ARQUIVO.md`.
1. ~~**Aliviar a porta** — os três vizinhos.~~ **FEITO em 03/08 (v9.4).** A porta caiu de
   1.225 KB para 964 KB; 172 KB nunca mais descem numa visita comum. O bloco inteiro está
   no `ROADMAP_ARQUIVO.md`.
2. ~~**Juntar o que está espalhado** — o Financeiro.~~ **FEITO em 03/08 (v9.5).** De nove
   pontos para **três quarteirões** (pintura, desenho, eletricidade) mais quatro portas
   marcadas. Nenhuma linha de código mudou — só de lugar, e isso foi provado. O mapa está
   no `PLANTA_DO_PREDIO.md`; o bloco inteiro, no `ROADMAP_ARQUIVO.md`.
   ~~E os **Suplementos**.~~ **FEITO em 03/08 (v9.6).** Achado bom: os Suplementos já
   moravam quase juntos — o serviço foi **marcar** os três quarteirões, subir o interruptor
   das abas para a entrada e escrever as **duas armadilhas de nome** (`.ev-card` é da Agenda;
   `.fio-elementos` não é o fio da teia). Provado pela lista ordenada **e** pela rede.
   ~~E o **Diagnóstico**.~~ **FEITO em 03/08 (v9.7).** Outro achado bom: já morava quase
   todo junto — o desenho era uma tela só e a eletricidade, um continente de quase 5.000
   linhas. Espalhada estava só a **pintura** (as caixas e a última leitura, largadas no meio
   dos formulários). O serviço foi trazer essa pintura e **marcar as três paredes**.
   Duas coisas ficaram de fora, com placa dizendo por quê: a **Recomendação** (Faixa 5, que
   muda de lugar e tem berço na Prescrição) e a **zeragem dentro de `go()`** — essa só sai
   criando função nova, o que é a etapa 4, não esta.
   **Faltam a Agenda e a Recomendação.**
   *A rede, a v9.5, a v9.6 e a v9.7 estão no `main` e no ar. Nada mora fora do `main`.*
3. **Enxugar o repetido** — só depois de reunido dá para ver o que é cópia. Medir, nunca supor.
4. **Dar encaixe às peças** — trocar os `onclick` por escuta no código e as funções globais por
   módulos com `import`/`export`. É o que permite levar o Financeiro para outro app.
   **Esta é a etapa cara; as três de cima têm que estar feitas.**
5. **A escola com abas laterais** — o Montgomery Code no formato do OS, para ele abrir e estudar
   quando estiver inspirado. Pode andar em paralelo: não depende de nenhuma das outras.
6. **As biografias e os CLAUDE.md** — rever o que os Claudes sabem dele; o `CLAUDE.md` e a
   memória envelheceram em pontos.

**A regra da semana:** *refatorar é arrumar por dentro sem mudar nada por fora.* Se o
atendimento sentir diferença, o passo foi longe demais. E depois de cada passo:
**conferir a rede, subir e olhar** — `node 01_Codigo/conferencia/conferir.mjs`.

## O que está pendente agora

- **Prateleira** — falta ele escrever as primeiras linhas de "Onde comprar" (bloco abaixo).
- **Nunca o relógio decide** — senha aberta, MMObras.
- **Sem acento** — as buscas de dentro já foram varridas (v9.2). Sobra a busca de paciente da
  Recomendação (`filtrarRxPac`), que ainda não enxerga os arquivados.
- **Montgomery Code** — seguir montando as aulas da grade; matéria-prima acumulada abaixo.
  A **Aula 1.8 (A peça que não solta)** foi acesa em 03/08 (OS v6.2) e é a base teórica do
  foco acima: escopo, a mesa única, e por que o LEGO ainda não tem encaixe.
- **A roda que engole a lista** (ideia dele, 03/08) — juntar **Acupuntura (pontos)** dentro do
  **Baguá**, acabando com as duas abas. O argumento é forte e é técnico: as duas já falam a
  língua do **meridiano** (o Baguá guarda `{meridiano, síndrome}`; cada ponto pertence a um
  meridiano), e o código já as mistura no mesmo balde para alimentar os candidatos (~4957).
  A tela só não conta a verdade que os dados já contam. **Não fazer antes da etapa 4:** é obra,
  não arrumação — muda por fora, e a rede não protege contra "ficou pior de usar".
- **A corrente quebrada da sessão** (visto por ele na tela em 03/08 — PRIORIDADE, nasceu do
  atendimento). Ele não consegue registrar o que vai **usar** no encontro. São três elos:
  1. **Duas listas de pontos, e a que ele usa não marca.** A grade `pontosGrid` (render 7179)
     tem clique e grava via `togglePonto` (7620). Mas a **base trilíngue** — a tela que ele
     abre, com pinyin/Deadman (HTML 1543, render ~6534) — é **só consulta**: nenhum cartão
     leva o ponto para a ficha. *Correção de uma nota anterior minha, que dizia que clicar já
     gravava: vale só para a grade pequena.* Falta um "usar neste atendimento" no cartão.
  2. **O Baguá guarda a síndrome, não o sistema.** `toggleBagua` (6783) grava
     `{meridiano, síndrome}` — se ele escolhe o sistema e não clica numa síndrome, **nada
     fica**. E não há como somar pontos dentro do sistema escolhido.
  3. **A "aba Sessão" que ele pediu já existe em embrião:** `diagResumoBox` (1649), que já
     monta "Pontos:" (7969) e "Bagua:" (7981) e fica sempre aberto (6427). Só que nasce
     escondido e só aparece se houver algo marcado — como o elo 1 está quebrado, ele nunca
     enche. Falta virar **faixa de Sessão** de verdade: sempre visível, agrupada por assunto,
     dizendo o número do encontro e servindo de direção de conduta no fim da consulta.
  **É obra pequena, mas é obra** (código novo). Vale furar a fila da semana de organização:
  é dor de consultório real, e a plataforma existe para atender.
- **Ideias vivas** — Vitruviano como lugar único, as três portas de 01/08, Ortomolecular,
  terceira aba de Suplementos, o botão do que deu certo, as ideias da Maly.
- **Em planejamento / Pendências** — as duas listas antigas, mais abaixo, ainda valem.

---

## A tese — por que tudo isto existe (dito por ele em 30/07/2026)

*Este bloco fica no alto de propósito. Não é um projeto: é a razão dos projetos. Quem ler o resto
sem ler isto vai construir telas certas pelo motivo errado.*

> *"Tudo que estamos criando concentra-se na verdade na geometria sagrada, na Flor da Vida, na
> matemática de Fibonacci, no Metatron, no átomo, nas Sefirot, nos 5 Elementos, nos minerais.
> Então toda espécie de desarmonia inicia na metafísica, na desconexão com a luz.*
>
> *É difícil de explicar — eu sinto que é a vida, as pessoas, e eu me coloco no meio delas.
> Adoecemos por todas estas desarmonias, de frequências distorcidas e vibrações erradas que nos
> permitimos.*
>
> *Então quando um paciente está à minha frente, estou vendo alguém que temporariamente — até que
> ele desperte e veja que o caminho é a luz. O livre-arbítrio está aí para que a pessoa decida:
> ou pulsão de vida, ou segue a pulsão de morte. Mas é lento o desenvolvimento. Mas é assim."*

**O que isto muda em como se constrói aqui:**

1. **A Metafísica não é um módulo entre outros — é a raiz.** Os 5 Elementos, os minerais, os pontos,
   a coluna, a Psicanálise: são todos superfícies de uma mesma coisa. Por isso a organização em
   Fibonacci, o Cubo de Metatron, os sólidos e o átomo não são enfeite temático. **São a tese
   desenhada.**
2. **A ordem da doença tem sentido:** começa na desconexão e desce até o corpo. Por isso o
   Diagnóstico não pode ser só uma lista de sintomas — a lista é o fim da história, não o começo.
   É daqui que nasce o desejo da teia, e o sonho do Vitruviano com a Árvore no lugar do formulário.
3. **A ferramenta não decide por ninguém.** Se o livre-arbítrio é o centro, o sistema mostra o
   caminho e nunca empurra. Nada de veredito automático, nada de "o sistema diz que você é isto".
   Isto é irmão da regra de que **as ligações vêm dele, nunca do Claude**.
4. **Devagar é o ritmo certo, não uma falha.** *"É lento o desenvolvimento, mas é assim."* Vale para
   o paciente e vale para o código: uma vela de cada vez, uma ligação hoje, três amanhã.

---

---

## Decidido em 01/08 — o Ronda fica desligado

*"Prefiro da forma como trabalhamos, não tenho tanta necessidade de um agente exclusivo por
enquanto."*

**O Ronda não roda.** Ele nunca teve relógio — só corria quando chamado — então "desligado"
significa simplesmente **não chamar**. Nada está rodando, nada gastando, nada esperando.

**O código fica onde está**, em `01_Codigo/agentes/ronda.mjs`, por dois motivos que não têm a ver
com vigiar repositório:

1. **É a aula.** A Camada 7 do Montgomery Code se apoia nele — as mãos só de leitura, a trava de
   8 voltas no laço, o motor pequeno para tarefa pequena, e a lição dos US$ 0,17 da corrida que
   abriu o ROADMAP inteiro. As 85 linhas comentadas valem mais como material didático.
2. **É a receita.** No dia em que fizer falta, o molde está pronto e testado.

**Não propor ligar o Ronda, nem sugerir agente próprio, sem ele pedir.** Irmão da regra de que o
Ronda não tem despertador: *"as ideias vêm sem que eu pense nelas."*

---

## Decidido em 01/08 — o Obsidian fica como está

*"Estou contente como ele é, pode zerar a dúvida sobre plugin."*

**A dúvida está zerada.** Não haverá plugin de IA dentro do Obsidian, não haverá chave de API nova e
não haverá conta separada. O Obsidian continua sendo o que ele já gosta que seja.

**O que continua de pé, e é outra coisa:** se algum dia ele quiser, o Claude Code pode ler e escrever
a pasta do Obsidian de fora — sem instalar nada e sem custo novo, do mesmo jeito que lê este
ROADMAP. Isso não é plugin e não muda a experiência dele lá dentro. **Não propor sem ele pedir.**

---

## Decisão fechada — a Árvore fica só no Montgomery OS (30/07/2026)

*"Quero que deixe apenas a árvore como já existe no Montgomery OS."*

**Existe uma Árvore só:** as 10 Sefirot sobre Adam Kadmon, em `os/index.html`, seção `sec-arvore`.
É um mapa fixo, igual para todo mundo. Ela continua viva e continua crescendo em conteúdo — o que
está encerrado é **abrir uma segunda árvore em outro lugar**.

**Não construir árvore na Clínica.** Não copiar a do OS para lá, não desenhar uma nova a partir
das sessões, não extrair para arquivo compartilhado. Dois itens saíram do ROADMAP por isso:
o plano do botão na ficha do paciente e o **item 9** da pauta de 27/07 (*"Árvore e Vitruviano na
Clínica"*). Os dois estão inteiros em
`Claude_Main_Clean/01_Codigo/prototipos/ARVORE_NA_CLINICA_plano_em_espera.md`.

**Um fio solto que a teia herda:** o item 9 dizia que a teia dependia da Árvore estar na Clínica.
Com a Árvore ficando só no OS, a teia precisa de outro chão.

**A teia fica dormente** — decisão dele no mesmo dia: *"depois vamos pensar como fazer este chão.
Por enquanto a ideia vai ficar dormente."* Não é desistência e não foi para a quarentena: o desejo
continua escrito, inteiro, mais abaixo neste documento. Só saiu da fila. Quando ele quiser retomar,
a primeira pergunta já está formulada — **onde a teia mora, se a Árvore não vai para a Clínica?**
Senha: **"O chão da teia"**.

**A senha "Plantar a Árvore na Clínica" está encerrada.**

<details>
<summary>O que havia sido levantado antes da decisão (registro)</summary>

O plano técnico já levantado
(onde entra o botão, de onde vêm os dados, as cores dos Elementos) saiu daqui inteiro e espera em
`Claude_Main_Clean/01_Codigo/prototipos/ARVORE_NA_CLINICA_plano_em_espera.md`, junto com as quatro
perguntas que a conversa precisa responder. O protótipo aposentado está na mesma pasta, e a última
versão viva dele no commit `aa4e651`.

Saiu do topo do ROADMAP de propósito: é a primeira coisa que a próxima janela lê e que o Ronda
enxerga. Enquanto estava aqui, mandava começar uma obra que ainda não foi decidida — e horas
depois a decisão veio, fechando a questão.

O protótipo do desenho continua guardado em `Claude_Main_Clean` e no commit `aa4e651`. Nada foi
apagado; só parou de puxar trabalho.

</details>

---

## Ideia viva — três portas que ele abriu em 01/08/2026

*Ditas por ele numa janela de trabalho, sem pedido de execução. Ficam registradas inteiras para
não sumirem — e para que a ordem entre elas seja escolhida por ele, não pelo acaso.*

> *"Estou sentindo hoje uma sensação de que poderíamos fazer muito mais coisas com você. Comecei a
> assistir alguns vídeos no YouTube que falam sobre Code e integração com Obsidian, para realmente
> criar a ideia de segundo cérebro."*

**1. Obsidian como segundo cérebro, com o Claude Code dentro.** É a mesma vontade já registrada em
*Segundo cérebro* — o que muda é ter aparecido um caminho concreto. O Obsidian é uma pasta de
arquivos `.md` no computador dele: o Claude Code lê e escreve nessa pasta com as mesmas mãos com que
lê o `ROADMAP.md` hoje, **sem servidor, sem mensalidade, sem API nova**. Os links `[[assim]]` do
Obsidian são exatamente os que a memória do Claude já usa.

*A pergunta honesta antes de qualquer obra, e ela é dele:* **o segundo cérebro é o ROADMAP crescido,
ou é outra coisa?** Hoje o `ROADMAP.md` já é o cérebro dos projetos, e tem dois leitores (ele e os
agentes). Se o Obsidian entrar sem essa resposta, nascem dois cérebros e nenhum confiável.
Senha: **"Abrir o segundo cérebro"**.

**2. As aulas do Montgomery Code, montadas de verdade.** A grade das 35 aulas existe (`GRADE`, OS
v5.4) e o método de cinco passos também. O que ele pediu agora é **montar as aulas**, não mais só a
prateleira. Vale começar pelas camadas já acesas (1, 2 e 7) e pela fila de matéria-prima que este
documento já guarda mais abaixo — cada bloco de lá nasceu de um erro real na tela dele, que é o
que a aula precisa ter. Senha: **"Montar a aula"**.

**3. Montgomery Inglês — projeto novo (ideia).** *"Duas coisas que quero aprender: Montgomery Code,
e melhorar meu inglês."* Fica registrado como **ideia**, não como obra iniciada.

*O que já se sabe sem construir nada:* o inglês dele não precisa de mais um aplicativo de repetição —
ele já tem um professor que conversa em inglês o dia inteiro e conhece o vocabulário da vida dele
(merge, push, deploy, ship — a Camada 2 do Code já ensinou essas quatro palavras **em inglês**, sem
que ninguém chamasse aquilo de aula de idioma). O caminho mais barato e mais provável de durar é
**o inglês entrar no que ele já faz**, não virar uma décima terceira aba: os termos técnicos que
aparecem no trabalho, e talvez uma seção no OS quando houver matéria acumulada.

**RESPONDIDO por ele no mesmo dia:** *"sobre inglês no Montgomery Code você tem razão, unir dois
conhecimentos em um só lugar."* **O inglês é camada do Montgomery Code, não aba nova.** Não abrir
projeto "Montgomery Inglês" separado. Senha: **"Acender o inglês"** — e agora ela já sabe onde mora.

*Sobre o Obsidian, ele acrescentou:* o vídeo falava do **Claude integrado dentro do Obsidian**, e
**ele mesmo quer pesquisar melhor antes**. Fica esperando decisão dele — não construir nada, não
insistir. O que já está honestamente esclarecido: existem dois caminhos diferentes com o mesmo nome.
**(a) O Claude Code lendo e escrevendo a pasta do Obsidian** — é só uma pasta de `.md` no
computador; funciona hoje, sem instalar nada, sem custo além do que ele já paga.
**(b) Um plugin de IA dentro do Obsidian** — a conversa acontece na janela do Obsidian, é bonito,
mas em geral pede chave de API própria, com conta e cobrança por uso separadas. A diferença que
importa para o bolso dele é essa, não a tela.

---

---

## Ideia viva — o Vitruviano como o lugar único (30/07/2026)

**Não é obra, é ideia.** Registrada no dia em que ele fechou que a Árvore fica só no OS, e nasce
justamente daí. Palavras dele:

> *"Futuramente este vitruviano que já contém a árvore, vamos utilizá-lo, e a partir dele teremos
> tudo em um lugar só. A partir dele teremos tudo."*

**A premissa está certa — conferida no código, não suposta.** O Vitruviano já é o lugar onde as
camadas se sobrepõem no mesmo corpo. Hoje ele tem três interruptores lado a lado
(`os/index.html:1302`): **Pontos**, **Árvore da Vida** e **Inverter visão**, mais os chips dos
meridianos logo abaixo. A Árvore já acende **sobre** o corpo (`mfToggleArvore`, `os/index.html:4672`).
Ou seja: a peça que ele está imaginando não precisa ser inventada — ela já existe e já funciona.
O que a ideia propõe é **promovê-la a porta de entrada**.

**O que muda de figura para porta.** Hoje o Vitruviano é uma tela que você visita. Na ideia dele,
é de onde tudo parte: você chega no corpo, e cada coisa que o OS sabe — osso, meridiano, ponto,
órgão, Sefirá, Elemento, vértebra — é uma camada que acende ali, em vez de morar numa aba separada
que você precisa lembrar que existe.

**Por que isso conversa com a decisão de hoje.** A Árvore não vai para a Clínica; ela fica no OS.
Esta ideia diz para onde a energia vai em vez disso: **aprofundar o lugar único** em vez de
espalhar cópias. É o contrário de duplicar — é concentrar.

**E é possivelmente o chão que a teia estava procurando.** A teia ficou dormente esperando
responder *onde ela mora*. Se tudo se acende a partir do mesmo corpo, a corrente
dedo → meridiano → órgão → emoção → Sefirot teria um lugar natural para ser percorrida: o próprio
Vitruviano. **Não decidir isso agora** — mas quando a conversa do chão acontecer, esta ideia entra
na mesa. Senha: **"O chão da teia"**.

### Respondido por ele no mesmo dia — a visão de costas é a visão certa

**Decidido:** a Árvore mora na **visão de costas**, e é a visão natural desse conjunto. A razão é
dele, e é geométrica antes de ser mística:

> *"Assim dá para visualizar Chokmah à direita do cérebro — assim você se imagina dentro da árvore,
> dentro do vórtice, dentro da energia divina."*

**Por que a geometria dá razão a ele:** quando a pessoa está de costas, os lados **coincidem** — a
direita dela cai à direita de quem olha. Chokmah desenhada à direita é, de fato, o hemisfério
direito. Na visão de frente tudo se inverte, e a mesma Árvore passaria a apontar o lado errado do
corpo. Não é preferência de gosto: de frente, sem correção, **o desenho mentiria**.

**A solução que ele deu, e que fecha o problema antigo:** ao lado do *Inverter visão*, um botão
para **girar a Árvore junto**. Assim os dois propósitos coincidem em vez de brigarem — o corpo vira,
a Árvore vira com ele, e Chokmah continua no hemisfério direito real em qualquer visão. Isso resolve
o detalhe conhecido desde 13/07 (*"a Árvore não espelha na visão de frente"*), que até hoje estava
anotado como defeito sem conserto escolhido.

### O verdadeiro sonho, dito por ele (30/07/2026)

> *"A ideia do Vitruviano em um lugar único, hoje sim. Mas futuramente posso ter a ideia de desejar
> vê-lo na Clínica — e quem sabe, ao invés da aba Diagnóstico ser daquela forma, por que não ver
> apenas o Vitruviano com a Árvore e toda a teia ligada a ele? Este era o verdadeiro sonho."*

**Isto não contradiz a decisão de hoje, e é importante entender por quê.** O que foi barrado em
30/07 foi **uma segunda árvore**: copiar a do OS para a Clínica, ou desenhar outra a partir das
sessões — duas verdades que divergiriam. O sonho é o oposto disso: **um corpo só, um mapa só**,
aparecendo nos dois lugares porque é o mesmo. É exatamente a regra *"não copiar, extrair"* levada
até o fim.

**O que ele está descrevendo é a aba Diagnóstico deixar de ser formulário e virar corpo.** Hoje o
Diagnóstico é uma sequência de caixas que ele preenche. No sonho, é o Vitruviano com a Árvore, e a
teia acesa sobre ele: marca o pulso, acende o fio; toca a vértebra, acende o que ela puxa.

**Continua sendo ideia, não obra.** Nada disso começa sem ele mandar. Mas fica escrito porque é
a primeira vez que o destino aparece inteiro — e porque explica todo o resto: a teia dormente
esperava um chão, e o chão tem nome.

### O que ainda não foi decidido

Se as abas atuais viram camadas do Vitruviano ou continuam existindo ao lado dele. Ele inclinou
para camadas **na Clínica** (*"ao invés da aba Diagnóstico ser daquela forma"*); no OS, não disse.
Pergunta para quando acender.

---

## Próximo — a prateleira precisa das primeiras linhas dele

A aba está de pé e **nasce vazia de propósito**: nenhum produto vem de fábrica ali. O próximo
passo não é código, é dele — abrir *Suplementos › Onde comprar*, escolher o magnésio, escrever a
primeira linha (bisglicinato, a loja, o link, o que vem no frasco) e conferir se o painel do
mineral acende embaixo da dose. Se ele tiver código de afiliado do Mercado Livre ou da Amazon,
o link já entra com o código dentro e a caixinha marcada.

Depois disso, e só depois, vale investigar a **OneDrop/dropshipping** — que continua sendo outra
coisa: não é campo de link, é loja inteira (frete, pedido, rastreio, devolução) e depende de
contrato + porta técnica deles.

---

## Matéria-prima para aulas do Montgomery Code — a janela dos agentes (30/07/2026)

A janela em que o Ronda nasceu ensinou mais coisa do que coube na Camada 7. Cada bloco abaixo é
**uma aula esperando ser escrita**, com a metáfora já achada e a prova real já vivida — não é
teoria de livro, é coisa que aconteceu na tela dele. Escrever uma de cada vez, no ritmo dele.

**Uma observação que virou regra:** este arquivo agora tem dois leitores — o Montgomery e os
agentes. O Ronda lê só as 60 primeiras linhas. Por isso este catálogo mora aqui embaixo e não lá
em cima: *onde a coisa fica no arquivo passou a importar.* Isso, sozinho, já é uma aula.

### 0-bis. A rede embaixo do trapézio — por que se testa (nasceu em 03/08/2026)
**Camada 2 ou 3, e cabe logo depois da Aula 1.8 (a peça que não solta).** O trapezista voa igual
com rede e sem rede — a diferença é o que acontece quando ele erra. A aula tem a prova real já
vivida: quebramos a Clínica de propósito (uma função renomeada, um `=` a menos) e a conferência
acusou as três falhas pelo nome, em um segundo. Os dois pontos que a aula precisa carregar:
(1) **teste é a permissão de mexer** — sem rede, refatorar é coragem; com rede, é trabalho;
(2) **rede não testada é decoração** — a primeira coisa que se faz com uma rede nova é quebrar
alguma coisa de propósito para ver se ela grita. E a metáfora do `vm.Script`: dá para ver que
falta uma palavra na receita **sem sujar panela**.

### 0. Onde eu estou de pé — o `cd` (dúvida real dele, 01/08/2026)
**Camada 2, e provavelmente antes de tudo.** Ele perguntou, com todas as letras: *"sempre tenho
dificuldade aonde eu rodo este comando, aonde em qual arquivo devo estar para rodar este comando"*.

A confusão não é de terminal — é de **categoria**: ele procura um *arquivo* onde o comando se
digita. Comando não mora em arquivo. Arquivo é papel, guarda coisa escrita; comando se dá **numa
sala**, e a sala é o terminal.

**A metáfora que funcionou:** o terminal está sempre **parado em alguma pasta**, como quem está de
pé em algum cômodo da casa — e isso é invisível, o que é exatamente a causa da dúvida. Daí as duas
maneiras de falar: **endereço curto** (`rm -rf node_modules` = "apaga a caixa *daqui*", depende de
onde você está) e **endereço completo** (`rm -rf "C:/.../agentes/node_modules"` = "apaga a caixa
daquele quarto, naquele andar, naquela casa", não depende de nada).

Ensina: `cd`, `pwd`, caminho relativo vs. absoluto, e por que os comandos que eu entrego vêm sempre
com o endereço inteiro e num bloco com botão de rodar — para ele nunca precisar saber onde está de
pé. **A prova real:** foi apagando os 291 MB do `node_modules` do Ronda que a dúvida apareceu.

---

### 1. Agente não é chat — a diferença das mãos
**Camada 7.** Chat responde; agente vai lá e faz. A diferença não é inteligência, é **ferramenta**.
Prova viva: o Ronda estendeu a mão cinco vezes (`Read`, `Read`, `Grep`, `Read`, `Read`) sem
ninguém dizer *como* — só *o que*. Ele escolheu os passos sozinho.

### 2. Cada agente tem a própria janela, minúscula e descartável
**Camada 7.** A dúvida veio dele: *"meu Claude funciona com janelas, e o agente depende das
janelas também?"* Não. Cada corrida do Ronda nasce em branco, vive vinte segundos e morre — não
come da conversa longa, não precisa de ninguém olhando.
**O outro lado, que é o mais importante:** como ele nasce em branco, ele **não sabe de nada**.
Não sabe da Clínica, não sabe das senhas. Só sabe o que está no `systemPrompt` e o que lê nos
arquivos. Daí a virada: *o ROADMAP era memória para o Montgomery; virou memória para os agentes.*

### 3. As três travas — cadeado, teto e cerca
**Camada 7 / Camada 6 (Segurança).** Já está resumido na aula acesa, mas merece bloco próprio,
porque é o que separa brincar de trabalhar:
`allowedTools` é **cadeado, não promessa** — sem `Write` na lista o agente não consegue escrever
nem querendo; `maxTurns` é **teto** — impede o agente confuso de girar a noite queimando tokens;
`cwd` é **cerca** — ele enxerga daquela pasta pra baixo e mais nada do computador.

### 4. O preço mora no tamanho do que se abre
**Camada 7.** A aula mais cara e a mais útil. "Leia o ROADMAP" custou US$ 0,1706 porque o arquivo
tem 207 KB e o agente o abriu em quatro pedaços. "Leia apenas as primeiras 60 linhas" custou
US$ 0,0508 — **3,4x mais barato**. E, o que ninguém espera: a resposta barata ficou *mais correta*,
porque a cara listava itens deduzidos das seções de Concluído.
> Agente caro costuma ser sintoma de pedido vago.
Vale ligar isto ao `index.html` da Clínica: um agente que abrir aquele arquivo inteiro gasta numa
tacada o que o Ronda gasta em cem corridas. O caminho é ensinar a **procurar** (`Grep`) em vez de
**abrir** (`Read`) — e essa é a semente da senha "Acender o Vigia".

### 5. Ligado 24 horas não é o que as pessoas pensam
**Camada 3 (Servidor & nuvem) ou 7.** Três jeitos, não um: sob demanda (o Ronda hoje), por relógio
(acorda, faz, dorme) e sempre ligado (queima o tempo todo — esse ninguém quer).
Um agente por relógio **não é um funcionário: é um despertador com mãos**. A conta não é "quanto
custa deixar ligado", é *quantas vezes por dia × quanto custa cada corrida*.
Registrar junto a decisão dele de **não** pôr relógio no Ronda, e a razão: as ideias vêm sem que
ele pense nelas.

### 6. Credencial é do programa, não da pessoa
**Camada 6 (Segurança).** O SDK trouxe o próprio Claude Code embutido, com login separado do
aplicativo — daí o "Not logged in" na primeira corrida, mesmo com ele logado no Claude do dia a
dia. Aula boa sobre por que cada programa guarda a própria chave, e por que login é sempre passo
dele, nunca do Claude.

### 7. Conflito de merge não é erro — é o Git se recusando a adivinhar
**Camada 2.** A Camada 2 já explicou conflito em teoria; nesta janela aconteceu um de verdade, no
`.gitignore`: os dois lados escreveram no fim do mesmo arquivo. A resolução foi trivial (queria os
dois), mas o valor da aula é o susto que não veio. Vale mostrar o texto cru com
`<<<<<<<`, `=======`, `>>>>>>>` e traduzir cada marca.

### 8. Trabalhar com o `main` sujo sem estragar nada
**Camada 2.** O `main` local dele vive com seis arquivos modificados e vários soltos, de outras
sessões. A aula é a disciplina: commitar **só o arquivo necessário** (`git commit .gitignore`),
nunca `git add -A` no main. Casa com a aula do ramo e do encontro (OS v5.1).

### 9. O peso invisível — 291 MB que quase entraram no repo
**Camada 2 / Camada 4.** As peças baixadas do agente pesam 291 MB e foram barradas no `.gitignore`
minutos antes do commit. Mesma família do `config` de 3,6 MB do MMObras e da foto seis vezes na
Clínica. A pergunta que fica como hábito: *o que estou prestes a subir, e quanto pesa?*

### 10. As peças não viajam pelo git — a receita, não os ingredientes
**Camada 2 / Camada 7.** Aconteceu minutos depois do merge: o Ronda subiu para o `main` e não
rodou — `ERR_MODULE_NOT_FOUND`. O código chegou; os 291 MB de peças, não, porque estão barrados
no `.gitignore`. Um `npm install` e ele andou.
A imagem: **o git guarda a receita, não os ingredientes.** O `package.json` é a lista de compras;
o `npm install` é ir ao mercado. É por isso que dá para trocar de computador sem carregar peso —
e é por isso que um repositório limpo é leve. Fecha o arco com a aula 9.

### 11. Stand by, hibernar e a diferença entre continuidade e espaço
**Camada 7.** Pergunta dele: *"o agente pode ficar em stand by?"* Pode, e sai de graça — programa
parado não pensa, e o que custa é pensar. Vale inclusive para a conversa: uma janela aberta e
sem uso não gasta nada.
**A ressalva:** stand by de agente não é mente cochilando, é **ratoeira armada**. Ao acordar ele
está em branco e só sabe o que estiver escrito nos arquivos — daí o `CLAUDE.md` importar tanto.
**A descoberta útil:** `claude --continue` retoma a conversa exatamente de onde parou, mesmo dias
depois, com custo zero no intervalo. Mas **retomar restaura, não aumenta** — janela quase cheia
volta quase cheia. Duas paredes diferentes, duas ferramentas: `--continue` resolve "fechei e
perdi"; senha + ROADMAP + CLAUDE.md resolvem "encheu".

### 12. O arquivo que faz a conversa não começar do zero
**Camada 7 / Camada 2.** O `CLAUDE.md` na raiz é lido por qualquer Claude que abrir o repositório
— aplicativo, terminal, navegador, celular. Antes dele, só a memória deste computador sabia quem
era o Montgomery; no celular o Claude começava cego. Aula sobre a diferença entre **memória
pessoal** (fica na máquina) e **contexto do projeto** (viaja junto com o código).

### 14. Empate é decisão (Clínica v8.3, 02/08/2026)
**Camada 4 (dados).** A queixa dele foi *"salvo no celular, não bate no computador"* — e a
primeira suspeita de qualquer um seria sincronismo. Não era: o banco tinha tudo. O erro era
**escolher qual dos seis encontros do mesmo dia mostrar**.

Ordenar por data parece resolver, mas seis registros com a mesma data **empatam**, e no empate a
ordenação devolve a ordem em que os dados chegaram — no caso, o encontro mais antigo do dia.
A tela mostrava o desenho da manhã com fidelidade absoluta, e por isso parecia mentira.

**A imagem:** ordenar é pôr em fila. Quando dois têm a mesma senha, alguém decide — e se você não
disser quem, o acaso diz. **Todo `sort` por data tem um segundo critério escondido; ou você o
escolhe, ou ele escolhe por você.**

**A prova real:** as mesmas 20 pessoas nos dois registros, mas três delas em fileiras diferentes.
E o diagnóstico só apareceu porque se foi olhar o **banco**, não o código — a suspeita errada
(sincronismo) teria custado horas.

---

### 13. Peneirar na porta, e não em cada janela (Clínica v8.1 e v8.2, 02/08/2026)
**Camada 4 (dados) / Camada 1.** A imagem é de casa: dá para tirar o sapato sujo em cada cômodo,
ou pôr um capacho na porta de entrada. A v8.1 tirou o sapato numa sala — o painel do Diagnóstico
passou a ignorar um nome que saiu do banco. A v8.2 descobriu que o mesmo pé sujo entrava por
outras quatro portas, uma delas o **papel impresso na frente do paciente**.

A virada é conceitual e vale para tudo: **o dado guardado no aparelho não é o mesmo dado que
veio do banco.** Ele tem a mesma cara, mas foi escrito ontem, por uma versão do programa que já
mudou. Por isso o rascunho agora é peneirado **na entrada**, pelo formato — lista entra em lista,
registro em registro — em vez de ser conferido em cada tela que o usa.

**A prova real, e é a melhor parte:** o buraco só apareceu quando se inventou um dado *errado* de
propósito — um elemento chamado "Plutônio". Teste com dado certinho não acha nada, e teste que
não acha nada foi mal feito.

---

## Ideia viva — a terceira aba de Suplementos: o link de onde se compra (30/07/2026)

*"Futuramente quero expandir nos suplementos, por exemplo quero ver se faço parceria com empresas tipo mercado livre e a amazon onde eu teria uma aba para adicionar os links de certos suplementos. No meu ver penso SUPLEMENTOS/MINERAIS/Dropshipping sistema da OneDrop."*

**A forma que ele já viu.** Suplementos com três abas: *Produtos* · *Minerais* · **Dropshipping**. As duas primeiras nasceram em 30/07 (v5.2). A terceira é o passo seguinte, e a arquitetura já está pronta para recebê-la: é só mais um `.pg-panel` na mesma barra de abas.

**O que a aba nova resolve.** Hoje a régua diz *quanto* e *qual sal* — e para aí. A pessoa sai do atendimento sabendo que precisa de 400 mg de bisglicinato e vai procurar sozinha, no escuro, onde o óxido é o que mais aparece na prateleira. A aba de links fecha o último vão: **do mineral indicado até o produto certo, comprável.**

**Duas coisas diferentes dentro da mesma ideia, e é bom não confundir:**

1. **Link de afiliado** (Mercado Livre Afiliados, Amazon Associates). Ele não estoca nada, não entrega nada: só indica, e recebe uma porcentagem se a pessoa comprar por aquele link. Barato de montar — é um campo de texto por produto, mais o código de afiliado dele. Cabe hoje na plataforma sem depender de ninguém.
2. **Dropshipping / OneDrop.** É outro bicho: o pedido é feito na loja dele, e quem separa, embala e envia é o fornecedor. Isso não é um campo de link, é uma **loja** — catálogo, preço, frete, pedido, rastreio, devolução. Depende de contrato com o fornecedor e de uma integração de verdade (API ou painel deles). Vale investigar o que a OneDrop oferece de porta técnica antes de prometer tela.

**O caminho barato primeiro.** A aba nasce como a régua nasceu: uma linha por produto, tudo escrito por ele. Nome do produto, mineral e forma a que corresponde (o elo com a régua), loja, link, e a dose que vem no frasco. Aí o painel do magnésio bisglicinato passa a mostrar, embaixo da dose escolhida, **onde comprar exatamente aquilo**. E o produto que ele já vende no catálogo *Produtos* aparece do lado do link de fora — ele vê na mesma tela o que tem em casa e o que precisa mandar buscar.

**Uma linha de cuidado, dita agora para não doer depois.** No instante em que uma recomendação a paciente carrega um link que remunera quem recomendou, isso deixa de ser só técnica e passa a ser ética profissional: o certo é que apareça escrito na cara, para o paciente, que aquele link é do terapeuta. A plataforma pode e deve dizer isso sozinha, no rodapé da recomendação. Fica registrado aqui como parte do desenho, não como pedra no caminho.

**Depende de:** a régua dos minerais (feita, v5.2) e a posologia da fitoterapia (senha *"Acender as Ervas"*) — porque as ervas vão querer o mesmo link.

---

## Ideia viva — a Ortomolecular: quanto, de qual e por quê (30/07/2026)

Senha para a próxima janela: **"Acender o Magnésio"**.

*"Teria como criarmos algo, por exemplo, de acordo com a desarmonia da pessoa, sabermos a quantidade em miligramas e as quantidades diárias, por exemplo de magnésio, que ela necessita — e qual o tipo de magnésio: dimalato, treonato, citrato, bisglicinato, quelato. Me parece que são 12 tipos. E até mesmo a fitoterapia, que me parece que já está criada para a plataforma Clínica."*

**Duas camadas, e a segunda já existe pela metade.**

1. **Os tipos de magnésio.** Não é um mineral, são doze sais — e cada sal vai a um lugar diferente: o **treonato** atravessa a barreira do cérebro, o **dimalato** entra no ciclo da energia muscular, o **bisglicinato** é o mais tolerado pelo intestino, o **citrato** é o que solta, o **óxido** quase não absorve e é o que mais se vende. Escolher errado o sal é tomar magnésio e não receber magnésio. A ficha de cada um: absorção, alvo, o que a desarmonia pede, o que atrapalha.
2. **A fitoterapia.** `fitoterapia-data.js` já vive na Clínica com cerca de 30 ervas clássicas de MTC — sabor, natureza, meridianos, ações, indicações. O que **não** tem é posologia. É o mesmo buraco do magnésio, no outro lado da estante.

**A ponte já está construída e ninguém tinha reparado.** O bloco dos Átomos (OS v4.9) já diz, do magnésio: *"a falta aparece como cãibra, tensão e insônia: não é o encolher que falha, é o soltar"* — e já o acende como **Madeira** na teia. Ou seja: a teia já sabe ir da queixa ao elemento e do elemento ao mineral. Falta o último degrau, que é a quantidade.

**Como ele quer que funcione (emenda de 30/07).** Nada de a máquina calcular sozinha. **Quantidades de praste — preset — escolhidas a clique**, e um lugar onde ele mesmo acrescenta as que faltarem. Cada mineral com sua régua de doses prontas (por exemplo 200 / 300 / 400 / 600 mg), toque numa e está escolhida; e um campo "outra quantidade" que entra no banco e passa a aparecer na régua da próxima vez. A dose escolhida gruda na ficha da pessoa, com a data.

**E para todos os minerais, não só o magnésio.** Fósforo, zinco, cálcio, ferro, potássio, sódio, iodo, cobre, selênio, cromo, manganês, molibdênio. Os quatorze elementos do corpo já estão listados no bloco dos Átomos com percentual e ponte clínica — a régua de doses é a camada que se assenta em cima dessa lista, e o magnésio, com seus doze sais, é só o primeiro a ser aceso porque é o mais ramificado.

**Onde mora — decidido por ele (30/07).** Na **Clínica**, dentro de **Suplementos**, que hoje é uma página só: catálogo com produto, fornecedor, preço e estoque. A página ganha **abas internas** — *Produtos* (o que já existe, intacto) e **Minerais** (a régua de doses, que nasce vazia e vai sendo preenchida por ele, um mineral de cada vez). A receita das abas já está pronta na casa: é a mesma da Numerologia (OS v4.1) e da Astrologia. Faz sentido também porque é em Suplementos que a venda acontece: o mineral que ele indica e o produto que ele vende passam a morar na mesma página, e um dia se olham.

**A fronteira honesta fica resolvida por aí.** Os números são dele, entram por ele, são editáveis por ele — a plataforma é a gaveta e a régua, não o prescritor. Nenhum miligrama nasce inventado por máquina. Onde ele não tiver posto valor ainda, a régua fica vazia dizendo que está vazia, em vez de chutar.

---

## Aberto — Senha "Nunca o relógio decide" (29/07/2026)

Na mesma noite da v9.26, a regra de sincronismo cobrou o preço. O MMObras decide pelo relógio (`db._ts`): quem tem a marca mais recente vence e **substitui o outro sem perguntar**. O computador entrou primeiro, o relógio dele marcou 21h10 — os dois aparelhos tinham acabado de bumpar o `_ts` com o enxugamento das fotos — e publicou a versão mais pobre por cima. A nuvem foi de **16 fornecedores / R$ 16.490,76** para **12 / R$ 15.200,76**, e o celular, entrando depois, puxou a versão pobre e perdeu o próprio trabalho.

O Montgomery é precavido e tinha backup do dia; nada se perdeu de fato. Mas o app não deu aviso, nem pergunta, nem escolha — e isso, para lançamento de dinheiro de obra, é inaceitável.

**Como a noite terminou (21h33):** o Montgomery subiu o próprio backup e disse a palavra final — **R$ 16.490,76 é o valor correto** (16 fornecedores, 29 lançamentos, soma das contas 14.555,15, 6 orçamentos). O Orçamento #0005 do Adson (1.850,00) saiu junto, por não existir no arquivo dele; decisão dele, registrada. Depois de reabrir o app, o enxugamento rodou de novo sobre a foto que o backup trouxe gorda: a linha na nuvem fechou a noite em **1.319 kB** (foto 92 kB, avatar 34 kB), com os lançamentos intactos.

**Detalhe a corrigir junto com a senha:** dois avisos disparam ao mesmo tempo na entrada e o "Backup na nuvem ativado!" cobre o do enxugamento — o Montgomery achou que não tinha rodado. O aviso do enxugamento tem que vir por último.

**O que a senha constrói:** antes de substituir, o app pergunta, mostrando os dois lados em português claro — *"neste aparelho: 16 fornecedores, R$ 16.490,76 · na nuvem: 12 fornecedores, R$ 15.200,76 — qual vale?"* — e ele escolhe. Vale para `cloudPull` e `cloudCheck`. Relógio nunca decide sozinho sobre dinheiro.

---

## Visão de longo prazo — "Bússola Holográfica" (círculos concêntricos)

Visão do Montgomery pra evoluir o Bagua: ao invés de só Acupuntura, a roda terá **4 círculos concêntricos**, cada um um módulo terapêutico, todos atualizando o mesmo boneco central — vértebras/sintomas da Quiropraxia/Seitai enriquecendo o boneco, temas de Psicanálise (Édipo, abusos, culpa, medo, vergonha) clicáveis, e Fitoterapia/Florais/Suplementos organizados pelos 5 Elementos. Reiki/Chakras como módulo oculto (toggle em Configurações), e uma futura camada de Árvore da Vida (Kabbalah) conectando às emoções/meridianos já mapeados. Documentação completa da visão em `bagua_visao_prompt.md` e `Bussola_Holografica_Genesis.md` (não versionados no git, só locais).

**Status:** Círculo 1 (Acupuntura) pronto. Retomar dizendo só "Bagua" pra seguir com o Círculo 2 (Quiropraxia/Seitai).
- Meridianos Mágicos: localizados nas páginas 15-19 do `apostila-meq-completa-202320.pdf` (8/4/12 Meridianos Mágicos, Conversão de Meridianos) — ainda não estruturado como dado, texto saiu embaralhado na extração automática e precisa ser conferido com calma página por página antes de virar conteúdo na plataforma.
- **Alinhamento por desenho (30/06):** Montgomery trouxe um esboço próprio detalhando a evolução do Círculo 1 (núcleo=boneco → 1ª camada=5 Elementos → órgãos/vísceras → síndromes/tratamento) e como Quiropraxia/Psicanálise podem compartilhar os mesmos nós anatômicos em vez de ficarem em círculos isolados — registrado com detalhe em `bagua_visao_prompt.md` (seção "Atualização 30/06"), incluindo pontos a confirmar com ele antes de estruturar. Também: possível rebatismo de "Bagua" pra **"Matriz Vitruviana"**, e pedido novo de um espaço de **Pulso e Língua** ao lado da Auriculoterapia no Diagnóstico Integrado (pulso com tipos clicáveis tipo síndrome; língua com PDFs que ele vai adicionar) — aguardando ele subir o material de língua/pulso, ou autorizar uso de conhecimento geral de MTC onde não houver PDF do curso.

---

## Em planejamento

### 0. Módulo de Psicanálise — a maior frente do projeto (decidido 30/06)
Montgomery confirmou: quer o módulo de Psicanálise o mais completo possível — estrutura do aparelho psíquico (id/ego/superego), mecanismos de defesa, "O Mal-Estar na Civilização", e tudo mais que a coleção de Freud trouxer de relevante — tudo clicável, mesmo padrão dos outros módulos (clica → vai pra ficha do paciente → aparece no resumo e no PDF impresso). Ele disse textualmente: "acredito que esta é a parte maior do sistema".

**Fonte real (30/06):** não foi encontrada uma "coleção do Freud" em PDF nem no Dropbox nem no Google Drive do Montgomery. Em vez disso, achamos algo melhor: **`AAPsicanálise Clínica/` no Google Drive (`G:\My Drive`)** — curso completo "Formação em Psicanálise Clínica", 12 módulos em PDF + pastas "Livros" e "História e Fundamento" por módulo. Fonte estruturada e completa, mesmo padrão de curso já usado em Acupuntura/Quiro.

**Acesso a Drive/Dropbox (30/06):** ambos sincronizam como pastas locais comuns no PC do Montgomery (`G:\My Drive` e `C:\Dropbox`) — leio direto de lá, sem precisar copiar nada pro repositório do projeto antes.

**Plano de execução:**
1.  Módulo 1 lido e rascunhado: `PROPOSTA_PSICANALISE_MODULO1.md`
2.  Módulo 2 lido (Teorias do Aparelho Psíquico + Histeria + Neuroses + Transferência/Resistência)
3.  **IMPLEMENTADO (29/06):** módulo completo no Diagnóstico Integrado — 6 categorias, 26 itens clicáveis, busca em tempo real, PDF com agrupamento por categoria, salvo no Supabase. Commit `da989d2`, publicado no Vercel.
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

---

## Pendências / decisões em aberto

-  **Resolvido (27/07):** `suplementos_schema.sql` já foi rodado — as tabelas `suplementos` e `vendas_suplementos` existem e estão ativas no Supabase.
-  **Resolvido (27/07) — RLS da tabela `despesas`:** conferida no projeto `montgomery-clinica`. RLS **ligada, com 1 policy — exatamente igual às outras 9 tabelas** (configuracoes, diagnosticos, diplomas, mmobras_backup, pacientes, prescricoes, sessoes, suplementos, vendas_suplementos). Nada a fazer. Nota do advisor de segurança: 2 avisos menores em aberto — `search_path` mutável na função `arquivar_pacientes` e proteção de senha vazada (HaveIBeenPwned) desligada no Auth; ambos só passam a importar quando o Login com Google entrar.
- Expandir "Pontos do Corpo" com mais regiões conforme a prática pedir
- **Resolvido (30/06) — Recomendação/Diagnóstico: cartão "mudava de formato" toda hora.** Causa real: o cartão usava `max-width:640px` em vez de largura fixa, então o tamanho final do JPG dependia da tela de quem gerou (celular = apertado, desktop = esticado e com espaço vazio). Trocado para `width:420px` fixo nos dois (Recomendação e Diagnóstico) — agora a imagem fica sempre com a mesma proporção, em qualquer aparelho.
- ** Resolvido (01/07) — cartão exportado saía com "abas laterais".** O `html2canvas` capturava o container `rxPrevC` inteiro (mais largo que o cartão de 420px) em vez de capturar só o cartão. Corrigido: agora captura `el.firstElementChild` (o cartão em si), sem margem. Commit `8544e3e`.

---

---

## Mega Advanced Roadmap — Montgomery OS (anotações do Montgomery)

### Calculadora de IMC + Recomposição Corporal —  FEITO (06/07)
- OS (Nutrição): IMC + faixa/semáforo + faixa de peso saudável + metas de proteína (1,6–2,0 g/kg) e gordura (0,9 g/kg) computadas do peso; guarda altura por perfil e puxa último peso dos Sinais Vitais.
- Clínica (Diagnóstico Integrado): IMC + faixa + peso saudável — ferramenta rápida de consulta.
- Futuro possível: % gordura e massa magra quando houver bioimpedância. (Pedido em 05/07.)

### Limpeza de ícones "antigos" (emoji → SVG linha fina) —  FEITO (06/07)
- Mapa do Sistema agora usa `MOD_ICON` (24 SVGs de linha fina, dourado) — zero emoji.
- Pendente menor: varrer o resto do app por emojis remanescentes em outros títulos/conteúdos.

### Próximos galhos da Fase 2 (já combinados)
- Oftalmologia Integrativa (esposa — olho único, PIO, DGM, triquíase)
- Hormônios (painel masculino/feminino, radar)
- Preencher as síndromes clínicas das Sefirot na Árvore da Vida


---

---

## Ideia (05/07/2026) — Árvore da Vida: o mapa vivo do vitruviano de costas
**Projeto:** Árvore da Vida / Montgomery OS · **Estágio:**  fruto (visão madura, a construir)

A imagem central que Montgomery imagina e NÃO acha na internet:
- **Vitruviano DE COSTAS** — para fazer jus ao lado direito do cérebro conectado a **Chokmah** (o lado do desenho = lado real do corpo).
- **Cascata de correspondências** que se acendem em cadeia ao clicar:
  **5 Elemento → Sefirá → Órgão → Parte do corpo → (ponto, emoção, patologia...)**
  Ex: Água → Binah/Yesod → Rim → lombar/ossos/orelhas → medo → ponto R3...
- Estética: geometria sagrada + futurístico (blueprint neon azul/verde, grid, flor da vida), reversível com o modo SVG limpo ([[anatomia-visual-os]]).
- Referências que ele curte mas não bastam: vitruvianos com árvore da vida, yin-yang, blueprint neon (istock/freepik) — falta a INTEGRAÇÃO das correspondências clicáveis.


---

---

## Ideias (05/07/2026) — Metafísica + Numerologia + Proporção exata

**1. Proporção vitruviana EXATA** (feedback, não ideia nova)  broto
O esboço da árvore/vitruviano deve seguir a geometria de Da Vinci ao pé da letra: homem inscrito no QUADRADO (centro nos genitais) e simultaneamente no CÍRCULO (centro no umbigo), razões áureas (φ). A árvore da vida dentro do círculo, o corpo dentro do quadrado. "É matemático" — nada arbitrário. Cor azul-blueprint aprovada.

**2. Mapa numerológico**  semente
Numerologia do nome + data de nascimento (10/01/1976). Já existe base: arquivo `Montgomery Numerológico.docx.pdf` no repertório — partir dele. Sistemas: pitagórico + cabalístico (gematria hebraica das letras).

**3. Cálculo de encarnações (Kabbalah)**  semente
Montgomery lembra que existe um cálculo de "quantas encarnações já tivemos" — conceito de GILGUL NESHAMOT (ciclo/reciclagem de almas). Métodos usam gematria da data/nome. TAREFA: pesquisar as fontes (não lembra onde viu) — tratar com transparência: sistema simbólico/hermético tradicional, não fato empírico, mas catalogável como a tradição ensina.

**4. Banco de Metafísica**  semente
Expandir `arvore_vida_correspondencias.md` com camada metafísica: gematria, gilgul, numerologia, correspondências herméticas. "Só assim as coisas fazem sentido pra mim" — a metafísica é a linguagem-mãe do método dele.

**Contexto clínico que motiva tudo:** Montgomery recebe muitos pacientes mandados OPERAR a coluna quando precisam é de alinhamento integrado (nutricional + ósseo + emocional + energético). A Árvore da Vida é a resposta à fragmentação da medicina.

---

---

## Ideias absorvidas do Gemini (MATRIZ-VITRUVIANA) — 05/07/2026
Diretriz: **Claude é o núcleo.** Sempre que Montgomery usar outra IA (Gemini etc.), Claude revisa o trabalho, extrai o bom e integra aqui. Nada se perde, sem frustração.

O Gemini teve a MESMA visão da Árvore (Coluna Lombar→Rim→Yesod) mas em stack complexa (Python/Streamlit/Firebase/Docker) que dependia do Montgomery virar engenheiro — por isso deu dor de cabeça. Ideias boas dele para o nosso caminho simples:
-  **Triagem clínica rápida — 3 perguntas-chave** (entra na anamnese digital)
-  **Sugestão automática de suplementos** (conecta armário + dados-clinicos.js + fitoterapia-data.js)
-  **"Prompt de Essência"** — perfil do terapeuta (já temos na biografia 00_Nucleo)
-  **"Lições da Estante"** — biblioteca de estudo (JÁ FEITO: 03_Biblioteca organizada)
-  **ALERTA SEGURANÇA — APURADO E ENCERRADO (27/07):** o alerta estava superdimensionado. Existem 3 arquivos de credencial no PC (`Backup\Gemini\serviceAccountKey.json` — projeto `montgomery-terapias`; `Desktop\Eu\GEmini\seu-arquivo-chave.json`; `Desktop\Projetos-App\app-montgomery-f67cbaad8477.json`), mas **nenhum está dentro de um repositório git** (as 5 pastas Gemini foram conferidas) e o `Files_Claude_repo` não rastreia nenhum arquivo de chave. **Não houve vazamento — as chaves nunca saíram do computador.** Higiene opcional a cargo do Montgomery: revogar no Firebase Console (Configurações → Contas de serviço), já que o projeto do Gemini não é mais usado. Risco real: baixo.

---

---

## Diretriz (05/07/2026) — Fibonacci em TUDO
Montgomery quer a organização em sequência Fibonacci (0·1·2·3·5·8·13·21) aplicada a TODOS os seus projetos e pastas — não só no repertório. É a assinatura estética/estrutural dele: exatidão + geometria sagrada. Padrão a adotar em qualquer novo projeto/estrutura.

---

## Bug a corrigir (registrado 05/07, NÃO mexer agora) — Financeiro pessoal da Clínica
Montgomery relata: o financeiro PESSOAL da Clínica (Montgomery OS / app clínica) não está coeso — ele lança alguns dados e eles SOMEM (não persistem). Investigar quando for a hora: provável problema de salvamento (localStorage/Supabase) similar ao que corrigimos no MMObras. Só anotado — organização hoje, correção depois.

---

---

## Novos projetos/rotas (05/07/2026)
-  **Montgomery Code** — aprender IT/programação do zero (Rota Aprender/Hod-Rafael). Ver [[montgomery-code]].
-  **Prosperidade** — investir, multiplicar dinheiro (Rota Chesed/Tzadkiel; base: contador 1993).
-  **Inglês** — reaprender, reassociando o idioma (trauma de Londres → conquista) na Rota Aprender.
-  **Rota da Vanessa** — ajudar a esposa/prima (1º Sgt PMMG, psicanalista, florais, sinestésica, artista de imagens/vídeos) a ter a IA e o painel dela. Ferramentas visuais (imagem/vídeo) + Claude para a rota de vida.
-  **Carta à Anthropic** — proposta de Plano para Casal (00_Nucleo/carta_anthropic_plano_casal.md, PT+EN prontas).

---

---

## Tarefa a fazer — organizar o Obsidian Vault (Rota Ordem)
Montgomery pediu (05/07) que Claude veja e organize o Obsidian dele em `G:\My Drive\Obsidian Vault` (Google Drive). NÃO usar o método PARA — Montgomery não se adaptou porque PARA é sistema de GAVETAS/categorias, feito para a mente de quem o criou. A mente do Montgomery funciona por CONEXÃO/rede, não categoria (átomo→planeta→sefirá→órgão). O Obsidian é ideal pra ele PORQUE é baseado em links/grafo. Criar um MÉTODO PRÓPRIO conectivo: notas ligadas por significado ([[ ]]), Árvore da Vida como espinha (áreas=sefirot conectadas pelos caminhos/rotas dos arcanjos), MOCs (mapas de conteúdo vivos), estrutura Fibonacci [[fibonacci-em-tudo]]. O grafo = espelho do cérebro dele. Fazer quando ele pedir (G:\My Drive\Obsidian Vault).

---

## Montgomery Code — TRILHA criada
Currículo completo em espiral Fibonacci: 01_Codigo/Montgomery_Code_TRILHA.md (Módulos 00→21: terminal → Python → Web → nuvem → Java). Pronto para a 1ª aula no próximo "Montgomery here" + Rota Aprender.

---

---

## Ideia (20/07/2026) — Pontos de acupuntura da Maly (Maly Care)

No app **Maly Care** (Netlify), criar uma camada de **pontos de acupuntura canina**
sobre uma **imagem mais realista de um Pastor Belga Malinois** (não esquemático) —
para atender a própria Maly. Espelha o que já existe na Clínica humana (361 pontos
nos meridianos), mas com o mapa de acupuntura veterinária do cão.
Fonte do app: `03_Biblioteca\Maly\deploy\`. Deixado para depois, sem pressa.

---

## Ideia (20/07/2026) — Foto da própria Maly no Maly Care

Futuramente, trocar a patinha (ícone/login) por uma **foto real da Maly** — ela é
uma Malinois linda, de colete "POLICE K9". Montgomery tem fotos dela. Usar como
avatar da tela de login e/ou como ícone do app. Por ora está a patinha estilizada
(azul da marca), já no ar em nimble-raindrop-1ff4fc.netlify.app.

---

## Ideia (20/07/2026) — Fotinha da Maly no cabeçalho da barra lateral

No Maly Care, trocar o avatar "M" do topo da barra lateral (ao lado de "Maly Care",
`aside .logo .av`) pela **foto redonda da Maly** que já está salva na ficha
(`db.paciente.foto`). Se não houver foto ainda, cai de volta na patinha. Assim ela
aparece no cabeçalho, não só na aba Ficha. (Pedido para DEPOIS, não urgente.)

- [ ] **Maly Care** — coco seco (casca) como abrasivo natural na aba Odontologia/Higiene: raspa tártaro nos caninos/molares; oferecer com moderação (gordura da polpa solta o intestino). Ideia do Montgomery em 20/07/2026, vendo a Maly descascar coco. Ensinar a Dra. Vera (IA) sobre isso.

---

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

9. ~~**Arvore e Vitruviano na Clinica.**~~ **RECOLHIDO em 30/07/2026.** A Arvore fica
   apenas onde ja esta: no Montgomery OS. O item inteiro (a parte da Arvore) foi para
   `Claude_Main_Clean/01_Codigo/prototipos/ARVORE_NA_CLINICA_plano_em_espera.md`.
   O **Vitruviano** nao foi recolhido — se um dia ele quiser o corpo na Clinica, a
   preocupacao de nao virar copia continua valendo, mas isso e outra conversa.

10. **App instalavel separado do OS.** Ja funciona: os dois manifestos existem e tem
    escopos distintos ("/" e "/os/"), entao o Windows trata como dois programas. Falta
    so ele instalar pelo menu do Chrome. Se o Chrome nao oferecer instalacao automatica,
    falta um service worker — meia hora, e da de brinde abrir sem internet.

**Ordem combinada:** 8 → toggles/caixas → pulso por posicao (busca dentro de cada
quadro) → quiropraxia completa → registro de sessao → ~~9~~ → ~~a teia~~.
*Em 30/07/2026 os dois ultimos sairam da fila: o 9 porque a Arvore fica so no OS, e a teia
porque ele mandou deixar dormente ate pensarem o chao dela. A fila termina no registro de sessao.*

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

Depois: quiropraxia completa -> registro de sessao + resumo na chegada -> ~~Arvore e
Vitruviano num arquivo so servindo OS e Clinica~~ -> a teia.
*(a Arvore saiu desta fila em 30/07/2026 — fica so no Montgomery OS.)*

---

## Ideia — o botão que guarda o que deu certo naquela pessoa (30/07/2026)

Dele, vendo os interruptores da tela de Configurações: *"deixar a plataforma com
meios de ter um campo ou um botão como estes botões que tenho na clínica em
configuração, ou clicáveis como na foto, de forma que ao ver que um mineral,
cálcio por exemplo, no cliente x pode ser bom para o coração sem excesso, na
quantidade exata, depois de termos certeza."*

São **duas coisas** dentro do mesmo pedido, e vale separar:

1. **A ligação por pessoa** — hoje a teia tem um andar só: mineral → Elemento,
   Meridiano ou tema. O que ele descreve é um segundo andar: *neste paciente,
   este mineral, nesta quantidade, funcionou para isto*. É a teia deixando de ser
   geral e virando memória de atendimento. O dado para isso já existe pela metade:
   a régua já grava `indicacao` com paciente, dose e momento — falta o que
   **aconteceu depois**, e é aí que entra o clique: *funcionou / não funcionou /
   ainda observando*, e daí para cima ele decide se aquilo vira ligação de vez.
   Casa exatamente com o que a v5.4 já faz com a repetição: a tela pergunta,
   nunca decide.
2. **O interruptor como vocabulário da casa** — o botão de ligar/desligar da tela
   de Configurações é o gesto mais rápido que a plataforma tem, e hoje ele só vive
   lá. Vale virar peça reaproveitável para qualquer lugar onde a resposta é sim ou
   não, em vez de caixinha de texto: confirmar uma proposta, marcar que uma dose
   se firmou, ligar e desligar um candidato.

Regra que continua valendo, e ele mesmo a escreveu neste dia: *"não quero jamais
ser absoluto em nada, sempre vamos fazendo como sempre fizemos"* — nada aqui
fecha sozinho, tudo entra a clique e sai a clique.

---

## Últimas entregas (o resto está no arquivo)

- Concluído — o diário emagreceu: 302 KB viraram 67 KB (01/08/2026)
- Concluído — a aula 2.6, o peso invisível (OS v5.9, 01/08/2026)
- Concluído — a aula 2.5 e o sotaque de Londres (OS v5.8, 01/08/2026)
- Concluído — a primeira aula montada de verdade: 2.4, conflito não é erro (OS v5.7, 01/08/2026)
- Concluído — o IPA entra no glossário e a estante finalmente casa (OS v5.6 / Clínica v7.8, 01/08/2026)
- Concluído — Clínica v6.5: os emojis fora da plataforma (01/08/2026)
- Concluído — Clínica v6.4: a última leitura datada, vela 1 da síntese (31/07/2026)
- Concluído — Clínica v6.1: a aba Histórico de sessões (31/07/2026)
- Concluído — Clínica v6.3: a sessão existe por ter acontecido (31/07/2026)
- Concluído — Clínica v6.2: o ir-e-voltar, senha "Ir e voltar" (31/07/2026)
- Concluído — a bancada varrida: a árvore que cresce, senha "Varrer a bancada" (30/07/2026)
- Concluído — a casa varrida: o main limpo e a quarentena (30/07/2026)
- Concluído — Clínica v6.0: a Prateleira acesa, senha "Acender a Prateleira" (30/07/2026)
- Concluído — OS v5.5: o inglês como camada do Code, senha "Acender o inglês" (01/08/2026)
- Concluído — OS v5.4: o Montgomery Code vira curso de verdade (30/07/2026)
- Concluído — OS v5.3: a Camada 7 acesa e o primeiro agente (30/07/2026)
- Concluído — Clínica v5.9: o fio único do Diagnóstico (30/07/2026)
- Concluído — Clínica v5.8: o caminho de volta da régua (30/07/2026)
- Concluído — Clínica v5.7: a ligação do paciente, o segundo andar da teia (30/07/2026)
- Concluído — OS v5.2: a escada da entrega no Montgomery Code (30/07/2026)
- Concluído — Clínica v5.6: as ervas do Brasil na estante (30/07/2026)

Todas as outras, desde 05/07/2026, em
[`00_Nucleo/ROADMAP_ARQUIVO.md`](00_Nucleo/ROADMAP_ARQUIVO.md).
