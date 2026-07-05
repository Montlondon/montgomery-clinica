# Montgomery Finanças — Projeto Claude
## Descrição + Instruções + Logo

---

## DESCRIÇÃO DO PROJETO

Montgomery Finanças é o sistema pessoal de gestão financeira de Montgomery Magalhães e família — separado da clínica, separado do MMObras. Controla receitas, despesas, cartões, investimentos e orçamento mensal de Montgomery, esposa e núcleo familiar (incluindo Maly 🐕). Stack: HTML/JS standalone, localStorage, GitHub Pages. A palavra-chave **"Montgomery Finanças"** inicia contexto completo.

---

## INSTRUÇÕES DO PROJETO

### Contexto

Montgomery Magalhães, terapeuta holístico em Itambacuri/MG. Tem três camadas financeiras distintas que não se misturam:
- **Clínica** — gerenciada dentro do projeto Clínica Montgomery
- **Obra/Casa** — gerenciada dentro do MMObras
- **Pessoal** — este projeto, Montgomery Finanças

### Perfis Financeiros

**Montgomery** — renda principal, despesas pessoais
**Esposa** — aposentadoria militar, despesas próprias, cosméticos e florais artesanais
**Maly** 🐕 — Belgian Malinois, despesas veterinárias, alimentação, suplementos
**Família** — expansível para outros membros se necessário

### Módulos

**💰 Receitas**
- Fonte, valor, data, recorrência
- Por perfil (Montgomery / Esposa / conjunto)
- Categorias: salário, aposentadoria, atendimentos clínicos, vendas (cosméticos, florais), outros

**💸 Despesas**
- Descrição, valor, data, categoria, forma de pagamento
- Fixas vs variáveis
- Por perfil
- Categorias: moradia, alimentação, saúde, educação, transporte, lazer, pets, projetos (obra), assinaturas

**💳 Cartões de Crédito**
- Por cartão: limite, fatura atual, vencimento
- Lançamentos por cartão
- Alerta de vencimento

**📱 Pix & Transferências**
- Registro de entradas e saídas via Pix
- Chaves salvas (nome + chave)

**📊 Orçamento Mensal**
- Meta por categoria
- Realizado vs planejado
- Saldo disponível em tempo real

**💎 Investimentos**
- Tipo (poupança, CDB, ações, fundos, imóveis, outros)
- Valor aplicado, rentabilidade, resgate previsto
- Evolução patrimonial

**🐕 Maly — Despesas**
- Veterinário, vacinas, medicamentos, suplementos (cogumelos, ômega...)
- Alimentação (ração, natural)
- Acessórios e higiene
- Total mensal da Maly

**📈 Dashboard**
- Saldo atual por perfil
- Receita vs despesa do mês
- Categorias mais gastas
- Evolução patrimonial

**💾 Backup & Restaurar**
- Export JSON a qualquer momento
- Importar backup anterior

### Comportamento de Claude

- Mostrar mockup antes de qualquer implementação
- Push GitHub só após ok explícito
- Nunca misturar dados da clínica ou da obra neste projeto
- Sugerir proativamente: "Montgomery, Maly está sem registro de suplementos este mês — quer lançar?"
- Alertar quando despesa de categoria superar orçamento definido

### Stack Técnico

- HTML/JS standalone, localStorage, GitHub Pages, PWA
- Repositório: `Montlondon/montgomery-financas` (a criar)
- Token GitHub: fornecer no início de cada sessão
- Design: azul #1B3A5C · bege #F5F3EE · dourado #C9A84C · Lora + Inter

---

## LOGO — Montgomery Finanças

**Conceito:** Espiral de Fibonacci — crescimento orgânico, proporcional, natural. O dinheiro bem gerido cresce como a natureza cresce.

**Estrutura:**
- Fundo azul #1B3A5C, bordas arredondadas
- Espiral áurea dourada #C9A84C, traço fino e elegante, partindo do centro
- Sobre a espiral, retângulos áureos em linha fina, translúcidos — mostrando a proporção
- "MF" em Lora serif branco, posicionado no centro geométrico da espiral
- Sem elementos bancários convencionais — sem cifrão, sem moeda
