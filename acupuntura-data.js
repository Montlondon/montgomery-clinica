// Base de Acupuntura (Diagnóstico Integrado) — irmão do dados-clinicos.js.
// Uma raiz, muitos reflexos: este arquivo alimenta o card de Acupuntura da
// Clínica e, futuramente, a camada de pontos do Vitruviano no Montgomery OS.
// Conteúdo: conhecimento tradicional público (nomes, localização, funções,
// indicações). Links Deadman gerados pela tabela de códigos TESTADA em 17/07.
// Vela 1 (17/07): estrutura + Pulmão, Intestino Grosso e Estômago (76 pontos).
// Velas 2 e 3: demais meridianos até ~360 pontos.

const ACUPUNTURA_MERIDIANOS = {
  'P':   { nome:'Pulmão',            deadman:'LU',   elemento:'Metal',   cor:'#78909C', yin:true,  total:11 },
  'IG':  { nome:'Intestino Grosso',  deadman:'L.I.', elemento:'Metal',   cor:'#78909C', yin:false, total:20 },
  'E':   { nome:'Estômago',          deadman:'ST',   elemento:'Terra',   cor:'#C9A227', yin:false, total:45 },
  'BP':  { nome:'Baço-Pâncreas',     deadman:'SP',   elemento:'Terra',   cor:'#C9A227', yin:true,  total:21 },
  'C':   { nome:'Coração',           deadman:'HE',   elemento:'Fogo',    cor:'#C62828', yin:true,  total:9  },
  'ID':  { nome:'Intestino Delgado', deadman:'SI',   elemento:'Fogo',    cor:'#C62828', yin:false, total:19 },
  'B':   { nome:'Bexiga',            deadman:'BL',   elemento:'Água',    cor:'#1565C0', yin:false, total:67 },
  'R':   { nome:'Rim',               deadman:'KID',  elemento:'Água',    cor:'#1565C0', yin:true,  total:27 },
  'CS':  { nome:'Pericárdio',        deadman:'P',    elemento:'Fogo',    cor:'#C62828', yin:true,  total:9  },
  'TR':  { nome:'Triplo Aquecedor',  deadman:'SJ',   elemento:'Fogo',    cor:'#C62828', yin:false, total:23 },
  'VB':  { nome:'Vesícula Biliar',   deadman:'GB',   elemento:'Madeira', cor:'#2E7D32', yin:false, total:44 },
  'F':   { nome:'Fígado',            deadman:'LIV',  elemento:'Madeira', cor:'#2E7D32', yin:true,  total:14 },
  'VC':  { nome:'Vaso Concepção',    deadman:'REN',  elemento:'Extraordinário', cor:'#6A1B9A', yin:true,  total:24 },
  'VG':  { nome:'Vaso Governador',   deadman:'DU',   elemento:'Extraordinário', cor:'#6A1B9A', yin:false, total:28 }
};

// Link estável (Montgomery logado cai direto no vídeo do ponto)
function acupunturaDeadmanURL(m, n){
  const cod = ACUPUNTURA_MERIDIANOS[m] ? ACUPUNTURA_MERIDIANOS[m].deadman : m;
  return 'https://app.amanualofacupuncture.com/es/point/' + cod + '-' + n;
}

// Campos: m (sigla), n (número), py (pinyin), hz (caracteres), pt (tradução),
// en (inglês), loc (localização), fn (funções MTC), ind (indicações)
const ACUPUNTURA_PONTOS = [
// ————— PULMÃO (P / LU) — 11 pontos —————
{m:'P',n:1,py:'Zhongfu',hz:'中府',pt:'Palácio Central',en:'Central Treasury',loc:'Face lateral do tórax, 1º espaço intercostal, 6 cun lateral à linha média, 1 cun abaixo de P-2.',fn:'Ponto Mu do Pulmão. Dispersa calor do tórax, regula o Qi do Pulmão, faz descer o Qi rebelde.',ind:'Tosse, asma, dor torácica, ombro anterior, plenitude no peito.'},
{m:'P',n:2,py:'Yunmen',hz:'雲門',pt:'Porta das Nuvens',en:'Cloud Gate',loc:'Depressão abaixo da extremidade acromial da clavícula, 6 cun lateral à linha média.',fn:'Dispersa calor, regula a circulação do Qi no tórax e membro superior.',ind:'Tosse, asma, dor no ombro e braço, sensação de opressão torácica.'},
{m:'P',n:3,py:'Tianfu',hz:'天府',pt:'Palácio Celestial',en:'Celestial Storehouse',loc:'Face anterolateral do braço, 3 cun abaixo da prega axilar, borda radial do bíceps.',fn:'Ponto Janela do Céu. Acalma o Po (alma corpórea), clareia o calor do Pulmão.',ind:'Epistaxe, asma, tristeza e choro, dor no braço.'},
{m:'P',n:4,py:'Xiabai',hz:'俠白',pt:'Guardião do Branco',en:'Guarding White',loc:'1 cun abaixo de P-3, borda radial do bíceps.',fn:'Regula o Qi do tórax, harmoniza Coração e Pulmão.',ind:'Tosse, palpitação, dor no braço medial.'},
{m:'P',n:5,py:'Chize',hz:'尺澤',pt:'Pântano do Côvado',en:'Cubit Marsh',loc:'Prega do cotovelo, borda radial do tendão do bíceps.',fn:'Ponto He-Mar (Água). Filho do Metal — dispersa plenitude, clareia calor do Pulmão, faz descer o Qi.',ind:'Tosse com catarro amarelo, asma, dor de garganta, cotovelo (epicondilite medial), eczema.'},
{m:'P',n:6,py:'Kongzui',hz:'孔最',pt:'Abertura Máxima',en:'Collection Hole',loc:'Face radial do antebraço, 7 cun acima da prega do punho, na linha P-5→P-9.',fn:'Ponto Xi-Fenda. Trata quadros agudos do Pulmão, faz o sangue parar.',ind:'Crise aguda de tosse/asma, hemoptise, dor de garganta aguda, hemorroida.'},
{m:'P',n:7,py:'Lieque',hz:'列缺',pt:'Sequência Quebrada',en:'Broken Sequence',loc:'Acima do processo estiloide do rádio, 1,5 cun acima da prega do punho.',fn:'Ponto Luo; abre o Vaso Concepção. Libera o exterior, beneficia cabeça e nuca, regula as vias das águas.',ind:'Resfriado, tosse, cefaleia e rigidez de nuca, punho, edema; tristeza retida.'},
{m:'P',n:8,py:'Jingqu',hz:'經渠',pt:'Canal do Meridiano',en:'Channel Ditch',loc:'1 cun acima da prega do punho, na goteira radial, sobre a artéria.',fn:'Ponto Jing-Rio (Metal). Faz descer o Qi do Pulmão.',ind:'Tosse, asma, dor de garganta, dor no punho.'},
{m:'P',n:9,py:'Taiyuan',hz:'太淵',pt:'Abismo Supremo',en:'Great Abyss',loc:'Prega do punho, lado radial, sobre a artéria radial.',fn:'Ponto Shu-Riacho e Yuan (Terra); ponto de reunião dos vasos. Tonifica o Qi do Pulmão, resolve fleuma, regula o pulso.',ind:'Tosse crônica, voz fraca, cansaço respiratório, palpitação, pulso fraco, punho.'},
{m:'P',n:10,py:'Yuji',hz:'魚際',pt:'Borda do Peixe',en:'Fish Border',loc:'Meio do 1º metacarpo, na transição pele palmar/dorsal (a "barriga do peixe" do polegar).',fn:'Ponto Ying-Fonte (Fogo). Clareia calor do Pulmão, beneficia a garganta.',ind:'Garganta inflamada, perda de voz, tosse seca com calor, febre.'},
{m:'P',n:11,py:'Shaoshang',hz:'少商',pt:'Pequeno Comerciante',en:'Lesser Shang',loc:'Ângulo ungueal radial do polegar, 0,1 cun da unha.',fn:'Ponto Jing-Poço (Madeira). Expele vento, clareia calor, restaura a consciência (sangria).',ind:'Emergência: garganta muito inflamada, febre alta, desmaio, apoplexia.'},
// ————— INTESTINO GROSSO (IG / L.I.) — 20 pontos —————
{m:'IG',n:1,py:'Shangyang',hz:'商陽',pt:'Yang do Comerciante',en:'Shang Yang',loc:'Ângulo ungueal radial do indicador, 0,1 cun da unha.',fn:'Ponto Jing-Poço (Metal). Clareia calor, restaura a consciência.',ind:'Dor de garganta, dor de dente, febre, desmaio.'},
{m:'IG',n:2,py:'Erjian',hz:'二間',pt:'Segundo Intervalo',en:'Second Space',loc:'Depressão distal à articulação metacarpofalângica do indicador, lado radial.',fn:'Ponto Ying-Fonte (Água). Clareia calor, alivia a dor.',ind:'Dor de dente, garganta, epistaxe, febre.'},
{m:'IG',n:3,py:'Sanjian',hz:'三間',pt:'Terceiro Intervalo',en:'Third Space',loc:'Depressão proximal à cabeça do 2º metacarpo, lado radial.',fn:'Ponto Shu-Riacho (Madeira). Dispersa vento-calor, beneficia garganta e dentes.',ind:'Dor de dente, garganta, dor e rigidez dos dedos e mão.'},
{m:'IG',n:4,py:'Hegu',hz:'合谷',pt:'Vale da União',en:'Joining Valley',loc:'Dorso da mão, ponto mais alto do músculo entre 1º e 2º metacarpos.',fn:'Ponto Yuan. Comando da face e boca. Libera o exterior, expele vento, move o Qi e alivia qualquer dor. Contraindicado na gravidez.',ind:'Dor em geral, cefaleia, dor de dente, sinusite, resfriado, constipação, indução de parto (a termo), paralisia facial.'},
{m:'IG',n:5,py:'Yangxi',hz:'陽谿',pt:'Riacho Yang',en:'Yang Ravine',loc:'Lado radial do punho, na "tabaqueira anatômica" entre os tendões do polegar.',fn:'Ponto Jing-Rio (Fogo). Clareia calor, beneficia o punho.',ind:'Dor de punho (tendinite de De Quervain), cefaleia, dor de dente, olhos vermelhos.'},
{m:'IG',n:6,py:'Pianli',hz:'偏歷',pt:'Passagem Lateral',en:'Veering Passage',loc:'3 cun acima de IG-5, na linha IG-5→IG-11.',fn:'Ponto Luo. Regula as vias das águas, beneficia ouvido e olhos.',ind:'Edema, zumbido, epistaxe, dor no antebraço.'},
{m:'IG',n:7,py:'Wenliu',hz:'溫溜',pt:'Fluxo Morno',en:'Warm Flow',loc:'5 cun acima de IG-5, na linha IG-5→IG-11.',fn:'Ponto Xi-Fenda. Clareia calor, trata quadros agudos do meridiano.',ind:'Dor aguda no braço, garganta, furúnculo facial, borborigmo.'},
{m:'IG',n:8,py:'Xialian',hz:'下廉',pt:'Borda Inferior',en:'Lower Ridge',loc:'4 cun abaixo de IG-11.',fn:'Regula Intestino e Estômago, ativa o meridiano.',ind:'Dor abdominal, dor no cotovelo e braço.'},
{m:'IG',n:9,py:'Shanglian',hz:'上廉',pt:'Borda Superior',en:'Upper Ridge',loc:'3 cun abaixo de IG-11.',fn:'Ativa o meridiano, alivia a dor.',ind:'Dor e dormência do braço, ombro, borborigmo.'},
{m:'IG',n:10,py:'Shousanli',hz:'手三里',pt:'Três Distâncias do Braço',en:'Arm Three Li',loc:'2 cun abaixo de IG-11.',fn:'Ativa o meridiano, alivia a dor, regula Qi e Sangue — o "E-36 do braço".',ind:'Dor no cotovelo e braço, epicondilite lateral, paralisia do membro superior, dor abdominal.'},
{m:'IG',n:11,py:'Quchi',hz:'曲池',pt:'Lagoa da Curva',en:'Pool at the Bend',loc:'Extremidade lateral da prega do cotovelo, a meio caminho até o epicôndilo lateral.',fn:'Ponto He-Mar (Terra). Grande ponto para clarear calor, esfriar o sangue, expelir vento, baixar a pressão.',ind:'Febre, hipertensão, alergias e urticária, eczema, dor no cotovelo, hemiplegia.'},
{m:'IG',n:12,py:'Zhouliao',hz:'肘髎',pt:'Fenda do Cotovelo',en:'Elbow Crevice',loc:'1 cun acima e lateral a IG-11, na borda do úmero.',fn:'Ativa o meridiano, beneficia o cotovelo.',ind:'Dor, contratura e dormência do cotovelo e braço.'},
{m:'IG',n:13,py:'Shouwuli',hz:'手五里',pt:'Cinco Distâncias do Braço',en:'Arm Five Li',loc:'3 cun acima de IG-11, na linha IG-11→IG-15.',fn:'Ativa o meridiano, resolve fleuma acumulada.',ind:'Dor no braço, nódulos cervicais/axilares.'},
{m:'IG',n:14,py:'Binao',hz:'臂臑',pt:'Músculo do Braço',en:'Upper Arm',loc:'Na inserção do deltoide, 7 cun acima de IG-11.',fn:'Beneficia os olhos, ativa o meridiano, resolve fleuma.',ind:'Dor no ombro e braço, problemas oculares, nódulos cervicais.'},
{m:'IG',n:15,py:'Jianyu',hz:'肩髃',pt:'Osso do Ombro',en:'Shoulder Bone',loc:'Depressão anterior-inferior ao acrômio com o braço abduzido.',fn:'Ponto principal do ombro. Expele vento-umidade, beneficia a articulação.',ind:'Dor no ombro (bursite, manguito), ombro congelado, hemiplegia.'},
{m:'IG',n:16,py:'Jugu',hz:'巨骨',pt:'Osso Grande',en:'Great Bone',loc:'Depressão entre a extremidade acromial da clavícula e a espinha da escápula.',fn:'Ativa o meridiano, beneficia o ombro.',ind:'Dor no ombro com limitação de movimento.'},
{m:'IG',n:17,py:'Tianding',hz:'天鼎',pt:'Trípode Celestial',en:'Celestial Tripod',loc:'Face lateral do pescoço, borda posterior do esternocleidomastóideo, 1 cun abaixo de IG-18.',fn:'Beneficia garganta e voz.',ind:'Dor de garganta, rouquidão súbita, nódulos cervicais.'},
{m:'IG',n:18,py:'Futu',hz:'扶突',pt:'Apoio da Proeminência',en:'Support the Prominence',loc:'Lateral do pescoço, entre as cabeças do esternocleidomastóideo, na altura do pomo de Adão.',fn:'Ponto Janela do Céu. Beneficia garganta e voz, faz descer o Qi rebelde.',ind:'Dor de garganta, rouquidão, tosse, bócio.'},
{m:'IG',n:19,py:'Kouheliao',hz:'口禾髎',pt:'Fenda do Cereal',en:'Grain Crevice',loc:'Abaixo da borda lateral da narina, na altura de VG-26.',fn:'Abre o nariz, expele vento.',ind:'Obstrução nasal, epistaxe, paralisia facial.'},
{m:'IG',n:20,py:'Yingxiang',hz:'迎香',pt:'Recebendo a Fragrância',en:'Welcome Fragrance',loc:'No sulco nasolabial, ao lado da asa do nariz.',fn:'Abre o nariz, expele vento, clareia calor. Fim do meridiano — conecta ao Estômago.',ind:'Sinusite, rinite, obstrução nasal, perda do olfato, paralisia facial.'},
// ————— ESTÔMAGO (E / ST) — 45 pontos —————
{m:'E',n:1,py:'Chengqi',hz:'承泣',pt:'Recipiente das Lágrimas',en:'Tear Container',loc:'Abaixo da pupila (olhar para frente), entre o globo ocular e a borda infraorbital.',fn:'Beneficia os olhos, expele vento, detém o lacrimejamento.',ind:'Olhos vermelhos, lacrimejamento, miopia, tique palpebral, paralisia facial.'},
{m:'E',n:2,py:'Sibai',hz:'四白',pt:'Quatro Brancos',en:'Four Whites',loc:'Abaixo da pupila, na depressão do forame infraorbital.',fn:'Beneficia os olhos, expele vento, clareia a visão.',ind:'Olhos, nevralgia do trigêmeo, paralisia facial, sinusite maxilar.'},
{m:'E',n:3,py:'Juliao',hz:'巨髎',pt:'Grande Fenda',en:'Great Crevice',loc:'Abaixo da pupila, na altura da borda inferior da asa do nariz.',fn:'Expele vento, ativa o meridiano na face.',ind:'Paralisia facial, dor de dente superior, sinusite, nevralgia.'},
{m:'E',n:4,py:'Dicang',hz:'地倉',pt:'Celeiro da Terra',en:'Earth Granary',loc:'0,4 cun lateral ao canto da boca.',fn:'Expele vento da face, ativa o meridiano.',ind:'Paralisia facial (desvio da boca), salivação, nevralgia do trigêmeo.'},
{m:'E',n:5,py:'Daying',hz:'大迎',pt:'Grande Recepção',en:'Great Reception',loc:'Borda anterior do masseter, no sulco da artéria facial.',fn:'Expele vento, beneficia mandíbula e dentes.',ind:'Trismo, dor de dente, paralisia facial, edema facial.'},
{m:'E',n:6,py:'Jiache',hz:'頰車',pt:'Carruagem da Bochecha',en:'Jawbone',loc:'Uma polegada acima do ângulo da mandíbula, na proeminência do masseter ao cerrar os dentes.',fn:'Expele vento, beneficia a mandíbula, alivia a dor.',ind:'Bruxismo, ATM, dor de dente inferior, trismo, paralisia facial.'},
{m:'E',n:7,py:'Xiaguan',hz:'下關',pt:'Passagem Inferior',en:'Below the Joint',loc:'Depressão entre o arco zigomático e a incisura da mandíbula (boca fechada).',fn:'Beneficia ouvido e mandíbula, alivia a dor.',ind:'ATM, dor de dente, zumbido, surdez, nevralgia do trigêmeo.'},
{m:'E',n:8,py:'Touwei',hz:'頭維',pt:'Amarração da Cabeça',en:'Head Corner',loc:'0,5 cun dentro da linha do cabelo no ângulo frontal, 4,5 cun lateral à linha média.',fn:'Expele vento, alivia a dor, beneficia os olhos.',ind:'Cefaleia frontal/temporal, enxaqueca, tontura, lacrimejamento.'},
{m:'E',n:9,py:'Renying',hz:'人迎',pt:'Recepção do Homem',en:'Man’s Prognosis',loc:'Ao lado do pomo de Adão, borda anterior do esternocleidomastóideo, sobre a carótida.',fn:'Ponto Janela do Céu. Regula o Qi e a pressão, beneficia a garganta. Cuidado com a artéria.',ind:'Hipertensão, garganta, bócio, asma, tontura.'},
{m:'E',n:10,py:'Shuitu',hz:'水突',pt:'Proeminência da Água',en:'Water Prominence',loc:'Borda anterior do esternocleidomastóideo, entre E-9 e E-11.',fn:'Faz descer o Qi do Pulmão, beneficia a garganta.',ind:'Tosse, asma, dor de garganta, bócio.'},
{m:'E',n:11,py:'Qishe',hz:'氣舍',pt:'Morada do Qi',en:'Qi Abode',loc:'Borda superior da clavícula, entre as cabeças do esternocleidomastóideo.',fn:'Faz descer o Qi rebelde, beneficia garganta e pescoço.',ind:'Tosse, soluço, garganta, rigidez de nuca, bócio.'},
{m:'E',n:12,py:'Quepen',hz:'缺盆',pt:'Bacia Vazia',en:'Empty Basin',loc:'Fossa supraclavicular, 4 cun lateral à linha média.',fn:'Faz descer o Qi do Pulmão. Cuidado: ápice do pulmão.',ind:'Tosse, asma, dor de garganta, dor supraclavicular.'},
{m:'E',n:13,py:'Qihu',hz:'氣戶',pt:'Porta do Qi',en:'Qi Door',loc:'Borda inferior da clavícula, 4 cun lateral à linha média.',fn:'Faz descer o Qi, desobstrui o tórax.',ind:'Tosse, asma, plenitude torácica, soluço.'},
{m:'E',n:14,py:'Kufang',hz:'庫房',pt:'Depósito',en:'Storehouse',loc:'1º espaço intercostal, 4 cun lateral à linha média.',fn:'Faz descer o Qi do Pulmão.',ind:'Tosse, catarro abundante, dor torácica.'},
{m:'E',n:15,py:'Wuyi',hz:'屋翳',pt:'Biombo da Casa',en:'Roof Screen',loc:'2º espaço intercostal, 4 cun lateral à linha média.',fn:'Faz descer o Qi, beneficia as mamas.',ind:'Tosse, asma, dor/nódulo mamário.'},
{m:'E',n:16,py:'Yingchuang',hz:'膺窗',pt:'Janela do Peito',en:'Breast Window',loc:'3º espaço intercostal, 4 cun lateral à linha média.',fn:'Beneficia as mamas, desobstrui o tórax.',ind:'Mastite, dor torácica, tosse.'},
{m:'E',n:17,py:'Ruzhong',hz:'乳中',pt:'Centro da Mama',en:'Breast Center',loc:'Centro do mamilo, 4º espaço intercostal.',fn:'Apenas referência de medida — não se agulha nem se aplica moxa.',ind:'Ponto de referência anatômica.'},
{m:'E',n:18,py:'Rugen',hz:'乳根',pt:'Raiz da Mama',en:'Breast Root',loc:'5º espaço intercostal, na base da mama.',fn:'Beneficia as mamas, promove a lactação, faz descer o Qi.',ind:'Pouco leite, mastite, dor torácica, tosse.'},
{m:'E',n:19,py:'Burong',hz:'不容',pt:'Não Contém',en:'Not Contained',loc:'6 cun acima do umbigo, 2 cun lateral à linha média.',fn:'Harmoniza o Estômago, faz descer o Qi rebelde.',ind:'Plenitude gástrica, vômito, dor epigástrica.'},
{m:'E',n:20,py:'Chengman',hz:'承滿',pt:'Recebe a Plenitude',en:'Assuming Fullness',loc:'5 cun acima do umbigo, 2 cun lateral.',fn:'Harmoniza o Estômago, regula o Qi.',ind:'Distensão epigástrica, pouco apetite, vômito.'},
{m:'E',n:21,py:'Liangmen',hz:'梁門',pt:'Porta da Viga',en:'Beam Gate',loc:'4 cun acima do umbigo, 2 cun lateral.',fn:'Harmoniza o Estômago, dissolve estagnação de alimentos.',ind:'Dor e distensão epigástrica, má digestão, vômito.'},
{m:'E',n:22,py:'Guanmen',hz:'關門',pt:'Porta da Passagem',en:'Pass Gate',loc:'3 cun acima do umbigo, 2 cun lateral.',fn:'Regula o Qi dos intestinos, beneficia a digestão.',ind:'Distensão abdominal, borborigmo, diarreia, edema.'},
{m:'E',n:23,py:'Taiyi',hz:'太乙',pt:'Unidade Suprema',en:'Supreme Unity',loc:'2 cun acima do umbigo, 2 cun lateral.',fn:'Harmoniza o Centro, acalma o Shen.',ind:'Agitação mental, distensão abdominal, má digestão.'},
{m:'E',n:24,py:'Huaroumen',hz:'滑肉門',pt:'Porta da Carne Escorregadia',en:'Slippery Flesh Gate',loc:'1 cun acima do umbigo, 2 cun lateral.',fn:'Harmoniza o Estômago, resolve fleuma, acalma o Shen.',ind:'Vômito, agitação, língua rígida.'},
{m:'E',n:25,py:'Tianshu',hz:'天樞',pt:'Pivô Celestial',en:'Celestial Pivot',loc:'2 cun lateral ao centro do umbigo.',fn:'Ponto Mu do Intestino Grosso. Regula intestinos e o Qi do abdome — constipação e diarreia.',ind:'Constipação, diarreia, distensão, cólica, irregularidade menstrual.'},
{m:'E',n:26,py:'Wailing',hz:'外陵',pt:'Colina Externa',en:'Outer Mound',loc:'1 cun abaixo do umbigo, 2 cun lateral.',fn:'Regula o Qi, alivia a dor abdominal.',ind:'Dor abdominal baixa, dismenorreia, hérnia.'},
{m:'E',n:27,py:'Daju',hz:'大巨',pt:'O Grande',en:'Great Gigantic',loc:'2 cun abaixo do umbigo, 2 cun lateral.',fn:'Beneficia o Jiao Inferior, fortalece o Rim.',ind:'Distensão baixa, disúria, hérnia, insônia.'},
{m:'E',n:28,py:'Shuidao',hz:'水道',pt:'Caminho da Água',en:'Waterway',loc:'3 cun abaixo do umbigo, 2 cun lateral.',fn:'Abre as vias das águas no Jiao Inferior, beneficia bexiga e útero.',ind:'Retenção urinária, edema, dismenorreia, infertilidade.'},
{m:'E',n:29,py:'Guilai',hz:'歸來',pt:'Retorno',en:'Return',loc:'4 cun abaixo do umbigo, 2 cun lateral.',fn:'Aquece o Jiao Inferior, beneficia o útero, move o sangue.',ind:'Amenorreia, dismenorreia, prolapso, hérnia, frio no baixo ventre.'},
{m:'E',n:30,py:'Qichong',hz:'氣衝',pt:'Investida do Qi',en:'Surging Qi',loc:'5 cun abaixo do umbigo, 2 cun lateral, sobre a região inguinal.',fn:'Ponto de encontro com o Chong Mai. Regula o Qi do Jiao Inferior.',ind:'Hérnia, dor genital, irregularidade menstrual, impotência.'},
{m:'E',n:31,py:'Biguan',hz:'髀關',pt:'Passagem da Coxa',en:'Thigh Joint',loc:'Face anterior da coxa, abaixo da espinha ilíaca anterossuperior, na linha até a patela.',fn:'Ativa o meridiano, expele vento-umidade.',ind:'Dor na coxa e quadril, atrofia e paralisia da perna, lombalgia irradiada.'},
{m:'E',n:32,py:'Futu',hz:'伏兔',pt:'Coelho Agachado',en:'Crouching Rabbit',loc:'6 cun acima da borda lateral superior da patela, na linha do reto femoral.',fn:'Ativa o meridiano, fortalece a perna.',ind:'Dor e fraqueza da coxa, joelho, beribéri, paralisia.'},
{m:'E',n:33,py:'Yinshi',hz:'陰市',pt:'Mercado do Yin',en:'Yin Market',loc:'3 cun acima da borda lateral superior da patela.',fn:'Expele frio-umidade, ativa o meridiano.',ind:'Frio e dor no joelho e perna, fraqueza dos membros inferiores.'},
{m:'E',n:34,py:'Liangqiu',hz:'梁丘',pt:'Colina da Viga',en:'Beam Hill',loc:'2 cun acima da borda lateral superior da patela.',fn:'Ponto Xi-Fenda. Quadros agudos do Estômago, beneficia o joelho.',ind:'Gastrite aguda, dor epigástrica aguda, mastite aguda, dor no joelho.'},
{m:'E',n:35,py:'Dubi',hz:'犢鼻',pt:'Nariz do Bezerro',en:'Calf’s Nose',loc:'Depressão lateral ao ligamento patelar (olho lateral do joelho), joelho flexionado.',fn:'Beneficia o joelho, expele vento-umidade, alivia a dor.',ind:'Dor, edema e limitação do joelho (artrose, lesões).'},
{m:'E',n:36,py:'Zusanli',hz:'足三里',pt:'Três Distâncias da Perna',en:'Leg Three Li',loc:'3 cun abaixo de E-35, um dedo lateral à crista da tíbia.',fn:'Ponto He-Mar (Terra) e de comando do abdome. O grande tonificante de Qi e Sangue — fortalece Baço/Estômago, imunidade e vitalidade; moxa para longevidade.',ind:'Qualquer distúrbio digestivo, fadiga, imunidade baixa, náusea, hipertensão, joelho; tonificação geral.'},
{m:'E',n:37,py:'Shangjuxu',hz:'上巨虛',pt:'Grande Vazio Superior',en:'Upper Great Hollow',loc:'6 cun abaixo de E-35, um dedo lateral à crista da tíbia.',fn:'Ponto He-Mar Inferior do Intestino Grosso. Regula intestinos, clareia calor-umidade.',ind:'Diarreia, disenteria, constipação, apendicite, distensão.'},
{m:'E',n:38,py:'Tiaokou',hz:'條口',pt:'Abertura Estreita',en:'Ribbon Opening',loc:'8 cun abaixo de E-35, um dedo lateral à crista da tíbia.',fn:'Ativa o meridiano. Ponto empírico para o ombro (agulhar com mobilização).',ind:'Ombro congelado (à distância), dor na perna, pé frio.'},
{m:'E',n:39,py:'Xiajuxu',hz:'下巨虛',pt:'Grande Vazio Inferior',en:'Lower Great Hollow',loc:'9 cun abaixo de E-35, um dedo lateral à crista da tíbia.',fn:'Ponto He-Mar Inferior do Intestino Delgado. Regula intestinos, alivia a dor.',ind:'Dor abdominal baixa, diarreia, dor lombar irradiada, mastite.'},
{m:'E',n:40,py:'Fenglong',hz:'豐隆',pt:'Abundância e Prosperidade',en:'Bountiful Bulge',loc:'8 cun abaixo de E-35, dois dedos laterais à crista da tíbia (lateral a E-38).',fn:'Ponto Luo. O grande ponto para transformar fleuma e umidade em qualquer forma — física ou mental. Acalma o Shen.',ind:'Catarro, tosse produtiva, tontura, colesterol, obesidade, fleuma mental (confusão, mania), epilepsia.'},
{m:'E',n:41,py:'Jiexi',hz:'解谿',pt:'Riacho Dividido',en:'Ravine Divide',loc:'Centro da prega anterior do tornozelo, entre os tendões extensores.',fn:'Ponto Jing-Rio (Fogo). Ponto Mãe — tonifica o Estômago; clareia calor do meridiano.',ind:'Dor no tornozelo, pé caído, cefaleia frontal, distensão abdominal.'},
{m:'E',n:42,py:'Chongyang',hz:'衝陽',pt:'Yang Impetuoso',en:'Surging Yang',loc:'Ponto mais alto do dorso do pé, sobre a artéria pediosa.',fn:'Ponto Yuan. Tonifica Estômago e Baço, acalma o Shen.',ind:'Pouco apetite, fraqueza digestiva, dor no dorso do pé, paralisia facial.'},
{m:'E',n:43,py:'Xiangu',hz:'陷谷',pt:'Vale Afundado',en:'Sunken Valley',loc:'Depressão distal à junção do 2º e 3º metatarsos.',fn:'Ponto Shu-Riacho (Madeira). Regula o Baço, resolve edema.',ind:'Edema facial e geral, borborigmo, dor no dorso do pé.'},
{m:'E',n:44,py:'Neiting',hz:'內庭',pt:'Pátio Interno',en:'Inner Court',loc:'Entre o 2º e 3º dedos do pé, na junção da pele interdigital.',fn:'Ponto Ying-Fonte (Água). Clareia calor do Estômago — a "aspirina" do Yangming.',ind:'Dor de dente, gengivite, dor de garganta, epistaxe, gastrite com calor, fome excessiva.'},
{m:'E',n:45,py:'Lidui',hz:'厲兌',pt:'Troca Severa',en:'Severe Mouth',loc:'Ângulo ungueal lateral do 2º dedo do pé, 0,1 cun da unha.',fn:'Ponto Jing-Poço (Metal). Clareia calor, acalma o Shen, restaura a consciência.',ind:'Insônia com agitação, sonhos excessivos, febre, epistaxe, desmaio.'}
];

// Índice rápido: pontos por meridiano
function acupunturaPontosDoMeridiano(sigla){
  return ACUPUNTURA_PONTOS.filter(p => p.m === sigla);
}
