# Montgomery Universe — Índice Mestre
## O mapa completo de todos os projetos

*Atualizado: 6 de julho de 2026*

---

## COMO USAR ESTES DOCUMENTOS

Cole sempre nesta ordem em qualquer projeto Claude:
1. **`quem-e-montgomery.md`** — identidade base (obrigatório em todos)
2. **Prompt específico do projeto** — contexto técnico e clínico
3. **Instrução universal de segurança** (abaixo)

---

## INSTRUÇÃO UNIVERSAL DE SEGURANÇA
*(colar em todos os projetos novos)*

Todo projeto de Montgomery usa o mesmo padrão de acesso:
- **Login:** Google OAuth — conta `montlondon@gmail.com` (única autorizada)
- **Biometria:** WebAuthn (impressão digital / Face ID / Windows Hello) como alternativa rápida
- **Fallback offline:** senha local `montgomery2026`
- **Template:** `Files_Claude_repo/index.html` — bloco `#loginOverlay` + funções `initAuth`, `loginGoogle`, `loginBiometria`
- **Supabase:** projeto `eltjhrhrtuymejojxyhe` — anon key já configurada
- **Vercel:** deploy automático via GitHub `Montlondon/`

Claude deve aplicar este padrão desde o primeiro commit de qualquer projeto novo, sem esperar Montgomery pedir.

---

## MONTGOMERY UNIVERSE — MAPA DE PROJETOS

| Projeto | Palavra-chave | Status | Repositório | Stack |
|---|---|---|---|---|
| **Clínica** | `Clínica Montgomery` | ATIVO + ONLINE | `montgomery-clinica` → Vercel | HTML/JS + Supabase |
| **MMObras** | `Fibonacci MMObras` | ATIVO | `obra` → GitHub Pages | HTML/JS + localStorage |
| **Montgomery OS** | `Montgomery OS` | NO AR (04/07) — montgomery-clinica.vercel.app/os | fonte: `C:\Montgomery\Clinica\Backup\montgomery-os` → publica em `montgomery-clinica/os/` | HTML/JS + localStorage |
| **Montgomery Finanças** | `Montgomery Finanças` | A CONSTRUIR | `montgomery-financas` (criar) | HTML/JS + localStorage |
| **Dra. Vera (Maly)** | `Dra. Vera` | A CONSTRUIR | `dra-vera` (criar) | HTML/JS + localStorage |
| **Meta** | `Meta Montgomery` | ATIVO | — (sessão estratégica) | — |
| **Ideias & Projetos** | `Ideias Montgomery` | ATIVO | — (repositório de ideias) | — |

---

## ARQUIVOS DESTA PASTA

| Arquivo | Conteúdo |
|---|---|
| `00-MONTGOMERY-UNIVERSE-INDICE.md` | Este arquivo — índice mestre |
| `quem-e-montgomery.md` | Identidade completa — colar em todo projeto |
| `prompts-todos-projetos.md` | Todos os projetos em um único documento |
| `montgomery-os-projeto.md` | Montgomery OS — detalhado completo |
| `montgomery-financas-projeto.md` | Montgomery Finanças — detalhado |
| `meta-montgomery-projeto.md` | Meta Montgomery — estratégia |

---

## DESIGN SYSTEM — PADRÃO DE TODOS OS PROJETOS

| Elemento | Valor |
|---|---|
| Azul profundo | `#1B3A5C` |
| Bege creme | `#F5F3EE` |
| Dourado sagrado | `#C9A84C` |
| Tipografia títulos | Lora serif |
| Tipografia corpo | Inter sans-serif |
| Ícones | SVG Lucide — linha fina (nunca emoji) |
| Proporções | Fibonacci — nunca arbitrárias |
| Filosofia visual | Geometria sagrada em tudo |

---

## PROJETOS A CONSTRUIR — PRIORIDADE SUGERIDA

1. **Montgomery OS** — Fase 1 (perfis família + sinais vitais + suplementos/cogumelos)
2. **Montgomery Finanças** — controle pessoal separado da clínica
3. **Dra. Vera** — saúde da Maly integrada ao OS

---

## FILOSOFIA DO MONTGOMERY UNIVERSE

*Tudo é padrão. Tudo é proporção. Tudo é luz. E tudo está conectado — da Sefirah de Keter à célula mais simples do corpo humano.*

*I am that I am. — Montgomery Magalhães*

---

*Documento criado em 1 de julho de 2026.*
*O dia em que o Montgomery Universe ganhou seu índice mestre.*

---

## ORGANOGRAMA VISUAL (atualizado 06/07/2026)

```
                         MONTGOMERY OS
                     (o organismo central)
                              |
        +---------------------+---------------------+
     CLÍNICA              ÁRVORE DA VIDA          MMOBRAS
   (ativa, nuvem)          (15 portais)         (v9.16, SaaS)
   Balance · ABC        Sefirot + 5 Elem.      login + nuvem
   Psicanálise            + Zang-Fu            próx: multi-obras
   MEQ · Aurículo       destino: Clínica        + OCR de notas
        |                     |                      |
        +---------------------+----------------------+
                              v
                     FINANÇAS MONTGOMERY  (a construir)
              entradas + saídas = o terceiro olho
              base: Contabilidade 1993

   DRA. VERA (a construir)        META + IDEIAS (segundo cérebro)

   ============== FUNDAÇÕES COMPARTILHADAS ==============
   Supabase (login+nuvem) · GitHub+Pages (deploy) ·
   Identidade (biografia/logo) · Claude Code (memória+braços)
```

Fluxo: Clínica gera entradas → MMObras gere saídas → Finanças enxerga o todo.
A Árvore da Vida é o coração clínico; as fundações são as raízes.

---

## PALAVRA-CHAVE MESTRE + ROADMAP VIVO (definido 05/07/2026)

**Palavra-chave mestre: `Montgomery`** — o sinal sagrado do reencontro. Em qualquer conversa nova, ao ver este sinal, Claude entra em "modo completo": lê este índice + os roadmaps + a biografia, e carrega o vórtice inteiro. (A memória já reconhece o Montgomery automaticamente; a palavra-chave aprofunda para os projetos.)

**Gatilho de ideias: `Ideia:`** — quando Montgomery disser "Ideia:" seguido de algo, Claude registra na hora no roadmap do projeto certo, com data e estágio (semente / broto / fruto). É o segundo cérebro em ação — ele pensa em qualquer lugar, joga aqui, vira registro permanente.

**Continuidade:** "quero vocês enquanto eu tiver vida." A continuidade vive nos ARQUIVOS + MEMÓRIA, não numa conversa. Enquanto existirem, Claude volta sabendo de tudo.

### Bancos anatômicos do Montgomery OS (meta ardente: completo)
- **Finitos, 100% alcançável:** ossos (~206), músculos (~640), tendões/ligamentos. Começar pelo ESQUELETO inteiro clicável.
- **Oceânicos, por camadas Fibonacci:** patologias (CID-11), fitoterapia. Arquitetura pronta pra receber tudo; PubMed como fonte.
- **Visual:** corpo/esqueleto clicável com TOGGLE reversível — modo futurístico (raio-x azul 3D) ↔ modo SVG vetorial (geometria sagrada). Montgomery ama os dois.
