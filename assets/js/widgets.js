/* ═══════════════════════════════════════════════════════
   WIDGETS INTERACTIVOS — OP-1 FIELD CURSO
   Web Audio API · todos los widgets comparten un AudioContext
   ═══════════════════════════════════════════════════════ */

let _ac = null;
function ac() {
  if (!_ac) _ac = new (window.AudioContext || window.webkitAudioContext)();
  if (_ac.state === 'suspended') _ac.resume();
  return _ac;
}

function widgetLang() {
  const lang = window.CourseI18n && typeof window.CourseI18n.getLanguage === 'function'
    ? window.CourseI18n.getLanguage()
    : (document.documentElement.getAttribute('lang') || 'es');
  const v = String(lang).toLowerCase();
  if (v.startsWith('en')) return 'en';
  if (v.startsWith('ja')) return 'ja';
  return 'es';
}

function tr(es, en, ja) {
  const lang = widgetLang();
  if (typeof es === 'object' && es) {
    if (lang === 'ja' && typeof es.ja === 'string') return es.ja;
    if (lang === 'en' && typeof es.en === 'string') return es.en;
    return typeof es.es === 'string' ? es.es : (es.en || es.ja || '');
  }
  if (lang === 'ja') return ja !== undefined ? ja : en;
  return lang === 'en' ? en : es;
}

/* ── 1. METRONOMO ───────────────────────────────────────── */
const wmGenresEs = [
  [40,60,'drone · ambient extremo'],
  [60,80,'hip-hop lento · lo-fi · trap'],
  [80,100,'hip-hop mid-tempo · experimental'],
  [100,115,'funk · soul · pop midtempo'],
  [115,130,'house · disco'],
  [130,145,'techno · trance'],
  [145,200,'drum & bass · footwork'],
];
const wmGenresEn = [
  [40,60,'drone · extreme ambient'],
  [60,80,'slow hip-hop · lo-fi · trap'],
  [80,100,'mid-tempo hip-hop · experimental'],
  [100,115,'funk · soul · midtempo pop'],
  [115,130,'house · disco'],
  [130,145,'techno · trance'],
  [145,200,'drum & bass · footwork'],
];
const wmGenresJa = [
  [40,60,'ドローン · 極端にアンビエント'],
  [60,80,'スロウなヒップホップ · lo-fi · trap'],
  [80,100,'ミッドテンポのヒップホップ · 実験系'],
  [100,115,'ファンク · ソウル · ミッドテンポ・ポップ'],
  [115,130,'house · disco'],
  [130,145,'techno · trance'],
  [145,200,'drum & bass · footwork'],
];
let wmBpm=85, wmSwingAmt=0, wmPlaying=false, wmTimer=null, wmBeat=0, wmNextTime=0;

function wmUpdate() {
  wmBpm = +document.getElementById('wm-bpm').value;
  document.getElementById('wm-bpmv').textContent = wmBpm;
  const wmGenres = widgetLang() === 'en'
    ? wmGenresEn
    : (widgetLang() === 'ja' ? wmGenresJa : wmGenresEs);
  const g = wmGenres.find(([lo,hi]) => wmBpm >= lo && wmBpm < hi);
  document.getElementById('wm-genre').textContent = g ? g[2] : '';
}
function wmSet(bpm) {
  document.getElementById('wm-bpm').value = bpm;
  wmUpdate();
}
function wmSwing(pct) {
  wmSwingAmt = pct/100;
  ['0','33','50'].forEach(v => {
    const el = document.getElementById('wm-s'+v);
    if(el) el.className = 'w-btn ' + (v == pct ? 'active' : 'inactive');
  });
}
function wmClick(time, accent) {
  const ctx = ac();
  const g = ctx.createGain();
  g.connect(ctx.destination);
  g.gain.setValueAtTime(accent ? 0.9 : 0.5, time);
  g.gain.exponentialRampToValueAtTime(0.001, time + 0.04);
  const o = ctx.createOscillator();
  o.connect(g);
  o.frequency.value = accent ? 1200 : 800;
  o.start(time);
  o.stop(time + 0.04);
}
function wmSchedule() {
  const ctx = ac();
  while (wmNextTime < ctx.currentTime + 0.1) {
    const beat = wmBeat % 4;
    const accent = beat === 0;
    // swing: even beats slightly late
    const swingOffset = (beat % 2 === 1) ? wmSwingAmt * (60/wmBpm) * 0.5 : 0;
    wmClick(wmNextTime + swingOffset, accent);
    // Visual
    const b = beat;
    setTimeout(() => {
      document.querySelectorAll('.w-pulse').forEach((p,i) => {
        p.classList.remove('beat','accent');
        if (i === b) p.classList.add(accent ? 'accent' : 'beat');
      });
    }, Math.max(0, (wmNextTime + swingOffset - ctx.currentTime) * 1000));
    wmNextTime += 60 / wmBpm;
    wmBeat++;
  }
}
function wmToggle() {
  const btn = document.getElementById('wm-play');
  if (!wmPlaying) {
    const ctx = ac();
    wmNextTime = ctx.currentTime + 0.05;
    wmBeat = 0;
    wmTimer = setInterval(wmSchedule, 25);
    wmPlaying = true;
    btn.textContent = '■ stop';
    btn.style.background = 'var(--ink)';
  } else {
    clearInterval(wmTimer);
    wmPlaying = false;
    btn.textContent = '▶ play';
    btn.style.background = '';
    document.querySelectorAll('.w-pulse').forEach(p => p.classList.remove('beat','accent'));
  }
}
// Init metronome swing buttons
document.addEventListener('DOMContentLoaded', () => {
  wmSwing(0);
  wmUpdate();
});

/* ── 2. EXPLORADOR DE INTERVALOS ────────────────────────── */
const wiNotesEs = ['Fa','Fa#','Sol','Sol#','La','La#','Si','Do','Do#','Re','Re#','Mi',
                   'Fa','Fa#','Sol','Sol#','La','La#','Si','Do','Do#','Re','Re#','Mi'];
const wiNotesEn = ['F','F#','G','G#','A','A#','B','C','C#','D','D#','E',
                   'F','F#','G','G#','A','A#','B','C','C#','D','D#','E'];
const wiNotesJa = ['ファ','ファ#','ソ','ソ#','ラ','ラ#','シ','ド','ド#','レ','レ#','ミ',
                   'ファ','ファ#','ソ','ソ#','ラ','ラ#','シ','ド','ド#','レ','レ#','ミ'];
// black key positions by semitone index (0=Fa)
const wiIsBlack = [false,true,false,true,false,false,true,false,true,false,true,false];
const wiFreqs = [174.61,185,196,207.65,220,233.08,246.94,261.63,277.18,293.66,311.13,329.63,
                 349.23,370,392,415.30,440,466.16,493.88,523.25,554.37,587.33,622.25,659.25];
const wiIntervalsEs = { 1:'semitono',2:'tono',3:'3ª menor — oscuro',4:'3ª mayor — brillante',
  5:'4ª justa',6:'tritono — máx. tensión',7:'5ª justa — estable',8:'6ª menor',
  9:'6ª mayor',10:'7ª menor',11:'7ª mayor',12:'octava' };
const wiIntervalsEn = { 1:'semitone',2:'whole tone',3:'minor 3rd — darker',4:'major 3rd — brighter',
  5:'perfect 4th',6:'tritone — max tension',7:'perfect 5th — stable',8:'minor 6th',
  9:'major 6th',10:'minor 7th',11:'major 7th',12:'octave' };
const wiIntervalsJa = { 1:'半音',2:'全音',3:'短3度 — 暗め',4:'長3度 — 明るめ',
  5:'完全4度',6:'トライトーン — 最大の緊張感',7:'完全5度 — 安定',
  8:'短6度',9:'長6度',10:'短7度',11:'長7度',12:'オクターブ' };
let wiSel1=-1, wiSel2=-1;

function wiNotes() {
  const lang = widgetLang();
  if (lang === 'en') return wiNotesEn;
  if (lang === 'ja') return wiNotesJa;
  return wiNotesEs;
}

function wiIntervalLabel(diff) {
  const lang = widgetLang();
  const map = lang === 'en' ? wiIntervalsEn : (lang === 'ja' ? wiIntervalsJa : wiIntervalsEs);
  return map[diff] || '';
}

function wiBuildKbd() {
  const kbd = document.getElementById('wi-kbd');
  if(!kbd) return;
  kbd.style.cssText = 'position:relative;display:flex;height:70px;';
  // 14 white keys
  const whites = [0,2,4,5,7,9,11,12,14,16,17,19,21,23];
  const blacks = { 1:[0,1],3:[2,3],6:[4,5],8:[6,7],10:[8,9],13:[12,13],15:[14,15],18:[16,17],20:[19,20],22:[21,22] };
  kbd.innerHTML = '';
  const ww = 100/14; // % width per white key
  whites.forEach((semi,wi) => {
    const k = document.createElement('div');
    k.className='w-key-w'; k.dataset.semi=semi;
    k.style.cssText=`position:absolute;left:${wi*ww}%;width:${ww-0.3}%;height:100%;bottom:0;border:1px solid var(--li);background:var(--w);cursor:pointer;transition:background .08s;border-radius:0 0 2px 2px;`;
    k.onclick=()=>wiClick(semi);
    kbd.appendChild(k);
  });
  Object.entries(blacks).forEach(([bw_pos,[semi,_]]) => {
    const wi = whites.indexOf(+bw_pos - 1);
    if(wi<0) return;
    const k = document.createElement('div');
    k.className='w-key-b'; k.dataset.semi=semi;
    k.style.cssText=`position:absolute;left:${(wi+1)*ww-ww*0.3}%;width:${ww*0.6}%;height:60%;top:0;background:var(--ink);cursor:pointer;z-index:2;transition:background .08s;border-radius:0 0 2px 2px;`;
    k.onclick=e=>{e.stopPropagation();wiClick(semi);};
    kbd.appendChild(k);
  });
}
function wiPlayFreq(freq, when=0) {
  const ctx=ac(), now=ctx.currentTime+when;
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(0,now);
  g.gain.linearRampToValueAtTime(0.4,now+0.01);
  g.gain.exponentialRampToValueAtTime(0.001,now+1.2);
  const o=ctx.createOscillator(); o.type='triangle';
  o.connect(g); o.frequency.value=freq;
  o.start(now); o.stop(now+1.2);
}
function wiHighlight() {
  document.querySelectorAll('#wi-kbd .w-key-w, #wi-kbd .w-key-b').forEach(k=>{
    k.style.background='';
    if(k.classList.contains('w-key-b')) k.style.background='var(--ink)';
    const s=+k.dataset.semi;
    if(s===wiSel1) k.style.background='var(--or)';
    else if(s===wiSel2) k.style.background='#ff8844';
  });
}
function wiClick(semi) {
  if(wiSel1===-1){wiSel1=semi;wiPlayFreq(wiFreqs[semi]);}
  else if(wiSel2===-1 && semi!==wiSel1){
    wiSel2=semi;
    const diff=Math.abs(semi-wiSel1);
    const lbl=document.getElementById('wi-label');
    if(diff===0){lbl.textContent=tr('misma nota', 'same note'); return;}
    lbl.textContent=(diff<=12?`${diff} ${tr('semitonos', 'semitones')} — ${wiIntervalLabel(diff)}`:' ')
      + ` · ${wiNotes()[wiSel1]} + ${wiNotes()[wiSel2]}`;
    wiPlayFreq(wiFreqs[wiSel1]);
    wiPlayFreq(wiFreqs[wiSel2], 0.05);
  } else {wiSel1=semi;wiSel2=-1;wiPlayFreq(wiFreqs[semi]);}
  wiHighlight();
  const lbl=document.getElementById('wi-label');
  if(wiSel2===-1) lbl.textContent=`${wiNotes()[semi]} ${tr('seleccionado — elige otra nota', 'selected — choose another note')}`;
}
function wiClear(){wiSel1=-1;wiSel2=-1;wiHighlight();document.getElementById('wi-label').textContent=tr('selecciona una nota raíz y luego otra', 'select one root note and then another');}
function wiPlay(s1,s2){wiSel1=s1;wiSel2=s2;
  const diff=Math.abs(s2-s1);
  document.getElementById('wi-label').textContent=`${diff} ${tr('semitonos', 'semitones')} — ${wiIntervalLabel(diff)} · ${wiNotes()[s1]} + ${wiNotes()[s2]}`;
  wiHighlight();wiPlayFreq(wiFreqs[s1]);wiPlayFreq(wiFreqs[s2],0.05);}
document.addEventListener('DOMContentLoaded', wiBuildKbd);

/* ── 3. ADSR VISUALIZER ─────────────────────────────────── */
function waDraw() {
  const cv=document.getElementById('wa-canvas'); if(!cv) return;
  const ctx=cv.getContext('2d');
  cv.width=cv.clientWidth||600; cv.height=80;
  const W=cv.width, H=cv.height;
  const a=+document.getElementById('wa-a').value/1000;
  const d=+document.getElementById('wa-d').value/1000;
  const s=+document.getElementById('wa-s').value/100;
  const r=+document.getElementById('wa-r').value/1000;
  const total=a+d+0.3+r;
  const scale=W/total;
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle='#ff5500'; ctx.lineWidth=2; ctx.lineJoin='round';
  ctx.beginPath();
  ctx.moveTo(0,H);
  ctx.lineTo(a*scale, 4);
  ctx.lineTo((a+d)*scale, H-(s*(H-8)));
  ctx.lineTo((a+d+0.3)*scale, H-(s*(H-8)));
  ctx.lineTo((a+d+0.3+r)*scale, H);
  ctx.stroke();
  // Labels
  ctx.fillStyle='#888884'; ctx.font='8px IBM Plex Mono';
  ctx.fillText('A',Math.max(2,a*scale/2-3), H-4);
  ctx.fillText('D',(a+(d/2))*scale-3, H-4);
  ctx.fillText('S',(a+d+0.15)*scale-3, H-4);
  ctx.fillText('R',(a+d+0.3+r/2)*scale-3, H-4);
}
function waDrawAndLabel() {
  waDraw();
  document.getElementById('wa-av').textContent=document.getElementById('wa-a').value+'ms';
  document.getElementById('wa-dv').textContent=document.getElementById('wa-d').value+'ms';
  document.getElementById('wa-sv').textContent=document.getElementById('wa-s').value+'%';
  document.getElementById('wa-rv').textContent=document.getElementById('wa-r').value+'ms';
}
function waPreset(p) {
  const presets={
    perc:{ a:1,d:80,s:0,r:30 },
    pad:{ a:150,d:200,s:80,r:800 },
    pluck:{ a:1,d:200,s:0,r:150 },
    swell:{ a:200,d:50,s:90,r:1500 },
  };
  const pr=presets[p]; if(!pr) return;
  document.getElementById('wa-a').value=pr.a;
  document.getElementById('wa-d').value=pr.d;
  document.getElementById('wa-s').value=pr.s;
  document.getElementById('wa-r').value=pr.r;
  waDrawAndLabel();
}
function waPlay() {
  const ctx=ac(), now=ctx.currentTime;
  const a=+document.getElementById('wa-a').value/1000;
  const d=+document.getElementById('wa-d').value/1000;
  const s=+document.getElementById('wa-s').value/100;
  const r=+document.getElementById('wa-r').value/1000;
  const sustain=0.3;
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.001,now);
  g.gain.linearRampToValueAtTime(0.7,now+a);
  g.gain.linearRampToValueAtTime(0.7*s,now+a+d);
  g.gain.setValueAtTime(0.7*s,now+a+d+sustain);
  g.gain.linearRampToValueAtTime(0.001,now+a+d+sustain+r);
  const o=ctx.createOscillator(); o.frequency.value=220; o.type='triangle';
  o.connect(g); o.start(now); o.stop(now+a+d+sustain+r+0.1);
}
document.addEventListener('DOMContentLoaded', () => { waDrawAndLabel(); });
window.addEventListener('resize', () => { setTimeout(waDrawAndLabel, 100); });

/* ── 4. STEP SEQUENCER ──────────────────────────────────── */
let wsGrid=Array.from({ length:3 },()=>Array(16).fill(false));
let wsSeqPlaying=false, wsSeqTimer=null, wsSeqStep=0, wsSeqBpm=85;
const wsPresets_={
  basic:[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]],
  dilla:[[1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1],[0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1]],
  house:[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],
};
function wsKick(t) {
  const ctx=ac();
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(1,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.3);
  const o=ctx.createOscillator(); o.frequency.setValueAtTime(150,t);
  o.frequency.exponentialRampToValueAtTime(50,t+0.2);
  o.connect(g); o.start(t); o.stop(t+0.3);
}
function wsSnare(t) {
  const ctx=ac();
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.6,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.15);
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.15,ctx.sampleRate);
  const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
  const src=ctx.createBufferSource(); src.buffer=buf;
  const flt=ctx.createBiquadFilter(); flt.type='bandpass'; flt.frequency.value=2500; flt.Q.value=0.5;
  src.connect(flt); flt.connect(g); src.start(t); src.stop(t+0.15);
}
function wsHihat(t) {
  const ctx=ac();
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.3,t); g.gain.exponentialRampToValueAtTime(0.001,t+0.06);
  const buf=ctx.createBuffer(1,ctx.sampleRate*0.06,ctx.sampleRate);
  const d=buf.getChannelData(0); for(let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
  const src=ctx.createBufferSource(); src.buffer=buf;
  const flt=ctx.createBiquadFilter(); flt.type='highpass'; flt.frequency.value=8000;
  src.connect(flt); flt.connect(g); src.start(t); src.stop(t+0.06);
}
function wsStep() {
  const ctx=ac(), now=ctx.currentTime, spb=60/wsSeqBpm/4;
  if(wsGrid[0][wsSeqStep]) wsKick(now);
  if(wsGrid[1][wsSeqStep]) wsSnare(now);
  if(wsGrid[2][wsSeqStep]) wsHihat(now);
  document.querySelectorAll('#ws-grid .w-cell').forEach((cell,i)=>{
    const row=Math.floor(i/16), col=i%16;
    cell.classList.toggle('active-step', col===wsSeqStep);
  });
  wsSeqStep=(wsSeqStep+1)%16;
}
function wsToggle() {
  const btn=document.getElementById('ws-play');
  if(!wsSeqPlaying) {
    wsSeqStep=0; wsSeqTimer=setInterval(wsStep, 60000/wsSeqBpm/4);
    wsSeqPlaying=true; btn.textContent='■ stop'; btn.style.background='var(--ink)';
  } else {
    clearInterval(wsSeqTimer); wsSeqPlaying=false;
    btn.textContent='▶ play'; btn.style.background='';
    document.querySelectorAll('#ws-grid .w-cell').forEach(c=>c.classList.remove('active-step'));
  }
}
function wsBpmUpdate() {
  wsSeqBpm=+document.getElementById('ws-bpm').value;
  document.getElementById('ws-bpmv').textContent=wsSeqBpm;
  if(wsSeqPlaying){clearInterval(wsSeqTimer);wsSeqTimer=setInterval(wsStep,60000/wsSeqBpm/4);}
}
function wsPreset(name) {
  wsGrid=wsPresets_[name].map(r=>[...r]);
  wsRender();
}
function wsClear(){wsGrid=Array.from({ length:3 },()=>Array(16).fill(false));wsRender();}
function wsRender() {
  const grid=document.getElementById('ws-grid'); if(!grid) return;
  grid.innerHTML='';
  grid.style.cssText='display:grid;grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(3,28px);gap:1px;background:var(--li);border:1px solid var(--li);';
  const colors=['var(--ink)','#0055cc','#888884'];
  for(let r=0;r<3;r++) for(let col=0;col<16;col++){
    const cell=document.createElement('button');
    cell.className='w-cell'+(wsGrid[r][col]?' on':'');
    if(wsGrid[r][col]) cell.style.background=colors[r];
    cell.style.cssText=`background:${wsGrid[r][col]?colors[r]:'var(--w)'};border:none;cursor:pointer;min-height:28px;opacity:${col%4===0?1:0.85}`;
    cell.onclick=()=>{
      wsGrid[r][col]=!wsGrid[r][col];
      cell.style.background=wsGrid[r][col]?colors[r]:'var(--w)';
    };
    grid.appendChild(cell);
  }
}
document.addEventListener('DOMContentLoaded', () => { wsRender(); wsPreset('basic'); });

/* ── 5. WAVEFORMS ───────────────────────────────────────── */
let wwOsc=null, wwGain=null, wwFilter=null, wwAnalyser=null, wwType='sine', wwRunning=false, wwAnimId=null;
const wwDescsEs={
  sine:'sine — onda sinusoidal pura, sin armónicos adicionales. suave y limpia. base del vocoder.',
  square:'square — onda cuadrada. rica en armónicos impares. carácter nasal y electrónico. new wave, chiptune.',
  sawtooth:'sawtooth — diente de sierra. todos los armónicos. brillante y agresiva. el sonido substractivo más rico.',
  triangle:'triangle — similar a sine pero con armónicos impares suaves. más cálida que square.',
};
const wwDescsEn={
  sine:'sine — pure sine wave, no extra harmonics. smooth and clean. vocoder base.',
  square:'square — square wave. rich in odd harmonics. nasal/electronic character. new wave, chiptune.',
  sawtooth:'sawtooth — all harmonics. bright and aggressive. richest subtractive source.',
  triangle:'triangle — like sine with soft odd harmonics. warmer than square.',
};
const wwDescsJa={
  sine:'sine — 純粋な正弦波。追加の倍音なし。滑らかでクリーン。vocoderの土台。',
  square:'square — 矩形波。奇数倍音が豊富。鼻にかかった電子的キャラクター。new wave / chiptune向け。',
  sawtooth:'sawtooth — すべての倍音を含む。明るくアグレッシブ。減算合成で最も濃い素材。',
  triangle:'triangle — sineに近いが、穏やかな奇数倍音を持つ。squareより温かい。',
};
function wwDraw() {
  if(!wwAnalyser) return;
  const cv=document.getElementById('ww-canvas'); if(!cv) return;
  cv.width=cv.clientWidth||600;
  const ctx=cv.getContext('2d'), W=cv.width, H=cv.height;
  const buf=new Uint8Array(wwAnalyser.fftSize);
  wwAnalyser.getByteTimeDomainData(buf);
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle='#ff5500'; ctx.lineWidth=2;
  ctx.beginPath();
  for(let i=0;i<buf.length;i++){
    const x=i/buf.length*W, y=(buf[i]-128)/128*(H/2-4)+(H/2);
    i===0?ctx.moveTo(x,y):ctx.lineTo(x,y);
  }
  ctx.stroke();
  wwAnimId=requestAnimationFrame(wwDraw);
}
function wwSelect(type) {
  wwType=type;
  ['sine','square','sawtooth','triangle'].forEach(t=>{
    const btn=document.getElementById('ww-'+t);
    if(btn) btn.className='w-btn '+(t===type?'active':'inactive');
  });
  const lang = widgetLang();
  const wwDescs = lang === 'en' ? wwDescsEn : (lang === 'ja' ? wwDescsJa : wwDescsEs);
  document.getElementById('ww-desc').textContent=wwDescs[type]||'';
  if(wwOsc) wwOsc.type=type;
  if(!wwRunning) wwDrawStatic();
}
function wwDrawStatic() {
  const cv=document.getElementById('ww-canvas'); if(!cv) return;
  cv.width=cv.clientWidth||600; const W=cv.width, H=cv.height;
  const ctx=cv.getContext('2d');
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle='#ff5500'; ctx.lineWidth=2;
  ctx.beginPath();
  for(let i=0;i<W;i++){
    const t=i/W*4*Math.PI, y=H/2;
    let val=0;
    if(wwType==='sine') val=Math.sin(t);
    else if(wwType==='square') val=Math.sin(t)>0?1:-1;
    else if(wwType==='sawtooth') val=((t%(2*Math.PI))/(Math.PI))-1;
    else val=Math.abs(((t%(2*Math.PI))/(Math.PI))-1)*2-1;
    const cy=y-val*(H/2-6);
    i===0?ctx.moveTo(i,cy):ctx.lineTo(i,cy);
  }
  ctx.stroke();
}
function wwCutoff() {
  const val=+document.getElementById('ww-cut').value;
  const lbl=document.getElementById('ww-cutv');
  lbl.textContent=val>=7000?tr('abierto','open'):val<500?val+'Hz':Math.round(val/100)/10+'kHz';
  if(wwFilter) wwFilter.frequency.value=val;
}
function wwToggle() {
  const btn=document.getElementById('ww-play');
  if(!wwRunning){
    const ctx=ac();
    wwOsc=ctx.createOscillator(); wwOsc.type=wwType; wwOsc.frequency.value=220;
    wwFilter=ctx.createBiquadFilter(); wwFilter.type='lowpass';
    wwFilter.frequency.value=+document.getElementById('ww-cut').value;
    wwAnalyser=ctx.createAnalyser(); wwAnalyser.fftSize=1024;
    wwGain=ctx.createGain(); wwGain.gain.value=0.3;
    wwOsc.connect(wwFilter); wwFilter.connect(wwAnalyser); wwAnalyser.connect(wwGain); wwGain.connect(ctx.destination);
    wwOsc.start();
    wwRunning=true; btn.textContent='■ stop'; btn.style.background='var(--ink)';
    wwDraw();
  } else {
    wwOsc.stop(); cancelAnimationFrame(wwAnimId);
    wwRunning=false; btn.textContent=tr('▶ tocar','▶ play'); btn.style.background='';
    wwDrawStatic();
  }
}
document.addEventListener('DOMContentLoaded', () => { setTimeout(wwDrawStatic,100); });

/* ── 6. STEREO FIELD ────────────────────────────────────── */
const ws2Config={
  kick:{ freq:80,type:'sine',color:'#111110',pan:0,osc:null,gain:null },
  bajo:{ freq:110,type:'triangle',color:'#0055cc',pan:0,osc:null,gain:null },
  tex:{ freq:440,type:'sawtooth',color:'#00aa55',pan:0.6,osc:null,gain:null },
  mel:{ freq:330,type:'triangle',color:'#ff5500',pan:-0.2,osc:null,gain:null },
};
let ws2Playing=false;
const ws2Disposers = [];
function ws2CleanupDraggables() {
  while (ws2Disposers.length) {
    const dispose = ws2Disposers.pop();
    try { dispose(); } catch (_err) { /* noop */ }
  }
}
function ws2MakeDraggable(dotId, key) {
  const dot=document.getElementById('ws2-'+dotId);
  const field=document.getElementById('ws2-field');
  if(!dot||!field) return;
  if (dot.dataset.dragBound === '1') return;
  dot.dataset.dragBound = '1';
  let dragging=false, ox=0, oy=0;
  const onMouseDown = (e) => {
    dragging = true;
    ox = e.clientX - dot.offsetLeft;
    oy = e.clientY - dot.offsetTop;
    e.preventDefault();
  };
  const onTouchStart = (e) => {
    dragging = true;
    const t = e.touches[0];
    ox = t.clientX - dot.offsetLeft;
    oy = t.clientY - dot.offsetTop;
    e.preventDefault();
  };
  const onMouseMove = (e) => {
    if(!dragging) return;
    ws2Move(dot, e.clientX-ox, e.clientY-oy, field, key);
  };
  const onTouchMove = (e) => {
    if(!dragging) return;
    const t=e.touches[0];
    ws2Move(dot,t.clientX-ox,t.clientY-oy,field,key);
    e.preventDefault();
  };
  const onMouseUp = () => { dragging = false; };
  const onTouchEnd = () => { dragging = false; };

  dot.addEventListener('mousedown', onMouseDown);
  dot.addEventListener('touchstart', onTouchStart, { passive:false });
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('touchmove', onTouchMove, { passive:false });
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('touchend', onTouchEnd);

  ws2Disposers.push(() => {
    dot.removeEventListener('mousedown', onMouseDown);
    dot.removeEventListener('touchstart', onTouchStart);
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchend', onTouchEnd);
    delete dot.dataset.dragBound;
  });
}
function ws2Move(dot, x, y, field, key) {
  const fw=field.clientWidth, fh=field.clientHeight;
  const cx=Math.max(16,Math.min(fw-16,x+16)), cy=Math.max(16,Math.min(fh-16,y+16));
  dot.style.left=cx+'px'; dot.style.top=cy+'px';
  const pan=(cx/fw)*2-1;
  ws2Config[key].pan=pan;
  if(ws2Config[key].panNode) ws2Config[key].panNode.pan.value=pan;
  const pct=Math.round(pan*100);
  document.getElementById('ws2-info').textContent=`${key}: ${pct===0?tr('centro','center'):pct>0?tr('derecha +','right +')+pct:tr('izquierda ','left ')+pct}`;
}
function ws2Toggle() {
  const btn=document.getElementById('ws2-play');
  if(!ws2Playing){
    const ctx=ac();
    const instruments=[
      { key:'kick',freq:80,type:'sine',vol:0.25 },
      { key:'bajo',freq:110,type:'triangle',vol:0.2 },
      { key:'tex',freq:330,type:'sawtooth',vol:0.08 },
      { key:'mel',freq:220,type:'triangle',vol:0.15 },
    ];
    instruments.forEach(({ key,freq,type,vol })=>{
      const o=ctx.createOscillator(); o.frequency.value=freq; o.type=type;
      const g=ctx.createGain(); g.gain.value=vol;
      const p=ctx.createStereoPanner(); p.pan.value=ws2Config[key].pan;
      o.connect(p); p.connect(g); g.connect(ctx.destination);
      o.start();
      ws2Config[key].osc=o; ws2Config[key].gain=g; ws2Config[key].panNode=p;
    });
    ws2Playing=true; btn.textContent='■ stop'; btn.style.background='var(--ink)';
  } else {
    Object.values(ws2Config).forEach(c=>{if(c.osc) c.osc.stop();});
    ws2Playing=false; btn.textContent=tr('▶ escuchar','▶ listen'); btn.style.background='';
  }
}
function ws2Reset() {
  const field=document.getElementById('ws2-field'); if(!field) return;
  const fw=field.clientWidth, fh=field.clientHeight;
  if(fw<40 || fh<40) return false;
  const defaults={ kick:{ x:fw/2,y:fh*0.25 },bajo:{ x:fw/2,y:fh*0.5 },tex:{ x:fw*0.75,y:fh*0.35 },mel:{ x:fw*0.35,y:fh*0.65 } };
  Object.entries(defaults).forEach(([key,pos])=>{
    const dot=document.getElementById('ws2-'+key); if(!dot) return;
    dot.style.left=pos.x+'px'; dot.style.top=pos.y+'px';
    const pan=(pos.x/fw)*2-1;
    ws2Config[key].pan=pan;
    if(ws2Config[key].panNode) ws2Config[key].panNode.pan.value=pan;
  });
  return true;
}
document.addEventListener('DOMContentLoaded', ()=>{
  ['kick','bajo','tex','mel'].forEach(k=>ws2MakeDraggable(k,k));
  setTimeout(()=>{ ws2Reset(); }, 200);
});

/* ── 7. TAPE EDIT LAB ──────────────────────────────────── */
let wtData = [];
let wtHeadPos = 0;
let wtTrackIdx = 0;
let wtClipboard = false;
function wtSeed() {
  wtData = Array.from({ length:4 }, (_,t)=>
    Array.from({ length:16 }, (_,i)=> (t===0 && [0,1,2,4,5,8].includes(i)) || (t===1 && [0,4,8,12].includes(i)) || (t===2 && [2,6,10,14].includes(i)) || (t===3 && [7,11,15].includes(i))),
  );
  wtClipboard = false;
  wtHeadPos = 0;
  wtTrackIdx = 0;
}
function wtSetStatus(msg){ const el=document.getElementById('wt-status'); if(el) el.textContent = msg; }
function wtRender() {
  const wrap = document.getElementById('wt-wrap');
  if(!wrap) return;
  wrap.innerHTML = '';
  for(let t=0;t<4;t++){
    const row = document.createElement('div');
    row.className = 'w-track-row';
    const lb = document.createElement('div');
    lb.className = 'w-track-label';
    lb.textContent = 'trk '+(t+1);
    if(t===wtTrackIdx) lb.style.color='var(--or)';
    row.appendChild(lb);
    const grid = document.createElement('div');
    grid.className = 'w-tape-grid';
    for(let c=0;c<16;c++){
      const cell = document.createElement('button');
      cell.className = 'w-tape-cell';
      if(wtData[t][c]) cell.classList.add('has');
      if(wtHeadPos===c && wtTrackIdx===t) cell.classList.add('head');
      cell.style.opacity = c%4===0 ? 1 : 0.9;
      cell.onclick=()=>{ wtTrackIdx=t; wtHeadPos=c; document.getElementById('wt-track').value=String(t); document.getElementById('wt-head').value=String(c); wtHead(); };
      grid.appendChild(cell);
    }
    row.appendChild(grid);
    wrap.appendChild(row);
  }
}
function wtHead() {
  wtHeadPos = +document.getElementById('wt-head').value;
  document.getElementById('wt-headv').textContent = String(wtHeadPos+1).padStart(2,'0');
  wtRender();
}
function wtTrack() {
  wtTrackIdx = +document.getElementById('wt-track').value;
  wtRender();
}
function wtLift() {
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus(tr('no hay take bajo el cabezal para hacer lift','no take under the head to lift')); return; }
  wtData[wtTrackIdx][wtHeadPos] = false;
  wtClipboard = true;
  wtRender();
  wtSetStatus(tr('lift hecho: take al portapapeles. ahora mueve cabezal y haz drop.','lift done: take copied to clipboard. now move the head and drop.'));
}
function wtDrop() {
  if(!wtClipboard) { wtSetStatus(tr('portapapeles vacío. haz lift primero.','clipboard empty. do lift first.')); return; }
  wtData[wtTrackIdx][wtHeadPos] = true;
  wtRender();
  wtSetStatus(tr('drop aplicado. si quieres repetir, mueve cabezal y vuelve a drop.','drop applied. move the head and drop again to repeat.'));
}
function wtSplit() {
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus(tr('split requiere un take existente.','split requires an existing take.')); return; }
  if(wtHeadPos>=15) { wtSetStatus(tr('no hay espacio a la derecha para split.','no space on the right to split.')); return; }
  wtData[wtTrackIdx][wtHeadPos+1] = true;
  wtRender();
  wtSetStatus(tr('split simulado: segmento dividido en dos partes contiguas.','simulated split: segment divided into two adjacent parts.'));
}
function wtClone() {
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus(tr('elige un take para duplicar.','choose a take to duplicate.')); return; }
  const idx = wtData[wtTrackIdx].findIndex((v,i)=>!v && i>wtHeadPos);
  if(idx===-1){ wtSetStatus(tr('sin hueco libre a la derecha. mueve o borra antes.','no free slot on the right. move or clear first.')); return; }
  wtData[wtTrackIdx][idx]=true;
  wtRender();
  wtSetStatus(tr('take duplicado en la misma pista. útil para construir arreglo rápido.','take duplicated on the same track. useful to build arrangement quickly.'));
}
function wtReset() {
  wtSeed();
  const t=document.getElementById('wt-track'), h=document.getElementById('wt-head');
  if(t) t.value='0';
  if(h) h.value='0';
  wtHead();
  wtSetStatus(tr('estado base cargado. prueba lift/drop/split en orden.','base state loaded. test lift/drop/split in order.'));
}

/* ── 8. FM LAB ─────────────────────────────────────────── */
let wfmA = null, wfmB = null;
function wDistCurve(amount=0){
  const n=256, curve=new Float32Array(n), k=Math.max(0, amount)*30;
  for(let i=0;i<n;i++){
    const x=i*2/n-1;
    curve[i]=((1+k)*x)/(1+k*Math.abs(x));
  }
  return curve;
}
function wfmGet() {
  const originEl = document.getElementById('wfm-origin');
  return {
    ratio: +document.getElementById('wfm-ratio').value/10,
    mod: +document.getElementById('wfm-mod').value,
    fb: +document.getElementById('wfm-fb').value,
    origin: originEl ? +originEl.value : 50,
  };
}
function wfmOriginFreq(origin){
  return 110 * Math.pow(2, (origin - 50) / 25);
}
function wfmDescribe(p){
  const ratioRounded = Math.round(p.ratio);
  const simple = Math.abs(p.ratio-ratioRounded) < 0.08 && [1,2,3,4,5,6,7,8].includes(ratioRounded);
  const lowOrigin = p.origin < 36;
  const highOrigin = p.origin > 64;
  if(p.mod<25 && p.fb<25 && simple) return tr('lectura: estable-armónico, limpio', 'read: stable-harmonic, clean');
  if(!simple && p.mod>35) return tr('lectura: inarmónico/metálico (campana útil)', 'read: inharmonic/metallic (useful bell)');
  if(lowOrigin && p.mod<55) return tr('lectura: carácter grave/profundo, útil para bajos', 'read: low/deep character, useful for bass');
  if(highOrigin && p.mod>35) return tr('lectura: carácter agudo/cortante, útil para lead', 'read: high/cutting character, useful for lead');
  if(p.mod>70 || p.fb>65) return tr('lectura: áspero y denso, úsalo con intención', 'read: rough and dense, use with intention');
  return tr('lectura: punto intermedio, buen terreno para bajos/keys', 'read: middle ground, good territory for bass/keys');
}
function wfmUpdate() {
  const p=wfmGet();
  const originSemi = Math.round((p.origin - 50) * 0.48);
  const originFreq = Math.round(wfmOriginFreq(p.origin));
  document.getElementById('wfm-ratiov').textContent=p.ratio.toFixed(1);
  const originVal = document.getElementById('wfm-originv');
  if (originVal) originVal.textContent = `${originSemi >= 0 ? '+' : ''}${originSemi} st · ${originFreq}Hz`;
  document.getElementById('wfm-modv').textContent=p.mod+'%';
  document.getElementById('wfm-fbv').textContent=p.fb+'%';
  document.getElementById('wfm-note').textContent=wfmDescribe(p);
}
function wfmTone(p, when=0){
  const ctx=ac(), t=ctx.currentTime+when;
  const base = wfmOriginFreq(p.origin);
  const out=ctx.createGain(); out.connect(ctx.destination);
  out.gain.setValueAtTime(0.001,t);
  out.gain.linearRampToValueAtTime(0.32,t+0.02);
  out.gain.exponentialRampToValueAtTime(0.001,t+0.8);
  const sh=ctx.createWaveShaper(); sh.curve=wDistCurve(p.fb/100); sh.oversample='2x';
  const car=ctx.createOscillator(); car.type='sine'; car.frequency.value=base;
  const mod=ctx.createOscillator(); mod.type='sine'; mod.frequency.value=base*p.ratio;
  const mg=ctx.createGain(); mg.gain.value=(p.mod/100)*260;
  mod.connect(mg); mg.connect(car.frequency);
  car.connect(sh); sh.connect(out);
  mod.start(t); car.start(t);
  mod.stop(t+0.85); car.stop(t+0.85);
}
function wfmPlay(){ wfmTone(wfmGet(),0); }
function wfmPreset(name){
  const p = {
    clean:{ ratio:20,origin:50,mod:20,fb:10 },
    metal:{ ratio:47,origin:58,mod:55,fb:20 },
    rough:{ ratio:31,origin:45,mod:80,fb:70 },
  }[name];
  if(!p) return;
  document.getElementById('wfm-ratio').value=String(p.ratio);
  const originEl = document.getElementById('wfm-origin');
  if (originEl) originEl.value=String(p.origin);
  document.getElementById('wfm-mod').value=String(p.mod);
  document.getElementById('wfm-fb').value=String(p.fb);
  wfmUpdate();
}
function wfmStore(slot){
  if(slot==='a') wfmA = wfmGet();
  if(slot==='b') wfmB = wfmGet();
  document.getElementById('wfm-note').textContent = tr(
    `guardado ${slot.toUpperCase()} · usa A/B para comparar en contexto`,
    `saved ${slot.toUpperCase()} · use A/B to compare in context`,
  );
}
function wfmPlayAB(){
  if(!wfmA || !wfmB){ document.getElementById('wfm-note').textContent=tr('guarda A y B primero','save A and B first'); return; }
  wfmTone(wfmA,0); wfmTone(wfmB,1.0);
  document.getElementById('wfm-note').textContent=tr('A primero, B después · decide por función en mezcla','A first, B second · decide by function in the mix');
}

/* ── 9. LFO LAB ────────────────────────────────────────── */
let wlfoType='sine', wlfoRun=false, wlfoCarrier=null, wlfoLfo=null, wlfoGain=null, wlfoFilter=null, wlfoRandTimer=null, wlfoAnim=null;
function wlfoWaveValue(type, phase){
  if(type==='sine') return Math.sin(phase);
  if(type==='triangle') return 2*Math.asin(Math.sin(phase))/Math.PI;
  if(type==='square') return Math.sin(phase)>=0?1:-1;
  return 0;
}
function wlfoDraw(){
  const cv=document.getElementById('wlfo-canvas'); if(!cv) return;
  cv.width=cv.clientWidth||600;
  const ctx=cv.getContext('2d'), W=cv.width, H=cv.height;
  ctx.clearRect(0,0,W,H);
  ctx.strokeStyle='#ff5500'; ctx.lineWidth=2;
  ctx.beginPath();
  let lastRand=0;
  for(let i=0;i<W;i++){
    const ph=(i/W)*Math.PI*4;
    if(wlfoType==='random' && i%24===0) lastRand=Math.random()*2-1;
    const v = wlfoType==='random' ? lastRand : wlfoWaveValue(wlfoType, ph);
    const y=H/2 - v*(H*0.35);
    i===0?ctx.moveTo(i,y):ctx.lineTo(i,y);
  }
  ctx.stroke();
  if(wlfoRun) wlfoAnim=requestAnimationFrame(wlfoDraw);
}
function wlfoShape(type){
  wlfoType=type;
  ['sine','tri','square','rand'].forEach(id=>{
    const b=document.getElementById('wlfo-'+id);
    if(!b) return;
    b.className='w-btn inactive';
  });
  const map={ sine:'wlfo-sine',triangle:'wlfo-tri',square:'wlfo-square',random:'wlfo-rand' };
  const el=document.getElementById(map[type]); if(el) el.className='w-btn active';
  wlfoUpdate();
}
function wlfoUpdate(){
  const rate=+document.getElementById('wlfo-rate').value/10;
  const dep=+document.getElementById('wlfo-depth').value;
  document.getElementById('wlfo-ratev').textContent=rate.toFixed(1)+'Hz';
  document.getElementById('wlfo-depthv').textContent=dep+'%';
  const dest=document.getElementById('wlfo-dest').value;
  const msg = dest==='pitch'
    ? tr('pitch: usa profundidad baja para inestabilidad controlada', 'pitch: keep depth low for controlled instability')
    : dest==='amp'
      ? tr('amp: tremolo rítmico. evita profundidad extrema si pierde groove', 'amp: rhythmic tremolo. avoid extreme depth if groove is lost')
      : tr('timbre: ideal para pads en movimiento lento', 'timbre: ideal for slowly moving pads');
  document.getElementById('wlfo-note').textContent = msg;
  if(!wlfoRun) wlfoDraw();
}
function wlfoApplyRandom(dest, depth, rate){
  clearInterval(wlfoRandTimer);
  const stepMs=Math.max(80, 1000/rate);
  wlfoRandTimer=setInterval(()=>{
    const v=Math.random()*2-1;
    const now=ac().currentTime;
    if(dest==='filter') wlfoFilter.frequency.linearRampToValueAtTime(900 + v*depth*12, now+0.05);
    if(dest==='pitch') wlfoCarrier.frequency.linearRampToValueAtTime(220 + v*depth*0.4, now+0.05);
    if(dest==='amp') wlfoGain.gain.linearRampToValueAtTime(0.22 + v*depth*0.002, now+0.05);
  }, stepMs);
}
function wlfoToggle(){
  const btn=document.getElementById('wlfo-toggle');
  if(!wlfoRun){
    const ctx=ac();
    const rate=+document.getElementById('wlfo-rate').value/10;
    const depth=+document.getElementById('wlfo-depth').value;
    const dest=document.getElementById('wlfo-dest').value;
    wlfoCarrier=ctx.createOscillator(); wlfoCarrier.type='sawtooth'; wlfoCarrier.frequency.value=220;
    wlfoFilter=ctx.createBiquadFilter(); wlfoFilter.type='lowpass'; wlfoFilter.frequency.value=1100;
    wlfoGain=ctx.createGain(); wlfoGain.gain.value=0.22;
    wlfoCarrier.connect(wlfoFilter); wlfoFilter.connect(wlfoGain); wlfoGain.connect(ctx.destination);
    if(wlfoType!=='random'){
      wlfoLfo=ctx.createOscillator(); wlfoLfo.type=wlfoType; wlfoLfo.frequency.value=rate;
      const mg=ctx.createGain();
      if(dest==='filter'){ mg.gain.value=depth*12; wlfoLfo.connect(mg); mg.connect(wlfoFilter.frequency); }
      if(dest==='pitch'){ mg.gain.value=depth*0.4; wlfoLfo.connect(mg); mg.connect(wlfoCarrier.frequency); }
      if(dest==='amp'){ mg.gain.value=depth*0.002; mg.connect(wlfoGain.gain); wlfoLfo.connect(mg); }
      wlfoLfo.start();
    } else {
      wlfoApplyRandom(dest, depth, rate);
    }
    wlfoCarrier.start();
    wlfoRun=true;
    btn.textContent='■ stop';
    wlfoDraw();
  } else {
    if(wlfoCarrier) wlfoCarrier.stop();
    if(wlfoLfo) wlfoLfo.stop();
    wlfoRun=false;
    wlfoCarrier=null; wlfoLfo=null;
    clearInterval(wlfoRandTimer);
    cancelAnimationFrame(wlfoAnim);
    btn.textContent=tr('▶ escuchar','▶ listen');
    wlfoDraw();
  }
}
function wlfoOneShot(withLfo, when=0){
  const ctx=ac(), t=ctx.currentTime+when;
  const rate=+document.getElementById('wlfo-rate').value/10;
  const depth=+document.getElementById('wlfo-depth').value;
  const dest=document.getElementById('wlfo-dest').value;
  const o=ctx.createOscillator(); o.type='sawtooth'; o.frequency.value=220;
  const f=ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=1000;
  const g=ctx.createGain(); g.gain.setValueAtTime(0.001,t); g.gain.linearRampToValueAtTime(0.22,t+0.03); g.gain.exponentialRampToValueAtTime(0.001,t+0.45);
  o.connect(f); f.connect(g); g.connect(ctx.destination);
  if(withLfo){
    if(wlfoType!=='random'){
      const l=ctx.createOscillator(); l.type=wlfoType; l.frequency.value=rate;
      const mg=ctx.createGain();
      if(dest==='filter'){ mg.gain.value=depth*10; l.connect(mg); mg.connect(f.frequency); }
      if(dest==='pitch'){ mg.gain.value=depth*0.35; l.connect(mg); mg.connect(o.frequency); }
      if(dest==='amp'){ mg.gain.value=depth*0.0018; l.connect(mg); mg.connect(g.gain); }
      l.start(t); l.stop(t+0.5);
    } else {
      for(let i=0;i<3;i++){
        const v=Math.random()*2-1, tt=t+i*0.14;
        if(dest==='filter') f.frequency.setValueAtTime(900+v*depth*10,tt);
        if(dest==='pitch') o.frequency.setValueAtTime(220+v*depth*0.35,tt);
        if(dest==='amp') g.gain.setValueAtTime(Math.max(0.03,0.2+v*depth*0.0018),tt);
      }
    }
  }
  o.start(t); o.stop(t+0.48);
}
function wlfoAB(){
  wlfoOneShot(false,0);
  wlfoOneShot(true,0.65);
  document.getElementById('wlfo-note').textContent=tr('A/B: primero sin LFO, luego con LFO','A/B: first without LFO, then with LFO');
}

/* ── 10. FX BLIND ──────────────────────────────────────── */
let wfxMap = ['delay','phone','nitro'];
function wfxShuffle(){
  const pool=['delay','phone','nitro'];
  wfxMap = pool.sort(()=>Math.random()-0.5).slice(0,3);
  document.getElementById('wfx-note').textContent=tr('nuevo orden cargado. escucha A/B/C y decide antes de revelar.','new order loaded. listen to A/B/C and decide before reveal.');
}
function wfxVoice(type, when=0){
  const ctx=ac(), t=ctx.currentTime+when;
  const o=ctx.createOscillator(); o.type='sawtooth';
  const g=ctx.createGain(); g.gain.setValueAtTime(0.001,t);
  g.gain.linearRampToValueAtTime(0.22,t+0.02);
  g.gain.exponentialRampToValueAtTime(0.001,t+0.7);
  o.frequency.setValueAtTime(220,t);
  o.frequency.setValueAtTime(277,t+0.22);
  o.frequency.setValueAtTime(330,t+0.44);
  let node = o;
  if(type==='delay'){
    const d=ctx.createDelay(); d.delayTime.value=0.18;
    const fb=ctx.createGain(); fb.gain.value=0.35;
    d.connect(fb); fb.connect(d);
    const mix=ctx.createGain(); mix.gain.value=0.35;
    node.connect(d); d.connect(mix); mix.connect(g);
  } else if(type==='phone'){
    const bp=ctx.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=1400; bp.Q.value=1.4;
    node.connect(bp); node=bp;
  } else if(type==='nitro'){
    const sh=ctx.createWaveShaper(); sh.curve=wDistCurve(0.75); sh.oversample='2x';
    node.connect(sh); node=sh;
  }
  node.connect(g); g.connect(ctx.destination);
  o.start(t); o.stop(t+0.72);
}
function wfxPlay(slot){
  const idx = { a:0,b:1,c:2 }[slot];
  if(idx===undefined) return;
  wfxVoice(wfxMap[idx],0);
  document.getElementById('wfx-note').textContent=tr('escuchando ','listening to ')+slot.toUpperCase()+tr(' · compara por función, no por volumen',' · compare by function, not by volume');
}
function wfxReveal(){
  document.getElementById('wfx-note').textContent=tr('revelado','revealed')+`: A=${wfxMap[0]} · B=${wfxMap[1]} · C=${wfxMap[2]}`;
}

/* ── 11. SEQUENCER LAB ─────────────────────────────────── */
function wslRead(side){
  return {
    engine: document.getElementById('wsl-eng-'+side).value,
    seq: document.getElementById('wsl-seq-'+side).value,
  };
}
function wslVoice(engine, freq, t, dur=0.16){
  const ctx=ac();
  const g=ctx.createGain(); g.connect(ctx.destination);
  g.gain.setValueAtTime(0.001,t);
  g.gain.linearRampToValueAtTime(engine==='string'?0.18:0.22,t+0.01);
  g.gain.exponentialRampToValueAtTime(0.001,t+dur);
  if(engine==='fm'){
    const car=ctx.createOscillator(), mod=ctx.createOscillator(), mg=ctx.createGain();
    car.type='sine'; mod.type='sine'; car.frequency.value=freq; mod.frequency.value=freq*2.1; mg.gain.value=120;
    mod.connect(mg); mg.connect(car.frequency); car.connect(g);
    mod.start(t); car.start(t); mod.stop(t+dur); car.stop(t+dur);
    return;
  }
  const o=ctx.createOscillator();
  if(engine==='drwave') o.type='sawtooth';
  if(engine==='string') o.type='triangle';
  o.frequency.value=freq;
  if(engine==='drwave'){
    const f=ctx.createBiquadFilter(); f.type='lowpass'; f.frequency.value=1800;
    o.connect(f); f.connect(g);
  } else {
    o.connect(g);
  }
  o.start(t); o.stop(t+dur);
}
function wslPattern(seq){
  const base=[0,2,3,5,7,5,3,2];
  if(seq==='pattern') return base;
  if(seq==='arp') return [0,3,7,3,0,3,7,10];
  return [0,2,3,2,7,5,3,2];
}
function wslTiming(seq){
  if(seq==='pattern') return [0,0.16,0.32,0.48,0.64,0.8,0.96,1.12];
  if(seq==='arp') return [0,0.12,0.24,0.36,0.48,0.6,0.72,0.84];
  return [0,0.15,0.34,0.49,0.66,0.82,1.03,1.21];
}
function wslPlay(side){
  const cfg=wslRead(side);
  const notes=wslPattern(cfg.seq), times=wslTiming(cfg.seq);
  const base=196;
  times.forEach((dt,i)=>{
    const semi=notes[i];
    const freq=base*Math.pow(2,semi/12);
    wslVoice(cfg.engine, freq, ac().currentTime+dt, cfg.seq==='arp'?0.12:0.17);
  });
  document.getElementById('wsl-note').textContent=`${side.toUpperCase()}: ${cfg.engine} + ${cfg.seq}${tr(' · compara carácter/groove',' · compare character/groove')}`;
}
function wslSwapEngines(){
  const a=document.getElementById('wsl-eng-a'), b=document.getElementById('wsl-eng-b');
  const tmp=a.value; a.value=b.value; b.value=tmp; wslUpdate();
}
function wslSwapSeq(){
  const a=document.getElementById('wsl-seq-a'), b=document.getElementById('wsl-seq-b');
  const tmp=a.value; a.value=b.value; b.value=tmp; wslUpdate();
}
function wslUpdate(){
  const a=wslRead('a'), b=wslRead('b');
  document.getElementById('wsl-note').textContent=`A=${a.engine}/${a.seq} · B=${b.engine}/${b.seq}${tr(' · evalúa cuál funciona mejor en contexto',' · evaluate which works better in context')}`;
}

/* ── 12. INPUT / RESAMPLING MAP ───────────────────────── */
function wrsUpdate(){
  const lang = widgetLang();
  const src=document.getElementById('wrs-src').value;
  const goal=document.getElementById('wrs-goal').value;
  const dst=document.getElementById('wrs-dst').value;
  const srcTxt = (lang === 'en'
    ? { mic:'internal mic', line:'line-in', tape:'internal tape mix', track:'specific track' }
    : (lang === 'ja'
      ? { mic:'internal mic', line:'line-in', tape:'Tapeの内部ミックス', track:'特定トラック' }
      : { mic:'mic interno', line:'line-in', tape:'mix interno del tape', track:'pista específica' }))[src];
  const goalTxt = (lang === 'en'
    ? { texture:'create texture', compact:'compact layers', reuse:'recycle material' }
    : (lang === 'ja'
      ? { texture:'テクスチャを作る', compact:'レイヤーを圧縮する', reuse:'素材を再利用する' }
      : { texture:'crear textura', compact:'compactar capas', reuse:'reciclar material' }))[goal];
  const dstTxt = (lang === 'en'
    ? { drum:'Drum slot', synth:'new synth/sampler material', tape:'new tape track' }
    : (lang === 'ja'
      ? { drum:'Drumスロット', synth:'新しいsynth/sampler素材', tape:'新しいTapeトラック' }
      : { drum:'slot Drum', synth:'nuevo material de synth/sampler', tape:'nueva pista de tape' }))[dst];
  let hint=tr('graba corto, trim al ataque y compara antes/después.','record short, trim the attack, and compare before/after.');
  if(goal==='compact') hint=tr('imprime capas que ya funcionan para liberar pistas y seguir arreglando.','print layers that already work to free tracks and keep arranging.');
  if(src==='line' || src==='mic') hint=tr('ajusta nivel de entrada antes de grabar para evitar clipping o ruido débil.','set input level before recording to avoid clipping or weak/noisy signal.');
  if(src==='tape' || src==='track') hint=tr('resample interno: ideal para congelar textura irrepetible y reusarla.','internal resample: ideal to freeze an unrepeatable texture and reuse it.');
  document.getElementById('wrs-plan').innerHTML =
    `<strong style="color:var(--ink)">${tr('flujo recomendado:','recommended flow:')}</strong> ${srcTxt} → ${goalTxt} → ${dstTxt}.<br>${hint}`;
}
function wrsExercises(){
  const lang = widgetLang();
  const ex = lang === 'en'
    ? [
      'exercise 1: resample an internal 8-bar texture and turn it into a playable pad.',
      'exercise 2: record 5-10 s from line/mic and use it as a percussive element.',
      'exercise 3: take one tape layer and recycle it into new material for 4 bars.',
    ]
    : (lang === 'ja'
      ? [
        '演習1: 8小節の内部テクスチャをresampleし、演奏できるpadに変換する。',
        '演習2: line/micから5〜10秒録音し、パーカッシブ要素として使う。',
        '演習3: Tapeの1レイヤーを新しい4小節素材に再利用する。',
      ]
      : [
        'ejercicio 1: resamplea una textura interna de 8 compases y conviértela en pad tocable.',
        'ejercicio 2: graba 5-10 s por line/mic y úsalo como elemento percusivo.',
        'ejercicio 3: toma una capa del tape y recíclala en material nuevo para 4 compases.',
      ]);
  document.getElementById('wrs-plan').innerHTML += '<br><br><strong style="color:var(--ink)">'+ex[Math.floor(Math.random()*ex.length)]+'</strong>';
}

/* ── 13. MIX HELPER ───────────────────────────────────── */
function wmxUpdate(){
  const front=+document.getElementById('wmx-front').value;
  const rev=+document.getElementById('wmx-rev').value;
  const low=+document.getElementById('wmx-low').value;
  const mid=+document.getElementById('wmx-mid').value;
  const drive=+document.getElementById('wmx-drive').value;
  document.getElementById('wmx-frontv').textContent=front+'%';
  document.getElementById('wmx-revv').textContent=rev+'%';
  document.getElementById('wmx-midv').textContent=mid+'%';
  document.getElementById('wmx-drivev').textContent=drive+'%';
  let lowTxt=tr('equilibrado','balanced');
  if(low<35) lowTxt=tr('kick domina','kick dominates');
  if(low>65) lowTxt=tr('bajo domina','bass dominates');
  document.getElementById('wmx-lowv').textContent=lowTxt;
  const tips=[];
  if(front>65 && rev>55) tips.push(tr('si el foco debe ir delante, baja send/reverb de esa pista.','if the focus should be upfront, lower send/reverb on that track.'));
  if(mid>70) tips.push(tr('rango medio cargado: separa por octava o simplifica una capa.','midrange overloaded: separate by octave or simplify one layer.'));
  if(drive>55) tips.push(tr('drive alto: revisa fatiga y clipping en pasajes densos.','high drive: check fatigue and clipping in dense passages.'));
  if(low<30 || low>70) tips.push(tr('kick/bajo desbalanceados: alterna roles o ajusta nivel/registro.','kick/bass imbalance: alternate roles or adjust level/register.'));
  if(!tips.length) tips.push(tr('balance usable. haz A/B y cambia solo una variable por vez.','usable balance. do A/B and change only one variable at a time.'));
  document.getElementById('wmx-note').textContent=tips.join(' ');
}

/* ── 14. EXPORT ROUTER ────────────────────────────────── */
function wexUpdate(){
  const checks=['balance','clip','tails','trans','gaps','bass'];
  const done=checks.filter(k=>document.getElementById('wex-'+k).checked);
  const missing=checks.filter(k=>!document.getElementById('wex-'+k).checked);
  const pr=document.getElementById('wex-prio').value;
  let route=tr('ruta 1 · terminar dentro del OP-1 Field','route 1 · finish inside the OP-1 Field');
  if(pr==='perf' && done.length>=4) route=tr('ruta 2 · mixdown estéreo/performance final','route 2 · stereo mixdown/final performance');
  if(pr==='edit' || done.length<4) route=tr('ruta 3 · exportar stems para terminar fuera','route 3 · export stems to finish outside');
  if(pr==='fast' && done.length>=5) route=tr('ruta 1 · cerrar dentro del OP-1 Field (rápido y sólido)','route 1 · close inside the OP-1 Field (fast and solid)');
  const missMap={
    balance:'balance',
    clip:'clipping',
    tails:tr('colas de reverb','reverb tails'),
    trans:tr('transiciones','transitions'),
    gaps:tr('huecos','gaps'),
    bass:tr('bajo','bass'),
  };
  const missTxt=missing.length?(tr('pendiente: ','pending: ')+missing.map(m=>missMap[m]).join(', ')):tr('checklist completo.','checklist complete.');
  document.getElementById('wex-result').innerHTML =
    `<strong style="color:var(--ink)">${tr('sugerencia:','suggestion:')}</strong> ${route}.<br>${missTxt}`;
}

/* ── 15. ANATOMY MAP ──────────────────────────────────── */
const wanData = {
  es: {
    synth: {
      title: 'Synth — T1/T2/T3/T4 = engine/envelope/FX/LFO',
      body: 'Ochre/Blue/Gray controlan el engine activo. Orange ajusta volumen del instrumento. Shift en encoders abre ADSR.',
      tip: 'acción: toca una nota fija y gira un encoder por vez para aislar causa-efecto.',
    },
    drum: {
      title: 'Drum — slots de sample y edición rápida',
      body: 'Ochre y Blue ajustan start/end. Gray afina el sample. Orange controla volumen del instrumento activo.',
      tip: 'acción: en un solo slot, mueve start/end y decide si el sample funciona mejor corto o largo.',
    },
    tape: {
      title: 'Tape — grabar, navegar, editar takes',
      body: 'Blue hace scrubbing del cabezal. 1–4 seleccionan pista activa. Lift/Drop/Split editan material en la cinta.',
      tip: 'acción: haz lift de un take corto, mueve cabezal y haz drop para validar el flujo.',
    },
    mixer: {
      title: 'Mixer — jerarquía y espacio',
      body: 'Ochre volumen de pista, Blue paneo, Gray send, Orange master. Shift abre controles globales del bus.',
      tip: 'acción: baja una pista de fondo 3–5 puntos y comprueba si el foco principal se entiende mejor.',
    },
  },
  en: {
    synth: {
      title: 'Synth — T1/T2/T3/T4 = engine/envelope/FX/LFO',
      body: 'Ochre/Blue/Gray control the active engine. Orange sets instrument volume. Shift on encoders opens ADSR.',
      tip: 'action: hold one note and move one encoder at a time to isolate cause/effect.',
    },
    drum: {
      title: 'Drum — sample slots and fast edit',
      body: 'Ochre and Blue adjust start/end. Gray tunes the sample. Orange controls active instrument volume.',
      tip: 'action: on one slot, move start/end and decide whether the sample works better short or long.',
    },
    tape: {
      title: 'Tape — record, navigate, edit takes',
      body: 'Blue scrubs the head. 1–4 select active track. Lift/Drop/Split edit material on tape.',
      tip: 'action: lift one short take, move the head, and drop it to validate the full edit flow.',
    },
    mixer: {
      title: 'Mixer — hierarchy and space',
      body: 'Ochre track volume, Blue pan, Gray send, Orange master. Shift opens global bus controls.',
      tip: 'action: lower one background layer by 3–5 points and check if the main focus reads better.',
    },
  },
  ja: {
    synth: {
      title: 'Synth — T1/T2/T3/T4 = engine/envelope/FX/LFO',
      body: 'Ochre/Blue/Grayは現在のengineを操作。Orangeはinstrument volume。encoder上のShiftでADSRを開く。',
      tip: 'アクション: 1音を固定して、encoderを1つずつ動かし因果を確認。',
    },
    drum: {
      title: 'Drum — sampleスロットと高速編集',
      body: 'OchreとBlueでstart/end。Grayでsampleのピッチ調整。Orangeで現在instrumentのvolume。',
      tip: 'アクション: 1スロットだけでstart/endを動かし、短い/長いどちらが機能するか判断。',
    },
    tape: {
      title: 'Tape — 録音・移動・take編集',
      body: 'Blueでヘッドをscrub。1–4でアクティブtrack選択。Lift/Drop/SplitでTape素材を編集。',
      tip: 'アクション: 短いtakeをliftし、ヘッドを動かしてdropして編集フローを確認。',
    },
    mixer: {
      title: 'Mixer — 階層と空間',
      body: 'Ochreはtrack volume、Blueはpan、Grayはsend、Orangeはmaster。Shiftでbus全体の操作。',
      tip: 'アクション: 背景レイヤーを3–5下げて、主役が前に出るか確認。',
    },
  },
};
function wanSet(mode){
  const lang = widgetLang();
  const set = wanData[lang] || wanData.es;
  const data = set[mode] || set.synth;
  ['synth','drum','tape','mixer'].forEach((id)=>{
    const el = document.getElementById('wan-'+id);
    if(!el) return;
    el.className = 'w-btn ' + (id===mode ? 'active' : 'inactive');
  });
  const t = document.getElementById('wan-title');
  const b = document.getElementById('wan-body');
  const tip = document.getElementById('wan-tip');
  if(t) t.textContent = data.title;
  if(b) b.textContent = data.body;
  if(tip) tip.textContent = data.tip;
}
function wanInit(){ if(document.getElementById('wan-title')) wanSet('synth'); }

/* ── 16. WORKFLOW 90 ──────────────────────────────────── */
function wwfPhase(min){
  const phases = [
    [0,5, tr('setup (0–5): BPM, tape base y contexto limpio.','setup (0–5): BPM, base tape, clean context.')],
    [5,20, tr('drums (5–20): groove principal en pista 1.','drums (5–20): main groove on track 1.')],
    [20,35, tr('bajo (20–35): función armónica + pegada.','bass (20–35): harmonic role + punch.')],
    [35,50, tr('melodía (35–50): motivo claro, no sobreescribir.','melody (35–50): clear motif, avoid overfilling.')],
    [50,65, tr('textura (50–65): movimiento sin tapar foco.','texture (50–65): movement without masking focus.')],
    [65,80, tr('mezcla (65–80): jerarquía y espacio estéreo.','mix (65–80): hierarchy and stereo space.')],
    [80,91, tr('export (80–90): decide ruta y cierra versión.','export (80–90): pick route and close version.')],
  ];
  return phases.find(([a,b])=>min>=a&&min<b)?.[2] || phases[0][2];
}
function wwfUpdate(){
  const slider = document.getElementById('wwf-min');
  if(!slider) return;
  const min = +slider.value;
  const minLbl = document.getElementById('wwf-minv');
  const stage = document.getElementById('wwf-stage');
  if(minLbl) minLbl.textContent = String(min);
  if(stage) stage.textContent = tr('fase: ','stage: ') + wwfPhase(min);
  const checks = ['wwf-c1','wwf-c2','wwf-c3','wwf-c4','wwf-c5','wwf-c6','wwf-c7'];
  const done = checks.filter((id)=>document.getElementById(id)?.checked).length;
  const progress = document.getElementById('wwf-progress');
  if(progress) progress.textContent = tr(`${done}/7 fases completadas.`, `${done}/7 stages completed.`);
}
function wwfReset(){
  ['wwf-c1','wwf-c2','wwf-c3','wwf-c4','wwf-c5','wwf-c6','wwf-c7'].forEach((id)=>{
    const el = document.getElementById(id); if(el) el.checked=false;
  });
  const slider = document.getElementById('wwf-min');
  if(slider) slider.value='0';
  wwfUpdate();
}

/* ── 17. CONNECTION MATRIX ─────────────────────────────── */
function wcmUpdate(){
  const path = document.getElementById('wcm-path');
  const goal = document.getElementById('wcm-goal');
  const dev = document.getElementById('wcm-dev');
  if(!path || !goal || !dev) return;
  const devices = +dev.value;
  const devLbl = document.getElementById('wcm-devv');
  if(devLbl) devLbl.textContent = String(devices);
  let score = ({ usb_host:1, pulse:2, ble:3 }[path.value] || 2);
  if(goal.value==='record') score += (path.value==='ble'?2:path.value==='pulse'?1:0);
  if(goal.value==='live') score += (path.value==='ble'?1:0);
  if(devices>=3) score += 1;
  if(devices>=4 && path.value==='ble') score += 1;
  score = Math.max(1, Math.min(5, score));
  let risk = tr('verde · estable para grabar.','green · stable for recording.');
  let rec = tr('recomendación: valida play/stop dos veces y graba.',
    'recommendation: validate play/stop twice, then record.');
  if(score===3){
    risk = tr('amarillo · útil para jam, valida antes de toma final.',
      'yellow · good for jams, validate before final take.');
    rec = tr('recomendación: haz test de 16 compases y prepara fallback cableado.',
      'recommendation: run a 16-bar test and keep a wired fallback ready.');
  } else if(score>=4){
    risk = tr('rojo · evita toma final en esta ruta.',
      'red · avoid final take on this route.');
    rec = tr('recomendación: cambia a USB host o reduce dispositivos antes de grabar.',
      'recommendation: switch to USB host or reduce device count before recording.');
  }
  const riskEl = document.getElementById('wcm-risk');
  const noteEl = document.getElementById('wcm-note');
  if(riskEl) riskEl.textContent = tr('riesgo: ','risk: ') + risk;
  if(noteEl) noteEl.textContent = rec;
}

/* ── 18. PRE-PERFORMANCE CHECK ────────────────────────── */
function wpfUpdate(){
  const mode = document.getElementById('wpf-mode');
  if(!mode) return;
  const checks = [
    ['wpf-fm', tr('canal FM libre','FM channel free')],
    ['wpf-level', tr('nivel de salida estable','output level stable')],
    ['wpf-sync', tr('sync validado','sync validated')],
    ['wpf-lat', tr('latencia aceptable','latency acceptable')],
    ['wpf-fallback', tr('fallback cableado listo','wired fallback ready')],
  ];
  const done = checks.filter(([id])=>document.getElementById(id)?.checked);
  const missing = checks.filter(([id])=>!document.getElementById(id)?.checked).map(([,label])=>label);
  let msg = tr(
    `checklist: ${done.length}/5. Pendiente: ${missing.join(', ') || 'nada'}.`,
    `checklist: ${done.length}/5. Pending: ${missing.join(', ') || 'none'}.`,
  );
  if(done.length===5){
    msg = mode.value==='capture'
      ? tr('listo para captura final. Haz una pasada completa y exporta sin tocar más parámetros.',
          'ready for final capture. Run one full pass and export without extra tweaks.')
      : tr('listo para performance. Mantén fallback cableado disponible durante la sesión.',
          'ready for performance. Keep the wired fallback available during the session.');
  } else if(missing.includes(tr('sync validado','sync validated')) || missing.includes(tr('latencia aceptable','latency acceptable'))){
    msg += ' ' + tr('sugerencia: prioriza ruta cableada/USB antes de seguir.',
      'suggestion: prioritize wired/USB route before continuing.');
  }
  const out = document.getElementById('wpf-status');
  if(out) out.textContent = msg;
}
function wpfReset(){
  ['wpf-fm','wpf-level','wpf-sync','wpf-lat','wpf-fallback'].forEach((id)=>{
    const el=document.getElementById(id); if(el) el.checked=false;
  });
  const mode = document.getElementById('wpf-mode');
  if(mode) mode.value='performance';
  wpfUpdate();
}

document.addEventListener('DOMContentLoaded', ()=>{
  wtReset();
  wfmUpdate();
  wlfoUpdate();
  wlfoDraw();
  wfxShuffle();
  wslUpdate();
  wrsUpdate();
  wmxUpdate();
  wexUpdate();
  wanInit();
  wwfUpdate();
  wcmUpdate();
  wpfUpdate();
});

function reinitWidgetsAfterModuleHydration() {
  ws2CleanupDraggables();
  if (document.getElementById('wm-bpm')) {
    wmUpdate();
    wmSwing(0);
  }
  if (document.getElementById('wi-kbd')) wiBuildKbd();
  if (document.getElementById('wa-canvas')) waDrawAndLabel();
  if (document.getElementById('ws-grid')) wsRender();
  if (document.getElementById('ww-canvas')) wwDrawStatic();

  if (document.getElementById('ws2-field')) {
    ['kick','bajo','tex','mel'].forEach((k) => ws2MakeDraggable(k, k));
    setTimeout(() => { ws2Reset(); }, 80);
  }

  if (document.getElementById('wt-wrap')) wtReset();
  if (document.getElementById('wfm-ratio')) wfmUpdate();
  if (document.getElementById('wlfo-canvas')) {
    wlfoUpdate();
    wlfoDraw();
  }
  if (document.getElementById('wfx-note')) wfxShuffle();
  if (document.getElementById('wsl-note')) wslUpdate();
  if (document.getElementById('wrs-plan')) wrsUpdate();
  if (document.getElementById('wmx-note')) wmxUpdate();
  if (document.getElementById('wex-result')) wexUpdate();
  if (document.getElementById('wan-title')) wanInit();
  if (document.getElementById('wwf-stage')) wwfUpdate();
  if (document.getElementById('wcm-risk')) wcmUpdate();
  if (document.getElementById('wpf-status')) wpfUpdate();
}

document.addEventListener('course:modules-hydrated', () => {
  setTimeout(reinitWidgetsAfterModuleHydration, 0);
});
