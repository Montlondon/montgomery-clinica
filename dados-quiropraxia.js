// Quiropraxia — a referencia vertebra por vertebra, saida de dados-clinicos.js
// em 03/08/2026 (a vela "Os tres vizinhos"). 30 KB que so fazem falta quando ele
// abre o corpo ou a aba Quiropraxia. Quem consome: renderQuiroRef, cpRaiz e cpPainel.

// ===== QUIROPRAXIA — Referência de Diagnóstico e Ajuste =====
// Fonte: apostila "Roteiro de Quiropraxia" — Prof.ª Carmen Fátima Prada de Freitas,
// complementada com anatomia clássica. Fonte única consumida pelo Diagnóstico Integrado.
// NÃO substitui diagnóstico médico.
const QUIROPRAXIA_REF = {
  fonte: 'Apostila "Roteiro de Quiropraxia" — Prof.ª Carmen Fátima Prada de Freitas',

  // Fundamentos conceituais (apostila, itens 1-3)
  fundamentos: {
    historia: 'Desenvolvida por Daniel David Palmer (1878), a partir do atendimento de Harvey Lillard — um ajuste na cervical devolveu-lhe a audição. Em 1902 Palmer inicia o ensino da técnica ("a prática com as mãos") e em 1906 funda, com o filho B.J. Palmer, o Palmer College of Chiropractic.',
    inteligenciaInata: 'A Quiropraxia divide o cérebro em Inato (mantém o equilíbrio interno do corpo) e Educado (ferramenta do Inato). Saúde, na visão quiroprática, é a Mente Inata modelando o corpo com boa organização. A interferência nervosa que perturba isso chama-se SUBLUXAÇÃO.',
    complexo: [
      { comp:'Cinesiopatológico', desc:'Alteração do movimento normal — hiper ou hipomobilidade. Compensação (hiper + hipo = normalidade aparente) é a fase subclínica, com perda do jogo articular.' },
      { comp:'Neuropatológico', desc:'Função anormal do sistema nervoso: nervos hiperexcitados/hiperativos, com irritação, compressão ou bloqueio das raízes do cabo espinhal.' },
      { comp:'Miopatológico', desc:'Lei de Hilton — o nervo inerva o músculo, a junta que ele move e a pele sobre sua inserção. Manifesta-se por hipertonia/espasmo (compensação) ou atonia/fraqueza (pressão ou degeneração).' },
      { comp:'Bioquímico', desc:'A disfunção afeta mecanismos bioquímicos: histamina (dilatação capilar, secreções), prostaglandina (estimula SN e circulação) e cininas (hipotensores).' },
      { comp:'Histopatológico', desc:'Função anormal do tecido. Hipermobilidade: irritação e inflamação (dor, calor, inchaço). Hipomobilidade: degeneração (dormência, frio, estase, atrofia).' }
    ]
  },

  // Quadro de efeitos das raízes nervosas — vértebra por vértebra (apostila, pgs 8, 17, 25)
  raizes: [
    { nivel:'C1 (Atlas)', sistema:'Parassimpático', inerva:'Irrigação da cabeça, glândula pituitária, couro cabeludo, ossos da face, cérebro, ouvido interno e médio, sistema nervoso simpático.', efeito:'Dores de cabeça, nervosismo, insônia, resfriados, hipertensão arterial, enxaqueca, esgotamento nervoso, amnésia, cansaço crônico, vertigem.' },
    { nivel:'C2 (Áxis)', sistema:'Parassimpático', inerva:'Olhos, nervos óticos e auditivos, seios da face, ossos mastóides, língua, porção anterior e posterior superior da cabeça.', efeito:'Problemas sinusais, estrabismo, surdez, problemas oculares, dor de ouvido, desmaios, perda rápida de audição ou visão sem motivo aparente, alguns casos de cegueira.' },
    { nivel:'C3', sistema:'Cérebro-Espinhal', inerva:'Bochechas, ouvido externo, ossos da face, dentes, nervo trifacial.', efeito:'Nevralgias, neurite, acne, eczema.' },
    { nivel:'C4', sistema:'Cérebro-Espinhal', inerva:'Nariz, lábios, boca, tuba auditiva (eustáquio).', efeito:'Febre do feno, secreções, perda de audição sem motivo aparente, adenoides.' },
    { nivel:'C5', sistema:'Cérebro-Espinhal', inerva:'Cordas vocais, glândulas do pescoço, faringe.', efeito:'Laringite, faringite, rouquidão, dor de garganta, amigdalite.' },
    { nivel:'C6', sistema:'Cérebro-Espinhal', inerva:'Músculos do pescoço, ombros, tonsilas palatinas.', efeito:'Rigidez do pescoço, dor no braço superior externo, amigdalites, coqueluche, crupe.' },
    { nivel:'C7', sistema:'Cérebro-Espinhal', inerva:'Tireoide, bolsas da região dos ombros, cotovelos.', efeito:'Bursites, resfriados, problemas de tireoide.' },
    { nivel:'T1', sistema:'Simpático', inerva:'Esôfago, traqueia, braço abaixo do cotovelo, punhos e dedos.', efeito:'Asma, resfriado, dificuldade respiratória, tosse, falta de ar, dor no antebraço e mãos.' },
    { nivel:'T2', sistema:'Simpático', inerva:'Coração, válvulas, envoltórios e artérias coronárias.', efeito:'Alterações funcionais cardíacas, condições do tórax, dor na região superior das costas.' },
    { nivel:'T3', sistema:'Simpático', inerva:'Pulmões, brônquios, pleura, tórax e peito.', efeito:'Bronquite, pleurite, pneumonia, congestão, influenza.' },
    { nivel:'T4', sistema:'Simpático', inerva:'Vesícula biliar, ducto biliar comum.', efeito:'Condições da vesícula biliar, icterícia, herpes zoster.' },
    { nivel:'T5', sistema:'Simpático', inerva:'Fígado, plexo solar, circulação sanguínea.', efeito:'Condições do fígado, febre, hipertensão arterial, anemia, circulação deficiente, artrite.' },
    { nivel:'T6', sistema:'Simpático', inerva:'Estômago.', efeito:'Problemas gástricos, indigestão, pirose, dispepsia.' },
    { nivel:'T7', sistema:'Simpático', inerva:'Pâncreas, duodeno.', efeito:'Úlcera, gastrite.' },
    { nivel:'T8', sistema:'Simpático', inerva:'Baço e diafragma.', efeito:'Baixa resistência, soluço.' },
    { nivel:'T9', sistema:'Simpático', inerva:'Glândula adrenal e suprarrenal.', efeito:'Alergias, urticárias.' },
    { nivel:'T10', sistema:'Simpático', inerva:'Rins.', efeito:'Problemas renais, endurecimento das artérias, cansaço crônico, nefrite, pielite.' },
    { nivel:'T11', sistema:'Simpático', inerva:'Rins e ureter.', efeito:'Condições da pele: acne, espinhas, eczemas, furúnculos.' },
    { nivel:'T12', sistema:'Simpático', inerva:'Intestino delgado, circulação linfática.', efeito:'Reumatismo, flatulência, alguns casos de esterilidade.' },
    { nivel:'L1', sistema:'Simpático', inerva:'Intestino grosso, anéis inguinais.', efeito:'Ciática, lombalgia, constipação, colite, disenteria, diarreia, alguns tipos de hérnia inguinal.' },
    { nivel:'L2', sistema:'Simpático', inerva:'Apêndice, abdome, região superior das pernas.', efeito:'Ciática, lombalgia, cãibra, acidose, dificuldade circulatória, veias varicosas.' },
    { nivel:'L3', sistema:'Cérebro-Espinhal', inerva:'Órgãos sexuais, útero, bexiga, joelhos.', efeito:'Ciática, lombalgia, problemas menstruais (dor ou irregularidade), abortos, alguns casos de impotência, dor nos joelhos.' },
    { nivel:'L4', sistema:'Cérebro-Espinhal', inerva:'Próstata, musculatura lombar, nervo ciático.', efeito:'Ciática, lombalgia, problemas urinários, dores nas costas.' },
    { nivel:'L5', sistema:'Cérebro-Espinhal', inerva:'Porção inferior das pernas, tornozelos e pés.', efeito:'Ciática, lombalgia, circulação deficiente nas pernas, câimbras, pernas frias, inchaço e fragilidade das pernas e tornozelos, curvaturas da coluna.' },
    { nivel:'Sacro / Sacroilíaca', sistema:'Parassimpático', inerva:'Ossos do quadril, nádegas; articulação sacroilíaca; movimento giroscópico do sacro na marcha.', efeito:'Condições do sacro, desvios na coluna. A fixação sacroilíaca inibe a compensação vertebral: força rotatória excessiva na lombar (discopatia, protrusão), escoliose de adaptação, dor no quadril (bursite, artrose), tensão em joelho/tornozelo do mesmo lado.' },
    { nivel:'Cóccix', sistema:'Parassimpático', inerva:'Reto, ânus.', efeito:'Dor na base da espinha ao sentar, hemorroidas, prurido.' }
  ],

  // Testes diagnósticos (apostila) — ordem de segurança primeiro
  testes: [
    { nome:'Deklyns / Hemodinâmico (SEGURANÇA — fazer ANTES de manipular cervical alta)', regiao:'Artéria vertebral', como:'Segurar a cabeça em extensão com rotação, distendendo a artéria vertebral; aguardar ~30 segundos.', positivo:'Vertigem, nistagmo, náusea ou distúrbio sensorial (isquemia). Se surgir qualquer sintoma: voltar imediatamente à posição neutra e DESCARTAR qualquer manipulação.' },
    { nome:'Spurling (compressão)', regiao:'Cervical', como:'Paciente sentado, terapeuta atrás; inclinar a cabeça para o lado testado e aplicar compressão pelo topo da cabeça.', positivo:'Dor, formigamento, dormência ou sintoma irradiado para o membro superior — sugere compressão de raiz.' },
    { nome:'Distração (descompressão)', regiao:'Cervical', como:'Após o Spurling; mãos na nuca e mandíbula realizando descompressão da cervical.', positivo:'Sensação de alívio (oposto ao Spurling) — confirma origem radicular.' },
    { nome:'Laseg (elevação da perna estendida)', regiao:'Lombar / Ciático', como:'Elevar a perna estendida do paciente em decúbito dorsal.', positivo:'Dor irradiada pela face posterior da perna — sugere comprometimento do nervo ciático / raiz lombar.' },
    { nome:'Diferenciação Sacroilíaca × Lombalgia', regiao:'Pelve', como:'Comparar o padrão da dor ao longo do dia e ao movimento.', positivo:'Sacroilíaca: dor pela manhã que MELHORA com a atividade, geralmente unilateral, irradia para nádega/coxa posterior (não além do joelho) e virília do mesmo lado. Lombalgia (disco): MELHORA ao levantar e PIORA com a atividade.' },
    { nome:'Jogo articular (limite / impulso)', regiao:'Todas as regiões', como:'Levar o segmento ao limite do movimento (flexão, extensão, rotação, inclinação lateral) e sentir a presença ou ausência de "jogo de junta".', positivo:'Ausência de jogo articular indica fixação/subluxação naquele segmento — alvo do ajuste.' }
  ],

  // Manobras de ajuste — resumo consultável por região (passo a passo completo na apostila)
  ajustes: {
    'Manobras gerais': ['Medição de MMSS e MMII','Teste geral, teste cervical','Alívio de tensão geral em tornozelos e joelhos','Báscula de bacia, alívio do sacro e dos ilíacos','Alívio dos artelhos','Rolo lombar','Transições tóraco-lombar (sentado 1 e 2, em pé) e cérvico-torácica'],
    'Cervical (Occipito-Atlas)': ['Testes: rotação PA/AP, inclinação lateral (bilateral no occipito-atlas), flexão, deslize','Ajuste supino: rotação PA, flexão, impulso cranial','Ajuste sentado: contato no occipito, tração com leve flexão, impulso cranial','Ajuste prono: bloqueio contralateral, body drop'],
    'Cervical (C1-C7)': ['Testes por segmento: rotação PA, extensão, inclinação lateral, flexão + rotação AP','Rotação PA: supino (impulso), sentado, prono (recoil)','Flexão lateral: supino, sentado (a partir de C2), prono','Extensão: supino/sentado (levíssima rotação ao lado do bloqueio), prono','Rotação AP + flexão; extensão longitudinal (tração)'],
    'Torácica (T1-T12)': ['Testes: ligamento anterior e interespinhal; intervertebrais e costo-transversais','Ajuste interespinhal: prono (body drop cranial), variação torácica alta, supino','Ajuste ligamento anterior','Intervertebrais: inclinação lateral, rotação, extensão (prono/sentado/decúbito lateral, recoil)','Costo-transversais e costovertebral; 1ª costela (única costovertebral testável)'],
    'Lombar (L1-L5)': ['Testes: flexão, extensão, rotação, inclinação lateral','Flexão: decúbito lateral (joelhos fletidos, impulso em extensão — efeito rechaço), supino (body drop)','Extensão: decúbito lateral, prono e variação, sentado','Rotação e inclinação lateral (decúbito lateral, sentado); ligamento anterior (associar respiração)'],
    'Pelve / Sacroilíaca': ['Testes S/I superior e inferior (polegar em S2/PSIS, elevar perna do mesmo lado = flexão; lado oposto = extensão)','Ajuste flexão: decúbito lateral (body drop), supino','Ajuste extensão: decúbito lateral (fixação para baixo), variação combinada','Púbis: teste e ajuste na sínfise púbica','Cóccix: mobilização em sentido cranial'],
    'Extremidades inferiores': ['Pé e tornozelo: metatarso-falange, intermetatarso, deslizes tarsais, cubóide, talo-crural, calcâneo/talus, tíbio-fibular inferior','Joelho: tíbio-fibular superior, patela (movimentação plena), tíbio-femoral (deslize AP/PA, rotação medial/lateral, deslize lateral/medial)','Coxo-femoral: testes (figura do 4, extensão longitudinal, flexão, extensão, rotações), ajustes com body drop e impulso'],
    'Extremidades superiores': ['Mão: metacarpo-falanges, metacarpo-carpo do polegar, interfalângicos, intermetacarpos','Punho: cilindro proximal e distal (extensão longitudinal, deslize AP/PA, flexão, deslize medial/lateral), piramidal, rádio-ulna (pronação/supinação)','Cotovelo: deslize posterior, extensão longitudinal, pronação, extensão, deslize lateral/medial rádio-ulna no úmero','Ombro: deslizes na cavidade glenóide (lateral/anterior/posterior a 10° e 90°, superior/inferior, rotações)','Acrômioclavicular, esternoclavicular, costoesternal, intercostais, escápula'
    ]
  },

  // Membros — testes e ajustes articulação por articulação (apostila, pgs 33-49)
  membros: [
    {
      grupo: 'Dedos das mãos e mão',
      nota: 'Pinça da mão ativa move o segmento distal; a mão auxiliar estabiliza o proximal. Testar o jogo de junta e, achada a fixação, impulsionar no sentido do bloqueio.',
      itens: [
        { art:'Metacarpo-falanges · Metacarpo-carpo do polegar · Interfalângicos', movimentos:'Rotação interna/externa · Deslize AP/PA · Deslize lateral/medial · Extensão longitudinal', passos:[
          'Mão ativa: polegar e indicador em pinça mobilizam o segmento DISTAL desejado.',
          'Mão auxiliar estabiliza o segmento PROXIMAL.',
          'Testar o jogo de junta no movimento desejado.',
          'Adicionar IMPULSO quando localizada a fixação.'
        ]},
        { art:'Intermetacarpos — rotação', movimentos:'Movimentos em 8', passos:[
          'Mão de apoio estabiliza o punho.',
          'Mão ativa realiza movimentos em 8.'
        ]},
        { art:'Intermetacarpos — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'Polegares na palma, demais dedos no dorso da mão.',
          'Testar o deslize AP/PA.',
          'Adicionar IMPULSO se houver restrição.'
        ]}
      ]
    },
    {
      grupo: 'Punho e antebraço',
      nota: 'Cilindro proximal = fileira de carpos junto ao rádio-ulna; cilindro distal = fileira junto aos metacarpos.',
      itens: [
        { art:'Cilindro proximal — extensão longitudinal', movimentos:'Extensão longitudinal', passos:[
          'Gume interno da mão ativa no cilindro proximal.',
          'Mão de apoio estabiliza o cotovelo em 90°.',
          'Testar a extensão longitudinal do punho.',
          'IMPULSO se houver restrição.'
        ]},
        { art:'Cilindro proximal — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'Gume interno da mão ativa no cilindro proximal.',
          'Gume interno da mão de apoio no rádio/ulna, estabilizando.',
          'Testar os movimentos de AP/PA.',
          'IMPULSO se houver restrição.'
        ]},
        { art:'Cilindro proximal — flexão', movimentos:'Flexão', passos:[
          'Palma da mão do paciente para cima.',
          'Polegar nos ossos do cilindro proximal.',
          'Testar o movimento de flexão.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Cilindro distal — extensão', movimentos:'Extensão', passos:[
          'Palma da mão do paciente para baixo.',
          'Polegar nos ossos do cilindro distal.',
          'Testar o movimento de extensão.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Cilindros proximal e distal — deslize medial/lateral', movimentos:'Deslize medial e lateral', passos:[
          'Indicadores laterais ao segmento testado.',
          'Testar os movimentos de deslize medial e lateral.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Piramidal — extensão longitudinal', movimentos:'Extensão longitudinal', passos:[
          'Aperto de mão com a mão ativa.',
          'Escorregar o indicador até a junta ulna–piramidal.',
          'Mão de apoio estabiliza o rádio-ulna.',
          'Leve desvio radial; testar a extensão longitudinal.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Piramidal — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'Braço do paciente apoiado no joelho do terapeuta.',
          'Segurar o piramidal entre o polegar e o indicador.',
          'Testar o deslize AP/PA.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Piramidal — deslize medial', movimentos:'Deslize medial', passos:[
          'Indicador no piramidal, fazendo o deslize medial.',
          'Testar o jogo de junta.',
          'Limite somente para DESVIO MEDIAL; IMPULSO.'
        ]},
        { art:'Rádio-ulna — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'Braço do paciente apoiado pelo cotovelo no joelho do terapeuta.',
          'Polegares anteriores e indicadores posteriores no rádio-ulna.',
          'Testar os movimentos de deslize AP/PA.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Rádio-ulna — pronação e supinação', movimentos:'Pronação · Supinação', passos:[
          'Braço do paciente apoiado pelo cotovelo no joelho do terapeuta.',
          'Polegares e indicadores no rádio-ulna.',
          'Testar o movimento de pronação; depois o de supinação.',
          'IMPULSO se encontrada a restrição.'
        ]}
      ]
    },
    {
      grupo: 'Braço — cotovelo (rádio-ulna no úmero)',
      itens: [
        { art:'Deslize posterior', movimentos:'Deslize posterior', passos:[
          'Paciente supino com o cotovelo apoiado na mesa.',
          'Mão ativa apoiada na palma da mão do paciente.',
          'Mão de apoio acompanha o movimento do cotovelo.',
          'Pressionar para sentir o deslize posterior.',
          'BODY DROP se encontrada a restrição.'
        ]},
        { art:'Extensão longitudinal', movimentos:'Extensão longitudinal', passos:[
          'Paciente em pé com o cotovelo fletido.',
          'Mão de apoio na porção distal do úmero.',
          'Mão ativa segura a porção distal do rádio-ulna.',
          'Testar a extensão longitudinal.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Pronação (rotação interna)', movimentos:'Pronação', passos:[
          'Paciente em pé com o cotovelo fletido.',
          'Mão de apoio no punho, produzindo pronação do braço com leve flexão de cotovelo.',
          'Mão ativa com o polegar na cabeça do rádio.',
          'Testar a pronação; IMPULSO se encontrada a restrição.'
        ]},
        { art:'Extensão', movimentos:'Extensão', passos:[
          'Paciente em pé com o cotovelo fletido.',
          'Mão de apoio no terço distal do rádio-ulna.',
          'Mão ativa com polegar e indicador no olécrano.',
          'Testar a extensão; IMPULSO se encontrada a restrição.'
        ]},
        { art:'Deslize lateral/medial', movimentos:'Deslize lateral · medial', passos:[
          'Paciente em pé, cotovelo estendido e seguro pela axila do terapeuta.',
          'Gumes internos das mãos seguram o rádio-ulna.',
          'Leve flexão de cotovelo; testar o deslize lateral/medial.',
          'IMPULSO se encontrada a restrição.'
        ]}
      ]
    },
    {
      grupo: 'Braço — ombro (úmero na cavidade glenóide)',
      itens: [
        { art:'Deslize lateral ou anterior', movimentos:'Deslize lateral · anterior', passos:[
          'Paciente supino.',
          'Mão ativa encaixa o mais alto possível no úmero.',
          'Mão auxiliar guia e estabiliza o braço pelo cotovelo.',
          'Testar o jogo de junta nos deslizes lateral e anterior.',
          'IMPULSO no sentido onde for encontrada a restrição.'
        ]},
        { art:'Deslize posterior a 10° e a 90°', movimentos:'Deslize posterior', passos:[
          'Paciente supino com o braço dobrado.',
          'Mão de apoio acomoda o ombro; mão ativa apoia no cotovelo.',
          'Testar o deslize posterior na angulação (10° ou 90°).',
          'BODY DROP se encontrada a restrição.',
          'Variação: paciente em pé ou sentado, mão direcionada ao ombro, terapeuta posterior com as mãos no cotovelo e o esterno estabilizando a escápula — IMPULSO.'
        ]},
        { art:'Deslize superior', movimentos:'Deslize superior', passos:[
          'Paciente supino, braço dobrado e apoiado no ombro do terapeuta em 90°.',
          'Gumes internos das mãos segurando o úmero.',
          'Movimento para lateral / posterior / superior.',
          'IMPULSO SUPERIOR se encontrada a restrição.'
        ]},
        { art:'Deslize inferior', movimentos:'Deslize inferior', passos:[
          'Paciente supino, braço dobrado e apoiado no ombro do terapeuta em 45°.',
          'Gumes internos das mãos segurando o úmero.',
          'Movimento para lateral / posterior / inferior.',
          'IMPULSO INFERIOR se encontrada a restrição.'
        ]},
        { art:'Rotação externa', movimentos:'Rotação externa', passos:[
          'Paciente supino, braço aberto e antebraço apoiado na coxa do terapeuta.',
          'Antebraço do terapeuta apoiado no antebraço do paciente.',
          'Gumes internos das mãos no úmero, o mais alto possível.',
          'Testar a rotação externa; IMPULSO se encontrada a restrição.'
        ]},
        { art:'Rotação interna', movimentos:'Rotação interna', passos:[
          'Paciente sentado ou em pé.',
          'Mãos do terapeuta no antebraço do paciente.',
          'Tração com rotação interna; testar o movimento.',
          'IMPULSO se encontrada a restrição.'
        ]},
        { art:'Movimentos gerais do úmero', movimentos:'Todos os sentidos', passos:[
          'Paciente prono com o braço solto em abertura de 90°.',
          'Terapeuta na lateral prende o braço do paciente entre as pernas.',
          'Gumes internos abraçando o úmero o mais alto possível.',
          'Movimentos em todos os sentidos possíveis; IMPULSO se encontrada a restrição.'
        ]}
      ]
    },
    {
      grupo: 'Dedos dos pés (artelhos) e antepé',
      nota: 'No hálux, tanto no teste quanto no ajuste, a mão de apoio abarca o polegar e o médio da mão ativa.',
      itens: [
        { art:'Metatarso-falange proximal · Interfalangeais', movimentos:'Extensão longitudinal · Deslize lateral-medial · Deslize dorso-plantar · Rotação interna-externa', passos:[
          'Polegar e médio da mão de apoio estabilizam os metatarsos correspondentes.',
          'Polegar e médio curvados (em garra) da mão ativa posicionam no segmento desejado (falange proximal, média ou distal).',
          'Testar o movimento desejado.',
          'Na ausência de jogo articular, IMPULSO NO SENTIDO DO BLOQUEIO.'
        ]},
        { art:'Intermetatarso — deslize dorso-plantar', movimentos:'Deslize AP/PA', passos:[
          'Polegares na porção plantar, demais dedos na porção dorsal.',
          'Deslize AP/PA: teste seguido de ajuste, se necessário.'
        ]},
        { art:'Intermetatarso — rotação', movimentos:'Rotação', passos:[
          'Mãos espalmadas lateralmente, conduzindo a rotação.'
        ]},
        { art:'Intermetatarso — manobra geral em 8', movimentos:'Manobra em 8', passos:[
          'Polegar da mão ativa na área plantar; demais dedos na área dorsal.',
          'Mão de apoio estabiliza o calcanhar.'
        ]}
      ]
    },
    {
      grupo: 'Pé e tornozelo',
      itens: [
        { art:'Metatarso-cuneiformes · Cuneiformes-navicular · Navicular-talus — deslize dorso-plantar (AP)', movimentos:'Deslize AP', passos:[
          'TESTE: indicadores, médios e anulares da mão ativa no segmento desejado; polegares na planta do pé mantendo o alinhamento; forçar o movimento AP sentindo o jogo de junta.',
          'AJUSTE: médio da mão ativa no segmento desejado, reforço com a mão de apoio, flexão dorsal e IMPULSO axial.'
        ]},
        { art:'Mesmos segmentos — deslize planto-dorsal (PA)', movimentos:'Deslize PA', passos:[
          'TESTE: pressão plantar com o polegar em cada articulação; forçar o movimento PA sentindo o jogo de junta; a mão de apoio na região dorsal auxilia a flexão plantar.',
          'AJUSTE (paciente em pé, com apoio): joelho fletido com o pé ao lado do outro joelho; polegar duplo na articulação desejada; movimentos lentos para relaxar; RECOIL — realizar o deslize PA evitando a dorsiflexão.',
          'AJUSTE (paciente prono): joelho a 45°, tornozelo a 90°; com os polegares sobrepostos testar a movimentação PA e adicionar IMPULSO se necessário.'
        ]},
        { art:'Cubóide', movimentos:'Jogo articular · Cisalhamento', passos:[
          'TESTE: polegar na porção plantar do cubóide, indicador na porção dorsal; testar a presença de jogo articular.',
          'AJUSTE: polegar na porção plantar, gume interno da mão na porção dorsal; dedos da mão de apoio no metatarso desejado; ajuste por rotação inversa (ação de cisalhamento).'
        ]},
        { art:'Talo-crural — extensão longitudinal', movimentos:'Extensão longitudinal', passos:[
          'Parte interna da coxa do paciente apoiada nas costas do terapeuta.',
          'Gumes internos das mãos testam a extensão da articulação talo-crural.',
          'Adicionar IMPULSO se houver restrição de movimento.'
        ]},
        { art:'Calcâneo / talus — deslizes lateral-medial e medial-lateral', movimentos:'Deslize lateral · medial', passos:[
          'Apoiar o calcâneo com os dedos: internamente para desvio LATERAL, externamente para desvio MEDIAL.',
          'Testar a presença de jogo articular.',
          'IMPULSO por uma tapa com a outra mão sobre os dedos, forçando o movimento desejado.'
        ]},
        { art:'Tíbio-fibular inferior — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'Paciente em decúbito lateral, perna levemente fletida.',
          'Polegares e indicadores no maléolo externo.',
          'Testar os movimentos de AP/PA.',
          'Havendo restrição, IMPULSO com o polegar duplo ou com os indicadores.'
        ]}
      ]
    },
    {
      grupo: 'Perna — joelho e quadril',
      itens: [
        { art:'Tíbio-fibular superior — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'SUPINO: joelho do paciente fletido, terapeuta sentado sobre o pé do paciente; indicador e polegar na fíbula testam o movimento AP/PA; impulso se houver restrição.',
          'PRONO (lesão contralateral): indicador da mão ativa na articulação tíbio-fibular superior com reforço do médio; flexionar o joelho com a mão de apoio; IMPULSO.'
        ]},
        { art:'Patela — movimentação plena', movimentos:'Todos os movimentos possíveis', passos:[
          'Gumes internos das mãos guiam todos os movimentos possíveis.',
          'Adicionar IMPULSO se houver restrição de movimento.'
        ]},
        { art:'Tíbio-femoral — deslize AP/PA', movimentos:'Deslize AP/PA', passos:[
          'SUPINO (AP): perna fletida a 90° sobre a coxa do terapeuta; gume interno da mão ativa na linha do platô tibial com reforço da mão de apoio; testar o deslize AP e impulsionar se houver restrição.',
          'PRONO (PA): perna flexionada a 90° apoiada no ombro do terapeuta; gume externo das mãos na fossa poplítea forçando a tíbia no deslize PA; IMPULSO se houver restrição.'
        ]},
        { art:'Tíbio-femoral — rotação medial/lateral', movimentos:'Rotação interna · externa', passos:[
          'PREFERENCIAL (supino): perna flexionada a 90° na perna do terapeuta; abarcar a tíbia com o gume interno da mão na linha do platô; rotação interna ou externa com movimentos circulares no sentido desejado.',
          'VARIAÇÃO 1 (específica): encaixar o joelho do terapeuta na porção interna do joelho do paciente forrado com toalha; o paciente segura a toalha forçando o fêmur em sua direção; enlaçar a tíbia com os antebraços, remover a folga do movimento rotacional e IMPULSO.',
          'Rotação lateral: trabalhar do lado oposto. Rotação medial: trabalhar do mesmo lado.',
          'VARIAÇÃO 2 (geral): segurar a tíbia com as duas mãos pelo terço distal e forçar os pés na rotação desejada; IMPULSO axial + rotacional.'
        ]},
        { art:'Tíbio-femoral — deslize lateral/medial', movimentos:'Deslize lateral · medial', passos:[
          'Paciente supino, tornozelo seguro entre as pernas do terapeuta.',
          'Gumes internos das mãos no platô tibial.',
          'Pequena flexão de joelho; testar o jogo de junta nos sentidos lateral e medial.',
          'Adicionar IMPULSO se necessário.'
        ]},
        { art:'Coxo-femoral — testes', movimentos:'Figura do 4 · Extensão longitudinal · Flexão · Extensão · Rotação externa e interna', passos:[
          'Percorrer os seis testes e localizar o sentido bloqueado antes de escolher o ajuste.'
        ]},
        { art:'Coxo-femoral — manobra geral', movimentos:'Tração do fêmur', passos:[
          'Paciente em decúbito lateral, em posição neutra (evitar rotação lombar).',
          'Joelho do terapeuta na fossa poplítea formada pelo joelho dobrado do paciente.',
          'Mão de apoio estabiliza o ombro; mão ativa invertida no grande trocanter.',
          'Esticar o joelho até quase tocar o chão, produzindo tração no fêmur; BODY DROP.'
        ]},
        { art:'Coxo-femoral — extensão', movimentos:'Extensão', passos:[
          'SUPINO: mão de apoio flexiona a perna oposta ao bloqueio; mão ativa no terço proximal do fêmur, o mais próximo possível do trocanter maior; limite e IMPULSO de extensão com a mão ativa.',
          'PRONO: mão ativa no grande trocanter, mão de apoio lateral ao joelho (fletido ou não); promover a extensão coxo-femoral e IMPULSO.'
        ]},
        { art:'Coxo-femoral — rotação externa/interna', movimentos:'Rotação externa · interna', passos:[
          'Paciente prono.',
          'Mão ativa no grande trocanter; mão de apoio conduz o movimento pelo tornozelo.',
          'Levar ao limite do movimento desejado (externo ou interno); BODY DROP.'
        ]},
        { art:'Coxo-femoral — extensão longitudinal', movimentos:'Extensão longitudinal', passos:[
          'Paciente supino, a perna neutra apoiada levemente fletida no joelho do terapeuta.',
          'Gumes internos das mãos do terapeuta seguram o tornozelo.',
          'Testar o jogo de junta na extensão longitudinal; a partir da posição de teste, limite e IMPULSO.',
          'Pode-se associar rotação externa ou interna.'
        ]}
      ]
    }
  ]
};
