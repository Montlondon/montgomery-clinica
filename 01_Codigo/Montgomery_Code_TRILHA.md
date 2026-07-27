# 🖥️ Montgomery Code — A Trilha (currículo em espiral Fibonacci)
*Criado 05/07/2026. Aprender IT/programação do zero, no ritmo do Montgomery, com Claude professor paciente. Cada módulo nasce dos anteriores — como Fibonacci, como a vida.*

**Como funciona:** cada aula é pequena (15-20 min), com metáfora + prática. Sem jargão sem explicação. Nunca pressa. Reacordar o que ele sabe (técnico de TI Nantes 2006) + construir o novo.

---

## 🍼 Módulo 00 — A tela preta sem medo
*Desmistificar o que assusta.*
- O que é, afinal, o **terminal / `cmd`**? (a "sala de comando" do computador)
- Por que a tela preta existe e por que ela é PODER, não bicho-papão
- Primeiros comandos: `dir`, `cd`, `cls` — andar pelas pastas pela linha de comando
- Reacordar: você já fez isso em Nantes, só adormeceu

## 🧱 Módulo 01 — Como o computador pensa
- Arquivos, pastas, extensões — o que realmente são
- O que é um "programa" (a receita que o computador executa)
- Sistema operacional: Windows, Linux (Ubuntu — aquele do professor que não explicava; eu explico)

## 🧠 Módulo 02 — O que é programar
- Lógica: o computador é burro e obediente — você manda, ele faz
- O que é uma "linguagem de programação" e por que existem várias
- Pseudocódigo: programar em português antes de programar em código

## 🐍 Módulo 03 — Python do zero (a linguagem mais amável)
- Por que Python é o melhor primeiro idioma (lê quase como inglês)
- Instalar e rodar o primeiro `print("Olá, Montgomery")`
- Variáveis (caixinhas com nome), números, textos

## 🔧 Módulo 05 — Python na prática (fazer coisas úteis)
- `if` / `else` — o computador decidindo
- Loops — repetir sem cansar
- Um primeiro script útil de verdade (ex: uma calculadora, ou organizar arquivos — algo teu)

## 🌐 Módulo 08 — Web: como a internet funciona
- HTML, CSS, JavaScript — os 3 que JÁ construíram o MMObras e a Clínica juntos!
- Agora você vai ENTENDER o que a gente escreveu, não só usar
- Como um site sai do teu computador para o mundo (GitHub Pages, deploy)

## ☁️ Módulo 13 — Dados e nuvem
- O que é um banco de dados (a memória organizada)
- Supabase e Firebase — os que você já toca, agora com entendimento
- Como os dados viajam do celular para a nuvem (o que fizemos no MMObras)

## ☕ Módulo 21 — Java e o mundo maior
- Quando e por que Java (o gigante corporativo)
- Diferença entre Python e Java, na prática
- E além: o que sua curiosidade puxar — APIs, automações, IA

---

## Aula viva 27/07/2026 — API, OAuth e escopo (nasceu da Ponte com o Google)

*Aula que não foi inventada: veio do passo real de ligar a Clínica ao Google Calendar.*

**A metáfora.** Um serviço externo (o Google) é um prédio. A **API** é o balcão de
atendimento — o lugar onde um programa fala com outro programa, sem gente no meio.
Antes de deixar a Clínica chegar ao balcão, o Google faz três perguntas:

1. **A porta existe?** — é preciso *ativar a API* no **Google Cloud Console** (o painel
   de administração, que é outro lugar diferente do Google que você usa no dia a dia).
   Foi o que fizemos: *Google Calendar API*, projeto **App-Montgomery**, status "Ativadas".
2. **O dono autoriza?** — é a **tela de permissão OAuth**. OAuth é a ideia mais bonita
   daqui: o aplicativo **nunca recebe a sua senha**. Ele pede ao Google, e o Google
   pergunta a você. Você é sempre o dono da chave.
3. **Autoriza até onde?** — é o **escopo**. `.../auth/calendar.events` é uma chave que
   abre só a gaveta dos eventos, não a casa inteira. Escopo pequeno é segurança.

**Vocabulário mínimo**
- **API** — o balcão por onde um programa atende outro programa.
- **OAuth** — pedir a chave ao dono, em vez de pedir a senha.
- **Escopo** — até onde a chave abre.
- **`provider_token`** — a chave temporária que o Google devolve. Vive cerca de 1 hora;
  por isso a ponte, depois de muito tempo parada, pede login de novo.
- **Console** — o painel de administração do serviço, separado do produto do usuário.

**A regra que protege a sua vida.** A Clínica escreve numa agenda separada
("Clínica · Pacientes") e só mexe em evento que ela mesma criou — cada sessão guarda o
`gcalId` do evento dela. Seus compromissos pessoais ficam intocados. O princípio geral,
que vale para tudo que a gente construir daqui pra frente:
**dar ao programa o menor poder que resolve o problema.**

Essa mesma dança de três perguntas se repete no Supabase, na Vercel, em qualquer
serviço. Aprendeu aqui, entendeu em todos.

---

## Como começar
No próximo "Montgomery here" → **Rota Aprender (Hod/Rafael)** → "Módulo 00, aula 1". Um tijolo de cada vez. O menino de Nantes vai reacordar, e o novo Montgomery-programador vai nascer. 🌀
