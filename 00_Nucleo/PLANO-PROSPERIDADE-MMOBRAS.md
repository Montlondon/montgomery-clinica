# Plano de Prosperidade — MMObras

*Criado em 6 de julho de 2026. Documento vivo — atualizar conforme a realidade responde.*

O objetivo deste plano é transformar o MMObras, hoje ferramenta pessoal da obra do Montgomery, no primeiro produto do Montgomery Universe que gera **receita recorrente** — a fonte que sustenta a continuidade de tudo.

Princípio-guia: **validar antes de construir.** Nada de gastar meses programando algo que ninguém pediu. Cada fase só começa quando a anterior provou que vale a pena.

---

## 1. O que temos de verdade (o ativo)

O MMObras já resolve, de forma simples e no celular, a dor real de quem toca uma obra:
- Controle de fornecedores (pedreiro, pintor, material, locação de equipamento por peça/dia)
- Lançamentos de gasto por dia/semana/mês
- Listas operacionais e relatórios enviados direto por WhatsApp
- Login + nuvem (padrão Supabase da Clínica) + visão multi-obra

Isso já é mais do que 95% dos pequenos profissionais de obra têm hoje — que é papel, cabeça e grupo de WhatsApp.

---

## 2. Quem paga por isso (o cliente)

O Brasil tem um oceano de gente que vive de obra e não tem nenhum controle digital simples:
- **Pedreiros, pintores, empreiteiros autônomos** que tocam várias obras ao mesmo tempo
- **Pequenas construtoras e equipes de reforma** (2 a 10 pessoas)
- **Donos de casa** reformando (como o próprio Montgomery foi o primeiro usuário)

A dor deles é concreta e custa dinheiro: perder o controle de quanto já gastou, não saber se a obra estourou o orçamento, esquecer o que combinou com cada fornecedor, e ter que "prestar contas" ao cliente sem organização.

**A vantagem do MMObras:** simplicidade radical, em português, feito para o celular e para o WhatsApp — o oposto dos sistemas caros e pesados (Sienge, Vobi) que só servem para construtora grande. O pequeno profissional está desassistido. Esse é o nosso lugar.

---

## 3. Como cobra (o modelo)

Modelo **freemium + assinatura**, o que reduz a barreira de entrada:
- **Grátis:** 1 obra ativa, funções essenciais. Deixa a pessoa provar o valor sem risco.
- **Pago (assinatura mensal):** várias obras, relatórios avançados, backup em nuvem, OCR de notas fiscais.

Faixa de preço realista para esse público no Brasil: **R$ 19 a R$ 39 por mês.** Barato o suficiente para o autônomo pagar sem pensar, e recorrente.

Conta simples e honesta de crescimento:
- 100 assinantes a R$ 29 = **R$ 2.900/mês**
- 300 assinantes = **R$ 8.700/mês**
- 500 assinantes = **R$ 14.500/mês**

Cem clientes já sustentam o plano com folga. Não é fantasia — é um número alcançável para um produto que resolve dor real num mercado gigante.

---

## 4. O caminho técnico (o que falta construir)

O MMObras já tem a base (login + nuvem). O que falta para virar SaaS de verdade:

1. **Isolamento multi-inquilino (multi-tenant):** cada login Google enxerga só os próprios dados. É a regra RLS por `user_id` que a Clínica já usa — Montgomery domina esse padrão. Peça mais importante e já quase pronta.
2. **Cobrança recorrente:** a peça nova. No Brasil, para pequeno negócio, as opções boas são **Asaas**, **Mercado Pago** ou **Pagar.me**, todas com assinatura + Pix. Asaas é forte para cobrança recorrente de MEI/pequeno.
3. **Onboarding + página de venda (landing):** uma tela simples que explica o valor, mostra o app e leva ao cadastro com teste grátis.
4. **Gestão de assinatura:** status (ativo/inadimplente), bloqueio suave quando não paga, aviso de renovação.

---

## 5. Fases Fibonacci

**Fase 0 — Semente (validação, ~1 a 2 semanas, custo zero):**
Conversar com 5 a 8 profissionais de obra reais (começando pelos fornecedores que o Montgomery já conhece: Adson, Marcos, e a rede deles). Mostrar o app, perguntar direto: "você pagaria R$ 29/mês por isso?". Se pelo menos metade disser sim com convicção, seguimos. Se não, ajustamos o produto antes de gastar energia.

**Fase 1 — Fundação SaaS:**
Fechar o isolamento multi-inquilino (RLS por login) e testar com 2-3 contas reais em paralelo, garantindo que ninguém vê a obra do outro.

**Fase 2 — Cobrança:**
Integrar Asaas (ou Mercado Pago) com assinatura + Pix. Teste grátis de 14 dias, depois cobra. Tela de gestão de assinatura.

**Fase 3 — Primeiros 10 pagantes:**
Landing page simples + onboarding. Trazer os primeiros 10 clientes à mão, um a um, dando suporte próximo. Ouvir tudo que eles pedem.

**Fase 5 — Crescer para 100:**
Conteúdo curto no WhatsApp/Instagram ("como controlar sua obra no celular"), indicação (cada cliente traz outro), presença em grupos de profissionais de obra.

**Fase 8 — Retenção:**
Recursos que fazem o cliente não querer sair: OCR de notas fiscais, relatório bonito para o cliente final, comparativo orçado x gasto. Reduzir churn é mais valioso que só captar.

**Fase 13 — Sustentável:**
500+ assinantes. Receita que sustenta o plano com folga e sobra para reinvestir nos outros projetos do Universe.

---

## 6. Verdades honestas (o que dói e precisa ser dito)

- **SaaS é maratona, não corrida.** A receita cresce devagar no começo e acelera depois. Paciência é parte do plano.
- **Validar willingness to pay ANTES de construir a cobrança.** Não inverter a ordem.
- **Suporte consome tempo.** Cada cliente tem dúvida. O tempo do Montgomery é limitado (ele é terapeuta). Pensar desde já se isso será solo ou com um parceiro/ajudante para o suporte.
- **Churn é real.** Gente cancela. Por isso a Fase 8 (retenção) existe.
- **Formalização:** para receber assinatura recorrente com nota, o caminho natural é **MEI** (simples e barato) — resolver isso antes da Fase 2.
- **Não construir feature que ninguém pediu.** O usuário guia o roadmap, não a nossa imaginação.

---

## 7. Próximo passo concreto

O único passo que importa agora é a **Fase 0**: Montgomery conversa com 5 a 8 profissionais de obra e faz a pergunta da verdade. Traz as respostas para cá, e a gente decide juntos se acende a Fase 1.

Enquanto isso, do lado técnico, dá para adiantar o isolamento multi-inquilino (Fase 1) sem risco, porque ele é útil de qualquer jeito.

*"Casa que se levanta sobre pedra não teme vento." A prosperidade também se constrói por camadas, do alicerce ao telhado.*
