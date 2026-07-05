import { useState, useRef } from "react";

// ── Paleta ─────────────────────────────────────────────────────────────────
const C = {
  navy: "#1B3A5C",
  navyLight: "#2A5280",
  navyAlpha: "rgba(27,58,92,0.08)",
  bege: "#F5F3EE",
  begeDeep: "#EAE6DE",
  border: "#E0DDD6",
  text: "#1C1917",
  textMuted: "#7C7670",
  textLight: "#A8A39C",
  white: "#FFFFFF",
  success: "#15803D",
  successBg: "#DCFCE7",
  warn: "#92400E",
  warnBg: "#FEF3C7",
  danger: "#991B1B",
  dangerBg: "#FEE2E2",
  accent: "#2A6496",
};

// ── Dados iniciais ──────────────────────────────────────────────────────────
const INITIAL_PATIENT = {
  nome: "Maria A. Magalhães",
  idade: 54,
  diagnostico: "DGM bilateral / Meibomite crônica",
  anosEvolution: 23,
  caso: "Caso de referência",
};

const INITIAL_METRICAS = {
  piOD: 14, piOE: 15,
  avOD: "20/40", avOE: "20/30",
  break_up: 4,
  schirmer: 8,
};

const SINTOMAS_OPCOES = [
  "Sensação de areia","Fotofobia","Secreção matinal","Ardor","Visão turva",
  "Olho seco","Prurido","Dor ocular","Epífora","Blefaroespasmo",
];

const GLANDULAS_INICIAL = {
  OD: Array.from({length:8}, (_,i) => ({ id:i, status:"normal" })),
  OE: Array.from({length:8}, (_,i) => ({ id:i, status:"normal" })),
};

const MTC_DATA = [
  { meridian:"Fígado (LR)", elemento:"Madeira", pontos:["LR1","LR3","LR8","LR14"], cor:"#1B5E20" },
  { meridian:"Vesícula Biliar (GB)", elemento:"Madeira", pontos:["GB1","GB14","GB20","GB37"], cor:"#2E7D32" },
  { meridian:"Bexiga (BL)", elemento:"Água", pontos:["BL1","BL2","BL10","BL18"], cor:"#0D47A1" },
  { meridian:"Estômago (ST)", elemento:"Terra", pontos:["ST1","ST2","ST36","ST44"], cor:"#E65100" },
  { meridian:"Rim (KI)", elemento:"Água", pontos:["KI3","KI6","KI7","KI10"], cor:"#1A237E" },
  { meridian:"Baço-Pâncreas (SP)", elemento:"Terra", pontos:["SP6","SP10","SP21"], cor:"#880E4F" },
];

const ERVAS = [
  { nome:"Euphrasia officinalis", acao:"Anti-inflamatório ocular", modo:"Compressas + oral 20gt 3x/dia", cor:"#2E7D32" },
  { nome:"Bilberry (Vaccinium myrtillus)", acao:"Antioxidante retinal", modo:"160mg 2×/dia com refeição", cor:"#4A148C" },
  { nome:"Ginkgo biloba", acao:"Microcirculação ocular", modo:"120mg/dia — extrato padronizado", cor:"#1B5E20" },
  { nome:"Calêndula officinalis", acao:"Compressas palpebrais", modo:"Infusão 5% — 3×/dia", cor:"#E65100" },
  { nome:"Crisântemo (Ju Hua)", acao:"Clareia visão / MTC", modo:"Chá 9g/dia — vento-calor", cor:"#F9A825" },
  { nome:"Cassia seed (Jue Ming Zi)", acao:"Pressão ocular / fígado", modo:"9–15g/dia em decocção", cor:"#827717" },
];

const PROTOCOLO_MEIBOMIO = [
  { passo:"Compressa quente palpebral", detalhe:"38–40°C · 10 minutos — amolece a secreção espessada" },
  { passo:"Massagem palpebral", detalhe:"Movimentos circulares suaves · margem palpebral · 5 min" },
  { passo:"Expressão manual das glândulas", detalhe:"Pinça digital · margem superior e inferior · OD depois OE" },
  { passo:"Higiene palpebral", detalhe:"Solução de hipoclorito 0,01% ou baby shampoo diluído" },
  { passo:"Registro fotográfico", detalhe:"Pré e pós expressão · biomicroscopia · salvar com data" },
  { passo:"Acupuntura oftalmológica", detalhe:"BL1, BL2, ST1, GB1, GB14 · agulhas 0,20×13mm · 20 min" },
  { passo:"Orientações domiciliares", detalhe:"Compressa 2×/dia · evitar AC · ômega-3 3g/dia" },
];

const PROTOCOLO_ACUPUNTURA = [
  { passo:"Avaliação pulso e língua", detalhe:"Deficiência Yin Hepático / Vento-Calor ascendente" },
  { passo:"Pontos locais", detalhe:"BL1 (Jingming) · BL2 (Zanzhu) · ST1 (Chengqi) · GB1 (Tongziliao)" },
  { passo:"Pontos distais — Fígado/VB", detalhe:"LR3 (Taichong) · GB20 (Fengchi) · GB37 (Guangming)" },
  { passo:"Tonificação Yin", detalhe:"KI3 (Taixi) · SP6 (Sanyinjiao) · BL18 (Ganshu)" },
  { passo:"Retenção das agulhas", detalhe:"20–30 minutos · moxabustão indireta em BL18 se Frio" },
  { passo:"Retirada e massagem Tui Na", detalhe:"Orbital leve · pressão em BL2 e GB1 · 3 minutos" },
];

const DIAGNOSTICOS = [
  "DGM / Meibomite","Olho Seco (KCS)","Glaucoma","Catarata",
  "Ceratoconjuntivite","Pterígio","Blefarite","Uveíte",
];

const TIMELINE_INICIAL = [
  { data:"Jun 2026", evento:"Expressão + acupuntura BL1/BL2 — melhora ardor", tipo:"sessao" },
  { data:"Mar 2026", evento:"Redução fotofobia 40% — ajuste protocolo fitoterápico", tipo:"melhora" },
  { data:"Nov 2025", evento:"Introdução Euphrasia + Bilberry — inicio MTC", tipo:"sessao" },
  { data:"2003", evento:"Diagnóstico inicial DGM bilateral", tipo:"diagnostico" },
];

// ── Estilos inline base ──────────────────────────────────────────────────────
const S = {
  app: {
    display:"flex", height:"100vh", minHeight:600,
    background:C.bege, fontFamily:"Inter, system-ui, sans-serif",
    fontSize:13, color:C.text, overflow:"hidden",
  },
  sidebar: {
    width:216, background:C.navy, display:"flex",
    flexDirection:"column", flexShrink:0, overflowY:"auto",
  },
  main: { flex:1, display:"flex", flexDirection:"column", overflow:"hidden" },
  topbar: {
    background:C.white, borderBottom:`1px solid ${C.border}`,
    padding:"0 20px", height:52, display:"flex",
    alignItems:"center", justifyContent:"space-between", flexShrink:0,
  },
  content: { flex:1, overflowY:"auto", padding:18, background:C.bege },
  card: {
    background:C.white, borderRadius:10, border:`1px solid ${C.border}`,
    padding:16, marginBottom:14,
  },
  cardTitle: {
    fontFamily:"Georgia, serif", fontSize:13.5,
    fontWeight:600, color:C.navy, marginBottom:2,
  },
  cardSub: { fontSize:11, color:C.textMuted, marginBottom:12 },
  grid2: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:14 },
  badge: (bg,col) => ({
    fontSize:10, padding:"3px 9px", borderRadius:20,
    fontWeight:600, background:bg, color:col,
  }),
  btn: (primary) => ({
    fontSize:12, padding:"6px 14px", borderRadius:6,
    border:`1px solid ${primary ? C.navy : C.navy}`,
    background: primary ? C.navy : "transparent",
    color: primary ? C.white : C.navy,
    cursor:"pointer", fontFamily:"Inter, sans-serif", fontWeight:500,
  }),
  tag: (bg,col) => ({
    fontSize:11, padding:"4px 9px", borderRadius:20,
    fontWeight:500, background:bg, color:col,
    display:"inline-block", marginRight:5, marginBottom:5,
  }),
  input: {
    width:"100%", padding:"7px 10px", borderRadius:6,
    border:`1px solid ${C.border}`, fontSize:12,
    fontFamily:"Inter, sans-serif", color:C.text,
    background:C.white, outline:"none",
  },
  select: {
    padding:"7px 10px", borderRadius:6,
    border:`1px solid ${C.border}`, fontSize:12,
    fontFamily:"Inter, sans-serif", color:C.text,
    background:C.white, cursor:"pointer",
  },
  label: { fontSize:11, color:C.textMuted, marginBottom:4, display:"block" },
  metricCard: {
    background:C.bege, borderRadius:7, padding:"10px 12px",
  },
  navItem: (active) => ({
    display:"flex", alignItems:"center", gap:9,
    padding:"8px 10px", borderRadius:6, cursor:"pointer",
    background: active ? "rgba(255,255,255,0.14)" : "transparent",
    marginBottom:2, transition:"background 0.15s",
  }),
  navLabel: {
    fontSize:9, color:"rgba(255,255,255,0.32)",
    letterSpacing:"1.1px", textTransform:"uppercase",
    padding:"14px 10px 5px",
  },
  stepNum: {
    width:22, height:22, borderRadius:"50%", background:C.navy,
    color:C.white, fontSize:10, fontWeight:700,
    display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
  },
};

// ── Componente GlandDiagram ─────────────────────────────────────────────────
function GlandDiagram({ olho, glandulas, onChange }) {
  const cores = { normal:"#1B3A5C", obstruida:"#D97706", inflamada:"#DC2626", atrofia:"#9CA3AF" };
  const count = glandulas.length;
  const w = 160, h = 70;
  const gap = (w - 30) / (count - 1);

  function cycle(g) {
    const order = ["normal","obstruida","inflamada","atrofia"];
    const next = order[(order.indexOf(g.status) + 1) % order.length];
    onChange(g.id, next);
  }

  return (
    <div style={{ textAlign:"center" }}>
      <div style={{ fontSize:10, color:C.textMuted, marginBottom:4, textTransform:"uppercase", letterSpacing:"0.6px" }}>{olho}</div>
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ cursor:"pointer" }}>
        <ellipse cx={w/2} cy={h/2} rx={w/2-4} ry={h/2-8} fill="#EEF3F8" stroke={C.navy} strokeWidth={1}/>
        {glandulas.map((g,i) => (
          <g key={g.id} onClick={() => cycle(g)}>
            <rect
              x={15 + i*gap - 3} y={16}
              width={6} height={22} rx={3}
              fill={cores[g.status]} opacity={0.85}
            />
          </g>
        ))}
        <text x={w/2} y={h-4} textAnchor="middle" fontSize={7} fill={C.textMuted}>toque p/ alterar</text>
      </svg>
    </div>
  );
}

// ── PAINEL: Dashboard ───────────────────────────────────────────────────────
function PainelDashboard({ paciente, metricas, sintomas, timeline, glandulas, setGlandulas, setSintomas }) {
  const [editMet, setEditMet] = useState(false);
  const [met, setMet] = useState(metricas);
  const [novoSintoma, setNovoSintoma] = useState("");
  const [novoEvento, setNovoEvento] = useState("");
  const [tl, setTl] = useState(timeline);

  function toggleSintoma(s) {
    setSintomas(prev => prev.includes(s) ? prev.filter(x=>x!==s) : [...prev, s]);
  }
  function addEvento() {
    if (!novoEvento.trim()) return;
    const hoje = new Date().toLocaleDateString("pt-BR",{month:"short",year:"numeric"});
    setTl(prev => [{ data:hoje, evento:novoEvento, tipo:"sessao" }, ...prev]);
    setNovoEvento("");
  }
  function updateGland(olho, id, status) {
    setGlandulas(prev => ({
      ...prev,
      [olho]: prev[olho].map(g => g.id===id ? {...g,status} : g)
    }));
  }

  const tipoColor = { sessao:[C.navyAlpha,C.navy], melhora:[C.successBg,C.success], diagnostico:[C.warnBg,C.warn] };

  return (
    <div>
      {/* Métricas */}
      <div style={S.card}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
          <div style={S.cardTitle}>Métricas da sessão</div>
          <button style={S.btn(false)} onClick={() => setEditMet(!editMet)}>
            {editMet ? "Salvar" : "Editar"}
          </button>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8 }}>
          {[
            ["PIO Direito", met.piOD, "mmHg"],
            ["PIO Esquerdo", met.piOE, "mmHg"],
            ["AV Direito", met.avOD, ""],
            ["AV Esquerdo", met.avOE, ""],
            ["Break-up Time", met.break_up, "s"],
            ["Schirmer", met.schirmer, "mm/5min"],
          ].map(([label,val,unit]) => (
            <div key={label} style={S.metricCard}>
              <div style={{ fontSize:10, color:C.textMuted }}>{label}</div>
              {editMet ? (
                <input style={{...S.input, marginTop:4, padding:"3px 6px", fontSize:13, fontWeight:600}}
                  defaultValue={val}
                  onChange={e => setMet(prev=>({...prev, [label]:e.target.value}))}
                />
              ) : (
                <div style={{ fontSize:18, fontWeight:700, color:C.navy, fontFamily:"Georgia,serif" }}>
                  {val}<span style={{ fontSize:10, color:C.textMuted, fontWeight:400 }}> {unit}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={S.grid2}>
        {/* Sintomas */}
        <div style={S.card}>
          <div style={S.cardTitle}>Sintomas ativos</div>
          <div style={S.cardSub}>Clique para marcar/desmarcar</div>
          <div style={{ marginBottom:10 }}>
            {SINTOMAS_OPCOES.map(s => (
              <span key={s}
                style={{...S.tag(sintomas.includes(s) ? C.dangerBg : C.begeDeep, sintomas.includes(s) ? C.danger : C.textMuted), cursor:"pointer", marginBottom:5 }}
                onClick={() => toggleSintoma(s)}
              >{s}</span>
            ))}
          </div>
          <input style={S.input} placeholder="Adicionar sintoma personalizado..."
            value={novoSintoma}
            onChange={e=>setNovoSintoma(e.target.value)}
            onKeyDown={e=>{ if(e.key==="Enter" && novoSintoma.trim()){ setSintomas(p=>[...p, novoSintoma]); setNovoSintoma(""); }}}
          />
        </div>

        {/* Glândulas */}
        <div style={S.card}>
          <div style={S.cardTitle}>Glândulas de Meibômio</div>
          <div style={S.cardSub}>Toque em cada glândula para alterar status</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
            <GlandDiagram olho="Olho Direito" glandulas={glandulas.OD}
              onChange={(id,st) => updateGland("OD",id,st)} />
            <GlandDiagram olho="Olho Esquerdo" glandulas={glandulas.OE}
              onChange={(id,st) => updateGland("OE",id,st)} />
          </div>
          <div style={{ display:"flex", gap:12, marginTop:10 }}>
            {[["normal",C.navy],["obstruida","#D97706"],["inflamada","#DC2626"],["atrofia","#9CA3AF"]].map(([s,c])=>(
              <div key={s} style={{ display:"flex", alignItems:"center", gap:4 }}>
                <div style={{ width:9, height:9, borderRadius:2, background:c }}/>
                <span style={{ fontSize:10, color:C.textMuted }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div style={S.card}>
        <div style={S.cardTitle}>Linha do tempo clínica</div>
        <div style={{ display:"flex", gap:8, marginBottom:12 }}>
          <input style={{...S.input, flex:1}} placeholder="Registrar evento da sessão..."
            value={novoEvento} onChange={e=>setNovoEvento(e.target.value)}
            onKeyDown={e=>{ if(e.key==="Enter") addEvento(); }}
          />
          <button style={S.btn(true)} onClick={addEvento}>Registrar</button>
        </div>
        {tl.map((item,i) => (
          <div key={i} style={{ display:"flex", gap:10, marginBottom:10, alignItems:"flex-start" }}>
            <div style={{ width:8, height:8, borderRadius:"50%",
              background: item.tipo==="melhora" ? C.success : item.tipo==="diagnostico" ? C.warn : C.navy,
              marginTop:5, flexShrink:0 }}/>
            <div>
              <div style={{ fontSize:10, color:C.textMuted }}>{item.data}</div>
              <div style={{ fontSize:12.5, color:C.text, marginTop:2 }}>{item.evento}</div>
            </div>
            <span style={S.badge(...tipoColor[item.tipo])}>{item.tipo}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PAINEL: MTC ──────────────────────────────────────────────────────────────
function PainelMTC() {
  const [pontosAtivos, setPontosAtivos] = useState([]);
  const toggle = (p) => setPontosAtivos(prev => prev.includes(p) ? prev.filter(x=>x!==p) : [...prev,p]);

  const psicosoma = [
    { emocao:"Raiva / frustração reprimida", orgao:"Fígado", manifestacao:"Vermelhidão ocular, secreção amarelada, visão turva por tensão" },
    { emocao:"Medo / ansiedade crônica", orgao:"Rim", manifestacao:"Olho seco, visão enfraquecida, pupilas dilatadas" },
    { emocao:"Preocupação / ruminação", orgao:"Baço", manifestacao:"Pesadez palpebral, cansaço visual, dificuldade de foco" },
    { emocao:"Tristeza / luto não elaborado", orgao:"Pulmão", manifestacao:"Epífora, olhos tristes, ptose discreta" },
    { emocao:"\"Não querer ver\"", orgao:"Psíquico", manifestacao:"Visão turva funcional, fotofobia sem causa orgânica" },
  ];

  return (
    <div>
      <div style={S.card}>
        <div style={S.cardTitle}>Meridianos e pontos oftalmológicos</div>
        <div style={S.cardSub}>Clique nos pontos para marcar o protocolo da sessão</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:10 }}>
          {MTC_DATA.map(m => (
            <div key={m.meridian} style={{ background:C.bege, borderRadius:8, padding:"10px 12px" }}>
              <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:6 }}>
                <div style={{ width:10, height:10, borderRadius:2, background:m.cor }}/>
                <div style={{ fontSize:12.5, fontWeight:600, color:C.navy }}>{m.meridian}</div>
                <span style={{ fontSize:10, color:C.textMuted, marginLeft:"auto" }}>{m.elemento}</span>
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                {m.pontos.map(p => (
                  <span key={p} onClick={() => toggle(p)}
                    style={{...S.tag(pontosAtivos.includes(p) ? m.cor : C.begeDeep,
                                    pontosAtivos.includes(p) ? C.white : C.textMuted), cursor:"pointer" }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {pontosAtivos.length > 0 && (
          <div style={{ marginTop:12, padding:"10px 14px", background:C.navyAlpha, borderRadius:7 }}>
            <div style={{ fontSize:11, color:C.navy, fontWeight:600 }}>Pontos selecionados para sessão:</div>
            <div style={{ marginTop:5 }}>
              {pontosAtivos.map(p => <span key={p} style={S.tag(C.navy,C.white)}>{p}</span>)}
            </div>
          </div>
        )}
      </div>

      <div style={S.card}>
        <div style={S.cardTitle}>Correlações psicossomáticas</div>
        <div style={S.cardSub}>"O Fígado abre-se nos olhos" — Nei Jing Su Wen</div>
        {psicosoma.map((p,i) => (
          <div key={i} style={{ display:"flex", gap:12, padding:"10px 0", borderBottom: i<psicosoma.length-1 ? `1px solid ${C.border}` : "none" }}>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:12.5, fontWeight:600, color:C.navy }}>{p.emocao}</div>
              <div style={{ fontSize:11, color:C.textMuted, marginTop:2 }}>{p.orgao}</div>
            </div>
            <div style={{ flex:2, fontSize:12, color:C.text }}>{p.manifestacao}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PAINEL: Fitoterapia ──────────────────────────────────────────────────────
function PainelFito() {
  const [ativas, setAtivas] = useState(["Euphrasia officinalis","Bilberry (Vaccinium myrtillus)"]);
  const toggle = (nome) => setAtivas(prev => prev.includes(nome) ? prev.filter(x=>x!==nome) : [...prev,nome]);

  const contraindicacoes = [
    "Associar Ginkgo com anticoagulantes — risco hemorrágico",
    "Euphrasia interna em doses altas — hepatotóxica",
    "Jue Ming Zi em longo prazo sem supervisão — diarreia, hipotensão",
  ];

  return (
    <div>
      <div style={S.card}>
        <div style={S.cardTitle}>Protocolo fitoterápico — DGM / Olho Seco</div>
        <div style={S.cardSub}>Clique para ativar/desativar no protocolo da sessão</div>
        {ERVAS.map(e => (
          <div key={e.nome} onClick={() => toggle(e.nome)}
            style={{ display:"flex", gap:12, padding:"10px 12px", borderRadius:7, cursor:"pointer", marginBottom:6,
              background: ativas.includes(e.nome) ? C.bege : C.white,
              border:`1px solid ${ativas.includes(e.nome) ? C.border : C.border}`,
              opacity: ativas.includes(e.nome) ? 1 : 0.55 }}>
            <div style={{ width:10, height:10, borderRadius:"50%", background:e.cor, marginTop:3, flexShrink:0 }}/>
            <div style={{ flex:1 }}>
              <div style={{ fontSize:13, fontWeight:600, color:C.navy, fontStyle:"italic" }}>{e.nome}</div>
              <div style={{ fontSize:11, color:C.textMuted, marginTop:1 }}>{e.acao}</div>
              <div style={{ fontSize:11.5, color:C.text, marginTop:3 }}>{e.modo}</div>
            </div>
            <div style={{ fontSize:18, color: ativas.includes(e.nome) ? C.success : C.textLight }}>
              {ativas.includes(e.nome) ? "✓" : "○"}
            </div>
          </div>
        ))}
      </div>

      <div style={S.card}>
        <div style={S.cardTitle}>Atenções e contraindicações</div>
        {contraindicacoes.map((c,i) => (
          <div key={i} style={{ display:"flex", gap:8, padding:"8px 10px", background:C.warnBg, borderRadius:6, marginBottom:6 }}>
            <span style={{ color:C.warn, fontWeight:700, fontSize:14 }}>⚠</span>
            <span style={{ fontSize:12, color:C.warn }}>{c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PAINEL: Protocolos ───────────────────────────────────────────────────────
function PainelProtocolos() {
  const [abas, setAbas] = useState("meibomio");
  const [concluidos, setConcluidos] = useState({});

  const protocolo = abas === "meibomio" ? PROTOCOLO_MEIBOMIO : PROTOCOLO_ACUPUNTURA;
  const toggle = (i) => setConcluidos(prev => ({ ...prev, [abas+i]: !prev[abas+i] }));
  const total = protocolo.length;
  const feitos = protocolo.filter((_,i) => concluidos[abas+i]).length;

  return (
    <div>
      <div style={S.card}>
        <div style={{ display:"flex", gap:6, marginBottom:14 }}>
          {[["meibomio","Expressão Meibômio"],["acupuntura","Acupuntura"]].map(([k,l]) => (
            <button key={k} style={{ ...S.btn(abas===k), borderRadius:6 }} onClick={() => setAbas(k)}>{l}</button>
          ))}
        </div>

        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
          <div style={S.cardTitle}>{abas==="meibomio" ? "Protocolo de Expressão das Glândulas" : "Protocolo de Acupuntura Oftalmológica"}</div>
          <span style={S.badge(feitos===total ? C.successBg : C.warnBg, feitos===total ? C.success : C.warn)}>
            {feitos}/{total} passos
          </span>
        </div>

        {/* progress bar */}
        <div style={{ height:4, background:C.begeDeep, borderRadius:4, marginBottom:16, overflow:"hidden" }}>
          <div style={{ height:"100%", width:`${(feitos/total)*100}%`, background:C.navy, borderRadius:4, transition:"width 0.3s" }}/>
        </div>

        {protocolo.map((p,i) => (
          <div key={i} onClick={() => toggle(i)}
            style={{ display:"flex", gap:12, alignItems:"flex-start", padding:"11px 12px",
              borderRadius:7, cursor:"pointer", marginBottom:6,
              background: concluidos[abas+i] ? C.successBg : C.bege,
              border:`1px solid ${concluidos[abas+i] ? "#86EFAC" : C.border}` }}>
            <div style={{ ...S.stepNum, background: concluidos[abas+i] ? C.success : C.navy }}>
              {concluidos[abas+i] ? "✓" : i+1}
            </div>
            <div>
              <div style={{ fontSize:13, fontWeight:600, color: concluidos[abas+i] ? C.success : C.navy }}>{p.passo}</div>
              <div style={{ fontSize:11.5, color:C.textMuted, marginTop:3 }}>{p.detalhe}</div>
            </div>
          </div>
        ))}

        {feitos === total && (
          <div style={{ marginTop:10, padding:"10px 14px", background:C.successBg, borderRadius:7, textAlign:"center" }}>
            <div style={{ fontSize:13, fontWeight:600, color:C.success }}>Protocolo concluído ✓</div>
            <div style={{ fontSize:11, color:C.success, marginTop:2 }}>Registre as observações na linha do tempo</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── PAINEL: Diagnósticos ─────────────────────────────────────────────────────
function PainelDiagnosticos() {
  const [diag, setDiag] = useState("DGM / Meibomite");
  const [notas, setNotas] = useState("");

  const info = {
    "DGM / Meibomite": {
      descricao:"Disfunção das Glândulas de Meibômio — obstrução da secreção lipídica da lágrima. Causa evaporação acelerada e olho seco.",
      causas:["Blefarite crônica","Desequilíbrio hormonal","Dieta pró-inflamatória","Yin Hepático deficiente (MTC)"],
      mtc:"Deficiência Yin Hepático — falta de umidade nos tecidos oculares",
      gravidade:"moderada",
    },
    "Glaucoma": {
      descricao:"Neuropatia óptica progressiva com aumento da PIO. Lesão irreversível do nervo óptico.",
      causas:["PIO elevada","Circulação deficiente","Estresse oxidativo","MTC: estagnação Qi Hepático"],
      mtc:"Estagnação do Qi do Fígado — compressão e bloqueio energético",
      gravidade:"alta",
    },
    "Olho Seco (KCS)": {
      descricao:"Ceratoconjuntivite seca — produção insuficiente ou qualidade alterada da lágrima.",
      causas:["DGM secundário","Síndrome de Sjögren","Ar condicionado / telas","Deficiência Yin Rim/Fígado"],
      mtc:"Deficiência Yin de Rim e Fígado — ausência de fluidos nutritivos",
      gravidade:"leve",
    },
    "Catarata": {
      descricao:"Opacificação progressiva do cristalino. Visão turva, halos e fotofobia.",
      causas:["Envelhecimento","UV","Diabetes","MTC: deficiência Yang/Qi do Baço"],
      mtc:"Déficit do Qi do Baço — não transforma e nutre o cristalino",
      gravidade:"moderada",
    },
  };

  const gravCor = { leve:[C.successBg,C.success], moderada:[C.warnBg,C.warn], alta:[C.dangerBg,C.danger] };
  const d = info[diag] || info["DGM / Meibomite"];

  return (
    <div>
      <div style={S.card}>
        <div style={S.cardTitle}>Diagnóstico integrativo</div>
        <div style={S.cardSub}>Selecione a condição para ver correlações completas</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:6, marginBottom:16 }}>
          {DIAGNOSTICOS.map(d => (
            <button key={d} onClick={() => setDiag(d)}
              style={{ ...S.btn(diag===d), padding:"5px 12px", fontSize:11.5 }}>{d}</button>
          ))}
        </div>

        <div style={{ background:C.bege, borderRadius:8, padding:"14px 16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:10 }}>
            <div style={{ fontFamily:"Georgia,serif", fontSize:15, fontWeight:700, color:C.navy }}>{diag}</div>
            <span style={S.badge(...gravCor[d.gravidade])}>Gravidade {d.gravidade}</span>
          </div>
          <p style={{ fontSize:12.5, color:C.text, lineHeight:1.6, marginBottom:12 }}>{d.descricao}</p>

          <div style={S.grid2}>
            <div>
              <div style={{ fontSize:11, fontWeight:600, color:C.navy, marginBottom:6 }}>Causas / fatores</div>
              {d.causas.map((c,i) => (
                <div key={i} style={{ display:"flex", gap:6, marginBottom:4 }}>
                  <span style={{ color:C.navy, fontSize:10, marginTop:2 }}>▸</span>
                  <span style={{ fontSize:12, color:C.text }}>{c}</span>
                </div>
              ))}
            </div>
            <div style={{ background:C.white, borderRadius:7, padding:"10px 12px" }}>
              <div style={{ fontSize:11, fontWeight:600, color:C.navy, marginBottom:5 }}>Visão MTC</div>
              <div style={{ fontSize:12, color:C.text, fontStyle:"italic", lineHeight:1.6 }}>{d.mtc}</div>
            </div>
          </div>
        </div>
      </div>

      <div style={S.card}>
        <div style={S.cardTitle}>Notas clínicas da sessão</div>
        <textarea style={{ ...S.input, height:100, resize:"vertical" }}
          placeholder="Observações, evolução, intercorrências..."
          value={notas} onChange={e=>setNotas(e.target.value)}
        />
      </div>
    </div>
  );
}

// ── PAINEL: Fotos ────────────────────────────────────────────────────────────
function PainelFotos() {
  const [fotos, setFotos] = useState({});
  const inputRef = useRef();
  const [slotAtivo, setSlotAtivo] = useState(null);

  const slots = [
    "OD pré-expressão","OD pós-expressão",
    "OE pré-expressão","OE pós-expressão",
    "Córnea OD","Córnea OE",
    "Conjuntiva OD","Conjuntiva OE",
    "Biomicroscopia","Fundo de olho",
  ];

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file || !slotAtivo) return;
    const url = URL.createObjectURL(file);
    setFotos(prev => ({ ...prev, [slotAtivo]: url }));
    setSlotAtivo(null);
  }

  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" style={{ display:"none" }} onChange={handleFile}/>
      <div style={S.card}>
        <div style={S.cardTitle}>Registro fotográfico</div>
        <div style={S.cardSub}>Clique no slot para adicionar imagem da sessão</div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:8 }}>
          {slots.map(slot => (
            <div key={slot}
              onClick={() => { setSlotAtivo(slot); inputRef.current.click(); }}
              style={{ aspectRatio:"1", borderRadius:8, overflow:"hidden", cursor:"pointer",
                background: fotos[slot] ? "transparent" : C.bege,
                border:`1px dashed ${fotos[slot] ? "transparent" : C.textLight}`,
                display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
              {fotos[slot] ? (
                <img src={fotos[slot]} alt={slot}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
              ) : (
                <>
                  <div style={{ fontSize:22, color:C.textLight }}>+</div>
                  <div style={{ fontSize:9.5, color:C.textMuted, textAlign:"center", padding:"0 4px", marginTop:2 }}>{slot}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── App Principal ────────────────────────────────────────────────────────────
export default function App() {
  const [painel, setPainel] = useState("dashboard");
  const [sintomas, setSintomas] = useState(["Sensação de areia","Fotofobia","Secreção matinal"]);
  const [glandulas, setGlandulas] = useState(INITIAL_MEIBOMIO);
  const [metricas] = useState(INITIAL_METRICAS);
  const [timeline] = useState(TIMELINE_INICIAL);

  const nav = [
    { id:"dashboard", label:"Painel clínico", icon:"📊", secao:"Clínica" },
    { id:"diagnostico", label:"Diagnóstico", icon:"🔍", secao:"Clínica" },
    { id:"fotos", label:"Fotos", icon:"📷", secao:"Clínica" },
    { id:"mtc", label:"MTC / Acupuntura", icon:"☯", secao:"Terapias" },
    { id:"fitoterapia", label:"Fitoterapia", icon:"🌿", secao:"Terapias" },
    { id:"protocolos", label:"Protocolos", icon:"📋", secao:"Protocolos" },
  ];

  const secoes = [...new Set(nav.map(n => n.secao))];

  const painelLabels = {
    dashboard: "Painel Clínico",
    diagnostico: "Diagnóstico Integrativo",
    fotos: "Registro Fotográfico",
    mtc: "MTC / Acupuntura",
    fitoterapia: "Fitoterapia Ocular",
    protocolos: "Protocolos Terapêuticos",
  };

  return (
    <div style={S.app}>
      {/* Sidebar */}
      <div style={S.sidebar}>
        {/* Logo */}
        <div style={{ padding:"18px 16px 14px", borderBottom:"1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ width:34, height:34, background:"rgba(255,255,255,0.1)", borderRadius:8,
            display:"flex", alignItems:"center", justifyContent:"center", marginBottom:8, fontSize:18 }}>
            👁
          </div>
          <div style={{ fontFamily:"Georgia,serif", fontSize:14, fontWeight:700, color:"#fff", lineHeight:1.3 }}>
            Oftalmologia<br/>Integrativa
          </div>
          <div style={{ fontSize:10, color:"rgba(255,255,255,0.38)", marginTop:3, letterSpacing:"0.5px", textTransform:"uppercase" }}>
            Montgomery Saúde
          </div>
        </div>

        {/* Nav */}
        <div style={{ flex:1, padding:"8px 10px" }}>
          {secoes.map(secao => (
            <div key={secao}>
              <div style={S.navLabel}>{secao}</div>
              {nav.filter(n=>n.secao===secao).map(n => (
                <div key={n.id} style={S.navItem(painel===n.id)} onClick={() => setPainel(n.id)}>
                  <span style={{ fontSize:13 }}>{n.icon}</span>
                  <span style={{ fontSize:12.5, color: painel===n.id ? "#fff" : "rgba(255,255,255,0.6)", fontWeight: painel===n.id ? 500 : 400 }}>
                    {n.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Paciente */}
        <div style={{ padding:12, borderTop:"1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ background:"rgba(255,255,255,0.07)", borderRadius:8, padding:"10px 12px" }}>
            <div style={{ fontSize:9.5, color:"rgba(255,255,255,0.35)", textTransform:"uppercase", letterSpacing:"0.7px" }}>Paciente ativo</div>
            <div style={{ fontSize:13, color:"#fff", fontWeight:600, marginTop:3 }}>{INITIAL_PATIENT.nome}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.45)", marginTop:2 }}>
              DGM · {INITIAL_PATIENT.anosEvolution} anos · caso ref.
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div style={S.main}>
        {/* Topbar */}
        <div style={S.topbar}>
          <div style={{ fontFamily:"Georgia,serif", fontSize:15, fontWeight:600, color:C.navy }}>
            {painelLabels[painel]}
          </div>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <span style={S.badge(C.warnBg, C.warn)}>Reavaliação em 7 dias</span>
            <span style={{ fontSize:12, color:C.textMuted }}>
              {new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"short",year:"numeric"})}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div style={S.content}>
          {painel === "dashboard" && (
            <PainelDashboard
              paciente={INITIAL_PATIENT} metricas={metricas}
              sintomas={sintomas} setSintomas={setSintomas}
              timeline={timeline} glandulas={glandulas} setGlandulas={setGlandulas}
            />
          )}
          {painel === "diagnostico" && <PainelDiagnosticos />}
          {painel === "fotos" && <PainelFotos />}
          {painel === "mtc" && <PainelMTC />}
          {painel === "fitoterapia" && <PainelFito />}
          {painel === "protocolos" && <PainelProtocolos />}
        </div>
      </div>
    </div>
  );
}
