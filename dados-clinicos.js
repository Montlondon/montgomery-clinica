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
      cor:'#2E7D32',emoji:'🌳',
      titulo: 'Elemento Madeira (Fígado / Vesícula Biliar)',
      relogio: '🕒 Pico: 23:00h às 03:00h • Ancoragem psíquica do Hun.',
      psique: 'Bloqueios por sentimentos de raiva reprimida, estresse crônico por cenários de injustiça, indignação oculta e severa irritabilidade ou rigidez mental perante a dinâmica familiar.',
      balance: 'Método Balance: Equilibrar via canais do Triplo Aquecedor (TR) ou Circulação e Sexo/Pericárdio (CS) contralateral de membros superiores (Sistemas 1 e 2 do Dr. Tan).',
      quiro: 'Subluxações comuns nos segmentos de T8-T10 e espasmo reflexo nos músculos Romboide e Trapézio Médio.',
      fito: 'Extrato seco de Alcachofra (Cynara scolymus), Cardo Mariano (Silimarina) e Boldo do Chile. Dente-de-leão para drenagem hepática, Hortelã-pimenta para espasmos de vesícula, Curcuma como anti-inflamatório hepático. Indicar Magnésio Dimalato para contraturas.'
    },
    'Fogo': {
      cor:'#c62828',emoji:'🔥',
      titulo: 'Elemento Fogo (Coração / Intestino Delgado)',
      relogio: '🕒 Pico: 11:00h às 15:00h • Maior atividade e circulação do Shen.',
      psique: 'Ansiedade generalizada, palpitações por desamparo emocional, euforia defensiva ou angústia existencial com sensação de vazio no peito.',
      balance: 'Método Balance: Equilibrar o Shao Yin (Coração) utilizando os canais do Rim (R) ou Bexiga (B), ou tratar via Intestino Delgado (ID) espelhando nos membros inferiores.',
      quiro: 'Fixações mecânicas na região de T1-T4 (inervação cardiopulmonar) gerando dores escapulares e tensão peitoral.',
      fito: 'Passiflora (Passiflora incarnata), Valeriana officinalis para acalmar o Shen do Coração e Mulungu. Erva-cidreira/Melissa para palpitações ansiosas, Camomila para Shen levemente agitado, Flor de Lótus na tradição clássica. Indicar Magnésio Dimalato.'
    },
    'Terra': {
      cor:'#C47A1E',emoji:'🌾',
      titulo: 'Elemento Terra (Baço-Pâncreas / Estômago)',
      relogio: '🕒 Pico: 07:00h às 11:00h • Ápice da digestão e absorção central.',
      psique: 'Ruminação mental obsessiva, pensamentos repetitivos, preocupação crônica por segurança material/familiar e fadiga psíquica.',
      balance: 'Método Balance: Equilibrar o Yang Ming (Estômago) utilizando o Intestino Grosso (IG) ou Baço através do canal do Pulmão (P) distais.',
      quiro: 'Fixação articular no nível de T5-T7 e hipomobilidade da transição toracolombar afetando o diafragma.',
      fito: 'Espinheira Santa (Maytenus ilicifolia) para proteção de mucosa, Ginseng Nacional para tonificação do Qi do Aquecedor Médio e Carqueja. Gengibre para Qi do Aquecedor Médio e digestão fria, Hortelã para distensão, Canela para tonificar o Yang da Terra. Indicar Magnésio Dimalato.'
    },
    'Metal': {
      cor:'#616161',emoji:'⚙️',
      titulo: 'Elemento Metal (Pulmão / Intestino Grosso)',
      relogio: '🕒 Pico: 03:00h às 07:00h • Oxigenação celular e evacuação fisiológica.',
      psique: 'Lutos não elaborados, tristeza crônica profunda, melancolia retida, necessidade neurótica de controle e extrema dificuldade em aceitar perdas ou "desapegar".',
      balance: 'Método Balance: Equilibrar o Tai Yin (Pulmão) através do canal do Baço-Pâncreas (BP) ou Intestino Grosso (IG) no joelho/cotovelo espelhado.',
      quiro: 'Subluxações na transição Cervicotorácica (C7-T1) e restrições de mobilidade na primeira e segunda costelas (músculos escalenos).',
      fito: 'Extrato de Guaco (Mikania glomerata) para expansão do Qi pulmonar, Alcaçuz (Glycyrrhiza glabra) e Cáscara Sagrada. Eucalipto como expectorante, Tomilho para o Qi pulmonar, Psyllium para regulação intestinal suave. Indicar Magnésio Dimalato.'
    },
    'Água': {
      cor:'#1565C0',emoji:'💧',
      titulo: 'Elemento Água (Rim / Bexiga)',
      relogio: '🕒 Pico: 15:00h às 19:00h • Filtração renal e consolidação do Jing ancestral.',
      psique: 'Insegurança existencial arcaica, fobias, medos profundos de rejeição ou escassez crônica, e esgotamento psíquico por alerta prolongado.',
      balance: 'Método Balance: Equilibrar o Shao Yin do Pé (Rim) através do canal do Coração (C) ou Intestino Grosso (IG) via correspondência anatômica distal de membros.',
      quiro: 'Complexo de subluxação L5-S1 (base sagrada) e disfunções Sacroilíacas, tensionando os músculos Piriforme (ciatalgia) e Psoas Maior.',
      fito: 'Cavalinha (Equisetum arvense) para drenagem, Quebra-Pedra (Phyllanthus niruri) e Chapéu-de-Couro. Cordyceps para tonificação do Jing, Uva-ursi para trato urinário, Ashwagandha como adaptógeno para esgotamento do Jing. Indicar Magnésio Dimalato.'
    }
  },
  pontosCorpo: {
    'Joelho': { regiao: 'Joelho (Patelar e Lateral)', musculo: 'm. Quadríceps e m. Bíceps Femoral', tendao: 'Tendão Patelar e Trato Iliotibial', quiro: 'Ajuste L4-L5, mobilidade fêmoro-patelar.', canal: 'VB e E',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3v7l7 4v7"/><circle cx="8" cy="11" r="1.7" fill="currentColor" stroke="none"/></svg>' },
    'Lombar': { regiao: 'Coluna Lombar (L1-L5) e Sacro', musculo: 'm. Quadrado Lombar e m. Piriforme', tendao: 'Fáscia Toracolombar', quiro: 'Correção de báscula de bacia e subluxação L5-S1.', canal: 'B',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v3M9 7h6M12 7v3M8.5 12h7M12 12v3M8 17h8M12 17v3"/></svg>' },
    'Cervical': { regiao: 'Coluna Cervical (C1-C7)', musculo: 'm. Trapézio Superior e m. Escalenos', tendao: 'Fáscia Cervical Superficial', quiro: 'Ajuste Occipito-Atlantal (C0-C1) para cefaleias e C5-C6.', canal: 'VB e IG',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.5" r="2.3"/><path d="M12 6.8v3M9.7 8.6h4.6M12 9.8v3M9.7 11.6h4.6M12 12.8v3"/></svg>' },
    'Cotovelo': { regiao: 'Articulação do Cotovelo', musculo: 'm. Supinador e m. Braquiorradial', tendao: 'Tendão Extensor Comum (Epicôndilo)', quiro: 'Restrição da cabeça do rádio e umeroulnar.', canal: 'IG e TR',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5l6 7-2 9"/><path d="M11 12l7-3"/><circle cx="11" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>' },
    'Pelve': { regiao: 'Pelve / Bacia', musculo: 'm. Glúteo Médio e m. Iliopsoas', tendao: 'Fáscia Lata e Trato Iliotibial', quiro: 'Correção de báscula pélvica e nivelamento de crista ilíaca.', canal: 'BP e R',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 4v6c0 4.5 2 6.5 2 11M17.5 4v6c0 4.5-2 6.5-2 11M6.5 10h11"/></svg>' },
    'Sacroilíaca': { regiao: 'Articulação Sacroilíaca / Crista Ilíaca', musculo: 'm. Piriforme e m. Glúteo Máximo', tendao: 'Ligamento Sacroilíaco Posterior', quiro: 'Ajuste sacroilíaco e correção de báscula de bacia (ilíaca anteriorizada/posteriorizada).', canal: 'B e VB',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5v7c0 3 1.5 5 1.5 9M17 5v7c0 3-1.5 5-1.5 9M7 12h10"/><circle cx="9" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="12" r="1" fill="currentColor" stroke="none"/></svg>' },
    'Tornozelo': { regiao: 'Tornozelo e Pé', musculo: 'm. Fibulares e m. Tibial Anterior', tendao: 'Tendão de Aquiles e Ligamento Talofibular', quiro: 'Mobilização talo-crural e correção de entorse.', canal: 'VB e B',
      icone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3v8l-4.5 6.5a1 1 0 0 0 .8 1.5H18a1 1 0 0 0 .9-1.4l-2.4-5.1"/><path d="M10 11h6.5"/></svg>' }
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
    pontos:{bracoEsquerdo:'C',bracoDireito:'ID',pernaEsquerda:['VB','R'],pernaDireita:'BP'},
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
