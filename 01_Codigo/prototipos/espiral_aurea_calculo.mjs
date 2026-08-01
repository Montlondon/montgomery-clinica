// A espiral aurea exata: r = a*PHI^(2*theta/PI). A curva nao tem um traço no olho.
// Os encontros ficam sobre ela em passo IGUAL DE ARCO - assim cabem 3 ou 30 sessoes
// sem amontoar no centro, e a proporcao da curva continua intacta.
const PHI=(1+Math.sqrt(5))/2, k=2*Math.log(PHI)/Math.PI;
const r=t=>Math.exp(k*t);
const arco=t=>r(t)*Math.sqrt(1+k*k)/k;          // comprimento do centro ate theta
const arcoInv=S=>Math.log(S*k/Math.sqrt(1+k*k))/k;
const pt=t=>[r(t)*Math.cos(t), r(t)*Math.sin(t)];

const VOLTAS=2.6, t0=-Math.PI*2*VOLTAS, t1=0;
const pts=[];for(let i=0;i<=400;i++){const t=t0+(t1-t0)*i/400;pts.push([t,...pt(t)]);}

function desenhar(nSessoes,W,H){
  const xs=pts.map(p=>p[1]),ys=pts.map(p=>p[2]);
  const pad=22,minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys);
  const s=Math.min((W-2*pad)/(maxX-minX),(H-2*pad)/(maxY-minY));
  const ox=pad-minX*s+((W-2*pad)-(maxX-minX)*s)/2, oy=pad-minY*s+((H-2*pad)-(maxY-minY)*s)/2;
  const P=(x,y)=>[+(ox+x*s).toFixed(1), +(H-(oy+y*s)).toFixed(1)];
  const d='M '+pts.map(p=>P(p[1],p[2]).join(' ')).join(' L ');
  const S0=arco(t0),S1=arco(t1);
  const marcos=[];
  for(let i=0;i<nSessoes;i++){
    const S=S0+(S1-S0)*(nSessoes===1?0:i/(nSessoes-1));
    const t=arcoInv(S),[x,y]=pt(t);const[px,py]=P(x,y);
    marcos.push({n:i+1,x:px,y:py});
  }
  return{d,marcos};
}
const oito=desenhar(8,330,215);
console.log(JSON.stringify(oito));
