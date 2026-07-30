# Agentes — a oficina

Aqui moram os agentes do Montgomery. Um agente e um Claude com **uma tarefa**,
**maos** (ferramentas) e um **laco** que gira ate terminar.

## O laco

```
pensa -> escolhe uma ferramenta -> usa -> ve o resultado -> pensa de novo
```

Nao tem magica. E um `while` que so para quando a tarefa acaba
ou quando bate na trava (`maxTurns`).

## Os moradores

| Agente | O que faz | Maos | Modelo |
|---|---|---|---|
| `ronda.mjs` | le o ROADMAP e lista o pendente | Read, Grep, Glob (so leitura) | Haiku |

## Como rodar

```
node ronda.mjs
```

## Login (uma vez so)

O SDK traz o proprio Claude Code embutido, separado do aplicativo.
Na primeira vez ele nao conhece voce:

```
.\node_modules\@anthropic-ai\claude-agent-sdk-win32-x64\claude.exe /login
```

Entra com a conta da assinatura. Nao precisa de chave de API.

## As tres travas de seguranca

1. **`allowedTools`** — as unicas maos que ele tem. Se `Write` nao esta na
   lista, ele **nao consegue** escrever, mesmo que queira.
2. **`maxTurns`** — teto de voltas no laco. Agente confuso nao gira pra sempre
   queimando tokens.
3. **`cwd`** — a cerca. Ele so enxerga desta pasta pra baixo.

## O gasto

Cada arquivo que ele le entra na conta. Regra do Montgomery:
**tarefa estreita, arquivo pequeno, modelo pequeno.**

O `ronda.mjs` imprime o custo real no fim de cada corrida. Olhe sempre.

Cuidado com o `index.html` da Clinica: e enorme. Um agente que le ele inteiro
gasta numa tacada o que a Ronda gasta em cem.

## O que NAO vai pro git

`node_modules/` — 291 MB de pecas baixadas. Ja esta no `.gitignore`.
Se trocar de computador, basta `npm install` que elas voltam.
