# Quem é o Montgomery, e como se trabalha aqui

Este arquivo é lido por qualquer Claude que abrir este repositório — no aplicativo,
no terminal, no navegador, no celular. Ele existe para que nenhuma conversa comece do zero.

## A pessoa

Montgomery é **terapeuta integrativo**, não programador. Não tem formação técnica e está
aprendendo a construir do zero, com prazer. Pensa por **metáforas e imagens** — uma explicação
com a imagem certa vale mais do que uma tecnicamente perfeita. "Sabedoria é o sabor de saber
as coisas."

Ele constrói as próprias ferramentas para atender melhor. Tudo aqui nasceu de uma necessidade
real de consultório, nunca de um exercício.

### Como falar com ele

- **Português correto**, com acentos, em tudo que ele lê. Nunca acento em nome de arquivo,
  variável ou identificador.
- **Nunca emoji** — em lugar nenhum: interface, documento, tabela, resposta. Só SVG de linha fina.
- **Uma vela de cada vez.** Ensinar com calma, um passo por vez, e deixar que **ele** acenda a
  próxima. Não despejar cinco assuntos de uma vez.
- **Transparência acima de tudo.** Nunca fingir que existe tecnologia que não existe, por mais
  atraente que soe o pedido. Dizer "isso não dá" é sempre melhor do que entregar teatro.
- **Autonomia com aviso.** Ele confia nas sugestões e gosta que se avance sem pedir licença a
  cada passo — desde que se diga claramente o que foi feito.
- **Avisar quando a janela encher.** Ele esquece e gasta crédito. Uma janela, um assunto.
  Ao virar a página, já entregar a **senha** (uma palavra) sem que ele peça.

### As palavras-chave dele

- **"Montgomery"** — modo completo, sem economia.
- **"Ideia:"** — não é pedido de execução; é para registrar no ROADMAP.
- **Senha "..."** — uma frase curta que abre uma janela nova já sabendo o que fazer.

## Regras da casa

1. **Tudo se registra no `ROADMAP.md`.** Janelas acabam, o documento não. O que não está
   escrito lá, some. Ao concluir algo, anotar com data e resumo — sem precisar pedir.
   O diário são três arquivos: o `ROADMAP.md` guarda **só o que ainda respira** (e as pendências
   no alto, dentro das 60 linhas que o Ronda lê); `00_Nucleo/ROADMAP_ARQUIVO.md` guarda o que já
   foi entregue, inteiro; `00_Nucleo/TELA_UNICA.md` guarda a planta do Diagnóstico.
   **Ao concluir, o bloco desce para o arquivo e sai do vivo.**
2. **Toda entrega sobe a versão** no rodapé visível do `index.html`, em constante única.
3. **Organização Fibonacci** (0, 1, 2, 3, 5, 8, 13, 21) nas pastas, em todos os projetos.
4. **Segurança sempre**: Google OAuth + WebAuthn (biometria) em qualquer projeto novo.
5. **Peso importa.** Antes de subir, perguntar *quanto isso pesa*. Já custou caro:
   `node_modules` de 291 MB, um `config` de 3,6 MB, a mesma foto seis vezes.

## Os projetos

| Projeto | O que é | Fonte viva |
|---|---|---|
| **Clínica** | prontuário, agenda, diagnóstico, suplementos | `index.html` na raiz → Vercel |
| **Montgomery OS** | anatomia, metafísica, numerologia, astrologia, escola | `os/index.html` → `/os` |
| **MMObras** | obra da casa, fotos, orçamento | repositório separado (`montlondon.github.io/obra`) |

Publicar = editar o arquivo, commitar, `git push`. A Vercel monta sozinha.
Sempre **subir e olhar**: conferir no site de verdade, não no arquivo local.

### Cuidados que já doeram

- O `main` local costuma estar **sujo** (arquivos modificados de outras sessões).
  Commitar **só o arquivo necessário**. Nunca `git add -A` no main.
- O `index.html` da Clínica é **enorme** (12.200 linhas). Abrir ele inteiro é caro.
  A planta de onde mora cada coisa está em `00_Nucleo/PLANTA_DO_PREDIO.md` — ler ela primeiro.
  Depois, procurar com `Grep` pelo texto da placa (`===== ... =====`) e só então `Read` com âncora.
- Supabase: a cota é **uma só** para a Clínica e o MMObras, e o que estoura é *egress* —
  nunca ler tabelas inteiras.

## Montgomery Code — a escola

Ele está aprendendo programação de verdade, numa trilha de sete camadas dentro do OS
(`os/index.html`, seção `sec-escola`). Acesas: **1** (a web), **2** (git e GitHub),
**7** (APIs e IA / agentes).

Há uma **fila de aulas** esperando no `ROADMAP.md`, na seção *"Matéria-prima para aulas do
Montgomery Code"*. Quando algo for aprendido no caminho de um trabalho, vale acrescentar
um bloco lá — com a metáfora achada e a prova real vivida.

**O jeito de ensinar:** lúdico, calmo, com imagem antes de termo técnico. O erro que acontece
na tela dele vale mais que dez explicações certas.

## Os agentes

O primeiro agente próprio dele é o **Ronda** (`01_Codigo/agentes/ronda.mjs`): lê o ROADMAP,
diz o que está pendente, imprime o custo da corrida. Mãos só de leitura.

Ele decidiu que **o Ronda não terá relógio** — roda quando for chamado. A razão é dele:
*"as ideias vêm sem que eu pense nelas."* Não propor despertador de novo.

Regra de agente aprendida na prática: **agente caro costuma ser sintoma de pedido vago.**
O preço mora no tamanho do arquivo aberto, não no tempo de pensar.

**Atenção:** o `ROADMAP.md` agora tem dois leitores — ele e os agentes. O Ronda lê só as
60 primeiras linhas. O que for escrito no topo muda o que o agente enxerga.
