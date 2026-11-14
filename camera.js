'use strict';

// ═══════════════════════════════
//  INJECT CSS & FONTS FROM JS (obfuscation-friendly)
// ═══════════════════════════════
(function(){
  // Google Fonts
  var lf=document.createElement('link');
  lf.rel='stylesheet';
  lf.href='https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Bebas+Neue&family=Oswald:wght@300;400;600&display=swap';
  document.head.appendChild(lf);

  // Donate / contact links injected here — not in HTML
  document.addEventListener('DOMContentLoaded',function(){
    var don=document.getElementById('ml-donate');
    if(don){don.href='https://yoomoney.ru/to/4100119526043751';}
    var con=document.getElementById('ml-contact');
    if(con){con.href='mailto:sumance@yandex.ru';}
    var prv=document.getElementById('ml-privacy');
    if(prv){prv.href='https://sites.google.com/view/retrocamv8/';}
  });
})();

// ═══════════════════════════════
//  FILTER DEFINITIONS
// ═══════════════════════════════
const DEFS = {
  f1960:{
    label:'1960',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:5  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:10 },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:-25},
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:45 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:55 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:100 },
      {key:'pink',       label:'РОЗОВЫЙ ТОН',  min:0,   max:100,def:30 },
    ]
  },
  f1970:{
    label:'1970',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:0  },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:-15},
      {key:'warmth',     label:'ТЕПЛОТА',      min:0,   max:100,def:38 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:55 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:55 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:22 },
    ]
  },
  f1980:{
    label:'1980',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:15 },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:10 },
      {key:'green',      label:'ЗЕЛЕНЬ FUJI',  min:0,   max:100,def:40 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:50 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:45 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:18 },
    ]
  },
  f1990:{
    label:'1990',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:25 },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:10 },
      {key:'violet',     label:'СИНЕ-ФИОЛЕТ',  min:0,   max:100,def:30 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:55 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:40 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:15 },
    ]
  },
  lomo:{
    label:'LOMO',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:-5 },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:60 },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:30 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:88 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:45 },
      {key:'leak',       label:'УТЕЧКА СВЕТА', min:0,   max:100,def:55 },
      {key:'leakHue',    label:'ТОН УТЕЧКИ',   min:0,   max:360,def:25 },
    ]
  },
  f2000:{
    label:"2000'",
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:20 },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:-20},
      {key:'coffee',     label:'КОФЕ',         min:0,   max:100,def:55 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:45 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:50 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:18 },
    ]
  },
  bw:{
    label:'B/W',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:20 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:50 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:50 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:8  },
    ]
  },
  px03:{
    label:'0.3МП',
    sliders:[
      {key:'brightness',  label:'ЯРКОСТЬ',     min:-100,max:100,def:0  },
      {key:'contrast',    label:'КОНТРАСТ',    min:-100,max:100,def:-10},
      {key:'pixelBlock',  label:'ПИКСЕЛЬ',     min:1,   max:10, def:2  },
      {key:'blur',        label:'РАЗМЫТИЕ',    min:0,   max:10, def:0  },
      {key:'shadowCrush', label:'ТЕНИ',        min:0,   max:100,def:55 },
    ]
  },
  px13:{
    label:'1.3МП',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:5  },
      {key:'saturation', label:'НАСЫЩЕННОСТЬ', min:-100,max:100,def:-5 },
      {key:'pixelBlock', label:'ПИКСЕЛЬ',      min:1,   max:10, def:2  },
      {key:'warmNokia',  label:'NOKIA ТЕПЛО',  min:0,   max:100,def:35 },
      {key:'blur',       label:'РАЗМЫТИЕ',     min:0,   max:10, def:2  },
    ]
  },
  nes:{
    label:'NES',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:10 },
      {key:'blockSize',  label:'ПИКСЕЛЬ',      min:2,   max:16, def:5  },
      {key:'dither',     label:'ДИЗЕРИНГ',     min:0,   max:100,def:40 },
    ]
  },
  sepia:{
    label:'SEPIA',
    sliders:[
      {key:'brightness', label:'ЯРКОСТЬ',      min:-100,max:100,def:0  },
      {key:'contrast',   label:'КОНТРАСТ',     min:-100,max:100,def:10 },
      {key:'warmth',     label:'ТЕПЛОТА',      min:0,   max:100,def:50 },
      {key:'grain',      label:'ЗЕРНО',        min:0,   max:100,def:25 },
      {key:'vignette',   label:'ВИНЬЕТКА',     min:0,   max:100,def:55 },
      {key:'fade',       label:'ВЫГОРАНИЕ',    min:0,   max:100,def:10 },
    ]
  },
  random:{
    label:'RANDOM',
    sliders:[]
  }
};

// Init per-filter state
const FS = {};
for (const [m,d] of Object.entries(DEFS)){
  FS[m]={};
  for (const s of d.sliders) FS[m][s.key]=s.def;
}

// ═══════════════════════════════
//  APP STATE
// ═══════════════════════════════
let mode = 'f1960';
let facingMode = 'environment';
let raf = null;
let lastUrl = null;
let skipFrame = 0;
let currentStream = null;
let currentZoom = 1.0;
let currentLang = localStorage.getItem('rcLang') || 'en';

// ═══════════════════════════════
//  DOM
// ═══════════════════════════════
const video      = document.getElementById('video');
const pvC        = document.getElementById('preview-canvas');
const capC       = document.getElementById('capture-canvas');
const pCtx       = pvC.getContext('2d',{willReadFrequently:true});
const cCtx       = capC.getContext('2d',{willReadFrequently:true});
const modeBadge  = document.getElementById('mode-badge');
const recDot     = document.getElementById('rec-dot');
const fBtns      = document.querySelectorAll('.fb');
const shutter    = document.getElementById('shutter');
const spPanel    = document.getElementById('sp');
const spBody     = document.getElementById('sp-body');
const spClose    = document.getElementById('sp-x');
const spName     = document.getElementById('sp-name');
const settToggle = document.getElementById('settings-toggle');
const flipBtn    = document.getElementById('flip-btn');
const gBtn       = document.getElementById('gallery-btn');
const gThumb     = document.getElementById('gthumb');
const gIcon      = document.getElementById('gicon');
const toastEl    = document.getElementById('toast');
const noCam      = document.getElementById('no-cam');
const randInd    = document.getElementById('random-indicator');

// ═══════════════════════════════
//  HELPERS
// ═══════════════════════════════
const clamp = v => v<0?0:v>255?255:Math.round(v);

function adjBC(r,g,b,br,co){
  r+=br*1.5; g+=br*1.5; b+=br*1.5;
  const f=(259*(co+255))/(255*(259-co));
  r=f*(r-128)+128; g=f*(g-128)+128; b=f*(b-128)+128;
  return [clamp(r),clamp(g),clamp(b)];
}
function adjSat(r,g,b,sat){
  const gray=0.299*r+0.587*g+0.114*b, s=sat/100;
  return [clamp(gray+(r-gray)*(1+s)), clamp(gray+(g-gray)*(1+s)), clamp(gray+(b-gray)*(1+s))];
}
function doFade(r,g,b,amt){
  const f=amt/100*0.22;
  return [clamp(r*(1-f)+255*f), clamp(g*(1-f)+255*f), clamp(b*(1-f)+255*f)];
}
function doVig(r,g,b,px,py,w,h,amt){
  const cx=w/2, cy=h/2;
  const dist=Math.sqrt((px-cx)**2+(py-cy)**2)/Math.sqrt(cx*cx+cy*cy);
  const v=1-dist*dist*(amt/100)*0.95;
  return [clamp(r*v), clamp(g*v), clamp(b*v)];
}
function rand(a,b){return a+Math.random()*(b-a);}
function randInt(a,b){return Math.round(rand(a,b));}

// ═══════════════════════════════
//  FILTER: 1960
// ═══════════════════════════════
function filter_f1960(ctx,w,h,st){
  const id=ctx.getImageData(0,0,w,h);
  const d=id.data;
  const pk=st.pink/100;
  const vi=st.vignette/100;
  const gr=st.grain;
  const cx=w/2, cy=h/2;
  const maxR=Math.sqrt(cx*cx+cy*cy);

  const grainMap=new Float32Array(w*h);
  const grainBS=2;
  for(let gy=0;gy<h;gy+=grainBS)for(let gx=0;gx<w;gx+=grainBS){
    const n=(Math.random()-.5)*gr*1.4;
    for(let dy=0;dy<grainBS&&gy+dy<h;dy++)for(let dx=0;dx<grainBS&&gx+dx<w;dx++)
      grainMap[(gy+dy)*w+(gx+dx)]=n;
  }

  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    const px=(i/4)%w, py=Math.floor((i/4)/w);

    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=adjSat(r,g,b,st.saturation);
    [r,g,b]=doFade(r,g,b,st.fade);

    const lum=(r+g+b)/3;
    if(lum>160){r=clamp(r+pk*18);g=clamp(g+pk*8);b=clamp(b+pk*14);}
    if(lum<80) {r=clamp(r-pk*6); b=clamp(b+pk*10);}

    const dist=Math.sqrt((px-cx)**2+(py-cy)**2)/maxR;
    const bottomBias=Math.max(0,(py/h-0.6)*2.5);
    const edgeDist=Math.max(dist, bottomBias*0.7);
    const vigAmt=vi*edgeDist*edgeDist;
    r=clamp(r*(1-vigAmt)+255*vigAmt);
    g=clamp(g*(1-vigAmt)+240*vigAmt);
    b=clamp(b*(1-vigAmt)+245*vigAmt);

    if(gr>0){const n=grainMap[py*w+px];r=clamp(r+n);g=clamp(g+n*.85);b=clamp(b+n*.7);}

    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
  ctx.putImageData(id,0,0);
}

// ═══════════════════════════════
//  FILTER: 1970
// ═══════════════════════════════
function filter_f1970(d,w,h,st){
  const wm=st.warmth/100;
  const grainMap=new Float32Array(w*h);
  if(st.grain>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*st.grain*1.3;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    r=clamp(r*1.07+wm*14); g=clamp(g*1.04+wm*8); b=clamp(b*0.78-wm*10);
    const lum=(r+g+b)/3;
    if(lum<90) {r=clamp(r+8);g=clamp(g+6);b=clamp(b-4);}
    if(lum>215){r=clamp(r+10);g=clamp(g+5);}
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=adjSat(r,g,b,st.saturation);
    [r,g,b]=doFade(r,g,b,st.fade);
    if(st.grain>0){const n=grainMap[Math.floor(i/4)];r=clamp(r+n);g=clamp(g+n*.8);b=clamp(b+n*.6);}
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[r,g,b]=doVig(r,g,b,px,py,w,h,st.vignette);}
    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
}

// ═══════════════════════════════
//  FILTER: 1980
// ═══════════════════════════════
function filter_f1980(d,w,h,st){
  const gn=st.green/100;
  const grainMap=new Float32Array(w*h);
  if(st.grain>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*st.grain*1.2;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    r=clamp(r*0.96-gn*5);
    g=clamp(g*1.06+gn*12);
    b=clamp(b*0.98+gn*4);
    const lum=(r+g+b)/3;
    if(lum<80) {g=clamp(g+gn*10);b=clamp(b+gn*8);}
    if(lum>200){r=clamp(r+gn*5);}
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=adjSat(r,g,b,st.saturation);
    [r,g,b]=doFade(r,g,b,st.fade);
    if(st.grain>0){const n=grainMap[Math.floor(i/4)];r=clamp(r+n);g=clamp(g+n*.9);b=clamp(b+n*.7);}
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[r,g,b]=doVig(r,g,b,px,py,w,h,st.vignette);}
    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
}

// ═══════════════════════════════
//  FILTER: 1990
// ═══════════════════════════════
function filter_f1990(d,w,h,st){
  const vl=st.violet/100;
  const grainMap=new Float32Array(w*h);
  if(st.grain>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*st.grain*1.1;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    r=clamp(r*0.96-vl*9); g=clamp(g*0.97-vl*3); b=clamp(b*1.09+vl*15);
    const lum=(r+g+b)/3;
    if(lum<100){r=clamp(r+vl*9);b=clamp(b+vl*10);}
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=adjSat(r,g,b,st.saturation);
    [r,g,b]=doFade(r,g,b,st.fade);
    if(st.grain>0){const n=grainMap[Math.floor(i/4)];r=clamp(r+n);g=clamp(g+n);b=clamp(b+n);}
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[r,g,b]=doVig(r,g,b,px,py,w,h,st.vignette);}
    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
}

// ═══════════════════════════════
//  FILTER: B&W
// ═══════════════════════════════
function filter_bw(d,w,h,st){
  const grainMap=new Float32Array(w*h);
  if(st.grain>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*st.grain*1.3;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    let gray=clamp(0.299*r+0.587*g+0.114*b);
    [gray]=adjBC(gray,gray,gray,st.brightness,st.contrast);
    [gray]=doFade(gray,gray,gray,st.fade);
    let rv=gray,gv=gray,bv=gray;
    if(st.grain>0){const n=grainMap[Math.floor(i/4)];rv=clamp(rv+n);gv=clamp(gv+n);bv=clamp(bv+n);}
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[rv,gv,bv]=doVig(rv,gv,bv,px,py,w,h,st.vignette);}
    d[i]=rv;d[i+1]=gv;d[i+2]=bv;
  }
}

// ═══════════════════════════════
//  FILTER: SEPIA
// ═══════════════════════════════
function filter_sepia(d,w,h,st){
  const wm=st.warmth/100;
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    const gray=0.299*r+0.587*g+0.114*b;
    r=clamp(gray*(1.07+wm*.08)+22+wm*14);
    g=clamp(gray*(0.94+wm*.02)+8);
    b=clamp(gray*(0.74-wm*.1)-4);
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=doFade(r,g,b,st.fade);
    if(st.grain>0){const n=(Math.random()-.5)*st.grain*.48;r=clamp(r+n);g=clamp(g+n*.78);b=clamp(b+n*.58);}
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[r,g,b]=doVig(r,g,b,px,py,w,h,st.vignette);}
    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
}

// ═══════════════════════════════
//  FILTER: 0.3MP
// ═══════════════════════════════
function filter_px03(ctx,w,h,st){
  const bs=Math.max(2,Math.round(st.pixelBlock*1.5));
  const inp=ctx.getImageData(0,0,w,h).data;
  const out=ctx.createImageData(w,h); const od=out.data;
  for(let by=0;by<h;by+=bs)for(let bx=0;bx<w;bx+=bs){
    let sr=0,sg=0,sb=0,cnt=0;
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      sr+=inp[idx];sg+=inp[idx+1];sb+=inp[idx+2];cnt++;
    }
    let ar=sr/cnt,ag=sg/cnt,ab=sb/cnt;
    ar=Math.round(ar/12)*12; ag=Math.round(ag/10)*10; ab=Math.round(ab/12)*12;
    [ar,ag,ab]=adjBC(ar,ag,ab,st.brightness,st.contrast);
    const lum=(ar+ag+ab)/3, sc=st.shadowCrush/100;
    if(lum<sc*120){const f=lum/(sc*120+0.001);ar=clamp(ar*f);ag=clamp(ag*f);ab=clamp(ab*f);}
    ag=clamp(ag+5); ar=clamp(ar);ag=clamp(ag);ab=clamp(ab);
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      od[idx]=ar;od[idx+1]=ag;od[idx+2]=ab;od[idx+3]=255;
    }
  }
  ctx.putImageData(out,0,0);
  if(st.blur>0){
    const tmp=document.createElement('canvas');tmp.width=w;tmp.height=h;
    const tx=tmp.getContext('2d');tx.filter=`blur(${st.blur*0.35}px)`;
    tx.drawImage(ctx.canvas,0,0);
    ctx.clearRect(0,0,w,h);ctx.drawImage(tmp,0,0);
  }
}

// ═══════════════════════════════
//  FILTER: 1.3MP Nokia
// ═══════════════════════════════
function filter_px13(ctx,w,h,st){
  const bs=Math.max(1,st.pixelBlock), wm=st.warmNokia/100;
  const inp=ctx.getImageData(0,0,w,h).data;
  const out=ctx.createImageData(w,h); const od=out.data;
  for(let by=0;by<h;by+=bs)for(let bx=0;bx<w;bx+=bs){
    let sr=0,sg=0,sb=0,cnt=0;
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      sr+=inp[idx];sg+=inp[idx+1];sb+=inp[idx+2];cnt++;
    }
    let ar=sr/cnt,ag=sg/cnt,ab=sb/cnt;
    ar=clamp(ar*1.04+wm*9); ab=clamp(ab*0.96-wm*3);
    ar=Math.round(ar/7)*7; ag=Math.round(ag/7)*7; ab=Math.round(ab/7)*7;
    [ar,ag,ab]=adjBC(ar,ag,ab,st.brightness,st.contrast);
    [ar,ag,ab]=adjSat(ar,ag,ab,st.saturation);
    ar=clamp(ar);ag=clamp(ag);ab=clamp(ab);
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      od[idx]=ar;od[idx+1]=ag;od[idx+2]=ab;od[idx+3]=255;
    }
  }
  ctx.putImageData(out,0,0);
  if(st.blur>0){
    const tmp=document.createElement('canvas');tmp.width=w;tmp.height=h;
    const tx=tmp.getContext('2d');tx.filter=`blur(${st.blur*0.22}px)`;
    tx.drawImage(ctx.canvas,0,0);
    ctx.clearRect(0,0,w,h);ctx.drawImage(tmp,0,0);
  }
}

// ═══════════════════════════════
//  FILTER: NES palette
// ═══════════════════════════════
const NES_PAL=[
  [84,84,84],[0,30,116],[8,16,144],[48,0,136],[68,0,100],[92,0,48],[84,4,0],[60,24,0],
  [32,42,0],[8,58,0],[0,64,0],[0,60,0],[0,50,60],[0,0,0],[0,0,0],[0,0,0],
  [152,150,152],[8,76,196],[48,50,236],[92,30,228],[136,20,176],[160,20,100],[152,34,32],[120,60,0],
  [84,90,0],[40,114,0],[8,124,0],[0,118,40],[0,102,120],[0,0,0],[0,0,0],[0,0,0],
  [236,238,236],[76,154,236],[120,124,236],[176,98,236],[228,84,236],[236,88,180],[236,106,100],[212,136,32],
  [160,170,0],[116,196,0],[76,208,32],[56,204,108],[56,180,204],[60,60,60],[0,0,0],[0,0,0],
  [236,238,236],[168,204,236],[188,188,236],[212,178,236],[236,174,236],[236,174,212],[236,180,176],[228,196,144],
  [204,210,120],[180,222,120],[168,226,144],[152,226,180],[160,214,228],[160,162,160],[0,0,0],[0,0,0]
];
const nesCache=new Map();
function nearNES(r,g,b){
  const k=(r>>3)<<10|(g>>3)<<5|(b>>3);
  if(nesCache.has(k))return nesCache.get(k);
  let best=0,bestD=1e9;
  for(let i=0;i<NES_PAL.length;i++){
    const p=NES_PAL[i],dr=r-p[0],dg=g-p[1],db=b-p[2];
    const dist=dr*dr*0.3+dg*dg*0.59+db*db*0.11;
    if(dist<bestD){bestD=dist;best=i;}
  }
  const res=NES_PAL[best];
  if(nesCache.size>8192)nesCache.clear();
  nesCache.set(k,res);return res;
}
function filter_nes(ctx,w,h,st){
  const bs=Math.max(2,st.blockSize), dith=st.dither/100;
  const inp=ctx.getImageData(0,0,w,h).data;
  const out=ctx.createImageData(w,h); const od=out.data;
  for(let by=0;by<h;by+=bs)for(let bx=0;bx<w;bx+=bs){
    let sr=0,sg=0,sb=0,cnt=0;
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      sr+=inp[idx];sg+=inp[idx+1];sb+=inp[idx+2];cnt++;
    }
    let ar=sr/cnt,ag=sg/cnt,ab=sb/cnt;
    [ar,ag,ab]=adjBC(ar,ag,ab,st.brightness,st.contrast);
    if(dith>0){const n=(Math.random()-.5)*dith*55;ar=clamp(ar+n);ag=clamp(ag+n);ab=clamp(ab+n);}
    const [nr,ng,nb]=nearNES(clamp(ar),clamp(ag),clamp(ab));
    for(let dy=0;dy<bs&&by+dy<h;dy++)for(let dx=0;dx<bs&&bx+dx<w;dx++){
      const idx=((by+dy)*w+(bx+dx))*4;
      od[idx]=nr;od[idx+1]=ng;od[idx+2]=nb;od[idx+3]=255;
    }
  }
  ctx.putImageData(out,0,0);
}

// ═══════════════════════════════
//  FILTER: RANDOM
// ═══════════════════════════════
function randomSettings(){
  const filters=['f1970','f1980','f1990','bw','sepia'];
  const base=filters[randInt(0,filters.length-1)];
  const s={};
  const keys=['brightness','contrast','saturation','warmth','grain','vignette','fade','green','violet'];
  for(const k of keys){
    if(k==='brightness'||k==='contrast'||k==='saturation') s[k]=randInt(-100,100);
    else s[k]=randInt(0,100);
  }
  if(Math.random()<0.3){s.contrast=randInt(40,100);}
  if(Math.random()<0.3){s.grain=randInt(60,100);}
  if(Math.random()<0.3){s.vignette=randInt(70,100);}
  const twist=Math.floor(Math.random()*5);
  s._base=base;
  s._twist=twist;
  return s;
}

function filter_random(ctx,w,h,rs){
  const base=rs._base||'f1970';
  const id=ctx.getImageData(0,0,w,h);
  const d=id.data;
  if(base==='bw')        filter_bw(d,w,h,rs);
  else if(base==='sepia')filter_sepia(d,w,h,rs);
  else if(base==='f1980')filter_f1980(d,w,h,rs);
  else if(base==='f1990')filter_f1990(d,w,h,rs);
  else                   filter_f1970(d,w,h,rs);
  ctx.putImageData(id,0,0);
  const twist=rs._twist||0;
  if(twist===1){
    ctx.globalAlpha=0.15;
    ctx.filter='blur(8px)';
    ctx.drawImage(ctx.canvas,randInt(-30,30),randInt(-30,30));
    ctx.filter='none';ctx.globalAlpha=1;
  }else if(twist===2){
    const id2=ctx.getImageData(0,0,w,h);
    const d2=id2.data;
    const shift=randInt(4,12);
    for(let y=0;y<h;y++)for(let x=shift;x<w;x++){
      const from=((y*w+(x-shift))*4);
      const to=(y*w+x)*4;
      d2[to]=d2[from];
    }
    ctx.putImageData(id2,0,0);
  }else if(twist===3){
    const colors=['rgba(255,0,0,0.08)','rgba(0,0,255,0.08)','rgba(0,255,100,0.08)','rgba(255,200,0,0.08)'];
    ctx.fillStyle=colors[randInt(0,colors.length-1)];
    ctx.fillRect(0,0,w,h);
  }
  const id3=ctx.getImageData(0,0,w,h);
  const d3=id3.data;
  const grainExtra=randInt(10,50);
  for(let i=0;i<d3.length;i+=4){
    const n=(Math.random()-.5)*grainExtra;
    d3[i]=clamp(d3[i]+n);d3[i+1]=clamp(d3[i+1]+n*.8);d3[i+2]=clamp(d3[i+2]+n*.6);
  }
  ctx.putImageData(id3,0,0);
}

// ═══════════════════════════════
//  FILTER: LOMO
// ═══════════════════════════════
function filter_lomo(ctx,w,h,st){
  const id=ctx.getImageData(0,0,w,h);
  const d=id.data;
  const sat=st.saturation, vi=st.vignette/100;
  const gr=st.grain, lk=st.leak/100;
  const cx=w/2, cy=h/2, maxR=Math.sqrt(cx*cx+cy*cy);

  const grainMap=new Float32Array(w*h);
  if(gr>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*gr*1.2;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }

  const hue=st.leakHue;
  const hueRad=hue*Math.PI/180;
  const leakR=clamp(128+127*Math.cos(hueRad));
  const leakG=clamp(128+127*Math.cos(hueRad-2.094));
  const leakB=clamp(128+127*Math.cos(hueRad+2.094));

  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    const px=(i/4)%w, py=Math.floor((i/4)/w);

    [r,g,b]=adjSat(r,g,b,sat);
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);

    const dist=Math.sqrt((px-cx)**2+(py-cy)**2)/maxR;
    const vigPow=dist*dist*dist;
    const vigAmt=vi*vigPow*1.1;
    r=clamp(r*(1-Math.min(vigAmt,1)));
    g=clamp(g*(1-Math.min(vigAmt,1)));
    b=clamp(b*(1-Math.min(vigAmt,1)));

    const dTR=Math.sqrt((px-(w*0.85))**2+(py-(h*0.08))**2)/(w*0.55);
    const leakTR=Math.max(0,1-dTR)*lk*0.7;
    const dBL=Math.sqrt((px-(w*0.1))**2+(py-(h*0.92))**2)/(w*0.5);
    const leakBL=Math.max(0,1-dBL)*lk*0.5;
    const totalLeak=Math.min(leakTR+leakBL,0.85);
    r=clamp(r+(leakR-r)*totalLeak);
    g=clamp(g+(leakG-g)*totalLeak*0.7);
    b=clamp(b+(leakB-b)*totalLeak*0.5);

    if(gr>0){const n=grainMap[py*w+px];r=clamp(r+n);g=clamp(g+n*.9);b=clamp(b+n*.8);}

    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
  ctx.putImageData(id,0,0);
}

// ═══════════════════════════════
//  FILTER: 2000'
// ═══════════════════════════════
function filter_f2000(d,w,h,st){
  const cf=st.coffee/100;
  const gr=st.grain;
  const grainMap=new Float32Array(w*h);
  if(gr>0){
    for(let gy=0;gy<h;gy+=2)for(let gx=0;gx<w;gx+=2){
      const n=(Math.random()-.5)*gr*1.25;
      for(let dy=0;dy<2&&gy+dy<h;dy++)for(let dx=0;dx<2&&gx+dx<w;dx++)
        grainMap[(gy+dy)*w+(gx+dx)]=n;
    }
  }
  for(let i=0;i<d.length;i+=4){
    let r=d[i],g=d[i+1],b=d[i+2];
    r=clamp(r+cf*18);
    g=clamp(g-cf*5);
    b=clamp(b-cf*28);
    const lum=(r+g+b)/3;
    if(lum<100){r=clamp(r+cf*12);g=clamp(g-cf*4);b=clamp(b-cf*18);}
    if(lum>180){r=clamp(r+cf*8);g=clamp(g+cf*4);b=clamp(b-cf*5);}
    [r,g,b]=adjBC(r,g,b,st.brightness,st.contrast);
    [r,g,b]=adjSat(r,g,b,st.saturation);
    [r,g,b]=doFade(r,g,b,st.fade);
    if(st.vignette>0){const px=(i/4)%w,py=Math.floor((i/4)/w);[r,g,b]=doVig(r,g,b,px,py,w,h,st.vignette);}
    if(gr>0){const n=grainMap[Math.floor(i/4)];r=clamp(r+n);g=clamp(g+n*.85);b=clamp(b+n*.7);}
    d[i]=r;d[i+1]=g;d[i+2]=b;
  }
}

// ═══════════════════════════════
//  MASTER DISPATCH
// ═══════════════════════════════
function applyFilter(ctx,w,h,m,rs){
  if(m==='random'){
    if(rs) filter_random(ctx,w,h,rs);
    return;
  }
  if(m==='px03') {filter_px03(ctx,w,h,FS.px03);return;}
  if(m==='px13') {filter_px13(ctx,w,h,FS.px13);return;}
  if(m==='nes')  {filter_nes(ctx,w,h,FS.nes);return;}
  if(m==='f1960'){filter_f1960(ctx,w,h,FS.f1960);return;}
  if(m==='lomo') {filter_lomo(ctx,w,h,FS.lomo);return;}

  const id=ctx.getImageData(0,0,w,h);
  const d=id.data;
  if(m==='f1970')      filter_f1970(d,w,h,FS.f1970);
  else if(m==='f1980') filter_f1980(d,w,h,FS.f1980);
  else if(m==='f1990') filter_f1990(d,w,h,FS.f1990);
  else if(m==='f2000') filter_f2000(d,w,h,FS.f2000);
  else if(m==='bw')    filter_bw(d,w,h,FS.bw);
  else if(m==='sepia') filter_sepia(d,w,h,FS.sepia);
  ctx.putImageData(id,0,0);
}

// ═══════════════════════════════
//  CAMERA — с fallback для Android 14/15/16
// ═══════════════════════════════
async function startCamera(){
  if(currentStream){
    currentStream.getTracks().forEach(t=>t.stop());
    currentStream=null;
    recDot.classList.remove('on');
  }
  noCam.classList.remove('show');

  let backId=null, frontId=null;
  try{
    const initStream=await navigator.mediaDevices.getUserMedia({video:true,audio:false});
    initStream.getTracks().forEach(t=>t.stop());

    const devices=await navigator.mediaDevices.enumerateDevices();
    const cams=devices.filter(d=>d.kind==='videoinput');

    const backCam = cams.find(d=>
      /camera\s*0[^,]/i.test(d.label) ||
      (d.label.toLowerCase().includes('facing back') && /camera\s*0/i.test(d.label))
    ) || cams.find(d=>d.label.toLowerCase().includes('back'))
      || cams.find(d=>d.label.toLowerCase().includes('rear'))
      || cams.find(d=>d.label.toLowerCase().includes('environment'))
      || cams[0];

    const frontCam = cams.find(d=>d.label.toLowerCase().includes('front'))
      || cams.find(d=>d.label.toLowerCase().includes('user'))
      || cams[cams.length-1];

    if(backCam)  { backId  = backCam.deviceId;  _backDeviceId  = backId;  }
    if(frontCam) { frontId = frontCam.deviceId; _frontDeviceId = frontId; }
    dbg(`cams:${cams.length} back:"${backCam?.label}" front:"${frontCam?.label}"`);
  }catch(e){
    dbg(`enumerate err:${e.message}`);
  }

  const wantId = facingMode==='environment' ? backId : frontId;
  const attempts=[];

  if(wantId){
    attempts.push({video:{deviceId:{exact:wantId},width:{ideal:1920},height:{ideal:1920}},audio:false});
    attempts.push({video:{deviceId:{exact:wantId}},audio:false});
    attempts.push({video:{deviceId:{ideal:wantId}},audio:false});
  }
  attempts.push({video:{facingMode:{ideal:facingMode},width:{ideal:1920},height:{ideal:1920}},audio:false});
  attempts.push({video:{facingMode:{ideal:facingMode}},audio:false});
  attempts.push({video:{width:{ideal:1280},height:{ideal:1280}},audio:false});
  attempts.push({video:true,audio:false});

  let stream=null;
  for(const c of attempts){
    try{
      stream=await navigator.mediaDevices.getUserMedia(c);
      dbg(`OK: ${JSON.stringify(c.video).slice(0,60)}`);
      break;
    }catch(e){
      dbg(`fail(${e.name}): ${JSON.stringify(c.video).slice(0,50)}`);
    }
  }

  if(!stream){ noCam.classList.add('show'); return; }

  currentStream=stream;
  video.srcObject=stream;
  video.style.transform=facingMode==='user'?'scaleX(-1)':'none';
  pvC.style.transform  =facingMode==='user'?'scaleX(-1)':'none';

  video.onloadedmetadata=()=>{
    video.play().catch(()=>{});
    recDot.classList.add('on');
    startPreview();
  };
}

// ═══════════════════════════════
//  PREVIEW LOOP
// ═══════════════════════════════
function startPreview(){
  if(raf)cancelAnimationFrame(raf);
  function loop(){
    skipFrame++;
    const heavy=(mode==='nes'||mode==='px03'||mode==='px13');
    if(video.readyState>=2&&(!heavy||skipFrame%2===0)){
      const vw=video.videoWidth,vh=video.videoHeight;
      if(vw&&vh){
        const sz=Math.min(vw,vh);
        const zSz=Math.round(sz/currentZoom);
        const sx=(vw-zSz)/2,sy=(vh-zSz)/2;
        const pw=pvC.offsetWidth||360,ph=pvC.offsetHeight||360;
        if(pvC.width!==pw||pvC.height!==ph){pvC.width=pw;pvC.height=ph;}
        pCtx.drawImage(video,sx,sy,zSz,zSz,0,0,pw,ph);
        applyFilter(pCtx,pw,ph,mode,null);
      }
    }
    raf=requestAnimationFrame(loop);
  }
  loop();
}

// ═══════════════════════════════
//  CAPTURE
// ═══════════════════════════════
const OUT_SIZES={f1960:2048,f1970:2048,f1980:2048,f1990:2048,f2000:2048,lomo:2048,bw:2048,px03:640,px13:1280,nes:512,sepia:2048,random:1600};
const QUALITY  ={f1960:.93,f1970:.93,f1980:.93,f1990:.93,f2000:.93,lomo:.93,bw:.92,px03:.75,px13:.82,nes:.92,sepia:.93,random:.92};

function capturePhoto(){
  if(!currentStream||video.readyState<2)return;
  const vw=video.videoWidth,vh=video.videoHeight;
  if(!vw||!vh)return;
  const sz=Math.min(vw,vh);
  const zSz=Math.round(sz/currentZoom);
  const sx=(vw-zSz)/2,sy=(vh-zSz)/2;
  const outSz=OUT_SIZES[mode]||1024;
  capC.width=outSz;capC.height=outSz;
  if(facingMode==='user'){
    cCtx.save();cCtx.translate(outSz,0);cCtx.scale(-1,1);
    cCtx.drawImage(video,sx,sy,zSz,zSz,0,0,outSz,outSz);
    cCtx.restore();
  }else{
    cCtx.drawImage(video,sx,sy,zSz,zSz,0,0,outSz,outSz);
  }
  let rs=null;
  if(mode==='random'){rs=randomSettings();}
  applyFilter(cCtx,outSz,outSz,mode,rs);
  if(filmLeakOn && FILM_MODES.has(mode)){
    applyFilmLeak(cCtx, outSz, outSz);
  }

  const ts=new Date().toISOString().replace(/[:.]/g,'').slice(0,15);
  const fileName=`retrolens_${mode}_${ts}.jpg`;
  const quality=QUALITY[mode]||.9;
  const label=mode==='random'?(window._txt?.randSave||'RANDOM PHOTO ✦'):(window._txt?.saved||'SAVED ✓');

  const dataUrl=capC.toDataURL('image/jpeg',quality);
  lastUrl=dataUrl;
  gThumb.src=dataUrl;gThumb.style.display='block';gIcon.style.display='none';

  savePhoto(dataUrl,fileName,label);
}

// ═══════════════════════════════
//  SAVE
// ═══════════════════════════════
async function savePhoto(dataUrl,fileName,label){
  if(navigator.share&&navigator.canShare){
    try{
      const res=await fetch(dataUrl);
      const blob=await res.blob();
      const file=new File([blob],fileName,{type:'image/jpeg'});
      if(navigator.canShare({files:[file]})){
        await navigator.share({files:[file],title:'RetroLens'});
        showToast(label);
        return;
      }
    }catch(e){
      if(e.name==='AbortError'){showToast(label);return;}
      console.warn('Share API failed:',e);
    }
  }

  if(window.Capacitor&&window.Capacitor.isNativePlatform&&window.Capacitor.isNativePlatform()){
    try{
      if(window.Capacitor.Plugins&&window.Capacitor.Plugins.Filesystem){
        const base64=dataUrl.replace(/^data:image\/jpeg;base64,/,'');
        await window.Capacitor.Plugins.Filesystem.writeFile({
          path:fileName,data:base64,directory:'DOCUMENTS',recursive:true
        });
        showToast(label);
        return;
      }
    }catch(e){console.warn('Capacitor Filesystem failed:',e);}
  }

  try{
    const res=await fetch(dataUrl);
    const blob=await res.blob();
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download=fileName;
    document.body.appendChild(a);a.click();document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url),15000);
    showToast(label);
    return;
  }catch(e){console.warn('Blob download failed:',e);}

  showToast(window._txt?.holdSave||'HOLD PHOTO → SAVE');
  showGallery();
}

// ═══════════════════════════════
//  SETTINGS PANEL
// ═══════════════════════════════
const EN_LABELS={
  brightness:'BRIGHTNESS',contrast:'CONTRAST',saturation:'SATURATION',
  warmth:'WARMTH',grain:'GRAIN',vignette:'VIGNETTE',fade:'FADE',
  green:'FUJI GREEN',violet:'BLUE-VIOLET',coffee:'COFFEE',
  pink:'PINK TONE',leak:'LIGHT LEAK',leakHue:'LEAK HUE',
  blockSize:'PIXEL SIZE',dither:'DITHERING',pixelBlock:'PIXEL',
  blur:'BLUR',shadowCrush:'SHADOWS',warmNokia:'NOKIA WARM',
};
function buildPanel(m){
  const def=DEFS[m];
  const en=currentLang==='en';
  spName.textContent=def.label+(en?' — SETTINGS':' — ПАРАМЕТРЫ');
  spBody.innerHTML='';
  if(def.sliders.length===0){
    const p=document.createElement('div');
    p.style.cssText='font-size:9px;color:#6a5c3a;letter-spacing:1.5px;line-height:1.7;padding-top:4px;';
    p.textContent=en?'SETTINGS ARE RANDOMIZED ON EACH SHOT':'НАСТРОЙКИ ПРИМЕНЯЮТСЯ СЛУЧАЙНО ПРИ КАЖДОМ СНИМКЕ';
    spBody.appendChild(p);return;
  }
  for(const s of def.sliders){
    const v=FS[m][s.key];
    const lbl=en?(EN_LABELS[s.key]||s.label):s.label;
    const row=document.createElement('div');row.className='sr';
    row.innerHTML=`<div class="sl">${lbl}<b id="lv_${m}_${s.key}">${v}</b></div>
      <input type="range" id="sl_${m}_${s.key}" min="${s.min}" max="${s.max}" value="${v}">`;
    spBody.appendChild(row);
    const inp=row.querySelector('input'),disp=row.querySelector('b');
    inp.addEventListener('input',()=>{FS[m][s.key]=parseInt(inp.value);disp.textContent=inp.value;});
  }
}

// ═══════════════════════════════
//  GALLERY OVERLAY
// ═══════════════════════════════
function showGallery(){
  if(!lastUrl)return;
  const ov=document.getElementById('gallery-overlay');
  const img=document.getElementById('gallery-overlay-img');
  img.src=lastUrl;
  ov.style.display='flex';
}
function hideGallery(){
  document.getElementById('gallery-overlay').style.display='none';
}

// ═══════════════════════════════
//  VIBRATION
// ═══════════════════════════════
function vibrate(ms){
  try{ if(navigator.vibrate) navigator.vibrate(ms); }catch(_){}
}

// ═══════════════════════════════
//  EVENTS
// ═══════════════════════════════
shutter.addEventListener('pointerdown',e=>e.preventDefault());
shutter.addEventListener('pointerup',e=>{
  e.preventDefault();
  vibrate(40);
  capturePhoto();
});

fBtns.forEach(btn=>{
  btn.addEventListener('click',()=>{
    vibrate(18);
    mode=btn.dataset.mode;
    fBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    modeBadge.textContent=DEFS[mode].label;
    nesCache.clear();
    randInd.style.display=(mode==='random')?'block':'none';
    if(spPanel.classList.contains('open'))buildPanel(mode);
  });
});

settToggle.addEventListener('click',()=>{
  buildPanel(mode);
  spPanel.classList.toggle('open');
});
spClose.addEventListener('click',()=>spPanel.classList.remove('open'));

flipBtn.addEventListener('click',()=>{
  facingMode=(facingMode==='environment')?'user':'environment';
  nesCache.clear();
  startCamera();
});

gBtn.addEventListener('click',()=>showGallery());

document.getElementById('gallery-back').addEventListener('click',hideGallery);
document.getElementById('gallery-share').addEventListener('click',()=>{
  if(!lastUrl)return;
  const ts=new Date().toISOString().replace(/[:.]/g,'').slice(0,15);
  savePhoto(lastUrl,`retrolens_${mode}_${ts}.jpg`,window._txt?.saved||'SAVED ✓');
});

// ═══════════════════════════════
//  DEBUG LOG
// ═══════════════════════════════
const dbgEl=document.getElementById('dbg');
Object.assign(dbgEl.style,{
  position:'fixed',inset:'0',zIndex:'9999',
  background:'rgba(0,0,0,.93)',color:'#0f0',
  fontFamily:'monospace',fontSize:'11px',
  padding:'12px',overflowY:'auto',whiteSpace:'pre-wrap',display:'none'
});
dbgEl.addEventListener('click',()=>dbgEl.style.display='none');
function dbg(msg){
  const t=new Date().toISOString().slice(11,19);
  dbgEl.textContent=`[${t}] ${msg}\n`+dbgEl.textContent.slice(0,1200);
}
function showDbg(){
  dbg('=== CAMERA STATE ===');
  dbg(`main facingMode: ${facingMode}`);
  dbg(`main stream: ${currentStream?'YES':'NO'}`);
  dbg(`secret stream: ${secretStream?'YES':'NO'}`);
  if(currentStream||secretStream){
    const st=secretStream||currentStream;
    const tk=st.getVideoTracks()[0];
    const ss=tk?tk.getSettings():{};
    dbg(`label: "${tk?.label||'?'}"`);
    dbg(`facing: ${ss.facingMode||'?'} ${ss.width}x${ss.height}`);
  }
  navigator.mediaDevices.enumerateDevices().then(devs=>{
    const cams=devs.filter(d=>d.kind==='videoinput');
    dbg(`cameras: ${cams.length}`);
    cams.forEach((c,i)=>dbg(`  [${i}] "${c.label}" id:${c.deviceId.slice(0,8)}`));
  }).catch(e=>dbg(`enumerate: ${e.message}`));
  dbgEl.style.display='block';
}
document.getElementById('secret-dbg-btn').addEventListener('click',showDbg);

// Easter egg — 5 taps on title
let _tapCount=0,_tapTimer;
document.getElementById('app-title').addEventListener('click',()=>{
  _tapCount++;clearTimeout(_tapTimer);
  _tapTimer=setTimeout(()=>_tapCount=0,700);
  if(_tapCount>=5){ _tapCount=0; openSecretScreen(); }
});

// ═══════════════════════════════
//  SECRET FILTER
// ═══════════════════════════════
function filter_secret(ctx,w,h){
  const filters=['f1970','f1980','f1990','bw','sepia'];
  const base=filters[randInt(0,filters.length-1)];
  const s={};
  const keys=['brightness','contrast','saturation','warmth','grain','vignette','fade','green','violet'];
  for(const k of keys){
    if(k==='brightness'||k==='contrast'||k==='saturation') s[k]=randInt(-100,100);
    else s[k]=randInt(0,100);
  }
  if(Math.random()<0.3){s.contrast=randInt(40,100);}
  if(Math.random()<0.3){s.grain=randInt(60,100);}
  if(Math.random()<0.3){s.vignette=randInt(70,100);}
  const twist=randInt(0,4);
  s._base=base;
  s._twist=twist;
  s._extra=Math.random()<0.4?randInt(0,3):-1;

  const id=ctx.getImageData(0,0,w,h);
  const d=id.data;
  if(base==='bw')        filter_bw(d,w,h,s);
  else if(base==='sepia')filter_sepia(d,w,h,s);
  else if(base==='f1980')filter_f1980(d,w,h,s);
  else if(base==='f1990')filter_f1990(d,w,h,s);
  else                   filter_f1970(d,w,h,s);
  ctx.putImageData(id,0,0);

  if(twist===0){
    const id2=ctx.getImageData(0,0,w,h);
    const d2=new Uint8ClampedArray(id2.data);
    const shift=randInt(20,80);
    for(let y=0;y<h;y++){
      for(let x=0;x<w;x++){
        const to=(y*w+x)*4;
        const xR=x-shift; const fromR=(y*w+Math.max(0,xR))*4;
        d2[to]   = xR>=0 ? id2.data[fromR] : 0;
        d2[to+1] = id2.data[to+1];
        const xB=x+shift; const fromB=(y*w+Math.min(w-1,xB))*4+2;
        d2[to+2] = xB<w  ? id2.data[fromB] : 0;
        d2[to+3] = 255;
      }
    }
    id2.data.set(d2);
    ctx.putImageData(id2,0,0);
  }else if(twist===1){
    const dx=randInt(-w*0.15,w*0.15);
    const dy=randInt(-h*0.15,h*0.15);
    ctx.save();
    ctx.globalAlpha=0.35+Math.random()*0.25;
    ctx.filter=`hue-rotate(${randInt(60,300)}deg) saturate(${150+randInt(0,150)}%)`;
    ctx.drawImage(ctx.canvas,dx,dy);
    ctx.filter='none';ctx.globalAlpha=1;
    ctx.restore();
  }else if(twist===2){
    const layers=randInt(2,3);
    for(let i=0;i<layers;i++){
      const dx=randInt(-w*0.2,w*0.2);
      const dy=randInt(-h*0.2,h*0.2);
      ctx.save();
      ctx.globalAlpha=0.2+Math.random()*0.2;
      ctx.filter=`hue-rotate(${randInt(0,360)}deg) saturate(${100+randInt(50,200)}%)`;
      if(Math.random()<0.3) ctx.filter+=' invert(100%)';
      ctx.drawImage(ctx.canvas,dx,dy);
      ctx.filter='none';ctx.globalAlpha=1;
      ctx.restore();
    }
  }else if(twist===3){
    const id2=ctx.getImageData(0,0,w,h);
    const d2=new Uint8ClampedArray(id2.data);
    const bands=randInt(3,8);
    for(let b=0;b<bands;b++){
      const y0=randInt(0,h-1);
      const bh=randInt(5,h*0.12)|0;
      const shiftX=randInt(-w*0.15,w*0.15)|0;
      for(let y=y0;y<Math.min(y0+bh,h);y++){
        for(let x=0;x<w;x++){
          const srcX=((x-shiftX)%w+w)%w;
          const to=(y*w+x)*4;
          const from=(y*w+srcX)*4;
          d2[to]=id2.data[from];d2[to+1]=id2.data[from+1];d2[to+2]=id2.data[from+2];
        }
      }
    }
    id2.data.set(d2);
    ctx.putImageData(id2,0,0);
  }else if(twist===4){
    const stripes=randInt(2,5);
    const palette=[[255,220,0],[255,0,60],[0,200,255],[0,255,80],[255,80,0],[180,0,255],[0,255,200]];
    for(let i=0;i<stripes;i++){
      const col=palette[randInt(0,palette.length-1)];
      const yc=Math.random()*h;
      const sh=h*(0.04+Math.random()*0.2);
      const alpha=0.08+Math.random()*0.18;
      const grad=ctx.createLinearGradient(0,yc-sh/2,0,yc+sh/2);
      grad.addColorStop(0,`rgba(${col[0]},${col[1]},${col[2]},0)`);
      grad.addColorStop(0.5,`rgba(${col[0]},${col[1]},${col[2]},${alpha})`);
      grad.addColorStop(1,`rgba(${col[0]},${col[1]},${col[2]},0)`);
      ctx.fillStyle=grad;
      ctx.fillRect(0,yc-sh/2,w,sh);
    }
  }

  const extra=s._extra;
  if(extra===0){
    ctx.fillStyle=`rgba(0,0,0,${0.08+Math.random()*0.15})`;
    const lh=randInt(2,4);
    for(let y=0;y<h;y+=lh*2) ctx.fillRect(0,y,w,lh);
  }else if(extra===1){
    const cx=w/2,cy=h/2;
    const g=ctx.createRadialGradient(cx,cy,w*0.2,cx,cy,w*0.8);
    g.addColorStop(0,'rgba(0,0,0,0)');
    g.addColorStop(1,`rgba(0,0,0,${0.3+Math.random()*0.4})`);
    ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
  }else if(extra===2){
    const tints=['rgba(255,0,80,0.06)','rgba(0,255,180,0.06)','rgba(255,180,0,0.07)','rgba(100,0,255,0.07)'];
    ctx.fillStyle=tints[randInt(0,tints.length-1)];
    ctx.fillRect(0,0,w,h);
  }else if(extra===3){
    const id4=ctx.getImageData(0,0,w,h);
    const d4=id4.data;
    const sh=randInt(4,15);
    for(let y=0;y<h;y++)for(let x=sh;x<w;x++){
      d4[(y*w+x)*4]=id4.data[(y*w+x-sh)*4];
    }
    ctx.putImageData(id4,0,0);
  }

  const id3=ctx.getImageData(0,0,w,h);
  const d3=id3.data;
  const grainAmt=randInt(15,55);
  for(let i=0;i<d3.length;i+=4){
    const n=(Math.random()-.5)*grainAmt;
    d3[i]=clamp(d3[i]+n);d3[i+1]=clamp(d3[i+1]+n*.8);d3[i+2]=clamp(d3[i+2]+n*.6);
  }
  ctx.putImageData(id3,0,0);
}

// ═══════════════════════════════
//  SECRET SCREEN
// ═══════════════════════════════
let secretStream=null;
let secretFacing='environment';
let secretZoom=1.0;
let secretRaf=null;

const secretScreen  = document.getElementById('secret-screen');
const secretVideo   = document.getElementById('secret-video');
const secretCanvas  = document.getElementById('secret-canvas');
const secretCtx     = secretCanvas.getContext('2d',{willReadFrequently:true});

let _backDeviceId=null, _frontDeviceId=null;

async function startSecretCamera(){
  if(secretRaf){cancelAnimationFrame(secretRaf);secretRaf=null;}
  if(secretStream){ secretStream.getTracks().forEach(t=>t.stop()); secretStream=null; }

  if(!_backDeviceId && !_frontDeviceId){
    try{
      const devs=await navigator.mediaDevices.enumerateDevices();
      const cams=devs.filter(d=>d.kind==='videoinput');
      const backCam=cams.find(d=>/camera\s*0[^,]/i.test(d.label)||
        (d.label.toLowerCase().includes('facing back')&&/camera\s*0/i.test(d.label)))
        ||cams.find(d=>d.label.toLowerCase().includes('back'))
        ||cams[0];
      const frontCam=cams.find(d=>d.label.toLowerCase().includes('front'))||cams[cams.length-1];
      if(backCam) _backDeviceId=backCam.deviceId;
      if(frontCam) _frontDeviceId=frontCam.deviceId;
    }catch(e){ dbg('secret enumerate:'+e.message); }
  }

  const wantId=secretFacing==='environment'?_backDeviceId:_frontDeviceId;
  const attempts=[];
  if(wantId){
    attempts.push({video:{deviceId:{exact:wantId},width:{ideal:1920},height:{ideal:1920}},audio:false});
    attempts.push({video:{deviceId:{exact:wantId}},audio:false});
  }
  attempts.push({video:{facingMode:{ideal:secretFacing}},audio:false});
  attempts.push({video:true,audio:false});

  let stream=null;
  for(const c of attempts){
    try{ stream=await navigator.mediaDevices.getUserMedia(c); break; }
    catch(e){ dbg('secret cam fail:'+e.name+' '+JSON.stringify(c.video).slice(0,40)); }
  }
  if(!stream){ dbg('secret cam: no stream'); return; }

  secretStream=stream;
  secretVideo.srcObject=stream;
  secretVideo.style.transform=secretFacing==='user'?'scaleX(-1)':'none';
  secretVideo.onloadedmetadata=()=>{
    secretVideo.play().catch(()=>{});
    startSecretPreview();
  };
}

function startSecretPreview(){
  if(secretRaf)cancelAnimationFrame(secretRaf);
  function loop(){
    if(secretVideo.readyState>=2){
      const vw=secretVideo.videoWidth,vh=secretVideo.videoHeight;
      if(vw&&vh){
        const sz=Math.min(vw,vh);
        const zSz=Math.round(sz/secretZoom);
        const sx=(vw-zSz)/2,sy=(vh-zSz)/2;
        const pw=secretCanvas.offsetWidth||360,ph=secretCanvas.offsetHeight||360;
        if(secretCanvas.width!==pw||secretCanvas.height!==ph){secretCanvas.width=pw;secretCanvas.height=ph;}
        secretCtx.drawImage(secretVideo,sx,sy,zSz,zSz,0,0,pw,ph);
      }
    }
    secretRaf=requestAnimationFrame(loop);
  }
  loop();
}

function secretCapture(){
  if(!secretStream||secretVideo.readyState<2)return;
  const vw=secretVideo.videoWidth,vh=secretVideo.videoHeight;
  if(!vw||!vh)return;
  vibrate(40);
  const sz=Math.min(vw,vh);
  const zSz=Math.round(sz/secretZoom);
  const sx=(vw-zSz)/2,sy=(vh-zSz)/2;
  const outSz=2048;
  capC.width=outSz;capC.height=outSz;
  if(secretFacing==='user'){
    cCtx.save();cCtx.translate(outSz,0);cCtx.scale(-1,1);
    cCtx.drawImage(secretVideo,sx,sy,zSz,zSz,0,0,outSz,outSz);
    cCtx.restore();
  }else{
    cCtx.drawImage(secretVideo,sx,sy,zSz,zSz,0,0,outSz,outSz);
  }
  filter_secret(cCtx,outSz,outSz);
  const ts=new Date().toISOString().replace(/[:.]/g,'').slice(0,15);
  const dataUrl=capC.toDataURL('image/jpeg',.93);
  lastUrl=dataUrl;
  const sThumb=document.getElementById('secret-gthumb');
  const sIcon=document.getElementById('secret-gicon');
  sThumb.src=dataUrl;sThumb.style.display='block';sIcon.style.display='none';
  gThumb.src=dataUrl;gThumb.style.display='block';gIcon.style.display='none';
  savePhoto(dataUrl,`retrocam_secret_${ts}.jpg`,'✦ SECRET SHOT');
}

function openSecretScreen(){
  if(raf){cancelAnimationFrame(raf);raf=null;}
  if(currentStream){currentStream.getTracks().forEach(t=>t.stop());currentStream=null;}
  secretScreen.classList.add('show');
  secretFacing='environment';
  secretZoom=1.0;
  document.querySelectorAll('.secret-lens-btn').forEach((b,i)=>b.classList.toggle('active',i===0));
  startSecretCamera();
}

function closeSecretScreen(){
  if(secretRaf){cancelAnimationFrame(secretRaf);secretRaf=null;}
  if(secretStream){secretStream.getTracks().forEach(t=>t.stop());secretStream=null;}
  secretScreen.classList.remove('show');
  startCamera();
}

document.getElementById('secret-gallery-btn').addEventListener('click',()=>{
  if(lastUrl) showGallery();
});
document.getElementById('secret-dbg-area').addEventListener('click',showDbg);
document.getElementById('secret-exit-btn').addEventListener('click',closeSecretScreen);

document.getElementById('secret-flip').addEventListener('click',()=>{
  secretFacing=secretFacing==='environment'?'user':'environment';
  vibrate(18);
  startSecretCamera();
});

document.getElementById('secret-shutter').addEventListener('pointerdown',e=>e.preventDefault());
document.getElementById('secret-shutter').addEventListener('pointerup',e=>{
  e.preventDefault();secretCapture();
});

document.querySelectorAll('.secret-lens-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.secret-lens-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    secretZoom=parseFloat(btn.dataset.szoom);
    vibrate(18);
  });
});

// ═══════════════════════════════
//  FILM LIGHT LEAK
// ═══════════════════════════════
const FILM_MODES = new Set(['f1960','f1970','f1980','f1990','f2000','lomo','bw','sepia']);

let filmLeakOn = localStorage.getItem('rcLeak') === '1';
document.getElementById('leak-toggle').classList.toggle('on', filmLeakOn);

document.getElementById('leak-toggle-row').addEventListener('click', ()=>{
  filmLeakOn = !filmLeakOn;
  localStorage.setItem('rcLeak', filmLeakOn ? '1' : '0');
  document.getElementById('leak-toggle').classList.toggle('on', filmLeakOn);
});

function applyFilmLeak(ctx, w, h){
  const COLORS = [
    { r:255, g:255, b:255 },
    { r:220, g:20,  b:10  },
    { r:255, g:200, b:0   },
  ];
  const count = Math.random() < 0.45 ? 2 : 1;
  for(let k=0; k<count; k++){
    const col = COLORS[Math.floor(Math.random() * COLORS.length)];
    const horiz = Math.random() < 0.5;
    const fromStart = Math.random() < 0.5;
    const frac = 0.05 + Math.random() * 0.17;
    const maxAlpha = 0.55 + Math.random() * 0.35;
    let grad;
    if(horiz){
      const bandH = Math.round(h * frac);
      const y0 = fromStart ? 0 : h - bandH;
      grad = ctx.createLinearGradient(0, fromStart ? y0 : y0+bandH, 0, fromStart ? y0+bandH : y0);
      grad.addColorStop(0,   `rgba(${col.r},${col.g},${col.b},${maxAlpha})`);
      grad.addColorStop(0.55,`rgba(${col.r},${col.g},${col.b},${maxAlpha*0.4})`);
      grad.addColorStop(1,   `rgba(${col.r},${col.g},${col.b},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, y0, w, bandH);
    } else {
      const bandW = Math.round(w * frac);
      const x0 = fromStart ? 0 : w - bandW;
      grad = ctx.createLinearGradient(fromStart ? x0 : x0+bandW, 0, fromStart ? x0+bandW : x0, 0);
      grad.addColorStop(0,   `rgba(${col.r},${col.g},${col.b},${maxAlpha})`);
      grad.addColorStop(0.55,`rgba(${col.r},${col.g},${col.b},${maxAlpha*0.4})`);
      grad.addColorStop(1,   `rgba(${col.r},${col.g},${col.b},0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(x0, 0, bandW, h);
    }
  }
}

// ═══════════════════════════════
//  MENU
// ═══════════════════════════════
const menuBtn  = document.getElementById('menu-btn');
const dropdown = document.getElementById('dropdown');

menuBtn.addEventListener('click', e=>{
  e.stopPropagation();
  const open = dropdown.classList.toggle('open');
  menuBtn.classList.toggle('open', open);
});
document.addEventListener('click', e=>{
  if(!dropdown.contains(e.target) && e.target!==menuBtn){
    dropdown.classList.remove('open');
    menuBtn.classList.remove('open');
  }
});

// ═══════════════════════════════
//  GRID
// ═══════════════════════════════
let gridOn = localStorage.getItem('rcGrid') === '1';
const gridOverlay = document.getElementById('grid-overlay');
const gridCanvas  = document.getElementById('grid-canvas');
const gridCtx     = gridCanvas.getContext('2d');

function drawGrid(){
  const w = gridCanvas.offsetWidth;
  const h = gridCanvas.offsetHeight;
  gridCanvas.width  = w;
  gridCanvas.height = h;
  gridCtx.clearRect(0,0,w,h);
  gridCtx.strokeStyle = 'rgba(255,255,255,0.75)';
  gridCtx.lineWidth = 0.8;
  for(let i=1;i<3;i++){
    gridCtx.beginPath();gridCtx.moveTo(w*i/3,0);gridCtx.lineTo(w*i/3,h);gridCtx.stroke();
    gridCtx.beginPath();gridCtx.moveTo(0,h*i/3);gridCtx.lineTo(w,h*i/3);gridCtx.stroke();
  }
}

// Восстановить состояние сетки при запуске
if(gridOn){
  document.getElementById('grid-toggle').classList.add('on');
  gridOverlay.classList.add('show');
  requestAnimationFrame(()=>requestAnimationFrame(drawGrid));
}

document.getElementById('grid-toggle-row').addEventListener('click', ()=>{
  gridOn = !gridOn;
  localStorage.setItem('rcGrid', gridOn ? '1' : '0');
  document.getElementById('grid-toggle').classList.toggle('on', gridOn);
  gridOverlay.classList.toggle('show', gridOn);
  if(gridOn) drawGrid();
});

// ═══════════════════════════════
//  LANGUAGE
// ═══════════════════════════════
const I18N_MENU = {
  ru:{ lang:'Язык', grid:'Сетка', leak:'Засвет плёнки', info:'Информация', contact:'✉ Написать нам', about:'ℹ О приложении', privacy:'🔒 Политика конфиденциальности' },
  en:{ lang:'Language', grid:'Grid', leak:'Film Light Leak', info:'Information', contact:'✉ Contact us', about:'ℹ About', privacy:'🔒 Privacy Policy' },
};

function applyLang(){
  const en = currentLang==='en';
  const m  = I18N_MENU[currentLang];

  localStorage.setItem('rcLang', currentLang);

  document.querySelectorAll('.lang-pill').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));

  const mlLang=document.getElementById('ml-lang-label'); if(mlLang) mlLang.textContent=m.lang;
  const mlGrid=document.getElementById('ml-grid');       if(mlGrid) mlGrid.textContent=m.grid;
  const mlLeak=document.getElementById('ml-leak');       if(mlLeak) mlLeak.textContent=m.leak;
  const mlInfo=document.getElementById('ml-info');       if(mlInfo) mlInfo.textContent=m.info;
  const mlContact=document.getElementById('ml-contact'); if(mlContact) mlContact.textContent=m.contact;
  const mlAbout=document.getElementById('ml-about');     if(mlAbout) mlAbout.textContent=m.about;
  const mlPrivacy=document.getElementById('ml-privacy'); if(mlPrivacy) mlPrivacy.textContent=m.privacy;

  const nc=document.querySelector('#no-cam span');
  if(nc) nc.textContent=en?'NO ACCESS':'НЕТ ДОСТУПА';

  const ri=document.getElementById('random-indicator');
  if(ri) ri.textContent=en?'✦ RANDOM FILTER':'✦ СЛУЧАЙНЫЙ ФИЛЬТР';

  const ls=document.getElementById('l-std-name');
  if(ls) ls.textContent=en?'STANDARD':'ШТАТНЫЙ';

  document.querySelectorAll('.lens-btn').forEach(btn=>{
    const mm=btn.dataset.mm;
    const mmEl=btn.querySelector('.lmm');
    if(mmEl) mmEl.textContent=en?`${mm}mm`:`${mm}мм`;
  });

  const RU_LABELS={f1960:'1960',f1970:'1970',f1980:'1980',f1990:'1990',
    f2000:'2000',lomo:'LOMO',bw:'Ч/Б',sepia:'СЕПИЯ',
    px03:'0.3MP',px13:'1.3MP',nes:'NES',random:'RANDOM'};
  const EN_FILT={f1960:"1960'",f1970:"1970'",f1980:"1980'",f1990:"1990'",f2000:"2000'",
    lomo:'LOMO',bw:'B/W',sepia:'SEPIA',px03:'0.3MP',px13:'1.3MP',nes:'NES',random:'RANDOM'};
  document.querySelectorAll('.fb .fl').forEach(el=>{
    const md=el.closest('.fb')?.dataset.mode;
    if(!md) return;
    el.textContent=en?(EN_FILT[md]||md):(RU_LABELS[md]||md);
  });

  const gb=document.getElementById('gallery-back');
  if(gb) gb.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg>${en?'BACK':'НАЗАД'}`;
  const gs=document.getElementById('gallery-share');
  if(gs) gs.textContent=en?'SAVE':'СОХРАНИТЬ';

  window._txt={
    saved:   en?'SAVED ✓':'СОХРАНЕНО ✓',
    randSave:en?'RANDOM PHOTO ✦':'СЛУЧАЙНОЕ ФОТО ✦',
    holdSave:en?'HOLD PHOTO → SAVE':'УДЕРЖИ ФОТО → СОХРАНИТЬ',
    camErr:  en?'CAMERA ERROR':'ОШИБКА КАМЕРЫ',
  };

  if(spPanel.classList.contains('open')) buildPanel(mode);
}

document.querySelectorAll('.lang-pill').forEach(btn=>{
  btn.addEventListener('click', e=>{
    e.stopPropagation();
    currentLang=btn.dataset.lang;
    applyLang();
  });
});

// ═══════════════════════════════
//  LENS BAR
// ═══════════════════════════════
const zoomLbl=document.getElementById('zoom-label');
let zoomHideT;
document.querySelectorAll('.lens-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.lens-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentZoom=parseFloat(btn.dataset.zoom);
    const mm=btn.dataset.mm;
    zoomLbl.textContent=currentLang==='en'?`${mm}mm`:`${mm}мм`;
    zoomLbl.classList.add('show');
    clearTimeout(zoomHideT);
    zoomHideT=setTimeout(()=>zoomLbl.classList.remove('show'),1800);
  });
});

// ═══════════════════════════════
//  ANDROID BACK BUTTON (Capacitor)
// ═══════════════════════════════
if(window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App){
  window.Capacitor.Plugins.App.addListener('backButton',()=>{
    if(dropdown.classList.contains('open')){
      dropdown.classList.remove('open');menuBtn.classList.remove('open');return;
    }
    const ov=document.getElementById('gallery-overlay');
    if(ov.style.display==='flex'){hideGallery();return;}
    if(spPanel.classList.contains('open')){spPanel.classList.remove('open');return;}
  });
}

// ═══════════════════════════════
//  TOAST
// ═══════════════════════════════
let toastTimer;
function showToast(msg){
  toastEl.textContent=msg;toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>toastEl.classList.remove('show'),2200);
}

// ═══════════════════════════════
//  ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
//  Показывается один раз при первом запуске
// ═══════════════════════════════
const PRIVACY_TEXT_RU = `
<h2>Политика конфиденциальности</h2>
<p><b>RetroCamV8</b> — приложение не собирает и не передаёт никаких персональных данных пользователя. Все фотографии создаются и хранятся исключительно на вашем устройстве.</p>

<h3>Доступ к камере</h3>
<p>Приложение использует камеру устройства исключительно для съёмки фотографий. Изображения не передаются на серверы и не покидают ваше устройство.</p>

<h3>Интернет</h3>
<p>Соединение используется только для загрузки шрифтов (Google Fonts) и перехода по ссылкам меню. Никакие данные при этом не отправляются.</p>

<h3>Дети</h3>
<p>Приложение не предназначено для детей младше 13 лет и не собирает их данные намеренно.</p>

<h3>Изменения</h3>
<p>Политика может обновляться. Актуальная версия доступна по ссылке в настройках приложения.</p>

<p class="pp-meta">Разработчик: <b>DevSergej</b><br>Контакт: <b>sumance@yandex.ru</b><br>Дата: 03.05.2026</p>
`;

(function initPrivacyDialog(){
  if(localStorage.getItem('rcPrivacyAccepted')==='1') return;

  const style=document.createElement('style');
  style.textContent=`
    #pp-overlay{
      position:fixed;inset:0;z-index:9000;
      background:rgba(0,0,0,0.88);
      display:flex;align-items:flex-end;justify-content:center;
      font-family:'Share Tech Mono',monospace;
    }
    #pp-box{
      background:linear-gradient(180deg,#2a2518,#1a1610);
      border:1.5px solid #4a4035;
      border-bottom:none;
      border-radius:14px 14px 0 0;
      width:100%;max-width:480px;
      max-height:82vh;
      display:flex;flex-direction:column;
      overflow:hidden;
      box-shadow:0 -8px 40px rgba(0,0,0,0.7);
    }
    #pp-head{
      padding:14px 18px 10px;
      border-bottom:1px solid #3a3020;
      flex-shrink:0;
      display:flex;align-items:center;justify-content:space-between;
    }
    #pp-title{
      font-family:'Bebas Neue',sans-serif;
      font-size:18px;letter-spacing:3px;color:#c9a84c;
    }
    #pp-badge{
      font-size:9px;letter-spacing:1.5px;color:#6a5828;
      border:1px solid #3a2e10;border-radius:3px;padding:3px 7px;
    }
    #pp-body{
      flex:1;overflow-y:auto;
      padding:16px 18px;
      color:#b8a870;
      font-size:12px;line-height:1.75;
      scrollbar-width:none;
    }
    #pp-body::-webkit-scrollbar{display:none;}
    #pp-body h2{
      font-family:'Bebas Neue',sans-serif;
      font-size:16px;letter-spacing:2px;color:#c9a84c;
      margin:0 0 10px;
    }
    #pp-body h3{
      font-family:'Share Tech Mono',monospace;
      font-size:11px;letter-spacing:2px;color:#c9a84c;
      margin:14px 0 5px;text-transform:uppercase;
    }
    #pp-body p{margin:0 0 6px;}
    #pp-body b{color:#d4c080;}
    .pp-meta{
      margin-top:16px!important;
      padding-top:12px;
      border-top:1px solid #3a3020;
      font-size:11px;
      color:#6a5828;
      line-height:1.9;
    }
    #pp-fade{
      flex-shrink:0;height:32px;
      background:linear-gradient(transparent,#1a1610);
      margin-top:-32px;pointer-events:none;position:relative;z-index:1;
    }
    #pp-foot{
      padding:12px 18px 18px;flex-shrink:0;
      border-top:1px solid #3a3020;
      display:flex;flex-direction:column;gap:8px;
    }
    #pp-accept{
      width:100%;padding:13px;
      background:linear-gradient(135deg,#c9a84c,#8a6820);
      border:none;border-radius:8px;
      font-family:'Share Tech Mono',monospace;
      font-size:13px;letter-spacing:3px;
      color:#0a0806;font-weight:bold;cursor:pointer;
      box-shadow:0 2px 10px rgba(201,168,76,0.25);
      transition:opacity .15s;
    }
    #pp-accept:active{opacity:0.8;}
    #pp-link{
      display:block;text-align:center;
      font-size:10px;letter-spacing:1px;
      color:#6a5828;text-decoration:none;
      padding:2px 0;
    }
    #pp-link:active{color:#c9a84c;}
  `;
  document.head.appendChild(style);

  const overlay=document.createElement('div');
  overlay.id='pp-overlay';
  overlay.innerHTML=`
    <div id="pp-box">
      <div id="pp-head">
        <div id="pp-title">КОНФИДЕНЦИАЛЬНОСТЬ</div>
        <div id="pp-badge">v1.0 · 2026</div>
      </div>
      <div id="pp-body">${PRIVACY_TEXT_RU}</div>
      <div id="pp-fade"></div>
      <div id="pp-foot">
        <button id="pp-accept">ПРИНЯТЬ И ПРОДОЛЖИТЬ</button>
        <a id="pp-link" href="https://sites.google.com/view/retrocamv8/" target="_blank">
          Полная версия политики конфиденциальности →
        </a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById('pp-accept').addEventListener('click',()=>{
    localStorage.setItem('rcPrivacyAccepted','1');
    overlay.style.transition='opacity .3s';
    overlay.style.opacity='0';
    setTimeout(()=>overlay.remove(),320);
  });
})();

// ═══════════════════════════════
//  INIT
// ═══════════════════════════════
applyLang();
startCamera();
