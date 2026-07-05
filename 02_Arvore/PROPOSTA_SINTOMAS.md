# Proposta — Sintomas clicáveis em "5 Elementos" e "Pontos do Corpo"

Rascunho pra você revisar/editar antes de eu colocar no código. Mesmo formato
que já funciona em `sistemasABC[].sindromes` (lista de frases curtas,
clicáveis, soma à ficha do paciente).

**Fonte da seção 5 Elementos:** Módulo 6 do seu livro de curso
("Acupuntura Para Todos", `livrodigitalacupunturaparatodos (1).pdf`,
páginas 54-59) — seção "Sinais de desequilíbrio" de cada elemento. É mais
rico que a v1 (que eu tinha tirado só do campo `psique` já resumido no
código). Mantive a fonte oficial do seu curso, não busquei nada genérico
da internet.

## 5 Elementos (`matrizCincoElementos`)

**MADEIRA (Fígado/Vesícula Biliar)**
Sinais de desequilíbrio:
- conflito interno / indecisão
- impaciência
- irritabilidade
- intolerância
- raiva
- agressividade / violência
- expansão sem olhar para o outro
- frustração
- pressão interna

**FOGO (Coração/Intestino Delgado)**
Sinais de desequilíbrio:
- agitação / ansiedade
- excitamento grande
- entusiasmo desmedido
- irresponsabilidade
- exaustão após muita atividade

**TERRA (Baço-Pâncreas/Estômago)**
Sinais de desequilíbrio:
- preocupações infindáveis, ruminações mentais
- muito pensamento e pouca ação
- sensação de vazio (dificulta cuidar de si e do outro)
- solicitude (dependência, apego, medo de perder, insegurança)

**METAL (Pulmão/Intestino Grosso)**
Sinais de desequilíbrio:
- dificuldade nos processos de luto
- dificuldade em processar perdas e mágoas
- dificuldade de viver e criar vínculos duradouros

**ÁGUA (Rim/Bexiga)**
Sinais de desequilíbrio:
- falta de determinação
- medo desencorajado por dificuldades
- medo do fracasso, das responsabilidades, da morte, da vida, da solidão, do contato social
- falta de autoestima
- ambição e crueldade
- poder e dominação

---

*Observação: cada elemento no seu livro também tem um bloco "Aprender/que
perguntas fazer" (o caminho de reequilíbrio) — não coloquei como sintoma
clicável porque é orientação terapêutica, não queixa do paciente. Mas se
quiser, posso usar esse texto como o conteúdo que aparece ao lado quando o
elemento é selecionado (parecido com o que já existe no campo `balance`).*

## Pontos do Corpo (`pontosCorpo`)

Você adicionou `APOSTILA DE QUIRO ATUALIZADA.pdf` ao repositório — encontrei
lá os "Quadros de Efeitos das Raízes Nervosas" por vértebra (Cervical,
Torácica e Lombar) e a seção de sinais sacroilíacos, que são muito mais
específicos do que eu tinha colocado na v1 (que era semiologia geral, sem
fonte). Troquei tudo isso pelo conteúdo real da sua apostila. Para
Joelho/Cotovelo/Pelve/Tornozelo a apostila só tem técnica de ajuste, sem
quadro de sintomas — mantive semiologia geral nessas quatro.

**Cervical** *(quadro de raízes nervosas C1-C7, apostila p.7-8)*
- dor de cabeça / cefaleia
- nervosismo, insônia
- resfriados frequentes
- hipertensão arterial
- enxaqueca
- esgotamento nervoso, cansaço crônico
- vertigem
- problemas sinusais
- estrabismo
- perda repentina de audição ou visão sem motivo aparente
- nevralgia, neurite
- acne, eczema no rosto
- febre do feno, secreção nasal, adenoides
- laringite, faringite, rouquidão
- dor de garganta, amigdalite
- rigidez no pescoço
- dor no braço superior externo
- bursite no ombro
- problemas de tireoide

**Lombar** *(quadro de raízes nervosas L1-L5, apostila p.25)*
- ciática
- lombalgia
- constipação, colite, disenteria
- diarreia
- hérnia inguinal
- dor/queixa em órgãos sexuais, útero ou bexiga
- cãibra, dificuldade circulatória, veias varicosas
- problemas menstruais (dor ou irregularidade)
- dor nos joelhos
- problemas urinários
- inchaço e fragilidade nas pernas/tornozelos

**Sacroilíaca** *(sinais descritos na apostila p.29)*
- dor sacroilíaca que piora pela manhã e melhora com a atividade (padrão oposto à lombalgia discal)
- dor unilateral
- histórico de torção/levantamento de peso com sensação de fisgada
- dor irradiada pra nádega, parte posterior da coxa (geralmente não passa do joelho) e virilha do mesmo lado
- escoliose de adaptação (compensação em torácica/cervical)
- tensão/dor no quadril (bursite, artrose)
- tensão crônica no joelho ou tornozelo do mesmo lado

**Joelho** *(semiologia geral, sem quadro específico na apostila)*
- dor patelar
- dor lateral do joelho
- estalos/crepitação ao mover
- instabilidade fêmoro-patelar
- derrame articular (joelho inchado)
- bloqueio ao estender totalmente

**Cotovelo** *(semiologia geral, sem quadro específico na apostila)*
- dor lateral do cotovelo (tipo epicondilite)
- dor medial do cotovelo
- restrição de rotação do antebraço (supinação/pronação)
- formigamento até a mão

**Pelve** *(semiologia geral + ponto 3 da seção Pelve, apostila p.27)*
- báscula pélvica
- crista ilíaca desnivelada
- tensão no iliopsoas
- sensação de "perna mais curta"
- tensão excessiva no quadril (bursite, artrose)

**Tornozelo** *(semiologia geral, sem quadro específico na apostila)*
- entorse de tornozelo (histórico ou recente)
- dor no tendão de Aquiles
- instabilidade talo-crural ("tornozelo fraco")
- inchaço recorrente

---

**Bônus que achei na apostila e não está em nenhuma região hoje:** o quadro
de raízes nervosas **Torácica (T1-T12)** é tão rico quanto o de Cervical e
Lombar — asma, dificuldade respiratória, dor no antebraço/mãos, alterações
cardíacas, bronquite/pleurite/pneumonia, problemas de vesícula biliar,
problemas hepáticos, problemas gástricos/úlcera, baixa resistência,
alergias, problemas renais, problemas de pele, reumatismo. Hoje não existe
uma região "Torácica" em Pontos do Corpo (só Joelho, Lombar, Cervical,
Cotovelo, Pelve, Sacroilíaca, Tornozelo) — combina com o item já registrado
no ROADMAP "Expandir Pontos do Corpo com mais regiões". Se quiser, posso
criar essa região nova já com esses sintomas, me diga.

---

**Como pretendo implementar depois que você aprovar:**
Igual já funciona no Balanço Método — cada frase fica um "chip" clicável ao
lado da carta do Elemento/Região; clicar adiciona à ficha do paciente (mesmo
lugar/estado que já existe pra Bagua/ABC), aparece no resumo e no PDF
impresso. Nenhuma mudança visual nas cartas que já existem, só os chips
clicáveis abaixo.
