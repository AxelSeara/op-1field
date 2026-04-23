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

/* ── 1. METRONOMO ───────────────────────────────────────── */
const wmGenres = [
  [40,60,'drone · ambient extremo'],
  [60,80,'hip-hop lento · lo-fi · trap'],
  [80,100,'hip-hop mid-tempo · experimental'],
  [100,115,'funk · soul · pop midtempo'],
  [115,130,'house · disco'],
  [130,145,'techno · trance'],
  [145,200,'drum & bass · footwork']
];
let wmBpm=85, wmSwingAmt=0, wmPlaying=false, wmTimer=null, wmBeat=0, wmNextTime=0;

function wmUpdate() {
  wmBpm = +document.getElementById('wm-bpm').value;
  document.getElementById('wm-bpmv').textContent = wmBpm;
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
const wiNotes = ['Fa','Fa#','Sol','Sol#','La','La#','Si','Do','Do#','Re','Re#','Mi',
                 'Fa','Fa#','Sol','Sol#','La','La#','Si','Do','Do#','Re','Re#','Mi'];
// black key positions by semitone index (0=Fa)
const wiIsBlack = [false,true,false,true,false,false,true,false,true,false,true,false];
const wiFreqs = [174.61,185,196,207.65,220,233.08,246.94,261.63,277.18,293.66,311.13,329.63,
                 349.23,370,392,415.30,440,466.16,493.88,523.25,554.37,587.33,622.25,659.25];
const wiIntervals = {1:'semitono',2:'tono',3:'3ª menor — oscuro',4:'3ª mayor — brillante',
  5:'4ª justa',6:'tritono — máx. tensión',7:'5ª justa — estable',8:'6ª menor',
  9:'6ª mayor',10:'7ª menor',11:'7ª mayor',12:'octava'};
let wiSel1=-1, wiSel2=-1;

function wiBuildKbd() {
  const kbd = document.getElementById('wi-kbd');
  if(!kbd) return;
  kbd.style.cssText = 'position:relative;display:flex;height:70px;';
  // 14 white keys
  const whites = [0,2,4,5,7,9,11,12,14,16,17,19,21,23];
  const blacks = {1:[0,1],3:[2,3],6:[4,5],8:[6,7],10:[8,9],13:[12,13],15:[14,15],18:[16,17],20:[19,20],22:[21,22]};
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
    if(diff===0){lbl.textContent='misma nota'; return;}
    lbl.textContent=(diff<=12?`${diff} semitonos — ${wiIntervals[diff]||''}`:' ')
      + ` · ${wiNotes[wiSel1]} + ${wiNotes[wiSel2]}`;
    wiPlayFreq(wiFreqs[wiSel1]);
    wiPlayFreq(wiFreqs[wiSel2], 0.05);
  } else {wiSel1=semi;wiSel2=-1;wiPlayFreq(wiFreqs[semi]);}
  wiHighlight();
  const lbl=document.getElementById('wi-label');
  if(wiSel2===-1) lbl.textContent=`${wiNotes[semi]} seleccionado — elige otra nota`;
}
function wiClear(){wiSel1=-1;wiSel2=-1;wiHighlight();document.getElementById('wi-label').textContent='selecciona una nota raíz y luego otra';}
function wiPlay(s1,s2){wiSel1=s1;wiSel2=s2;
  const diff=Math.abs(s2-s1);
  document.getElementById('wi-label').textContent=`${diff} semitonos — ${wiIntervals[diff]||''} · ${wiNotes[s1]} + ${wiNotes[s2]}`;
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
    perc:{a:1,d:80,s:0,r:30},
    pad:{a:150,d:200,s:80,r:800},
    pluck:{a:1,d:200,s:0,r:150},
    swell:{a:200,d:50,s:90,r:1500}
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
let wsGrid=Array.from({length:3},()=>Array(16).fill(false));
let wsSeqPlaying=false, wsSeqTimer=null, wsSeqStep=0, wsSeqBpm=85;
const wsPresets_={
  basic:[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]],
  dilla:[[1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0],[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1],[0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1]],
  house:[[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]
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
function wsClear(){wsGrid=Array.from({length:3},()=>Array(16).fill(false));wsRender();}
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
const wwDescs={
  sine:'sine — onda sinusoidal pura, sin armónicos adicionales. suave y limpia. base del vocoder.',
  square:'square — onda cuadrada. rica en armónicos impares. carácter nasal y electrónico. new wave, chiptune.',
  sawtooth:'sawtooth — diente de sierra. todos los armónicos. brillante y agresiva. el sonido substractivo más rico.',
  triangle:'triangle — similar a sine pero con armónicos impares suaves. más cálida que square.'
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
  lbl.textContent=val>=7000?'abierto':val<500?val+'Hz':Math.round(val/100)/10+'kHz';
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
    wwRunning=false; btn.textContent='▶ tocar'; btn.style.background='';
    wwDrawStatic();
  }
}
document.addEventListener('DOMContentLoaded', () => { setTimeout(wwDrawStatic,100); });

/* ── 6. STEREO FIELD ────────────────────────────────────── */
const ws2Config={
  kick:{freq:80,type:'sine',color:'#111110',pan:0,osc:null,gain:null},
  bajo:{freq:110,type:'triangle',color:'#0055cc',pan:0,osc:null,gain:null},
  tex:{freq:440,type:'sawtooth',color:'#00aa55',pan:0.6,osc:null,gain:null},
  mel:{freq:330,type:'triangle',color:'#ff5500',pan:-0.2,osc:null,gain:null}
};
let ws2Playing=false;
function ws2MakeDraggable(dotId, key) {
  const dot=document.getElementById('ws2-'+dotId);
  const field=document.getElementById('ws2-field');
  if(!dot||!field) return;
  let dragging=false, ox=0, oy=0;
  dot.addEventListener('mousedown', e=>{dragging=true; ox=e.clientX-dot.offsetLeft; oy=e.clientY-dot.offsetTop; e.preventDefault();});
  dot.addEventListener('touchstart', e=>{dragging=true; const t=e.touches[0]; ox=t.clientX-dot.offsetLeft; oy=t.clientY-dot.offsetTop; e.preventDefault();},{passive:false});
  document.addEventListener('mousemove', e=>{if(!dragging) return; ws2Move(dot, e.clientX-ox, e.clientY-oy, field, key);});
  document.addEventListener('touchmove', e=>{if(!dragging) return; const t=e.touches[0]; ws2Move(dot,t.clientX-ox,t.clientY-oy,field,key); e.preventDefault();},{passive:false});
  document.addEventListener('mouseup', ()=>dragging=false);
  document.addEventListener('touchend', ()=>dragging=false);
}
function ws2Move(dot, x, y, field, key) {
  const fw=field.clientWidth, fh=field.clientHeight;
  const cx=Math.max(16,Math.min(fw-16,x+16)), cy=Math.max(16,Math.min(fh-16,y+16));
  dot.style.left=cx+'px'; dot.style.top=cy+'px';
  const pan=(cx/fw)*2-1;
  ws2Config[key].pan=pan;
  if(ws2Config[key].panNode) ws2Config[key].panNode.pan.value=pan;
  const pct=Math.round(pan*100);
  document.getElementById('ws2-info').textContent=`${key}: ${pct===0?'centro':pct>0?'derecha +'+pct:'izquierda '+pct}`;
}
function ws2Toggle() {
  const btn=document.getElementById('ws2-play');
  if(!ws2Playing){
    const ctx=ac();
    const instruments=[
      {key:'kick',freq:80,type:'sine',vol:0.25},
      {key:'bajo',freq:110,type:'triangle',vol:0.2},
      {key:'tex',freq:330,type:'sawtooth',vol:0.08},
      {key:'mel',freq:220,type:'triangle',vol:0.15}
    ];
    instruments.forEach(({key,freq,type,vol})=>{
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
    ws2Playing=false; btn.textContent='▶ escuchar'; btn.style.background='';
  }
}
function ws2Reset() {
  const field=document.getElementById('ws2-field'); if(!field) return;
  const fw=field.clientWidth, fh=field.clientHeight;
  if(fw<40 || fh<40) return false;
  const defaults={kick:{x:fw/2,y:fh*0.25},bajo:{x:fw/2,y:fh*0.5},tex:{x:fw*0.75,y:fh*0.35},mel:{x:fw*0.35,y:fh*0.65}};
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
  wtData = Array.from({length:4}, (_,t)=>
    Array.from({length:16}, (_,i)=> (t===0 && [0,1,2,4,5,8].includes(i)) || (t===1 && [0,4,8,12].includes(i)) || (t===2 && [2,6,10,14].includes(i)) || (t===3 && [7,11,15].includes(i)))
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
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus('no hay take bajo el cabezal para hacer lift'); return; }
  wtData[wtTrackIdx][wtHeadPos] = false;
  wtClipboard = true;
  wtRender();
  wtSetStatus('lift hecho: take al portapapeles. ahora mueve cabezal y haz drop.');
}
function wtDrop() {
  if(!wtClipboard) { wtSetStatus('portapapeles vacío. haz lift primero.'); return; }
  wtData[wtTrackIdx][wtHeadPos] = true;
  wtRender();
  wtSetStatus('drop aplicado. si quieres repetir, mueve cabezal y vuelve a drop.');
}
function wtSplit() {
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus('split requiere un take existente.'); return; }
  if(wtHeadPos>=15) { wtSetStatus('no hay espacio a la derecha para split.'); return; }
  wtData[wtTrackIdx][wtHeadPos+1] = true;
  wtRender();
  wtSetStatus('split simulado: segmento dividido en dos partes contiguas.');
}
function wtClone() {
  if(!wtData[wtTrackIdx][wtHeadPos]) { wtSetStatus('elige un take para duplicar.'); return; }
  const idx = wtData[wtTrackIdx].findIndex((v,i)=>!v && i>wtHeadPos);
  if(idx===-1){ wtSetStatus('sin hueco libre a la derecha. mueve o borra antes.'); return; }
  wtData[wtTrackIdx][idx]=true;
  wtRender();
  wtSetStatus('take duplicado en la misma pista. útil para construir arreglo rápido.');
}
function wtReset() {
  wtSeed();
  const t=document.getElementById('wt-track'), h=document.getElementById('wt-head');
  if(t) t.value='0';
  if(h) h.value='0';
  wtHead();
  wtSetStatus('estado base cargado. prueba lift/drop/split en orden.');
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
  return {
    ratio: +document.getElementById('wfm-ratio').value/10,
    mod: +document.getElementById('wfm-mod').value,
    fb: +document.getElementById('wfm-fb').value
  };
}
function wfmDescribe(p){
  const ratioRounded = Math.round(p.ratio);
  const simple = Math.abs(p.ratio-ratioRounded) < 0.08 && [1,2,3,4,5,6,7,8].includes(ratioRounded);
  if(p.mod<25 && p.fb<25 && simple) return 'lectura: estable-armónico, limpio';
  if(!simple && p.mod>35) return 'lectura: inarmónico/metálico (campana útil)';
  if(p.mod>70 || p.fb>65) return 'lectura: áspero y denso, úsalo con intención';
  return 'lectura: punto intermedio, buen terreno para bajos/keys';
}
function wfmUpdate() {
  const p=wfmGet();
  document.getElementById('wfm-ratiov').textContent=p.ratio.toFixed(1);
  document.getElementById('wfm-modv').textContent=p.mod+'%';
  document.getElementById('wfm-fbv').textContent=p.fb+'%';
  document.getElementById('wfm-note').textContent=wfmDescribe(p);
}
function wfmTone(p, when=0){
  const ctx=ac(), t=ctx.currentTime+when;
  const out=ctx.createGain(); out.connect(ctx.destination);
  out.gain.setValueAtTime(0.001,t);
  out.gain.linearRampToValueAtTime(0.32,t+0.02);
  out.gain.exponentialRampToValueAtTime(0.001,t+0.8);
  const sh=ctx.createWaveShaper(); sh.curve=wDistCurve(p.fb/100); sh.oversample='2x';
  const car=ctx.createOscillator(); car.type='sine'; car.frequency.value=220;
  const mod=ctx.createOscillator(); mod.type='sine'; mod.frequency.value=220*p.ratio;
  const mg=ctx.createGain(); mg.gain.value=(p.mod/100)*260;
  mod.connect(mg); mg.connect(car.frequency);
  car.connect(sh); sh.connect(out);
  mod.start(t); car.start(t);
  mod.stop(t+0.85); car.stop(t+0.85);
}
function wfmPlay(){ wfmTone(wfmGet(),0); }
function wfmPreset(name){
  const p = {
    clean:{ratio:20,mod:20,fb:10},
    metal:{ratio:47,mod:55,fb:20},
    rough:{ratio:31,mod:80,fb:70}
  }[name];
  if(!p) return;
  document.getElementById('wfm-ratio').value=String(p.ratio);
  document.getElementById('wfm-mod').value=String(p.mod);
  document.getElementById('wfm-fb').value=String(p.fb);
  wfmUpdate();
}
function wfmStore(slot){
  if(slot==='a') wfmA = wfmGet();
  if(slot==='b') wfmB = wfmGet();
  document.getElementById('wfm-note').textContent = `guardado ${slot.toUpperCase()} · usa A/B para comparar en contexto`;
}
function wfmPlayAB(){
  if(!wfmA || !wfmB){ document.getElementById('wfm-note').textContent='guarda A y B primero'; return; }
  wfmTone(wfmA,0); wfmTone(wfmB,1.0);
  document.getElementById('wfm-note').textContent='A primero, B después · decide por función en mezcla';
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
  const map={sine:'wlfo-sine',triangle:'wlfo-tri',square:'wlfo-square',random:'wlfo-rand'};
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
    ? 'pitch: usa profundidad baja para inestabilidad controlada'
    : dest==='amp'
      ? 'amp: tremolo rítmico. evita profundidad extrema si pierde groove'
      : 'timbre: ideal para pads en movimiento lento';
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
    btn.textContent='▶ escuchar';
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
  document.getElementById('wlfo-note').textContent='A/B: primero sin LFO, luego con LFO';
}

/* ── 10. FX BLIND ──────────────────────────────────────── */
let wfxMap = ['delay','phone','nitro'];
function wfxShuffle(){
  const pool=['delay','phone','nitro'];
  wfxMap = pool.sort(()=>Math.random()-0.5).slice(0,3);
  document.getElementById('wfx-note').textContent='nuevo orden cargado. escucha A/B/C y decide antes de revelar.';
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
  const idx = {a:0,b:1,c:2}[slot];
  if(idx===undefined) return;
  wfxVoice(wfxMap[idx],0);
  document.getElementById('wfx-note').textContent='escuchando '+slot.toUpperCase()+' · compara por función, no por volumen';
}
function wfxReveal(){
  document.getElementById('wfx-note').textContent=`revelado: A=${wfxMap[0]} · B=${wfxMap[1]} · C=${wfxMap[2]}`;
}

/* ── 11. SEQUENCER LAB ─────────────────────────────────── */
function wslRead(side){
  return {
    engine: document.getElementById('wsl-eng-'+side).value,
    seq: document.getElementById('wsl-seq-'+side).value
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
  document.getElementById('wsl-note').textContent=`${side.toUpperCase()}: ${cfg.engine} + ${cfg.seq} · compara carácter/groove`;
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
  document.getElementById('wsl-note').textContent=`A=${a.engine}/${a.seq} · B=${b.engine}/${b.seq} · evalúa cuál funciona mejor en contexto`;
}

/* ── 12. INPUT / RESAMPLING MAP ───────────────────────── */
function wrsUpdate(){
  const src=document.getElementById('wrs-src').value;
  const goal=document.getElementById('wrs-goal').value;
  const dst=document.getElementById('wrs-dst').value;
  const srcTxt={mic:'mic interno',line:'line-in',tape:'mix interno del tape',track:'pista específica'}[src];
  const goalTxt={texture:'crear textura',compact:'compactar capas',reuse:'reciclar material'}[goal];
  const dstTxt={drum:'slot Drum',synth:'nuevo material de synth/sampler',tape:'nueva pista de tape'}[dst];
  let hint='graba corto, trim al ataque y compara antes/después.';
  if(goal==='compact') hint='imprime capas que ya funcionan para liberar pistas y seguir arreglando.';
  if(src==='line' || src==='mic') hint='ajusta nivel de entrada antes de grabar para evitar clipping o ruido débil.';
  if(src==='tape' || src==='track') hint='resample interno: ideal para congelar textura irrepetible y reusarla.';
  document.getElementById('wrs-plan').innerHTML =
    `<strong style="color:var(--ink)">flujo recomendado:</strong> ${srcTxt} → ${goalTxt} → ${dstTxt}.<br>${hint}`;
}
function wrsExercises(){
  const ex=[
    'ejercicio 1: resamplea una textura interna de 8 compases y conviértela en pad tocable.',
    'ejercicio 2: graba 5-10 s por line/mic y úsalo como elemento percusivo.',
    'ejercicio 3: toma una capa del tape y recíclala en material nuevo para 4 compases.'
  ];
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
  let lowTxt='equilibrado';
  if(low<35) lowTxt='kick domina';
  if(low>65) lowTxt='bajo domina';
  document.getElementById('wmx-lowv').textContent=lowTxt;
  const tips=[];
  if(front>65 && rev>55) tips.push('si el foco debe ir delante, baja send/reverb de esa pista.');
  if(mid>70) tips.push('rango medio cargado: separa por octava o simplifica una capa.');
  if(drive>55) tips.push('drive alto: revisa fatiga y clipping en pasajes densos.');
  if(low<30 || low>70) tips.push('kick/bajo desbalanceados: alterna roles o ajusta nivel/registro.');
  if(!tips.length) tips.push('balance usable. haz A/B y cambia solo una variable por vez.');
  document.getElementById('wmx-note').textContent=tips.join(' ');
}

/* ── 14. EXPORT ROUTER ────────────────────────────────── */
function wexUpdate(){
  const checks=['balance','clip','tails','trans','gaps','bass'];
  const done=checks.filter(k=>document.getElementById('wex-'+k).checked);
  const missing=checks.filter(k=>!document.getElementById('wex-'+k).checked);
  const pr=document.getElementById('wex-prio').value;
  let route='ruta 1 · terminar dentro del OP-1 Field';
  if(pr==='perf' && done.length>=4) route='ruta 2 · mixdown estéreo/performance final';
  if(pr==='edit' || done.length<4) route='ruta 3 · exportar stems para terminar fuera';
  if(pr==='fast' && done.length>=5) route='ruta 1 · cerrar dentro del OP-1 Field (rápido y sólido)';
  const missMap={
    balance:'balance',
    clip:'clipping',
    tails:'colas de reverb',
    trans:'transiciones',
    gaps:'huecos',
    bass:'bajo'
  };
  const missTxt=missing.length?('pendiente: '+missing.map(m=>missMap[m]).join(', ')):'checklist completo.';
  document.getElementById('wex-result').innerHTML =
    `<strong style="color:var(--ink)">sugerencia:</strong> ${route}.<br>${missTxt}`;
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
});

