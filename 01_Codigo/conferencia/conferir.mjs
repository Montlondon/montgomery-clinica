// ============================================================
//  A REDE EMBAIXO DO TRAPEZIO — a conferencia automatica da Clinica
// ------------------------------------------------------------
//  O que ela faz: abre o index.html e confere que as portas
//  principais ainda respondem. Nao muda nada. So olha e conta.
//
//  Como rodar (na raiz do repo):   node 01_Codigo/conferencia/conferir.mjs
//
//  Ela nao precisa de internet, nem de login, nem de navegador,
//  nem de chave de API. Nao gasta um centavo. Roda em 1 segundo.
// ============================================================

import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..", "..");
const PORTA = path.join(RAIZ, "index.html");

// ------------------------------------------------------------
// O caderninho: cada conferencia anota aqui se passou ou nao.
// ------------------------------------------------------------
const provas = [];
function prova(nome, ok, detalhe) {
  provas.push({ nome, ok, detalhe: detalhe || "" });
}

const html = fs.readFileSync(PORTA, "utf8");

// ------------------------------------------------------------
// 1) A PORTA ABRE? — o peso e a versao.
//    Se o arquivo sumiu ou engordou de repente, e aqui que aparece.
// ------------------------------------------------------------
const pesoPorta = Buffer.byteLength(html) / 1024;
prova(
  "A porta existe e tem tamanho de gente",
  pesoPorta > 200 && pesoPorta < 1500,
  `${pesoPorta.toFixed(0)} KB`
);

const mVer = html.match(/const APP_VER\s*=\s*'([^']+)'/);
prova("A versao esta no lugar", !!mVer, mVer ? mVer[1] : "APP_VER nao encontrada");

// ------------------------------------------------------------
// 2) A ELETRICIDADE LIGA? — a prova mais importante de todas.
//    Um erro de digitacao no JavaScript apaga a Clinica inteira:
//    a tela abre em branco e nada funciona. O navegador so descobre
//    isso na hora. Aqui a gente descobre antes, sem navegador:
//    o `vm.Script` le o codigo do mesmo jeito que o navegador leria,
//    mas NAO EXECUTA nada. So confere se a frase faz sentido.
// ------------------------------------------------------------
const inline = [...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)];
let erroSintaxe = null;
for (const [, corpo] of inline) {
  if (!corpo.trim()) continue;
  try {
    new vm.Script(corpo);
  } catch (e) {
    erroSintaxe = e.message;
    break;
  }
}
prova(
  `A eletricidade liga (${inline.length} blocos de codigo)`,
  !erroSintaxe,
  erroSintaxe || "nenhum erro de escrita"
);

// ------------------------------------------------------------
// 2b) A PINTURA FECHA? — a prova que faltava, aprendida doendo.
//    Em 04/08/2026 uma regra de CSS ficou sem a chave que fecha.
//    O navegador nao reclama: ele engole TUDO o que vem depois
//    como se fosse parte da regra aberta. A pagina abriu com os
//    icones do tamanho de uma porta e os links roxos, e esta rede
//    disse "pode subir" — porque o JavaScript estava perfeito.
//    Aqui se conta chave por chave: cada { tem que achar o seu }.
// ------------------------------------------------------------
const estilos = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
let culpada = null;
let fundo = 0;
for (const [, folha] of estilos) {
  let prof = 0;
  let abriu = 0;
  folha.split("\n").forEach((linha, n) => {
    const limpa = linha.replace(/\/\*.*?\*\//g, "");
    const antes = prof;
    prof += (limpa.match(/{/g) || []).length - (limpa.match(/}/g) || []).length;
    if (antes === 0 && prof > 0) abriu = n + 1;
    // uma regra aberta seguida de outro seletor: alguem esqueceu o }
    if (!culpada && prof > 0 && antes > 0 && /^[.#a-zA-Z[]/.test(linha))
      culpada = `regra aberta na linha ${abriu} da folha de estilo engole a de baixo`;
  });
  fundo += prof;
}
prova(
  `A pintura fecha (${estilos.length} folha${estilos.length > 1 ? "s" : ""} de estilo)`,
  !culpada && fundo === 0,
  culpada || (fundo === 0 ? "toda chave achou o seu par" : `sobraram ${fundo} chaves abertas`)
);

// ------------------------------------------------------------
// 3) OS ARQUIVOS QUE A PORTA CHAMA EXISTEM MESMO?
//    Um <script src="..."> apontando para arquivo que nao existe
//    e uma tela que quebra so quando alguem chega naquela parte.
// ------------------------------------------------------------
const srcs = [...html.matchAll(/<script[^>]*\bsrc=["']([^"']+)["']/g)]
  .map((m) => m[1])
  .filter((s) => !/^https?:|^\/\//.test(s));
const faltando = srcs.filter((s) => !fs.existsSync(path.join(RAIZ, s)));
prova(
  `Os arquivos que a porta chama (${srcs.length})`,
  faltando.length === 0,
  faltando.length ? "sumiram: " + faltando.join(", ") : srcs.join(", ")
);

// ------------------------------------------------------------
// 4) AS QUATRO GAVETAS ABREM?
//    Desde a v9.4 estas tabelas so descem quando alguem puxa.
//    Cada gaveta tem uma palavra-sentinela: se o arquivo veio mas a
//    palavra nao esta la dentro, a gaveta abre vazia — e a tela some
//    sem dizer por que. Esta conferencia le a lista direto do
//    index.html, entao ela nao envelhece quando uma gaveta nova nascer.
// ------------------------------------------------------------
const blocoGavetas = html.match(/const _GAVETAS\s*=\s*\{([\s\S]*?)\n\};/);
const gavetas = blocoGavetas
  ? [...blocoGavetas[1].matchAll(/arq:\s*'([^']+)'[\s\S]*?typeof\s+([A-Za-z_$][\w$]*)/g)].map(
      (m) => ({ arq: m[1], sentinela: m[2] })
    )
  : [];
prova("A lista das gavetas foi encontrada", gavetas.length === 4, `${gavetas.length} gavetas`);

for (const g of gavetas) {
  const alvo = path.join(RAIZ, g.arq);
  if (!fs.existsSync(alvo)) {
    prova(`Gaveta ${g.arq}`, false, "o arquivo nao existe");
    continue;
  }
  const dentro = fs.readFileSync(alvo, "utf8");
  const declara = new RegExp(`(const|let|var)\\s+${g.sentinela}\\b`).test(dentro);
  const peso = (fs.statSync(alvo).size / 1024).toFixed(0);
  prova(`Gaveta ${g.arq}`, declara, declara ? `${g.sentinela}, ${peso} KB` : `sem ${g.sentinela}`);
}

// ------------------------------------------------------------
// 5) AS ABAS DO PACIENTE TEM PARA ONDE IR?
//    Cada botao chama showTab('tX'). Se o painel 'tX' nao existe
//    mais no desenho, o clique da erro e a aba fica muda.
// ------------------------------------------------------------
const abas = [...new Set([...html.matchAll(/showTab\('([a-zA-Z0-9_-]+)'/g)].map((m) => m[1]))];
const abasOrfas = abas.filter((id) => !new RegExp(`id=["']${id}["']`).test(html));
prova(
  `As abas do paciente (${abas.length})`,
  abasOrfas.length === 0,
  abasOrfas.length ? "sem painel: " + abasOrfas.join(", ") : abas.join(" ")
);

// ------------------------------------------------------------
// 6) OS BOTOES CHAMAM GENTE QUE EXISTE?
//    Cada onclick="fulano()" precisa de um `function fulano` no
//    codigo. Esta e a rede da semana de organizacao: quando se
//    renomeia ou se muda uma funcao de lugar, e este numero que
//    acende antes do paciente descobrir.
// ------------------------------------------------------------
// Linha que comeca com comentario nao conta: o codigo esta cheio de explicacoes
// que citam onclick="funcao('...')" como exemplo. Exemplo nao e botao.
// Conferir linha a linha (em vez de apagar os comentarios do arquivo inteiro)
// evita que um `/*` perdido dentro de um texto engula meio predio em silencio.
const chamados = new Set();
for (const linha of html.split("\n")) {
  if (/^\s*(\/\/|\/\*|\*|<!--)/.test(linha)) continue;
  for (const m of linha.matchAll(/\bon(?:click|change|input|submit|keyup|keydown)=["']([^"']+)["']/g)) {
    for (const c of m[1].matchAll(/(?:^|[^\w.$])([A-Za-z_$][\w$]*)\s*\(/g)) chamados.add(c[1]);
  }
}
// Palavras que o proprio navegador entende — nao sao funcoes nossas.
const DO_NAVEGADOR = new Set([
  "alert", "confirm", "prompt", "setTimeout", "setInterval", "parseInt", "parseFloat",
  "String", "Number", "Boolean", "Array", "Object", "Date", "JSON", "Math", "if",
  "for", "while", "return", "typeof", "switch", "catch", "function", "encodeURIComponent",
  "decodeURIComponent", "open", "print", "focus", "blur",
]);
const codigo = inline.map((m) => m[1]).join("\n");
function existe(nome) {
  return new RegExp(
    `(function\\s+${nome}\\s*\\(|(?:const|let|var)\\s+${nome}\\s*=|window\\.${nome}\\s*=)`
  ).test(codigo);
}
const orfaos = [...chamados].filter((n) => !DO_NAVEGADOR.has(n) && !existe(n));
prova(
  `Os botoes chamam gente que existe (${chamados.size} nomes)`,
  orfaos.length === 0,
  orfaos.length ? "sem dono: " + orfaos.join(", ") : "todos com dono"
);

// ------------------------------------------------------------
// O RELATORIO
// ------------------------------------------------------------
const falhas = provas.filter((p) => !p.ok);
console.log("\n  A rede embaixo do trapezio — conferencia da Clinica\n");
for (const p of provas) {
  console.log(`  ${p.ok ? "[ ok ]" : "[FALHA]"}  ${p.nome}${p.detalhe ? "  —  " + p.detalhe : ""}`);
}
console.log(
  falhas.length === 0
    ? `\n  ${provas.length} portas conferidas. Nenhuma quebrou. Pode subir.\n`
    : `\n  ${falhas.length} de ${provas.length} portas com problema. NAO subir antes de olhar.\n`
);

// O codigo de saida serve para o computador: 0 quer dizer "tudo bem".
process.exit(falhas.length ? 1 : 0);
