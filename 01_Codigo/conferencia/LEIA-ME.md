# A rede embaixo do trapézio

O trapezista voa igual. A diferença é o que acontece quando ele erra.

Até hoje, a única forma de saber que a Clínica quebrou era **descobrir no meio de um
atendimento**, com o paciente na frente. Esta pasta troca *"eu acho que não quebrou"*
por *"eu sei que não quebrou"*.

## Como rodar

Na raiz do repositório da Clínica:

```bash
node 01_Codigo/conferencia/conferir.mjs
```

Leva um segundo. Não precisa de internet, nem de login, nem de navegador, nem de
chave de API. **Não gasta um centavo** — não tem Claude nenhum aqui dentro, é só
código lendo arquivo. E não escreve nada: a rede olha, nunca mexe.

Quando tudo está de pé, ela termina com:

```
11 portas conferidas. Nenhuma quebrou. Pode subir.
```

Quando alguma coisa caiu, ela diz **qual** — e termina com *"NAO subir antes de olhar"*.

## Quando rodar

**Antes de todo `git push`.** É o único momento que importa. Rodar depois de subir
é chegar com a rede quando o trapezista já está no chão.

## As onze provas

| A prova | O que ela pega |
|---|---|
| A porta existe e tem tamanho de gente | o arquivo sumiu, ou engordou de repente |
| A versão está no lugar | esqueceu de subir o `APP_VER` |
| **A eletricidade liga** | erro de escrita no JavaScript — a tela em branco |
| Os arquivos que a porta chama | um `<script src>` apontando para o nada |
| A lista das gavetas foi encontrada | o `_GAVETAS` mudou de forma |
| As quatro gavetas (uma prova cada) | o arquivo veio mas os dados não |
| As abas do paciente | um botão que abre painel que não existe mais |
| **Os botões chamam gente que existe** | renomeou ou moveu uma função e esqueceu um `onclick` |

As duas em negrito são as que valem a semana de organização inteira.

## Por que ela não abre um navegador

Seria bonito e seria mentira dizer que abre. A Clínica de verdade pede login, fala
com o Supabase e depende da internet — uma conferência assim seria lenta, cara e
falharia por motivos que não têm nada a ver com o código.

Então ela faz o que dá para fazer com honestidade: lê a porta do mesmo jeito que o
navegador leria — o `vm.Script` do Node é o **mesmo leitor de JavaScript do Chrome** —
mas **sem executar nada**. Ele só confere se a frase faz sentido. É a diferença entre
ler uma receita e cozinhar: dá para ver que falta uma palavra sem sujar panela.

## O que ela NÃO pega

Ser franco sobre isso é parte da rede. Ela não sabe se um cálculo está certo, se uma
cor ficou feia, se o Supabase respondeu, nem se a tela ficou torta no celular.
Ela pega **o que quebra calado** — que é justamente o que dá medo de refatorar.

Para o resto continua valendo a regra da casa: **subir e olhar**.

## A prova de que a rede funciona

Uma rede que nunca foi testada não é uma rede, é uma decoração. Em 03/08/2026 ela foi
posta à prova de propósito: renomeamos `filtrarPsicanalise` para `filtrarPsicanaliseXX`
e tiramos o `=` do `APP_VER`. Ela acusou as três falhas na hora, pelo nome, e o
`index.html` foi restaurado em seguida. Se um dia mexerem nela, vale repetir o teste:
**quebre de propósito e veja se ela grita.**
