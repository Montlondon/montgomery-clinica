# Montgomery Universe — Índice Mestre
## O mapa completo de todos os projetos

*Atualizado: 1 de julho de 2026*

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
| 🏥 **Clínica** | `Clínica Montgomery` | ✅ ATIVO + ONLINE | `montgomery-clinica` → Vercel | HTML/JS + Supabase |
| 🏗️ **MMObras** | `Fibonacci MMObras` | ✅ ATIVO | `obra` → GitHub Pages | HTML/JS + localStorage |
| 🧬 **Montgomery OS** | `Montgomery OS` | 🔜 A CONSTRUIR | `montgomery-os` (criar) | HTML/JS + localStorage |
| 💰 **Montgomery Finanças** | `Montgomery Finanças` | 🔜 A CONSTRUIR | `montgomery-financas` (criar) | HTML/JS + localStorage |
| 🐕 **Dra. Vera (Maly)** | `Dra. Vera` | 🔜 A CONSTRUIR | `dra-vera` (criar) | HTML/JS + localStorage |
| 🧠 **Meta** | `Meta Montgomery` | ✅ ATIVO | — (sessão estratégica) | — |
| 💡 **Ideias & Projetos** | `Ideias Montgomery` | ✅ ATIVO | — (repositório de ideias) | — |

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
| Ícones | SVG Lucide — linha fina |
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
