# A planta do prédio — onde mora cada coisa no `index.html` da Clínica

O `index.html` tem **12.200 linhas**. Ninguém sobe andar por andar.
Este documento é a placa de cada porta: você diz o andar, e se chega lá num pulo.

> **Como usar:** diga o nome da faixa ou da seção. Exemplo:
> *"nos bonecos do Diagnóstico, a data está torta"* — e vamos direto à linha 8587.
>
> **Cuidado:** os números de linha andam a cada entrega. Se a linha não bater,
> procure pelo **texto da placa** (a frase entre `===== =====`), que essa não muda.

---

## As três camadas do prédio

Todo arquivo HTML tem três coisas empilhadas. É como uma casa:

| Camada | O que é | Onde mora aqui |
|---|---|---|
| **CSS** — a pintura | cor, tamanho, posição | linhas **21–591** (e mais pedaços soltos) |
| **HTML** — a planta baixa | o desenho, as caixas, os botões | linhas **595–2176** |
| **JavaScript** — a eletricidade | o que acontece quando se clica | linhas **2210–12200** |

**Por isso mexer numa faixa costuma tocar dois ou três pontos distantes.**
Os bonecos, por exemplo, vivem em três casas: pintura na 256, desenho na 1352,
eletricidade na 8587. Ainda assim são três pontos — não 12.200 linhas.

---

## O andar principal: o DIAGNÓSTICO

O coração da Clínica. O desenho todo cabe em **338 linhas** (1305–1642),
menos de 3% do prédio.

| Faixa | Desenho (HTML) | Eletricidade (JS) | Pintura (CSS) |
|---|---|---|---|
| **abertura** da seção | 1305 | 6198 | — |
| **1 — o cabeçalho** (quem chegou) | 1314 | 8192 | — |
| **2 — a folha limpa** (escrever primeiro) | 1339 | 8303 | — |
| ↳ o rascunho do Diagnóstico inteiro | — | 8320 | — |
| ↳ a peneira (classificar depois) | — | 8437 | — |
| **3 — os bonecos** (a família) | 1352 | 8587 | **256** |
| ↳ visualizar o DNA (desenho inteiro) | — | 8651 | — |
| ↳ o desenho propriamente dito | — | 8979 | — |
| ↳ o anel e o balão | — | 9339 | — |
| ↳ o segundo laço | — | 9370 | — |
| ↳ a peneira da família | — | 9820 | — |
| ↳ a idade das coisas | — | 9910 | — |
| **4 — o corpo** (a coluna de costas) | 1381 | 7059 | — |
| ↳ a coluna no papel | — | 7211 | — |
| ↳ mostrar ao paciente | — | 7262 | — |
| **5 — a recomendação** | 1609 | 10059 | — |
| ↳ minerais na recomendação | — | 10273 | — |
| ↳ suplementos na recomendação | — | 10296 | — |
| ↳ histórico por paciente | — | 10494 | — |
| **a régua de encontros** (o pé) | 1624 | 10715 | — |

### Dentro da Faixa 4 — as camadas do corpo

| Camada | Linha (JS) |
|---|---|
| as caixas abrem e fecham | 6207 |
| acupuntura — 361 pontos | 6354 |
| balanço método — sistemas ABC | 6406 |
| Baguá — diagnóstico circular | 6516 |
| auriculoterapia | 6691 |
| pulso — pulsologia MTC | 6854 |
| quiropraxia — o que foi ajustado | 7035 |
| psicanálise | 7486 |

### Coisas que orbitam o Diagnóstico

| O quê | Linha (JS) |
|---|---|
| memória da sessão (último encontro na chegada) | 10596 |
| histórico de Diagnóstico por paciente | 10855 |
| histórico de sessões por paciente | 10886 |
| a última leitura datada | 10929 |
| ir e voltar (ficha ↔ bancada) | 9964 |

---

## Os outros andares

### O desenho (HTML) — onde cada tela está

| Tela | Linha |
|---|---|
| tela de login | 595 |
| dashboard | 919 |
| novo paciente | 946 |
| pacientes | 1111 |
| nova sessão | 1137 |
| agenda | 1172 |
| prescrição | 1216 |
| ↳ a morada da recomendação | 1222 |
| **diagnóstico integrado** | **1305** |
| **financeiro** (o quarteirão — ver abaixo) | **1667** |
| ↳ aba clínica / aba pessoal | 1677 / 1753 |
| modais de despesa e de venda | 1784 / 1808 |
| suplementos | 1802 |
| ↳ minerais (régua de doses) | 1847 |
| ↳ ervas (posologia) | 1861 |
| ↳ onde comprar (a prateleira) | 1881 |
| modal suplemento | 1907 |
| sobre / formação | 1927 |
| configurações | 1936 |
| backup | 2054 |
| contatos | 2109 |

### A eletricidade (JS) — os motores

| Motor | Linha |
|---|---|
| sistema de login | 616 |
| a chave do Google, guardada | 624 |
| biometria (WebAuthn / passkey) | 714 |
| **a versão do app** (`APP_VER`) | **2126** |
| Supabase — a conexão | 2231 |
| lazy-load de pacientes (alívio do egress) | 2261 |
| gravar um registro sem abrir buraco | 2347 |
| ID único de verdade | 2409 |
| arquivar / triagem | 2531 |
| config padrão | 2691 |
| toast (o avisinho) | 2709 |
| navegação entre telas | 2743 |
| tabs | 2830 |
| status de salvamento | 2843 |
| WhatsApp | 2871 |
| foto | 2884 |
| diplomas | 2908 |
| exames | 2965 |
| coletar dados / salvar paciente | 2992 / 3023 |
| corrigir o nome em toda a plataforma | 3077 |
| render pacientes / ver / selecionar | 3137 / 3161 / 3212 |
| sessão | 3305 |
| **financeiro** (o quarteirão — ver abaixo) | **3386** |
| ↳ clínica / pessoal | 3461 |
| ↳ documento com marca (PDF/JPG) | 3826 |
| ↳ as duas peças que voltaram para casa | 3880 |
| suplementos (catálogo / estoque) | 3859 |
| minerais — a régua de doses | 3974 |
| a ponte: da régua para a recomendação | 4285 |
| ervas — a posologia | 4332 |
| o desfecho — segundo andar da teia | 4645 |
| a teia de ligações e os candidatos | 4779 |
| o fio (a teia acompanhando a página) | 4995 |
| a prateleira — onde comprar | 5188 |
| Google Agenda | 5349 |
| a Ponte com o Google (dois sentidos) | 5372 |
| ↳ o sentido de volta | 5615 |
| agenda | 5804 |
| ↳ agenda cheia (compromissos do Google) | 5863 |
| ↳ arrastar-e-soltar para remarcar | 5973 |
| prescrição | 6149 |
| reaproveitar receita como modelo | 11255 |
| compartilhar arquivo (JPG/PDF) | 11413 |
| configurações | 11637 |
| política de privacidade | 11718 |
| dashboard | 11736 |
| backup | 11773 |
| VCF (contatos) | 11862 |
| deletar pacientes em massa | 12005 |
| helpers / init | 12183 / 12189 |

---

## O quarteirão do FINANCEIRO (juntado em 03/08/2026, v9.5)

Antes, o Financeiro morava espalhado por nove pontos do prédio. Agora ele tem **três
quarteirões** — um por camada — e mais nada. É o passo 2 da semana de organização:
*reunir antes de cortar.*

| Camada | Onde | O que tem |
|---|---|---|
| **pintura** (CSS) | **444** | os cartões do resumo, a chave clínica/pessoal, as linhas de lançamento |
| **desenho** (HTML) | **1667–1822** | a tela, as duas abas e os dois modais |
| **eletricidade** (JS) | **3386–3918** | resumo, clínica/pessoal, despesas, vendas, documento com marca, as duas exportações |

### As quatro portas de fora

Estas **não** são o Financeiro — são as **entradas** dele. Porta tem que ficar na parede
onde a pessoa entra, então elas ficam onde estão, cada uma com placa apontando para casa.

| Porta | Linha | O que faz |
|---|---|---|
| menu lateral | 925 | `go('financeiro')` |
| barra de baixo (celular) | 2162 | `go('financeiro')` |
| Configurações — dois interruptores | 2004 / 2017 | mostrar a aba Pessoal; mostrar a dica |
| Backup — botão "Financeiro (Excel)" | 2110 | chama `expCSVF`, que agora mora no quarteirão |

### O que mudou de casa nesta arrumação

| Peça | Morava | Mora agora |
|---|---|---|
| pintura `.seg-scope` / `.linha-fin` | 464, depois do Balanço ABC | junto do resto da pintura, 444 |
| `.toggle-row` / `.switch` | dentro da pintura do Financeiro | placa própria de interruptores, 482 |
| `expCSVF` (planilha Excel) | 12023, dentro do Backup | 3883 |
| `registrarVendaSuplementos` | 10713, dentro da Recomendação | 3893 |

**Nenhuma linha de código foi alterada** — só de lugar. A prova: as linhas do arquivo
ordenadas em ordem alfabética são idênticas antes e depois, menos os comentários novos.

---

### Os vizinhos — arquivos separados

Nem tudo mora no `index.html`. Estes três são carregados de fora (linhas 2193–2195):

| Arquivo | O que guarda |
|---|---|
| `dados-clinicos.js` | os dados clínicos |
| `acupuntura-data.js` | os 361 pontos dos meridianos |
| `fitoterapia-data.js` | as ervas |

Se o assunto for **um desses dados**, o `index.html` nem precisa ser aberto.

---

## Levantar a planta de novo (Windows / PowerShell)

Quando os números envelhecerem, é este comando que redesenha o mapa. O terminal do Montgomery
é **PowerShell** — `grep` não existe lá; o equivalente é `Select-String`.

```
[Console]::OutputEncoding=[Text.Encoding]::UTF8; Select-String -Path 'C:\Montgomery\Clinica\Backup\Files_Claude_repo\index.html' -Pattern '=====' -Encoding UTF8 | Select-Object LineNumber, Line | Format-Table -AutoSize -Wrap
```

O `-Encoding UTF8` não é enfeite: sem ele os acentos saem quebrados (*família* vira *fam?lia*).
Hoje o comando devolve **119 placas**.

---

## A regra de ouro

Quanto mais precisa a porta, mais barata a corrida.

- *"arruma a Clínica"* — caro; tem que caçar o prédio inteiro
- *"nos bonecos do Diagnóstico, a data está torta"* — barato; um pulo até 8587

**Agente caro costuma ser sintoma de pedido vago.**
O preço mora no tamanho do que se abre, não no tempo de pensar.

---

*Planta levantada em 02/08/2026, sobre a v8.9. Os números andam; as placas não.*
