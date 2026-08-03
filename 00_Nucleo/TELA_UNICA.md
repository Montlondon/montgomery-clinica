# A tela única — a arquitetura da Clínica

Saiu do `ROADMAP.md` em 01/08/2026 (senha "Emagrecer o diário"). Não é histórico: é a **planta
vigente**. Ler antes de mexer no Diagnóstico da Clínica.

---

## A tela única — a arquitetura que ele descreveu (01/08/2026, senha "Sintetizar")

*Nove pontos ditos por ele numa conversa de arquitetura, antes de qualquer código. Isto **substitui**
a planta das três gavetas logo abaixo, que continua registrada por honestidade mas não é mais o rumo.*

### O diagnóstico da coisa, em uma frase

A Clínica foi construída **na ordem do cadastro** — primeiro existe o registro, depois acontece a
pessoa. Ela precisa ser construída **na ordem do atendimento**: primeiro acontece a pessoa, e o
registro é o rastro que ela deixa.

### Os nove pontos, na voz dele

1. **Não dá para agendar quem ainda não é paciente.** Para marcar a primeira sessão é preciso parar,
   ir em *Novo paciente*, preencher, salvar, e só então voltar à Agenda.
2. **Com a pessoa na frente, uma ficha só** — e o lugar já existe: o Diagnóstico. Começa por um
   cabeçalho com os dados dela, e o que ele anota **acende os ramos** sozinho.
3. **As doze abas viram uma.** O destino é o Vitruviano com a Árvore dentro dessa tela: clica em
   quiropraxia, anota ali; precisa de suplemento, está ali.
4. **No pé, a pessoa inteira** — sessões, o que foi feito, o que foi recomendado, a psicanálise, e
   as pessoas dela. *"Seria como se eu estivesse vendo a paciente."*
5. **Folha limpa e bonecos.** Escrever solto como se escreve no chat, e desenhar as figuras até o
   triângulo familiar aparecer. *"Uma pessoa nunca é somente ela."*
6. **O desenho é instrumento, não retrato:** acha o Édipo, as fixações (oral, anal, fálica), onde a
   energia vaza em preocupação.
7. **O desenho também é para ele** — é como ele memoriza e como pensa. *"Acho muito mais prático ver
   uma perna e localizar o E36."* O Vitruviano não é enfeite: **é o formato certo do conteúdo.**
8. **As doze abas poderiam nem existir.** A aba Diagnóstico **é** a ficha.
9. **A espiral desenha as sessões**, e só desenha — a numeração segue 1, 2, 3, 4, 5.

### As sete faixas da tela única (a planta)

Uma página só, de cima para baixo, sem aba nenhuma:

1. **O cabeçalho** — quem chegou. Se a pessoa não existe, **nasce aqui**, e a sessão de hoje já fica
   agendada. Mata o ponto 1.
2. **A folha limpa** — um campo sem rótulo. Escrever primeiro, classificar depois.
3. **Os bonecos** — a família arrastável; acende a Psicanálise que já está catalogada.
4. **O corpo** — o Vitruviano como *lugar onde se escreve*, não mapa para consultar.
5. **A recomendação** — minerais, ervas, suplementos, prateleira. Mudam de lugar, não de conteúdo.
6. **A espiral** — o histórico, desenhado.
7. **A memória da sessão** — já existe e vira o fecho natural da página.

### Duas regras que ele fechou nesta conversa

- **Tudo que existe hoje no Diagnóstico permanece.** A obra é de lugar, não de conteúdo. Nenhum campo
  que ele usa some no caminho.
- **Nada de desenho sem proporção áurea.** Dito por ele: *"o desenho sem proporção áurea me incomoda
  mais do que posso te explicar."* A primeira espiral que o Claude mandou foi traçada no olho e estava
  errada. A certa é a espiral logarítmica áurea `r = a · φ^(2θ/π)` — a cada quarto de volta o raio
  cresce exatamente φ. **Os encontros ficam sobre ela em passo igual de arco**, não de ângulo: no
  passo de ângulo as cinco primeiras sessões se amontoam num punhado de pixels e a décima sai da
  tela. A curva continua exata; só os marcos é que se distribuem. Script do cálculo guardado com a
  janela; refazer com `PHI=(1+Math.sqrt(5))/2`, `k=2*ln(PHI)/PI`.
  **Esta regra vale para todo desenho novo da casa, não só para a espiral.**

### O que é novo de verdade

Só três coisas: **a pessoa nascer no cabeçalho**, **os bonecos** e **a espiral**. Todo o resto já
existe na Clínica e muda de lugar.

### A ordem de construção (recomendação do Claude, aceita como rumo)

1. A pessoa nasce no atendimento (cabeçalho que cria o paciente e agenda).
2. A folha limpa.
3. A espiral.
4. Os bonecos — a maior; merece uma janela só dela.
5. O corpo como lugar de escrita — por último, porque as quatro primeiras funcionam sem ele.

**As doze abas não somem de uma vez.** Ficam vivas enquanto a tela nova cresce ao lado, e só se
apagam quando ele disser que não sente falta.

### FEITO — Faixa 1: o cabeçalho (Clínica v6.6, 01/08/2026)

**A primeira das sete faixas está no ar.** No alto do Diagnóstico, antes de tudo, uma faixa
**"Quem chegou"** com o nome, a data e o horário. É a etapa 1 da ordem de construção.

**O ponto 1 dos nove morreu aqui.** Digitando um nome que não existe, a lista não dá mais um beco
sem saída ("Nenhum paciente encontrado") — ela abre a porta: *Criar «Fulana»*. A pessoa **nasce ali**,
só com o nome, e já fica escolhida na bancada. Não é cadastro paralelo: é a mesma tabela `pacientes`,
com exatamente as mesmas 65 chaves da ficha, todas vazias menos o nome. A ficha completa continua
inteira e o botão **Abrir a ficha** leva até ela.

**A porta continua aberta mesmo com nomes parecidos.** Se já existe "Ana" e chega "Ana Paula", a
lista mostra a Ana *e* oferece *"Nenhuma dessas — criar «Ana Paula»"*. Só some quando o nome digitado
bate exatamente com alguém que já existe — aí criar seria duplicar.

**E a sessão do dia se marca sem sair da tela.** Com a pessoa escolhida, um botão marca a sessão
naquela data e horário. Pelo **mesmo caminho** da Nova Sessão: mesma tabela `sessoes`, mesma ida ao
Google pela ponte quando ela está ligada. Não nasceu uma segunda porta que a agenda não reconhecesse.
Se já existe sessão daquela pessoa naquele dia, o cabeçalho **diz que existe e não cria a segunda** —
mostra *"Sessão de 01/08/2026 às 14:30 já marcada"*.

**O cabeçalho não decide nada.** Oferece. Valor e forma de pagamento não são chutados: a sessão nasce
em `pendente` com valor zero e ele completa na agenda quando for a hora.

**Nada foi apagado.** A caixa antiga de "Paciente + Data da avaliação" virou o cabeçalho — mesmos
campos (`diagPacBusca`, `diagPacId`, `diagDt`), mais o horário. A calculadora de IMC continua onde
estava, agora abaixo da faixa, porque quem chega vem antes da medida.

**Conferido em bancada isolada** (com os gravadores trocados por dublês, sem tocar no Supabase):
busca exata esconde a porta de criar; busca parecida a mantém; o paciente nasce com 65 chaves; a
sessão nasce uma vez e a segunda tentativa no mesmo dia é recusada com aviso.

**A próxima é a folha limpa** — o campo sem rótulo, escrever primeiro e classificar depois.
Senha: **"A folha limpa"**.

### FEITO — Faixa 2: a folha limpa (Clínica v6.7, 01/08/2026)

**Um campo sem rótulo**, logo abaixo do cabeçalho. Fonte serifada, linha larga, sem caixa em volta:
parece papel, e é para parecer. O rótulo obriga a decidir onde a coisa mora antes de saber o que ela
é — e no atendimento a fala vem antes da gaveta.

**O rascunho não se perde.** Enquanto ele escreve, a folha se guarda sozinha no aparelho, **por
pessoa**. Uma recarga no meio da sessão devolve o texto na hora em que ele escolhe a mesma pessoa de
novo. Quando a avaliação é salva, a folha vira registro (campo `folha` no diagnóstico) e o rascunho
local se apaga — o texto continua na tela, quem foi salvo é o encontro.

**A folha sai no papel inteira**, com as quebras de linha preservadas, num bloco próprio antes da
Memória da sessão. E aparece na faixa do **último encontro** na chegada seguinte, em trecho de até
240 caracteres, com o inteiro em "Ver tudo". Resumir com máquina seria reescrever o que ele escreveu.

**"Classificar depois" virou a peneira.** Um botão — *O que a folha reconhece* — lê o que está
escrito e mostra o que o sistema já conhece **por nome**, em cinco grupos: sintomas dos 5 Elementos,
elementos, sintomas do corpo, regiões do corpo e temas da Psicanálise. Cada achado é um botão que
carrega **a palavra que o acendeu** à vista, do mesmo jeito que os Candidatos carregam a procedência.
Tocar marca; não tocar não marca. **Nada entra na ficha sozinho.** Tocar um sintoma marca o sintoma
*e* acende o elemento (ou a região) dono dele — e isso está escrito no próprio botão, não acontece
escondido.

**Duas regras de leitura, achadas na bancada:**
- **Nos catálogos do corpo, a expressão vale inteira e com fronteira de palavra.** "raiva" acha
  "raiva" e não acha "raivinha"; menos de 4 letras não conta. Itens com barra viram variantes
  ("agressividade / violência" vale pelas duas), e o que está entre parênteses é explicação, não busca.
- **Na Psicanálise, a busca é pela palavra-chave, não pelo nome inteiro.** Ninguém escreve
  "Sentimento de culpa melancólico" na folha — escreve *culpa*. Então uma palavra acende **vários**
  conceitos de uma vez, e isso é o ponto: é a estante inteira do assunto se abrindo, ele escolhe a
  prateleira. Palavras de ligação e genéricas ficam de fora por lista (`FOLHA_LIGACAO`) — sem ela,
  *"o tempo todo"* acendia *"Tempo lógico e sessão de tempo variável"*.

**Teto de 10 por grupo, dito em voz alta.** Quando "culpa" acende mais do que cabe, a faixa escreve
*"mostrando 10 de 14"*. Nada some em silêncio, e os já marcados vêm primeiro para não sumirem atrás
do corte.

**Conferido em bancada isolada:** a peneira acha raiva → Madeira, joelho e estalos → Joelho, culpa →
os sete conceitos de culpa; tocar marca sintoma e elemento juntos e o botão vira marcado; a folha vai
para o registro salvo; o rascunho se apaga depois de salvar e o texto fica na tela.

**A próxima é a régua de encontros** — os encontros espaçados pelo tempo real entre eles, com a linha
da Escala de Orientação Emocional. Senha: **"A régua dos encontros"**.

### FEITO — Faixa 3: os bonecos (Clínica v6.8, 01/08/2026) — NO AR

**A família desenhada, logo abaixo da folha limpa.** É a etapa 4 da ordem de construção — ele
escolheu acender esta antes da régua de encontros.

**Fileiras de geração, e não folha solta:** avós, pais, ela e os irmãos, filhos. Um botão põe a
figura na fileira; **arrastar** muda de fileira (o tempo) e de posição na fileira (a ordem entre
irmãos). Soltar quase no mesmo lugar não é arrasto — é toque, e toque abre a figura para escrever:
nome, quem é, uma linha sobre a pessoa, a forma da figura (saia, pernas, neutra) e o traço de quem
já partiu, que é a convenção do genograma. **A pessoa da cadeira já está lá**, com o risco dourado
sob os pés: não se adiciona, não se apaga e não sai da fileira dela.

**O triângulo aparece sozinho.** Quando o pai e a mãe estão desenhados com ela, duas linhas
pontilhadas descem dos dois até ela. Não é enfeite: é o que se vê quando a pessoa está entre os dois,
e é ele que abre a estante do Édipo na peneira.

**A peneira da família, com a mesma regra da folha: reconhece, não decide.** O botão *O que a família
reconhece* tem duas portas — o triângulo desenhado (que oferece os três itens do Complexo de Édipo,
com a procedência escrita: *"o triângulo desenhado: pai, mãe e ela"*) e as palavras escritas em
*quem é* e na linha de cada figura, lidas pelo mesmo motor da folha (`folhaAchaChave`). Cada achado
mostra de onde veio, e **nada entra na Psicanálise sem o toque dele**. A palavra vale inteira:
*"projeção"* acende Projeção, *"projeta"* não.

**A família não nasce de novo a cada encontro.** Ela se guarda de três jeitos, nessa ordem: rascunho
local por pessoa enquanto ele desenha; campo `familia` na avaliação salva (datado, como a folha); e,
na chegada seguinte, o desenho **vem do último encontro que tinha família**, dizendo de que dia veio.
Editar uma avaliação antiga mostra a família como estava naquele dia. No papel impresso entra um
bloco **As pessoas dela**, por geração — o desenho não vai, vai quem estava desenhado.

**Nada traçado no olho.** A figura tem altura `FAM_H` e se reparte em cabeça `H/φ³`, tronco `H/φ²` e
pernas `H/φ²` — 0,236 + 0,382 + 0,382 = 1 exato. O passo entre fileiras e entre figuras é `H·φ`.

**Conferido em bancada isolada** (as funções reais, com dublês no lugar do DOM e do Supabase, sem
tocar no banco): 24 provas passaram — a pessoa nasce sozinha no desenho; cada figura cai na sua
fileira; o triângulo é reconhecido e abre os três itens do Édipo; a peneira acha pela palavra
inteira e não pela torcida; nada é marcado sozinho e tocar marca; arrastar muda de fileira e entra
na ordem certa sem buraco nas posições; o rascunho volta por pessoa e não vaza para outra; a família
vem do último encontro salvo; o "eu" não se apaga; e as três partes da figura fecham em φ.

**A próxima continua sendo a régua de encontros.** Senha: **"A régua dos encontros"**.

### CONSERTO — a busca do cabeçalho só sabia criar (Clínica v6.9, 01/08/2026) — NO AR

**O que ele viu:** digitava o nome de quem já é paciente e a única coisa que aparecia era
*Criar «Fulana»*.

**Por quê, em duas causas somadas:**
1. A busca do cabeçalho olhava **só a lista de ativos em memória** (`gD('pacientes')`). Depois da
   triagem, a maioria das pessoas está **arquivada** — e arquivado não está nessa lista.
2. Comparava **com acento**: "jose" nunca encontrava "José". O resto da casa já usa `semAcento`;
   esta busca tinha ficado para trás.

Somadas, davam o pior resultado possível: a porta que sobrava era a de nascer, e **criar quem já
existe é duplicar a pessoa**.

**O conserto é a mesma receita do agendamento** (`filtrarPS`): os ativos aparecem na hora, e em
paralelo — com 350 ms de espera para não disparar a cada tecla — o banco é consultado pela coluna
`busca_nome`, que já é sem acento e **inclui os arquivados**. Quem vem de lá aparece com o selo
ARQUIVADO; escolher essa pessoa **reativa** (mesmo `rpcArquivar`), sem apagar nada.

**A regra nova, que vale para qualquer porta de criar:** enquanto o banco não respondeu, a porta de
nascer **fica fechada** e a lista diz *"Procurando também nos arquivados…"*. Nascer é a última coisa
a se oferecer, nunca a primeira. E o botão de criar, quando é tocado, ainda confere o banco inteiro
antes: se a pessoa existe, ele abre a que existe em vez de fazer a segunda.

**Conferido em bancada isolada:** 15 provas — acha "José" por "jose"; acha o arquivado e mostra o
selo; escolher arquivado reativa em vez de duplicar; a porta de criar continua aberta para quem é
novo mesmo; e resposta atrasada de um termo velho não escreve na tela.

**Sobra a mesma falha na busca da Recomendação** (`filtrarRxPac`), que ainda é só-ativos e com
acento. Mesma receita resolve.
*Atualizado em 03/08/2026 (v9.2): o acento saiu — `filtrarRxPac` já compara com `semAcento`.
Continua só-ativos; falta a metade do banco (`buscarPacPicker` + selo ARQUIVADO).*

### FEITO — de quem cada boneco é: filiação e par (Clínica v7.0, 01/08/2026) — NO AR

**O que ele pediu, olhando o desenho pronto:** *"mover a Raquel e deixar exatamente abaixo da mãe
Alessandra; e ao lado da irmã Alessandra, adicionar o marido dela"*. E disse a razão inteira numa
frase: *"vou adicionando quem pertence a quem"*.

**O que faltava:** a fileira sabia o **tempo** (que geração), a ordem sabia a **sequência** — mas
nada no desenho sabia **de quem cada pessoa é**. Sem isso, uma sobrinha não tinha como ficar debaixo
da mãe dela; ficava no meio, como todo mundo.

**O que se acendeu:** dois laços, escolhidos na própria figura ao tocá-la.
- **Filho(a) de** — só oferece quem está **uma fileira acima**. Quem tem pai apontado nasce
  **debaixo dele**; se esse pai faz par, nasce **no meio do casal**.
- **Faz par com** — só oferece quem está na **mesma fileira**, e é mão dupla: apontar um aponta o
  outro. O par ganha o traço curto na altura do quadril e anda colado, como uma peça só.

**Três cuidados que o desenho pediu para não mentir:**
1. Quem entrou por ser **par de alguém** fica **fora da barra de irmandade** — o cunhado não é irmão.
2. Irmãos do mesmo pai **se abrem em torno dele** em vez de empilhar, e uma varredura da esquerda
   para a direita garante que ninguém pise em ninguém.
3. Arrastar uma figura para longe **desfaz o laço** que ficou impossível (pai que não está mais uma
   fileira acima, par que mudou de geração). Melhor perder o laço do que desenhar uma mentira.

A prancheta agora **cresce** quando a família cresce, e o desenho inteiro se recentra sem perder o
prumo entre pai e filho. Atalho de bancada: com uma figura aberta, o botão da fileira de baixo já
cria o filho **dela**.

**Conferido em bancada isolada** com a família da imagem: Alessandra em 379, o marido em 466, Raquel
em 422,5 — exatamente no meio dos dois; a barra de irmãos abraça as quatro e deixa o cunhado fora.

### FEITO — o par nasce ao lado, o filho nasce embaixo, e a família amplia (Clínica v7.1, 01/08/2026) — NO AR

**O que ele perguntou:** *"como posso adicionar as pessoas que se conectam com as outras — fulano
casado com Vanessa, Letícia casada com Chocolate — como eu poderia ir criando quem está ligado a
quem? E teria como ampliar esta árvore como faço no Vitruviano?"*

**A resposta era um gesto, não um campo.** Na v7.0 o laço existia, mas fazer um casal dava três
passos: criar a figura na fileira, escrever o nome, e só então apontar o par numa lista. Agora, na
figura aberta, dois botões:
- **+ Par de Fulana** — nasce ao lado, com o laço já feito **nos dois sentidos**;
- **+ Filho(a) desta pessoa** — nasce na fileira de baixo, já debaixo dela (ou do casal).

É o "vou adicionando quem pertence a quem" em um toque. A ordem do trabalho fica sendo: toca em
quem já está, faz brotar quem falta, escreve o nome.

**A tela cheia é a mesma receita do OS** (`.tcPalco` lá, `.fam-palco` aqui): botão no canto,
tela inteira, Esc devolve, e onde o navegador não deixa pedir (iPhone) a classe faz por CSS.
Duas diferenças de propósito: o fundo é o **papel** da Clínica e não o céu escuro do OS, e o
**editor entra junto no palco** — esta imagem não é para meditar, é para trabalhar dentro dela.

**Conferido em bancada:** o casal dele (249 e 336), a Letícia com o Chocolate (423 e 510), o filho
do primeiro casal em 292 — o meio exato dos dois; e o palco em 686×675 com o desenho a 82% da
altura, voltando a 640×371 ao sair.

### FEITO — a família pensada por tronco (Clínica v7.2, 01/08/2026) — NO AR

**O caso que ele trouxe, e que é o caso de todo atendimento:** *"o Venâncio é filho da Vanessa; a
Raquel é minha sobrinha mas é filha da Alessandra; o Manoel tem uma filha, a Jéssica; e o Venâncio
vai ser pai em setembro do Dimitre, com a Tamires — é exatamente assim que acontece no atendimento."*

E a imagem que ele deu junto: **"como se fosse troncos de uma árvore"**. Era essa a chave.

**O que faltava, em três buracos:**
1. **Não havia fileira de netos.** O Dimitre não tinha onde nascer. Agora existem **Bisavós** e
   **Netos**, e as duas só aparecem quando alguém mora nelas — fileira vazia é ar gasto na tela.
2. **Todo filho era do casal.** A Jéssica é do Manoel e **não** da Alessandra. A lista "Filho(a) de"
   agora tem as duas naturezas: *"Alessandra e Manoel — o casal"* e *"só Manoel"*. Do casal desce do
   meio dos dois; só de um, desce dele.
3. **Quem está a caminho não tinha lugar.** O Dimitre nasce em setembro e já pesa no atendimento
   hoje. Ganhou o botão *Marcar como a caminho*: a figura fica **pontilhada** até nascer.

**E o miolo do cálculo mudou de ideia — esta é a parte que importa.** Era **por fileira**: colocava
todo mundo e depois empurrava quem pisava em quem. Escorregava. Bastava o casal do Venâncio ocupar a
coluna da Alessandra para a Raquel sair **meio passo** do prumo da mãe. O desenho ficava quase certo,
que num genograma é o mesmo que errado.

Agora é **por tronco**, de baixo para cima, como uma árvore de verdade:
- cada tronco é uma pessoa **ou um casal** — um casal é uma peça só;
- desenham-se **os galhos primeiro**, e o tronco vai para o **meio do vão** do que nasceu dele (pelo
  vão e não pela média, para que um galho carregado não puxe o tronco para o lado);
- quem pendura o galho é **o filho**, não o par dele — por isso o Venâncio fica no prumo dos pais e
  a Tamires vem ao lado;
- um marcador por fileira guarda até onde já se ocupou, então **nenhum tronco invade o vizinho**;
- e quando um tronco precisa andar para a direita, **o galho inteiro anda junto** — o prumo entre
  pai e filho nunca se perde.

**Conferido em bancada com a família inteira da imagem dele** (16 figuras, cinco fileiras): a Raquel
exatamente sob a Alessandra; a Jéssica exatamente sob o Manoel; o Venâncio no meio exato dele com a
Vanessa; o Dimitre no meio do Venâncio com a Tamires; os pais no meio do vão das quatro crianças; os
avós no prumo do pai. A prancheta cresceu sozinha de 640 para 801.

### FEITO — a régua de encontros (Clínica v7.3, 01/08/2026)

O pé do Diagnóstico, exatamente como estava escrito aqui embaixo. Duas informações no mesmo
desenho, porque no atendimento elas são a mesma coisa:

- **Embaixo, a régua:** um traço por encontro, espaçado pelo **tempo real** entre eles. O vão
  largo mostra sozinho quando a pessoa sumiu — e vão de **45 dias para cima** ganha faixa e aviso
  (*"3 meses sem vir"*). Isto é informação clínica, não estilo.
- **Em cima, a linha da Escala de Orientação Emocional** (1 Alegria … 22 Medo), que ele preenche
  em `diagEscalaEmo` em toda avaliação e **nunca tinha visto desenhada**. Quanto mais alto na tela,
  mais alto na escala: subir na tela é subir de verdade. As duas espirais aparecem como duas
  metades da faixa, separadas na linha entre o 7 e o 8.
- **Clicar num ponto abre o diagnóstico daquele dia** (o mesmo `verDiagHist` do histórico).
- **O resumo em números** no pé: quantos encontros, quanto tempo de acompanhamento, os degraus
  (*"17 → 5, subiu 12 degraus"*) e há quanto tempo foi o último.

**Duas honestidades que o desenho guarda.** Encontro **sem escala anotada** não é inventado: fica
só como traço na régua, e a linha **pula ele pontilhada** — a linha não finge saber o que não foi
escrito. E nada foi traçado no olho: a altura da faixa é `640/φ²` e o respiro até a régua `φ³` dela;
os pontos se distribuem **pela data**, nunca por passo igual. O único desvio é declarado no código:
dois encontros no mesmo dia se afastam 7 px, senão viram um borrão.

**Custo zero de banco:** a régua lê só o cache local (`sessoesDoPac`), nunca o Supabase. Ela se
redesenha quando a pessoa é escolhida e quando a avaliação é salva.

### FEITO — Faixa 5: a recomendação (Clínica v7.4, 01/08/2026), senha "Acender a Recomendação"

**A quinta das sete faixas está no lugar** — no pé do Diagnóstico, logo acima da régua de encontros,
exatamente onde o item *Em aberto* recomendava.

**O ponto inteiro da coisa: ela não foi copiada, ela mudou de casa.** Não existe uma segunda receita
dentro do Diagnóstico. Existe **uma só**, o mesmo formulário de sempre (`#rxCorpo`), que sai da aba
*Recomendação Terapêutica* e entra no pé do Diagnóstico quando há uma pessoa escolhida — e volta para
a aba assim que ela é aberta pelo menu lateral. Mesmos campos, mesmo *Salvar*, mesmo registro em
`prescricoes`. **Um lugar para consertar em vez de dois**, que era o ganho real prometido na conta
do encolhimento. Zero campo novo, zero linha nova no banco.

**Duas honestidades no caminho:**
- **O seletor de paciente some dentro do Diagnóstico.** Quem chegou já foi dito no cabeçalho, lá em
  cima. Deixar um segundo seletor ali seria convidar a misturar duas pessoas na mesma folha.
- **A folha da receita se zera quando o Diagnóstico troca de pessoa** — e só nesse caso, mais o caso
  de uma recomendação antiga aberta para *Editar* (salvar ali sobrescreveria o histórico). O que veio
  da régua de minerais e ervas **da mesma pessoa** fica intacto: foi ele que acabou de trazer.

**O botão do resumo deixou de ser uma porta e virou uma escada:** *"Levar para a recomendação, aqui
embaixo"*. Ele não muda mais de tela — leva os suplementos marcados na avaliação e desce até o bloco.
Levar duas vezes não duplica, e o que ele já tinha escrito à mão não é apagado.

**A aba continua viva**, como combinado: as doze não somem de uma vez. Editar, duplicar e as réguas
de minerais e ervas continuam desaguando nela do mesmo jeito.

### FEITO — Faixa 4, primeira vela: o corpo (Clínica v7.5, 01/08/2026), senha "Acender o Corpo"

**A última das cinco começou** — e começou pequena, de propósito. Entre os bonecos e a
recomendação, o Diagnóstico agora tem um corpo desenhado de costas com a **coluna clicável,
C1 ao Cóccix**. Toca a vértebra: abre o que aquele nível inerva, o que costuma aparecer quando
ele está interferido, e o botão de marcar o que foi ajustado hoje.

**Uma camada só nesta vela: a quiropraxia.** Era o combinado — provar primeiro se anotar clicando
no corpo é mesmo melhor do que anotar na caixa. As outras camadas (meridianos, pontos, órgãos)
não foram acesas e não estão prometidas.

**Nada foi tirado. Confirmado por ele antes de construir:** a aba de referência da Quiropraxia, o
**Balanço ABC** e o **Baguá** continuam exatamente onde estavam. O corpo não substituiu nenhuma
caixa — é **outro caminho para o mesmo dado**. O que se marca na vértebra entra em
`_diagSelecoes.quiro` como sempre entrou, e aparece no resumo, na ficha e na folha impressa. Marcar
num lugar acende no outro, nos dois sentidos.

**A visão é de costas, como ele decidiu em 30/07:** de costas os lados coincidem, e o desenho não
mente sobre qual é a direita da pessoa.

**Nada traçado no olho** — a régua dessa vela:
- o cânone clássico das **oito cabeças**, com o umbigo a `H/φ` contados dos pés (0,382 H do alto),
  desenhado como marca tracejada;
- o palco é um retângulo **φ²** (660 por 252), conferido na tela: a razão medida deu 2,619 contra
  2,618 de φ²;
- as vértebras se distribuem **dentro de cada segmento** — 7 cervicais, 12 torácicas, 5 lombares —
  e não em passo igual pela coluna inteira, porque os segmentos não têm o mesmo comprimento no
  corpo real;
- **as larguras também são medida:** um corpo vertebral cervical tem perto de 2,5 cm e um lombar
  perto de 5 cm; em alguém de 1,75 m isso dá 0,014 e 0,029 da altura. A coluna afina em cima e
  engrossa embaixo sem que ninguém tenha decidido isso no traço;
- o contorno passa **exatamente** pelos pontos calculados (Catmull-Rom convertida em Bézier): os
  pontos vêm do cânone, e a curva só os liga.

**O que fica em aberto para a próxima vela**, se ele quiser seguir: as outras camadas sobre o mesmo
corpo, e a pergunta que ele ainda não fechou — se as abas atuais viram camadas do corpo ou
continuam existindo ao lado dele.

### FEITO — a coluna no papel (Clínica v7.6, 01/08/2026), senha "Acender a coluna no papel"

**Antes da obra, a resposta dele à pergunta que estava aberta:** *"Clicar na vértebra é bem melhor."*
A faixa 4 passou no teste do atendimento de verdade — é o que autoriza continuar investindo no corpo.

**A coluninha do consultório agora vai embora com o paciente.** No bloco *Quiropraxia* da folha do
Diagnóstico — a que imprime, exporta em JPG e vai pelo WhatsApp — entrou o mesmo corpo da tela, com
as vértebras daquele encontro **acesas em azul cheio**, cada uma com uma linha de chamada e o nome
do nível ao lado (C2, T7, T8, L4, Sacro). Embaixo, uma legenda em uma linha: *"Onde foi ajustado
hoje"*.

**O mesmo desenho também aparece no histórico da ficha**, ao rever um encontro antigo: rever deixa
de ser ler nomes de níveis e volta a ser ver onde foi.

**Três honestidades:**
- **Nenhuma medida nova foi inventada.** `cpSvgPapel` reaproveita o cânone da tela (`CP`,
  `CP_PERFIL`, `cpVertebras`) — é o mesmo corpo, sem clique.
- **Sem vértebra marcada, não sai desenho.** Se ele só marcou técnicas de região, o bloco continua
  como sempre foi, só com a lista escrita. Conferido nos dois casos.
- **As etiquetas não se atropelam:** quando dois níveis vizinhos são marcados (T7 e T8), a de baixo
  desce o mínimo necessário para caber. É empurrão calculado, não posição escolhida no olho.

**Peso: zero.** É SVG gerado na hora, sem imagem, sem biblioteca, sem ida ao banco.

**O que fica para depois:** o modo *"mostrar ao paciente"* (tela cheia maior e mais anatômica) e,
só então, a conversa sobre realismo/3D.

### O desenho tem dois leitores — dito por ele em 01/08/2026

> *"Eu sempre mostro ao cliente uma coluninha que tenho física em 3D, para que eles entendam
> aonde eu vou ajustar."*

**Isto muda o rumo do corpo na tela.** A faixa 4 foi construída para **um** leitor: ele, anotando.
Agora se sabe que há **dois**, com exigências opostas — ele precisa de alvo fácil e leitura rápida;
o paciente precisa **reconhecer o próprio corpo**. É daqui que vem o pedido de "corpo mais
realista", e é isto que responde qual realismo vale a pena.

**Não competir com a peça de plástico no que ela faz melhor.** Ela gira na mão dele e é apontada
com o dedo — nenhuma tela ganha disso, nem em 3D. Mas a tela tem duas coisas que o plástico não tem:

1. **Memória.** A vértebra marcada em dourado, com o que aquele nível inerva escrito ao lado. O
   plástico não fala.
2. **Ir embora com o paciente.** A coluna impressa na folha, com os ajustes daquele dia acesos. A
   pessoa chega em casa e aponta para alguém.

**A ordem recomendada mudou por causa disso** (a de antes punha o realismo em seguida):

1. **A coluna no papel**, com as vértebras ajustadas do dia — barato, usa o desenho que já existe,
   e é o único pedaço desta história que a coluninha física não faz de jeito nenhum.
   Senha: **"Acender a coluna no papel"**.
2. ~~**Um modo "mostrar ao paciente"**~~ — **FEITO em 01/08 (v7.7)**, logo abaixo.
3. **Só então o realismo/3D.** Aí passa a existir um leitor que precisa dele, e a conversa sobre os
   megabytes fica honesta em vez de ser vontade de coisa bonita. A receita do 3D real (three.js +
   malha do NIH, crânio já provado girando) continua guardada.

**Uma pergunta que vale mais do que as três, e que só ele responde:** clicar na vértebra se mostrou
melhor do que a caixa, num atendimento de verdade? Se não, realismo seria enfeitar uma porta por
onde ninguém passa.

### FEITO — Mostrar ao paciente (Clínica v7.7, 01/08/2026), senha "Acender o segundo leitor"

**O segundo leitor ganhou tela própria.** No cabeçalho do bloco *O corpo* há agora o botão
**Mostrar ao paciente**: abre em tela cheia um corpo grande, sem nenhum botão de marcar, para virar
o monitor ou o celular para a pessoa. `Esc` ou *Voltar* fecha e nada se perde.

**Não é o desenho de trabalho aumentado — é outro desenho, para outro olho:**
- **as vértebras ajustadas hoje saem em azul cheio**, cada uma com linha de chamada e o nome do
  nível ao lado (o mesmo empurrão calculado do papel: vizinhas não se atropelam);
- **tocar em qualquer vértebra** — marcada ou não — escreve embaixo, em letra grande, o nível e
  *"Daqui saem os nervos para..."*. É o que a coluninha de plástico não faz: ela não fala;
- **nada de marcar aqui.** Quem está olhando é o paciente. Anotar continua sendo na tela de
  trabalho, e nenhum dado se cria ou se apaga neste modo.

**Mais anatômico, e nada traçado no olho:**
- **24 costelas**, uma por torácica de cada lado, saindo da própria vértebra e parando na largura
  real do corpo naquela altura — a largura é **interpolada do `CP_PERFIL`**, o mesmo contorno que
  já desenha o corpo (`cpLarg()`), e não um valor escolhido. Conferido na tela: **nenhuma costela
  passa do contorno**;
- **escápulas de T2 a T7** e **asas do ilíaco nascendo na altura do sacro**, como no corpo real;
- resto do cânone intacto: `CP`, `CP_PERFIL` e `cpVertebras()`, os mesmos da tela e do papel.
  **Nenhuma medida nova foi inventada.**

**Peso: zero.** SVG gerado na hora, sem imagem, sem biblioteca, sem ida ao banco.

### Decidido em 01/08 — as abas viram camadas do corpo

**A pergunta que estava aberta desde a v7.5 foi respondida por ele:** *"acredito que virar camada do
corpo seria mais interessante."*

**O rumo, então:** o corpo deixa de ser mais uma caixa e passa a ser **o lugar** do Diagnóstico, com
as abas de hoje virando camadas sobre o mesmo desenho — quiropraxia (acesa), meridianos, pontos,
órgãos, 5 Elementos. Isto casa com o *"Vitruviano como lugar único"* já escrito mais abaixo: **camadas
em vez de abas.**

**Três cuidados que ficam registrados antes de qualquer obra:**
1. **Uma camada de cada vez, e cada uma provada no atendimento** antes da seguinte — foi assim que a
   quiropraxia se provou (*"clicar na vértebra é bem melhor"*).
2. **Nada se apaga enquanto a camada não provar que substitui.** A aba só sai depois que ele disser
   que não sente falta — a mesma regra do resto da casa.
3. **A visão é de costas** para a coluna, mas meridianos e pontos precisam de **frente e costas**.
   O OS já resolveu isso no Vitruviano (toggle frente/costas) — a receita existe e se reaproveita.

Senha para a próxima: **"Acender a segunda camada"**.

### Decidido em 01/08 sobre o histórico e os bonecos

**O histórico NÃO é espiral nem planta.** As duas foram desenhadas, calculadas e mostradas a ele;
gostou das duas e disse *"acho que não na plataforma"*. Ficam guardadas para uma eventual imagem de
meditação no OS, nunca na tela de trabalho. **Não repropor.**

**O que vai no pé do Diagnóstico é a régua de encontros:**
- os encontros em ordem, **espaçados pelo tempo real entre eles** — o vão largo mostra sozinho quando
  a pessoa sumiu, e a piora seguinte costuma ter a ver. Isto é informação clínica, não estilo: fica
  mesmo que se tire o resto;
- **a linha da Escala de Orientação Emocional** (1 = Alegria … 22 = Medo), que ele já preenche em
  toda avaliação no campo `diagEscalaEmo` e **nunca viu desenhada**;
- o resumo em números: quantos encontros, quanto tempo de acompanhamento, quantos degraus subiu
  (*"17 → 5"*), há quanto tempo foi o último;
- clicar num ponto abre o diagnóstico daquele dia.

**Os bonecos são uma árvore genealógica**, e não uma folha livre: gerações em fileiras (avós, pais,
a pessoa e irmãos, filhos), figuras que ele adiciona e arrasta. Mais fácil de ler e mais barato de
construir do que o canvas solto. O triângulo continua aparecendo — ele é o que se vê quando a pessoa
está entre o pai e a mãe.

### Em aberto

- ~~Onde exatamente mora a recomendação terapêutica~~ — **respondido em 01/08 (v7.4):** o pé do
  Diagnóstico, antes da régua, com o formulário mudando de casa em vez de ser copiado.
- Se a folha limpa e os campos classificados convivem (o Claude recomenda que sim, folha primeiro).

### Sobre encolher o código — a conta honesta

Ele perguntou se isto deixaria o código menor e mais rápido. Medido em 01/08: `index.html` tem
**897 KB** — **719 KB de JavaScript** e **178 KB de HTML/CSS**. **O arquivo não vai encolher de forma
relevante e pode até crescer**: as doze abas são só uns 10–15 KB, e os bonecos e a espiral somam
código novo. Os 719 KB são quase todos **conhecimento** (361 pontos, ervas, minerais, pulsos,
psicanálise) e não saem.

**O ganho real é outro:** cada ficha carrega hoje **62 campos**, vários deles cópia do que o
Diagnóstico já grava datado. Um lugar só significa **menos dado lido por paciente** — e o que estoura
a cota do Supabase é *egress*, não tamanho de tela. O segundo ganho não se mede em KB: **um lugar
para consertar em vez de dois.**

---

## A planta da senha "A tela que engole a ficha" (03/08/2026)

*Escrita antes de qualquer código, a pedido dele. É o ponto 8 dos nove — "as doze abas poderiam nem
existir" — deixando de ser desejo e virando planta com linhas exatas.*

### O achado: as "doze abas" não são as do menu

Ele sempre disse **doze**, e o número está certo — mas não são as páginas da lateral. São as **abas
de dentro da ficha do paciente**, todas na mesma barra `mTabs` (`index.html` 1023), e são
**exatamente doze**:

| # | Aba | `id` | Botão | Painel |
|---|---|---|---|---|
| 1 | Dados | `tp` | 1024 | 1036 |
| 2 | Queixa | `tq` | 1025 | 1054 |
| 3 | Histórico | `th` | 1026 | 1062 |
| 4 | Hábitos | `thb` | 1027 | 1071 |
| 5 | Acupuntura | `ta` | 1028 | 1080 |
| 6 | Quiropraxia | `tqr` | 1029 | 1089 |
| 7 | Psicanálise | `tps` | 1030 | 1099 |
| 8 | Complementares | `tc` | 1031 | 1109 |
| 9 | Exames | `tex` | 1032 | 1124 |
| 10 | Recomendações | `trx` | 1033 | 1131 |
| 11 | Diagnósticos | `tdg` | 1034 | 1137 |
| 12 | Sessões | `tss` | 1035 | 1146 |

O interruptor é `showTab` (2895), que além de trocar o painel **acende conteúdo sob demanda** em
cinco delas (`tc`, `trx`, `tdg`, `tss` e a última leitura de `ta`/`tqr`/`tps`). Isso é bom: quer
dizer que a ficha já sabe carregar por pedaço, e engolir não obriga a ler tudo de uma vez.

### O que já foi engolido, sem ninguém ter chamado assim

Cinco das doze **já têm morada no Diagnóstico** — a obra andou por outro nome:

| Aba da ficha | Onde já vive no Diagnóstico |
|---|---|
| Queixa (`tq`) | Faixa 2, a folha limpa (HTML 1391) — escrever solto, classificar depois |
| Psicanálise (`tps`) | Faixa 3, os bonecos (HTML 1404) |
| Quiropraxia (`tqr`) | Faixa 4, o corpo — a coluna C1–Cóccix (HTML 1433) |
| Recomendações (`trx`) | Faixa 5, a recomendação (HTML 1661) |
| Diagnósticos + Sessões (`tdg`, `tss`) | A régua de encontros (HTML 1676) |

**Sobram sete:** Dados, Histórico, Hábitos, Acupuntura, Complementares, Exames — e o pedaço de
Dados que o cabeçalho ainda não cobre.

### As três engolidas que faltam, em ordem de dependência

1. **A pessoa inteira no cabeçalho.** Hoje a Faixa 1 (HTML 1366) tem só nome, data e horário, e
   quem quer o resto sai da tela pelo botão *Abrir a ficha* (`cabAbrirFicha`, 8465). A engolida é
   os **Dados** e o **Histórico** virarem uma dobra do próprio cabeçalho — fechada por padrão,
   porque no atendimento eles quase nunca são o assunto, mas ali, sem trocar de página.
2. **Hábitos e Complementares descem para as faixas que já existem.** Hábitos é matéria da folha
   e da conduta; Complementares (`tc`, que já carrega minerais e ervas por paciente) é matéria da
   Faixa 5, onde a Recomendação já mora. Nenhuma tela nova.
3. **Acupuntura é a roda, não uma faixa.** A aba `ta` não deve virar faixa: ela é o assunto de
   *"A roda que engole as listas"* (ROADMAP), que já tem planta própria em anéis e camadas. As
   duas senhas se encontram aqui — e a ordem é a que já está escrita lá: **primeiro fechar a
   corrente da sessão**, depois a roda.
4. **Exames fica por último**, e talvez fique onde está: é a única que lida com arquivo e imagem,
   e não é gesto de consulta, é gesto de arquivo.

### As regras que esta obra herda, e não pode furar

- **Tudo que existe permanece.** A ficha não morre; ela deixa de ser o único caminho. A aba só se
  apaga quando ele disser que não sente falta — mesma regra da coluna e das camadas do corpo.
- **Uma engolida de cada vez, provada no atendimento** antes da seguinte.
- **Mostrar não é marcar.** Uma dobra que se abre para consultar não pode gravar nada — a mesma
  linha decidida na roda e na peneira da folha limpa.
- **Egress antes de estética.** Engolir não pode significar ler a ficha inteira toda vez que ele
  abre o Diagnóstico. O `showTab` já carrega por pedaço; a dobra tem que herdar isso.
- **É obra, não arrumação** — muda por fora, e a rede (`node 01_Codigo/conferencia/conferir.mjs`)
  não protege contra "ficou pior de usar".

**Senha da primeira engolida: "A pessoa inteira no cabeçalho".**

---

## A reunião do pé do Diagnóstico (03/08/2026) — decidido por ele, olhando a tela

*Veio da senha "A tela que engole a ficha", passando bloco a bloco pelo fim da avaliação.
Nada disto foi construído ainda: é planta.*

### O que ele aprovou como está, e não se toca

- **A recomendação** (Faixa 5, HTML 1661) — "esta parte ok".
- **A régua de encontros** (HTML 1676) — "esta parte ok". *Acerto pequeno anotado para depois:
  o desenho fica espremido na metade direita e as datas se sobrepõem no eixo.*

### A Escala de Orientação Emocional — fica, e vira clicável

**Primeiro ele mandou retirar; depois de ver a própria régua, decidiu manter.** O motivo mudou
tudo: a linha da escala **já está desenhada** na régua — os degraus ligados e o rodapé contando
*"12 → 1 subiu 11 degraus · 17 encontros sem a escala anotada"*.

**O problema nunca foi a escala — era o gesto.** Em 19 encontros ela foi anotada 2 vezes. Um
`<select>` de 22 opções (HTML 1608), no meio da avaliação, pede que ele pare, abra e leia uma
lista comprida bem na hora em que está com a pessoa na frente.

**A decisão dele: o bloco fica, e passa a ser clicável.** Os 22 níveis à vista, um toque marca —
sem abrir lista. As duas espirais (ascendente 1–7, descendente 8–22) já existem no `select` e
dão a leitura de cor e de posição sozinhas. **O que se grava não muda:** continua sendo
`diagEscalaEmo`, o mesmo valor de sempre, e por isso nem a régua nem as avaliações antigas
sentem. É obra de gesto, não de dado.

### A Memória da sessão — vai para dentro do encontro numerado

Dito por ele: *"Memória da sessão, vamos ter apenas as sessões numeradas."* Os três campos
(`diagSessaoFeito`, `diagSessaoReacao`, `diagSessaoProx`, HTML 1644–1646) deixam de ser bloco
solto no pé da avaliação e passam a viver **dentro do encontro numerado**, na régua — o mesmo
lugar onde a escala vai morar. **O encontro numerado vira o lugar do que ficou daquele dia.**

**Ponta solta a confirmar com ele:** hoje esses três campos alimentam o *"último encontro"* que
aparece na chegada do paciente (HTML 1009, `renderUltEncontro`) — aquilo que ele pediu para ver
**antes** de atender. Se continua, passa a ler da sessão numerada e nada muda para ele.

### A caixa de anotação da Psicanálise — a decisão que falta

Ele pediu "uma caixa para anotação" no bloco Psicanálise (HTML 1595). A casa já sabe fazer de
duas maneiras, e nenhuma precisa ser inventada:

- **caixa única do bloco** — o padrão `quiroObs` (7931): um texto só, gravado com a avaliação;
- **anotação por conceito marcado** — o padrão `elementosObs` (7825): a caixa nasce quando o item
  é marcado e fica presa a ele. Hoje `togglePsicanalise` (7653) guarda `{categoria, nome}`;
  ganharia uma terceira chave, e o PDF (8101), que imprime só os nomes, imprimiria a nota junto.

**Recomendação do Claude:** a segunda, e por motivo clínico — "Recalcamento" sozinho não diz nada
seis meses depois; *"aparece quando ela fala do pai, sempre muda de assunto"* diz. **Com um
cuidado:** a lista rola dentro de 400px e tem 59 itens em 11 categorias; anotação dentro da lista
some. O certo é a lista continuar só de marcar, e os marcados subirem para um bloco *"O que foi
identificado nesta sessão"*, cada um com sua linha.

**A resposta dele — "manter apenas a do alto no início" — ficou com duas leituras**, e está por
esclarecer: ou é a caixa única no alto do bloco, ou é nenhuma caixa nova (a folha limpa lá em
cima já é o lugar de escrever).
