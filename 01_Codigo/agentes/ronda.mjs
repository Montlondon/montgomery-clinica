// ============================================================
//  RONDA — o primeiro agente do Montgomery
// ------------------------------------------------------------
//  O que ele faz: le o ROADMAP.md e conta o que ainda esta em pe.
//  Como rodar:    node ronda.mjs
// ============================================================

// 1) A PECA. "query" e o motor do agente: recebe um pedido,
//    devolve um fluxo de mensagens enquanto ele trabalha.
import { query } from "@anthropic-ai/claude-agent-sdk";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 2) ONDE ELE PISA. A raiz do repo (duas pastas acima daqui).
//    O agente so enxerga daqui pra baixo.
const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..", "..");

// 3) O PEDIDO. Uma tarefa so, bem estreita — agente barato.
//    ATENCAO — a licao mais cara desta pasta:
//    o ROADMAP tinha 207 KB. Mandar "leia o ROADMAP" fez o agente abrir
//    o arquivo inteiro, em quatro pedacos, e custou US$ 0,17 numa corrida so.
//    Desde 01/08/2026 (senha "Emagrecer o diario") o arquivo vivo tem 67 KB
//    e o pendente mora nas 20 primeiras linhas, na secao "O que esta pendente
//    agora". Mesmo assim seguimos pedindo SO o comeco: e o habito que barateia.
const PEDIDO = `
Leia APENAS as primeiras 60 linhas de ROADMAP.md (use Read com limit: 60).
E onde mora a secao "O que esta pendente agora". Nao leia o resto.
Liste em portugues, no maximo 5 itens, o que ainda esta PENDENTE.
Para cada um: uma linha curta, comecando com "-".
Nao abra nenhum outro arquivo. Nao sugira nada. So a lista.
`;

// 4) O LACO. Cada volta do "for await" e um passo do agente:
//    ele pensa, usa uma ferramenta, ve o resultado, pensa de novo.
console.log("\n  Ronda saindo...\n");

for await (const msg of query({
  prompt: PEDIDO,
  options: {
    cwd: RAIZ,

    // AS MAOS DELE. So estas tres — e todas de leitura.
    // Ele nao pode escrever, apagar nem rodar comando.
    allowedTools: ["Read", "Grep", "Glob"],

    // Como as maos sao inofensivas, nao precisa pedir licenca a cada passo.
    permissionMode: "bypassPermissions",

    // QUEM ELE E. Isto entra na cabeca dele antes do pedido.
    systemPrompt:
      "Voce e o Ronda, vigia do repositorio do Montgomery. " +
      "Responda sempre em portugues, curto e direto. Nunca use emoji.",

    // Modelo pequeno: tarefa simples nao merece o motor grande.
    model: "claude-haiku-4-5-20251001",

    // TRAVA DE SEGURANCA. No maximo 8 voltas no laco.
    // Sem isto, um agente confuso pode girar e queimar tokens.
    maxTurns: 8,
  },
})) {
  // 5) O QUE SAI. O fluxo traz varios tipos de mensagem.
  //    Aqui a gente escolhe o que mostrar.

  if (msg.type === "assistant") {
    for (const bloco of msg.message.content) {
      if (bloco.type === "text" && bloco.text.trim()) {
        console.log(bloco.text);
      }
      if (bloco.type === "tool_use") {
        console.log(`  [maos] usou ${bloco.name}`);
      }
    }
  }

  // 6) A CONTA. A ultima mensagem traz o gasto real da ronda.
  if (msg.type === "result") {
    const t = msg.usage ?? {};
    console.log("\n  ---");
    console.log(`  voltas no laco : ${msg.num_turns}`);
    console.log(`  tokens lidos   : ${t.input_tokens ?? "?"}`);
    console.log(`  tokens escritos: ${t.output_tokens ?? "?"}`);
    console.log(`  custo estimado : US$ ${(msg.total_cost_usd ?? 0).toFixed(4)}`);
    console.log("  ---\n");
  }
}
