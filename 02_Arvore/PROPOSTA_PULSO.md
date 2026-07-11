# Proposta — Módulo Pulsologia (Diagnóstico Integrado)

**Data:** 10/07/2026 · **Status:** aguardando revisão do Montgomery
**Fonte:** conhecimento clássico de MTC (consistente com Maciocia, "Les principes fondamentaux de la médecine chinoise", na biblioteca `03_Biblioteca/Acupuntura_MTC`). Transparência: redigido do conhecimento geral de MTC do Claude, não extraído página a página do PDF — Montgomery valida cada item antes de entrar na plataforma.

## Posição na tela (decidido 10/07)
Em Diagnóstico Integrado, na ordem em que o Montgomery examina o paciente:
1. Calculadora IMC (já existe)
2. **Pulso** (este módulo)
3. **Língua** (agendado — aguarda material mais leve/OCR)
4. **Orelha** (Auriculoterapia, já existe — desce para depois de Língua)
5. 5 Elementos e demais módulos

## Estrutura do módulo

### A. As 3 posições em cada punho (Cun · Guan · Chi)
| Posição | Punho ESQUERDO | Punho DIREITO |
|---|---|---|
| **Cun (polegar)** | Coração / Intestino Delgado | Pulmão / Intestino Grosso |
| **Guan (meio)** | Fígado / Vesícula Biliar | Baço / Estômago |
| **Chi (cotovelo)** | Rim Yin (Água) | Rim Yang (Ming Men) |

Interface: dois punhos desenhados em SVG (mesmo estilo linha fina), cada posição clicável — clicar marca "alteração nesta posição" na ficha.

### B. Os 3 níveis de profundidade
- **Superficial (flutuante)** — Yang, exterior
- **Médio** — Estômago/Baço, Qi nutritivo
- **Profundo** — Yin, órgãos internos

### C. Os 28 pulsos clássicos (clicáveis, com síndrome indicada)
Agrupados por categoria para busca rápida:

**Ritmo/Frequência**
1. **Rápido (Shu)** — Calor
2. **Lento (Chi)** — Frio
3. **Apressado (Cu)** — rápido com pausas irregulares; Calor com estagnação de Qi
4. **Atado (Jie)** — lento com pausas irregulares; Frio com estagnação
5. **Intermitente (Dai)** — pausas regulares; Qi dos órgãos esgotado (atenção: Coração)

**Profundidade**
6. **Flutuante (Fu)** — invasão externa (Vento); ou Yin deficiente com Yang flutuando
7. **Profundo (Chen)** — padrão interno; estagnação ou deficiência de Yang
8. **Escondido (Fu-oculto)** — mais profundo que o Chen; Frio interno grave, dor intensa
9. **Firme (Lao)** — profundo e forte; Frio interno com estagnação

**Força/Volume**
10. **Vazio (Xu)** — deficiência de Qi
11. **Cheio (Shi)** — padrão de excesso
12. **Fraco (Ruo)** — profundo e sem força; deficiência de Yang/Qi
13. **Fino (Xi)** — como um fio; deficiência de Sangue ou Yin
14. **Minúsculo (Wei)** — quase imperceptível; colapso de Qi/Yang
15. **Grande (Da)** — amplo; Calor no Estômago/Intestinos
16. **Transbordante (Hong)** — cheio na chegada, vazio na saída; Calor pleno
17. **Disperso (San)** — sem raiz; Qi do Rim esgotado (grave)

**Forma/Qualidade**
18. **Escorregadio (Hua)** — como pérolas rolando; Umidade, Fleuma, alimentos estagnados, gravidez
19. **Áspero/Rugoso (Se)** — deficiência de Sangue; estagnação de Sangue
20. **Em corda (Xian)** — como corda de violino; padrões do Fígado, dor, Fleuma
21. **Tenso (Jin)** — como corda esticada e retorcida; Frio, dor
22. **Mole (Ru)** — flutuante e fino sem força; Umidade com deficiência de Baço
23. **Couro (Ge)** — como pele de tambor; perda de Sangue/essência
24. **Movediço (Dong)** — como feijão saltando, sem raiz; dor intensa, choque, susto
25. **Curto (Duan)** — não preenche as 3 posições; deficiência grave de Qi
26. **Longo (Chang)** — ultrapassa as posições; excesso, Calor de Fígado (se suave: constituição forte)
27. **Rápido-agitado (Ji)** — muito rápido (7+ batidas/ciclo); Yang extremo, Yin esgotado
28. **Oco (Kou)** — flutuante, vazio no meio (como talo de cebolinha); perda aguda de Sangue

### D. Comportamento na plataforma (mesmo padrão dos outros módulos)
- Busca por digitação (ex.: "corda", "escorregadio", "calor")
- Clicar num pulso → entra na ficha, com a(s) posição(ões) marcada(s) se selecionadas
- Caixa **"Observações clínicas — Pulso"** (estilo `.fg`, como Elementos/Auriculoterapia)
- Salvo no Supabase, aparece no resumo e no PDF impresso
- Entrada no motor de sugestões cruzadas: pulso em corda → sugere Fígado/Madeira; escorregadio → Baço/Umidade etc. (fase 2, se aprovado)

## Perguntas para o Montgomery antes de implementar
1. Os 28 completos, ou começamos com os ~12 mais frequentes na sua prática e crescemos depois?
2. O desenho dos dois punhos com Cun/Guan/Chi clicável: quer já na v1 ou começa só com a lista?
3. As correspondências acima batem com o que você aprendeu no seu curso? Corrija o que for diferente.
