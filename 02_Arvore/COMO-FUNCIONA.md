# Como a Plataforma Funciona — Glossário e Caminho Percorrido

Documento de estudo. Objetivo: você entender o "todo", não só usar a plataforma no automático. Vou completando conforme surgirem termos novos nas nossas conversas.

## 1. As peças do quebra-cabeça (glossário)

| Termo | O que é | Onde aparece no seu projeto |
|---|---|---|
| **index.html** | O arquivo único que é a plataforma inteira: HTML (estrutura), CSS (visual) e JavaScript (funcionamento) tudo junto | Todo o sistema que você usa |
| **GitHub** | Onde o código mora e guarda histórico de tudo que já mudou, como um "Google Docs" do código | `github.com/Montlondon/montgomery-clinica` |
| **Commit** | Um "salvamento" no GitHub, com uma mensagem dizendo o que mudou | Cada ajuste que fazemos gera um |
| **Push** | Enviar os commits do computador pro GitHub (sem isso, fica só local) | `git push origin main` |
| **Vercel** | Serviço que pega o código do GitHub e publica como site real, na internet | `montgomery-clinica.vercel.app` |
| **Deploy** | O ato de publicar uma nova versão do site no ar (a Vercel faz automático a cada push) | Acontece sozinho depois de cada push |
| **Supabase** | O banco de dados: onde ficam os dados reais (pacientes, sessões, financeiro), separado do código | Tabelas `pacientes`, `sessoes`, `diagnosticos`, `despesas`, `configuracoes` |
| **API / REST** | A "linguagem" que o site usa pra pedir e enviar dados ao Supabase pela internet | Função `supaReq()` no código |
| **PWA** (Progressive Web App) | Um site que se comporta como app: pode ser instalado na tela do celular, abre em tela cheia | O ícone "Montgomery" que você instalou no Android |
| **Manifest (manifest.json)** | O "documento de identidade" do PWA — nome, ícone, cores | `manifest.json` no repositório |
| **TWA** (Trusted Web Activity) | Empacotar o mesmo site dentro de um app de verdade pra publicar na Play Store | Ainda não fizemos — no roadmap, item futuro |
| **Domínio/URL** | O endereço do site na internet | `montgomery-clinica.vercel.app` |

## 2. O caminho até aqui

Pra essa plataforma existir e funcionar como funciona hoje, estas peças tiveram que se encaixar:

1. **Conta no GitHub** — criada antes de mim, é onde o código vive desde o início (`Montlondon/montgomery-clinica`).
2. **Conta no Vercel, conectada ao GitHub** — assim, toda vez que o código muda no GitHub, o Vercel detecta e publica a versão nova automaticamente, sem você precisar fazer nada manualmente.
3. **Projeto no Supabase, com as tabelas certas** — cada tipo de dado (pacientes, sessões, diagnósticos, despesas, configurações) tem sua própria tabela, e o código fala com elas pela internet usando uma chave de acesso.
4. **O arquivo `index.html`** — escrito e evoluído ao longo do tempo, hoje com toda a lógica de Pacientes, Agenda, Diagnóstico Integrado, Balanço Método, Financeiro, etc.
5. **O `manifest.json`** — adicionado recentemente pra transformar o site num PWA instalável, com o ícone da sua logo.

No nosso trabalho junto, o ciclo de toda mudança é sempre o mesmo:
**eu edito o `index.html` → testo a sintaxe → faço commit → dou push pro GitHub → a Vercel publica automaticamente → você vê a mudança no link.**

## 3. Pra aprofundar quando quiser

- Ver o histórico completo de mudanças: `git log` no repositório, ou a aba "Commits" no GitHub.
- Ver os deploys e quando cada um aconteceu: painel da Vercel (vercel.com → seu projeto).
- Ver os dados crus, fora do app: painel do Supabase → Table Editor.
