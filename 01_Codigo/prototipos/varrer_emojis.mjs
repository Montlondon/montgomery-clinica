import {readFileSync} from 'fs';
const re=/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}\u{1F1E6}-\u{1F1FF}\u{2190}-\u{21FF}\u{2900}-\u{297F}]/gu;
for(const f of process.argv.slice(2)){
  let txt;try{txt=readFileSync(f,'utf8')}catch{continue}
  const linhas=txt.split(/\r?\n/);const achados=new Map();let total=0;
  linhas.forEach((l,i)=>{const m=l.match(re);if(m){total+=m.length;
    m.forEach(e=>{if(!achados.has(e))achados.set(e,[]);achados.get(e).push(i+1);});}});
  console.log(`\n=== ${f} — ${total} ocorrencias, ${achados.size} simbolos distintos ===`);
  [...achados.entries()].sort((a,b)=>b[1].length-a[1].length).forEach(([e,ls])=>
    console.log(`  ${e}  x${ls.length}  linhas: ${ls.slice(0,8).join(', ')}${ls.length>8?' ...':''}`));
}
