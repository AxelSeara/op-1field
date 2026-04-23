const MANUAL_LANG={base:'es',current:'es',googleReady:false};

function detectManualLanguage(){
  const htmlLang=(document.documentElement.getAttribute('lang')||'').toLowerCase();
  const attrLang=htmlLang.startsWith('en')?'en':(htmlLang.startsWith('es')?'es':null);
  const sample=((document.getElementById('main-area')||document.body).innerText||'').slice(0,8000).toLowerCase();
  const esWords=[' el ',' la ',' de ',' que ',' y ',' con ',' para ',' módulo ',' teoría ',' mezcla ',' pista '];
  const enWords=[' the ',' and ',' with ',' for ',' module ',' theory ',' mix ',' track ',' keyboard '];
  const esScore=esWords.reduce((acc,w)=>acc+(sample.includes(w)?1:0),0);
  const enScore=enWords.reduce((acc,w)=>acc+(sample.includes(w)?1:0),0);
  if(Math.abs(esScore-enScore)>=2) return esScore>=enScore?'es':'en';
  if(attrLang) return attrLang;
  return esScore>=enScore?'es':'en';
}

function getCookie(name){
  const parts=document.cookie.split(';').map(v=>v.trim());
  const hit=parts.find(v=>v.startsWith(name+'='));
  return hit?decodeURIComponent(hit.split('=').slice(1).join('=')):null;
}

function setGoogTransCookie(source,target){
  const value=`/${source}/${target}`;
  document.cookie=`googtrans=${value}; path=/`;
  if(location.hostname.includes('.')){
    document.cookie=`googtrans=${value}; path=/; domain=.${location.hostname}`;
  }
}

function clearGoogTransCookie(){
  document.cookie='googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  if(location.hostname.includes('.')){
    document.cookie=`googtrans=; path=/; domain=.${location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}

function readGoogTargetLang(){
  const raw=getCookie('googtrans');
  if(!raw) return null;
  const parts=raw.split('/');
  const target=(parts[2]||'').toLowerCase();
  return target==='es'||target==='en'?target:null;
}

function readHashTargetLang(){
  const match=(window.location.hash||'').match(/googtrans\(([^|]+)\|([^)]+)\)/i);
  if(!match) return null;
  const target=(match[2]||'').toLowerCase();
  return target==='es'||target==='en'?target:null;
}

function updateLangButtons(lang){
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const on=btn.dataset.lang===lang;
    btn.classList.toggle('active',on);
    btn.setAttribute('aria-pressed',on?'true':'false');
  });
}

function loadGoogleTranslate(){
  if(document.querySelector('script[data-google-translate="1"]')) return;
  const s=document.createElement('script');
  s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  s.async=true;
  s.dataset.googleTranslate='1';
  document.head.appendChild(s);
}

window.googleTranslateElementInit=function(){
  if(!window.google||!google.translate||!google.translate.TranslateElement) return;
  new google.translate.TranslateElement({
    pageLanguage:MANUAL_LANG.base,
    includedLanguages:'es,en',
    autoDisplay:false
  },'google_translate_element');
  MANUAL_LANG.googleReady=true;
};

function setManualLanguage(target){
  const next=target==='en'?'en':'es';
  localStorage.setItem('manual_lang',next);
  if(next===MANUAL_LANG.base){
    clearGoogTransCookie();
    if(window.location.hash.includes('googtrans(')){
      history.replaceState(null,'',window.location.pathname+window.location.search);
    }
  }else{
    setGoogTransCookie(MANUAL_LANG.base,next);
    const hash=`#googtrans(${MANUAL_LANG.base}|${next})`;
    if(window.location.hash!==hash){
      history.replaceState(null,'',window.location.pathname+window.location.search+hash);
    }
  }
  updateLangButtons(next);
  window.location.reload();
}

function initManualLanguageSwitch(){
  MANUAL_LANG.base=detectManualLanguage();
  document.documentElement.setAttribute('lang',MANUAL_LANG.base);
  const pref=localStorage.getItem('manual_lang');
  const fromHash=readHashTargetLang();
  const fromCookie=readGoogTargetLang();
  let current=MANUAL_LANG.base;
  if(pref==='es'||pref==='en') current=pref;
  if(fromHash==='es'||fromHash==='en') current=fromHash;
  if(fromCookie==='es'||fromCookie==='en') current=fromCookie;
  if(current!==MANUAL_LANG.base){
    setGoogTransCookie(MANUAL_LANG.base,current);
    const hash=`#googtrans(${MANUAL_LANG.base}|${current})`;
    if(window.location.hash!==hash){
      history.replaceState(null,'',window.location.pathname+window.location.search+hash);
    }
    loadGoogleTranslate();
  }else{
    clearGoogTransCookie();
    if(window.location.hash.includes('googtrans(')){
      history.replaceState(null,'',window.location.pathname+window.location.search);
    }
  }
  MANUAL_LANG.current=current;
  updateLangButtons(current);
}

document.addEventListener('DOMContentLoaded',initManualLanguageSwitch);

const total=16;const done_set=new Set();let cur=0;
const secs={
0:[{i:"m0-s1",t:"01 — el teclado del op–1…"},{i:"m0-s2",t:"02 — sostenidos, bemoles…"},{i:"m0-s3",t:"03 — navegar el teclado"},{i:"m0-s4",t:"04 — la pentatónica meno…"}],
1:[{i:"m1-s1",t:"01 — qué es el tempo y p…"},{i:"m1-s2",t:"02 — el metrónomo del OP…"},{i:"m1-s3",t:"03 — referencias de BPM …"},{i:"m1-s4",t:"04 — velocidad de cinta …"},{i:"m1-s5",t:"05 — sync: sincronizar c…"},{i:"m1-s6",t:"06 — ejercicios para int…"}],
2:[{i:"m2-s1",t:"01 — acordes de dos nota…"},{i:"m2-s2",t:"02 — tensión y resolució…"},{i:"m2-s3",t:"03 — ritmo: pulso, compá…"},{i:"m2-s4",t:"04 — estructura: cómo se…"},{i:"m2-s5",t:"05 — frecuencias: el esp…"}],
3:[{i:"m3-s1",t:"los 4 modos principales"},{i:"m3-s2",t:"los 4 encoders — lógica …"},{i:"m3-s3",t:"el panel de botones — re…"},{i:"m3-s4",t:"presets de sonido — guar…"}],
4:[{i:"m4-s1",t:"qué es el tape exactamen…"},{i:"m4-s2",t:"flujo de grabación — pas…"},{i:"m4-s3",t:"varios loops en un mismo…"},{i:"m4-s4",t:"edición en tape — cortar…"},{i:"m4-s5",t:"pistas en el tape — gest…"},{i:"m4-s6",t:"tape browser + tape styl…"}],
5:[{i:"m5-s1",t:"panorama — los engines d…"},{i:"m5-s2",t:"fm synth — causa y efect…"},{i:"m5-s3",t:"dna synth — origen, cará…"},{i:"m5-s4",t:"cluster — origen, caráct…"}],
6:[{i:"m6-s1",t:"synth — origen, carácter…"},{i:"m6-s2",t:"drwave — origen, carácte…"},{i:"m6-s3",t:"string — origen, carácte…"},{i:"m6-s4",t:"phase — origen, carácter…"},{i:"m6-s5",t:"vocoder — origen, caráct…"},{i:"m6-s6",t:"engines field extra — la…"}],
7:[{i:"m7-s1",t:"concepto y acceso"},{i:"m7-s2",t:"tremolo lfo — volumen y …"},{i:"m7-s3",t:"value lfo — parámetro es…"},{i:"m7-s4",t:"random lfo — el caos con…"},{i:"m7-s5",t:"element lfo — señales ex…"},{i:"m7-s6",t:"recetas LFO — combinacio…"},{i:"m7-s7",t:"midi lfo + velocity lfo …"}],
8:[{i:"m8-s1",t:"cómo acceder a los efect…"},{i:"m8-s2",t:"01 — delay · repetición …"},{i:"m8-s3",t:"02 — mother · profundida…"},{i:"m8-s4",t:"03 — spring · carácter d…"},{i:"m8-s5",t:"04 — punch · recuperar p…"},{i:"m8-s6",t:"05 — nitro · distorsión …"},{i:"m8-s7",t:"06 — cwo · modulación ir…"},{i:"m8-s8",t:"07 — phone · recorte de …"},{i:"m8-s9",t:"08 — grid + terminal · r…"}],
9:[{i:"m9-s1",t:"el concepto — síntesis d…"},{i:"m9-s2-env",t:"el envelope universal — …"},{i:"m9-s2",t:"kick drum — golpe grave …"},{i:"m9-s3",t:"snare y clap — el golpe …"},{i:"m9-s4",t:"hi-hat y platillos — el …"},{i:"m9-s5",t:"elementos especiales — p…"},{i:"m9-s6",t:"construir el kit — de la…"}],
10:[{i:"m10-s1",t:"cómo acceder a los secue…"},{i:"m10-s2",t:"01 — tombola · el genera…"},{i:"m10-s3",t:"02 — sketch · captura lo…"},{i:"m10-s4",t:"03 — arp · arpeggiator"},{i:"m10-s5",t:"04 — endless · secuencia…"},{i:"m10-s6",t:"05 — pattern · step sequ…"},{i:"m10-s7",t:"06 — finger · performanc…"},{i:"m10-s8",t:"07 — hold · secuenciar s…"}],
11:[{i:"m11-s1",t:"fuentes de audio — de dó…"},{i:"m11-s2",t:"grabar un sample — proce…"},{i:"m11-s3",t:"editar el sample — trim,…"},{i:"m11-s4",t:"field recording — el mun…"},{i:"m11-s5",t:"técnicas creativas con s…"},{i:"m11-s6",t:"input / resampling — cap…"}],
12:[{i:"m12-s1",t:"glosario — términos que …"},{i:"m12-s2",t:"mezcla de los 4 canales …"},{i:"m12-s3",t:"técnicas de mezcla para …"},{i:"m12-s4",t:"paneo — diseño del campo…"},{i:"m12-s5",t:"masterización — preparar…"},{i:"m12-s6",t:"masterización práctica e…"}],
13:[{i:"m13-s1",t:"el flujo — 90 minutos de…"},{i:"m13-s2",t:"estrategias cuando hay b…"},{i:"m13-s3",t:"gestión de sesión — hábi…"}],
14:[{i:"m14-s1",t:"el ep–133 ko ii — capaci…"},{i:"m14-s2",t:"captura de audio — estér…"},{i:"m14-s3",t:"conexión y sincronizació…"},{i:"m14-s4",t:"diferencias clave — cuán…"},{i:"m14-s5",t:"flujos de trabajo — de b…"},{i:"m14-s6",t:"ideas de tracks que solo…"},{i:"m14-s7",t:"conectividad field avanza…"}],
15:[{i:"m15-s1",t:"tres rutas de exportació…"},{i:"m15-s2",t:"checklist previo a expor…"},{i:"m15-s3",t:"qué hacer después"},{i:"m15-s4",t:"roadmap de expansión fie…"},{i:"m15-s5",t:"salida field avanzada — …"},{i:"m15-s6",t:"bloque extra — errores t…"}]
};

const mods=document.querySelectorAll('.mod');
mods.forEach((m,idx)=>{m.style.display = idx===0 ? 'block' : 'none';});
buildSub(0);

function go(i){
  mods[cur].style.display='none';
  document.querySelectorAll('.ni')[cur].classList.remove('active');
  cur=i;
  mods[i].style.display='block';
  document.querySelectorAll('.ni')[i].classList.add('active');
  buildSub(i);
  if(i===12 && typeof ws2Reset==='function'){
    setTimeout(()=>{
      if(!ws2Reset()) setTimeout(ws2Reset, 140);
    }, 80);
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function buildSub(i){
  const box=document.getElementById('subnav');
  if(!box) return;
  const list=secs[i]||[];
  if(!list.length){box.innerHTML='';return;}
  box.innerHTML=list.map((s,n)=>
    `<button class="sni" onclick="goSec('${s.i}')"><span class="sni-num">${String(i).padStart(2,'0')}.${n+1}</span>${s.t}</button>`
  ).join('');
}

function goSec(id){
  const el=document.getElementById(id);
  if(!el)return;
  const y=el.getBoundingClientRect().top+window.scrollY-20;
  window.scrollTo({top:y,behavior:'smooth'});
}

function done(i){
  if(done_set.has(i))return;
  done_set.add(i);
  const b=document.getElementById('bd'+i);
  b.textContent='completado ✓';b.classList.add('mk');b.disabled=true;
  document.getElementById('nc'+i).textContent='●';
  document.querySelectorAll('.ni')[i].classList.add('done');
  const p=(done_set.size/total*100).toFixed(0);
  document.getElementById('pf').style.width=p+'%';
  document.getElementById('pt').textContent=done_set.size+' / '+total;
}
