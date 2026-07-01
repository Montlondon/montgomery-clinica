// Dados clínicos estáticos (Diagnóstico Integrado) — extraído de index.html para
// manter o código da interface separado das tabelas de referência.
// Carregado via <script src="dados-clinicos.js"> ANTES do script principal,
// que consome estas constantes globais: bancoIntegrativoCompleto, sistemasABC,
// CATALOGO_SUPLEMENTOS_INICIAL.

const bancoIntegrativoCompleto = {
  // Nomes dos 6 sistemas fixos do Dr. Tan, sempre na mesma ordem
  sistemasBalanceNomes: ['Tai Yang','Shao Yang','Yang Ming','Tai Yin','Shao Yin','Jue Yin'],

  // Matriz de correspondência: para cada meridiano, o par espelhado em cada um dos 6 sistemas
  matrizSistemasBalance: {
    'P':  { nome:'Pulmão',            s1:'Baço-Pâncreas (BP)',     s2:'Intestino Grosso (IG)',  s3:'Bexiga (B)',             s4:'Fígado (F)',             s5:'Rins (R)',               s6:'Baço e Coração' },
    'IG': { nome:'Intestino Grosso',  s1:'Estômago (E)',           s2:'Pulmão (P)',             s3:'Rins (R)',               s4:'Vesícula Biliar (VB)',   s5:'Intestino Delgado (ID)', s6:'Estômago e TR' },
    'E':  { nome:'Estômago',          s1:'Intestino Grosso (IG)',  s2:'Baço-Pâncreas (BP)',     s3:'Circulação e Sexo (CS)', s4:'Intestino Delgado (ID)', s5:'Triplo Aquecedor (TR)',  s6:'Vesícula e IG' },
    'BP': { nome:'Baço-Pâncreas',     s1:'Pulmão (P)',             s2:'Estômago (E)',           s3:'Coração (C)',            s4:'Triplo Aquecedor (TR)',  s5:'Intestino Delgado (ID)', s6:'Pulmão e Rins' },
    'C':  { nome:'Coração',           s1:'Rins (R)',               s2:'Intestino Delgado (ID)', s3:'Baço-Pâncreas (BP)',     s4:'Bexiga (B)',             s5:'Vesícula Biliar (VB)',   s6:'Pulmão e Baço' },
    'ID': { nome:'Intestino Delgado', s1:'Bexiga (B)',             s2:'Coração (C)',            s3:'Fígado (F)',             s4:'Estômago (E)',           s5:'Baço-Pâncreas (BP)',     s6:'Vesícula e IG' },
    'B':  { nome:'Bexiga',            s1:'Intestino Delgado (ID)', s2:'Rins (R)',               s3:'Pulmão (P)',             s4:'Coração (C)',            s5:'Fígado (F)',             s6:'Int. Delgado e TR' },
    'R':  { nome:'Rins',              s1:'Coração (C)',            s2:'Bexiga (B)',             s3:'Intestino Grosso (IG)',  s4:'Circulação e Sexo (CS)', s5:'Pulmão (P)',             s6:'Baço e Fígado' },
    'CS': { nome:'Circulação e Sexo', s1:'Fígado (F)',             s2:'Triplo Aquecedor (TR)',  s3:'Estômago (E)',           s4:'Rins (R)',               s5:'Vesícula Biliar (VB)',   s6:'Coração e Rins' },
    'TR': { nome:'Triplo Aquecedor',  s1:'Vesícula Biliar (VB)',   s2:'Circulação e Sexo (CS)', s3:'Baço-Pâncreas (BP)',     s4:'Baço-Pâncreas (BP)',     s5:'Estômago (E)',           s6:'Int. Delgado e B' },
    'VB': { nome:'Vesícula Biliar',   s1:'Triplo Aquecedor (TR)',  s2:'Fígado (F)',             s3:'Circulação e Sexo (CS)', s4:'Intestino Grosso (IG)',  s5:'Coração (C)',            s6:'Estômago e IG' },
    'F':  { nome:'Fígado',            s1:'Circulação e Sexo (CS)', s2:'Vesícula Biliar (VB)',   s3:'Intestino Delgado (ID)', s4:'Pulmão (P)',             s5:'Bexiga (B)',             s6:'Rins e Coração' }
  },

  // Meridianos (siglas) que compõem cada elemento, para puxar a matriz acima
  meridianosPorElemento: {
    'Madeira':['F','VB'],
    'Fogo':['C','ID'],
    'Terra':['BP','E'],
    'Metal':['P','IG'],
    'Água':['R','B']
  },

  matrizCincoElementos: {
    'Madeira': {
      cor:'#2E7D32',icone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 7 10h2.5L6 16h4v5h4v-5h4l-3.5-6H15Z"/></svg>',
      titulo: 'Elemento Madeira (Fígado / Vesícula Biliar)',
      relogio: '🕒 Pico: 23:00h às 03:00h • Ancoragem psíquica do Hun.',
      psique: 'Bloqueios por sentimentos de raiva reprimida, estresse crônico por cenários de injustiça, indignação oculta e severa irritabilidade ou rigidez mental perante a dinâmica familiar.',
      balance: 'Método Balance: Equilibrar via canais do Triplo Aquecedor (TR) ou Circulação e Sexo/Pericárdio (CS) contralateral de membros superiores (Sistemas 1 e 2 do Dr. Tan).',
      quiro: 'Subluxações comuns nos segmentos de T8-T10 e espasmo reflexo nos músculos Romboide e Trapézio Médio.',
      fito: 'Extrato seco de Alcachofra (Cynara scolymus), Cardo Mariano (Silimarina) e Boldo do Chile. Dente-de-leão para drenagem hepática, Hortelã-pimenta para espasmos de vesícula, Curcuma como anti-inflamatório hepático. Indicar Magnésio Dimalato para contraturas.',
      sintomas: ['conflito interno / indecisão','impaciência','irritabilidade','intolerância','raiva','agressividade / violência','expansão sem olhar para o outro','frustração','pressão interna']
    },
    'Fogo': {
      cor:'#c62828',icone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c-3.3 0-6-2.4-6-5.8 0-2 1-3.4 1.8-4.6.3 1 1 1.8 1.8 1.8-.3-2.6.6-5.3 3-7 0 2 .8 3 1.8 3.8 1.6 1.3 3.6 3 3.6 6 0 3.4-2.7 5.8-6 5.8Z"/></svg>',
      titulo: 'Elemento Fogo (Coração / Intestino Delgado)',
      relogio: '🕒 Pico: 11:00h às 15:00h • Maior atividade e circulação do Shen.',
      psique: 'Ansiedade generalizada, palpitações por desamparo emocional, euforia defensiva ou angústia existencial com sensação de vazio no peito.',
      balance: 'Método Balance: Equilibrar o Shao Yin (Coração) utilizando os canais do Rim (R) ou Bexiga (B), ou tratar via Intestino Delgado (ID) espelhando nos membros inferiores.',
      quiro: 'Fixações mecânicas na região de T1-T4 (inervação cardiopulmonar) gerando dores escapulares e tensão peitoral.',
      fito: 'Passiflora (Passiflora incarnata), Valeriana officinalis para acalmar o Shen do Coração e Mulungu. Erva-cidreira/Melissa para palpitações ansiosas, Camomila para Shen levemente agitado, Flor de Lótus na tradição clássica. Indicar Magnésio Dimalato.',
      sintomas: ['agitação / ansiedade','excitamento grande','entusiasmo desmedido','irresponsabilidade','exaustão após muita atividade']
    },
    'Terra': {
      cor:'#C47A1E',icone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 19 9 7l3 5 2-3 7 10Z"/></svg>',
      titulo: 'Elemento Terra (Baço-Pâncreas / Estômago)',
      relogio: '🕒 Pico: 07:00h às 11:00h • Ápice da digestão e absorção central.',
      psique: 'Ruminação mental obsessiva, pensamentos repetitivos, preocupação crônica por segurança material/familiar e fadiga psíquica.',
      balance: 'Método Balance: Equilibrar o Yang Ming (Estômago) utilizando o Intestino Grosso (IG) ou Baço através do canal do Pulmão (P) distais.',
      quiro: 'Fixação articular no nível de T5-T7 e hipomobilidade da transição toracolombar afetando o diafragma.',
      fito: 'Espinheira Santa (Maytenus ilicifolia) para proteção de mucosa, Ginseng Nacional para tonificação do Qi do Aquecedor Médio e Carqueja. Gengibre para Qi do Aquecedor Médio e digestão fria, Hortelã para distensão, Canela para tonificar o Yang da Terra. Indicar Magnésio Dimalato.',
      sintomas: ['preocupações infindáveis, ruminações mentais','muito pensamento e pouca ação','sensação de vazio (dificulta cuidar de si e do outro)','solicitude (dependência, apego, medo de perder, insegurança)']
    },
    'Metal': {
      cor:'#616161',icone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/></svg>',
      titulo: 'Elemento Metal (Pulmão / Intestino Grosso)',
      relogio: '🕒 Pico: 03:00h às 07:00h • Oxigenação celular e evacuação fisiológica.',
      psique: 'Lutos não elaborados, tristeza crônica profunda, melancolia retida, necessidade neurótica de controle e extrema dificuldade em aceitar perdas ou "desapegar".',
      balance: 'Método Balance: Equilibrar o Tai Yin (Pulmão) através do canal do Baço-Pâncreas (BP) ou Intestino Grosso (IG) no joelho/cotovelo espelhado.',
      quiro: 'Subluxações na transição Cervicotorácica (C7-T1) e restrições de mobilidade na primeira e segunda costelas (músculos escalenos).',
      fito: 'Extrato de Guaco (Mikania glomerata) para expansão do Qi pulmonar, Alcaçuz (Glycyrrhiza glabra) e Cáscara Sagrada. Eucalipto como expectorante, Tomilho para o Qi pulmonar, Psyllium para regulação intestinal suave. Indicar Magnésio Dimalato.',
      sintomas: ['dificuldade nos processos de luto','dificuldade em processar perdas e mágoas','dificuldade de viver e criar vínculos duradouros']
    },
    'Água': {
      cor:'#1565C0',icone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c4 5 6 8 6 11a6 6 0 1 1-12 0c0-3 2-6 6-11Z"/></svg>',
      titulo: 'Elemento Água (Rim / Bexiga)',
      relogio: '🕒 Pico: 15:00h às 19:00h • Filtração renal e consolidação do Jing ancestral.',
      psique: 'Insegurança existencial arcaica, fobias, medos profundos de rejeição ou escassez crônica, e esgotamento psíquico por alerta prolongado.',
      balance: 'Método Balance: Equilibrar o Shao Yin do Pé (Rim) através do canal do Coração (C) ou Intestino Grosso (IG) via correspondência anatômica distal de membros.',
      quiro: 'Complexo de subluxação L5-S1 (base sagrada) e disfunções Sacroilíacas, tensionando os músculos Piriforme (ciatalgia) e Psoas Maior.',
      fito: 'Cavalinha (Equisetum arvense) para drenagem, Quebra-Pedra (Phyllanthus niruri) e Chapéu-de-Couro. Cordyceps para tonificação do Jing, Uva-ursi para trato urinário, Ashwagandha como adaptógeno para esgotamento do Jing. Indicar Magnésio Dimalato.',
      sintomas: ['falta de determinação','medo desencorajado por dificuldades','medo do fracasso, das responsabilidades, da morte, da vida, da solidão, do contato social','falta de autoestima','ambição e crueldade','poder e dominação']
    }
  },
  pontosCorpo: {
    'Joelho': { regiao: 'Joelho (Patelar e Lateral)', musculo: 'm. Quadríceps e m. Bíceps Femoral', tendao: 'Tendão Patelar e Trato Iliotibial', quiro: 'Ajuste L4-L5, mobilidade fêmoro-patelar.', canal: 'VB e E',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v7l7 4v7"/><circle cx="8" cy="11" r="1.7" fill="currentColor" stroke="none"/></svg>',
      sintomas: ['dor patelar','dor lateral do joelho','estalos/crepitação ao mover','instabilidade fêmoro-patelar','derrame articular (joelho inchado)','bloqueio ao estender totalmente'] },
    'Lombar': { regiao: 'Coluna Lombar (L1-L5) e Sacro', musculo: 'm. Quadrado Lombar e m. Piriforme', tendao: 'Fáscia Toracolombar', quiro: 'Correção de báscula de bacia e subluxação L5-S1.', canal: 'B',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M9 7h6M12 7v3M8.5 12h7M12 12v3M8 17h8M12 17v3"/></svg>',
      sintomas: ['ciática','lombalgia','constipação, colite, disenteria','diarreia','hérnia inguinal','dor/queixa em órgãos sexuais, útero ou bexiga','cãibra, dificuldade circulatória, veias varicosas','problemas menstruais (dor ou irregularidade)','dor nos joelhos','problemas urinários','inchaço e fragilidade nas pernas/tornozelos'] },
    'Cervical': { regiao: 'Coluna Cervical (C1-C7)', musculo: 'm. Trapézio Superior e m. Escalenos', tendao: 'Fáscia Cervical Superficial', quiro: 'Ajuste Occipito-Atlantal (C0-C1) para cefaleias e C5-C6.', canal: 'VB e IG',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.3"/><path d="M12 6.8v3M9.7 8.6h4.6M12 9.8v3M9.7 11.6h4.6M12 12.8v3"/></svg>',
      sintomas: ['dor de cabeça / cefaleia','nervosismo, insônia','resfriados frequentes','hipertensão arterial','enxaqueca','esgotamento nervoso, cansaço crônico','vertigem','problemas sinusais','estrabismo','perda repentina de audição ou visão sem motivo aparente','nevralgia, neurite','acne, eczema no rosto','febre do feno, secreção nasal, adenoides','laringite, faringite, rouquidão','dor de garganta, amigdalite','rigidez no pescoço','dor no braço superior externo','bursite no ombro','problemas de tireoide'] },
    'Torácica': { regiao: 'Coluna Torácica (T1-T12) e Costelas', musculo: 'm. Eretores da Espinha (porção torácica) e m. Intercostais', tendao: 'Ligamentos Costovertebrais e Costotransversos', quiro: 'Ajuste costovertebral/costotransverso e mobilização da cifose torácica.', canal: 'Diversos — cada segmento T1-T12 relaciona-se a um órgão/víscera distinto',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M7 6h10M7.5 9.5h9M8 13h8M7.5 16.5h9"/></svg>',
      sintomas: ['asma, dificuldade respiratória','dor no antebraço/mãos','alterações cardíacas, dor na região superior das costas','bronquite, pleurite, pneumonia','problemas de vesícula biliar, icterícia','problemas hepáticos, anemia, circulação deficiente','problemas gástricos, indigestão, pirose','úlcera, gastrite','baixa resistência, soluço','alergias, urticária','problemas renais, cansaço crônico','problemas de pele, acne, eczema','reumatismo, flatulência'] },
    'Cotovelo': { regiao: 'Articulação do Cotovelo', musculo: 'm. Supinador e m. Braquiorradial', tendao: 'Tendão Extensor Comum (Epicôndilo)', quiro: 'Restrição da cabeça do rádio e umeroulnar.', canal: 'IG e TR',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5l6 7-2 9"/><path d="M11 12l7-3"/><circle cx="11" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>',
      sintomas: ['dor lateral do cotovelo (tipo epicondilite)','dor medial do cotovelo','restrição de rotação do antebraço (supinação/pronação)','formigamento até a mão'] },
    'Pelve': { regiao: 'Pelve / Bacia', musculo: 'm. Glúteo Médio e m. Iliopsoas', tendao: 'Fáscia Lata e Trato Iliotibial', quiro: 'Correção de báscula pélvica e nivelamento de crista ilíaca.', canal: 'BP e R',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6c0 4.5 1.5 6.5 4 7.5L5.5 20M20 6c0 4.5-1.5 6.5-4 7.5l2.5 6.5"/><path d="M4 6c2.5 2 13.5 2 16 0"/><path d="M9 13.8c2 .8 4 .8 6 0"/></svg>',
      sintomas: ['báscula pélvica','crista ilíaca desnivelada','tensão no iliopsoas','sensação de "perna mais curta"','tensão excessiva no quadril (bursite, artrose)'] },
    'Sacroilíaca': { regiao: 'Articulação Sacroilíaca / Crista Ilíaca', musculo: 'm. Piriforme e m. Glúteo Máximo', tendao: 'Ligamento Sacroilíaco Posterior', quiro: 'Ajuste sacroilíaco e correção de báscula de bacia (ilíaca anteriorizada/posteriorizada).', canal: 'B e VB',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 8 14h8L12 4Z"/><path d="M8 14 5.5 16.5M16 14l2.5 2.5"/><circle cx="5" cy="17.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="17.5" r="1.5" fill="currentColor" stroke="none"/></svg>',
      sintomas: ['dor sacroilíaca que piora pela manhã e melhora com a atividade','dor unilateral','histórico de torção/levantamento de peso com sensação de fisgada','dor irradiada pra nádega, coxa posterior (até o joelho) e virilha do mesmo lado','escoliose de adaptação (compensação torácica/cervical)','tensão/dor no quadril (bursite, artrose)','tensão crônica no joelho ou tornozelo do mesmo lado'] },
    'Tornozelo': { regiao: 'Tornozelo e Pé', musculo: 'm. Fibulares e m. Tibial Anterior', tendao: 'Tendão de Aquiles e Ligamento Talofibular', quiro: 'Mobilização talo-crural e correção de entorse.', canal: 'VB e B',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v8l-4.5 6.5a1 1 0 0 0 .8 1.5H18a1 1 0 0 0 .9-1.4l-2.4-5.1"/><path d="M10 11h6.5"/></svg>',
      sintomas: ['entorse de tornozelo (histórico ou recente)','dor no tendão de Aquiles','instabilidade talo-crural ("tornozelo fraco")','inchaço recorrente'] }
  }
};

// ===== CATÁLOGO INICIAL DE SUPLEMENTOS (seed, da planilha "Tabela de preços") =====
const CATALOGO_SUPLEMENTOS_INICIAL=[{"fornecedor": "Rei Terra", "nome": "AGAR AGAR", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "AGNUS CASTUS", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 40.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "ALCACHOFRA C/60", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "ALECRIM", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "ALHO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "ANTI ESTRESSE C/60", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "BCAA ULTRA CONCENTRADO 120CAPS 750 MG", "descricao": "1 frasco c/120 caps. De 750 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "BICARBONATO C/60", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 26.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "BIOTINA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "CÁLCIO DE OSTRA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "CAMOMILA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "CARDO MARIANO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "CAVALINHA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "CLORETO DE MAGNÉSIO 120 CAPS. 500MG", "descricao": "1 frasco c/120 caps de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "COEZIMA Q10", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 24.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "COGUMELO DO SOL", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "COGUMELO JUBA DE LEÃO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "CONDRO 1000. 120 CAPS", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 45.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "CORDÍCEPES EXTRATO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 45.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "CREATINA 120 CAPSULAS 750MG", "descricao": "1 frasco c/120 caps. De 750 mg", "preco": 42.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "CURCUMA LONGA 60 CAPS.500MG", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Suprivida", "nome": "DESINFLAN", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Suprivida", "nome": "DES-STRESS COMPOSTO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "DIMALATO DE MAGNESIO 100 CAPS 500 MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 33.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "DOLOMITA EM PÓ", "descricao": "1 frasco c/200 grs", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "ESPINHEIRA SANTA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "GANODERMA REISHI EXTRATO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 45.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "GELEIA REAL", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 63.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "GENGIBRE", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "GINKGO BILOBA CIRCULAÇÃO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "HIALURÔNICO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "IMUNE", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "JUBA DE LEÃO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 40.0, "estoque": 0}, {"fornecedor": "Suprivida", "nome": "KARV-ON CARVÃO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Muwiz", "nome": "LACTASE", "descricao": "1 frasco c/60 caps. de 400 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "LARANJA MORO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 32.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "LAVANDA ALFAZEMA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 40.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "L-CARNITINA", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "LEVEDÃO 240 CAPS. - LEVEDO DE CERVEJA", "descricao": "1 frasco c/240 caps. de 500 mg", "preco": 39.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "LISINA PROLINA GLICINA 120 CAPSULAS 500 MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "MAG 7 120CAPS", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 40.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "MAMAO E AMEIXA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "MELATONINA 30 CAPSULAS", "descricao": "1 frasco c/30 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "MEMORY ACTIVE", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 42.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "MULATEIRO", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "MULUNGU", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "OLEO DE COCO 60 CAPS. 500 MG", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "OLEO DE COCO 100 CAPS. 1400 MG", "descricao": "1 frasco c/100 caps. de 1400mg", "preco": 54.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "OLEO DE SEMENTE DE ABOBORA 120 CAPS", "descricao": "1 frasco c/120 caps. de 1000 mg", "preco": 54.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "QUEBRA PEDRA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "PYTAIA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "PRO PLUS 120 500 MG", "descricao": "1 frasco c/120 caps de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "PRÓPOLIS", "descricao": "1 frasco c/120 caps de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "PSYLLIUM 120 CAPS 500MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "RESVERATROL 30 ML", "descricao": "1 frasco c/ 30ml", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "SAÚDE FEMININA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "SENE", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "SPIRULINA 120 CPS 500 MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 45.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "TAURINA 120 CAPS 500MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "TOP MEGA 3,6,9 HOMEM 120 CAPS 1000MG", "descricao": "1 frasco c/120 caps. de 1000 mg", "preco": 54.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "TRIBULUS TERRESTRIS", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "TRIPTOFANO 60 CAPS 500 MG", "descricao": "1 frasco c/60 caps. De 500 mg", "preco": 30.0, "estoque": 0}, {"fornecedor": "Suprivida", "nome": "TRITUS QUEBRA PEDRA", "descricao": "1 frasco c/60 caps. De 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Fina Vita Store", "nome": "VALERIANA", "descricao": "1 frasco c/60 caps. de 500 mg", "preco": 36.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA A 60 CAPS 500 MG", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA COMPLEXO B 60 CAPS 500mg", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA FOSFORO 60 CAPS.500 MG", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA INOSITOL", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA K2 + VITAMINA D3 60 CAPS 500MG", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VITAMINA ZINCO 60 CAPS. 500MG", "descricao": "1 frasco c/60 caps de 500 mg", "preco": 27.0, "estoque": 0}, {"fornecedor": "Rei Terra", "nome": "VIVI CAPS 120 CAPS 500 MG", "descricao": "1 frasco c/120 caps. de 500 mg", "preco": 30.0, "estoque": 0}];

// ===== SISTEMAS ABC (Dr. Tan) =====
const sistemasABC=[
  {
    id:'P',elemento:'Pulmão',categoria:'Yin Mão',
    pontos:{bracoEsquerdo:'P',bracoDireito:'IG',pernaEsquerda:'B',pernaDireita:['BP','F']},
    sindromes:['dor torácica anterossuperior','dor face anterior/radial do braço, antebraço ou polegar','queixas respiratórias associadas a esse trajeto'],
    protocolo:'Trajeto cobre tórax anterossuperior, face anterior-radial do braço até o polegar. Sintoma localizado nessa faixa indica P como meridiano afetado (Passo A). Acionar combo Yin Mão (Passo B) e estimular ponto espelho/imagem contralateral no segmento correspondente (Passo C).'
  },
  {
    id:'C',elemento:'Coração',categoria:'Yin Mão',
    pontos:{bracoEsquerdo:'C',bracoDireito:'ID',pernaEsquerda:'VB',pernaDireita:['R','BP']},
    sindromes:['dor face medial-posterior do braço/antebraço até dedo mínimo','queixas torácicas/axilares no trajeto'],
    protocolo:'Trajeto cobre axila e face medial-posterior do braço até o dedo mínimo. Sintoma nesse trajeto sinaliza C como afetado. Combo Yin Mão acionado; estímulo espelho/imagem contralateral conforme segmento afetado.'
  },
  {
    id:'PC',elemento:'Pericárdio',categoria:'Yin Mão',
    pontos:{bracoEsquerdo:'PC',bracoDireito:'TA',pernaEsquerda:'E',pernaDireita:['F','R']},
    sindromes:['dor face anterior-medial do braço/antebraço, palma ou dedo médio','queixas torácicas anteriores no trajeto'],
    protocolo:'Trajeto entre P e C: face anterior-medial do braço, antebraço, palma, dedo médio, tórax anterior. Sintoma nessa faixa indica PC afetado; aciona-se combo Yin Mão com estímulo espelho/imagem no segmento correspondente.'
  },
  {
    id:'IG',elemento:'Intestino Grosso',categoria:'Yang Mão',
    pontos:{bracoEsquerdo:'IG',bracoDireito:'P',pernaEsquerda:['F','R'],pernaDireita:'E'},
    sindromes:['dor face posterolateral do braço/antebraço, dorso da mão ou indicador','dor ombro/pescoço/face no trajeto'],
    protocolo:'Trajeto na face posterolateral do braço/antebraço até o indicador, seguindo a ombro, pescoço e face. Sintoma nesse percurso indica IG afetado; combo Yang Mão acionado, estímulo espelho/imagem no segmento equivalente.'
  },
  {
    id:'ID',elemento:'Intestino Delgado',categoria:'Yang Mão',
    pontos:{bracoEsquerdo:'ID',bracoDireito:'C',pernaEsquerda:['BP','F'],pernaDireita:'B'},
    sindromes:['dor face posteromedial do braço/antebraço até dedo mínimo','dor escápula/ombro/pescoço lateral no trajeto'],
    protocolo:'Trajeto na face posteromedial do braço, escápula, ombro e pescoço lateral até a face. Sintoma nesse trajeto indica ID afetado; combo Yang Mão acionado com estímulo espelho/imagem correspondente.'
  },
  {
    id:'TA',elemento:'Triplo Aquecedor',categoria:'Yang Mão',
    pontos:{bracoEsquerdo:'TA',bracoDireito:'PC',pernaEsquerda:['R','BP'],pernaDireita:'VB'},
    sindromes:['dor face posterior média do braço/antebraço','dor ombro/pescoço lateral/têmpora ou orelha no trajeto'],
    protocolo:'Trajeto na linha média posterior do braço, ombro, pescoço lateral até têmpora/orelha. Sintoma nessa faixa indica TA afetado; combo Yang Mão acionado, estímulo espelho/imagem no segmento equivalente.'
  },
  {
    id:'BP',elemento:'Baço/Pâncreas',categoria:'Yin Pé',
    pontos:{bracoEsquerdo:['ID','TA'],bracoDireito:['P','C'],pernaEsquerda:'BP',pernaDireita:'E'},
    sindromes:['dor face medial-anterior da perna/coxa/joelho','queixas abdominais associadas ao trajeto'],
    protocolo:'Trajeto na face medial-anterior da perna e coxa até o abdômen. Sintoma nesse trajeto indica BA afetado; combo Yin Pé acionado com estímulo espelho/imagem no segmento correspondente.'
  },
  {
    id:'R',elemento:'Rim',categoria:'Yin Pé',
    pontos:{bracoEsquerdo:['TA','IG'],bracoDireito:['C','PC'],pernaEsquerda:'R',pernaDireita:'B'},
    sindromes:['dor face posteromedial da perna ou planta do pé','queixas lombossacras/abdômen inferior no trajeto'],
    protocolo:'Trajeto na face posteromedial da perna, planta do pé, região lombossacra e abdômen inferior. Sintoma nesse percurso indica R afetado; combo Yin Pé acionado, estímulo espelho/imagem no segmento equivalente.'
  },
  {
    id:'F',elemento:'Fígado',categoria:'Yin Pé',
    pontos:{bracoEsquerdo:['IG','ID'],bracoDireito:['PC','P'],pernaEsquerda:'F',pernaDireita:'VB'},
    sindromes:['dor face medial-anterior da perna (linha mais anterior que R)','queixas inguinais/hipocôndrio no trajeto'],
    protocolo:'Trajeto na face medial-anterior da perna, região inguinal e hipocôndrio. Sintoma nesse percurso indica F afetado; combo Yin Pé acionado, estímulo espelho/imagem correspondente.'
  },
  {
    id:'E',elemento:'Estômago',categoria:'Yang Pé',
    pontos:{bracoEsquerdo:'PC',bracoDireito:'IG',pernaEsquerda:'E',pernaDireita:'BP'},
    sindromes:['dor face anterior da perna/coxa','queixas faciais ou abdominais anteriores no trajeto'],
    protocolo:'Trajeto na face, região anterior do tronco/abdômen e face anterior da coxa/perna. Sintoma nesse percurso indica E afetado; combo Yang Pé acionado, estímulo espelho/imagem no segmento equivalente.'
  },
  {
    id:'B',elemento:'Bexiga',categoria:'Yang Pé',
    pontos:{bracoEsquerdo:'P',bracoDireito:'ID',pernaEsquerda:'B',pernaDireita:'R'},
    sindromes:['dor face posterior da perna/coxa (linha lateral)','dor coluna ou região occipital no trajeto'],
    protocolo:'Trajeto na região occipital, coluna e face posterior (lateral) da coxa/perna até o pé. Sintoma nesse percurso indica B afetado; combo Yang Pé acionado, estímulo espelho/imagem correspondente.'
  },
  {
    id:'VB',elemento:'Vesícula Biliar',categoria:'Yang Pé',
    pontos:{bracoEsquerdo:'C',bracoDireito:'TA',pernaEsquerda:'VB',pernaDireita:'F'},
    sindromes:['dor face lateral da perna/coxa/quadril','dor têmpora/lateral da cabeça ou flanco no trajeto'],
    protocolo:'Trajeto na têmpora/lateral da cabeça, flanco, quadril e face lateral da coxa/perna. Sintoma nesse percurso indica VB afetado; combo Yang Pé acionado, estímulo espelho/imagem no segmento equivalente.'
  }
];

// ===== AURICULOTERAPIA (extraído do curso/livro do Montgomery, fiel ao conteúdo original) =====
// Coordenadas (x,y) no viewBox 0 0 320 420 do esquema da orelha (auriculoBaseSVG em index.html)
const auriculoPontos = [
  {
    "id": "anus",
    "nome": "Ânus",
    "grupo": "Zonas Correspondentes",
    "x": 172,
    "y": 268,
    "localizacao": "sobre o hélix, na altura da cruz superior do antihélix. Empurrar o hélix para frente para conseguir enxergar a cruz superior mais proeminente.",
    "estimulo": "palpar ponto reativo e aplicar a semente. Se houver dor aguda, sangrar o ponto.",
    "indicacoes": "trata patologias do ânus, fissurais anais, hemorroidas, coceira anal, prolapso retal.",
    "combinacoes": "ponto reto ponto intestino grosso ponto baço ponto san jiao inferior"
  },
  {
    "id": "genital-externo",
    "nome": "Genital Externo",
    "grupo": "Zonas Correspondentes",
    "x": 178,
    "y": 278,
    "localizacao": "sobre o hélix, na altura da cruz inferior do antihélix.",
    "estimulo": "palpar ponto reativo e aplicar a semente. Se houver coceira aguda, sangrar o ponto.",
    "indicacoes": "trata desequilíbrios na região dos genitais, como processos inflamatórios, problemas dermatológicos e impotência sexual masculina.",
    "combinacoes": "ponto rim ponto fígado ponto bexiga ponto sanjiao inferior ponto próstata"
  },
  {
    "id": "uretra",
    "nome": "Uretra",
    "grupo": "Zonas Correspondentes",
    "x": 180,
    "y": 288,
    "localizacao": "sobre o hélix, na direção do ponto próstata.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "tratamento de desequilíbrios do trato urinário como enurese noturna, cistite, incontinência urinária, queimação e dor ao urinar.",
    "combinacoes": "ponto rim ponto fígado ponto bexiga ponto san jiao inferior ponto próstata"
  },
  {
    "id": "reto",
    "nome": "Reto",
    "grupo": "Zonas Correspondentes",
    "x": 182,
    "y": 296,
    "localizacao": "sobre o hélix, na direção do ponto intestino grosso.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "tratamento de patologias do reto como hemorroidas, prolapso retal, incontinência fecal, diarreia...",
    "combinacoes": "ponto anus ponto intestino grosso ponto baço ponto san jiao inferior"
  },
  {
    "id": "ombro-clavicula",
    "nome": "Ombro/Clavícula",
    "grupo": "Zonas Correspondentes",
    "x": 90,
    "y": 230,
    "localizacao": "o ponto clavícula se situa na altura da fossa superior do antitrago na fossa escafoide. O ponto ombro se situa na altura da incisura superior do trago, na fossa escafoide.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria no hélix na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região do ombro, como ombro congelado, bursite, dificuldade de mobilidade. trata desequilíbrios na parte superior das costas. trata desequilíbrios na região da clavícula.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "cotovelo",
    "nome": "Cotovelo",
    "grupo": "Zonas Correspondentes",
    "x": 85,
    "y": 190,
    "localizacao": "acima da região do ombro/clavícula, a partir da linha horizontal traçada na altura da incisura superior do trago, na fossa escafoide.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria na hélix, na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região do cotovelo, como epicondilite, artrite, trauma...",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "punho",
    "nome": "Punho",
    "grupo": "Zonas Correspondentes",
    "x": 80,
    "y": 150,
    "localizacao": "entre região do cotovelo e região da alergia, na fossa escafoide.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria na hélix, na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região do punho, como túnel do carpo, tendinite, entorse….",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "falanges",
    "nome": "Falanges",
    "grupo": "Zonas Correspondentes",
    "x": 78,
    "y": 115,
    "localizacao": "acima da região da alergia, na fossa escafoide.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria na hélix, na altura da área reativa.",
    "indicacoes": "desequilíbrios na região das falanges, como reumatismo, entorse, formigamento, dermatite, hiperidrose, má circulação….",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "regiao-cervical",
    "nome": "Região Cervical",
    "grupo": "Zonas Correspondentes",
    "x": 148,
    "y": 225,
    "localizacao": "no primeiro quinto da parte inferior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior; na parte posterior, aplicar reforço em forma de Y. Podemos realizar sangria no hélix, na altura da área reativa.",
    "indicacoes": "trata dor cervical devido a má postura, fibromialgia, hérnia de disco, processos degenerativos. trata dores nas costas e nos ombros. trata dormência ou formigamento de membro superior. trata formigamento cervical.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "pescoco-tireoide",
    "nome": "Pescoço/Tireoide",
    "grupo": "Zonas Correspondentes",
    "x": 157,
    "y": 222,
    "localizacao": "primeiro quinto da parede interna e inferior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha.",
    "indicacoes": "trata desequilíbrios na região do pescoço como dor, edemas e inflamações. trata doenças da tireoide, como hipotiroidismo e hipertiroidismo.",
    "combinacoes": "ponto endócrino ponto hipófise ponto san jiao ponto baço"
  },
  {
    "id": "regiao-toracica",
    "nome": "Região Torácica",
    "grupo": "Zonas Correspondentes",
    "x": 136,
    "y": 170,
    "localizacao": "segundo e terceiro quinto da parte inferior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar pares de sementes somente na parte posterior.",
    "indicacoes": "trata dor torácica devido a má postura, torções, processos degenerativos…",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "torax",
    "nome": "Tórax",
    "grupo": "Zonas Correspondentes",
    "x": 142,
    "y": 183,
    "localizacao": "segundo e terceiro quinto da parede interna e inferior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região do tórax, como dor no peito, opressão torácica, herpes zoster, neuralgia intercostal, problemas no pulmão…",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "regiao-lombar",
    "nome": "Região Lombar",
    "grupo": "Zonas Correspondentes",
    "x": 128,
    "y": 128,
    "localizacao": "segundo quinto da parte superior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior; na parte posterior, aplicar reforço em forma de Y (abarcando região posterior de lombar, sacro, glúteo, ciático e quadril). Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar reforço em forma de Y somente na parte posterior.",
    "indicacoes": "trata dor lombar devido a má postura, torções, processos degenerativos…",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "regiao-sacral",
    "nome": "Região Sacral",
    "grupo": "Zonas Correspondentes",
    "x": 122,
    "y": 100,
    "localizacao": "primeiro quinto da parte superior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior; na parte posterior, aplicar reforço em forma de Y (abarcando região posterior do sacro, glúteo, ciático e quadril). Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar reforço em forma de Y somente na parte posterior.",
    "indicacoes": "trata dor sacral devido a má postura, torções, fraturas…",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "abdome",
    "nome": "Abdome",
    "grupo": "Zonas Correspondentes",
    "x": 130,
    "y": 138,
    "localizacao": "primeiro e segundo quinto da parede interna e superior do antihélix.",
    "estimulo": "localizar os pontos mais reativos na área, aplicar pares de sementes na parte anterior e posterior da orelha. Podemos realizar sangria no hélix , na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região do abdome, como dor na região, constipação, diarreia, cólicas menstruais, estufamento…",
    "combinacoes": "pontos das zonas correspondentes"
  },
  {
    "id": "quadril",
    "nome": "Quadril",
    "grupo": "Zonas Correspondentes",
    "x": 118,
    "y": 108,
    "localizacao": "no centro da área onde começa a cruz superior do antihélix",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior; na parte posterior, aplicar reforço em forma de Y (abarcando região posterior do sacro, glúteo, ciático e quadril). Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar reforço em forma de Y somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na região do quadril, como bursite e dores no geral. trata dor lombar. trata ciatalgia.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "calcaneo",
    "nome": "Calcâneo",
    "grupo": "Zonas Correspondentes",
    "x": 108,
    "y": 95,
    "localizacao": "no canto inferior da cruz superior do antihélix, próximo à fossa triangular.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na região do calcanhar, como dor no geral, esporão e fascite plantar.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "artelhos",
    "nome": "Artelhos",
    "grupo": "Zonas Correspondentes",
    "x": 100,
    "y": 82,
    "localizacao": "no canto superior da cruz superior do antihélix, próximo a fossa escafoide.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na região do pé, como dor no geral, entorse, edemas, pé gelado, deficiência vascular das extremidades, micose...",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "joelho",
    "nome": "Joelho",
    "grupo": "Zonas Correspondentes",
    "x": 113,
    "y": 90,
    "localizacao": "no centro da cruz superior do antihélix",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na região do joelho, como dor, entorse, contusão ou artrite.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "tornozelo",
    "nome": "Tornozelo",
    "grupo": "Zonas Correspondentes",
    "x": 105,
    "y": 100,
    "localizacao": "entre o ponto joelho e o ponto calcâneo",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na região do tornozelo como dor, entorse, contusão, artrite ou edemas.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "gluteo",
    "nome": "Glúteo",
    "grupo": "Zonas Correspondentes",
    "x": 152,
    "y": 162,
    "localizacao": "no primeiro terço da cruz inferior do antihélix",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior; na parte posterior, aplicar reforço em forma de Y (abarcando região posterior do sacro, glúteo, ciático e quadril). Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar reforço em forma de Y somente na parte posterior.",
    "indicacoes": "trata dores na região glútea. trata dor sacral. trata ciatalgia.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "nariz-externo",
    "nome": "Nariz Externo",
    "grupo": "Zonas Correspondentes",
    "x": 108,
    "y": 218,
    "localizacao": "no meio da junção entre trago e face.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "desequilíbrios na região externa do nariz, como inflamações e espinhas.",
    "combinacoes": ""
  },
  {
    "id": "nariz-interno",
    "nome": "Nariz Interno",
    "grupo": "Zonas Correspondentes",
    "x": 114,
    "y": 222,
    "localizacao": "simetricamente interno ao ponto nariz externo.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "desequilíbrios na região interna do nariz, como gripes, sinusites, rinites e sangramentos.",
    "combinacoes": ""
  },
  {
    "id": "olho",
    "nome": "Olho",
    "grupo": "Zonas Correspondentes",
    "x": 196,
    "y": 376,
    "localizacao": "na zona 5 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios nos olhos como inflamações, conjuntivites e glaucoma.",
    "combinacoes": "ponto baço ponto endócrino ponto suprarrenal ponto alergia ponto fígado sangria no ápice"
  },
  {
    "id": "lingua",
    "nome": "Língua",
    "grupo": "Zonas Correspondentes",
    "x": 180,
    "y": 339,
    "localizacao": "na zona 2 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar a semente somente na parte posterior.",
    "indicacoes": "trata desequilíbrios na língua como glossite, úlceras, queimação e fissuras. trata desequilíbrios da boca e lábios, como estomatite e aftas.",
    "combinacoes": "ponto baço ponto endócrino ponto suprarrenal ponto alergia sangria no ápice ponto coração ponto estômago"
  },
  {
    "id": "maxilar",
    "nome": "Maxilar",
    "grupo": "Zonas Correspondentes",
    "x": 196,
    "y": 344,
    "localizacao": "na zona 3 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria no hélix, na altura da área reativa.",
    "indicacoes": "trata desequilíbrios na região maxilar, como distúrbios temporomadibulares, bruxismo... trata dor de dente.",
    "combinacoes": "área neurastenia ponto occipital ponto ansiedade ponto neurastenia ponto shen men ponto subcórtex ponto coração ponto fígado"
  },
  {
    "id": "ouvido-interno",
    "nome": "Ouvido Interno",
    "grupo": "Zonas Correspondentes",
    "x": 180,
    "y": 381,
    "localizacao": "na zona 6 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria no hélix, na altura da área reativa.",
    "indicacoes": "trata desequilíbrios do ouvido interno como tinido, otite, vertigem e diminuição da audição.",
    "combinacoes": "ponto baço ponto endócrino ponto suprarrenal ponto alergia sangria no ápice ponto rim ponto fígado ponto san jiao"
  },
  {
    "id": "amidala",
    "nome": "Amídala",
    "grupo": "Zonas Correspondentes",
    "x": 158,
    "y": 360,
    "localizacao": "na zona 8 do lóbulo.",
    "estimulo": "localizar o ponto mais reativo na área e realizar sangria.",
    "indicacoes": "trata amigdalite. trata faringite.",
    "combinacoes": "ponto baço ponto endócrino ponto suprarrenal ponto alergia sangria no ápice"
  },
  {
    "id": "traqueia",
    "nome": "Traqueia",
    "grupo": "Zonas Correspondentes",
    "x": 138,
    "y": 255,
    "localizacao": "entre o ponto coração e o canal auditivo.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "fortalece o sistema respiratório, trata doenças como falta de ar, tosse, rinite, sinusite, gripes, resfriados, bronquite e pneumonia (tanto doenças infecciosas como alérgicas).",
    "combinacoes": "ponto pulmão ponto brônquios"
  },
  {
    "id": "bronquios",
    "nome": "Brônquios",
    "grupo": "Zonas Correspondentes",
    "x": 128,
    "y": 260,
    "localizacao": "no centro do arco desenhando entre os pontos coração e traqueia.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "fortalece o sistema respiratório, trata doenças como falta de ar, tosse, rinite, sinusite, gripes, resfriados, bronquite e pneumonia (tanto doenças infecciosas, ou alérgicas).",
    "combinacoes": "ponto pulmão ponto traqueia"
  },
  {
    "id": "boca",
    "nome": "Boca",
    "grupo": "Zonas Correspondentes",
    "x": 145,
    "y": 75,
    "localizacao": "no primeiro terço inferior a raiz do hélix, próximo ao canal auditivo.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios da cavidade bucal como úlceras bucais, estomatite, gengivite. tratamento do tabagismo. tratamento da compulsão alimentar.",
    "combinacoes": ""
  },
  {
    "id": "esofago-e-cardia",
    "nome": "Esôfago E Cárdia",
    "grupo": "Zonas Correspondentes",
    "x": 138,
    "y": 85,
    "localizacao": "no segundo e terceiro terço inferior da raiz do hélix.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "descongestiona a cavidade torácica, trata opressão toráxica. trata desequilíbrios do esôfago, como esofagite, refluxo e náusea.",
    "combinacoes": "ponto intestino delgado ponto estômago"
  },
  {
    "id": "estomago",
    "nome": "Estômago",
    "grupo": "Zonas Correspondentes",
    "x": 128,
    "y": 95,
    "localizacao": "ao final da raiz do hélix",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios do estômago trata desequilíbrios do baço, como desequilíbrios digestivos em geral. trata náusea, vômito, eructações, soluços, refluxo. trata gastrite. trata dor de estômago.",
    "combinacoes": "ponto esôfago/cárdia ponto intestino delgado ponto fígado"
  },
  {
    "id": "intestino-delgado",
    "nome": "Intestino Delgado",
    "grupo": "Zonas Correspondentes",
    "x": 135,
    "y": 110,
    "localizacao": "no segunda parte superior a raiz do hélix.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios do intestino delgado. melhora a digestão. trata diarreia. trata distensão abdominal.",
    "combinacoes": "ponto esôfago/cárdia ponto estômago ponto baço"
  },
  {
    "id": "intestino-grosso",
    "nome": "Intestino Grosso",
    "grupo": "Zonas Correspondentes",
    "x": 122,
    "y": 100,
    "localizacao": "na primeira parte superior a raiz do hélix.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios do intestino grosso. trata constipação e diarreia.",
    "combinacoes": "san jiao (para constipação) ponto simpático (para constipação) ponto reto ponto intestino delgado ponto shen men ponto occipital ponto baço (para diarreia)"
  },
  {
    "id": "prostata-ou-uretra",
    "nome": "Próstata Ou Uretra (na Mulher)",
    "grupo": "Zonas Correspondentes",
    "x": 163,
    "y": 272,
    "localizacao": "no ângulo superior da concha cimba.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios na próstata, como hiperplasia e prostatite. trata cistite. trata transtornos da função sexual.",
    "combinacoes": "ponto san jiao inferior ponto bexiga"
  },
  {
    "id": "bexiga",
    "nome": "Bexiga",
    "grupo": "Zonas Correspondentes",
    "x": 158,
    "y": 283,
    "localizacao": "ao lado do ponto próstata.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata problemas urinários como enurese, polaciúria, retenção urinária, incontinência urinária...",
    "combinacoes": ""
  },
  {
    "id": "vesicula-biliar",
    "nome": "Vesícula Biliar",
    "grupo": "Zonas Correspondentes",
    "x": 152,
    "y": 148,
    "localizacao": "ao lado do ponto fígado, entre rim e fígado, na orelha DIREITA.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata sabor amargo na boca. trata dores na região intercostal. trata herpes zoster. trata enxaqueca. trata dor cervical (por conta do trajeto do canal). trata distensão abdominal, azia, refluxo..",
    "combinacoes": "ponto fígado ponto esôfago e cárdia ponto estômago pontos das zonas correspondentes"
  },
  {
    "id": "linha-ginecologica",
    "nome": "Linha Ginecológica (pelve, Colo E Útero)",
    "grupo": "Zonas Correspondentes",
    "x": 172,
    "y": 310,
    "localizacao": "os pontos traçam uma bissetriz que sai do ângulo do encontro da cruz superior com a cruz inferior do antihélix e vai até a parte interna do hélix.",
    "estimulo": "preencher toda a linha com pares de sementes uma ao lado da outra.",
    "indicacoes": "trata prostatite. trata desequilíbrios ginecológicos. trata leucorreia. trata cólica menstrual. trata amenorreia. trata endometriose.",
    "combinacoes": "ponto endócrino ponto hipotálamo ponto fígado ponto rim PONTOS DE AÇÃO ESPECÍFICA"
  },
  {
    "id": "apice",
    "nome": "Ápice",
    "grupo": "Ação Específica",
    "x": 150,
    "y": 28,
    "localizacao": "no ponto mais alto do pavilhão auricular. Podemos com um dedo dobrar a orelha para a frente e encontramos o ápice na dobra do hélix.",
    "estimulo": "realizar sangria em 3 pontos: no ápice, um ponto anterior e um ponto posterior.",
    "indicacoes": "trata sintomas agudos. alivia dores no geral. tem ação antiinflamatória, antipirética e antialérgica. trata hipertensão. acalma nos casos de ansiedade. trata problemas de pele em geral (coceira, descamação, vermelhidão…).",
    "combinacoes": "pontos das zonas correspondentes"
  },
  {
    "id": "helix-1-6",
    "nome": "Helix 1 - 6",
    "grupo": "Ação Específica",
    "x": 95,
    "y": 65,
    "localizacao": "na região do hélix que começa no tubérculo auricular até o ponto mais baixo do lóbulo da orelha.",
    "estimulo": "localizar o ponto mais reativo correspondente à área que desejamos tratar. Projetar esse ponto sobre a hélix. Sangrar 3 pontos: o ponto projetado, um ponto acima e um ponto abaixo.",
    "indicacoes": "alivia dores no geral. tem ação antiinflamatória e antialérgica.",
    "combinacoes": "pontos das zonas correspondentes"
  },
  {
    "id": "alergia",
    "nome": "Alergia",
    "grupo": "Ação Específica",
    "x": 95,
    "y": 55,
    "localizacao": "a 45 graus da linha horizontal traçada a partir da incisura superior do trago, na fossa escafoide.",
    "estimulo": "localizar o ponto mais reativo na área (ponto de maior sensibilidade ou área com descamação) e aplicar um par de sementes.",
    "indicacoes": "tem ação antialérgica. tem ação antiinflamatória. tem ação antirreumática. tem ação imunomoduladora.",
    "combinacoes": "ponto endócrino ponto suprarrenal ponto baço sangria no ápice"
  },
  {
    "id": "hipotensor",
    "nome": "Hipotensor",
    "grupo": "Ação Específica",
    "x": 108,
    "y": 88,
    "localizacao": "no canto superior da fossa triangular.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata hipertensão.",
    "combinacoes": "ponto shen men ponto occipital ponto simpático ponto subcórtex ponto neurastenia área neurastenia ponto ansiedade ponto coração ponto fígado ponto rim"
  },
  {
    "id": "fome",
    "nome": "Fome",
    "grupo": "Ação Específica",
    "x": 100,
    "y": 205,
    "localizacao": "no meio de uma linha reta traçada entre ponto nariz externo e suprarrenal. Função: regulação do apetite.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "regulação do apetite.",
    "combinacoes": "ponto endócrino ponto hipófise ponto frontal ponto estômago ponto baço ponto boca PONTOS DO SISTEMA NERVOSO"
  },
  {
    "id": "ciatico",
    "nome": "Ciático",
    "grupo": "Sistema Nervoso",
    "x": 148,
    "y": 178,
    "localizacao": "centro da cruz inferior do antihélix.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior; na parte posterior, aplicar reforço em forma de Y (abarcando região posterior do sacro, glúteo, ciático e quadril). Podemos realizar sangria na região para tratamento de processos inflamatórios e aplicar reforço em forma de Y somente na parte posterior.",
    "indicacoes": "trata ciatalgia.",
    "combinacoes": "sangria no ápice"
  },
  {
    "id": "simpatico",
    "nome": "Simpático",
    "grupo": "Sistema Nervoso",
    "x": 168,
    "y": 185,
    "localizacao": "no final interno da cruz inferior do antihélix.",
    "estimulo": "aplicar a semente encostada na parede interna do hélix.",
    "indicacoes": "regula a função do sistema nervoso autônomo. trata espasmos gastrointestinais. trata gastrites, úlceras gástricas. trata cólica menstrual. trata enurese infantil. trata dermatite seborreica. trata hiperidrose. trata hipertensão.",
    "combinacoes": ""
  },
  {
    "id": "shen-men",
    "nome": "Shen Men",
    "grupo": "Sistema Nervoso",
    "x": 122,
    "y": 118,
    "localizacao": "próximo ao vértice inferior da fossa triangular..",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "tranquiliza a mente. tem ação analgésica.",
    "combinacoes": "ponto occipital ponto neurastenia área neurastenia ponto subcórtex ponto ansiedade"
  },
  {
    "id": "temporal",
    "nome": "Temporal",
    "grupo": "Sistema Nervoso",
    "x": 75,
    "y": 170,
    "localizacao": "no centro da linha em forma de arco desenhada a partir da borda superior até a borda inferior do antitrago.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria no hélix na altura da área reativa.",
    "indicacoes": "trata enxaquecas. trata cefaleias temporais.",
    "combinacoes": "ponto occipital ponto frontal ponto shen men ponto subcórtex ponto fígado sangria no ápice"
  },
  {
    "id": "frontal",
    "nome": "Frontal",
    "grupo": "Sistema Nervoso",
    "x": 188,
    "y": 310,
    "localizacao": "no terço próximo à borda inferior do antitrago, na linha em forma de arco desenhada a partir da borda superior até a borda inferior do antitrago.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria no hélix, na altura da área reativa.",
    "indicacoes": "trata cefaleias frontais. alivia peso na cabeça. melhora concentração. melhora falta de memória. melhora sonolência. fortalece a mente. clareia a visão. ponto de tonificação geral",
    "combinacoes": "ponto hipófise ponto endócrino ponto rim ponto baço sangria no ápice"
  },
  {
    "id": "occipital",
    "nome": "Occipital",
    "grupo": "Sistema Nervoso",
    "x": 178,
    "y": 285,
    "localizacao": "no terço próximo à borda superior do antitrago, na linha em forma de arco desenhada a partir da borda superior até a borda inferior do antitrago.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha. Podemos realizar sangria no hélix, na altura da área reativa.",
    "indicacoes": "trata cefaleias occipitais. trata hipertensão. trata vertigem. trata paralisia facial. ponto de sedação geral, trata ansiedade, estresse, pânico, insônia e promove analgesia.",
    "combinacoes": "ponto subcórtex ponto temporal ponto coração ponto frontal ponto rim ponto shen men ponto fígado ponto neurastenia sangria no ápice área neurastenia ponto ansiedade"
  },
  {
    "id": "area-de-neurastenia",
    "nome": "Área De Neurastenia",
    "grupo": "Sistema Nervoso",
    "x": 185,
    "y": 295,
    "localizacao": "área localizada abaixo do ponto ocipital.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha.",
    "indicacoes": "acalma a mente, trata ansiedade, estresse, insônia... trata depressão. trata problemas emocionais.",
    "combinacoes": "ponto neurastenia ponto occipital ponto shen men ponto ansiedade ponto subcórtex ponto coração ponto fígado ponto rim"
  },
  {
    "id": "subcortex",
    "nome": "Subcórtex",
    "grupo": "Sistema Nervoso",
    "x": 182,
    "y": 300,
    "localizacao": "centro do triângulo interno do antitrago, próximo à fossa inferior.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "regula a atividade do córtex cerebral, apoia o tratamento de depressão, ansiedade e estresse. apoia o tratamento de problemas digestivos, como gastrite, vômitos, diarreia e constipação. apoia o tratamento de problemas cardiocirculatórios como hipertensão, arritmias e síndrome de Raynaud.",
    "combinacoes": "ponto simpático pontos das zonas correspondentes"
  },
  {
    "id": "neurastenia",
    "nome": "Neurastenia",
    "grupo": "Sistema Nervoso",
    "x": 202,
    "y": 360,
    "localizacao": "na zona 4 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha.",
    "indicacoes": "acalma a mente, trata ansiedade, depressão e estresse. melhora a qualidade do sono e trata insônia.",
    "combinacoes": "área neurastenia ponto ocipital ponto ansiedade ponto shen men ponto subcórtex ponto coração ponto fígado ponto rim"
  },
  {
    "id": "ansiedade",
    "nome": "Ansiedade",
    "grupo": "Sistema Nervoso",
    "x": 165,
    "y": 376,
    "localizacao": "na zona 7 do lóbulo.",
    "estimulo": "palpar ponto reativo e aplicar a semente na parte anterior e posterior da orelha.",
    "indicacoes": "acalma a mente, trata ansiedade, depressão, estresse, nervosismo. melhora a qualidade do sono e trata insônia. utilizar esse ponto para tratamento de vícios em geral (tabagismo, alcoolismo...)",
    "combinacoes": "área neurastenia ponto neurastenia ponto shen men ponto occipital ponto subcórtex ponto coração ponto fígado PONTOS DO SISTEMA ENDÓCRINO"
  },
  {
    "id": "endocrino",
    "nome": "Endócrino",
    "grupo": "Sistema Endócrino",
    "x": 148,
    "y": 265,
    "localizacao": "no assoalho da incisura intertrágica.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "regula o sistema endócrino. função antialérgica, antiinfecciosa, antiinflamatória e antirreumática. regula o metabolismo. drena a umidade, trata edemas, artrite reumatoide, lúpus eritematoso, cistos.",
    "combinacoes": "ponto baço ponto suprarrenal ponto alergia sangria no ápice ponto hipófise ponto tireoide ponto san jiao"
  },
  {
    "id": "hipofise",
    "nome": "Hipófise",
    "grupo": "Sistema Endócrino",
    "x": 185,
    "y": 292,
    "localizacao": "na crista interna do antitrago, próximo a borda superior do antitrago.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "ponto de tonificação geral. controla a atividade da hipófise, trata problemas endócrinos e ginecológicos como amenorreia, menstruação irregular, hemorragia uterina, disfunção erétil…",
    "combinacoes": "ponto frontal ponto endócrino ponto rim ponto baço ponto fígado pontos das zonas correspondentes"
  },
  {
    "id": "supra-renal",
    "nome": "Supra-renal",
    "grupo": "Sistema Endócrino",
    "x": 112,
    "y": 232,
    "localizacao": "na metade inferior da borda do trago na orelha com 1 ápice, e no ápice inferior quando a orelha tem dois ápices.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "regulação das funções das glândulas suprarrenais. função antiinflamatória, antialérgica, antirreumática. função imunomoduladora, trata doenças autoimunes. função antipirética. (Realizar sangria no ponto + sangria no ápice para baixar a temperatura.) controla o tônus vasomotor, controla hemorragias e trata hipotensão arterial.",
    "combinacoes": "ponto baço ponto endócrino ponto alergia sangria no ápice Contraindicação: pacientes com hipertensão arterial descontrolada PONTOS DA MEDICINA CHINESA"
  },
  {
    "id": "coracao",
    "nome": "Coração",
    "grupo": "Medicina Chinesa",
    "x": 155,
    "y": 245,
    "localizacao": "puxar levemente a orelha para expor a concha cava e localizar o centro da concha cava da orelha ESQUERDA.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "acalma a mente, trata desequilíbrios emocionais, ansiedade, insônia, manias... regula atividade cardiovascular, trata doenças como arritmia e hipertensão.",
    "combinacoes": ""
  },
  {
    "id": "pulmao",
    "nome": "Pulmão",
    "grupo": "Medicina Chinesa",
    "x": 152,
    "y": 255,
    "localizacao": "logo abaixo do ponto coração.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "fortalece o sistema respiratório, trata doenças como falta de ar, tosse, rinite, sinusite, gripes, resfriados, bronquite e pneumonia (tanto doenças infecciosas como alérgicas). tem função imunomoduladora. trata desequilíbrios da pele, dermatites, transpiração espontânea, alopecia.",
    "combinacoes": ""
  },
  {
    "id": "baco",
    "nome": "Baço",
    "grupo": "Medicina Chinesa",
    "x": 135,
    "y": 205,
    "localizacao": "no meio da linha traçada entre ponto estômago até a fossa superior do antitrago, na orelha ESQUERDA.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "fortalece o baço e o estômago, regula a função digestiva, trata diarreia, distensão, constipação, indigestão, estomatite… trata prolapso retal, do estômago, hemorroidas... tonifica Qi e sangue. controla hemorragia. regula menstruação. fortalece os músculos. tem ação antiinflamatória.",
    "combinacoes": ""
  },
  {
    "id": "rim",
    "nome": "Rim",
    "grupo": "Medicina Chinesa",
    "x": 160,
    "y": 210,
    "localizacao": "abaixo da cruz inferior do antihélix, na direção do início da fossa triangular.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "fortalece o Rim. trata doenças crônicas. trata dor lombar, dor no joelho. trata doenças auditivas. trata problemas reprodutivos como impotência e amenorreia. nutre o cérebro e os ossos. trata edemas. trata problemas renais.",
    "combinacoes": ""
  },
  {
    "id": "figado",
    "nome": "Fígado",
    "grupo": "Medicina Chinesa",
    "x": 150,
    "y": 163,
    "localizacao": "no canto superior e lateral da concha cimba, na orelha DIREITA.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "fortalece o fígado e a vesícula, trata doenças hepáticas, trata desequilíbrios digestivos. melhora a circulação de Sangue e Qi, apoiando o tratamento de desequilíbrios ginecológicos, estresse, nervosismo, irritabilidade... fortalece a visão. trata hipertensão. trata dor de cabeça no topo. trata problemas de músculos e tendões. trata vertigem, espasmos, tremores e convulsões.",
    "combinacoes": ""
  },
  {
    "id": "san-jiao-inferior",
    "nome": "San Jiao Inferior",
    "grupo": "Medicina Chinesa",
    "x": 152,
    "y": 295,
    "localizacao": "abaixo do ponto bexiga. Entre o ponto bexiga e intestino grosso.",
    "estimulo": "palpar ponto reativo e aplicar a semente.",
    "indicacoes": "trata desequilíbrios na região inferior do abdômen. trata problemas urinários como enurese, polaciúria, retenção urinária, incontinência... trata problemas ginecológicos como endometriose, cólica menstrual, amenorreia… trata desequilíbrios do aparelho reprodutor masculino, como prostatite, hiperplasia...",
    "combinacoes": "ponto bexiga ponto próstata linha ginecológica ponto rim"
  },
  {
    "id": "san-jiao",
    "nome": "San Jiao",
    "grupo": "Medicina Chinesa",
    "x": 128,
    "y": 290,
    "localizacao": "logo abaixo do canal auditivo.",
    "estimulo": "aplicar a semente na localização indicada.",
    "indicacoes": "trata desequilíbrios faciais, como neuralgia do trigêmeo, dores maxilares, dores de dente, paralisia facial, espasmos faciais, problemas bucais, rinite, otites... tonifica a função do baço e do estômago, trata constipação, má digestão, distensão abdominal... fortalece o pâncreas, trata diabetes. favorece a formação dos líquidos corporais, trata edemas e problemas urinários. favorece o emagrecimento.",
    "combinacoes": ""
  }
];

const auriculoProtocolos = [
  {
    "id": "alivio-da-dor",
    "titulo": "Alívio Da Dor",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Pontos das zonas correspondentes. Estimular o ponto na parte anterior e",
      "Quando a dor está localizada na parte superior do corpo (região torácica,",
      "Quando a dor está localizada na parte inferior do corpo (região lombar, sacral e",
      "Observar se é possível que exista desequilíbrio de um ou mais órgãos segundo"
    ],
    "observacoes": [
      "posterior da orelha. É muito importante localizar o ponto por meio da palpação.",
      "cervical, cabeça e membros superiores): realizar sangria em 3 pontos da hélix na altura referente ao ponto da respectiva zona correspondente.",
      "membros inferiores): realizar sangria no próprio ponto da zona correspondente.",
      "a medicina chinesa. Este protocolo pode ser utilizado para dores agudas e crônicas. O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "regiao-toracica",
      "regiao-lombar",
      "apice"
    ]
  },
  {
    "id": "dor-cervical",
    "titulo": "Dor Cervical",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto região cervical. Estimular o ponto na parte anterior e na parte posterior",
      "Sangria em 3 pontos da hélix na altura do ponto região cervical."
    ],
    "observacoes": [
      "da orelha aplicar sementes e forma de Y.",
      "A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "regiao-cervical",
      "apice"
    ]
  },
  {
    "id": "dor-toracica",
    "titulo": "Dor Torácica",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto região torácica. Estimular o ponto na parte anterior e posterior da orelha.",
      "Sangria em 3 pontos da hélix na altura do ponto região torácica.",
      "Ponto coração e ponto pulmão. A dor torácica pode estar relacionada com esses"
    ],
    "observacoes": [
      "dois órgãos, palpe a região e estimule os pontos caso encontre pontos reativos. A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "regiao-toracica",
      "coracao",
      "pulmao",
      "apice"
    ]
  },
  {
    "id": "dor-no-ombro",
    "titulo": "Dor No Ombro",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto entre ponto clavícula e ponto ombro. Estimular o ponto na parte anterior",
      "Sangria em 3 pontos da hélix na altura do ponto selecionado.",
      "Ponto fígado. A dor no ombro pode estar relacionada com o fígado na medicina"
    ],
    "observacoes": [
      "e posterior da orelha.",
      "chinesa. A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "figado",
      "apice"
    ]
  },
  {
    "id": "dor-no-cotovelo",
    "titulo": "Dor No Cotovelo",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto cotovelo. Estimular o ponto na parte anterior e posterior da orelha.",
      "Sangria em 3 pontos da hélix na altura do ponto cotovelo."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "cotovelo",
      "apice"
    ]
  },
  {
    "id": "dor-no-ante-braco",
    "titulo": "Dor No Ante-braço",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto entre ponto cotovelo e ponto punho. Estimular o ponto na parte anterior",
      "Sangria em 3 pontos da hélix na altura do ponto selecionado."
    ],
    "observacoes": [
      "e posterior da orelha.",
      "A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "cotovelo",
      "punho",
      "apice"
    ]
  },
  {
    "id": "dor-no-punho",
    "titulo": "Dor No Punho",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto punho. Estimular o ponto na parte anterior e posterior da orelha.",
      "Sangria em 3 pontos da hélix na altura do ponto punho."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "punho",
      "apice"
    ]
  },
  {
    "id": "dor-na-mao-e-dedos-da-mao",
    "titulo": "Dor Na Mão E Dedos Da Mão",
    "categoria": "Dor Na Parte Superior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Ponto entre ponto punho e ponto falanges. Estimular o ponto na parte anterior",
      "Sangria em 3 pontos da hélix na altura do ponto selecionado."
    ],
    "observacoes": [
      "e posterior da orelha.",
      "A sangria mais importante é a sangria realizada na hélix. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "falanges",
      "punho",
      "apice"
    ]
  },
  {
    "id": "dor-lombar",
    "titulo": "Dor Lombar",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto lombar.",
      "Estimular os pontos em forma de Y na parte posterior da orelha.",
      "Ponto Rim. A dor lombar pode estar relacionada com o rim na medicina chinesa."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "apice",
      "rim"
    ]
  },
  {
    "id": "dor-sacral",
    "titulo": "Dor Sacral",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto sacro.",
      "Estimular os pontos em forma de Y na parte posterior da orelha.",
      "Ponto Rim. A dor sacral pode estar relacionada com o rim na medicina chinesa."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "apice",
      "rim"
    ]
  },
  {
    "id": "dor-no-quadril",
    "titulo": "Dor No Quadril",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto quadril.",
      "Estimular os pontos em forma de Y na parte posterior da orelha."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "quadril",
      "apice"
    ]
  },
  {
    "id": "dor-na-coxa-parte-da-perna-entre-quadril-e-joelho",
    "titulo": "Dor Na Coxa - Parte Da Perna Entre Quadril E Joelho",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Pesquisar e sangrar os pontos mais sensíveis na parte inferior da cruz superior",
      "Estimular os pontos na parte posterior da orelha."
    ],
    "observacoes": [
      "(na região de ponto quadril e joelho).",
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "apice"
    ]
  },
  {
    "id": "dor-no-joelho",
    "titulo": "Dor No Joelho",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto joelho.",
      "Estimular o ponto na parte posterior da orelha.",
      "Ponto Rim. Problemas no joelho podem estar relacionados com o rim na medicina"
    ],
    "observacoes": [
      "chinesa. A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "joelho",
      "apice",
      "rim"
    ]
  },
  {
    "id": "dor-na-perna-parte-da-perna-entre-joelho-e-tornozelo",
    "titulo": "Dor Na Perna - Parte Da Perna Entre Joelho E Tornozelo",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Pesquisar e sangrar os pontos mais sensíveis na parte superior da cruz superior",
      "Estimular os pontos na parte posterior da orelha."
    ],
    "observacoes": [
      "(na região de ponto joelho, tornozelo, calcâneo e artelhos).",
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "apice"
    ]
  },
  {
    "id": "dor-no-tornozelo",
    "titulo": "Dor No Tornozelo",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto tornozelo.",
      "Estimular o ponto na parte posterior da orelha."
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "tornozelo",
      "apice"
    ]
  },
  {
    "id": "dor-na-planta-do-pe",
    "titulo": "Dor Na Planta Do Pé",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Pesquisar e sangrar os pontos mais sensíveis localizados entre ponto artelhos e",
      "Estimular os pontos na parte posterior da orelha."
    ],
    "observacoes": [
      "ponto calcâneo.",
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Este protocolo pode ser utilizado para qualquer problema músculo-esquelético na região: lesões nos ossos, articulações, músculos, tendões, ligamentos e bursas. O protocolo apresentado pode ser útil para casos onde a dor não é presente, mas onde encontramos sintomas como formigamento, sensação de peso, cansaço, desconforto ou perda da amplitude de movimento."
    ],
    "pontosIds": [
      "artelhos",
      "apice"
    ]
  },
  {
    "id": "dor-ciatica",
    "titulo": "Dor Ciática",
    "categoria": "Dor Na Parte Inferior Do Corpo",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto ciático.",
      "Estimular os pontos em forma de Y na parte posterior da orelha.",
      "Acrescentar os pontos mais sensíveis localizados na cruz superior da anti-hélix.",
      "Acrescentar os pontos mais sensíveis localizados na região dos pontos artelhos,"
    ],
    "observacoes": [
      "A sangria mais importante é a sangria realizada no ponto da zona correspondente. Se for preciso optar por uma das sangrias, escolha sempre a sangria relacionada diretamente à área afetada. Para dor na perna:",
      "Para dor no pé:",
      "calcâneo e tornozelo."
    ],
    "pontosIds": [
      "artelhos",
      "ciatico",
      "apice"
    ]
  },
  {
    "id": "dores-relacionadas-aos-orgaos-internos",
    "titulo": "Dores Relacionadas Aos Órgãos Internos",
    "categoria": "",
    "passos": [
      "Pontos das zonas correspondentes.",
      "Pontos da medicina chinesa correspondente ao órgão afetado.",
      "Ponto subcórtex.",
      "Ponto simpático. Esse ponto relaxa os espasmos da musculatura lisa."
    ],
    "observacoes": [
      "Para dores vicerais não é necessária a realização das sangrias, sendo aconselhável de maneira geral o estímulo dos pontos simpático e o ponto subcórtex. O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "simpatico",
      "subcortex"
    ]
  },
  {
    "id": "dor-no-estomago",
    "titulo": "Dor No Estômago",
    "categoria": "",
    "passos": [
      "Ponto estômago. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto subcórtex.",
      "Ponto simpático.",
      "Acrescentar o ponto abdômen."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Este protocolo pode ser utilizado para má digestão, gastrite e outros problemas estomacais. Para distensão abdominal:"
    ],
    "pontosIds": [
      "simpatico",
      "subcortex",
      "estomago"
    ]
  },
  {
    "id": "azia",
    "titulo": "Azia",
    "categoria": "",
    "passos": [
      "Ponto esôgafo/cárdia.",
      "Ponto estômago. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto fígado (lado direito).",
      "Ponto vesícula biliar (lado direito).",
      "Ponto subcórtex.",
      "Ponto simpático."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado direito estimulamos ponto fígado e ponto vesícula biliar."
    ],
    "pontosIds": [
      "vesicula-biliar",
      "simpatico",
      "subcortex",
      "estomago",
      "figado"
    ]
  },
  {
    "id": "nausea-vomitos",
    "titulo": "Náusea / Vômitos",
    "categoria": "",
    "passos": [
      "Ponto esôgafo/cárdia.",
      "Ponto estômago. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto fígado (lado direito).",
      "Ponto subcórtex.",
      "Ponto shen men.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado direito estimulamos ponto fígado. A combinação dos pontos shen men e occipital ajuda a acalmar nosso organismo."
    ],
    "pontosIds": [
      "occipital",
      "subcortex",
      "estomago",
      "shen-men",
      "figado"
    ]
  },
  {
    "id": "dor-intestinal-e-constipacao",
    "titulo": "Dor Intestinal E Constipação",
    "categoria": "",
    "passos": [
      "Ponto intestino grosso.",
      "San jiao inferior.",
      "Ponto simpático.",
      "Ponto subcórtex."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral."
    ],
    "pontosIds": [
      "san-jiao-inferior",
      "intestino-grosso",
      "simpatico",
      "subcortex"
    ]
  },
  {
    "id": "diarreia",
    "titulo": "Diarréia",
    "categoria": "",
    "passos": [
      "Ponto shen men.",
      "Ponto subcórtex.",
      "Ponto reto.",
      "Ponto intestino grosso.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "intestino-grosso",
      "subcortex",
      "shen-men",
      "reto",
      "baco"
    ]
  },
  {
    "id": "cistite-uretrite",
    "titulo": "Cistite / Uretrite",
    "categoria": "",
    "passos": [
      "Ponto uretra.",
      "Ponto bexiga.",
      "Ponto próstata.",
      "Ponto genital externo.",
      "Ponto rim.",
      "San jiao inferior.",
      "Ponto subcórtex.",
      "Ponto simpático."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral."
    ],
    "pontosIds": [
      "san-jiao-inferior",
      "genital-externo",
      "simpatico",
      "subcortex",
      "uretra",
      "bexiga",
      "rim"
    ]
  },
  {
    "id": "enurese-noturna",
    "titulo": "Enurese Noturna",
    "categoria": "",
    "passos": [
      "Ponto uretra.",
      "Ponto bexiga.",
      "Ponto hipófise.",
      "Ponto rim."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral."
    ],
    "pontosIds": [
      "hipofise",
      "uretra",
      "bexiga",
      "rim"
    ]
  },
  {
    "id": "problemas-inflamatorios-infecciosos-alergicos-reumaticos-e-imunologicos",
    "titulo": "Problemas Inflamatórios, Infecciosos, Alérgicos, Reumáticos E Imunológicos",
    "categoria": "Alérgicos, Reumáticos E Imunológicos",
    "passos": [
      "Realizar sangria no ápice.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto supra-renal.",
      "Ponto baço (lado esquerdo).",
      "Pontos das zonas correspondentes."
    ],
    "observacoes": [
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas. O ponto baço deve ser estimulado apenas do lado esquerdo. A combinação dos pontos ápice, baço, supra-renal, endócrino e alergia possui efeito anti-infeccioso, anti-inflamatório, anti-alérgico, anti-reumático e modulador do sistema imune, portanto pode fortalecer nossa imunidade e ser auxílio para o tratamento de doenças auto-imunes."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "alergia",
      "apice",
      "baco"
    ]
  },
  {
    "id": "dor-de-garganta-rouquidao-faringite-laringite",
    "titulo": "Dor De Garganta / Rouquidão Faringite / Laringite",
    "categoria": "Faringite / Laringite",
    "passos": [
      "Sangria no ápice.",
      "Ponto san jiao.",
      "Ponto traqueia.",
      "Ponto pulmão.",
      "Ponto boca.",
      "Ponto endócrino.",
      "Acrescentar ponto baço, ponto supra-renal e alergia."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço. Para infecções:"
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "traqueia",
      "san-jiao",
      "alergia",
      "pulmao",
      "apice",
      "boca",
      "baco"
    ]
  },
  {
    "id": "amigdalite",
    "titulo": "Amigdalite",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Sangria no ponto amígdala.",
      "Ponto pulmão.",
      "Ponto endócrino.",
      "Ponto baço (lado esquerdo).",
      "Ponto supra-renal.",
      "Ponto alergia."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "alergia",
      "pulmao",
      "apice",
      "baco"
    ]
  },
  {
    "id": "rinite-sinusite",
    "titulo": "Rinite / Sinusite",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto nariz interno.",
      "Ponto pulmão.",
      "Ponto san jiao.",
      "Ponto frontal. Estimular o ponto na parte anterior e posterior da orelha.",
      "Acrescentar ponto alergia, ponto baço, ponto supra-renal e ponto"
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Para quadros alérgicos:",
      "endócrino."
    ],
    "pontosIds": [
      "nariz-interno",
      "supra-renal",
      "san-jiao",
      "alergia",
      "frontal",
      "pulmao",
      "apice",
      "baco"
    ]
  },
  {
    "id": "falta-de-ar",
    "titulo": "Falta De Ar",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto traqueia.",
      "Ponto brônquio.",
      "Ponto pulmão.",
      "Ponto tórax. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto simpático.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto baço (lado esquerdo).",
      "Ponto supra-renal."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "supra-renal",
      "simpatico",
      "endocrino",
      "traqueia",
      "alergia",
      "pulmao",
      "torax",
      "apice",
      "baco"
    ]
  },
  {
    "id": "bronquite-asma-tosse",
    "titulo": "Bronquite / Asma / Tosse",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto boca.",
      "Ponto traqueia.",
      "Ponto brônquio.",
      "Ponto pulmão.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto baço (lado esquerdo).",
      "Ponto supra-renal."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "traqueia",
      "alergia",
      "pulmao",
      "apice",
      "boca",
      "baco"
    ]
  },
  {
    "id": "pneumonia",
    "titulo": "Pneumonia",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto pulmão.",
      "Ponto tórax. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto simpático.",
      "Ponto subcótex.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto baço (lado esquerdo).",
      "Ponto supra-renal."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "supra-renal",
      "simpatico",
      "endocrino",
      "alergia",
      "pulmao",
      "torax",
      "apice",
      "baco"
    ]
  },
  {
    "id": "eczema-dermatite",
    "titulo": "Eczema / Dermatite",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto pulmão.",
      "Ponto fígado (lado direito).",
      "Sangria referente aos pontos das zonas correspondentes",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto baço (lado esquerdo).",
      "Ponto supra-renal."
    ],
    "observacoes": [
      "(onde se localizam om sintomas).",
      "Realizamos o estímulo bilateral. Do lado esquerdo estimulamos ponto baço."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "alergia",
      "pulmao",
      "figado",
      "apice",
      "baco"
    ]
  },
  {
    "id": "colica-menstrual",
    "titulo": "Cólica Menstrual",
    "categoria": "",
    "passos": [
      "Linha ginecológica.",
      "San jiao inferior.",
      "Ponto subcórtex.",
      "Ponto simpático."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral."
    ],
    "pontosIds": [
      "san-jiao-inferior",
      "simpatico",
      "subcortex"
    ]
  },
  {
    "id": "problemas-menstruais",
    "titulo": "Problemas Menstruais",
    "categoria": "",
    "passos": [
      "Ponto hipófise.",
      "Ponto endócrino.",
      "Linha ginecológica.",
      "Ponto san jiao inferior.",
      "Ponto rim.",
      "Ponto baço (lado esquerdo).",
      "Ponto fígado (lado direito)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (no lado esquerdo estimular ponto baço, e no lado direito estimular o ponto fígado). Esse protocolo pode ser utilizado para menstruação irregular, síndrome do ovário policístico, miomas, endometriose..."
    ],
    "pontosIds": [
      "san-jiao-inferior",
      "endocrino",
      "hipofise",
      "figado",
      "baco",
      "rim"
    ]
  },
  {
    "id": "dor-de-dente",
    "titulo": "Dor De Dente",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto maxilar. Estimular o ponto na parte anterior e posterior da orelha.",
      "Sangria em 3 pontos da hélix na altura do ponto maxilar.",
      "Ponto san jiao."
    ],
    "observacoes": [
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "san-jiao",
      "maxilar",
      "apice"
    ]
  },
  {
    "id": "dor-maxilar-bruxismo",
    "titulo": "Dor Maxilar / Bruxismo",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto maxilar. Estimular o ponto na parte anterior e posterior da orelha.",
      "Sangria em 3 pontos da hélix na altura do ponto maxilar.",
      "Ponto fígado (lado direito)."
    ],
    "observacoes": [
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas. O ponto fígado deve ser estimulado apenas do lado esquerdo."
    ],
    "pontosIds": [
      "maxilar",
      "figado",
      "apice"
    ]
  },
  {
    "id": "cefaleia-dor-de-cabeca",
    "titulo": "Cefaléia / Dor De Cabeça",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto occipital, frontal e temporal. Estimular os pontos na parte anterior",
      "Sangria em 3 pontos da hélix na altura dos pontos selecionados.",
      "Ponto subcórtex.",
      "Ponto simpático."
    ],
    "observacoes": [
      "e posterior da orelha.",
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "simpatico",
      "occipital",
      "subcortex",
      "temporal",
      "frontal",
      "apice"
    ]
  },
  {
    "id": "enxaqueca",
    "titulo": "Enxaqueca",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto occipital, frontal e temporal. Estimular os pontos na parte anterior",
      "Sangria em 3 pontos da hélix na altura dos pontos selecionados.",
      "Ponto subcórtex.",
      "Ponto simpático.",
      "Ponto fígado.",
      "Acrescentar ponto olho.",
      "Acrescentar os pontos estômago e esôfago/cárdia."
    ],
    "observacoes": [
      "e posterior da orelha.",
      "Para dor no olho:",
      "Para desconfortos digestivos:",
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas. O ponto fígado deve ser estimulado apenas do lado esquerdo."
    ],
    "pontosIds": [
      "simpatico",
      "occipital",
      "subcortex",
      "estomago",
      "temporal",
      "frontal",
      "figado",
      "apice",
      "olho"
    ]
  },
  {
    "id": "neuralgia-do-trigemeo",
    "titulo": "Neuralgia Do Trigêmeo",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto entre ponto olho, maxilar e ouvido interno. Estimular o ponto na parte",
      "Sangria em 3 pontos da hélix na altura dos pontos selecionados.",
      "Ponto subcórtex.",
      "Ponto simpático.",
      "Ponto san jiao."
    ],
    "observacoes": [
      "anterior e posterior da orelha.",
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "ouvido-interno",
      "simpatico",
      "subcortex",
      "san-jiao",
      "maxilar",
      "apice",
      "olho"
    ]
  },
  {
    "id": "vertigem-tontura-ou-labirintite",
    "titulo": "Vertigem, Tontura Ou Labirintite",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto simpático.",
      "Ponto hipófise.",
      "Acrescentar ponto ouvido interno.",
      "Sangria em 3 pontos da hélix na altura do ponto ouvido interno.",
      "Acrescentar ponto esôgafo/cárdia e estômago."
    ],
    "observacoes": [
      "Para labirintite:",
      "Para enjoo:",
      "Realizamos o estímulo bilateral."
    ],
    "pontosIds": [
      "ouvido-interno",
      "simpatico",
      "occipital",
      "estomago",
      "hipofise",
      "apice"
    ]
  },
  {
    "id": "tinido",
    "titulo": "Tinido",
    "categoria": "",
    "passos": [
      "Ponto ouvido interno. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto temporal. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto san jiao.",
      "Ponto fígado (lado direito).",
      "Ponto rim."
    ],
    "observacoes": [
      "O estímulo deve ser realizado sempre na orelha homolateral ao sintoma. Caso o sintoma seja bilateral, realizamos o estímulo nas duas orelhas."
    ],
    "pontosIds": [
      "ouvido-interno",
      "temporal",
      "san-jiao",
      "figado",
      "rim"
    ]
  },
  {
    "id": "problemas-oculares",
    "titulo": "Problemas Oculares",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto olho. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto simpático.",
      "Ponto fígado.",
      "Acrescentar ponto alergia, ponto baço, ponto supra-renal e ponto"
    ],
    "observacoes": [
      "Para inflamações e/ou infecções:",
      "endócrino. (Esse conjunto de pontos possui função anti-inflamatória e anti- infecciosa). Realizamos o estímulo bilateral. Esse protocolo pode ser utilizado para vista cansada, visão turva, moscas volantes, conjuntivite, glaucoma, fotofobia, uveíte, neurite óptica..."
    ],
    "pontosIds": [
      "supra-renal",
      "simpatico",
      "occipital",
      "alergia",
      "figado",
      "apice",
      "olho",
      "baco"
    ]
  },
  {
    "id": "problemas-circulatorios-pontos-ativadores-da-circulacao",
    "titulo": "Problemas Circulatórios Pontos Ativadores Da Circulação",
    "categoria": "Pontos Ativadores Da Circulação",
    "passos": [
      "Sangria no ápice.",
      "Ponto subcórtex.",
      "Ponto simpático.",
      "Pontos das zonas correspondentes.",
      "Realizar sangria no ápice.",
      "Ponto hipotensor.",
      "Ponto shen men.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto subcórtex.",
      "Ponto simpático.",
      "Ponto coração (lado esquerdo).",
      "Ponto fígado (lado direito)."
    ],
    "observacoes": [
      "Realizamos o estímulo bilateral. Podemos utilizar esses pontos para tratamento de edemas, formigamento, peso e cansaço nos membros, varizes, coloração arroxeada nos dedos dos pés ou mãos. HIPERTENSÃO ARTERIAL      ápice da orelha hipotensor           shen men simpático          fígado (lado dir.) subcórtex coração (lado esq.) occipital",
      "O estímulo deve ser bilateral (do lado esquerdo estimular ponto coração e do lado direito estimular ponto fígado)."
    ],
    "pontosIds": [
      "hipotensor",
      "simpatico",
      "occipital",
      "subcortex",
      "shen-men",
      "coracao",
      "figado",
      "apice"
    ]
  },
  {
    "id": "hipotensao-arterial",
    "titulo": "Hipotensão Arterial",
    "categoria": "",
    "passos": [
      "Ponto supra-renal.",
      "Ponto endócrino.",
      "Ponto hipófise.",
      "Ponto coração (lado esquerdo).",
      "Ponto fígado (lado direito).",
      "Ponto hipertensor."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (do lado esquerdo estimular ponto coração e do lado direito estimular ponto fígado)."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "hipofise",
      "coracao",
      "figado"
    ]
  },
  {
    "id": "taquicardia-pontos-redutores-do-ritmo-cardiaco",
    "titulo": "Taquicardia Pontos Redutores Do Ritmo Cardíaco",
    "categoria": "Pontos Redutores Do Ritmo Cardíaco",
    "passos": [
      "Ponto coração (lado esquerdo).",
      "Ponto tórax. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto shen men.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto subcórtex."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (do lado esquerdo estimular ponto coração)."
    ],
    "pontosIds": [
      "occipital",
      "subcortex",
      "shen-men",
      "coracao",
      "torax"
    ]
  },
  {
    "id": "doencas-auto-imunes",
    "titulo": "Doenças Auto-imunes",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto supra-renal.",
      "Ponto baço (lado esquerdo).",
      "Pontos das zonas correspondentes."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo). Esse protocolo pode ser utilizado para lúpus eritematoso, artrite reumatóide, esclerose múltipla, hashimoto, vitiligo... A combinação dos pontos ápice, baço, supra-renal, endócrino e alergia possui efeito anti-infeccioso, anti-inflamatório, anti-alérgico, anti-reumático e modulador do sistema imune, portanto pode fortalecer nossa imunidade e ser auxílio para o tratamento de doenças auto-imunes."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "alergia",
      "apice",
      "baco"
    ]
  },
  {
    "id": "fortalecimento-do-sistema-imunologico",
    "titulo": "Fortalecimento Do Sistema Imunológico",
    "categoria": "",
    "passos": [
      "Sangria no ápice.",
      "Ponto alergia.",
      "Ponto endócrino.",
      "Ponto supra-renal.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo). A combinação dos pontos ápice, baço, supra-renal, endócrino e alergia possui efeito anti-infeccioso, anti-inflamatório, anti-alérgico, anti-reumático e modulador do sistema imune, portanto pode fortalecer nossa imunidade e ser auxílio para o tratamento de doenças auto-imunes."
    ],
    "pontosIds": [
      "supra-renal",
      "endocrino",
      "alergia",
      "apice",
      "baco"
    ]
  },
  {
    "id": "hipertiroidismo",
    "titulo": "Hipertiroidismo",
    "categoria": "",
    "passos": [
      "Ponto hipófise.",
      "Ponto endócrino.",
      "Ponto pescoço/tireoide. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto rim.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo). *O protocolo para hipo e hipertiroidismo é o mesmo, pois estes são pontos reguladores do sistema endócrino."
    ],
    "pontosIds": [
      "pescoco-tireoide",
      "endocrino",
      "hipofise",
      "baco",
      "rim"
    ]
  },
  {
    "id": "hipotiroidismo",
    "titulo": "Hipotiroidismo",
    "categoria": "",
    "passos": [
      "Ponto hipófise.",
      "Ponto endócrino.",
      "Ponto pescoço/tireoide. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto rim.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo). *O protocolo para hipo e hipertiroidismo é o mesmo, pois estes são pontos reguladores do sistema endócrino."
    ],
    "pontosIds": [
      "pescoco-tireoide",
      "endocrino",
      "hipofise",
      "baco",
      "rim"
    ]
  },
  {
    "id": "falta-de-energia",
    "titulo": "Falta De Energia",
    "categoria": "",
    "passos": [
      "Ponto hipófise.",
      "Ponto frontal. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto endócrino.",
      "Ponto rim.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo)."
    ],
    "pontosIds": [
      "endocrino",
      "hipofise",
      "frontal",
      "baco",
      "rim"
    ]
  },
  {
    "id": "problemas-de-ansiedade-estresse-insonia",
    "titulo": "Problemas De Ansiedade / Estresse / Insônia",
    "categoria": "Estresse / Insônia",
    "passos": [
      "Ponto shen men.",
      "Ponto occipital. Estimular o ponto na parte anterior e posterior da orelha.",
      "Área neurastenia. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto neurastenia. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto ansiedade. Estimular o ponto na parte anterior e posterior da orelha.",
      "Ponto subcórtex."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral. Esse é um conjunto de pontos que acalmam o organismo."
    ],
    "pontosIds": [
      "neurastenia",
      "occipital",
      "subcortex",
      "ansiedade",
      "shen-men"
    ]
  },
  {
    "id": "obesidade",
    "titulo": "Obesidade",
    "categoria": "",
    "passos": [
      "Ponto hipófise.",
      "Ponto endócrino.",
      "Ponto simpático.",
      "Ponto subcórtex.",
      "Ponto fome.",
      "Ponto boca.",
      "Ponto rim.",
      "Ponto baço (lado esquerdo)."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral (estimular ponto baço apenas do lado esquerdo)."
    ],
    "pontosIds": [
      "simpatico",
      "subcortex",
      "endocrino",
      "hipofise",
      "boca",
      "fome",
      "baco",
      "rim"
    ]
  },
  {
    "id": "tabagismo",
    "titulo": "Tabagismo",
    "categoria": "",
    "passos": [
      "Ponto boca.",
      "Ponto pulmão.",
      "Ponto simpático.",
      "Ponto shen men.",
      "Ponto ansiedade. Estimular o ponto na parte anterior e posterior da orelha."
    ],
    "observacoes": [
      "O estímulo deve ser bilateral."
    ],
    "pontosIds": [
      "simpatico",
      "ansiedade",
      "shen-men",
      "pulmao",
      "boca"
    ]
  }
];

// ===== PSICANÁLISE (extraído do Curso de Formação em Psicanálise Clínica,
// Módulos 1 e 2, psicanaliseclinica.com — conteúdo real do curso do Montgomery,
// complementado pelo texto original de Freud "O Ego e o Id", 1923) =====
const psicanaliseTemas = [
  {
    categoria:'1ª Tópica (Modelo Topográfico)',
    intro:'Fase inicial da teoria freudiana — divide a psique por "lugares" (topos): onde cada conteúdo mental fica.',
    itens:[
      {nome:'Inconsciente (Ics)',desc:'Conteúdos reprimidos, sem acesso direto à consciência; só emerge de forma distorcida (sonhos, chistes, atos falhos, sintomas). Atemporal, ambivalente (amor e ódio simultâneos), regido pelo princípio do prazer. É a parte mais arcaica do aparelho psíquico.'},
      {nome:'Pré-consciente (Pcs)',desc:'Fronteira entre Ics e Cs — conteúdos acessíveis, mas não presentes na consciência agora (memórias recuperáveis, sem barreira de recalque). É onde a linguagem se estrutura ("representação da palavra").'},
      {nome:'Consciente (Cs)',desc:'Percepção, atenção, raciocínio; o que o sujeito pensa agora. Regido pelo princípio da realidade — tolera o desprazer e retarda a satisfação imediata.'}
    ]
  },
  {
    categoria:'2ª Tópica (Modelo Estrutural)',
    intro:'A partir de 1923 ("O Ego e o Id"), Freud reorganiza o aparelho psíquico por função/relação entre instâncias, não mais por "lugar". Não substitui a 1ª Tópica — as duas se complementam.',
    itens:[
      {nome:'Id',desc:'Instância mais arcaica e primordial — ao nascer, somos apenas Id. Reservatório de impulsos caóticos e irracionais, regido pelo princípio do prazer, todo inconsciente. Não faz planos, não espera, não conhece frustração ou limite da realidade.'},
      {nome:'Ego',desc:'Surge a partir do Id pela experiência com o mundo externo. Serve a "três senhores" (Id, Superego e realidade externa), mediando suas exigências. Parte consciente (percepção, memória, linguagem), parte inconsciente (mecanismos de defesa). Regido pelo princípio da realidade.'},
      {nome:'Superego',desc:'Especialização do Ego — herdeiro do Complexo de Édipo. Internaliza proibições e ideais a partir dos pais. Parte consciente (regras morais que sabemos que existem) e parte inconsciente (crenças que cremos "naturais"). Um superego rígido é causa frequente de neuroses, angústias e culpa excessiva.'}
    ]
  },
  {
    categoria:'Fases Psicossexuais',
    intro:'Desenvolvimento da libido por zonas erógenas — cada fase com seu ponto de fixação possível, relevante para entender regressões.',
    itens:[
      {nome:'Fase oral (0-2 anos)',desc:'Zona erotizada: boca. Primeira forma de relação com o mundo e com o objeto (seio/mamadeira).'},
      {nome:'Fase anal (2-4 anos)',desc:'Zona erotizada: ânus. Período de controle esfincteriano, relacionado a noções iniciais de poder, retenção e doação.'},
      {nome:'Fase fálica (4-6 anos)',desc:'Zona erotizada: órgão genital. É quando ocorre o Complexo de Édipo — ver categoria própria.'},
      {nome:'Período de latência (6 anos até puberdade)',desc:'Interesses sexuais sublimados em cultura, escola e socialização.'},
      {nome:'Fase genital (puberdade até a morte)',desc:'Zona erotizada externa ao próprio corpo — direcionamento da libido ao objeto de desejo no mundo adulto.'}
    ]
  },
  {
    categoria:'Complexo de Édipo',
    intro:'Sub-tema da fase fálica — experimentação dos limites impostos pela micro-sociedade familiar, base de formação do Superego.',
    itens:[
      {nome:'Édipo bem-resolvido',desc:'Sujeito ingressa no mundo cultural/social com autonomia psíquica — introjeta a lei e segue adiante.'},
      {nome:'Édipo mal-resolvido',desc:'Sujeito (adolescente ou adulto) permanece psiquicamente preso à dinâmica dos pais, prejudicando novas experiências afetivas e sociais.'},
      {nome:'Complexo de Édipo feminino / Electra',desc:'Versão com o pai como objeto desejado e a mãe como rival (termo "Electra" é de Jung; Freud preferiu não usá-lo, mas é citado na literatura).'}
    ]
  },
  {
    categoria:'Mecanismos de Defesa do Ego',
    intro:'Operações mentais inconscientes que reduzem tensão psíquica entre Id, Superego e realidade externa. Identificar qual mecanismo está em jogo orienta o manejo clínico.',
    itens:[
      {nome:'Recalcamento / Repressão',desc:'Conteúdo intolerável (do Id, censurado pelo Superego) é reprimido inconscientemente pelo Ego. É a "primeira linha de defesa" — quando falha, o afeto retorna como sintoma (retorno do recalcado).'},
      {nome:'Negação (forclusão)',desc:'Defesa mais arcaica — nega extensivamente a realidade exterior e a substitui por outra realidade. Associada a subjetividades psicóticas.'},
      {nome:'Renegação / Denegação / Recusa',desc:'Forma parcial de negação — o sujeito sabe que a verdade existe, mas a recusa em parte. Associada a subjetividades perversas.'},
      {nome:'Formação reativa',desc:'Uma manifestação recalcada (pelo sofrimento que causaria) é substituída por uma reação oposta — ex.: agressividade reprimida expressa como docilidade extrema.'},
      {nome:'Regressão',desc:'Quando o Ego não suporta uma ameaça, recua a um ponto de fixação infantil (de alguma fase psicossexual), assumindo funcionamento mais primitivo.'},
      {nome:'Deslocamento',desc:'Impulso (raiva, desejo) que não pode ser direcionado ao objeto original é deslocado a outro objeto mais "seguro" ou acessível.'},
      {nome:'Conversão orgânica (histeria de conversão)',desc:'Conflito psíquico reprimido busca descarga no corpo — sintoma físico sem causa fisiológica, com correspondente simbólico ao conteúdo recalcado.'},
      {nome:'Projeção',desc:'Atribui a outra pessoa ou objeto impulsos (agressivos/sexuais) inaceitáveis em si mesmo.'},
      {nome:'Isolamento',desc:'Isola um pensamento ou comportamento de suas conexões afetivas e associativas, esvaziando-o de carga emocional.'},
      {nome:'Racionalização',desc:'Elaboração lógica/racional construída para dar sentido a conteúdos que, na verdade, têm origem inconsciente incompreendida.'},
      {nome:'Sublimação',desc:'Energia pulsional potencialmente destrutiva é redirecionada para uma realização socialmente valorizada — trabalho, arte.'}
    ]
  },
  {
    categoria:'Pulsões',
    intro:'Energia psíquica que busca descarga através de um representante (ideia ou afeto) — diferente do instinto, que é biológico e tem objeto fixo.',
    itens:[
      {nome:'Pulsões de autoconservação (Ego)',desc:'Busca pela satisfação das necessidades essenciais de sobrevivência — protótipo: a fome.'},
      {nome:'Pulsões sexuais (Libido)',desc:'Prazer corporal ligado às zonas erógenas (boca, ânus, genitais), não derivado das necessidades de sobrevivência.'},
      {nome:'Pulsão de Vida (Eros)',desc:'Tendência à ligação, à preservação e à construção — inclui as pulsões sexuais e de autoconservação.'},
      {nome:'Pulsão de Morte (Tânatos)',desc:'Tendência à descarga total da tensão, à repetição e, em sua face destrutiva, à agressão (voltada a si ou ao outro).'}
    ]
  },
  {
    categoria:'Luto e Melancolia',
    intro:'Freud (1917) distingue luto normal (reação saudável à perda) de melancolia (depressão com raiz inconsciente). Referência clínica fundamental para trabalhar perdas, depressão e ambivalência afetiva.',
    itens:[
      {nome:'Luto normal (trabalho de luto)',desc:'Reação esperada à perda real de um objeto amado — pessoa, ideal, liberdade. O Ego desinveste lentamente do objeto perdido através da memória e do afeto, até a libido ficar disponível para novos vínculos. Doloroso, mas sem perda permanente do senso de realidade nem rebaixamento do Ego.'},
      {nome:'Melancolia (depressão)',desc:'A perda não é elaborada — o objeto perdido é introjetado no próprio Ego ("a sombra do objeto recai sobre o Ego"). O sujeito não sabe exatamente o que perdeu, só sente o empobrecimento. Resultado: autoacusação, autodepreciação, "queixar-se é dar queixa" — os insultos dirigidos a si são, na verdade, dirigidos ao objeto perdido/odiado que agora vive dentro.'},
      {nome:'Ambivalência amor-ódio',desc:'Característica central da melancolia. A relação com o objeto perdido sempre conteve amor e ódio simultâneos (ambivalência). Com a perda, o ódio inconsciente não tem mais destino — volta-se contra o próprio Ego identificado com o objeto. Daí a crueldade da autocrítica melancólica.'},
      {nome:'Identificação com o objeto perdido',desc:'Mecanismo central da melancolia: em vez de retirar a libido do objeto e transferir a outro (como no luto), o Ego regride e se identifica com o objeto — "o Ego trata a si mesmo como o objeto". É a base narcísica da melancolia: o objeto perdido vive dentro, e o Ego o odeia em si mesmo.'},
      {nome:'Mania como polo oposto',desc:'A melancolia pode alternar com estados maníacos — não porque a dor acabou, mas porque o investimento libidinal retido durante o episódio melancólico se libera de uma vez. O sujeito maníaco "triunfa" sobre o objeto que o fazia sofrer, mas a luta não está resolvida — o ciclo se repete.'},
      {nome:'Sentimento de culpa melancólico',desc:'O superego age com crueldade extrema sobre o Ego que incorporou o objeto. O sujeito se acusa de fracasso, inutilidade, maldade — mas ao clínico atento, essas acusações muitas vezes descrevem o próprio objeto perdido. Perguntar ao paciente sobre quem mais se encaixaria nessa descrição pode abrir o inconsciente.'}
    ]
  },
  {
    categoria:'A Negação (Verneinung)',
    intro:'Freud (1925) — texto breve e denso. A negação é uma das formas pelo qual o inconsciente se revela: ao negar um conteúdo, o sujeito inconscientemente o confirma. Fundamental para o manejo clínico de resistências.',
    itens:[
      {nome:'Negação como resistência ao inconsciente',desc:'"Agora o senhor vai pensar que quero dizer algo ofensivo, mas realmente não tenho essa intenção." — Para Freud, a negação revela o conteúdo recalcado: ao dizer "não é isso", o sujeito anuncia exatamente isso. O clínico aprende a ler o não como o índice do que o inconsciente insiste.'},
      {nome:'"Isso eu não tinha pensado"',desc:'Freud considera esta frase — dita pelo paciente como negação de uma interpretação — a prova mais forte de que se tocou o inconsciente. "Não há um \'não\' vindo do inconsciente": o inconsciente afirma tudo; a negação é sempre do Ego consciente que recusa o que emerge.'},
      {nome:'Função intelectual do juízo: afirmar e negar',desc:'O juízo (afirmar/negar) é a forma como a função intelectual processa o que o processo primário (inconsciente) simplesmente apresenta. O "não" intelectual permite ao sujeito distanciar-se do conteúdo sem recalcá-lo totalmente — daí a frase: "com o auxílio da negação, só se revoga uma das consequências da repressão: o conteúdo chega à consciência, mas sem a carga afetiva".'},
      {nome:'Prova de realidade',desc:'Para existir como "real", algo precisa primeiro ser uma representação interna (percepção internalizada) e depois ser reencontrado no mundo externo (prova de realidade). O que falhou na prova de realidade — que existiu e foi perdido — deixa rastro de "busca". Fundamento teórico do luto: procuramos o que um dia foi real e já não está.'},
      {nome:'Aceitação intelectual sem levantamento da repressão',desc:'Situação clínica comum: o paciente aceita intelectualmente a interpretação ("sim, faz sentido"), mas nada muda emocionalmente. É porque a negação foi vencida, mas a repressão quanto ao essencial se manteve. A mudança real exige o afeto junto ao insight — não apenas o entendimento racional.'}
    ]
  },
  {
    categoria:'O Mal-Estar na Civilização',
    intro:'Freud (1930) — análise da tensão irresolúvel entre os desejos pulsionais do indivíduo e as exigências da vida coletiva. A civilização nos protege, mas nos adoece. Fonte fundamental para compreender sofrimento social, culpa, agressividade e adoecimento psíquico coletivo.',
    itens:[
      {nome:'Três fontes de sofrimento humano',desc:'Freud identifica três origens do sofrimento inevitável: (1) o próprio corpo, sujeito a doenças e morte; (2) o mundo externo, com suas forças destrutivas; (3) as relações com os outros seres humanos — "esta última é talvez a mais dolorosa de todas". A terceira fonte é o campo da clínica: o sofrimento que vem dos vínculos.'},
      {nome:'Princípio do prazer vs. Princípio da realidade',desc:'O indivíduo quer prazer imediato (Id), mas a realidade exige adiamento, renúncia, adaptação. A civilização é construída sobre essa renúncia: o prazer pulsional é sacrificado em troca de segurança e pertencimento coletivo. A neurose surge quando essa renúncia excede o suportável.'},
      {nome:'Eros x Tânatos na civilização',desc:'A civilização é o projeto de Eros — unir indivíduos em grupos cada vez maiores. Mas Tânatos resiste: a agressividade humana desestabiliza esses laços. A história cultural é a luta entre Eros (que quer unir) e Tânatos (que quer destruir). O resultado desta batalha é o que Freud chama de "mal-estar".'},
      {nome:'Renúncia pulsional e sentimento de culpa',desc:'Cada renúncia ao instinto agressivo não o elimina — internaliza-o no superego, que o volta contra o próprio Ego como culpa. "Cada nova renúncia aumenta a severidade e a intolerância do superego." Paradoxo: quanto mais virtuoso o sujeito, mais culpado ele se sente. O superego punitivo não é sinal de moralidade sadia — pode ser sintoma.'},
      {nome:'Narcisismo das pequenas diferenças',desc:'Grupos coesos precisam de um inimigo externo para manter sua coesão interna. Freud observa que as comunidades mais parecidas tendem a rivalizar com mais intensidade — a agressividade entre semelhantes (religiões vizinhas, nações parecidas, irmãos) é proporcional à semelhança, não à diferença. A hostilidade ao "quase igual" é estrutural.'},
      {nome:'Felicidade impossível / Três estratégias de fuga',desc:'Não há forma de ser plenamente feliz. As pessoas desenvolvem estratégias para reduzir o sofrimento: (1) afastamento (ascetismo, solidão, ioga); (2) intoxicação (álcool, drogas); (3) amor (apostar tudo no vínculo afetivo — o mais perigoso, pois entregamos ao outro o poder de nos destruir). Nenhuma resolve a equação — só a desloca.'},
      {nome:'Culpa coletiva e o superego cultural',desc:'Freud propõe que as civilizações também desenvolvem um superego — um conjunto de ideais e exigências que pesam coletivamente sobre os indivíduos. Religiões, ideologias, sistemas morais funcionam como superegos culturais, gerando culpa coletiva quando não são cumpridos. O analista pode ler o adoecimento social com as mesmas ferramentas do adoecimento individual.'}
    ]
  },
  {
    categoria:'Compulsão à Repetição',
    intro:'Freud (1920 — "Além do Princípio do Prazer") — o sujeito repete padrões dolorosos não por masoquismo consciente, mas por uma força que escapa ao princípio do prazer. Fundamental para compreender relacionamentos repetitivos, autossabotagem e neurose traumática.',
    itens:[
      {nome:'Compulsão à repetição — o que é',desc:'Tendência do sujeito a repetir experiências dolorosas do passado como se fossem presentes — em relacionamentos, situações de trabalho, padrões afetivos. Não é escolha consciente: é o reprimido que retorna como atuação (acting-out), não como memória. O sujeito "repete em vez de recordar". Freud nota que essa força age além do princípio do prazer — não busca prazer, mas repetição.'},
      {nome:'Fort-Da — o jogo do carretel',desc:'Freud observou seu neto jogar: jogava um carretel para longe ("Fort" = foi embora) e o puxava de volta ("Da" = aí está). A criança encenava ativamente a partida dolorosa da mãe — transformando uma experiência passiva de perda em ato ativo de controle. Protótipo da compulsão: repetir o trauma para tentar dominá-lo.'},
      {nome:'"Destino demoníaco" — o padrão que se repete',desc:'Freud descreve pessoas que parecem perseguidas por um destino: sempre escolhem parceiros que as abandonam, sempre chegam perto do sucesso e recuam, sempre repetem o mesmo tipo de conflito. "A psicanálise é de opinião que seu destino é, na maior parte, arranjado por elas próprias." O padrão inconsciente escolhe a situação antes que a consciência perceba.'},
      {nome:'Neurose traumática',desc:'Após um trauma súbito (violência, acidente, abuso), o aparelho psíquico é inundado por excitação que não consegue processar. O sujeito revive o evento involuntariamente — pesadelos, flashbacks, reencenações — tentando retrospectivamente dominar o que não pôde ser elaborado na hora. Diferente da neurose comum: aqui o sujeito não foi pego desprevenido — foi surpreendido sem "sinal de angústia" preparatório.'},
      {nome:'Transferência como repetição',desc:'Na análise, o paciente repete com o analista os padrões relacionais inconscientes — amor, ódio, dependência, rejeição. Não fala sobre o passado: o encena no presente da sessão. A transferência é a compulsão à repetição em ação dentro da clínica. O manejo da transferência é o coração da técnica psicanalítica.'},
      {nome:'Pulsão de morte e a tendência ao retorno ao inorgânico',desc:'A compulsão à repetição levou Freud a postular a pulsão de morte: tendência de toda matéria viva a retornar ao estado inorgânico — à quietude absoluta. "O organismo quer morrer apenas do seu próprio modo." A pulsão de morte se manifesta como repetição, destruição (voltada para dentro = masoquismo; para fora = agressão), e tendência ao zero de tensão.'}
    ]
  },
  {
    categoria:'Narcisismo',
    intro:'Freud (1914 — "Introdução ao Narcisismo", elaborado no Compêndio e outras obras) — teoria fundamental sobre o amor a si mesmo, o investimento libidinal no próprio Ego, e as raízes narcísicas de neuroses, psicoses e relacionamentos.',
    itens:[
      {nome:'Narcisismo primário',desc:'Estado original do bebê: toda a libido está investida no próprio Ego, sem distinção entre si e o mundo. O Ego é o único objeto. Base do autoamor, da autopreservação e do sono (recolhimento da libido para o Ego). Não é patológico — é fundação do sujeito.'},
      {nome:'Narcisismo secundário',desc:'Libido que foi investida em objetos externos (pessoas, ideais) e depois retornou ao Ego — por decepção, perda, doença, rejeição. O Ego recolhe o investimento e "incha" de libido sem destino. Base da melancolia, da hipocondria e de certas psicoses (o mundo externo perde investimento libidinal).'},
      {nome:'Libido narcísica vs. libido objetal',desc:'A libido pode estar investida no próprio Ego (libido narcísica) ou em objetos externos — pessoas, ideais, causas (libido objetal). Quanto mais libido objetal, menos libido narcísica disponível para autopreservação, e vice-versa. O amor intenso faz o sujeito "empobrecer" narcisicamente — entregamos ao outro nossa energia vital.'},
      {nome:'Ferida narcísica',desc:'Qualquer ameaça ao ideal do Ego — crítica, fracasso, humilhação, rejeição — é vivida como ferida narcísica: dor no sentido de si mesmo. A reação pode ser raiva narcísica (ataques defensivos), recolhimento (isolamento, depressão) ou busca de reparação compulsiva. Feridas narcísicas precoces e repetidas formam a base de estruturas de personalidade narcísica.'},
      {nome:'Ideal do Ego e Ego ideal',desc:'O Ego ideal é a imagem grandiosa de perfeição que o sujeito projeta sobre si mesmo (ou sobre figuras idealizadas) — herança do narcisismo primário. O ideal do Ego é a instância que mede o Ego real contra esse ideal e gera insatisfação quando há distância entre os dois. Parte do superego. A distância entre "quem sou" e "quem deveria ser" é fonte de sofrimento narcísico.'},
      {nome:'Escolha narcísica de objeto',desc:'O sujeito pode amar: (a) o que ele é — o outro como espelho de si mesmo; (b) o que ele foi — nostalgia de um estado perdido; (c) o que ele gostaria de ser — amor ao ideal. Nas escolhas narcísicas, o outro não é amado por quem é — é amado como extensão ou complemento do próprio Ego. Clinicamente relevante em relacionamentos possessivos, ciúme patológico e depressão pós-término.'}
    ]
  }
];
const psicanaliseTemasFlat=psicanaliseTemas.flatMap(c=>c.itens.map(i=>({...i,categoria:c.categoria})));
