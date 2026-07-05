// fitoterapia-data.js
// Conteúdo compilado de literatura clássica de MTC (texto original, conhecimento de domínio público).
// Pronto para seed no Supabase (tabelas fitoterapia_ervas / fitoterapia_formulas) ou uso direto no front-end.

const fitoterapiaErvas = [
  {
    id: "renshen",
    nome_pinyin: "Ren Shen",
    nome_cientifico: "Panax ginseng",
    nome_popular: "Ginseng",
    categoria: "Tonificantes do Qi",
    sabor: ["doce", "levemente amargo"],
    natureza: "morna",
    meridianos: ["Baço", "Pulmão", "Coração"],
    acoes: "Tonifica fortemente o Qi original, sustenta o Baço e o Pulmão, gera líquidos, calma o Shen.",
    indicacoes: "Fadiga extrema, falta de ar, sudorese fria, pulso fraco/profundo, insônia por deficiência.",
    contraindicacoes: "Síndromes de excesso/calor, hipertensão não controlada, uso concomitante com Li Lu.",
    dosagem_referencia: "3–9 g/dia, decocção separada",
    elemento_relacionado: "Terra"
  },
  {
    id: "huangqi",
    nome_pinyin: "Huang Qi",
    nome_cientifico: "Astragalus membranaceus",
    nome_popular: "Astrágalo",
    categoria: "Tonificantes do Qi",
    sabor: ["doce"],
    natureza: "morna",
    meridianos: ["Baço", "Pulmão"],
    acoes: "Tonifica o Qi do Baço e do Pulmão, eleva o Qi, fortalece o Wei Qi, favorece a cicatrização.",
    indicacoes: "Imunidade baixa, prolapsos por deficiência de Qi, edema, feridas de cicatrização lenta.",
    contraindicacoes: "Síndromes de calor-excesso, estagnação com plenitude no tórax/abdômen.",
    dosagem_referencia: "9–30 g/dia",
    elemento_relacionado: "Terra"
  },
  {
    id: "danggui",
    nome_pinyin: "Dang Gui",
    nome_cientifico: "Angelica sinensis",
    nome_popular: "Angélica chinesa",
    categoria: "Tonificantes do Sangue",
    sabor: ["doce", "pungente"],
    natureza: "morna",
    meridianos: ["Fígado", "Coração", "Baço"],
    acoes: "Tonifica e move o Sangue, regula a menstruação, umedece secura por deficiência de Sangue.",
    indicacoes: "Irregularidade menstrual, dismenorreia, palidez, tontura, constipação por secura.",
    contraindicacoes: "Diarreia por deficiência de Baço, sangramento ativo abundante.",
    dosagem_referencia: "6–15 g/dia",
    elemento_relacionado: "Madeira"
  },
  {
    id: "baizhu",
    nome_pinyin: "Bai Zhu",
    nome_cientifico: "Atractylodes macrocephala",
    nome_popular: "Atractylodes branca",
    categoria: "Tonificantes do Qi",
    sabor: ["doce", "amargo"],
    natureza: "morna",
    meridianos: ["Baço", "Estômago"],
    acoes: "Tonifica o Baço, seca Umidade, consolida o Qi defensivo, previne aborto por deficiência.",
    indicacoes: "Distensão abdominal, fezes moles, falta de apetite, edema por Umidade-deficiência.",
    contraindicacoes: "Secura intensa de líquidos, síndromes de calor-excesso.",
    dosagem_referencia: "6–15 g/dia",
    elemento_relacionado: "Terra"
  },
  {
    id: "fuling",
    nome_pinyin: "Fu Ling",
    nome_cientifico: "Poria cocos",
    nome_popular: "Poria",
    categoria: "Drenam Umidade",
    sabor: ["doce", "insípido"],
    natureza: "neutra",
    meridianos: ["Baço", "Estômago", "Coração", "Rim"],
    acoes: "Drena Umidade, fortalece o Baço, calma o Shen.",
    indicacoes: "Edema, palpitações com ansiedade, insônia, fezes moles.",
    contraindicacoes: "Deficiência de Yin com calor por secura.",
    dosagem_referencia: "9–15 g/dia",
    elemento_relacionado: "Terra"
  },
  {
    id: "gancao",
    nome_pinyin: "Gan Cao",
    nome_cientifico: "Glycyrrhiza uralensis",
    nome_popular: "Alcaçuz chinês",
    categoria: "Tonificantes do Qi / Harmonizantes",
    sabor: ["doce"],
    natureza: "neutra",
    meridianos: ["Todos os 12 meridianos, especialmente Baço, Estômago, Pulmão, Coração"],
    acoes: "Harmoniza outras ervas, tonifica o Qi, modera toxicidade, alivia espasmos e tosse.",
    indicacoes: "Fadiga, tosse, espasmos abdominais; usado como regulador em quase toda fórmula clássica.",
    contraindicacoes: "Edema, hipertensão (uso prolongado em dose alta), hipocalemia.",
    dosagem_referencia: "3–9 g/dia",
    elemento_relacionado: "Terra"
  },
  {
    id: "chaihuy",
    nome_pinyin: "Chai Hu",
    nome_cientifico: "Bupleurum chinense",
    nome_popular: "Bupleuro",
    categoria: "Regulam o Qi do Fígado",
    sabor: ["amargo", "pungente"],
    natureza: "fresca",
    meridianos: ["Fígado", "Vesícula Biliar"],
    acoes: "Libera o Qi estagnado do Fígado, eleva o Yang, dispersa calor de meio-estágio (Shao Yang).",
    indicacoes: "Irritabilidade, distensão hipocondríaca, febre intermitente, prolapsos por Qi descendente.",
    contraindicacoes: "Deficiência de Yin do Fígado com Yang ascendente sem controle, hemorragia.",
    dosagem_referencia: "3–10 g/dia",
    elemento_relacionado: "Madeira"
  },
  {
    id: "baishao",
    nome_pinyin: "Bai Shao",
    nome_cientifico: "Paeonia lactiflora",
    nome_popular: "Peônia branca",
    categoria: "Tonificantes do Sangue",
    sabor: ["amargo", "ácido"],
    natureza: "fresca",
    meridianos: ["Fígado", "Baço"],
    acoes: "Nutre o Sangue, suaviza o Fígado, alivia espasmos, controla sudorese.",
    indicacoes: "Cólicas, espasmos musculares, irritabilidade por estagnação do Fígado, dismenorreia.",
    contraindicacoes: "Yang deficiente com frio intenso.",
    dosagem_referencia: "6–15 g/dia",
    elemento_relacionado: "Madeira"
  },
  {
    id: "shudihuang",
    nome_pinyin: "Shu Di Huang",
    nome_cientifico: "Rehmannia glutinosa (preparada)",
    nome_popular: "Rehmannia preparada",
    categoria: "Tonificantes do Yin/Sangue",
    sabor: ["doce"],
    natureza: "morna",
    meridianos: ["Fígado", "Rim"],
    acoes: "Nutre o Sangue, tonifica o Yin do Rim e da Essência (Jing).",
    indicacoes: "Tontura, zumbido, lombalgia por deficiência de Rim, menstruação escassa.",
    contraindicacoes: "Distensão abdominal por Umidade, deficiência de Qi do Baço com fezes moles.",
    dosagem_referencia: "9–30 g/dia",
    elemento_relacionado: "Água"
  },
  {
    id: "shanyao",
    nome_pinyin: "Shan Yao",
    nome_cientifico: "Dioscorea opposita",
    nome_popular: "Cará chinês",
    categoria: "Tonificantes do Qi/Yin",
    sabor: ["doce"],
    natureza: "neutra",
    meridianos: ["Baço", "Pulmão", "Rim"],
    acoes: "Tonifica Baço e Rim, consolida a Essência, umedece o Pulmão.",
    indicacoes: "Diarreia crônica, leucorreia, poliúria, tosse seca por deficiência.",
    contraindicacoes: "Estagnação alimentar, plenitude por excesso.",
    dosagem_referencia: "9–30 g/dia",
    elemento_relacionado: "Terra"
  },
  {
    id: "mudanpi",
    nome_pinyin: "Mu Dan Pi",
    nome_cientifico: "Paeonia suffruticosa",
    nome_popular: "Casca de peônia arbórea",
    categoria: "Refrescam o Sangue",
    sabor: ["amargo", "pungente"],
    natureza: "fresca",
    meridianos: ["Fígado", "Coração", "Rim"],
    acoes: "Refresca o calor no Sangue, move o Sangue estagnado, drena calor latente do Yin deficiente.",
    indicacoes: "Calor ósseo vespertino, menstruação com coágulos, manchas na pele por calor no Sangue.",
    contraindicacoes: "Gestação, menstruação abundante.",
    dosagem_referencia: "6–12 g/dia",
    elemento_relacionado: "Fogo"
  },
  {
    id: "suanzaoren",
    nome_pinyin: "Suan Zao Ren",
    nome_cientifico: "Ziziphus spinosa",
    nome_popular: "Semente de jujuba",
    categoria: "Calmantes do Shen",
    sabor: ["doce", "ácido"],
    natureza: "neutra",
    meridianos: ["Coração", "Fígado"],
    acoes: "Nutre o Coração e o Fígado, calma o Shen, controla sudorese noturna.",
    indicacoes: "Insônia, palpitações, ansiedade por deficiência de Sangue do Coração.",
    contraindicacoes: "Excesso/calor com agitação real (não deficiência).",
    dosagem_referencia: "9–15 g/dia",
    elemento_relacionado: "Fogo"
  },
  {
    id: "yuanzhi",
    nome_pinyin: "Yuan Zhi",
    nome_cientifico: "Polygala tenuifolia",
    nome_popular: "Polygala",
    categoria: "Calmantes do Shen",
    sabor: ["pungente", "amargo"],
    natureza: "morna",
    meridianos: ["Coração", "Rim", "Pulmão"],
    acoes: "Calma o Shen, abre os orifícios mentais, dissolve fleuma, alivia tosse.",
    indicacoes: "Esquecimento, ansiedade, palpitações com fleuma, tosse com catarro.",
    contraindicacoes: "Úlcera gástrica ativa (irritação local), excesso de calor no Estômago.",
    dosagem_referencia: "3–9 g/dia",
    elemento_relacionado: "Fogo"
  },
  {
    id: "huanglian",
    nome_pinyin: "Huang Lian",
    nome_cientifico: "Coptis chinensis",
    nome_popular: "Coptis",
    categoria: "Drenam Fogo/Calor",
    sabor: ["amargo"],
    natureza: "fria",
    meridianos: ["Coração", "Fígado", "Estômago", "Intestino Grosso"],
    acoes: "Drena Fogo do Coração e do Estômago, seca Umidade-Calor, desintoxica.",
    indicacoes: "Irritabilidade, insônia por Fogo do Coração, diarreia por Umidade-Calor, aftas.",
    contraindicacoes: "Deficiência de Yang/Qi do Baço, uso prolongado (lesa o Estômago).",
    dosagem_referencia: "2–6 g/dia",
    elemento_relacionado: "Fogo"
  },
  {
    id: "rougui",
    nome_pinyin: "Rou Gui",
    nome_cientifico: "Cinnamomum cassia",
    nome_popular: "Canela chinesa",
    categoria: "Tonificantes do Yang",
    sabor: ["pungente", "doce"],
    natureza: "muito quente",
    meridianos: ["Rim", "Baço", "Coração", "Fígado"],
    acoes: "Tonifica o Yang do Rim e do Baço, dispersa frio interno, move o Sangue estagnado por frio.",
    indicacoes: "Extremidades frias, lombalgia por frio, dismenorreia por frio-estagnação.",
    contraindicacoes: "Calor-excesso, deficiência de Yin com calor, gestação.",
    dosagem_referencia: "1–4,5 g/dia",
    elemento_relacionado: "Água"
  }
];

const fitoterapiaFormulas = [
  {
    id: "sijunzitang",
    nome_pinyin: "Si Jun Zi Tang",
    nome_traducao: "Decocção dos Quatro Cavalheiros",
    categoria: "Tonifica o Qi",
    composicao: [
      { erva_id: "renshen", papel: "monarca", proporcao: "9g" },
      { erva_id: "baizhu", papel: "ministro", proporcao: "9g" },
      { erva_id: "fuling", papel: "ministro", proporcao: "9g" },
      { erva_id: "gancao", papel: "assistente/guia", proporcao: "6g" }
    ],
    acao_principal: "Tonifica o Qi do Baço e do Estômago, base de quase toda fórmula tonificante.",
    indicacoes: "Fadiga, palidez, fezes moles, falta de apetite, voz fraca.",
    padrao_mtc: "Deficiência de Qi do Baço",
    contraindicacoes: "Estagnação de Qi, calor-excesso.",
    elemento_relacionado: "Terra"
  },
  {
    id: "buzhongyiqitang",
    nome_pinyin: "Bu Zhong Yi Qi Tang",
    nome_traducao: "Decocção que Tonifica o Centro e Beneficia o Qi",
    categoria: "Tonifica o Qi / Eleva o Yang",
    composicao: [
      { erva_id: "huangqi", papel: "monarca", proporcao: "15g" },
      { erva_id: "renshen", papel: "ministro", proporcao: "9g" },
      { erva_id: "baizhu", papel: "ministro", proporcao: "9g" },
      { erva_id: "danggui", papel: "assistente", proporcao: "6g" },
      { erva_id: "chaihuy", papel: "assistente, eleva o Yang", proporcao: "3g" },
      { erva_id: "gancao", papel: "guia", proporcao: "6g" }
    ],
    acao_principal: "Tonifica o Qi central e eleva o Yang afundado, sustenta órgãos prolapsados.",
    indicacoes: "Fadiga crônica, prolapsos viscerais, febre baixa por deficiência, sudorese espontânea.",
    padrao_mtc: "Deficiência de Qi do Baço com afundamento do Yang",
    contraindicacoes: "Síndromes de calor-excesso real, Yin deficiente com calor por secura.",
    elemento_relacionado: "Terra"
  },
  {
    id: "sinwutang",
    nome_pinyin: "Si Wu Tang",
    nome_traducao: "Decocção dos Quatro Substanciais",
    categoria: "Tonifica o Sangue",
    composicao: [
      { erva_id: "danggui", papel: "monarca", proporcao: "9g" },
      { erva_id: "shudihuang", papel: "ministro", proporcao: "12g" },
      { erva_id: "baishao", papel: "ministro", proporcao: "9g" }
    ],
    acao_principal: "Fórmula-base para tonificar e mover o Sangue, regula a menstruação.",
    indicacoes: "Palidez, tontura, menstruação escassa/irregular, pele e cabelo secos.",
    padrao_mtc: "Deficiência de Sangue",
    contraindicacoes: "Gestação com cautela, Umidade-excesso (fórmula tende a ser pesada).",
    elemento_relacionado: "Madeira"
  },
  {
    id: "xiaoyaosan",
    nome_pinyin: "Xiao Yao San",
    nome_traducao: "Pó do Andarilho Livre",
    categoria: "Regula o Qi do Fígado",
    composicao: [
      { erva_id: "chaihuy", papel: "monarca", proporcao: "9g" },
      { erva_id: "danggui", papel: "ministro", proporcao: "9g" },
      { erva_id: "baishao", papel: "ministro", proporcao: "9g" },
      { erva_id: "baizhu", papel: "assistente", proporcao: "9g" },
      { erva_id: "fuling", papel: "assistente", proporcao: "9g" },
      { erva_id: "gancao", papel: "guia", proporcao: "3g" }
    ],
    acao_principal: "Libera a estagnação de Qi do Fígado, nutre o Sangue, fortalece o Baço.",
    indicacoes: "Irritabilidade, distensão no peito/hipocôndrio, ciclo irregular, humor instável — quadro emocional clássico de estagnação hepática.",
    padrao_mtc: "Estagnação do Qi do Fígado invadindo o Baço",
    contraindicacoes: "Deficiência grave de Yin com calor.",
    elemento_relacionado: "Madeira"
  },
  {
    id: "guipitang",
    nome_pinyin: "Gui Pi Tang",
    nome_traducao: "Decocção que Retorna o Baço",
    categoria: "Tonifica Qi e Sangue / Calma o Shen",
    composicao: [
      { erva_id: "renshen", papel: "monarca", proporcao: "9g" },
      { erva_id: "huangqi", papel: "ministro", proporcao: "9g" },
      { erva_id: "baizhu", papel: "ministro", proporcao: "9g" },
      { erva_id: "danggui", papel: "assistente", proporcao: "9g" },
      { erva_id: "fuling", papel: "assistente", proporcao: "6g" },
      { erva_id: "suanzaoren", papel: "assistente", proporcao: "9g" },
      { erva_id: "yuanzhi", papel: "assistente", proporcao: "6g" },
      { erva_id: "gancao", papel: "guia", proporcao: "3g" }
    ],
    acao_principal: "Tonifica o Qi do Baço e o Sangue do Coração, indicada quando deficiência física e ansiedade coexistem.",
    indicacoes: "Insônia, palpitações, esquecimento, fadiga mental, sangramento leve por deficiência.",
    padrao_mtc: "Deficiência de Qi do Baço e Sangue do Coração",
    contraindicacoes: "Umidade-calor, estagnação por excesso.",
    elemento_relacionado: "Terra/Fogo"
  },
  {
    id: "liuweidihuangwan",
    nome_pinyin: "Liu Wei Di Huang Wan",
    nome_traducao: "Pílula dos Seis Ingredientes com Rehmannia",
    categoria: "Tonifica o Yin",
    composicao: [
      { erva_id: "shudihuang", papel: "monarca", proporcao: "24g" },
      { erva_id: "shanyao", papel: "ministro", proporcao: "12g" },
      { erva_id: "mudanpi", papel: "assistente", proporcao: "9g" }
    ],
    acao_principal: "Tonifica o Yin do Rim e do Fígado, fórmula-base para deficiência de Yin com calor latente.",
    indicacoes: "Calor nas palmas/plantas ao final do dia, zumbido, lombalgia, boca seca noturna, suor noturno.",
    padrao_mtc: "Deficiência de Yin do Rim",
    contraindicacoes: "Deficiência de Yang do Baço com fezes moles, Umidade-excesso.",
    elemento_relacionado: "Água"
  },
  {
    id: "suanzaorentang",
    nome_pinyin: "Suan Zao Ren Tang",
    nome_traducao: "Decocção da Semente de Jujuba",
    categoria: "Calma o Shen",
    composicao: [
      { erva_id: "suanzaoren", papel: "monarca", proporcao: "15g" },
      { erva_id: "fuling", papel: "ministro", proporcao: "9g" }
    ],
    acao_principal: "Nutre o Sangue do Coração e do Fígado, calma o Shen, trata insônia por deficiência.",
    indicacoes: "Insônia com sonhos agitados, irritabilidade leve, sudorese noturna.",
    padrao_mtc: "Deficiência de Yin do Fígado com Shen agitado",
    contraindicacoes: "Insônia por excesso/calor real.",
    elemento_relacionado: "Madeira/Fogo"
  },
  {
    id: "jinguishenqiwan",
    nome_pinyin: "Jin Gui Shen Qi Wan",
    nome_traducao: "Pílula do Cofre de Ouro para Tonificar o Rim",
    categoria: "Tonifica o Yang",
    composicao: [
      { erva_id: "shudihuang", papel: "monarca", proporcao: "24g" },
      { erva_id: "shanyao", papel: "ministro", proporcao: "12g" },
      { erva_id: "rougui", papel: "assistente, aquece o Yang", proporcao: "3g" },
      { erva_id: "fuling", papel: "assistente", proporcao: "9g" }
    ],
    acao_principal: "Tonifica o Yang do Rim a partir de uma base de Yin, indicada para frio interno crônico.",
    indicacoes: "Extremidades frias, lombalgia que piora com frio, urgência urinária noturna, libido baixa.",
    padrao_mtc: "Deficiência de Yang do Rim",
    contraindicacoes: "Calor-excesso, deficiência de Yin com calor por secura, gestação (devido ao Rou Gui).",
    elemento_relacionado: "Água"
  }
];

// Helpers de integração
const buscarErvaPorId = (id) => fitoterapiaErvas.find(e => e.id === id);
const buscarFormulasPorElemento = (elemento) => fitoterapiaFormulas.filter(f => f.elemento_relacionado?.includes(elemento));
const buscarFormulasPorPadrao = (termo) => fitoterapiaFormulas.filter(f => f.padrao_mtc?.toLowerCase().includes(termo.toLowerCase()));

if (typeof module !== "undefined") {
  module.exports = { fitoterapiaErvas, fitoterapiaFormulas, buscarErvaPorId, buscarFormulasPorElemento, buscarFormulasPorPadrao };
}
