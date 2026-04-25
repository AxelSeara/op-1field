window.CourseLocales = window.CourseLocales || {};

window.CourseLocales.es = {
  app: {
    meta: {
      title: 'OP-1 Field / curso',
    },
    header: {
      subtitle: '遊んで、間違えて、作ろう。',
      title: 'beatmaking y síntesis · desde cero',
      tags: {
        modules: 'módulos',
        practice: 'práctica',
      },
    },
    modes: {
      practice: 'práctica',
      reading: 'lectura',
    },
    lang: {
      label: 'idioma',
    },
    settings: {
      button: 'ajustes',
      title: 'ajustes',
      viewLabel: 'modo de lectura',
      firmware: 'guía para OP-1 Field firmware 1.6.5',
    },
  },
  onboarding: {
    eyebrow: 'OP-1 Field learning app',
    title: 'empieza donde tenga sentido',
    body: 'Elige tu ruta. Guardamos tu progreso local y retomamos donde lo dejaste.',
    start: 'empezar curso',
    continue: 'continuar curso',
    coreTrack: 'ruta core',
    fullCourse: 'curso completo',
  },
  sidebar: {
    progress: 'completado',
    searchPlaceholder: 'buscar módulos',
    bookmarks: 'favoritos',
    core: 'core',
    full: 'completo',
    groups: {
      theory: 'teoría',
      base: 'base',
      synthesis: 'síntesis',
      sequencers: 'secuenc.',
      production: 'producción',
      closing: 'cierre',
    },
    modules: {
      m0: 'teoría mínima',
      m1: 'tempo y metrónomo',
      m2: 'composición',
      m3: 'anatomía del OP-1',
      m4: 'el tape — primero',
      m5: 'engines · fm/dna/cluster',
      m6: 'engines · synth/drwave/...',
      m7: 'lfo',
      m8: 'efectos del OP-1',
      m9: 'percusión por síntesis',
      m10: 'secuenciadores',
      m11: 'sampler + input/resampling',
      m12: 'mezcla y masterización',
      m13: 'workflow completo',
      m14: 'OP-1 + ep–133',
      m15: 'exportar y seguir',
    },
  },
  actions: {
    previous: 'anterior',
    next: 'siguiente',
    finish: 'fin del curso',
    markReady: 'marcar listo',
    completed: 'completado ✓',
  },
  core: {
    sectionFallback: 'sección',
    bookmarkToggleTitle: 'alternar favorito',
  },
  course: {
    modules: {
      m0: `<div class="mod" id="m0">
<div class="mod-hd">
  <div class="ey">módulo 00 · teoría</div>
  <div class="mt">teoría mínima para <strong>electrónica experimental</strong></div>
  <div class="md">No necesitas solfeo ni nombres de acordes para empezar. Sí necesitas entender cómo está organizado el teclado y por qué ciertas notas funcionan juntas. Con eso, el OP-1 deja de sentirse como una ruleta.</div>
  <div class="mm-row"><div class="mm">~2.5h</div><div class="mm">OP-1 en mano</div><div class="mm">leer + tocar</div></div>
</div>

<div class="sec" id="m0-s1">
<div class="st">01 — el teclado del OP-1 Field</div>
<div class="steps">
  <div class="step"><div class="sl">base</div><div class="sb"><strong>12 notas que se repiten</strong><p>Un teclado tiene solo 12 notas distintas. Después de la 12ª vuelve a empezar pero más aguda — eso se llama octava. En el OP-1 Field tienes 24 teclas en dos octavas. Para orientarte, piensa en el patrón repetido en lugar de memorizar un extremo fijo.</p></div></div>
  <div class="step"><div class="sl">patrón</div><div class="sb"><strong>grupos de 2 y 3 teclas negras</strong><p>El patrón de negras se repite: 2 negras juntas, hueco, 3 negras juntas, hueco. En este diagrama usamos una referencia visual concreta para que ubiques rápido Do y La, pero lo importante es que el patrón 3+2 se repite dos veces.</p></div></div>
  <div class="step"><div class="sl">Do</div><div class="sb"><strong>Do es tu referencia fija</strong><p>La blanca justo a la izquierda del grupo de 2 negras es siempre Do. Hay dos grupos de 2 negras en el teclado del OP-1 — hay dos Dos. Ese es tu punto de orientación cuando te pierdas.</p></div></div>
</div>
<div class="infog">
  <div class="infog-lb">teclado OP-1 Field — referencia visual de 24 teclas</div>
  <svg viewBox="0 0 520 90" class="diag">
    <rect x="1" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="38" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="75" y="1" width="36" height="72" fill="#e8f0ff" stroke="#0055cc" stroke-width="1.5"/>
    <rect x="112" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="149" y="1" width="36" height="72" fill="#fff0eb" stroke="#ff5500" stroke-width="1.5"/>
    <rect x="186" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="223" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="260" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="297" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="334" y="1" width="36" height="72" fill="#e8f0ff" stroke="#0055cc" stroke-width="1.5"/>
    <rect x="371" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="408" y="1" width="36" height="72" fill="#fff0eb" stroke="#ff5500" stroke-width="1.5"/>
    <rect x="445" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="482" y="1" width="36" height="72" fill="#f5f4f0" stroke="#ccccc8" stroke-width="0.8"/>
    <rect x="26" y="1" width="22" height="44" fill="#111110"/>
    <rect x="63" y="1" width="22" height="44" fill="#111110"/>
    <rect x="100" y="1" width="22" height="44" fill="#111110"/>
    <rect x="174" y="1" width="22" height="44" fill="#111110"/>
    <rect x="211" y="1" width="22" height="44" fill="#111110"/>
    <rect x="285" y="1" width="22" height="44" fill="#111110"/>
    <rect x="322" y="1" width="22" height="44" fill="#111110"/>
    <rect x="359" y="1" width="22" height="44" fill="#111110"/>
    <rect x="433" y="1" width="22" height="44" fill="#111110"/>
    <rect x="470" y="1" width="22" height="44" fill="#111110"/>
    <text x="19" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Fa</text>
    <text x="56" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Sol</text>
    <text x="93" y="83" font-family="IBM Plex Mono" font-size="7" fill="#0055cc" text-anchor="middle" font-weight="600">La</text>
    <text x="130" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Si</text>
    <text x="167" y="83" font-family="IBM Plex Mono" font-size="7" fill="#ff5500" text-anchor="middle" font-weight="700">Do</text>
    <text x="204" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Re</text>
    <text x="241" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Mi</text>
    <text x="278" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Fa</text>
    <text x="315" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Sol</text>
    <text x="352" y="83" font-family="IBM Plex Mono" font-size="7" fill="#0055cc" text-anchor="middle" font-weight="600">La</text>
    <text x="389" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Si</text>
    <text x="426" y="83" font-family="IBM Plex Mono" font-size="7" fill="#ff5500" text-anchor="middle" font-weight="700">Do</text>
    <text x="463" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Re</text>
    <text x="500" y="83" font-family="IBM Plex Mono" font-size="7" fill="#888884" text-anchor="middle">Mi</text>
  </svg>
  <div class="infog-nt">Do (naranja) = referencia fija · La (azul) = raíz de la pentatónica menor · patrón 3+2 negras se repite dos veces</div>
</div>
</div>

<div class="sec" id="m0-s2">
<div class="st">02 — sostenidos, bemoles e intervalos</div>
<div class="steps">
  <div class="step"><div class="sl">nombres</div><div class="sb"><strong>sostenido y bemol — la misma tecla, dos nombres</strong><p>Las teclas negras tienen dos nombres según desde dónde las mires. Re sostenido (Re#) significa "Re subido medio paso". Re bemol (Re♭) significa "Re bajado medio paso". Son la misma tecla física — solo cambia el nombre según el contexto. Para el OP-1 son sinónimos: la negra entre Do y Re es Do# o Re♭ indistintamente.</p></div></div>
  <div class="step"><div class="sl">semitono</div><div class="sb"><strong>la distancia mínima entre teclas</strong><p>Un semitono es el paso más pequeño posible: de una tecla a la inmediatamente adyacente (blanca o negra). Contar semitonos no “fija emociones”, pero sí te da una guía auditiva reproducible para comparar combinaciones.</p></div></div>
  <div class="step"><div class="sl">3 st</div><div class="sb"><strong>3 semitonos suele percibirse más oscuro</strong><p>Toca Do y añade Re# (3 semitonos después). Muchas veces se siente más denso o melancólico que 4 semitonos. Es una tendencia útil para orientarte por oído.</p></div></div>
  <div class="step"><div class="sl">4 st</div><div class="sb"><strong>4 semitonos suele percibirse más abierto</strong><p>Do + Mi (4 semitonos). Suele sonar más luminoso en contraste con 3 semitonos. Haz A/B rápido para entrenar el oído en contexto real.</p></div></div>
  <div class="step"><div class="sl">7 st</div><div class="sb"><strong>7 semitonos suele sentirse estable</strong><p>Do + Sol (quinta justa). Suele dar una base firme y menos ambigua. Útil cuando quieres “aterrizar” una idea sin cerrarla demasiado en mayor/menor.</p></div></div>
  <div class="step"><div class="sl">6 st</div><div class="sb"><strong>6 semitonos suele aumentar la tensión</strong><p>El tritono tiende a generar fricción y expectativa de resolución. Funciona muy bien como color expresivo puntual si luego le das un “lugar” en el fraseo.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>pruébalo ahora</strong>Toca Do fijo con un dedo. Sin soltarlo, añade Re# (3 semitonos). Escucha. Ahora añade Sol (7 semitonos desde Do). Eso es un acorde menor de tres notas — el más usado en electrónica oscura. No hace falta saber su nombre para usarlo.</div></div>
</div>


<div class="widget" id="w-intervals">
  <div class="w-title">explorador de intervalos — haz clic en dos teclas</div>
  <div id="wi-kbd" class="w-kbd"></div>
  <div class="w-interval" id="wi-label">selecciona una nota raíz y luego otra</div>
  <div class="w-row" style="margin-top:10px">
    <button class="w-btn secondary" onclick="wiClear()">limpiar</button>
    <button class="w-btn inactive" onclick="wiPlay(0,3)">Do + Re# oscuro</button>
    <button class="w-btn inactive" onclick="wiPlay(0,7)">Do + Sol estable</button>
    <button class="w-btn inactive" onclick="wiPlay(0,6)">Do + Fa# tritono</button>
  </div>
</div>
<div class="sec" id="m0-s3">
<div class="st">03 — navegar el teclado</div>
<div class="steps">
  <div class="step"><div class="sl">octava</div><div class="sb"><strong>cambiar de octava — <kbd class="ar">←</kbd> <kbd class="ar">→</kbd> directamente</strong><p>En Synth mode o Drum mode, pulsa <kbd class="ar">→</kbd> para subir una octava y <kbd class="ar">←</kbd> para bajar. Sin combinaciones. La pantalla muestra en qué octava estás. Mismo patrón de dedos, distinto registro.</p></div></div>
  <div class="step"><div class="sl">rango</div><div class="sb"><strong>dónde tocar cada elemento</strong><p>El bajo vive en las octavas bajas — teclas más a la izquierda del OP-1. La melodía en octava media-alta. Si algo suena demasiado grave o demasiado fino, el primer ajuste suele ser cambiar de octava antes de cambiar de nota.</p></div></div>
  <div class="step"><div class="sl">ancla</div><div class="sb"><strong>dedo fijo en la nota base — improvisar alrededor</strong><p>Pon un dedo fijo en La (blanca entre el grupo de 3 negras y el de 2 negras, justo antes del Do). Los otros dedos exploran. La nota anclada actúa como centro de gravedad — puedes volver a ella en cualquier momento y todo reaparece en contexto.</p></div></div>
  <div class="step"><div class="sl">paralelo</div><div class="sb"><strong>mover el patrón entero — transposición sin teoría</strong><p>Si aprendes una combinación que suena bien (Do + Re# + Sol), puedes moverla entera subiendo o bajando el mismo número de semitonos. Todos los dedos en paralelo — el patrón de la mano no cambia, solo su posición. Es transposición sin saberlo.</p></div></div>
</div>
</div>

<div class="sec" id="m0-s4">
<div class="st">04 — la pentatónica menor</div>
<div class="steps">
  <div class="step"><div class="sl">hack</div><div class="sb"><strong>las 5 teclas negras ya son una pentatónica</strong><p>Las 5 teclas negras forman exactamente una pentatónica mayor. Toca solo negras con cualquier engine, en cualquier orden, a cualquier ritmo: suele sonar coherente. Es el punto de partida más rápido que existe.</p></div></div>
  <div class="step"><div class="sl">menor</div><div class="sb"><strong>La · Do · Re · Mi · Sol — más oscura, más tensa</strong><p>Empieza en La (blanca entre el grupo de 3 negras y el de 2 negras). Sube: La → Do → Re → Mi → Sol. Esas 5 notas en cualquier orden, en cualquier octava. El patrón de saltos entre ellas es 3·2·2·3·2 semitonos — esa es la "receta" para construirla desde cualquier nota base; no describe la estructura física del teclado.</p></div></div>
  <div class="step"><div class="sl">mover</div><div class="sb"><strong>la misma escala desde cualquier nota</strong><p>El patrón 3·2·2·3·2 funciona desde cualquier nota de inicio. Misma estructura, distinto color armónico. En el OP-1 no necesitas saber los nombres — reproduce el mismo patrón de saltos desde otra tecla de inicio.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>en el OP-1</strong>Empieza en teclas negras. Para algo más oscuro busca el La y toca La–Do–Re–Mi–Sol. Esas son las dos escalas que necesitas para el 80% de lo que quieres hacer.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">teclado — orientación y primeras notas — 30 min</div>
  <ul class="ex-ul">
    <li>Localiza los dos Do en el teclado (blanca a la izquierda de cada grupo de 2 negras). Sube una octava con <kbd class="ar">→</kbd> y escucha el mismo sonido más agudo.</li>
    <li>Toca Do + Re# (3 semitonos: oscuro). Luego Do + Mi (4 semitonos: brillante). Memoriza la diferencia de sensación sin saber los nombres.</li>
    <li>Pon el dedo en La (blanca entre el grupo de 3 negras y el de 2 negras). Con los otros dedos explora las teclas negras sin soltar el La. Escucha cómo La actúa como centro de gravedad.</li>
    <li>Toca solo teclas negras durante 2 minutos con cualquier engine. Sin pensar — solo escucha qué combinaciones suenan bien.</li>
    <li>Mueve el patrón de dedos que mejor suena a otra posición del teclado (sube 2 teclas blancas). Escucha cómo cambia el color armónico aunque la "forma" sea la misma.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" disabled>← anterior</button>
  <button class="btn btn-p" onclick="go(1)">siguiente →</button>
  <button class="btn btn-d" id="bd0" onclick="done(0)">marcar listo</button>
</div>
</div>`,
      m1: `<div class="mod" id="m1">
<div class="mod-hd">
  <div class="ey">módulo 01 · teoría</div>
  <div class="mt">tempo — <strong>el tiempo como instrumento</strong></div>
  <div class="md">Antes de grabar una sola nota conviene dominar el tempo. Úsalo como herramienta creativa. El OP-1 Field tiene un sistema de tempo preciso y flexible: aquí aprendes a usarlo desde el metrónomo hasta el sync MIDI.</div>
  <div class="mm-row"><div class="mm">~1.5h</div><div class="mm">OP-1 en mano</div><div class="mm">práctica física</div></div>
</div>

<div class="sec" id="m1-s1">
<div class="st">01 — qué es el tempo y por qué importa</div>
<div class="steps">
  <div class="step"><div class="sl">BPM</div><div class="sb"><strong>beats por minuto — la velocidad del pulso</strong><p>El tempo es simplemente cuántos "golpes" ocurren por minuto. 60 BPM significa un golpe por segundo — el ritmo de un corazón en reposo. 120 BPM son dos golpes por segundo. El tempo define la energía y el carácter emocional de un track antes de que suene una sola nota: 70 BPM suena lento, contemplativo, pesado. 140 BPM suena urgente, físico, bailable. El mismo loop de drums a 80 BPM y a 130 BPM son dos canciones distintas.</p></div></div>
  <div class="step"><div class="sl">consistencia</div><div class="sb"><strong>por qué el tempo constante es la base de todo</strong><p>El tape del OP-1 graba en tiempo real. Si tocas sin metrónomo y aceleras o desaceleras inconscientemente (lo que todo el mundo hace al principio), las capas que añades después no encajan con la primera. El resultado suena "roto". El metrónomo no es una restricción creativa — es lo que permite que 4 pistas grabadas en momentos distintos suenen como si las hubiera tocado la misma persona al mismo tiempo.</p></div></div>
  <div class="step"><div class="sl">feel</div><div class="sb"><strong>tempo escogido vs tempo sentido</strong><p>J Dilla grababa ligeramente "fuera de la cuadrícula" a propósito. Flying Lotus y Madlib también. Pero esa desviación es intencional y pequeña — primero necesitas internalizar el tempo constante para poder desviarte de él con control. Es como aprender a caminar antes de aprender a bailar.</p></div></div>
</div>
</div>

<div class="sec" id="m1-s2">
<div class="st">02 — el metrónomo del OP-1 Field</div>
<div class="steps">
  <div class="step"><div class="sl">activar</div><div class="sb"><strong>botón <kbd class="or">Metro</kbd> — pulsa para activar o desactivar</strong><p>El botón Metro está en el panel inferior izquierdo. Una pulsación lo activa: escucharás el click por el altavoz o los auriculares. Otra pulsación lo desactiva. Simple. El metrónomo es global — suena independientemente del modo en el que estés (Synth, Drum, Tape o Mixer).</p></div></div>
  <div class="step"><div class="sl">mapa oficial</div><div class="sb"><strong>controles de tempo según la guía oficial</strong><p>En la vista de tempo/metrónomo: <strong>Blue</strong> ajusta BPM (o usa tap tempo), <strong>Ochre</strong> cambia Sync Mode, <strong>Gray</strong> ajusta Tape Speed, <strong>Orange</strong> controla metronome y <kbd class="ar">←</kbd>/<kbd class="ar">→</kbd> hacen nudge fino del tempo.</p></div></div>
  <div class="step"><div class="sl">BPM</div><div class="sb"><strong>blue o tap tempo</strong><p>Si ya sabes el valor, ajusta BPM con Blue. Si no lo sabes, usa tap tempo marcando el pulso con Metro hasta estabilizar el valor. Las dos rutas son válidas y rápidas.</p></div></div>
  <div class="step"><div class="sl">nudge</div><div class="sb"><strong><kbd class="ar">←</kbd>/<kbd class="ar">→</kbd> para empujar el tempo sin romper flujo</strong><p>El nudge de tempo con flechas izquierda/derecha sirve para microajustes cuando notas deriva con otro dispositivo o con una toma previa.</p></div></div>
  <div class="step"><div class="sl">volumen</div><div class="sb"><strong>el click no se graba en el tape</strong><p>El metrónomo del OP-1 es una señal de referencia interna — no se graba en ninguna pista del tape. Puedes tenerlo activo durante toda la grabación sin preocuparte de que aparezca en la mezcla final. El volumen del click se ajusta en las preferencias del sistema.</p></div></div>
</div>
</div>

<div class="sec" id="m1-s3">
<div class="st">03 — referencias de BPM por género y estado</div>
<div class="steps">
  <div class="step"><div class="sl">30–60</div><div class="sb"><strong>drone, ambient extremo, meditación</strong><p>El territorio de la música contemplativa y estática. Tim Hecker, Éliane Radigue, música de meditación. El pulso es tan lento que apenas se percibe como ritmo — es más una "respiración" que un beat. En el OP-1: difícil de usar con el step sequencer de forma convencional, pero ideal para grabaciones largas de texturas en el tape.</p></div></div>
  <div class="step"><div class="sl">60–80</div><div class="sb"><strong>hip-hop lento, trap, lo-fi</strong><p>El tempo del corazón humano en reposo. J Dilla en sus piezas más meditativas, Sade, Maxwell, lo-fi hip-hop de Nujabes. Suena natural y orgánico porque coincide con el ritmo biológico del cuerpo. Los tracks de este tempo dan la sensación de que "te da tiempo a escuchar todo". 70–75 BPM es un punto de partida excelente para electrónica experimental densa.</p></div></div>
  <div class="step"><div class="sl">80–100</div><div class="sb"><strong>hip-hop mid-tempo, electrónica experimental</strong><p>El territorio principal de Flying Lotus, Madlib, Burial, Boards of Canada. 85 BPM es el punto recomendado para empezar en el OP-1 — lo suficientemente lento para improvisar con control, lo suficientemente rápido para que el Tombola genere patrones con energía. 90–95 BPM es el hip-hop clásico de los 90s: A Tribe Called Quest, De La Soul, Pete Rock.</p></div></div>
  <div class="step"><div class="sl">100–115</div><div class="sb"><strong>funk, soul, pop midtempo</strong><p>James Brown vivía en los 100–108 BPM. Prince también. Es el tempo donde el groove físico se vuelve natural para el cuerpo — no tan lento que pierdas energía, no tan rápido que pierdas el swing. Si quieres que tu track tenga esa sensación de "cabeza que mueve sola", este rango es el punto.</p></div></div>
  <div class="step"><div class="sl">115–130</div><div class="sb"><strong>house, disco, pop bailable</strong><p>Daft Punk "Get Lucky" está en 116 BPM. "Around the World" en 121 BPM. El house clásico de Chicago y Detroit: 120–128 BPM. Es el tempo donde el cuerpo quiere moverse. El four-on-the-floor (kick en cada beat) funciona aquí de forma natural. Para el OP-1: Tombola en Drum mode a 120 BPM + kick en pasos 1/5/9/13 = punto de partida house inmediato.</p></div></div>
  <div class="step"><div class="sl">130–145</div><div class="sb"><strong>techno, trance, EDM</strong><p>El techno de Detroit de Jeff Mills, Underground Resistance, Robert Hood. La urgencia física que caracteriza al género viene directamente del BPM. A 140 BPM el pulso del bombo se vuelve casi fisiológicamente estimulante. Aphex Twin en su etapa más agresiva (Ventolin, Bucephalus) trabaja en este rango.</p></div></div>
  <div class="step"><div class="sl">160–180</div><div class="sb"><strong>drum & bass, jungle, footwork</strong><p>Drum & Bass clásico: 170–175 BPM. El footwork de Chicago (RP Boo, Jlin) vive en 160 BPM pero se percibe como 80 BPM porque el groove funciona en medias notas. Es un truco de percepción: cuando el ritmo es tan rápido, el cerebro agrupa los beats de dos en dos y lo procesa como si fuera más lento. Entender esto abre posibilidades rítmicas muy interesantes.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>punto de partida recomendado</strong>Para este curso y tu objetivo de electrónica experimental: empieza en 85 BPM como punto de partida. Es el tempo de Burial, de buena parte de Flying Lotus, y permite improvisar cómodamente mientras aprendes el instrumento. Cuando tengas más control, experimenta subiendo a 90–95 o bajando a 75–80 y escucha cómo cambia el carácter de los mismos loops.</div></div>
</div>


<div class="widget" id="w-metro">
  <div class="w-title">metrónomo interactivo</div>
  <div class="w-row">
    <span class="w-label">BPM</span>
    <input type="range" class="w-range" id="wm-bpm" min="40" max="180" value="85" oninput="wmUpdate()">
    <span class="w-val" id="wm-bpmv">85</span>
    <span class="w-tag" id="wm-genre">hip-hop experimental</span>
  </div>
  <div class="w-row">
    <span class="w-label">swing</span>
    <button class="w-btn inactive" id="wm-s0" onclick="wmSwing(0)">recto 0%</button>
    <button class="w-btn inactive" id="wm-s33" onclick="wmSwing(33)">shuffle 33%</button>
    <button class="w-btn inactive" id="wm-s50" onclick="wmSwing(50)">50% swing</button>
  </div>
  <div class="w-row" style="margin-top:6px">
    <button class="w-btn" id="wm-play" onclick="wmToggle()">▶ play</button>
    <div style="display:flex;gap:4px;align-items:center">
      <div class="w-pulse" id="wm-p1"></div>
      <div class="w-pulse" id="wm-p2"></div>
      <div class="w-pulse" id="wm-p3"></div>
      <div class="w-pulse" id="wm-p4"></div>
    </div>
  </div>
  <div class="w-genres">
    <button class="w-genre-btn" onclick="wmSet(55)">55 drone</button>
    <button class="w-genre-btn" onclick="wmSet(75)">75 lo-fi</button>
    <button class="w-genre-btn" onclick="wmSet(85)">85 experimental</button>
    <button class="w-genre-btn" onclick="wmSet(95)">95 hip-hop</button>
    <button class="w-genre-btn" onclick="wmSet(116)">116 house</button>
    <button class="w-genre-btn" onclick="wmSet(138)">138 techno</button>
    <button class="w-genre-btn" onclick="wmSet(170)">170 d&b</button>
  </div>
</div>
<div class="sec" id="m1-s4">
<div class="st">04 — velocidad de cinta y su efecto en el pitch</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>el tape se puede reproducir a distinta velocidad</strong><p>El tape del OP-1 simula una cinta magnética analógica real. En una cinta real, si la reproducción es más rápida que la grabación, el audio sube de pitch. Si es más lenta, baja. El OP-1 simula exactamente este comportamiento — cambiar la velocidad del tape cambia simultáneamente el tempo Y el pitch de todo lo grabado.</p></div></div>
  <div class="step"><div class="sl">cómo</div><div class="sb"><strong>ajústalo desde tempo con Gray (según guía oficial)</strong><p>En la vista de tempo/metrónomo, usa el control <strong>Gray</strong> para Tape Speed. Más velocidad: más agudo y más rápido. Menos velocidad: más grave y más lento. El valor de referencia suele ser 100% para volver al comportamiento base.</p></div></div>
  <div class="step"><div class="sl">pitch shift</div><div class="sb"><strong>grabar a un tempo, reproducir a otro — el truco de Portishead</strong><p>Graba algo a 100 BPM. Baja la velocidad del tape al 80%. El resultado suena a 80 BPM pero también más grave — exactamente como si hubiera sido grabado por alguien con una voz más profunda. Portishead construyó su sonido característico grabando y reproduciendo a distintas velocidades. Si grabas un loop de batería y luego bajas el tape al 70%, obtienes ese "groove de cassette degradado" que es imposible de conseguir con plugins.</p></div></div>
  <div class="step"><div class="sl">práctica</div><div class="sb"><strong>aproximación útil para diseño sonoro</strong><p>Haz cambios de Tape Speed en pasos claros (por ejemplo 100% → 80% → 100%) y escucha cómo se transforma el carácter. Si quieres resultados repetibles, anota valores y evita mover velocidad de forma aleatoria durante una toma crítica.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica clásica — "slowing down the tape"</strong>Graba un loop a tu BPM habitual (85). Luego baja el tape al 75–80% de velocidad. Escucha: los drums suenan más pesados y graves, el bajo baja de tono, las texturas se vuelven más lentas y oscuras. Es el sonido de lo-fi hip-hop clásico. Muchos productores graban a 90 BPM y bajan el tape hasta llegar al "feel" correcto en lugar de grabar directamente al tempo deseado.</div></div>
</div>

<div class="sec" id="m1-s5">
<div class="st">05 — sync: sincronizar con otros dispositivos</div>
<div class="steps">
  <div class="step"><div class="sl">MIDI clock</div><div class="sb"><strong>el OP-1 puede ser master o esclavo de tempo</strong><p>El OP-1 Field puede enviar MIDI clock (actúa como master de tempo) o recibirlo (actúa como esclavo que sigue a otro dispositivo). Cuando está en modo esclavo, el BPM del OP-1 se sincroniza automáticamente al dispositivo master. Útil para sincronizar con el EP-133, con un ordenador corriendo Ableton, o con otro hardware.</p></div></div>
  <div class="step"><div class="sl">sync mode</div><div class="sb"><strong>ochre selecciona modo de sincronía</strong><p>En la vista de tempo, el control <strong>Ochre</strong> cambia Sync Mode. Además de rutas MIDI (USB/BLE), incluye opciones de pulso como <strong>PO sync</strong> y <strong>1/16 sync</strong> según el rig que estés usando.</p></div></div>
  <div class="step"><div class="sl">PO sync</div><div class="sb"><strong>en PO sync la salida trabaja en dual mono</strong><p>En modo PO sync, la salida se divide en dual mono: un canal transporta audio y el otro la señal de sincronía por pulso. Es clave cablear y monitorizar pensando en esa división.</p></div></div>
  <div class="step"><div class="sl">rutas</div><div class="sb"><strong>USB/BLE son comunes, pero no únicas</strong><p>Para MIDI clock, USB o BLE suelen ser rutas prácticas. Para setups por pulso, usa PO sync/1/16 sync. Si no hay enlace estable, sincronización manual con tap tempo sigue siendo una aproximación útil.</p></div></div>
  <div class="step"><div class="sl">DAW/iPad</div><div class="sb"><strong>ruta híbrida opcional para sesiones alineadas</strong><p>Si trabajas con DAW o iPad como hub, puedes usar OP-1 Field como dispositivo de audio/MIDI y dejar que el clock externo marque el pulso común. Es útil cuando quieres arrancar play/rec con el proyecto externo ya sincronizado. No es obligatorio para el curso: si prefieres flujo standalone, sigue con tempo interno y tap tempo/manual sync.</p></div></div>
  <div class="step"><div class="sl">sin sync</div><div class="sb"><strong>sincronización manual — tap tempo simultáneo</strong><p>Si no tienes cable MIDI o USB: usa tap tempo en ambos dispositivos a la vez. Pon el mismo BPM en los dos manualmente. Es menos preciso que MIDI clock pero funciona perfectamente para sesiones de grabación domésticas donde no necesitas que todo esté perfectamente alineado al milisegundo.</p></div></div>
</div>
</div>

<div class="sec" id="m1-s6">
<div class="st">06 — ejercicios para interiorizar el tempo</div>
<div class="steps">
  <div class="step"><div class="sl">ejercicio 1</div><div class="sb"><strong>pulso corporal — antes de tocar el OP-1</strong><p>Antes de grabar nada: pon el metrónomo a 85 BPM y escúchalo 30 segundos sin hacer nada. Deja que el click entre en tu cuerpo. Luego cierra los ojos y mueve ligeramente la cabeza o el pie siguiendo el pulso. Haz esto cada vez antes de empezar una sesión — son 60 segundos que cambian completamente la calidad de lo que grabas después. Tu cuerpo necesita "aprender" el tempo antes de que tus manos lo ejecuten.</p></div></div>
  <div class="step"><div class="sl">ejercicio 2</div><div class="sb"><strong>teclas negras a tempo — improvisación guiada</strong><p>Metrónomo a 85 BPM. Synth mode, engine FM o Synth. Toca solo teclas negras, una nota por beat, durante 2 minutos sin parar. No pienses en melodía — piensa solo en no adelantarte ni atrasarte respecto al click. Si pierdes el tempo, espera el siguiente beat 1 (cuenta mentalmente) y vuelve a entrar. Grábalo en Pista 1 del tape. Escucha si hay momentos donde te "vas".</p></div></div>
  <div class="step"><div class="sl">ejercicio 3</div><div class="sb"><strong>notas largas vs cortas — control del timing</strong><p>Metrónomo a 85 BPM. Alterna: una nota larga (4 beats), silencio (2 beats), dos notas cortas (1 beat cada una), silencio (2 beats). Repite el patrón. El objetivo es que las notas entren exactamente en el beat — ni antes ni después. Cuando puedas hacer esto cómodamente, añade una segunda voz en la octava alta con el mismo patrón desfasado 2 beats. Eso es síncopa básica.</p></div></div>
  <div class="step"><div class="sl">ejercicio 4</div><div class="sb"><strong>tap tempo sin referencia — escuchar tu propio tempo</strong><p>Escucha "Nude" de Radiohead, "Teardrop" de Massive Attack o "All I Need" de Air sin metrónomo durante 30 segundos. Interioriza el pulso con el cuerpo. Luego pausa la música y abre el OP-1. Usa tap tempo para fijar el BPM que sientes. Reproduce la canción otra vez y comprueba si coincide. Este ejercicio entrena el oído interno de tempo que es la base de poder improvisar en sincronía con cualquier música.</p></div></div>
  <div class="step"><div class="sl">ejercicio 5</div><div class="sb"><strong>distintos tempos — el mismo loop, distintos caracteres</strong><p>Graba un loop simple de 4 compases a 85 BPM: kick en 1/3, hi-hat en cada beat, bajo con 2 notas. Duplica el tape actual para conservar esa versión. Sube el BPM a 120 y graba el mismo patrón. Luego a 70 BPM. Escucha los tres y compara: el mismo contenido musical suena a tres géneros y estados emocionales completamente distintos. Eso es lo que hace el tempo.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>hábito de sesión</strong>Antes de grabar cualquier cosa: 1) decide el BPM (empieza en 85 si no tienes uno claro), 2) activa el metrónomo, 3) escucha el click 30 segundos con el cuerpo antes de tocar. Esos 30 segundos son la diferencia entre una sesión que "fluye" y una donde todo suena descolocado. Los mejores productores tienen rituales de inicio de sesión — este es el más simple y el más efectivo.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">sesión de tempo — 30 min</div>
  <ul class="ex-ul">
    <li>Activa el metrónomo y fija 85 BPM con Blue o tap tempo. Escúchalo 60 segundos con los ojos cerrados, moviendo el pie.</li>
    <li>Tap tempo: piensa en una canción que conozcas bien. Toca el botón Metro siguiendo su pulso. Comprueba el BPM resultante y busca la canción en Spotify para verificar.</li>
    <li>Graba 2 minutos de teclas negras a 85 BPM en Pista 1 (ejercicio 2). Escucha: ¿hay partes donde el timing se va?</li>
    <li>Cambia el BPM a 120. Graba el mismo tipo de improvisación. Nota la diferencia de carácter.</li>
    <li>Vuelve a 85 BPM. Baja la velocidad del tape al 75% desde la vista de tempo con Gray (Tape Speed). Escucha cómo cambia el carácter del loop grabado.</li>
    <li>Restaura la velocidad al 100%. Duplica el tape antes de continuar para tener punto de retorno.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(0)">← anterior</button>
  <button class="btn btn-p" onclick="go(2)">siguiente →</button>
  <button class="btn btn-d" id="bd1" onclick="done(1)">marcar listo</button>
</div>
</div>`,
      m2: `<div class="mod" id="m2">
<div class="mod-hd">
  <div class="ey">módulo 02 · teoría</div>
  <div class="mt"><strong>composición</strong> — cómo se construye música</div>
  <div class="md">Saber qué notas tocar es solo la mitad. Esta parte trata de cómo combinarlas en el tiempo para que suenen como música. Sin solfeo y con ejemplos concretos.</div>
  <div class="mm-row"><div class="mm">~2h</div><div class="mm">OP-1 en mano</div><div class="mm">leer + tocar</div></div>
</div>

<div class="sec" id="m2-s1">
<div class="st">01 — acordes de dos notas: el mínimo que funciona</div>
<div class="steps">
  <div class="step"><div class="sl">por qué</div><div class="sb"><strong>no necesitas 3 notas para hacer un acorde útil</strong><p>En electrónica experimental los acordes de 2 notas (diadas) son más comunes que los de 3. Suenan más abiertos, dejan espacio para que el bajo y los efectos completen la armonía. Flying Lotus construye mucho con diadas — especialmente en Cosmogramma. Daft Punk también: el riff principal de Harder Better Faster Stronger es básicamente una diada repetida con ritmo.</p></div></div>
  <div class="step"><div class="sl">oscuro</div><div class="sb"><strong>nota base + 3 semitonos suele dar una diada menor</strong><p>Toca cualquier nota y añade la que está 3 semitonos después. Suele percibirse más oscuro y denso, útil para pads o bajos. En pentatónica menor funciona bien si comparas varias raíces y eliges por oído.</p></div></div>
  <div class="step"><div class="sl">abierto</div><div class="sb"><strong>nota base + 7 semitonos suele dar una quinta abierta</strong><p>El acorde más neutro que existe. No es mayor ni menor — es ambiguo. Esa ambigüedad es lo que lo hace tan útil en electrónica experimental: el oyente no sabe hacia dónde va, y eso crea tensión sostenida sin necesidad de resolver.</p></div></div>
  <div class="step"><div class="sl">tenso</div><div class="sb"><strong>nota base + 6 semitonos suele generar un tritono</strong><p>La distancia más tensa del sistema musical occidental — históricamente llamada "diabolus in musica". Arca lo usa como elemento expresivo constante. Úsalo con intención y como color puntual.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>pruébalo ahora</strong>Toca Do fijo. Añade Re# (3 semitonos) — oscuro. Ahora cambia Re# por Sol (7 semitonos) — abierto y neutro. Ahora Fa# (6 semitonos) — máxima tensión. Tres estados emocionales completamente distintos, solo cambiando una nota.</div></div>
</div>

<div class="sec" id="m2-s2">
<div class="st">02 — tensión y resolución</div>
<div class="steps">
  <div class="step"><div class="sl">qué</div><div class="sb"><strong>algunas notas "quieren" moverse hacia otras</strong><p>Toca Do y Sol juntos (estable). Ahora mueve el Sol medio semitono hacia arriba — Sol# junto a Do suena inestable, como si "quisiera" volver. Eso es tensión. Cuando vuelves a Sol: resolución. Toda la música está hecha de este ciclo.</p></div></div>
  <div class="step"><div class="sl">flylo</div><div class="sb"><strong>tensión sin resolver — la firma experimental</strong><p>Flying Lotus, Burial y Arca dejan muchas tensiones SIN resolver. Las melodías no "aterrizan" en la nota obvia. Eso crea la sensación de suspenso y movimiento constante que caracteriza a esa música. En el OP-1: el Arp en modo random sobre notas con intervalo tenso genera esto automáticamente.</p></div></div>
  <div class="step"><div class="sl">práctica</div><div class="sb"><strong>crear tensión conscientemente</strong><p>Cuando improvises en la pentatónica menor, prueba terminar frases en notas distintas de La (por ejemplo Do o Sol) para dejar más apertura. Luego vuelve a La cuando quieras sensación clara de cierre. Ese contraste da expresión sin forzar reglas fijas.</p></div></div>
</div>
</div>

<div class="sec" id="m2-s3">
<div class="st">03 — ritmo: pulso, compás y síncopa</div>
<div class="steps">
  <div class="step"><div class="sl">pulso</div><div class="sb"><strong>el beat — el latido de la música</strong><p>Pon Get Lucky de Daft Punk o Never Catch Me de Flying Lotus. Da palmas siguiendo el pulso más regular que escuchas. Un compás son 4 beats: 1-2-3-4. El bombo suele caer en el 1 y el 3, el snare en el 2 y el 4. Eso es la estructura base de casi toda la música popular.</p></div></div>
  <div class="step"><div class="sl">síncopa</div><div class="sb"><strong>los elementos que caen entre los beats</strong><p>J Dilla es el maestro de esto — sus drums caen ligeramente antes o después del beat, creando que la música "respire". No necesitas entenderlo matemáticamente: en el step sequencer del OP-1, activar pasos que no son el 1, 5, 9 o 13 ya es síncopa automática. El patrón "normal" aburrido es solo esos 4 pasos.</p></div></div>
  <div class="step"><div class="sl">tempo</div><div class="sb"><strong>el tempo es una decisión compositiva, no técnica</strong><p>El BPM define la energía emocional del track antes de que suene una nota. 75 BPM: música que pesa, que carga con algo. 120 BPM: música que te mueve físicamente. No hay tempos correctos — hay tempos que encajan con la intención. La tabla completa de BPM por género y cómo ajustarlo en el OP-1 está en el módulo 01. Aquí lo importante es elegirlo con intención antes de grabar.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>referencia de escucha</strong>"Do the Astral Plane" de Flying Lotus — cuenta 1-2-3-4 en bucle. Localiza dónde el hi-hat principal cae entre los números. Eso es síncopa en acción. "Around the World" de Daft Punk — el bajo hace exactamente el mismo patrón durante 7 minutos. La repetición rítmica precisa como hipnosis.</div></div>
</div>

<div class="sec" id="m2-s4">
<div class="st">04 — estructura: cómo se construye un track</div>
<div class="steps">
  <div class="step"><div class="sl">capas</div><div class="sb"><strong>cada elemento tiene una función</strong><p>Un track funciona cuando cada capa tiene un rol claro: el bombo da el pulso, el bajo da la armonía grave, la melodía da el color, la textura da el espacio. Si no sabes para qué sirve un elemento, probablemente sobra.</p></div></div>
  <div class="step"><div class="sl">secciones</div><div class="sb"><strong>intro → verso → puente — el movimiento</strong><p>La mayoría de la electrónica experimental no tiene estribillo tradicional. Sí tiene secciones donde algo cambia: un elemento entra o sale, el BPM sube o baja, la textura cambia de carácter. Eso crea la sensación de "viaje" en un track instrumental.</p></div></div>
  <div class="step"><div class="sl">espacio</div><div class="sb"><strong>el silencio también es composición</strong><p>Lo que no pones es tan importante como lo que pones. Un kick que para 2 compases, un bajo que entra solo en el puente, una melodía que aparece una sola vez — el contraste entre densidad y vacío es una herramienta compositiva tan válida como cualquier acorde.</p></div></div>
  <div class="step"><div class="sl">repetición</div><div class="sb"><strong>la repetición crea expectativa — el cambio la cumple</strong><p>La música electrónica se basa en repetición de patrones. El oído aprende a esperar lo que viene. Cuando cambias algo inesperadamente (un elemento que desaparece, un acorde diferente, un break), el contraste impacta más porque había expectativa. Repite primero, cambia después.</p></div></div>
</div>
</div>

<div class="sec" id="m2-s5">
<div class="st">05 — frecuencias: el espacio del sonido</div>
<div class="steps">
  <div class="step"><div class="sl">grave</div><div class="sb"><strong>bajo + bombo — el fundamento físico</strong><p>Si el bajo y el bombo tocan la misma nota al mismo tiempo, compiten en frecuencias y el resultado suena turbio. Solución: el bajo hace silencio cuando el kick golpea, o el bajo toca en los momentos entre kicks. Esto empieza en la interpretación: cómo lo tocas desde el principio.</p></div></div>
  <div class="step"><div class="sl">medio</div><div class="sb"><strong>melodía + acordes — el rango más competido</strong><p>Donde vive la mayor parte de la música. Si pones demasiados elementos aquí, todo se aplasta y pierdes definición. Cada elemento necesita su propio espacio de frecuencias o uno de los dos pierde.</p></div></div>
  <div class="step"><div class="sl">agudo</div><div class="sb"><strong>textura + aire — lo que da "espacio" a la mezcla</strong><p>Hi-hats, brillos, reverb largo. Flying Lotus, Boards of Canada y Arca saturan este rango con texturas que dan atmósfera. Es lo que hace que esa música suene "grande" incluso con mezclas simples. En el OP-1: el engine Cluster vive aquí.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>regla práctica para 4 pistas</strong>Pista 1: drums (grave + agudo). Pista 2: bajo en teclas graves, notas simples. Pista 3: pad o textura en rango medio-agudo, volumen bajo. Pista 4: melodía en el medio. Si cada pista tiene un rango propio, la mezcla funciona sola sin mucho trabajo posterior.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">composición guiada — 40 min</div>
  <ul class="ex-ul">
    <li>Con el tape grabando, toca Do + Re# (diada oscura) como pad largo en Pista 3. Escucha cómo "suena a algo" incluso siendo solo 2 notas.</li>
    <li>Añade una línea de bajo en Pista 2: solo 2–3 notas de la pentatónica menor (La–Do–Mi), tocando entre los beats para abrir espacio al kick.</li>
    <li>En Pista 1, programa drums con Tombola. Activa pasos que no sean 1, 5, 9, 13. Eso es síncopa.</li>
    <li>Escucha el resultado 1 minuto. Identifica: ¿qué capa "manda"? ¿hay algo que compite con otra capa? ¿qué sobra?</li>
    <li>Mueve el cabezal 40 segundos adelante y graba una segunda sección quitando la melodía. Más desnuda. Escucha el contraste.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(1)">← anterior</button>
  <button class="btn btn-p" onclick="go(3)">siguiente →</button>
  <button class="btn btn-d" id="bd2" onclick="done(2)">marcar listo</button>
</div>
</div>`,
      m3: `<div class="mod" id="m3">
<div class="mod-hd">
  <div class="ey">módulo 03 · base</div>
  <div class="mt">anatomía del <strong>OP-1 Field</strong></div>
  <div class="md">El OP-1 Field tiene una lógica interna muy clara. Entender modos, encoders, botones y navegación te ahorra semanas de prueba y error y te permite trabajar con más fluidez.</div>
  <div class="mm-row"><div class="mm">~1.5h</div><div class="mm">OP-1 en mano</div><div class="mm">explora cada botón</div></div>
</div>
<div class="sec" id="m3-s1">
<div class="st">los 4 modos principales</div>
<div class="steps">
  <div class="step"><div class="sl">S — Synth</div><div class="sb"><strong>diseña y toca sonido sintetizado</strong><p>El modo Synth es donde seleccionas el engine y tocas con el teclado. Las 4 teclas blandas bajo la pantalla (llamadas T1–T4) controlan los módulos del preset: T1=engine, T2=envelope, T3=FX, T4=LFO. Los 4 encoders controlan los parámetros del módulo activo. En tape mode, esas mismas teclas T1–T4 seleccionan las pistas 1–4.</p></div></div>
  <div class="step"><div class="sl">D — Drum</div><div class="sb"><strong>12 slots de sample asignados al teclado</strong><p>Cada tecla blanca del teclado es un slot de sample. Los samples pueden ser grabados desde el micrófono, transferidos por USB, o sintetizados en Synth mode y capturados. Cada slot tiene su propio volumen, pitch, punto de inicio/fin, y puede tener reverse activado. El modo Drum es donde construyes el kit y donde lo tocas.</p></div></div>
  <div class="step"><div class="sl">T — Tape</div><div class="sb"><strong>la grabadora de 4 pistas — columna vertebral del workflow</strong><p>El tape es una cinta lineal de 6 minutos con 4 canales simultáneos. Todo lo que produces aterriza aquí. Puedes ver la posición del cabezal en la pantalla, seleccionar qué pista está activa, y ver las formas de onda de lo grabado. El tape no tiene deshacer — cada grabación es permanente hasta que la borras.</p></div></div>
  <div class="step"><div class="sl">M — Mixer</div><div class="sb"><strong>volumen, pan y efectos de las 4 pistas</strong><p>En Mixer mode cada encoder controla un parámetro global de la pista activa: volumen (ochre), pan (blue), send de reverb (gray), volumen master (orange). También accedes al EQ global, master FX y drive desde aquí con Shift. Es el último paso antes de exportar.</p></div></div>
</div>
</div>
<div class="sec" id="m3-s2">
<div class="st">los 4 encoders — lógica universal</div>
<div class="steps">
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>parámetro 1 — suele ser el control más directo del contexto activo</strong><p>En Synth: parámetro principal del engine (ratio en FM, posición en DNA, densidad en Cluster). En Drum: trim del punto de inicio del sample. En Tape: posición del cabezal. En Mixer: volumen de la pista activa. Tómalo como primer control a probar cuando quieras entender rápido qué manda en el modo actual.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>parámetro 2 — frecuencia, ratio o segundo control</strong><p>En Synth: segundo parámetro del engine (modulación en FM, mutación en DNA). En Drum: punto de fin del sample. En Tape edit: longitud del segmento seleccionado. En Mixer: panorama de la pista. Con Shift: en Synth mode controla el decay del envelope.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>parámetro 3 — feedback, textura o tercer control</strong><p>En Synth: tercer parámetro del engine (feedback en FM, longitud en DNA). En Drum: afinación del sample. En Tape: nivel de grabación. En Mixer: send de reverb de la pista. Con Shift: en Synth mode controla el sustain del envelope.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen del instrumento activo — referencia práctica</strong><p>El encoder naranja controla el volumen del instrumento activo en Synth y Drum mode. En Mixer: volumen master de la mezcla completa. Como regla útil, si algo suena demasiado alto o bajo, empieza por aquí y luego ajusta balance en contexto.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>shift = doble función en todos los encoders</strong>Mantener <kbd>Shift</kbd> y girar cualquier encoder accede a los parámetros del envelope (ADSR): Shift+Ochre=attack, Shift+Blue=decay, Shift+Gray=sustain, Shift+Orange=release. La pantalla cambia para mostrar los valores del envelope mientras mantienes Shift. Suelta Shift y los encoders vuelven a los parámetros del engine.</div></div>
</div>
<div class="sec" id="m3-s3">
<div class="st">el panel de botones — referencia completa</div>
<div class="sc-list">
  <div class="sc"><div class="sk"><kbd class="or">Rec</kbd> <kbd class="or">Play</kbd></div><div class="sd">graba en la pista activa del tape inmediatamente</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd class="or">Rec</kbd></div><div class="sd">overdub — graba encima sin borrar lo que hay</div></div>
  <div class="sc"><div class="sk"><kbd class="or">Stop</kbd> × 2</div><div class="sd">vuelve al inicio del tape — dos pulsaciones</div></div>
  <div class="sc"><div class="sk"><kbd class="or">Tempo</kbd></div><div class="sd">abre la vista de tempo para ajustar BPM, sync mode, tape speed y metronome</div></div>
  <div class="sc"><div class="sk"><kbd>Seq</kbd></div><div class="sd">activa el secuenciador seleccionado</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd>Seq</kbd></div><div class="sd">cambia entre los 7 secuenciadores disponibles</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> + <kbd>Output</kbd></div><div class="sd">abre COM: MIDI, clock, BLE/USB y gestión de conexión</div></div>
  <div class="sc"><div class="sk"><kbd>Lift</kbd> <kbd>Drop</kbd> <kbd>Split</kbd></div><div class="sd">edición del tape — lift corta, drop pega, split divide un take</div></div>
  <div class="sc"><div class="sk"><kbd>Lift</kbd></div><div class="sd">corta el segmento seleccionado en Tape edit</div></div>
  <div class="sc"><div class="sk"><kbd>Drop</kbd></div><div class="sd">pega el segmento en la posición del cabezal</div></div>
  <div class="sc"><div class="sk"><kbd>Mic</kbd></div><div class="sd">activa grabación de sample en Drum mode</div></div>
  <div class="sc"><div class="sk"><kbd class="ar">←</kbd> <kbd class="ar">→</kbd></div><div class="sd">cambia de octava en Synth/Drum mode</div></div>
</div>
</div>
<div class="sec" id="m3-s4">
<div class="st">presets de sonido — guardar y recuperar variantes</div>
<div class="steps">
  <div class="step"><div class="sl">qué son</div><div class="sb"><strong>preset = engine + envelope + FX + LFO</strong><p>En OP-1 Field, el sonido se guarda como preset de patch. Eso no guarda tu arreglo del tape: el tape se versiona aparte con sus propias copias y estilos.</p></div></div>
  <div class="step"><div class="sl">cargar</div><div class="sb"><strong><kbd>Shift</kbd> + 1–8 abre el browser de presets</strong><p>Desde ahí eliges engine y preset para el slot activo. Es la vía más rápida para probar variantes sin tocar todavía la composición del tape.</p></div></div>
  <div class="step"><div class="sl">guardar</div><div class="sb"><strong>usa “save preset” para conservar tus variantes</strong><p>Cuando encuentres un timbre útil, guárdalo como preset y nómbralo si hace falta. Trabajar por versiones de preset te permite comparar A/B de sonido sin perder un patch que funcionaba.</p></div></div>
  <div class="step"><div class="sl">backup</div><div class="sb"><strong>USB (disk mode / MTP) para copiar tapes y presets</strong><p>Para respaldar material, conecta por USB y usa las opciones de transferencia del OP-1 Field (disk mode / MTP según tu sistema). Haz copia regular de tapes y presets para no perder sesiones importantes.</p></div></div>
</div>
<div class="co"><div class="co-b or"></div><div class="co-bd"><strong>regla de oro — separa “sonido” de “arreglo”</strong>Usa presets para versionar timbres. Usa tapes duplicadas para versionar arreglo/composición. Esa separación evita confusión y te da un flujo claro dentro del OP-1 Field.</div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>pieza interactiva</strong>Mapa de control rápido: elige modo (Synth, Drum, Tape, Mixer) y confirma qué hace cada encoder y qué botón manda en ese contexto.</div></div>
<div class="widget" id="w-anatomy-map">
  <div class="w-title">mapa de anatomía — modo y controles clave</div>
  <div class="w-row">
    <button class="w-btn active" id="wan-synth" onclick="wanSet('synth')">synth</button>
    <button class="w-btn inactive" id="wan-drum" onclick="wanSet('drum')">drum</button>
    <button class="w-btn inactive" id="wan-tape" onclick="wanSet('tape')">tape</button>
    <button class="w-btn inactive" id="wan-mixer" onclick="wanSet('mixer')">mixer</button>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wan-title">Synth — T1/T2/T3/T4 = engine/envelope/FX/LFO</div>
    <div class="w-small" id="wan-body" style="margin-top:8px">Ochre/Blue/Gray controlan el engine activo. Orange ajusta volumen del instrumento. Shift en encoders abre ADSR.</div>
  </div>
  <div class="w-row">
    <span class="w-tag" id="wan-tip">haz una pasada completa por los 4 modos y valida en pantalla que cada control responde como esperas.</span>
  </div>
</div>
<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">orientación completa — 25 min</div>
  <ul class="ex-ul">
    <li>Entra en cada modo (S / D / T / M) y observa qué muestra la pantalla en cada uno. No toques nada — solo mira.</li>
    <li>En Synth mode: gira los 4 encoders uno a uno y lee en pantalla qué parámetro cambia. Luego mantén Shift y gira cada encoder — observa el cambio al modo envelope.</li>
    <li>En Synth mode, ajusta un sonido, guárdalo como preset, crea una variante y guárdala también. Haz A/B entre ambas antes de decidir cuál usas.</li>
    <li>Graba 30 segundos en Pista 1. Duplica el tape actual como versión B y haz un cambio agresivo. Vuelve a la versión A para comprobar el flujo de versionado por tapes.</li>
    <li>Practica: <kbd class="or">Rec</kbd> <kbd class="or">Play</kbd> → graba 4 compases → <kbd class="or">Stop</kbd> → <kbd class="or">Stop</kbd> × 2 → <kbd class="or">Play</kbd> → escucha. Ese ciclo grabar/escuchar es el núcleo del workflow.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(2)">← anterior</button>
  <button class="btn btn-p" onclick="go(4)">siguiente →</button>
  <button class="btn btn-d" id="bd3" onclick="done(3)">marcar listo</button>
</div>
</div>`,
      m4: `<div class="mod" id="m4">
<div class="mod-hd">
  <div class="ey">módulo 04 · tape</div>
  <div class="mt">el <strong>tape</strong> — primero</div>
  <div class="md">El tape va antes que la síntesis porque ahí se decide si una idea se convierte en canción. Aquí está la diferencia entre "probar sonidos" y "terminar un track".</div>
  <div class="mm-row"><div class="mm">~2h</div><div class="mm">crítico</div><div class="mm">aprende esto bien</div></div>
</div>
<div class="sec" id="m4-s1">
<div class="st">qué es el tape exactamente</div>
<div class="steps">
  <div class="step"><div class="sl">físico</div><div class="sb"><strong>4 pistas estéreo por tape · 6 min por tape · lineal</strong><p>No es un loop infinito. Cada tape del OP-1 Field es lineal, con 4 pistas estéreo y 6 minutos de recorrido. Además puedes trabajar con múltiples tapes para versionar y componer por bloques.</p></div></div>
  <div class="step"><div class="sl">pistas</div><div class="sb"><strong>pistas 1-4 funcionan en paralelo</strong><p>La pista activa recibe la grabación. Las otras se reproducen simultáneamente. Puedes grabar en Pista 2 mientras escuchas Pista 1 en loop — esa es la magia del tape.</p></div></div>
  <div class="step"><div class="sl">loop</div><div class="sb"><strong>activar loop con tape tricks (loop in / loop out / loop on)</strong><p>Define el inicio con <strong>loop in</strong>, el final con <strong>loop out</strong> y activa <strong>loop on/off</strong>. Con el loop activo puedes cambiar de pista y grabar capas mientras escuchas las demás.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>advertencia crítica</strong>El tape NO tiene deshacer. Si grabas encima de algo: se pierde. Antes de experimentar, duplica la tape actual para tener una versión de seguridad. Tarda segundos y puede salvarte horas.</div></div>
</div>
<div class="sec" id="m4-s2">
<div class="st">flujo de grabación — paso a paso</div>
<div class="steps">
  <div class="step"><div class="sl">01</div><div class="sb"><strong>selecciona pista activa</strong><p>Las teclas 1–4 del panel superior. La pista iluminada es la activa y recibirá la grabación.</p></div></div>
  <div class="step"><div class="sl">02</div><div class="sb"><strong><kbd class="or">Rec</kbd> <kbd class="or">Play</kbd> = graba</strong><p>Empieza a tocar. Lo que toques queda registrado en la pista activa mientras las otras se reproducen.</p></div></div>
  <div class="step"><div class="sl">03</div><div class="sb"><strong>Stop → rebobina → escucha</strong><p>Para, vuelve al inicio con <kbd class="or">Stop</kbd> doble, reproduce. Escucha lo que grabaste antes de seguir.</p></div></div>
  <div class="step"><div class="sl">04</div><div class="sb"><strong>activa loop, cambia de pista, repite</strong><p>Con Pista 1 en loop, activa Pista 2 y graba encima. Repite con 3 y 4 para construir capas.</p></div></div>
</div>
</div>
<div class="sec" id="m4-s3">
<div class="st">varios loops en un mismo tape</div>
<div class="steps">
  <div class="step"><div class="sl">qué</div><div class="sb"><strong>el tape tiene 6 minutos — no todo tiene que ser un loop</strong><p>Mucha gente usa el tape como si solo existiera un loop. En realidad puedes grabar secciones distintas en diferentes zonas de la cinta — una intro en los primeros 30 segundos, un verso más adelante, un puente en otra zona. Cada zona puede tener su propio loop.</p></div></div>
  <div class="step"><div class="sl">cómo</div><div class="sb"><strong>mueve el cabezal a una zona vacía y graba</strong><p>Cuando termines una sección, avanza el cabezal hasta una zona vacía con el encoder azul en Tape mode. Graba ahí la siguiente idea y tendrás dos secciones separadas dentro del mismo tape.</p></div></div>
  <div class="step"><div class="sl">tip</div><div class="sb"><strong>deja espacio vacío entre secciones</strong><p>Al editar con Lift/Drop es fácil solapar secciones si están muy juntas. Deja 5–10 segundos de cinta vacía entre cada sección. El tape no cobra por el espacio vacío.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>workflow de composición</strong>Intro (0:00–0:30) → Verso A (0:40–1:20) → Verso B (1:30–2:10) → Puente (2:20–2:50). Cada zona tiene sus 4 pistas sincronizadas. Cuando exportas, el tape entero sale como un archivo lineal con toda la estructura construida.</div></div>
</div>
<div class="sec" id="m4-s4">
<div class="st">edición en tape — cortar, mover, construir</div>
<div class="steps">
  <div class="step"><div class="sl">edición</div><div class="sb"><strong>edición de takes — el sistema Lift / Drop / Split</strong><p>La edición en OP-1 Field gira alrededor de takes: cada segmento grabado aparece como una franja en pantalla. Para editar, lleva el cabezal al take (rewind/FF o encoder azul para scrubbing), y usa Lift/Drop/Split según el resultado que busques.</p></div></div>
  <div class="step"><div class="sl">scrub</div><div class="sb"><strong><kbd class="enc">Blue</kbd> — navegación precisa por el tape</strong><p>En tape mode, el encoder azul hace scrubbing: gíralo para avanzar o retroceder el cabezal de forma precisa por la cinta. El take bajo el cabezal se vuelve azul indicando que está listo para edición. <kbd>Shift</kbd> + encoder azul desliza (Slide) el take bajo el cabezal sin cortar — mueve su posición en la cinta.</p></div></div>
  <div class="step"><div class="sl">Lift</div><div class="sb"><strong>corta el segmento — lo pone en el portapapeles</strong><p>Con el segmento seleccionado, Lift lo corta de la cinta y lo almacena en el portapapeles del OP-1. La zona del tape donde estaba queda vacía (silencio). El contenido del portapapeles se conserva hasta que hagas otro Lift.</p></div></div>
  <div class="step"><div class="sl">Drop</div><div class="sb"><strong>pega en la posición del cabezal</strong><p>Mueve el cabezal a donde quieres pegar el segmento (con el encoder azul en Tape mode). Pulsa Drop: el contenido del portapapeles se pega en esa posición y puede sobreescribir lo que haya. Lift + Drop = cortar y pegar audio dentro del tape.</p></div></div>
  <div class="step"><div class="sl">múltiples drops</div><div class="sb"><strong>pegar el mismo take en varias posiciones</strong><p>Después de un Lift, puedes hacer Drop múltiples veces — el mismo take se pega en cada posición donde el cabezal esté. El tape avanza automáticamente al final de cada drop. Esto permite duplicar un segmento en varias zonas del tape sin tener que repetir la grabación. También: <kbd>Shift</kbd> + Lift = Lift All, que levanta los 4 tracks simultáneamente como un bloque.</p></div></div>
  <div class="step"><div class="sl">flujo</div><div class="sb"><strong>edición típica — curar un jam grabado</strong><p>Supón que grabaste 4 minutos de improvisación en Pista 1. Solo los primeros 30 segundos y una parte en el minuto 2 suenan bien. Proceso: 1) Lleva el cabezal al inicio del segmento bueno usando el encoder azul (scrub). El take se vuelve azul cuando está bajo el cabezal. 2) Pulsa Lift (flecha arriba) — el take queda en el portapapeles. 3) Vuelve al inicio del tape. 4) Drop — pegas esos 30 segundos al inicio. 5) Repite con el fragmento del minuto 2. Resultado: un loop curado de los mejores momentos.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>tape tricks de performance — teclas 4, 5, 6</strong>Con el tape en reproducción, las teclas 4, 5 y 6 del panel ejecutan efectos en tiempo real que también se graban en el bounce: <strong>4 (Brake):</strong> frena el tape gradualmente mientras la mantienes, luego vuelve a la velocidad normal al soltar. <strong>5 (Reverse):</strong> invierte la reproducción mientras está pulsada. <strong>6 (Chop):</strong> crea stutter sincronizado con el tempo. Estos tres son los efectos de performance característicos del OP-1 — parte de su identidad sonora.</div></div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>regla de oro — versión de tape antes de editar</strong>La edición en tape es destructiva. Lift borra material y Drop puede sobreescribir destino. No hay deshacer. Antes de una sesión de edición, duplica la tape actual: si algo sale mal, vuelves a la versión anterior sin perder el trabajo.</div></div>
</div>

<div class="widget" id="w-tape-edit">
  <div class="w-title">laboratorio tape — lift / drop / split</div>
  <div class="w-tape-wrap" id="wt-wrap"></div>
  <div class="w-row">
    <span class="w-label">pista activa</span>
    <select id="wt-track" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wtTrack()">
      <option value="0">track 1</option>
      <option value="1">track 2</option>
      <option value="2">track 3</option>
      <option value="3">track 4</option>
    </select>
    <span class="w-label">cabezal</span>
    <input type="range" class="w-range" id="wt-head" min="0" max="15" value="0" oninput="wtHead()">
    <span class="w-val" id="wt-headv">01</span>
  </div>
  <div class="w-row" style="gap:6px">
    <button class="w-btn" onclick="wtLift()">lift</button>
    <button class="w-btn" onclick="wtDrop()">drop</button>
    <button class="w-btn" onclick="wtSplit()">split</button>
    <button class="w-btn inactive" onclick="wtClone()">duplicar take</button>
    <button class="w-btn inactive" onclick="wtReset()">reset</button>
  </div>
  <div class="w-row">
    <span class="w-tag" id="wt-status">elige pista/cabezal y prueba un flujo real: lift → mover cabezal → drop</span>
  </div>
</div>

<div class="sec" id="m4-s5">
<div class="st">pistas en el tape — gestión de capas</div>
<div class="steps">
  <div class="step"><div class="sl">seleccionar</div><div class="sb"><strong>teclas 1–4 del panel — pista activa</strong><p>Las teclas numeradas 1–4 en el panel superior seleccionan qué pista del tape recibe la grabación. La pista activa se ilumina. Las otras tres se reproducen en paralelo cuando das Play. Puedes cambiar de pista activa en medio de una grabación — útil para grabar en distintas pistas en una sola toma.</p></div></div>
  <div class="step"><div class="sl">overdub</div><div class="sb"><strong><kbd>Shift</kbd> + <kbd class="or">Rec</kbd> — graba encima sin borrar</strong><p>El overdub añade audio en la pista activa sin reemplazar lo anterior. Sirve para sumar notas o texturas sobre un loop existente. Úsalo con criterio: si acumulas demasiadas capas, la pista puede perder definición.</p></div></div>
  <div class="step"><div class="sl">borrar pista</div><div class="sb"><strong>borrar el contenido de una pista específica</strong><p>Para borrar una pista: selecciona la pista con las teclas 1–4, usa Lift All (Shift + Lift) para levantar toda la pista de una vez. La pista queda limpia. No afecta a las otras tres pistas. Alternativa: en el menú de la pista, hay opción de clear track directamente.</p></div></div>
  <div class="step"><div class="sl">pre-pan</div><div class="sb"><strong>truco avanzado opcional: pseudo-8 tracks en una pista estéreo</strong><p>En fuentes mono, algunos usuarios hacen pre-panning de entrada (en muchos rigs, <kbd>Shift</kbd> + encoder naranja) para grabar una toma cargada a L y otra a R dentro de la misma pista. En práctica, puedes tratarlo como dos capas distintas y liberar pistas del tape para otros elementos. <strong>Advertencia:</strong> al sumar a mono esas dos capas se fusionan; evita este truco en elementos críticos de grave y valida compatibilidad en tu firmware/configuración antes de usarlo como base del tema.</p></div></div>
  <div class="step"><div class="sl">niveles</div><div class="sb"><strong>cada pista tiene su volumen independiente — Mixer mode</strong><p>En Mixer mode, el encoder ochre ajusta el volumen de la pista seleccionada. Los niveles de pista son permanentes — si grabas a bajo volumen no siempre podrás recuperar toda la ganancia perdida después. Procura grabar al nivel correcto (medidor llegando al 70–80% en los picos) y ajusta el balance en el Mixer.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>prueba A/B rápida — pre-pan útil o ruido extra</strong>A: graba dos capas mono diferentes en la misma pista usando L/R (por ejemplo hi-hat a la izquierda y percusión corta a la derecha). B: escucha en estéreo y luego en mono (un auricular o suma mono). Si en mono pierdes demasiada definición, vuelve a separar esas capas en pistas reales o resampéalas con más espacio.</div></div>
</div>

<div class="sec" id="m4-s6">
<div class="st">tape browser + tape styles — composición por versiones</div>
<div class="steps">
  <div class="step"><div class="sl">browser</div><div class="sb"><strong>el tape browser organiza versiones, además de backups</strong><p>En OP-1 Field puedes moverte entre múltiples tapes desde el browser. Úsalo como sistema de versiones: una tape para idea base, otra para arreglo alternativo, otra para mezcla arriesgada. Trabajar así evita romper una versión buena por experimentar sin red de seguridad.</p></div></div>
  <div class="step"><div class="sl">styles</div><div class="sb"><strong>cada tape style cambia el carácter de la grabación</strong><p>OP-1 Field incluye cuatro estilos de tape. No son "skins": afectan respuesta, color y sensación de playback. Haz A/B con el mismo loop en dos styles distintos y decide por oído cuál sirve al track, en vez de elegir por costumbre.</p></div></div>
  <div class="step"><div class="sl">tempo/sync</div><div class="sb"><strong>guarda tempo y sync con cada tape</strong><p>Un hábito clave: deja cada tape con su BPM y sync ya listos para ese proyecto. Cuando vuelvas días después, arrancas en contexto correcto sin perder tiempo en reconfigurar reloj y ruteo.</p></div></div>
  <div class="step"><div class="sl">flujo</div><div class="sb"><strong>método rápido: A base · B edit · C performance</strong><p>Tape A = estructura principal. Tape B = edición agresiva (lift/drop, reordenar). Tape C = versión de performance con trucos de tape. Si B o C fallan, A sigue intacta. Ese método acelera decisiones y reduce bloqueo.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Comparador A/B de tape style: mismo loop, cambio instantáneo de style y voto rápido "encaja / no encaja". Objetivo pedagógico: entrenar decisión auditiva en 30 segundos y evitar sobreanalizar.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">primera canción en 4 capas + dos secciones — 45 min</div>
  <ul class="ex-ul">
    <li>BPM: 85. Drum mode, Pista 1: graba 4 compases de batería (cuenta 1-2-3-4 mientras tocas).</li>
    <li>Activa loop. Pista 2, Synth mode: bajo con FM engine, notas en teclas negras.</li>
    <li>Pista 3: textura larga — engine DNA, una nota mantenida varios compases.</li>
    <li>Pista 4: melodía corta — solo teclas negras, 4–8 notas, sin pensar demasiado.</li>
    <li>Mueve el cabezal 45 segundos adelante. Graba una segunda sección más desnuda — solo drums y bajo.</li>
    <li>Alterna el loop entre las dos secciones y escucha cómo suenan juntas.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(3)">← anterior</button>
  <button class="btn btn-p" onclick="go(5)">siguiente →</button>
  <button class="btn btn-d" id="bd4" onclick="done(4)">marcar listo</button>
</div>
</div>`,
      m5: `<div class="mod" id="m5">
<div class="mod-hd">
  <div class="ey">módulo 05 · síntesis</div>
  <div class="mt">engines — <strong>fm · dna · cluster</strong></div>
  <div class="md">Cada engine del OP-1 es un mundo propio. Antes de usarlos, conviene entender de dónde vienen, qué tipo de sonido generan y qué hace cada encoder. Aquí trabajamos causa-efecto, rotor por rotor.</div>
  <div class="mm-row"><div class="mm">~4h</div><div class="mm">el núcleo del curso</div><div class="mm">OP-1 en mano</div></div>
</div>

<div class="sec" id="m5-s1">
<div class="st">panorama — los engines del OP-1 Field</div>
<div class="steps">
  <div class="step"><div class="sl">qué son</div><div class="sb"><strong>cada engine es un método de síntesis distinto</strong><p>El OP-1 Field tiene 12 engines de síntesis. Cada uno genera sonido con una lógica distinta: modelado, síntesis digital, modulación o enfoques híbridos. En este curso nos centramos en los que más rápido te llevan a resultados musicales.</p></div></div>
  <div class="step"><div class="sl">jerarquía</div><div class="sb"><strong>FM, DNA y Cluster — los tres más importantes para este curso</strong><p>FM para todo lo que necesita carácter y definición (bajos, leads, campanadas). DNA para texturas que evolucionan y sonidos imposibles de nombrar. Cluster para atmósferas densas y muros de sonido. Los otros nueve engines también son útiles, pero estos tres cubren gran parte del terreno experimental con poco tiempo de aprendizaje.</p></div></div>
  <div class="step"><div class="sl">cambiar</div><div class="sb"><strong>cómo navegar entre engines</strong><p>El engine vive bajo la tecla <kbd>T1</kbd> (primera tecla blanda bajo la pantalla). Para cambiar de engine: <kbd>Shift</kbd> + <kbd>T1</kbd> abre el browser de engines. Encoder azul para navegar, <kbd>T1</kbd> para confirmar. Las teclas 1–8 del panel acceden a los 8 presets de sonido — cada preset guarda engine + envelope + FX + LFO juntos. Para guardar el patch actual: mantén cualquier tecla 1–8 hasta que la pantalla confirme.</p></div></div>
</div>
</div>

<div class="sec" id="m5-s2">
<div class="st">fm synth — causa y efecto</div>
<div class="steps">
  <div class="step"><div class="sl">idea base</div><div class="sb"><strong>FM = un oscilador modula a otro</strong><p>Piensa en dos capas: la nota principal (carrier) y la modulación (modulator). Con poca modulación suena más limpio; con mucha, aparecen más armónicos y aspereza.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>ratio — relación entre osciladores</strong><p>Ratios simples (1:1, 2:1, 3:1) suelen sonar más estables y armónicas. Ratios raras o no enteras suelen generar color metálico, campana e inarmonía.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>modulación — cantidad de armónicos</strong><p>Modulación baja: timbre más puro y controlable. Modulación alta: más brillo, más complejidad y más agresividad. Este es el control más directo de “suave vs áspero”.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>feedback — borde y suciedad</strong><p>Sube feedback para añadir borde y densidad. Si pierdes definición de nota, retrocede un poco: el punto útil suele estar justo antes del caos total.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>origin — punto de partida del timbre</strong><p>Origin mueve el “centro” del comportamiento FM: más bajo suele sentirse más profundo, más alto más cortante. Úsalo junto a ratio/mod para ubicar el carácter antes de mezclar.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>tabla rápida · si quieres X, mueve Y</strong>Más limpio y redondo: baja <strong>Blue</strong>.<br>Más brillante y áspero: sube <strong>Blue</strong>.<br>Más armónico/estable: usa ratio simple en <strong>Ochre</strong>.<br>Más metal/campana: prueba ratio rara en <strong>Ochre</strong>.<br>Más borde: sube <strong>Gray</strong> con cuidado.<br>Más grave/profundo o más agudo/cortante: ajusta <strong>origin</strong>.</div></div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicios A/B (obligatorios)</strong><strong>A/B 1 · modulación:</strong> mismo ratio, Blue bajo vs Blue alto. <br><strong>A/B 2 · ratio:</strong> misma modulación, ratio simple vs ratio rara. <br><strong>A/B 3 · feedback:</strong> mismo patch, Gray bajo vs Gray alto. Elige en cada caso cuál funciona mejor en mezcla completa.</div></div>
</div>

<div class="widget" id="w-fm-lab">
  <div class="w-title">fm a/b — ratio, origin, modulación y feedback</div>
  <div class="w-row">
    <span class="w-label">ratio</span>
    <input type="range" class="w-range" id="wfm-ratio" min="5" max="80" value="20" oninput="wfmUpdate()">
    <span class="w-val" id="wfm-ratiov">2.0</span>
  </div>
  <div class="w-row">
    <span class="w-label">origin</span>
    <input type="range" class="w-range" id="wfm-origin" min="0" max="100" value="50" oninput="wfmUpdate()">
    <span class="w-val" id="wfm-originv">+0 st · 110Hz</span>
  </div>
  <div class="w-row">
    <span class="w-label">modulación</span>
    <input type="range" class="w-range" id="wfm-mod" min="0" max="100" value="35" oninput="wfmUpdate()">
    <span class="w-val" id="wfm-modv">35%</span>
  </div>
  <div class="w-row">
    <span class="w-label">feedback</span>
    <input type="range" class="w-range" id="wfm-fb" min="0" max="100" value="20" oninput="wfmUpdate()">
    <span class="w-val" id="wfm-fbv">20%</span>
  </div>
  <div class="w-row" style="gap:6px">
    <button class="w-btn inactive" onclick="wfmPreset('clean')">más limpio</button>
    <button class="w-btn inactive" onclick="wfmPreset('metal')">más metal</button>
    <button class="w-btn inactive" onclick="wfmPreset('rough')">más áspero</button>
    <button class="w-btn" onclick="wfmPlay()">▶ escuchar</button>
    <button class="w-btn inactive" onclick="wfmStore('a')">guardar A</button>
    <button class="w-btn inactive" onclick="wfmStore('b')">guardar B</button>
    <button class="w-btn secondary" onclick="wfmPlayAB()">A/B</button>
  </div>
  <div class="w-row"><span class="w-tag" id="wfm-note">lectura: estable-armónico</span></div>
</div>

<div class="sec" id="m5-s3">
<div class="st">dna synth — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis algorítmica inspirada en secuencias biológicas</strong><p>El DNA Synth es un engine exclusivo de Teenage Engineering — no tiene precedente directo en la historia de los sintetizadores. La idea es tratar una secuencia de datos (como una cadena de ADN) como instrucciones para construir una forma de onda. El resultado es una síntesis que tiene algo de aditiva (suma de armónicos), algo de granular (texturas), y algo de completamente inclasificable. No existe otro instrumento que suene exactamente igual.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>el sonido de lo orgánico inexplicable</strong><p>El DNA es el engine de Arca cuando quiere algo que "suena a carne pero no es carne". Es el tipo de textura que usa Aphex Twin en sus piezas más ambient — algo que reconoces como electrónico pero que tiene una organicidad extraña. Oneohtrix Point Never construye soundscapes con este tipo de síntesis. La característica principal: nunca suena exactamente igual dos veces si mueves los parámetros.</p></div></div>
  <div class="step"><div class="sl">cómo funciona</div><div class="sb"><strong>una secuencia de datos como "partitura" para generar onda</strong><p>El engine lee una cadena de valores internos y los interpreta como instrucciones para construir cada ciclo de la onda. Pequeños cambios en los parámetros cambian la "lectura" radicalmente — de ahí su impredecibilidad. No tiene un comportamiento lineal como FM: girar el encoder de 1 a 5 no produce un cambio gradual predecible, sino que salta entre estados sonoros distintos.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>posición en la cadena — qué sección de la "secuencia" leer</strong><p>Navega por diferentes "páginas" de la cadena de síntesis. Cada posición genera un timbre radicalmente distinto — desde sonidos casi sinusoidales hasta texturas ruidosas, pasando por timbres que suenan a instrumentos acústicos deformados. Es el parámetro de exploración principal: gíralo despacio y escucha.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>mutación — qué tanto varía la cadena en tiempo real</strong><p>Con valor bajo, el sonido es estable en cada ciclo. Con valor alto, la cadena "muta" continuamente — el timbre cambia solo mientras suenas la nota, creando esa textura viva y en movimiento. Valores altos de mutación sobre una nota sostenida generan lo que parece un pad con LFO pero con mucha más organicidad.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>longitud de la cadena — complejidad del ciclo</strong><p>Cadena corta = onda más simple, timbre más reconocible. Cadena larga = más puntos de datos por ciclo, resultado más complejo y denso. En valores extremos de cadena larga el sonido puede volverse casi ruidoso. Combinado con mutación alta: textura granular que evoluciona continuamente.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>Volumen del instrumento.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>la técnica definitiva del DNA — grabar el proceso</strong>Abre DNA. Tape grabando en Pista 3. Toca una nota larga (sustain=alto, release=largo). Durante 90 segundos, mueve los 4 encoders muy despacio — Ochre para cambiar el timbre base, Blue para activar la mutación, Gray para añadir complejidad. No escuches, solo mueve. Lo que grabas es la textura evolucionando en tiempo real. Ese material es irrepetible y es exactamente el tipo de capa de fondo que hace que un track suene único.</div></div>
</div>

<div class="sec" id="m5-s4">
<div class="st">cluster — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis aditiva llevada al extremo no armónico</strong><p>La síntesis aditiva es la más antigua conceptualmente: suma de sinusoidales (parciales) para construir timbres complejos. Fourier demostró matemáticamente en 1822 que cualquier onda puede descomponerse en sinusoidales. Los órganos Hammond de los 40s funcionan así. El Cluster del OP-1 toma esa idea pero suma parciales en relaciones NO armónicas — las frecuencias no tienen relación matemática ordenada, lo que genera un resultado denso, cósmico e incontrolable.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>ambient, noise, drone — el sonido de lo masivo</strong><p>Tim Hecker construye discos enteros con síntesis aditiva densa. Éliane Radigue, compositora de música concreta y drone, exploró estas texturas desde los 70s. En electrónica más pop, Boards of Canada usa capas de osciladores no afinados para crear esa sensación de "estática cálida". El Cluster es el engine para cuando quieres que algo ocupe espacio sin ocupar el espacio melódico — un colchón sonoro que existe debajo de todo lo demás.</p></div></div>
  <div class="step"><div class="sl">cómo funciona</div><div class="sb"><strong>muchas sinusoidales sumadas sin relación armónica</strong><p>Cluster genera un número variable de osciladores sinusoidales simultáneos, distribuidos en frecuencias que no tienen la relación "limpia" de los armónicos naturales. El resultado no tiene un "tono" definido claro — suena a una nube de frecuencias, más parecido a un ruido coloreado que a una nota. Por eso es imposible de usar como instrumento melódico pero perfecto como textura de fondo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>densidad — número de osciladores activos</strong><p>Valor bajo = pocos osciladores, resultado más espaciado, con huecos audibles entre frecuencias. Valor alto = masa densa de osciladores, textura más "llena" y compacta. La densidad óptima depende del papel en la mezcla: para un fondo sutil, densidad media-baja. Para un muro de sonido, densidad máxima.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>dispersión — qué tan separadas están las frecuencias entre sí</strong><p>Dispersión baja = osciladores apiñados en un rango estrecho de frecuencias, resultado más "tonal" y afinado aunque sigue siendo denso. Dispersión alta = osciladores distribuidos en todo el espectro, desde subgraves hasta agudos extremos. Para usar Cluster como pad armónico: dispersión baja, densidad media. Para ruido total: dispersión alta, densidad alta.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>movimiento — velocidad de cambio entre osciladores</strong><p>Con movimiento bajo, los osciladores son estáticos — el timbre no cambia mientras mantienes la nota. Con movimiento alto, las frecuencias de los osciladores se desplazan continuamente, creando un efecto de "shimmer" o trémolo de frecuencias. Movimiento medio es el punto dulce para pads que se sienten vivos sin ser distractores.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen — suele funcionar mejor en rango bajo</strong><p>El Cluster tiende a ocupar demasiado espacio en la mezcla si se deja a volumen normal. Como punto de partida, prueba 30–40% y ajusta por oído. Su papel suele ser llenar huecos y sostener el fondo sin robar foco. En muchos casos funciona mejor con más send de reverb que volumen directo.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — pad de fondo que "respira"</strong>Attack=lento (2–3 segundos), sustain=alto, release=muy largo. Ochre (densidad) a 40–60%. Gray (movimiento) a 30–40%. Volumen 35%, reverb send 70%. Toca una nota grave o media y déjala sonar mientras grabas las otras pistas. El Cluster llenará el espacio de fondo como si hubiera aire detrás de la música.</div></div>
</div>


<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">diseña 3 sonidos + comparación A/B — FM, DNA, Cluster — 45 min</div>
  <ul class="ex-ul">
    <li><strong>FM bajo pluck:</strong> ratio 2, mod media, feedback bajo. Attack=0, decay=medio, sustain=0. Toca en las teclas más graves. Graba 30 segundos en Pista 2.</li>
    <li><strong>FM campanada:</strong> mismo engine, ratio 7, mod alta, attack=0, decay=muy largo. Escucha cómo cambia el carácter completamente.</li>
    <li><strong>DNA textura viva:</strong> Ochre posición media, Blue (mutación) 60%, Gray (longitud) 70%. Attack=lento, sustain=alto. Tape grabando, mueve encoders 90 segundos con nota sostenida.</li>
    <li><strong>Cluster fondo:</strong> densidad 50%, dispersión 30%, movimiento 35%. Attack=3s, sustain=máximo, volumen 35%, reverb send 70%. Graba en Pista 4.</li>
    <li><strong>A/B final del módulo:</strong> guarda dos variantes del mismo patch (A limpio / B más áspero) y compáralas en contexto de mezcla. Deja Vocoder para el módulo 06.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(4)">← anterior</button>
  <button class="btn btn-p" onclick="go(6)">siguiente →</button>
  <button class="btn btn-d" id="bd5" onclick="done(5)">marcar listo</button>
</div>
</div>`,
      m6: `<div class="mod" id="m6">
<div class="mod-hd">
  <div class="ey">módulo 06 · síntesis</div>
  <div class="mt">engines — <strong>synth · drwave · string · phase · vocoder</strong></div>
  <div class="md">Aquí entran los cinco engines restantes. Synth usa síntesis sustractiva clásica. Drwave navega tablas de onda. String simula física de cuerda. Phase deforma sinusoides. Vocoder analiza tu voz. Cinco lenguajes sonoros distintos para decisiones distintas.</div>
  <div class="mm-row"><div class="mm">~75 min</div><div class="mm">OP-1 Field</div><div class="mm">auriculares recomendados</div></div>
</div>
<div class="sec" id="m6-s1">
<div class="st">synth — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis sustractiva — el vocabulario base de lo analógico</strong><p>La síntesis sustractiva nació en los años 50 con el trabajo de Harald Bode y se popularizó masivamente con el Moog de Robert Moog en los 60s. El principio: generar una forma de onda rica en armónicos (sawtooth, square, pulse) y luego "restar" frecuencias con un filtro hasta obtener el timbre deseado. El Minimoog, el ARP 2600, el Roland SH-101, el Korg MS-20, el Prophet-5 — todos funcionan así. Es el sonido del rock progresivo, el new wave, la música disco, el techno de Detroit y prácticamente todo lo que suena "analógico".</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>de Kraftwerk a Daft Punk — la columna vertebral electrónica</strong><p>Kraftwerk construyó su sonido casi entero sobre síntesis sustractiva. Los leads de "Autobahn" son sawtooth filtrados. El sonido robótico de "The Robots" es square wave con resonancia. New Order, Depeche Mode, The Chemical Brothers, Daft Punk en sus primeros discos — todos viven aquí. En electrónica experimental, el Synth del OP-1 es el engine para cuando necesitas algo que suene "a sintetizador" sin ambigüedad: un lead limpio, un bass line de techno, un pad simple y controlable.</p></div></div>
  <div class="step"><div class="sl">funciona</div><div class="sb"><strong>oscilador → filtro → amplificador</strong><p>El oscilador genera la onda base con todos sus armónicos. El filtro (VCF — Voltage Controlled Filter) corta las frecuencias por encima de una frecuencia de corte, controlando el brillo. La resonancia del filtro amplifica las frecuencias justo en el punto de corte, creando ese sonido característico "squelchy" del ácido o el chirp del filtro abierto. Ajustar el filtro con el envelope es lo que hace que un sonido sustractivo "se abra" o "se cierre" en el tiempo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>forma de onda — el timbre base del oscilador</strong><p>Selecciona entre las formas de onda fundamentales. Sawtooth (diente de sierra): brillante, rico en armónicos, suena "electrónico" y directo — el más usado para leads y bajos. Square (onda cuadrada): más oscura, algo nasal, los synths de 8-bit y gran parte del sonido new wave. Triangle: casi sinusoidal, muy suave y tenue, pocas frecuencias altas. Pulse (pulso variable): el ancho de pulso determina el carácter — angosto suena delgado y agudo, ancho suena más cálido. Gira lentamente y escucha los cambios de carácter.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>frecuencia de corte del filtro — el control de brillo más importante</strong><p>Controla hasta qué frecuencia "deja pasar" el filtro. Completamente abierto (máximo): escuchas todos los armónicos del oscilador, sonido brillante y agresivo. Completamente cerrado (mínimo): solo quedan las frecuencias graves, sonido oscuro y apagado. El punto dulce está en valores medios donde el filtro da forma al timbre sin eliminar demasiado. Girar el filtro mientras suenas una nota es uno de los gestos más expresivos de la síntesis sustractiva.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>resonancia del filtro — el carácter del filtro</strong><p>Amplifica las frecuencias justo en el punto de corte. Resonancia baja: el filtro solo "redondea" el sonido. Resonancia media: el sonido gana un color propio, un "pico" audible en la frecuencia de corte que le da personalidad. Resonancia alta: el filtro empieza a "autooscilar" — genera su propio tono en la frecuencia de corte, independientemente de lo que toque el oscilador. Eso es el sonido ácido del TB-303 y el techno acid.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>El Synth sustractivo es muy consistente en volumen — 70% es un buen punto fijo.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — filtro envelope para bajos vivos</strong>Patch de bajo: sawtooth, filtro a 40%, resonancia media. En el envelope: conecta el filtro al envelope (Shift + Blue para ver el env del filtro si está disponible). Attack corto, decay medio — el filtro "se abre" en el ataque y se cierra en el decay. Eso es lo que hace que un bass sustractivo suene orgánico y no estático. Es la base del sonido de Daft Punk en "Around the World".</div></div>
</div>

<div class="sec" id="m6-s2">
<div class="widget" id="w-wave">
  <div class="w-title">formas de onda — escucha la diferencia</div>
  <canvas class="w-canvas" id="ww-canvas" height="70"></canvas>
  <div class="w-row" style="margin-top:12px;flex-wrap:wrap;gap:6px">
    <button class="w-btn inactive active" id="ww-sine" onclick="wwSelect('sine')">sine</button>
    <button class="w-btn inactive" id="ww-square" onclick="wwSelect('square')">square</button>
    <button class="w-btn inactive" id="ww-sawtooth" onclick="wwSelect('sawtooth')">sawtooth</button>
    <button class="w-btn inactive" id="ww-triangle" onclick="wwSelect('triangle')">triangle</button>
  </div>
  <div class="w-row" style="margin-top:8px">
    <span class="w-label">filtro</span>
    <input type="range" class="w-range" id="ww-cut" min="100" max="8000" value="8000" oninput="wwCutoff()">
    <span class="w-val" id="ww-cutv">abierto</span>
    <button class="w-btn" id="ww-play" onclick="wwToggle()">▶ tocar</button>
  </div>
  <div style="font-size:10px;color:var(--mid);margin-top:8px" id="ww-desc">sine — onda sinusoidal pura, sin armónicos. suena limpia y suave.</div>
</div>
<div class="st">drwave — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis wavetable — Wolfgang Palm, 1978</strong><p>Wolfgang Palm desarrolló la síntesis wavetable para PPG (Palm Products GmbH) en 1978. La idea: en lugar de usar un solo oscilador de forma fija, almacenar una "tabla" de formas de onda distintas y navegar entre ellas en tiempo real. El PPG Wave y luego el Waldorf Microwave (1989) popularizaron este sonido. Es ese timbre "cambiante", cristalino y digital que escuchas en los primeros New Order, Vangelis en "Blade Runner", o los pads del Enya de los 80s. Serum, el wavetable synth más popular en producción moderna, es directamente descendiente de este concepto.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>de Vangelis al hyperpop — el sonido "digital y vivo"</strong><p>Vangelis usó wavetable en toda la banda sonora de Blade Runner — esos pads que suenan simultáneamente sintéticos y orgánicos. Gary Numan en "Cars" tiene leads wavetable característicos. En electrónica experimental moderna, Arca usa wavetable para transiciones tímbricas imposibles de conseguir con FM o sustractivo. En hyperpop y PC Music: el movimiento entre wavetables crea ese sonido "plástico que se derrite" tan característico del género. El Drwave del OP-1 da acceso a una versión simplificada pero muy usable de este concepto.</p></div></div>
  <div class="step"><div class="sl">funciona</div><div class="sb"><strong>una colección de formas de onda — navegas entre ellas</strong><p>Imagina una "tabla" con varias páginas, cada una con una forma de onda distinta: la primera puede ser sinusoidal, la siguiente añade armónicos gradualmente, las del centro son complejas y brillantes, las últimas son casi ruidosas. Puedes "leer" cualquier punto de esa tabla — navegar entre páginas genera el morphing. La gracia está en que el movimiento entre wavetables puede ser lento (pad que evoluciona durante minutos) o rápido (timbre que cambia con cada nota).</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>posición en la wavetable — el parámetro más importante</strong><p>Mueve el "cabezal de lectura" por la tabla de formas de onda. Girar muy despacio revela la transición gradual de una onda a otra: desde suave y sinusoidal hasta brillante y complejo, pasando por todas las texturas intermedias. Este es el parámetro que defines en el LFO cuando quieres que el pad evolucione solo. Cada posición es una "fotografía" distinta del timbre posible.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>tamaño de la tabla / velocidad de barrido</strong><p>Controla el rango de la tabla que el engine usa. Valor pequeño: el engine trabaja con una sección estrecha de la tabla — timbre más estable y consistente. Valor grande: el engine barre una sección amplia — más variedad tímbrica, más movimiento. Combinado con LFO en la posición de la tabla, el Blue determina cuánto varía el timbre en cada ciclo del LFO.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>sincronización / shape — cómo lee la tabla por ciclo</strong><p>Modifica cómo se escanea la tabla dentro de cada ciclo de la onda. Valores distintos crean diferentes patrones de lectura que añaden carácter y movimiento interno al timbre. En valores extremos puede crear aliasing intencional — ese "crunch" digital que Arca usa como elemento expresivo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>El Drwave puede generar saltos de volumen entre wavetables — 65–70% con margen.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — pad que evoluciona solo con LFO</strong>Pon el LFO en modo slow (muy lento), destino = posición de tabla (Ochre). Profundidad del LFO media. Attack=lento, sustain=alto. Toca una nota y deja sonar: el pad irá cambiando de timbre solo, navegando por la wavetable sin intervención. Tres minutos de ese pad grabados en Pista 3 dan más movimiento que cualquier textura estática.</div></div>
</div>

<div class="sec" id="m6-s3">
<div class="st">string — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>algoritmo Karplus-Strong, 1983 — física simulada</strong><p>Kevin Karplus y Alex Strong publicaron en 1983 un algoritmo que simula matemáticamente cómo vibra una cuerda. El mecanismo: generar ruido blanco en una línea de retardo (delay line) y filtrar repetidamente — el ruido se convierte en un tono sostenido que decae de forma natural, exactamente como una cuerda real. Fue revolucionario porque producía sonidos orgánicos sin usar osciladores convencionales. El modelado físico moderno (Yamaha VL1, Modartt Pianoteq) es descendiente directo de este trabajo.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>guitarras sintéticas, koto eléctrico, bajos con cuerpo</strong><p>Jonsi de Sigur Rós usa modelado físico de cuerda en sus arreglos orquestales procesados. Ryuichi Sakamoto exploró síntesis física para recrear instrumentos tradicionales japoneses en su período electrónico. En producción contemporánea, el String del OP-1 es útil cuando necesitas un bajo o un lead que tenga esa "cola" orgánica de cuerda sin sonar como un sample — algo entre un bajo de jazz pizzicato y una guitarra procesada. También funciona brillante para melodías tipo koto o sitar sintético.</p></div></div>
  <div class="step"><div class="sl">funciona</div><div class="sb"><strong>ruido en una línea de retardo + filtro = vibración de cuerda</strong><p>El engine genera un impulso inicial de ruido (como el "pluck" del dedo sobre la cuerda) y lo manda por una línea de retardo que se retroalimenta con un filtro suave. Cada vez que el sonido pasa por el filtro pierde un poco de las frecuencias altas — exactamente como una cuerda real que pierde energía con cada vibración. El resultado tiene la curva de decay natural de un instrumento acústico: arranca con plenitud tímbrica y se apaga gradualmente perdiendo brillo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>rigidez de la cuerda — de cuerda blanda a cuerda tensa</strong><p>Rigidez baja: la cuerda es blanda, como una cuerda de contrabajo — el tono es grave, el decay largo, y hay una ligera inarmonicidad natural. Rigidez alta: cuerda tensa, aguda, como una cuerda de guitarra clásica — ataque más percusivo, decay más corto, timbre más brillante. La rigidez define el "instrumento" simulado: koto, guitarra, bajo, clavicémbalo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>posición de punteo — dónde "tocas" la cuerda</strong><p>En una cuerda real, el punto donde la pulsas define el timbre. Pulsar en el centro (armónico) da un sonido suave y redondo. Pulsar cerca del puente da un sonido brillante y nasal (como el "sul ponticello" del violín). Este encoder simula exactamente eso: valores bajos = punteo central (cálido), valores altos = punteo junto al puente (brillante y tenso).</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>amortiguación — velocidad de pérdida de energía</strong><p>Controla qué tan rápido "muere" la cuerda. Amortiguación baja: la cuerda suena largo, como una guitarra eléctrica con sustain. Amortiguación alta: la cuerda se apaga rápido, como un pizzicato de contrabajo o un bajo de jazz. Combinado con el envelope de release, la amortiguación define si el sonido tiene cola natural o corte limpio.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>Volumen del instrumento.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — bajo de jazz sintético</strong>Rigidez media-baja, punteo a 30%, amortiguación media-alta. Attack=0 (muy importante — el string tiene su propio ataque natural; evita suavizarlo demasiado con el envelope). Decay=0, sustain=máximo, release=corto. Toca en las teclas graves con tempo lento. El resultado tiene ese carácter de upright bass acústico procesado que usa Thundercat o que escuchas en los beats de J Dilla.</div></div>
</div>

<div class="sec" id="m6-s4">
<div class="st">phase — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis por distorsión de fase — Casio CZ, 1984</strong><p>La distorsión de fase (Phase Distortion) fue desarrollada por Casio para sus sintetizadores CZ en 1984 como alternativa más barata a la FM de Yamaha. La idea es distorsionar la velocidad de lectura de una onda sinusoidal: en lugar de leer la onda a velocidad constante, la velocidad varía según una función de control, deformando la forma de onda y generando nuevos armónicos. El resultado tiene algo de la riqueza de la FM pero con un carácter propio más "orgánico y raro" — especialmente en los medios y graves.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>el sonido "extraño pero familiar" de los 80s japoneses</strong><p>Los Casio CZ-101 y CZ-1000 están en innumerables discos de los 80s — desde Depeche Mode hasta Ryuichi Sakamoto en sus piezas electrónicas más japonesas. Tiene una cualidad que es simultáneamente digital y orgánica, brillante y algo nasal, que lo hace difícil de clasificar. En electrónica experimental moderna, la distorsión de fase aparece cuando quieres algo con el carácter de la FM pero con menos "metalidad" — más redondo, más ambiguo. Burial usa síntesis similar para esos pads que suenan "usados" y nostálgicos.</p></div></div>
  <div class="step"><div class="sl">funciona</div><div class="sb"><strong>una sinusoidal cuya velocidad de lectura se deforma</strong><p>El engine lee una onda sinusoidal pero deforma cuándo pasa de la primera mitad a la segunda. En una onda normal, el paso por cero ocurre exactamente en la mitad del ciclo. En Phase Distortion, ese punto se desplaza: la onda llega rápido a su pico y tarda más en bajar, o viceversa. Esta asimetría genera armónicos sin usar un modulador separado como en FM — el resultado es más suave que FM pero igualmente complejo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>profundidad de la distorsión — de puro a deformado</strong><p>Valor cero: onda sinusoidal pura, sin armónicos, sonido completamente limpio. A medida que subes, la distorsión de fase añade armónicos progresivamente. Valores medios: carácter redondo con presencia, como un pad de Casio vintage. Valores altos: timbre más agresivo y brillante, empieza a aproximarse al territorio de FM pero con su propia identidad. Es el parámetro de "cuánto sonido" tiene el engine.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>forma de la curva de distorsión — el carácter tímbrico</strong><p>Cambia cómo se distribuye la distorsión dentro del ciclo de la onda. Distintas posiciones generan diferentes perfiles de armónicos: algunas suenan más pares (brillantes y abiertas), otras impares (más oscuras y "cuadradas"), otras crean asimetrías que suenan casi como un filtro. Este encoder define la "personalidad" del timbre — si suena más a Casio CZ, más a FM suave, o más a algo intermedio sin nombre claro.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>segunda capa de distorsión / LFO interno</strong><p>Añade una segunda modulación sobre la distorsión de fase principal. En valores bajos es casi inaudible. En valores medios añade un movimiento interno sutil — el timbre "pulsa" levemente con cada ciclo. En valores altos crea un efecto de chorus/vibrato interno que da mucha vida a pads estáticos. Combinado con attack lento es una de las texturas más características del engine.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>Volumen del instrumento.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — pad nostálgico tipo Burial</strong>Distorsión media (Ochre a 50%), curva a posición de timbre par (Blue a 30–40%), segunda capa ligera (Gray a 20%). Attack=2 segundos, sustain=máximo, release=largo. El resultado tiene esa cualidad "usada y cálida" del Phase Distortion que Burial usa en sus pads — no suena nuevo, suena como si viniera de un cassette que alguien grabó hace 20 años. Añade reverb largo y reduce el volumen hasta que apenas se oiga directamente.</div></div>
</div>


<div class="sec" id="m6-s5">
<div class="st">vocoder — origen, carácter y encoders</div>
<div class="steps">
  <div class="step"><div class="sl">origen</div><div class="sb"><strong>síntesis por análisis de voz — de Bell Labs a Kraftwerk</strong><p>El vocoder fue inventado por Homer Dudley en Bell Labs en 1939 como método para comprimir señales de voz en telecomunicaciones. El principio: analizar el espectro de frecuencias de una señal (normalmente la voz) y aplicar ese análisis sobre otra señal (normalmente un sintetizador). Durante los 70s, músicos como Kraftwerk lo convirtieron en instrumento expresivo — "Autobahn", "Computer World", "The Robots" son vocoders sobre síntesis sustractiva. Roger Troutman y el talkbox en el funk, Imogen Heap en "Hide and Seek", Daft Punk en "One More Time". El vocoder no suena como una voz ni como un sintetizador — suena a los dos al mismo tiempo.</p></div></div>
  <div class="step"><div class="sl">en música</div><div class="sb"><strong>de Kraftwerk al R&B — el sonido de la voz robótica</strong><p>Kraftwerk lo usó para la voz "de máquina" en casi toda su discografía desde los 70s. Herbie Hancock en "Rockit". Talk Box de Roger Troutman en "I Want to Be Your Man" de Zapp — base directa del sonido de T-Pain y buena parte del R&B moderno. Daft Punk lo usó de forma magistral: "Harder Better Faster Stronger" mezcla vocoder con talk box. En electrónica experimental: Oneohtrix Point Never usa vocoder de formas no convencionales — no para procesar voz cantada sino para crear texturas de "voz que no es voz".</p></div></div>
  <div class="step"><div class="sl">funciona</div><div class="sb"><strong>micrófono como modulador — synth como portador</strong><p>El vocoder en el OP-1 Field usa el micrófono integrado (o la entrada de línea) como señal de análisis. El engine divide esa señal en bandas de frecuencia y usa la energía de cada banda para controlar el volumen de las bandas equivalentes en el synth carrier. Cuando hablas o cantas, tu voz "da forma" al sonido del sintetizador. Sin micrófono activo, el vocoder puede generar texturas interesantes usando ruido interno como excitador.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>desplazamiento formántico — sube o baja el análisis de bandas</strong><p>Desplaza todas las bandas de análisis hacia arriba o hacia abajo del espectro. Neutro (centro): el vocoder preserva las características originales de la voz. Hacia arriba: la voz suena más aguda y pequeña — efecto "chipmunk robótico". Hacia abajo: la voz se vuelve grave y amenazante — efecto "gigante mecánico". Este parámetro define si el resultado suena como Daft Punk (centro-arriba) o como un robot de ciencia ficción de los 50s (abajo).</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>número de bandas — resolución del análisis</strong><p>Pocas bandas: análisis grueso, el resultado suena más robótico y "lo-fi" — menos detalle de la voz, más carácter sintético. Muchas bandas: análisis fino, la voz original es más reconocible en el resultado. El punto clásico de Kraftwerk es pocas bandas — eso es lo que hace que suene tan artificial y tan humano al mismo tiempo. Para uso más musical y reconocible: bandas altas. Para textura experimental: bandas bajas.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>gate de entrada — sensibilidad al micrófono</strong><p>Controla el umbral a partir del cual el vocoder reacciona a la señal de entrada. Gate bajo: el vocoder responde a cualquier sonido, incluyendo ruido ambiente — útil para texturas donde el micrófono captura el entorno y lo vocaliza. Gate alto: solo reacciona cuando hay señal fuerte y directa — mejor para uso con voz intencionada y limpia. Para textura generativa sin cantar: gate bajo con el OP-1 en una habitación con algo de ambiente sonoro.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen</strong><p>Volumen del instrumento.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>técnica — voz Daft Punk clásica</strong>Engine Vocoder activo. Sintetizador carrier: Synth con sawtooth, filtro abierto. Ochre (formante) en neutro o ligeramente arriba. Blue (bandas) a 40–50% — pocas bandas para carácter robótico. Gate medio. Toca una nota en el teclado y habla o canta directamente al micrófono del OP-1. Lo que dices determina el ritmo y la melodía. Lo que tocas en el teclado determina el tono. Eso es el vocoder clásico de "Around the World".</div></div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>técnica experimental — textura de voz sin cantar</strong>Gate muy bajo. Pon el OP-1 en una habitación con sonido ambiente (tráfico, lluvia, conversación lejana). El vocoder capturará ese ambiente y lo pasará por el carrier synth — el resultado suena a algo entre voz y textura, como si el espacio hablara. Burial construyó gran parte de "Untrue" capturando sonido ambiente de Londres y procesándolo. No es exactamente vocoder pero el principio es el mismo.</div></div>
</div>

<div class="sec" id="m6-s6">
<div class="st">engines field extra — laboratorio práctico</div>
<div class="steps">
  <div class="step"><div class="sl">mapa</div><div class="sb"><strong>completa el mapa de engines con enfoque de uso</strong><p>Además de los engines que ya trabajaste a fondo, en Field conviene practicar cinco familias extra: Digital, Dimension, DSynth, Pulse y Voltage. La idea no es memorizarlos: es saber cuándo uno de ellos resuelve el problema más rápido que FM/Synth/Drwave.</p></div></div>
  <div class="step"><div class="sl">digital</div><div class="sb"><strong>ataque definido y timbre nítido</strong><p>Úsalo cuando necesitas claridad en mezcla densa: arpegios cortos, capas altas y líneas con transitorio limpio. Si un sonido se pierde entre reverb y textura, prueba Digital antes de subir volumen.</p></div></div>
  <div class="step"><div class="sl">dimension</div><div class="sb"><strong>profundidad estéreo y pad ancho</strong><p>Dimension es ideal para colchones y capas laterales. Hazlo funcionar en registro medio/alto y evita pelear con bajo/kick. Su rol típico: dar espacio y movimiento sin robar protagonismo melódico.</p></div></div>
  <div class="step"><div class="sl">pulse/voltage</div><div class="sb"><strong>dos caminos para carácter rítmico</strong><p>Pulse te da contorno marcado y oscilación firme para líneas secas. Voltage aporta inestabilidad útil y color más áspero. Prueba el mismo patrón en ambos y decide por el carácter que necesita el tema.</p></div></div>
  <div class="step"><div class="sl">dsynth</div><div class="sb"><strong>ataques percusivos rápidos para kits híbridos</strong><p>DSynth funciona muy bien para generar material de drum sintético antes de samplearlo al kit. Haz 10 golpes cortos, elige 3 que destaquen y conviértelos en kit base. Es una vía rápida para kits propios.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Banco A/B/C de engines: mismo patrón de 1 compás, cambio instantáneo entre tres engines con igual envelope. Objetivo: entrenar oído de "carácter" separándolo de melodía y ritmo.</div></div>
</div>


<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">un sonido por engine — 75 min</div>
  <ul class="ex-ul">
    <li><strong>Synth:</strong> bass de techno. Sawtooth, filtro al 40%, resonancia al 60%. Sube el filtro lentamente mientras tocas una nota grave. Graba en Pista 1.</li>
    <li><strong>Drwave:</strong> pad que evoluciona. Posición tabla al 30%, tamaño medio. Grábalo en Pista 2.</li>
    <li><strong>String:</strong> bajo de jazz sintético. Rigidez al 30%, posición al 50%, amortiguación baja. Toca notas en la pentatónica.</li>
    <li><strong>Phase:</strong> sonido extraño familiar. Distorsión al 60%, segunda capa activa. ¿Suena a Casio vintage?</li>
    <li><strong>Vocoder:</strong> activa el micrófono. Habla mientras tocas. Ajusta desplazamiento formántico.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(5)">← anterior</button>
  <button class="btn btn-p" onclick="go(7)">siguiente →</button>
  <button class="btn btn-d" id="bd6" onclick="done(6)">marcar listo</button>
</div>
</div>`,
      m7: `<div class="mod" id="m7">
<div class="mod-hd">
  <div class="ey">módulo 07 · síntesis</div>
  <div class="mt">lfo — <strong>modulación automática en el tiempo</strong></div>
  <div class="md">El LFO no genera audio: mueve parámetros automáticamente en el tiempo. Convierte sonidos estáticos en sonidos vivos. Dominarlo marca la diferencia entre un pad plano y un pad que respira.</div>
  <div class="mm-row"><div class="mm">~45 min</div><div class="mm">OP-1 Field</div><div class="mm">un preset preparado</div></div>
</div>
<div class="sec" id="m7-s1">
<div class="st">concepto y acceso</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>oscilador de baja frecuencia — mueve parámetros, pero no produce audio directamente</strong><p>El LFO oscila demasiado lento para ser audible. En cambio, su señal controla otro parámetro del sonido automáticamente: volumen, pitch, posición de wavetable, cutoff del filtro. El resultado es movimiento en el tiempo sin intervención manual. Es la diferencia entre un pad estático y un pad que "respira".</p></div></div>
  <div class="step"><div class="sl">acceso</div><div class="sb"><strong><kbd>T4</kbd> ver LFO activo · <kbd>Shift</kbd>+<kbd>T4</kbd> cambiar tipo</strong><p>El LFO del preset activo vive bajo <kbd>T4</kbd>. Pulsa <kbd>T4</kbd> para ver y editar el LFO actual. <kbd>Shift</kbd>+<kbd>T4</kbd> abre el browser: encoder azul navega la lista, <kbd>T4</kbd> confirma. El LFO elegido se guarda con el preset — forma parte del sonido junto con engine, envelope y efecto.</p></div></div>
  <div class="step"><div class="sl">free "F"</div><div class="sb"><strong>LFO libre — no reinicia con cada nota</strong><p>Si el destino muestra el símbolo "F", el LFO corre continuo sin reiniciarse al tocar notas nuevas. Útil para barridos lentos (un filtro abriéndose durante 4 compases) que no quieres que "salten" con cada pulsación de tecla. Sin "F": el LFO reinicia en cada nota — movimiento predecible. Con "F": el LFO es un proceso continuo independiente del teclado.</p></div></div>
  <div class="step"><div class="sl">clock</div><div class="sb"><strong>reloj con número = sync al BPM · reloj con mano = libre</strong><p>Determina si la velocidad del LFO está anclada al tempo del tape (sync) o corre libremente (free). Sync 1/4: un ciclo por beat — tremolo rítmico. Sync 1/16: cuatro ciclos por beat — chop rápido. Libre: el LFO crea tensión polirrítmica con el tempo.</p></div></div>
</div>
</div>
<div class="sec" id="m7-s2">
<div class="st">tremolo lfo — volumen y pitch</div>
<div class="steps">
  <div class="step"><div class="sl">qué hace</div><div class="sb"><strong>el LFO más musical — modula volumen y pitch cíclicamente</strong><p>El Tremolo LFO oscila el volumen y/o el pitch de forma cíclica. Volumen oscilando = tremolo. Pitch oscilando = vibrato. Ambos = expresividad de instrumento de cuerda. Es el LFO de partida recomendado porque el efecto es siempre audible y fácil de entender.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>velocidad — free o sync al BPM</strong><p>Reloj con número = sync. Reloj con mano = libre. Sync 1/8 para tremolo rítmico. Libre y lento para vibrato orgánico.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>pitch — intensidad del vibrato</strong><p>Cuánto oscila la afinación. Bajo (5–15%): vibrato sutil que añade calidez sin dominar. Alto: vibrato exagerado. Puede ser negativo — invierte la fase de la oscilación.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>volumen — intensidad del tremolo</strong><p>Cuánto oscila el volumen. Bajo: fluctuación apenas perceptible. Alto con sync 1/8 y forma square: el chop rítmico del R&amp;B y house. También puede ser negativo.</p></div></div>
  <div class="step"><div class="sl"><kbd>Shift</kbd>+<kbd class="enc">Orange</kbd></div><div class="sb"><strong>forma de onda — cómo oscila</strong><p><strong>sine</strong>: sube y baja suavemente — lo más orgánico. <strong>saw</strong>: sube gradual, cae de golpe (o al revés). <strong>exp</strong>: curva exponencial — picos más agresivos. <strong>square</strong>: salta entre dos valores sin transición — el "chop" duro. <strong>blip</strong>: solo el pico, pulsos breves.</p></div></div>
</div>
</div>
<div class="sec" id="m7-s3">
<div class="st">value lfo — parámetro específico</div>
<div class="steps">
  <div class="step"><div class="sl">qué hace</div><div class="sb"><strong>apunta a cualquier parámetro concreto — el más quirúrgico</strong><p>A diferencia del Tremolo (que solo toca volumen/pitch), el Value LFO puede modular cualquier parámetro específico: el encoder azul del FM (ratio), el encoder ochre del Synth (filtro), el encoder del efecto CWO. La combinación Drwave + Value LFO apuntando a posición de wavetable es la receta más usada para pads evolucionando.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>velocidad</strong><p>Sync (número) o libre (mano). Igual que Tremolo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>cantidad — profundidad de la modulación</strong><p>Cuánto se mueve el parámetro destino en cada ciclo del LFO. Bajo: variación sutil. Alto: el parámetro recorre casi todo su rango.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>categoría de destino</strong><p>Engine / Envelope / FX / Pitch &amp; Volume. Selecciona la categoría del parámetro a modular.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>parámetro específico dentro de la categoría</strong><p>Dentro de Engine: el encoder Blue, Ochre, Gray u Orange del engine activo. Ejemplo: Gray=Engine, Orange=Ochre → Value LFO mueve el filtro del Synth automáticamente.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>la receta más usada</strong>Drwave + Value LFO → destino Engine → Ochre (posición tabla) → sync 1/4 → cantidad 40%. El pad navega la tabla de formas de onda al tempo — timbre que evoluciona sin tocar nada. Es el pad "vivo" que caracteriza el ambient electrónico de Burial, Arca, y Oneohtrix Point Never.</div></div>
</div>

<div class="widget" id="w-lfo-lab">
  <div class="w-title">lfo visual — mismo loop con/sin movimiento</div>
  <canvas class="w-canvas" id="wlfo-canvas" height="80"></canvas>
  <div class="w-row" style="margin-top:10px;gap:6px">
    <span class="w-label">forma</span>
    <button class="w-btn active" id="wlfo-sine" onclick="wlfoShape('sine')">sine</button>
    <button class="w-btn inactive" id="wlfo-tri" onclick="wlfoShape('triangle')">triangle</button>
    <button class="w-btn inactive" id="wlfo-square" onclick="wlfoShape('square')">square</button>
    <button class="w-btn inactive" id="wlfo-rand" onclick="wlfoShape('random')">random</button>
  </div>
  <div class="w-row">
    <span class="w-label">velocidad</span>
    <input type="range" class="w-range" id="wlfo-rate" min="1" max="60" value="12" oninput="wlfoUpdate()">
    <span class="w-val" id="wlfo-ratev">1.2Hz</span>
  </div>
  <div class="w-row">
    <span class="w-label">profundidad</span>
    <input type="range" class="w-range" id="wlfo-depth" min="0" max="100" value="25" oninput="wlfoUpdate()">
    <span class="w-val" id="wlfo-depthv">25%</span>
  </div>
  <div class="w-row">
    <span class="w-label">destino</span>
    <select id="wlfo-dest" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wlfoUpdate()">
      <option value="filter">timbre / cutoff</option>
      <option value="pitch">pitch (inestabilidad)</option>
      <option value="amp">volumen (tremolo)</option>
    </select>
    <button class="w-btn secondary" id="wlfo-toggle" onclick="wlfoToggle()">▶ escuchar</button>
    <button class="w-btn inactive" onclick="wlfoAB()">A/B sin lfo</button>
  </div>
  <div class="w-row"><span class="w-tag" id="wlfo-note">usa profundidad baja para pad; sube solo si el movimiento aporta.</span></div>
</div>

<div class="sec" id="m7-s4">
<div class="st">random lfo — el caos controlado</div>
<div class="steps">
  <div class="step"><div class="sl">qué hace</div><div class="sb"><strong>salta a valores aleatorios (sample &amp; hold)</strong><p>En lugar de oscilar cíclicamente, el Random LFO salta a un valor aleatorio nuevo a intervalos regulares. El resultado es un parámetro que "cambia de opinión" periódicamente. Con el filtro como destino y velocidad baja: el cutoff salta a un valor distinto cada 2 compases — cada sección del track suena ligeramente diferente sin intervención.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>cantidad — rango de los saltos</strong><p>Bajo: saltos pequeños, variación sutil. Alto: el parámetro puede saltar de un extremo al otro.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>velocidad — frecuencia de los saltos</strong><p>Lento: mantiene cada valor varios compases. Rápido: saltos constantes — glitch o textura nerviosa.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>destino + parámetro (Orange)</strong><p>Igual que Value LFO: Gray=categoría, Orange=parámetro específico.</p></div></div>
</div>
</div>
<div class="sec" id="m7-s5">
<div class="st">element lfo — señales externas como modulación</div>
<div class="steps">
  <div class="step"><div class="sl">qué hace</div><div class="sb"><strong>usa el micrófono, g-force o línea como modulador</strong><p>El Element LFO no genera oscilación propia — usa una señal externa como modulador. Fuentes: micrófono integrado (el volumen ambiental modula el sonido), entrada de línea (lo que conectes modula el sonido), g-force (inclinar el OP-1 físicamente modula el sonido), radio, envelope del engine, level del engine.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>fuente — elige qué señal externa modula</strong><p>Navega entre: g-force, line-in, mic, radio, envelope del engine, level del engine.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>cantidad — escala la influencia de la fuente</strong><p>Cuánto afecta la señal externa al parámetro destino. Alto: pequeñas variaciones en la fuente producen cambios grandes.</p></div></div>
  <div class="step"><div class="sl">g-force</div><div class="sb"><strong>inclinar el OP-1 modula el sonido — performance gestual</strong><p>Element LFO, fuente=g-force, destino=Pitch&amp;Volume → pitch. Inclina el OP-1 hacia delante: el pitch sube. Hacia atrás: baja. El instrumento reacciona al movimiento físico — performance completamente experimental y completamente funcional.</p></div></div>
  <div class="step"><div class="sl">mic</div><div class="sb"><strong>el ambiente como modulador — sonido que responde al espacio</strong><p>Element LFO, fuente=mic, destino=Engine → filtro, cantidad media. Habla cerca del OP-1: el filtro se abre. Silencio: se cierra. Para algo más extremo: fuente=mic, destino=Engine → modulación FM. El timbre FM cambia según el ruido de la habitación — instrumento que respira con el espacio.</p></div></div>
</div>
</div>
<div class="sec" id="m7-s6">
<div class="st">recetas LFO — combinaciones que funcionan</div>
<div class="steps">
  <div class="step"><div class="sl">pad vivo</div><div class="sb"><strong>Drwave + Value LFO → posición tabla, sync 1/4, cantidad 40%</strong><p>El pad navega la tabla de formas de onda al tempo. Con reverb larga encima. El timbre "evoluciona" de forma cíclica.</p></div></div>
  <div class="step"><div class="sl">vibrato FM</div><div class="sb"><strong>FM + Tremolo → pitch bajo (10%), libre y lento</strong><p>Vibrato sutil que añade humanidad al bass FM sin dominar el timbre. El carácter de bajo FM "con alma" de J Dilla y Flying Lotus.</p></div></div>
  <div class="step"><div class="sl">chop R&amp;B</div><div class="sb"><strong>Synth + Tremolo → volumen alto, square, sync 1/8</strong><p>El volumen trocea en corcheas. Con Mother sutil detrás para dar profundidad sin perder ataque. El pad troceado del R&amp;B y house clásico.</p></div></div>
  <div class="step"><div class="sl">filtro random</div><div class="sb"><strong>Synth + Random LFO → filtro, velocidad baja, cantidad 40%</strong><p>El filtro salta cada 2 compases. El pad de fondo nunca suena exactamente igual — variedad sin intervención.</p></div></div>
  <div class="step"><div class="sl">MIDI LFO</div><div class="sb"><strong>controla el OP-1 desde un hardware externo</strong><p>El MIDI LFO recibe MIDI CC externo — hasta 4 canales simultáneos — y los enruta como modulación a parámetros del OP-1. Con un controlador MIDI conectado: sliders, ruedas o pedales controlan directamente el timbre en tiempo real.</p></div></div>
</div>
</div>

<div class="sec" id="m7-s7">
<div class="st">midi lfo + velocity lfo — control expresivo</div>
<div class="steps">
  <div class="step"><div class="sl">midi lfo</div><div class="sb"><strong>modulación desde control externo</strong><p>Cuando conectas un controlador MIDI, el MIDI LFO te deja convertir CC en movimiento de parámetros internos. Útil para performance: un fader controla filtro, otro profundidad de FX, otro panorama, todo sin soltar el teclado.</p></div></div>
  <div class="step"><div class="sl">velocity lfo</div><div class="sb"><strong>la fuerza de toque como fuente de modulación</strong><p>Velocity LFO usa la intensidad de la pulsación para abrir o cerrar parámetros. Tocar suave = timbre contenido; tocar fuerte = timbre abierto o más brillante. Es clave para evitar secuencias planas cuando repites muchas notas.</p></div></div>
  <div class="step"><div class="sl">uso real</div><div class="sb"><strong>expresividad sin automatizar en tape</strong><p>Si no quieres dibujar automatizaciones ni grabar encoder moves, usa Velocity LFO para dinámica orgánica y MIDI LFO para gestos macro. La combinación da movimiento musical con menos edición posterior.</p></div></div>
  <div class="step"><div class="sl">ejercicio A/B</div><div class="sb"><strong>mismo loop, dos respuestas distintas</strong><p>A: loop sin velocity, todas las notas con mismo golpe. B: mismo loop con Velocity LFO en filtro o timbre. Compara cuál respira mejor. Después añade MIDI LFO en un parámetro lento para evolución de 8 compases.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Visualizador de "toque vs timbre": barra de velocity en tiempo real + color de cutoff/timbre. Ayuda a entender causa-efecto al instante al practicar digitación expresiva.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">tres LFOs distintos en un track — 45 min</div>
  <ul class="ex-ul">
    <li><strong>Pad 1 — Value LFO:</strong> Drwave + Value LFO → Engine → Ochre (posición tabla), sync 1/4, cantidad 50%. Graba 8 compases en Pista 1. El pad evoluciona solo.</li>
    <li><strong>Pad 2 — Tremolo LFO:</strong> Synth + Tremolo, forma square, sync 1/8, volumen 70%, pitch 0. Graba en Pista 2. ¿Encaja con Pad 1?</li>
    <li><strong>Melodía sin LFO:</strong> FM bass pluck sin LFO en Pista 3. Escucha los tres juntos — el contraste entre lo estático y lo vivo tiene carácter propio.</li>
    <li>Cambia el LFO del Pad 1 de Value a Random LFO. ¿Qué cambia en el carácter del track?</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(6)">← anterior</button>
  <button class="btn btn-p" onclick="go(8)">siguiente →</button>
  <button class="btn btn-d" id="bd7" onclick="done(7)">marcar listo</button>
</div>
</div>`,
      m8: `<div class="mod" id="m8">
<div class="mod-hd">
  <div class="ey">módulo 08 · síntesis</div>
  <div class="mt">efectos del <strong>OP-1 Field</strong></div>
  <div class="md">En Field, los efectos forman parte del diseño de sonido desde el inicio. Aquí los trabajamos en clave práctica: qué decisión resuelve cada uno y qué gesto concreto aplicar en el momento.</div>
  <div class="mm-row"><div class="mm">~2h</div><div class="mm">OP-1 en mano</div><div class="mm">escucha activa</div></div>
</div>

<div class="sec" id="m8-s1">
<div class="st">cómo acceder a los efectos</div>
<div class="steps">
  <div class="step"><div class="sl">acceso</div><div class="sb"><strong><kbd>T3</kbd> abre FX · <kbd>Shift</kbd>+<kbd>T3</kbd> cambia efecto</strong><p>En synth o drum, el efecto vive en T3 dentro del preset (junto a engine, envelope y LFO). Haz A/B rápido: toca una frase corta, activa/desactiva y decide si aporta función real o solo “más sonido”.</p></div></div>
  <div class="step"><div class="sl">lista field</div><div class="sb"><strong>los FX del flujo field que debes dominar primero</strong><p>Delay, Mother, Spring, Punch, Nitro, CWO, Phone, Grid y Terminal. No intentes memorizarlos de golpe: piensa “qué necesito ahora” y elige por función.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>elige por función musical en el arreglo</strong><p>Si necesitas profundidad: Mother/Spring. Si falta pegada: Punch. Si está demasiado limpio: Nitro/Terminal. Si quieres movimiento: Delay/Grid/CWO. Si necesitas contraste de registro: Phone.</p></div></div>
</div>
</div>

<div class="sec" id="m8-s2">
<div class="st">01 — delay · repetición controlada</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>repetición para crear espacio rítmico</strong><p>Delay no solo “embellece”: puede convertir una frase corta en patrón. Si la línea principal ya está cargada, baja repeticiones; si está vacía, deja que el delay complete huecos.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>tiempo/sync</strong><p>Prueba primero sincronizado al tempo para no pelearte con el groove. Si buscas deriva o tensión, pasa a tiempo libre y escucha cómo se desplaza contra el beat.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>feedback</strong><p>Poco feedback: apoyo sutil. Mucho feedback: textura que ocupa primer plano. Si tapa la melodía original, reduce feedback o abre más espacio entre notas.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>usar delay largo en todos los elementos</strong><p>Pasa porque suena “grande” al principio. Corrige dejando uno o dos elementos con delay protagonista y el resto más seco para conservar definición.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Comparador “seco vs delay sync vs delay libre” sobre el mismo riff en loop, con botón A/B/C para entrenar decisión de tempo y espacio.</div></div>
</div>

<div class="sec" id="m8-s3">
<div class="st">02 — mother · profundidad y cola moderna</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>profundidad amplia sin perder carácter field</strong><p>Mother funciona muy bien en pads, colas y texturas largas. Si un sonido principal pierde ataque, baja cantidad o recorta duración de cola antes de ecualizar.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>delante vs detrás en la mezcla</strong><p>Más Mother suele empujar elementos hacia atrás. Menos Mother los trae delante. Decide qué debe liderar y qué debe acompañar antes de tocar otros parámetros.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>usar Mother para “arreglar” falta de arreglo</strong><p>Pasa cuando un loop suena vacío. Corrige primero patrón y registro; después usa Mother para dar profundidad.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Slider de profundidad percibida: mismo loop con tres estados (primer plano, medio, fondo) para entrenar oído de “posición” en mezcla.</div></div>
</div>

<div class="sec" id="m8-s4">
<div class="st">03 — spring · carácter de muelle</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>textura más metálica y vintage que Mother</strong><p>Spring resalta carácter y grano del ataque. En drums o plucks puede sonar más presente que una cola grande de Mother.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>cuándo elegir spring</strong><p>Si quieres color reconocible y no solo “espacio”, empieza por Spring. Si quieres atmósfera amplia y más limpia, vuelve a Mother.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>exceso de resonancia en medios</strong><p>Pasa al sumar Spring en varias capas. Corrige usando Spring en una o dos pistas clave y dejando otras sin ese color.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>A/B “Mother vs Spring” en el mismo snare y pad para distinguir “profundidad” frente a “carácter”.</div></div>
</div>

<div class="sec" id="m8-s5">
<div class="st">04 — punch · recuperar pegada</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>transiente y definición cuando el loop se ablanda</strong><p>Punch entra cuando la capa perdió ataque por exceso de fx o compresión. Úsalo como corrección puntual; cuando aporta, se queda.</p></div></div>
  <div class="step"><div class="sl">A/B</div><div class="sb"><strong>si mejora pegada sin agresividad, se queda</strong><p>Haz comparación corta con y sin Punch en contexto de mezcla completa. Si el sonido se vuelve duro o fatigante, baja intensidad o desactiva.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>aplicar punch en todo el proyecto</strong><p>Pasa por buscar “más energía”. Corrige priorizando solo kick/snare o una capa rítmica principal.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Medidor visual de transiente antes/después de Punch con escucha A/B en loop de 2 compases.</div></div>
</div>

<div class="sec" id="m8-s6">
<div class="st">05 — nitro · distorsión y bit crush</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>calor, grano o rotura controlada</strong><p>Nitro sirve para pasar de “limpio” a “vivo”. En dosis bajas añade presencia; en dosis altas rompe textura y genera aspereza creativa.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>si pierdes detalle, retrocede un paso</strong><p>El punto útil suele estar justo antes de perder definición de ataque o afinación. Busca ese borde y quédate allí.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>confundir “más fuerte” con “mejor”</strong><p>Nitro puede parecer mejor por subir percepción de volumen. Corrige igualando nivel en A/B antes de decidir.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Control “clean → grit → broken” con tres versiones guardadas del mismo patch para entrenar escucha de saturación útil.</div></div>
</div>

<div class="sec" id="m8-s7">
<div class="st">06 — cwo · modulación irregular</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>movimiento tímbrico no lineal</strong><p>CWO sirve para introducir inestabilidad interesante en capas que suenan demasiado previsibles. Empieza suave y sube hasta que aparezca carácter sin destruir la fuente.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>mejor por capas que en el bus completo</strong><p>En una capa secundaria suele funcionar mejor que en todo el mix. Úsalo para contraste entre “zona estable” y “zona viva”.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>hacer CWO protagonista en todos los elementos</strong><p>Genera fatiga rápida y pérdida de foco. Corrige eligiendo un solo elemento con CWO destacado por sección.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>XY pad de CWO con grabación de automatización en 8 compases para experimentar transformación gradual.</div></div>
</div>

<div class="sec" id="m8-s8">
<div class="st">07 — phone · recorte de banda para contraste</div>
<div class="steps">
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>poner un elemento en otro plano narrativo</strong><p>Phone es perfecto para intros, puentes o llamadas/respuesta: hace que una capa suene deliberadamente limitada en espectro y destaque por contraste.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>útil por secciones, no durante todo el tema</strong><p>Si lo dejas fijo en toda la pista, pierde efecto. Funciona mejor como recurso de transición o color puntual.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>confundir contraste con falta de cuerpo</strong><p>Si todo suena delgado, quizá Phone está ocupando el papel equivocado. Devuelve el cuerpo en bajo y base, y deja Phone para detalle.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Botón de transición “full band ↔ phone” para practicar cambios de sección sin parar el tape.</div></div>
</div>

<div class="sec" id="m8-s9">
<div class="st">08 — grid + terminal · ritmo y degradación</div>
<div class="steps">
  <div class="step"><div class="sl">grid</div><div class="sb"><strong>movimiento rítmico del efecto</strong><p>Grid convierte el efecto en parte del patrón. Úsalo cuando quieres que el espacio “marque pulso” junto al secuenciador.</p></div></div>
  <div class="step"><div class="sl">terminal</div><div class="sb"><strong>degradación digital con intención</strong><p>Terminal sirve para textura cruda, glitch y bordes ásperos. Mejor en dosis por capa que en el master completo.</p></div></div>
  <div class="step"><div class="sl">error típico</div><div class="sb"><strong>sumar grid y terminal sin dejar huecos</strong><p>Cuando ambos van al máximo, el rango medio se congestiona. Corrige alternando protagonismo por secciones: primero ritmo (Grid), luego rotura (Terminal).</p></div></div>
  <div class="step"><div class="sl">laboratorio</div><div class="sb"><strong>mismo riff, decisiones opuestas</strong><p>Versión A: Grid sutil, Terminal apagado. Versión B: Grid mínimo, Terminal protagonista. Versión C: equilibrio moderado. Elige según la función narrativa del tema, no por espectacularidad aislada.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>pieza interactiva</strong>Selector ciego de renders con etiquetas ocultas (Delay/Mother/Spring/Punch/Nitro/CWO/Phone/Grid/Terminal) para elegir solo por oído y luego revelar el efecto.</div></div>
</div>

<div class="widget" id="w-fx-blind">
  <div class="w-title">comparador ciego de fx — decide por oído</div>
  <div class="w-row" style="gap:6px">
    <button class="w-btn" onclick="wfxPlay('a')">A</button>
    <button class="w-btn" onclick="wfxPlay('b')">B</button>
    <button class="w-btn" onclick="wfxPlay('c')">C</button>
    <button class="w-btn inactive" onclick="wfxReveal()">revelar</button>
    <button class="w-btn inactive" onclick="wfxShuffle()">nuevo orden</button>
  </div>
  <div class="w-row">
    <span class="w-tag" id="wfx-note">escucha A/B/C sin mirar etiqueta. luego revela y quédate con el que resuelva mejor la función.</span>
  </div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">misma melodía · 9 FX field · 9 decisiones — 50 min</div>
  <ul class="ex-ul">
    <li>Graba una melodía corta sin FX en Pista 2 y úsala como material base para todo el laboratorio.</li>
    <li>Haz 9 pases cortos: Delay, Mother, Spring, Punch, Nitro, CWO, Phone, Grid y Terminal. Mantén el mismo patrón para comparar solo el cambio de efecto.</li>
    <li>Etiqueta cada pase por función percibida: profundidad, pegada, textura, contraste o degradación.</li>
    <li>Elige 2 FX para versión final del loop: uno protagonista y uno de soporte. Justifica la decisión en una frase práctica (“qué resolvió”).</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(7)">← anterior</button>
  <button class="btn btn-p" onclick="go(9)">siguiente →</button>
  <button class="btn btn-d" id="bd8" onclick="done(8)">marcar listo</button>
</div>
</div>`,
      m9: `<div class="mod" id="m9">
<div class="mod-hd">
  <div class="ey">módulo 09 · síntesis</div>
  <div class="mt">percusión por <strong>síntesis</strong></div>
  <div class="md">Los drums del OP-1 no tienen por qué venir de samples. Puedes construir un kit completo desde cero con los engines de síntesis. Cada elemento de la batería tiene una receta específica, y eso te da control real sobre el carácter de cada golpe.</div>
  <div class="mm-row"><div class="mm">~2h</div><div class="mm">Drum mode + Synth mode</div><div class="mm">construye tu kit</div></div>
</div>

<div class="sec" id="m9-s1">
<div class="st">el concepto — síntesis de percusión</div>
<div class="steps">
  <div class="step"><div class="sl">por qué</div><div class="sb"><strong>cada golpe de batería es una forma de onda con un envelope específico</strong><p>Un kick drum es básicamente un tono grave que baja rápido de frecuencia en el ataque (el "thump") más un poco de cuerpo. Un snare es ruido filtrado con un ataque corto. Un hi-hat es ruido de alta frecuencia. Una vez que entiendes esto, cualquier engine del OP-1 puede convertirse en un instrumento de percusión — solo necesitas configurar el envelope y las frecuencias correctamente.</p></div></div>
  <div class="step"><div class="sl">cómo</div><div class="sb"><strong>Synth mode → graba en Drum mode</strong><p>Diseña el sonido en Synth mode hasta que suene como quieres. Luego ve a Drum mode, entra en modo grabación de sample (botón Mic + tecla del slot), y graba el sonido desde Synth mode pulsando una nota. El sample del synth queda asignado al slot del drum. Ahora lo tienes en los pads del kit.</p></div></div>
  <div class="step"><div class="sl">ventaja</div><div class="sb"><strong>carácter propio — ningún otro kit suena igual</strong><p>Los kits de síntesis tienen un carácter que los samples convencionales no tienen: son perfectamente adaptados a tu música (mismos engines, mismo timbre), son completamente originales, y puedes modificarlos en cualquier momento regrabando. Flying Lotus y Arca usan síntesis de percusión exactamente por esto — sus drums no suenan como los de nadie más.</p></div></div>
</div>
</div>

<div class="sec" id="m9-s2-env">
<div class="st">el envelope universal — cómo respira cualquier sonido</div>
<div class="sc-list">
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd class="enc">Ochre</kbd></div><div class="sd">attack — tiempo desde que tocas hasta el volumen máximo</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd class="enc">Blue</kbd></div><div class="sd">decay — caída desde el pico hasta el sustain</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd class="enc">Gray</kbd></div><div class="sd">sustain — nivel de volumen mientras mantienes la tecla</div></div>
  <div class="sc"><div class="sk"><kbd>Shift</kbd> <kbd class="enc">Orange</kbd></div><div class="sd">release — cola de sonido después de soltar la tecla</div></div>
</div>
<div class="steps">
  <div class="step"><div class="sl">percusión</div><div class="sb"><strong>attack=0 · decay=corto · sustain=0 · release=mínimo</strong><p>Golpe inmediato que desaparece. Cuanto más corto el decay, más percusivo. Funciona en todos los engines — convierte FM en xilófono, DNA en textura percusiva, String en pluck.</p></div></div>
  <div class="step"><div class="sl">pad</div><div class="sb"><strong>attack=lento · sustain=alto · release=largo</strong><p>El sonido "sube" gradualmente cuando tocas la tecla. Crea la sensación de que el sonido "aparece" en lugar de atacar. Característico de la música ambient desde Brian Eno — "Music for Airports" está llena de pads con attack lento.</p></div></div>
  <div class="step"><div class="sl">pluck</div><div class="sb"><strong>attack=0 · decay=medio · sustain=0 · release=corto</strong><p>El sonido tiene energía en el ataque pero muere rápido — como una guitarra punteada o un bajo de jazz. La longitud del decay define si suena como una nota de pizzicato corta o como una nota que se sostiene un momento.</p></div></div>
  <div class="step"><div class="sl">swell</div><div class="sb"><strong>attack=muy lento · decay=0 · sustain=máximo · release=muy largo</strong><p>El sonido crece lentamente y se mantiene indefinidamente mientras mantienes la tecla, luego se apaga muy despacio. El colchón de acordes de "Space" de Boards of Canada o las texturas de Ólafur Arnalds funcionan así.</p></div></div>
</div>
</div>


<div class="widget" id="w-adsr">
  <div class="w-title">envelope — escucha el ADSR en tiempo real</div>
  <canvas class="w-canvas" id="wa-canvas" height="80"></canvas>
  <div class="w-row" style="margin-top:12px">
    <span class="w-label">attack</span>
    <input type="range" class="w-range" id="wa-a" min="1" max="200" value="5" oninput="waDrawAndLabel()">
    <span class="w-val" id="wa-av">5ms</span>
  </div>
  <div class="w-row">
    <span class="w-label">decay</span>
    <input type="range" class="w-range" id="wa-d" min="10" max="500" value="100" oninput="waDrawAndLabel()">
    <span class="w-val" id="wa-dv">100ms</span>
  </div>
  <div class="w-row">
    <span class="w-label">sustain</span>
    <input type="range" class="w-range" id="wa-s" min="0" max="100" value="70" oninput="waDrawAndLabel()">
    <span class="w-val" id="wa-sv">70%</span>
  </div>
  <div class="w-row">
    <span class="w-label">release</span>
    <input type="range" class="w-range" id="wa-r" min="10" max="2000" value="300" oninput="waDrawAndLabel()">
    <span class="w-val" id="wa-rv">300ms</span>
  </div>
  <div class="w-row" style="margin-top:10px;flex-wrap:wrap;gap:6px">
    <button class="w-btn" onclick="waPlay()">▶ escuchar</button>
    <button class="w-btn inactive" onclick="waPreset('perc')">percusión</button>
    <button class="w-btn inactive" onclick="waPreset('pad')">pad</button>
    <button class="w-btn inactive" onclick="waPreset('pluck')">pluck</button>
    <button class="w-btn inactive" onclick="waPreset('swell')">swell</button>
  </div>
</div>

<div class="sec" id="m9-s2">
<div class="st">kick drum — golpe grave con punch</div>
<div class="steps">
  <div class="step"><div class="sl">engine</div><div class="sb"><strong>FM Synth — la receta estándar</strong><p>El kick drum clásico de síntesis electrónica (desde el Roland TR-808 hasta hoy) usa FM o síntesis simple: un tono que arranca grave, sube brevemente en el ataque, y cae rápido. FM con ratio bajo (1 o 2) y modulación media es el punto de partida.</p></div></div>
  <div class="step"><div class="sl">envelope</div><div class="sb"><strong>attack=0 · decay=corto-medio · sustain=0 · release=mínimo</strong><p>El ataque debe ser instantáneo (attack=0) para que el golpe sea percusivo. El decay define si el kick es seco y punchy (decay corto, estilo techno) o profundo y con cuerpo (decay medio, estilo trap o lo-fi). Sustain=0 es fundamental — si el kick tiene sustain se vuelve una nota mantenida en vez de un golpe.</p></div></div>
  <div class="step"><div class="sl">FM</div><div class="sb"><strong>ratio 1 · modulación 40% · feedback bajo</strong><p>Con estos valores el FM genera un tono grave y orgánico. Toca la nota más grave del teclado. El resultado tiene el cuerpo del 808 pero con el carácter de tu engine. Para un kick más "plástico" y sintético: ratio 2, modulación más alta. Para un kick más "suave" y profundo: modulación baja.</p></div></div>
  <div class="step"><div class="sl">pitch</div><div class="sb"><strong>el pitch baja en el ataque — el "thump"</strong><p>En el OP-1 puedes simular el pitch envelope del 808 usando el LFO: configura el LFO en modo envelope, destino = pitch, con una bajada rápida. Esto hace que el kick arranque agudo y caiga al grave en milisegundos — ese movimiento de pitch es lo que le da el punch característico al kick electrónico.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>variaciones de kick por engine</strong><strong>String:</strong> rigidez baja, amortiguación alta, attack=0 — kick orgánico tipo contrabajo golpeado. Más cálido que FM.<br><strong>Synth sustractivo:</strong> onda sinusoidal (o triangle), filtro casi cerrado, resonancia media — kick tipo Minimoog, muy profundo.<br><strong>Cluster:</strong> densidad alta, dispersión baja, decay corto — kick ruidoso y experimental, sin tono definido claro.</div></div>
</div>

<div class="sec" id="m9-s3">
<div class="st">snare y clap — el golpe medio</div>
<div class="steps">
  <div class="step"><div class="sl">concepto</div><div class="sb"><strong>ruido filtrado + tono — la combinación del snare</strong><p>Un snare real tiene dos componentes: el "crack" de la baqueta en el parche (percusivo, con tono) y el "buzz" de los aros metálicos por debajo (ruido de alta frecuencia). Para sintetizarlo: combinas un tono corto grave con ruido filtrado. En el OP-1 esto se hace con dos engines distintos asignados a dos slots del drum, o aproximando con un solo engine.</p></div></div>
  <div class="step"><div class="sl">FM snare</div><div class="sb"><strong>ratio alto · modulación alta · decay corto</strong><p>FM con ratio 6–8 y modulación alta genera ese sonido metálico y con ruido que se parece al crack del snare. Attack=0, decay corto (0.1–0.2 segundos). Toca en una nota media del teclado. Es un snare sintético y agresivo — no realista, pero con mucho carácter.</p></div></div>
  <div class="step"><div class="sl">DNA snare</div><div class="sb"><strong>mutación alta · decay corto — el más experimental</strong><p>DNA con mutación alta y longitud de cadena media genera un sonido que mezcla ruido y tono de forma impredecible — cada golpe suena ligeramente diferente. Eso es exactamente lo que hace que los snares de Flying Lotus suenen orgánicos: ningún golpe es idéntico al anterior. Attack=0, decay muy corto.</p></div></div>
  <div class="step"><div class="sl">clap</div><div class="sb"><strong>Synth con resonancia alta — el 808 clap clásico</strong><p>Synth sustractivo, onda square o noise, filtro casi cerrado con resonancia muy alta (80%+). Attack=0, decay corto. El filtro resonante con decay rápido crea esa característica "chirp" del clap electrónico — es exactamente cómo funciona el 808 clap internamente.</p></div></div>
</div>
</div>

<div class="sec" id="m9-s4">
<div class="st">hi-hat y platillos — el brillo de alta frecuencia</div>
<div class="steps">
  <div class="step"><div class="sl">concepto</div><div class="sb"><strong>ruido de alta frecuencia con decay variable</strong><p>Un hi-hat cerrado es ruido de alta frecuencia con un decay muy corto (0.05–0.1 segundos). Un hi-hat abierto es el mismo ruido con un decay más largo (0.3–0.8 segundos). Un crash o ride tiene un decay muy largo y un carácter más tonal. Todo ruido — solo cambia cuánto tiempo dura.</p></div></div>
  <div class="step"><div class="sl">FM hi-hat</div><div class="sb"><strong>ratio muy alto · modulación máxima · decay brevísimo</strong><p>FM con ratio 14–16 y modulación al máximo genera ruido con tono de alta frecuencia — muy similar al sonido de un hi-hat metálico. Attack=0, decay muy corto para cerrado, más largo para abierto. Toca en las notas más agudas del teclado. El resultado es un hi-hat sintético agresivo y metálico.</p></div></div>
  <div class="step"><div class="sl">Cluster hi-hat</div><div class="sb"><strong>dispersión alta · densidad media — el más ruidoso</strong><p>Cluster con dispersión alta y densidad media genera una masa de frecuencias que incluye muchos agudos — un buen punto de partida para platillos ruidosos. Attack=0, decay variable según si es cerrado, abierto o ride. Es el hi-hat más experimental: no suena "metálico" de forma convencional sino más "aéreo" y denso.</p></div></div>
  <div class="step"><div class="sl">Phase hi-hat</div><div class="sb"><strong>distorsión alta · segunda capa activa — el más brillante</strong><p>Phase con distorsión alta y segunda capa activa (Gray encoder) genera armónicos de alta frecuencia irregulares que suenan percusivos y brillantes. Útil para hi-hats con más carácter y textura que los de FM puro.</p></div></div>
</div>
</div>

<div class="sec" id="m9-s5">
<div class="st">elementos especiales — percusión no convencional</div>
<div class="steps">
  <div class="step"><div class="sl">tom</div><div class="sb"><strong>FM con pitch variable por nota — toms afinados</strong><p>Un tom es básicamente un kick con más tono y menos cuerpo. FM con ratio bajo (1–3), modulación media, decay medio. La diferencia con el kick: decay más largo y el pitch no baja tanto. Asigna el mismo patch FM a 3 slots del drum con notas distintas — tienes toms afinados en graves, medios y agudos.</p></div></div>
  <div class="step"><div class="sl">rim</div><div class="sb"><strong>String con rigidez alta — plástico y percusivo</strong><p>String con rigidez alta (80%+) y amortiguación alta genera ese sonido de "clic" plástico que es el rim del 808. Attack=0, decay muy corto. Toca en notas medias-agudas. El modelado físico de String reproduce la resonancia de un aro de madera mejor que ningún otro engine.</p></div></div>
  <div class="step"><div class="sl">cowbell</div><div class="sb"><strong>FM ratio no entero — el inarmónico metálico</strong><p>FM con ratio no entero (como 1.7 o 2.4) genera inarmonicidad — el sonido no tiene un tono "limpio" sino ese carácter metálico de los instrumentos de percusión real (campanas, platillos, triángulos). Attack=0, decay largo. Es la base del sonido del cowbell clásico y de cualquier percusión metálica sintética.</p></div></div>
  <div class="step"><div class="sl">textura</div><div class="sb"><strong>DNA con mutación alta — percusión viva</strong><p>DNA con mutación alta y decay corto-medio genera elementos percusivos que cambian ligeramente en cada golpe. Asignados a un slot del drum, crean esa sensación de que la batería tiene "vida propia" — ningún golpe es idéntico al anterior. Ideal para shakers, congas y percusión orgánica sintética.</p></div></div>
</div>
</div>

<div class="sec" id="m9-s6">
<div class="st">construir el kit — de la síntesis al drum mode</div>
<div class="steps">
  <div class="step"><div class="sl">flujo</div><div class="sb"><strong>diseña en Synth → captura en Drum → ajusta</strong><p>1. En Synth mode, diseña el elemento (kick, snare, hi-hat) con el engine correspondiente. 2. Entra en Drum mode. 3. Presiona Mic, selecciona el slot, graba el sonido desde Synth mode tocando la nota adecuada. 4. En el slot de Drum mode, ajusta el trim (quitar silencio inicial) y el pitch si es necesario. 5. Repite para cada elemento del kit.</p></div></div>
  <div class="step"><div class="sl">organización</div><div class="sb"><strong>asigna elementos por posición de tecla</strong><p>Por convención: teclas más a la izquierda = elementos graves (kick, bass), centro = elementos medios (snare, clap, toms), derecha = elementos agudos (hi-hats, platillos, rim). Esta organización hace que la performance con los pads sea intuitiva — la mano izquierda en graves, la derecha en agudos.</p></div></div>
  <div class="step"><div class="sl">editar</div><div class="sb"><strong>trim, tune, reverse en cada slot</strong><p>Una vez asignado el sample a su slot: encoder ochre = punto de inicio (elimina silencios previos al golpe), encoder azul = punto de fin, encoder gray = afinación (pitch fino del elemento). El trim en el punto de inicio es crítico para que el golpe suene "inmediato" y no tenga silencio antes del ataque.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>kit mínimo funcional — 5 elementos</strong>Slot 1: kick FM (nota grave, decay medio). Slot 2: snare FM (nota media, ratio alto). Slot 3: hi-hat cerrado FM (nota aguda, decay muy corto). Slot 4: hi-hat abierto FM (mismo patch, decay más largo). Slot 5: rim String (nota media-aguda, rigidez alta). Con estos 5 elementos tienes la base para cualquier drum pattern. Añade textura DNA en slot 6 para el "elemento vivo".</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">construye un kit de síntesis — 60 min</div>
  <ul class="ex-ul">
    <li><strong>Kick:</strong> FM, ratio 1, mod 40%, feedback bajo. Attack=0, decay medio. Nota más grave. Captura en slot 1 del Drum mode.</li>
    <li><strong>Snare:</strong> DNA, mutación alta, longitud media. Attack=0, decay corto. Nota media. Captura en slot 2.</li>
    <li><strong>Hi-hat cerrado:</strong> FM, ratio 15, mod máxima. Attack=0, decay muy corto. Nota aguda. Slot 3.</li>
    <li><strong>Hi-hat abierto:</strong> mismo patch FM, decay más largo. Slot 4.</li>
    <li><strong>Elemento especial:</strong> elige entre rim (String, rigidez alta) o cowbell (FM, ratio no entero). Slot 5.</li>
    <li>Programa un patrón de 16 pasos con el kit completo. Escucha el resultado y ajusta el trim y pitch de cada elemento hasta que encaje.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(8)">← anterior</button>
  <button class="btn btn-p" onclick="go(10)">siguiente →</button>
  <button class="btn btn-d" id="bd9" onclick="done(9)">marcar listo</button>
</div>
</div>`,
      m10: `<div class="mod" id="m10">
<div class="mod-hd">
  <div class="ey">módulo 10 · secuenciadores</div>
  <div class="mt">secuenciadores — <strong>uno a uno</strong></div>
  <div class="md">El OP-1 Field tiene 7 secuenciadores y cada uno tiene una personalidad distinta. No son intercambiables: cada uno resuelve situaciones concretas. Aquí los ves uno a uno: qué hacen, cómo se controlan y cuándo conviene elegirlos.</div>
  <div class="mm-row"><div class="mm">~2.5h</div><div class="mm">OP-1 en mano</div><div class="mm">prueba cada uno</div></div>
</div>

<div class="sec" id="m10-s1">
<div class="st">cómo acceder a los secuenciadores</div>
<div class="steps">
  <div class="step"><div class="sl">activar</div><div class="sb"><strong><kbd>Seq</kbd> — activa el secuenciador activo</strong><p>El botón Seq activa o desactiva el secuenciador que tengas seleccionado en ese momento. Cuando el secuenciador está activo, la pantalla muestra su visualización propia y el instrumento empieza a secuenciarse automáticamente.</p></div></div>
  <div class="step"><div class="sl">cambiar</div><div class="sb"><strong><kbd>Shift</kbd> + <kbd>Seq</kbd> — navega entre los 7 secuenciadores</strong><p>Mantén Shift y pulsa Seq para pasar al siguiente secuenciador de la lista. Cada uno tiene su propia pantalla y su propia forma de configurarse. Puedes cambiar de secuenciador sin perder la configuración del anterior.</p></div></div>
  <div class="step"><div class="sl">grabar</div><div class="sb"><strong><kbd class="or">Rec</kbd> + <kbd class="or">Play</kbd> en modo Seq — vuelca al tape</strong><p>Con el secuenciador activo, pulsa Rec + Play para que lo que genera se grabe directamente en la pista activa del tape. El secuenciador reproduce en loop y el tape captura el audio. Para de grabar con Stop.</p></div></div>
</div>
</div>


<div class="widget" id="w-seq">
  <div class="w-title">step sequencer — programa un patrón de 16 pasos</div>
  <div style="display:grid;grid-template-columns:44px 1fr;gap:1px;margin-bottom:8px">
    <div style="display:flex;flex-direction:column;gap:1px">
      <div style="height:28px;display:flex;align-items:center;font-size:9px;letter-spacing:.08em;color:var(--mid);text-transform:uppercase;padding-right:6px;justify-content:flex-end">kick</div>
      <div style="height:28px;display:flex;align-items:center;font-size:9px;letter-spacing:.08em;color:var(--mid);text-transform:uppercase;padding-right:6px;justify-content:flex-end">snare</div>
      <div style="height:28px;display:flex;align-items:center;font-size:9px;letter-spacing:.08em;color:var(--mid);text-transform:uppercase;padding-right:6px;justify-content:flex-end">hihat</div>
    </div>
    <div id="ws-grid" class="w-grid" style="grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(3,28px)"></div>
  </div>
  <div class="w-row">
    <button class="w-btn" id="ws-play" onclick="wsToggle()">▶ play</button>
    <span class="w-label">BPM</span>
    <input type="range" class="w-range" id="ws-bpm" min="60" max="160" value="85" oninput="wsBpmUpdate()" style="max-width:120px">
    <span class="w-val" id="ws-bpmv">85</span>
    <button class="w-btn inactive" onclick="wsPreset('basic')">básico</button>
    <button class="w-btn inactive" onclick="wsPreset('dilla')">dilla</button>
    <button class="w-btn inactive" onclick="wsPreset('house')">house</button>
    <button class="w-btn inactive" onclick="wsClear()">clear</button>
  </div>
</div>

<div class="widget" id="w-seq-lab">
  <div class="w-title">laboratorio comparativo — mismo patrón, resultado distinto</div>
  <div class="w-dual">
    <div class="w-panel">
      <div class="w-small" style="margin-bottom:8px"><strong style="color:var(--ink)">toma A</strong> · referencia</div>
      <div class="w-row">
        <span class="w-label">engine</span>
        <select id="wsl-eng-a" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wslUpdate()">
          <option value="fm">FM</option>
          <option value="drwave">Drwave</option>
          <option value="string">String</option>
        </select>
      </div>
      <div class="w-row">
        <span class="w-label">secu.</span>
        <select id="wsl-seq-a" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wslUpdate()">
          <option value="pattern">Pattern</option>
          <option value="arp">Arp</option>
          <option value="sketch">Sketch</option>
        </select>
      </div>
      <button class="w-btn" onclick="wslPlay('a')">▶ escuchar A</button>
    </div>
    <div class="w-panel">
      <div class="w-small" style="margin-bottom:8px"><strong style="color:var(--ink)">toma B</strong> · variante</div>
      <div class="w-row">
        <span class="w-label">engine</span>
        <select id="wsl-eng-b" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wslUpdate()">
          <option value="fm">FM</option>
          <option value="drwave" selected>Drwave</option>
          <option value="string">String</option>
        </select>
      </div>
      <div class="w-row">
        <span class="w-label">secu.</span>
        <select id="wsl-seq-b" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wslUpdate()">
          <option value="pattern">Pattern</option>
          <option value="arp">Arp</option>
          <option value="sketch" selected>Sketch</option>
        </select>
      </div>
      <button class="w-btn" onclick="wslPlay('b')">▶ escuchar B</button>
    </div>
  </div>
  <div class="w-row" style="margin-top:10px">
    <button class="w-btn inactive" onclick="wslSwapEngines()">swap engines</button>
    <button class="w-btn inactive" onclick="wslSwapSeq()">swap secuenciadores</button>
    <span class="w-tag" id="wsl-note">prueba 1: mismo patrón + distinto engine. prueba 2: mismo engine + distinto secuenciador.</span>
  </div>
</div>

<div class="sec" id="m10-s2">
<div class="st">01 — tombola · el generador de ideas</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>secuencias aleatorias con grado de control</strong><p>Tombola "lanza dados" para generar una secuencia de notas. No programa nada — genera. El resultado es siempre distinto y a menudo sorprendente. Es el secuenciador para cuando no sabes por dónde empezar o cuando quieres romper tus propios patrones mentales.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>densidad — cuántas notas por compás</strong><p>Valor bajo: pocas notas, mucho espacio entre ellas. Valor alto: notas más seguidas, patrón más denso. Para un bajo de pocas notas y mucho groove: Ochre bajo. Para una melodía que "corre": Ochre alto.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>aleatoriedad — de predecible a caótico</strong><p>El parámetro más importante de Tombola. Valor bajo: las notas siguen un patrón más o menos estable — cambian pero de forma ordenada. Valor alto: cada repetición del loop es completamente distinta. Para grooves de drums con feel humano: Blue a 40–60%. Para melodías generativas que nunca se repiten igual: Blue a 70–90%.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>rango de notas — qué intervalo de teclas usa</strong><p>Define el rango de notas que Tombola puede elegir. Rango estrecho: todas las notas están próximas, resultado melódicamente coherente. Rango amplio: saltos grandes entre notas, resultado más irregular y experimental. Para bajos: rango estrecho en la zona grave. Para texturas melódicas: rango medio en la zona media.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>velocidad — tempo de las notas generadas</strong><p>Controla la subdivisión rítmica que usa Tombola. Valores distintos generan notas en corcheas, semicorcheas, tresillos o valores más raros. Cambiarlo mientras el tape graba crea fills y variaciones rítmicas automáticas.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — drums generativos</strong>En Drum mode con Tombola, aleatoriedad al 50–60%, densidad media: el resultado tiene el groove imperfecto de los beats de J Dilla — las hits no caen exactamente en la cuadrícula, lo que da esa sensación de que alguien lo tocó a mano. No lo cuantices. Genera 5 patrones distintos (rebobinando y dejando que Tombola regenere) y quédate con el que tenga más personalidad.</div></div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>uso secundario — melodías que se escriben solas</strong>En Synth mode con engine DNA o Drwave, Tombola con aleatoriedad alta y rango medio: genera melodías que cambian en cada loop. Graba 2 minutos en el tape y escucha después — habrá momentos de 4–8 compases que suenan intencionados aunque no los hayas programado. Corta esos momentos con Lift/Drop.</div></div>
</div>

<div class="sec" id="m10-s3">
<div class="st">02 — sketch · captura lo que tocas</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>graba tu performance en tiempo real — sin cuantización</strong><p>Sketch es el secuenciador más directo: captura exactamente lo que tocas, con el timing que lo tocas, y lo reproduce en loop. No hay cuantización automática, no hay corrección. Las imperfecciones de timing forman parte del resultado. Es el secuenciador más "humano" del OP-1.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>velocidad de reproducción — más rápido o más lento</strong><p>Reproduce el loop grabado a distinta velocidad. Por encima del centro: más rápido y más agudo (como acelerar una cinta). Por debajo: más lento y más grave. Útil para crear variaciones de una misma idea sin tener que grabar de nuevo — la misma melodía a media velocidad suena completamente distinta.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>longitud del loop — cuánto reproduce</strong><p>Ajusta cuántos compases reproduce el loop antes de volver al inicio. Puedes grabar 8 compases pero reproducir solo los primeros 2 — el resultado es un loop corto y repetitivo extraído de una idea más larga. Muy útil para crear ostinatos a partir de improvisaciones.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>punch in — desde qué punto empieza a reproducir</strong><p>Desplaza el punto de inicio del loop dentro de lo grabado. Si tu improvisación tiene una buena sección en el segundo compás, puedes hacer que el loop empiece ahí directamente sin necesidad de recortar nada.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — líneas de bajo con timing orgánico</strong>Activa Sketch. Con FM en bajo pluck, toca una línea de bajo de 4–8 compases en las teclas graves sin preocuparte de si entras exactamente en el beat. El timing ligeramente imperfecto es lo que da el groove. Al reproducir, ajusta la velocidad con Ochre para que encaje en el tempo del tape. Es una forma muy efectiva de conseguir un bajo con sensación tocada.</div></div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>uso secundario — melodías capturadas al vuelo</strong>Deja el tape en loop y activa Sketch. Improvisa una melodía corta en teclas negras — 2 compases. No pienses, solo toca. El Sketch la graba y la repite. Ahora ajusta la velocidad de reproducción hasta que encaje con el beat del tape. Tienes una melodía que suena como si alguien la hubiera tocado en directo.</div></div>
</div>

<div class="sec" id="m10-s4">
<div class="st">03 — arp · arpeggiator</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>convierte acordes en secuencias automáticas</strong><p>El Arp toma las notas que mantienes pulsadas y las convierte en una secuencia que sube, baja o salta aleatoriamente entre ellas. Mantén 2, 3 o 4 notas simultáneas y el Arp genera una melodía automática a partir de esas notas. Cuantas más notas mantengas, más rico el resultado.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>velocidad — subdivisión rítmica del arpeggio</strong><p>Controla cada cuánto "dispara" una nota el Arp. Valores altos: notas muy seguidas, efecto de semicorcheas o tresillos rápidos. Valores bajos: notas espaciadas, efecto de corcheas lentas. Sincroniza con el tempo del tape para que el Arp quede en tiempo.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>dirección — cómo ordena las notas</strong><p>Up: sube de la nota más grave a la más aguda y vuelve a empezar. Down: baja. Up-Down: sube y baja. Random: salta aleatoriamente entre las notas pulsadas. Para melodías predecibles y armónicas: Up o Down. Para texturas impredecibles que nunca se repiten: Random.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>octavas — cuántas octavas abarca el arpeggio</strong><p>El Arp puede extender el patrón a través de 1, 2 o más octavas. Con 2 octavas, el arpeggio sube por las notas de la primera octava y luego las repite en la segunda — el resultado ocupa mucho más espacio sonoro. Para pads ambient: 2 octavas, dirección Random, velocidad lenta.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — melodía ambient generativa</strong>Modo Random, 2 octavas, velocidad lenta. Mantén 3 notas de la pentatónica menor (La + Do + Mi). Añade reverb muy largo. El resultado es una melodía que nunca se repite igual — suena a algo entre Steve Reich y Flying Lotus. Graba 2 minutos en Pista 3 o 4 del tape mientras las otras pistas corren.</div></div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>uso secundario — tensión sin resolver</strong>Elige notas que incluyan un intervalo tenso: La + Mi + Fa (incluye un semitono entre Mi y Fa). El Arp en modo Random saltará entre esas notas creando una melodía que nunca "aterriza" — siempre en movimiento, siempre tensa. Eso es lo que caracteriza a Burial y al post-dubstep experimental.</div></div>
</div>

<div class="sec" id="m10-s5">
<div class="st">04 — endless · secuencia continua editable</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>secuencia de notas que editas nota a nota en tiempo real</strong><p>Endless genera una secuencia que reproduce continuamente y que puedes modificar nota a nota mientras suena — sin parar, sin resetear. Cada tecla que pulsas reemplaza la siguiente nota de la secuencia. Es el secuenciador más interactivo del OP-1: puedes esculpir la melodía mientras el tape graba, creando una evolución orgánica en tiempo real.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>longitud de la secuencia — número de pasos</strong><p>Define cuántas notas tiene el loop antes de volver al inicio. Secuencias cortas (2–4 notas) generan ostinatos repetitivos e hipnóticos. Secuencias largas (8–16 notas) crean frases más desarrolladas. Empieza con 4 notas para entender la mecánica.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>velocidad de reproducción</strong><p>Controla el tempo de la secuencia. Puedes sincronizarlo al BPM del tape o dejarlo libre para crear polirritmos — una secuencia de 5 notas a cierta velocidad sobre un loop de 4/4 crea un pattern que tarda varios compases en completar su ciclo, con resultados muy ricos rítmicamente.</p></div></div>
  <div class="step"><div class="sl">editar</div><div class="sb"><strong>pulsa teclas mientras suena para reemplazar notas</strong><p>Con Endless activo, cada tecla que pulsas reemplaza la nota que toca en ese momento. Si la secuencia está en el paso 3 y pulsas Re, el paso 3 pasa a ser Re. El cambio ocurre de forma fluida sin interrumpir el loop. Puedes cambiar toda la secuencia nota a nota en un par de ciclos.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — evolución gradual de una melodía</strong>Crea una secuencia de 4 notas con Endless. Deja el tape grabando. Cada 8 compases cambia una nota — reemplaza la más "obvia" por algo más inesperado. El resultado es una melodía que evoluciona gradualmente durante 2–3 minutos, como en la música minimalista de Steve Reich o en los loops de Aphex Twin en "Selected Ambient Works Vol. II".</div></div>
</div>

<div class="sec" id="m10-s6">
<div class="st">05 — pattern · step sequencer clásico</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>programación nota a nota — control total</strong><p>Pattern es el step sequencer clásico: una cuadrícula de pasos (hasta 16) donde defines qué nota suena en cada paso y cuánto dura. Es el más predecible y controlable de los secuenciadores. No hay aleatoriedad — lo que programas es exactamente lo que suena, siempre igual. Perfecto cuando quieres un patrón preciso y repetible.</p></div></div>
  <div class="step"><div class="sl">programar</div><div class="sb"><strong>selecciona un paso + toca una nota</strong><p>En el modo Pattern, las teclas del teclado representan los pasos de la secuencia. Selecciona un paso (se ilumina) y toca la nota que quieres en ese paso. Repite para cada paso. Los pasos vacíos son silencios. Para borrar un paso: selecciónalo y pulsa sin tocar nota.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>número de pasos — longitud del patrón</strong><p>De 1 a 16 pasos. Un compás de 4/4 en semicorcheas = 16 pasos. Un compás en corcheas = 8 pasos. Patrones de longitud impar (5, 7, 11 pasos) crean polirritmos interesantes cuando se combinan con un loop de 16 pasos en el tape.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>velocidad — subdivisión del patrón</strong><p>Controla la velocidad de reproducción del patrón en relación al tempo del tape. Ajusta hasta que el patrón quede sincronizado con el groove que buscas.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — bassline de techno o house</strong>8 pasos en Pattern. Pasos 1 y 5 con la nota base (La grave), pasos 3 y 7 con una nota una quinta arriba (Mi), pasos 2/4/6/8 vacíos. Resultado: una bassline de 2 notas con el swing básico del techno. Cambia qué pasos están activos para variar el groove sin cambiar las notas.</div></div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>uso con polirritmos</strong>Crea un patrón de 5 pasos en el secuenciador mientras el tape tiene un loop de 16 pasos (4 compases). El patrón de 5 nunca cae en el mismo lugar relativo al loop de 16 hasta que ambos se completan juntos (en el paso 80). Eso crea una textura rítmica que siempre suena ligeramente distinta aunque sea determinista.</div></div>
</div>

<div class="sec" id="m10-s7">
<div class="st">06 — finger · performance expresiva</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>toca el teclado como si fuera un drum pad — graba el patrón</strong><p>Finger captura la forma en que pulsas el teclado — nota por nota, en tiempo real, con el timing exacto — y lo reproduce en loop. Es similar a Sketch pero orientado a performance percusiva: puedes tocar el teclado como si fueran pads de batería y Finger convierte esas pulsaciones en una secuencia rítmica.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>longitud del loop grabado</strong><p>Define cuántos compases graba Finger antes de volver al inicio. 1 compás: ideal para ostinatos cortos y repetitivos. 2–4 compases: para frases más desarrolladas. Cuanto más corto el loop, más difícil es hacer que suene "completo" — pero también más hipnótico si lo consigues.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>cuantización — cuánto corrige el timing</strong><p>Valor cero: sin cuantización, el timing queda exactamente como lo tocaste. Valor máximo: cuantización total a la cuadrícula del tempo. El punto dulce está en valores medios — corrige los errores más obvios pero conserva el feel humano. Para drums: cuantización baja. Para bajos o melodías: cuantización media.</p></div></div>
  <div class="step"><div class="sl">uso</div><div class="sb"><strong>toca las notas de forma percusiva mientras el loop graba</strong><p>Activa Finger, espera el primer beat, y empieza a tocar notas en el teclado de forma rítmica — como si tocaras drums. Finger graba todo durante el número de compases definido en Ochre y luego lo reproduce en loop. Cada vez que toques durante la reproducción, reemplazas esa parte del loop.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>uso principal — ritmos de teclas que suenan como pads</strong>En Drum mode con Finger activo: toca las teclas del teclado de forma percusiva durante 1 compás. El resultado tiene el timing de tu mano — muy similar a programar en un MPC o un SP-404 golpeando los pads. Combina con cuantización baja para conservar el groove. Es la forma más física de crear un drum pattern en el OP-1.</div></div>
</div>

<div class="sec" id="m10-s8">
<div class="st">07 — hold · secuenciar sin soltar acordes</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>mantiene notas/acordes activos para editar con manos libres</strong><p>Hold te deja fijar una o varias notas mientras ajustas comportamiento secuencial sin estar sosteniendo teclas. Es perfecto para iterar ritmo y forma cuando ya encontraste material armónico que funciona.</p></div></div>
  <div class="step"><div class="sl">cuándo</div><div class="sb"><strong>cuando quieres velocidad de iteración</strong><p>Primero bloqueas notas, luego pruebas cambios de timing y patrón en segundos. Si te quedas atascado buscando melodía y ritmo a la vez, separa el problema: Hold para armonía estable, edición para groove.</p></div></div>
  <div class="step"><div class="sl">comparativa</div><div class="sb"><strong>hold vs arp vs pattern</strong><p>Arp ordena automáticamente. Pattern fija pasos explícitos. Hold mantiene el material tocado y te permite explorarlo con enfoque performativo. Los tres sirven; elige según control deseado y tiempo disponible.</p></div></div>
  <div class="step"><div class="sl">A/B/C</div><div class="sb"><strong>mismo acorde, tres secuenciadores</strong><p>Haz tres tomas de 20 segundos: Arp, Hold y Pattern con las mismas notas. Escucha sin mirar pantalla y elige la toma que mejor encaje en el track. Este test entrena criterio real de producción.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>ejercicio guiado opcional</strong>Comparador instantáneo Arp/Hold/Pattern sobre mismo acorde y mismo engine. Útil para clase porque convierte una idea abstracta en decisión auditiva inmediata.</div></div>
</div>



<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">laboratorio comparativo de secuenciadores — 60 min</div>
  <ul class="ex-ul">
    <li><strong>1) Mismo patrón + 3 engines:</strong> programa un patrón corto en Pattern y tócalo con 3 engines distintos (por ejemplo FM, Drwave, String). Graba 20 segundos de cada versión y compara solo el carácter tímbrico.</li>
    <li><strong>2) Mismo engine + 2 secuenciadores:</strong> usa un único engine y haz dos tomas de 20 segundos con secuenciadores distintos (por ejemplo Hold vs Arp, o Sketch vs Pattern). Compara qué cambia en groove y sensación.</li>
    <li><strong>3) Sprint creativo:</strong> graba 10 ideas de 20 segundos (pueden ser incompletas) mezclando secuenciadores. No edites durante el sprint, solo captura.</li>
    <li><strong>4) Selección final:</strong> escucha las 10 ideas y elige 2 por criterio musical claro: una por groove y otra por textura/melodía. Esas 2 pasan al siguiente módulo.</li>
    <li><strong>5) Nota de cierre:</strong> escribe en una línea qué secuenciador te dio más control y cuál te dio mejores sorpresas. Esa decisión guía tu flujo real.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(9)">← anterior</button>
  <button class="btn btn-p" onclick="go(11)">siguiente →</button>
  <button class="btn btn-d" id="bd10" onclick="done(10)">marcar listo</button>
</div>
</div>`,
      m11: `<div class="mod" id="m11">
<div class="mod-hd">
  <div class="ey">módulo 11 · producción</div>
  <div class="mt">sampler y <strong>field recording</strong></div>
  <div class="md">Flying Lotus construyó kits con grabaciones de su apartamento. Burial usó sonido ambiente de Londres. En OP-1 Field puedes capturar desde mic/line-in, fm radio, usb audio y resampling interno: casi cualquier sonido puede convertirse en instrumento.</div>
  <div class="mm-row"><div class="mm">~2h</div><div class="mm">Drum mode</div><div class="mm">sal a grabar</div></div>
</div>
<div class="sec" id="m11-s1">
<div class="st">fuentes de audio — de dónde viene el sample</div>
<div class="steps">
  <div class="step"><div class="sl">micrófono</div><div class="sb"><strong>el micrófono integrado — siempre disponible</strong><p>El OP-1 Field tiene micrófono estéreo integrado. Calidad suficiente para percusión, texturas y field recording — no es para grabación de voz clínica, pero eso no importa. La imperfección del micrófono de un dispositivo portátil añade carácter. Flying Lotus grabó golpes de escritorio, pasos, voces distorsionadas. El teléfono de Burial capturando el metro de Londres. Cualquier objeto que hagas sonar puede ser un instrumento.</p></div></div>
  <div class="step"><div class="sl">línea</div><div class="sb"><strong>entrada de línea — cualquier fuente externa</strong><p>El jack de 3.5mm del OP-1 acepta entrada de línea. Conecta el EP-133, un teléfono reproduciendo audio, otro instrumento, o cualquier cosa con salida de audio. La señal entra directamente al sampler. Útil para capturar samples de vinilo, samples de otros dispositivos, o para samplear el OP-1 a sí mismo (conecta salida con un adaptador a la entrada).</p></div></div>
  <div class="step"><div class="sl">USB</div><div class="sb"><strong>usb audio + transferencia — captura y librería</strong><p>Conecta por USB para dos usos: 1) <strong>usb audio</strong> como fuente de entrada en Input, y 2) transferencia de archivos (disk mode / MTP) para importar samples y hacer backups.</p></div></div>
</div>
</div>
<div class="sec" id="m11-s2">
<div class="st">grabar un sample — proceso completo</div>
<div class="steps">
  <div class="step"><div class="sl">01</div><div class="sb"><strong>entra en Drum mode — selecciona el slot</strong><p>Pulsa D para entrar en Drum mode. Las 12 teclas blancas del teclado son los 12 slots de sample. Selecciona la tecla donde quieres grabar el nuevo sample — si ya tiene algo, se reemplazará.</p></div></div>
  <div class="step"><div class="sl">02</div><div class="sb"><strong>pulsa <kbd>Mic</kbd> — activa el modo grabación</strong><p>El botón Mic activa el modo de grabación de sample. La pantalla cambia para mostrar el medidor de nivel de entrada. Ahora la tecla seleccionada está "lista" para recibir el sample.</p></div></div>
  <div class="step"><div class="sl">03</div><div class="sb"><strong>pulsa el encoder — graba — pulsa de nuevo para parar</strong><p>Una pulsación del encoder ochre arranca la grabación (el LED parpadea). Haz el sonido que quieras capturar. Segunda pulsación: para la grabación. El sample queda asignado al slot. La duración máxima depende del espacio disponible pero suele ser de varios segundos.</p></div></div>
  <div class="step"><div class="sl">04</div><div class="sb"><strong>escucha — pulsa la tecla del slot</strong><p>Pulsa la tecla del slot para escuchar el sample grabado. Si no suena como esperabas, repite el proceso — el nuevo sample reemplaza al anterior. No hay confirmación: graba y escucha hasta que esté bien.</p></div></div>
</div>
</div>
<div class="sec" id="m11-s3">
<div class="st">editar el sample — trim, tune, reverse</div>
<div class="steps">
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>punto de inicio — trim del ataque</strong><p>El parámetro más importante. Define desde dónde empieza a reproducirse el sample cuando pulsas la tecla. Si hay silencio antes del golpe (inevitable en grabaciones manuales), gira el encoder ochre hacia la derecha hasta que el sample empiece exactamente en el ataque. Un sample con silencio antes del golpe suena "tarde" y mata el groove.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>punto de fin — duración del sample</strong><p>Define dónde para la reproducción del sample. Útil para cortar la cola de un sample largo (ruido, decaimiento excesivo) o para crear versiones más cortas del mismo sample. Reducir el punto de fin también crea efectos de "gate" en samples de percusión.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>afinación — hasta ±12 semitonos</strong><p>Sube o baja el pitch del sample en semitonos. Si grabaste un golpe que quieres usar como kick pero suena demasiado agudo: baja el pitch. Si quieres usar el mismo sample como grave y agudo: asígnalo a dos slots con pitches distintos. El pitch afecta también a la velocidad de reproducción — subir el pitch acelera, bajar lo ralentiza.</p></div></div>
  <div class="step"><div class="sl">reverse</div><div class="sb"><strong><kbd>Shift</kbd> + tecla del slot — invierte el sample</strong><p>Mantén Shift y pulsa la tecla del slot para activar reverse en ese sample. El sample se reproducirá al revés — el final del sonido original se convierte en el inicio. Sonidos en reverse tienen attack suave (el decay original) y final abrupto (el ataque original). Burial usa reverse constantemente para crear esa sensación de que las voces "flotan hacia atrás".</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>el trim del punto de inicio suele ser la primera corrección útil</strong>Después de grabar cualquier sample, empieza revisando el punto de inicio con el encoder ochre. Elimina cualquier silencio antes del golpe. Un sample bien trimado entra más sólido en el beat; uno mal trimado puede retrasar el groove. Este ajuste tarda 10 segundos y suele mejorar mucho el resultado.</div></div>
</div>
<div class="sec" id="m11-s4">
<div class="st">field recording — el mundo como instrumento</div>
<div class="steps">
  <div class="step"><div class="sl">qué grabar</div><div class="sb"><strong>cualquier objeto que haga sonido interesante</strong><p>Golpe de vaso. Crujido de papel. Agua. Tu voz sin articular. El ruido de teclado. Pasos sobre distintos materiales. El aire acondicionado. Tráfico. El metro. No hay límite: lo que importa es el carácter del sonido, no su "musicalidad" evidente. Los mejores samples de percusión no suenan como instrumentos musicales.</p></div></div>
  <div class="step"><div class="sl">técnica</div><div class="sb"><strong>acerca el OP-1 a la fuente — no al revés</strong><p>El micrófono del OP-1 está en la parte superior del instrumento. Acerca el OP-1 a lo que quieres grabar en lugar de hacer el sonido lejos. Experimenta con la distancia: muy cerca exagera los graves y los transitorios (ideal para percusión), más lejos captura el ambiente del espacio (ideal para texturas).</p></div></div>
  <div class="step"><div class="sl">nivel</div><div class="sb"><strong>ajusta el nivel de entrada — ni muy alto ni muy bajo</strong><p>El medidor en la pantalla muestra el nivel de entrada cuando estás en modo grabación de sample. El nivel ideal llega al 70–80% del medidor en los picos más altos. Si llega al rojo: baja la ganancia de entrada o aleja el micrófono. Si se queda en el 20–30%: acércate o sube la ganancia. Un nivel demasiado bajo añade ruido de fondo; demasiado alto distorsiona.</p></div></div>
  <div class="step"><div class="sl">carácter</div><div class="sb"><strong>la imperfección es el punto</strong><p>No busques samples "perfectos". Burial, J Dilla y Flying Lotus usan samples con ruido de fondo, distorsión suave, y variaciones de timing porque esos elementos dan carácter. Un kick grabado desde el micrófono del OP-1 suena diferente a uno de librería — esa diferencia es lo que hace que un track suene único. Graba 20 versiones del mismo sonido y usa la que tenga más personalidad, aunque no sea la más limpia.</p></div></div>
</div>
</div>
<div class="sec" id="m11-s5">
<div class="st">técnicas creativas con samples</div>
<div class="steps">
  <div class="step"><div class="sl">repitch</div><div class="sb"><strong>el mismo sample como múltiples instrumentos</strong><p>Graba un sonido una vez. Asígnalo al mismo slot en tres teclas distintas (tres slots del drum) y ajusta el pitch a +0, +5 y +12 semitonos. Ahora tienes tres versiones del mismo sample a distintas alturas. Un golpe de mesa se convierte en tres toms afinados. Una nota de voz se convierte en una melodía de tres notas.</p></div></div>
  <div class="step"><div class="sl">layers</div><div class="sb"><strong>combina un sample grabado con síntesis</strong><p>Graba un golpe con el micrófono (carácter físico, imperfección). Diseña el mismo tipo de sonido con FM (tono limpio, control preciso). Asígnalos a teclas adyacentes y activa ambas simultáneamente en el step sequencer. La combinación tiene la solidez de la síntesis y el carácter del sample grabado — eso es lo que hace que los kits de Flying Lotus suenen tan ricos.</p></div></div>
  <div class="step"><div class="sl">granular</div><div class="sb"><strong>samples muy cortos como textura</strong><p>Graba un sonido de 0.2–0.5 segundos. Ajusta el punto de fin para que dure menos de 100ms. Asígnalo a muchas teclas con distintos pitches. Activa el Tombola o el Arp para que dispare esas teclas en secuencia rápida. El resultado es una textura granular hecha de fragmentos del sample — una técnica central en la música de Arca y Oneohtrix Point Never.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>kit de 6 elementos mínimo funcional</strong>Slot 1: kick (grabado o síntesis). Slot 2: snare/textura percusiva. Slot 3: hi-hat cerrado. Slot 4: hi-hat abierto. Slot 5: elemento de carácter (rim, cowbell, o algo completamente raro). Slot 6: textura larga (grab de ambiente, pad corto, o cualquier cosa que no sea percusiva). Con 6 elementos tienes suficiente variedad para cualquier patrón.</div></div>
</div>

<div class="sec" id="m11-s6">
<div class="st">input / resampling — capturar y reciclar sonido</div>
<div class="steps">
  <div class="step"><div class="sl">fuentes</div><div class="sb"><strong>mic/line-in, fm radio, usb audio y resample interno</strong><p>En OP-1 Field puedes capturar desde micrófono, line-in, fm radio, usb audio y material interno (output-to-input). Regla práctica: externo para materia prima nueva; resample interno para compactar y reciclar capas.</p></div></div>
  <div class="step"><div class="sl">externo vs interno</div><div class="sb"><strong>dos objetivos distintos</strong><p>Grabar externo te aporta materia prima nueva. Resamplear interno te da control de producción: conviertes varias capas en un solo recurso y liberas pistas para seguir construyendo.</p></div></div>
  <div class="step"><div class="sl">textura</div><div class="sb"><strong>cuándo resamplear por color</strong><p>Cuando una cadena (engine + FX + LFO) ya tiene carácter, resampéala y trátala como nuevo instrumento. Así congelas un "momento sonoro" irrepetible y lo puedes tocar de nuevo con otro envelope, otro pitch o reverse.</p></div></div>
  <div class="step"><div class="sl">compactar</div><div class="sb"><strong>cuándo resamplear por espacio</strong><p>Si tus 4 pistas ya están llenas pero el groove base funciona, imprime una capa combinada, regrábala en nuevo material y abre espacio para elementos nuevos. Esta técnica acelera arreglos largos sin perder identidad del track.</p></div></div>
  <div class="step"><div class="sl">portátil</div><div class="sb"><strong>sampling portátil sin depender de hardware caro</strong><p>Para capturas rápidas fuera de estudio, cualquier fuente portátil sirve si controlas nivel: móvil, radio pequeña o transmisor FM básico. El criterio no es la marca, es la textura que te aporta. Graba corto, recorta rápido y decide por oído si suma al track.</p></div></div>
  <div class="step"><div class="sl">multi-tape</div><div class="sb"><strong>varias tapes para secciones + consolidación por resampling</strong><p>Una ruta muy práctica: tape A para idea base, tape B para variación, tape C para puente. Cuando ya tengas estructura, resamplea fragmentos clave y consolídalos en una tape master para seguir produciendo con pistas libres.</p></div></div>
</div>
<div class="co"><div class="co-b or"></div><div class="co-bd"><strong>ejercicios obligatorios · input/resampling</strong>1) Resamplea una textura interna de 8 compases y conviértela en pad nuevo. 2) Graba una fuente externa corta (5–10 s) y úsala como elemento percusivo. 3) Toma una capa del tape, recíclala en un nuevo sample y compón 4 compases con ese material.</div></div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>bloque creativo opcional</strong>Haz un sprint de 15 minutos: 1) captura dos sonidos portátiles muy distintos, 2) conviértelos en un mini kit, 3) resamplea el loop resultante y úsalo como textura de fondo en otra tape. Objetivo: pasar de captura cruda a material compositivo en una sola sesión corta.</div></div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>pieza interactiva</strong>Diagrama interactivo "fuente → proceso → destino" (externo o interno). Al cambiar origen, cambia automáticamente la recomendación de uso: textura, compactación o performance.</div></div>

<div class="widget" id="w-resample-map">
  <div class="w-title">input / resampling map — fuente → proceso → destino</div>
  <div class="w-row">
    <span class="w-label">fuente</span>
    <select id="wrs-src" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wrsUpdate()">
      <option value="mic">mic interno</option>
      <option value="line">line-in externo</option>
      <option value="tape">tape mix interno</option>
      <option value="track">una pista del tape</option>
    </select>
    <span class="w-label">objetivo</span>
    <select id="wrs-goal" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wrsUpdate()">
      <option value="texture">textura nueva</option>
      <option value="compact">compactar capas</option>
      <option value="reuse">material reutilizable</option>
    </select>
  </div>
  <div class="w-row">
    <span class="w-label">destino</span>
    <select id="wrs-dst" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wrsUpdate()">
      <option value="drum">slot Drum</option>
      <option value="synth">nuevo patch/sample</option>
      <option value="tape">nueva pista del tape</option>
    </select>
    <button class="w-btn secondary" onclick="wrsExercises()">sugerir ejercicio</button>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wrs-plan">elige combinación para ver flujo recomendado en Field.</div>
  </div>
</div>
</div>
<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">input / resampling aplicado — 45 min</div>
  <ul class="ex-ul">
    <li><strong>Obligatorio 1 — resampling interno:</strong> toma una textura de tu proyecto (8 compases), resampéala y conviértela en nuevo material tocable (pad o capa rítmica).</li>
    <li><strong>Obligatorio 2 — fuente externa corta:</strong> graba 5–10 segundos desde mic o line-in y úsalo como elemento percusivo en Drum mode.</li>
    <li><strong>Obligatorio 3 — reciclar capa del tape:</strong> toma una capa grabada, conviértela en sample nuevo y compón 4 compases reutilizando ese material.</li>
    <li><strong>Integración:</strong> arma un loop de 16 pasos usando al menos un elemento de cada bloque anterior y grábalo en Pista 1.</li>
    <li><strong>Revisión rápida:</strong> compara versión original vs versión resampleada y anota qué ganó: textura, espacio o pegada.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(10)">← anterior</button>
  <button class="btn btn-p" onclick="go(12)">siguiente →</button>
  <button class="btn btn-d" id="bd11" onclick="done(11)">marcar listo</button>
</div>
</div>`,
      m12: `<div class="mod" id="m12">
<div class="mod-hd">
  <div class="ey">módulo 12 · producción</div>
  <div class="mt">mezcla y <strong>masterización</strong></div>
  <div class="md">Mezclar es distribuir los elementos en el espacio sonoro para que cada uno se escuche con claridad. Masterizar es preparar el resultado final para que suene bien en distintos sistemas de reproducción. Aquí trabajas ambos procesos con lenguaje claro y aplicable.</div>
  <div class="mm-row"><div class="mm">~3h</div><div class="mm">Mixer mode</div><div class="mm">auriculares + altavoces</div></div>
</div>

<div class="sec" id="m12-s1">
<div class="st">glosario — términos que vas a ver siempre</div>
<div class="co"><div class="co-b or"></div><div class="co-bd"><strong>ruta mínima (2 min antes de mezclar)</strong>1) Elige qué elemento va delante. 2) Baja todo y reconstruye balance sin clipping. 3) Añade efecto global solo donde aporte profundidad. Luego entra al glosario para afinar lenguaje y decisiones.</div></div>
<div class="steps">
  <div class="step"><div class="sl">ganancia</div><div class="sb"><strong>ganancia — cuánto se amplifica una señal</strong><p>La ganancia es el nivel de amplificación aplicado a una señal de audio. No es lo mismo que el volumen: la ganancia afecta la señal antes de que llegue al fader de volumen. Si la ganancia es demasiado alta, la señal se distorsiona (clipping). Si es demasiado baja, tienes que subir mucho el volumen y el ruido de fondo sube también. El punto ideal: la señal llega al fader de volumen a un nivel consistente y controlado.</p></div></div>
  <div class="step"><div class="sl">dB</div><div class="sb"><strong>decibelio (dB) — la unidad de volumen</strong><p>Los decibelios son la unidad para medir el nivel de una señal de audio. La escala es logarítmica: +6 dB aproximadamente duplica la amplitud de la señal, mientras que la sensación de “doble de volumen” suele acercarse más a +10 dB y depende del material. 0 dBFS (0 decibelios Full Scale) es el máximo absoluto en audio digital — si superas ese punto, el audio se clipea y distorsiona de forma fea e irreparable. El objetivo en la mezcla es mantener todos los elementos por debajo de 0 dBFS con algo de margen (headroom).</p></div></div>
  <div class="step"><div class="sl">headroom</div><div class="sb"><strong>headroom — margen antes de la distorsión</strong><p>El headroom es el espacio que dejas entre el nivel más alto de tu mezcla y el 0 dBFS. Si tu mezcla llega como máximo a -6 dB, tienes 6 dB de headroom. Este margen es necesario porque los picos de volumen son impredecibles — un golpe de bombo puede ser 3–4 dB más alto que el promedio en una fracción de segundo. Sin headroom, esos picos clipean. El estándar para entregar a masterizar: -6 dB de headroom mínimo.</p></div></div>
  <div class="step"><div class="sl">clipping</div><div class="sb"><strong>clipping — la distorsión digital no deseada</strong><p>El clipping ocurre cuando una señal supera el 0 dBFS. En analógico, la saturación por clipping puede sonar cálida (es lo que hace el Nitro en modo distortion). En digital, el clipping es siempre feo: el audio se "corta" y aparece una distorsión áspera e irrecuperable. En el OP-1: el medidor de nivel en la pantalla muestra un indicador cuando hay clipping — si lo ves encenderse de forma habitual, baja los volúmenes.</p></div></div>
  <div class="step"><div class="sl">frecuencia</div><div class="sb"><strong>frecuencia — el "tono" del sonido medido en Hz</strong><p>La frecuencia es cuántas veces por segundo vibra una onda de sonido, medida en Hertz (Hz). El oído humano escucha entre 20 Hz y 20.000 Hz (20 kHz). Grave: 20–250 Hz (kick, bajo, subgraves). Medio-bajo: 250–800 Hz (cuerpo de los instrumentos). Medio: 800 Hz–2 kHz (presencia vocal e instrumental). Medio-alto: 2–8 kHz (detalle y articulación). Agudo: 8–20 kHz (aire, brillo, "respiro" de la mezcla).</p></div></div>
  <div class="step"><div class="sl">compresión</div><div class="sb"><strong>compresor — reduce el rango dinámico</strong><p>Un compresor reduce automáticamente la diferencia de volumen entre los momentos más altos y más bajos de una señal. Si tu bajo tiene notas que varían mucho de volumen, el compresor hace que las más altas bajen y las más bajas suban — el resultado es un bajo más consistente y controlado. En masterización, la compresión ayuda a que la mezcla suene más uniforme. En OP-1 Field trabajas el acabado desde Mixer con EQ, master FX y drive; si necesitas compresión/limitación más fina, puedes terminar fuera.</p></div></div>
  <div class="step"><div class="sl">panorama</div><div class="sb"><strong>panorama (pan) — posición en el campo estéreo</strong><p>El panorama define dónde suena un elemento en el eje izquierda-derecha del campo estéreo. Centro: el elemento suena igual en los dos altavoces/auriculares. Pan izquierda total: solo suena en el canal izquierdo. Pan derecha leve: suena más a la derecha pero también a la izquierda. El panorama es una de las herramientas más poderosas para crear anchura y separación entre elementos.</p></div></div>
  <div class="step"><div class="sl">bus / send</div><div class="sb"><strong>bus y send — señales que van a efectos compartidos</strong><p>Un bus recibe señales de varias pistas. Un send define cuánto de cada pista entra a ese efecto compartido. En OP-1 Field piensa así: no todos los elementos necesitan la misma cantidad de efecto global al mismo tiempo.</p></div></div>
</div>
</div>

<div class="sec" id="m12-s2">
<div class="st">mezcla de los 4 canales — el mixer mode en detalle</div>
<div class="steps">
  <div class="step"><div class="sl">acceso</div><div class="sb"><strong>botón M — mixer mode</strong><p>Entra en modo Mixer pulsando M. Verás el nivel de las 4 pistas y los controles para cada una. El encoder activo controla la pista seleccionada. Para seleccionar pista: pulsa las teclas 1–4 del panel superior mientras estás en Mixer mode.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Ochre</kbd></div><div class="sb"><strong>volumen de pista — el fader</strong><p>El nivel individual de cada pista. Este es el control más básico de la mezcla. La relación de volúmenes entre pistas es lo que determina qué elemento "manda" y cuáles acompañan. Ajusta primero los volúmenes relativos antes de tocar cualquier otro parámetro — muchos problemas de mezcla se resuelven solo con esto.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Blue</kbd></div><div class="sb"><strong>panorama de pista — posición en el estéreo</strong><p>Posiciona la pista en el campo estéreo. Centro (valor medio): la pista suena igual en ambos canales. Girando a la izquierda: la pista se mueve al canal izquierdo. Girando a la derecha: al canal derecho. El panorama crea anchura en la mezcla y separa elementos que de otro modo compiten en el espacio sonoro.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Gray</kbd></div><div class="sb"><strong>send a efecto master — cuánto procesa cada pista</strong><p>Este control define cuánto de cada pista entra al efecto global del mixer. No es “más siempre mejor”: usa menos en elementos frontales y más en capas de fondo cuando quieras profundidad.</p></div></div>
  <div class="step"><div class="sl"><kbd class="enc">Orange</kbd></div><div class="sb"><strong>volumen master — fader global</strong><p>Controla el nivel de salida de la mezcla completa. No afecta las relaciones de volumen entre pistas — solo el nivel total. Úsalo para ajustar el volumen de escucha o para hacer espacio si la mezcla está cerca de 0 dBFS. Normalmente es de los últimos ajustes, no de los primeros.</p></div></div>
</div>
</div>

<div class="sec" id="m12-s3">
<div class="st">técnicas de mezcla para 4 pistas</div>
<div class="steps">
  <div class="step"><div class="sl">jerarquía</div><div class="sb"><strong>decide qué elemento va delante</strong><p>Antes de ajustar nada, define el foco: kick, bajo, melodía o textura. Todo lo demás se coloca alrededor de ese foco. Si no hay jerarquía, todo compite y nada destaca.</p></div></div>
  <div class="step"><div class="sl">gain staging</div><div class="sb"><strong>gain staging mínimo para no pelear con clipping</strong><p>Empieza con niveles moderados en todas las pistas y construye desde ahí. Deja margen en el master mientras mezclas; si clipea, baja primero la pista que domina y luego revisa el master.</p></div></div>
  <div class="step"><div class="sl">grave</div><div class="sb"><strong>deja sitio al bajo</strong><p>Kick y bajo en el centro y con roles distintos: si ambos hacen lo mismo al mismo tiempo, se enmascaran. Alterna ritmo, registro o duración para que cada golpe se entienda.</p></div></div>
  <div class="step"><div class="sl">medios</div><div class="sb"><strong>evita saturar el rango medio</strong><p>Cuando melodía, acordes y textura ocupan la misma zona, la mezcla se vuelve opaca. Corrige separando por octava, densidad rítmica o paneo.</p></div></div>
  <div class="step"><div class="sl">fx send</div><div class="sb"><strong>usa el efecto master por intención</strong><p>Menos send en elementos que deben quedar delante; más send en capas de fondo. Si todo lleva mucho efecto, desaparece la profundidad relativa.</p></div></div>
  <div class="step"><div class="sl">drive</div><div class="sb"><strong>uso básico del drive</strong><p>El drive en master out puede añadir cohesión y energía, pero también endurecer en exceso. Sube poco a poco y decide en contexto completo.</p></div></div>
  <div class="step"><div class="sl">errores</div><div class="sb"><strong>errores típicos de mezcla en OP-1 Field</strong><p>1) todo muy alto desde el inicio, 2) demasiado efecto global en todas las pistas, 3) bajo sin espacio, 4) corregir siempre con más volumen en vez de recortar densidad.</p></div></div>
  <div class="step"><div class="sl">referencia</div><div class="sb"><strong>A/B con referencia real</strong><p>Compara cada poco tiempo con un track de referencia. No para copiar, sino para calibrar balance, peso de graves y brillo general.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>guía de decisión rápida</strong>Si falta foco: baja capas de fondo. Si falta profundidad: sube el contraste seco/húmedo, no todos los sends a la vez. Si falta pegada: revisa transientes y drive antes de subir volumen general.</div></div>
</div>

<div class="sec" id="m12-s4">
<div class="st">paneo — diseño del campo estéreo</div>
<div class="steps">
  <div class="step"><div class="sl">por qué</div><div class="sb"><strong>el pan crea anchura, separación y dimensión</strong><p>Una mezcla en mono (todo al centro) suena plana y pequeña incluso si tiene muchos elementos. El paneo distribuye los elementos en el eje izquierda-derecha, creando la sensación de que la música ocupa un espacio mayor. También separa elementos que compiten en frecuencias — si dos instrumentos están en el mismo rango de frecuencias, panearlos a lados opuestos reduce la competencia aunque no la elimina completamente.</p></div></div>
  <div class="step"><div class="sl">reglas</div><div class="sb"><strong>lo que normalmente va al centro y lo que puede moverse</strong><p>Normalmente al centro: kick drum, bajo, voz principal (si hubiera). El bajo al centro suele funcionar mejor porque las frecuencias graves se reproducen de forma diferente en altavoces izquierdo y derecho, y si el bajo está muy paneado puede perder energía y consistencia en sistemas mono (móviles, altavoces Bluetooth). Todo lo demás puede panearse: hi-hats, snare (leve), texturas, acordes, melodías secundarias.</p></div></div>
  <div class="step"><div class="sl">simetría</div><div class="sb"><strong>equilibra el campo estéreo — algo a cada lado</strong><p>Si pones un pad a la derecha (+40%), pon otro elemento a la izquierda (−30% o −40%). Una mezcla paneada completamente a un lado suena desequilibrada — como si alguien hubiera movido todos los muebles a un lado del cuarto. El objetivo es que la suma de energía izquierda-derecha sea aproximadamente igual, aunque los elementos individuales estén en posiciones distintas.</p></div></div>
  <div class="step"><div class="sl">movimiento</div><div class="sb"><strong>autopan — pan que se mueve en el tiempo</strong><p>El pan no tiene que ser estático. Una textura que se mueve lentamente de izquierda a derecha a lo largo de varios compases añade movimiento sin añadir notas nuevas. En el OP-1 Field esto se consigue con el LFO aplicado al pan, o manualmente ajustando el encoder azul mientras el tape graba.</p></div></div>
  <div class="step"><div class="sl">mono check</div><div class="sb"><strong>comprueba en mono antes de exportar</strong><p>Muchos sistemas de reproducción son mono: altavoces de móvil, algunos portátiles, altavoces pequeños de cocina. Escucha tu mezcla sumando los dos canales a mono — en el OP-1 Field esto puedes simularlo escuchando con un solo auricular. Si la mezcla pierde mucho carácter al pasar a mono, tienes demasiado material que solo existe en los extremos del campo estéreo.</p></div></div>
</div>
</div>


<div class="widget" id="w-stereo">
  <div class="w-title">campo estéreo — arrastra los elementos</div>
  <div class="w-stereo" id="ws2-field">
    <div class="w-stereo-center"></div>
    <div style="position:absolute;bottom:4px;left:4px;font-size:8px;color:var(--mid);letter-spacing:.1em">L</div>
    <div style="position:absolute;bottom:4px;right:4px;font-size:8px;color:var(--mid);letter-spacing:.1em">R</div>
    <div style="position:absolute;bottom:4px;left:50%;transform:translateX(-50%);font-size:8px;color:var(--mid);letter-spacing:.1em">C</div>
    <div class="w-dot" id="ws2-kick" style="background:#111110;top:25%;left:50%">kick</div>
    <div class="w-dot" id="ws2-bajo" style="background:#0055cc;top:50%;left:50%">bajo</div>
    <div class="w-dot" id="ws2-tex" style="background:#00aa55;top:35%;left:75%">tex</div>
    <div class="w-dot" id="ws2-mel" style="background:#ff5500;top:65%;left:35%">mel</div>
  </div>
  <div class="w-row" style="margin-top:10px;flex-wrap:wrap;gap:6px">
    <button class="w-btn" id="ws2-play" onclick="ws2Toggle()">▶ escuchar</button>
    <button class="w-btn inactive" onclick="ws2Reset()">posición recomendada</button>
    <span class="w-tag" id="ws2-info">arrastra los puntos para cambiar el paneo</span>
  </div>
</div>

<div class="widget" id="w-mix-helper">
  <div class="w-title">mezcla rápida — delante/detrás y rango medio</div>
  <div class="w-row">
    <span class="w-label">foco delante</span>
    <input type="range" class="w-range" id="wmx-front" min="0" max="100" value="55" oninput="wmxUpdate()">
    <span class="w-val" id="wmx-frontv">55%</span>
  </div>
  <div class="w-row">
    <span class="w-label">reverb global</span>
    <input type="range" class="w-range" id="wmx-rev" min="0" max="100" value="35" oninput="wmxUpdate()">
    <span class="w-val" id="wmx-revv">35%</span>
  </div>
  <div class="w-row">
    <span class="w-label">bajo vs kick</span>
    <input type="range" class="w-range" id="wmx-low" min="0" max="100" value="50" oninput="wmxUpdate()">
    <span class="w-val" id="wmx-lowv">equilibrado</span>
  </div>
  <div class="w-row">
    <span class="w-label">densidad medios</span>
    <input type="range" class="w-range" id="wmx-mid" min="0" max="100" value="45" oninput="wmxUpdate()">
    <span class="w-val" id="wmx-midv">45%</span>
  </div>
  <div class="w-row">
    <span class="w-label">drive master</span>
    <input type="range" class="w-range" id="wmx-drive" min="0" max="100" value="20" oninput="wmxUpdate()">
    <span class="w-val" id="wmx-drivev">20%</span>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wmx-note">lectura inicial: balance usable. ajusta solo una variable y reescucha.</div>
  </div>
</div>

<div class="sec" id="m12-s5">
<div class="st">masterización — preparar para la escucha final</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>masterizar es el último paso antes de publicar o compartir</strong><p>La masterización es el proceso de preparar la mezcla final para que suene bien en todos los sistemas de reproducción: altavoces de estudio, auriculares de móvil, sistema de coche, altavoces Bluetooth baratos. No es mezclar de nuevo — es ajustar el nivel general, el balance de frecuencias globales, y la dinámica para que el resultado sea consistente en cualquier situación. Para un track del OP-1 Field: no necesitas un estudio de masterización profesional, pero sí seguir unos pasos básicos.</p></div></div>
  <div class="step"><div class="sl">EQ global</div><div class="sb"><strong>ecualización master — balance de frecuencias de toda la mezcla</strong><p>Un ecualizador (EQ) ajusta el volumen de rangos de frecuencia específicos. En masterización, el EQ master corrige desequilibrios generales: si la mezcla suena demasiado grave (mucho bajo), se reduce ligeramente ese rango. Si suena apagada (pocos agudos), se añade un poco de brillo en los 8–16 kHz. Los ajustes de EQ en master son pequeños — máximo ±3 dB — no es para transformar el timbre sino para compensar imperfecciones.</p></div></div>
  <div class="step"><div class="sl">procesado master</div><div class="sb"><strong>eq + master fx + drive — cohesión final</strong><p>En el flujo interno del OP-1 Field, el acabado global se trabaja desde Mixer con EQ, master FX y drive. Haz cambios pequeños y compara A/B en contexto completo para conservar claridad y dinámica útil.</p></div></div>
  <div class="step"><div class="sl">limitador</div><div class="sb"><strong>limiter — techo máximo de 0 dBFS</strong><p>El limitador es un compresor con ratio infinito: no deja que ningún pico supere un nivel máximo definido. Es el último elemento de la cadena de masterización. Normalmente se pone a −0.1 o −0.3 dBFS para garantizar que nada clipee en la reproducción. El limitador también sube el volumen aparente de la mezcla — es lo que hace que los discos comerciales suenen "fuerte". No está disponible directamente en el OP-1 Field, pero si exportas y masterizas en un DAW es el último proceso antes de exportar.</p></div></div>
  <div class="step"><div class="sl">LUFS</div><div class="sb"><strong>LUFS — la medida de volumen percibido que usan las plataformas</strong><p>LUFS (Loudness Units Full Scale) es la unidad de medida de volumen que usan Spotify, Apple Music, YouTube y las demás plataformas para normalizar el volumen de los tracks. Spotify normaliza a −14 LUFS, Apple Music a −16 LUFS, YouTube a −14 LUFS. Si tu track supera ese nivel, la plataforma lo bajará automáticamente. Si queda por debajo, sonará más silencioso que los demás. Objetivo: −14 LUFS integrado para el uso más estándar. No necesitas medirlo en el OP-1 Field — es algo que ajustas si masterizas en un DAW después de exportar.</p></div></div>
  <div class="step"><div class="sl">loudness war</div><div class="sb"><strong>la guerra del volumen — por qué no hay que competir</strong><p>Durante los 90s y 2000s, discográficas y productores comprimían y limitaban cada vez más para que sus discos sonaran más "fuertes" que los demás. El resultado: pérdida total de dinámica, fatiga auditiva, y mezclas que suenan planas. Desde que las plataformas normalizan el volumen, esa carrera no tiene sentido. Un track con buena dinámica (headroom real, picos naturales) suena mejor que uno comprimido al máximo incluso al mismo volumen percibido.</p></div></div>
</div>
</div>

<div class="sec" id="m12-s6">
<div class="st">masterización práctica en el OP-1 Field</div>
<div class="steps">
  <div class="step"><div class="sl">paso 1</div><div class="sb"><strong>balance y panorama</strong><p>Escucha el track completo y corrige por prioridades: foco, espacio y claridad. Si algo domina, bájalo antes de subir el resto.</p></div></div>
  <div class="step"><div class="sl">paso 2</div><div class="sb"><strong>master FX / compresión / drive con moderación</strong><p>Aplica procesos globales en pequeños pasos y compara A/B. Si al activar suena “más fuerte” pero más cansado, te pasaste.</p></div></div>
  <div class="step"><div class="sl">paso 3</div><div class="sb"><strong>headroom y control de picos</strong><p>Deja margen para evitar clipping en los momentos densos. Si el pico se dispara, revisa la pista problemática o el procesamiento global.</p></div></div>
  <div class="step"><div class="sl">paso 4</div><div class="sb"><strong>revisión en sistemas distintos</strong><p>Prueba en auriculares, altavoz pequeño y móvil. Si el bajo desaparece o lo tapa todo, corrige balance/registro antes de exportar.</p></div></div>
  <div class="step"><div class="sl">paso 5</div><div class="sb"><strong>cuándo parar dentro del OP-1 Field y exportar stems</strong><p>Si tras varios A/B seguidos solo haces microcambios sin mejora clara, para. Exporta stems cuando necesites edición quirúrgica, automatización fina o procesamiento externo que el flujo interno ya no resuelve rápido.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>checklist antes de exportar</strong>□ Balance claro: sabes qué va delante y qué detrás.<br>□ No hay clipping en picos fuertes.<br>□ Colas de efecto controladas al final de frases.<br>□ Transiciones limpias, sin huecos no deseados.<br>□ El bajo no desaparece ni invade todo en móvil.<br>□ Si dudas después de varios A/B, exporta versión y avanza.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">mezcla completa de principio a fin — 60 min</div>
  <ul class="ex-ul">
    <li><strong>Abre el track del módulo 11</strong> (sampler/input/resampling). Escúchalo una vez sin tocar nada. Identifica el elemento principal y los que acompañan.</li>
    <li><strong>Jerarquía:</strong> coloca primero la pista principal y ajusta el resto alrededor. Si algo compite, baja acompañamientos antes de subir el foco.</li>
    <li><strong>Pan:</strong> kick y bajo al centro. Reparte melodía/textura para abrir el estéreo sin perder equilibrio entre lados.</li>
    <li><strong>Send a efecto master:</strong> menos en elementos frontales, más en capas de fondo. Ajusta por escucha y usa los números solo como referencia.</li>
    <li><strong>Procesado global:</strong> prueba compresión/drive suave y compara A/B. Si pierde punch o claridad, reduce.</li>
    <li><strong>Headroom:</strong> revisa los momentos más densos y deja margen para exportar sin clipping.</li>
    <li><strong>Mono check:</strong> escucha con un solo auricular. ¿Sigue funcionando? Si no, revisa el pan.</li>
    <li>Exporta y escucha en el móvil. Anota 2 cosas que mejorarías en el siguiente track.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(11)">← anterior</button>
  <button class="btn btn-p" onclick="go(13)">siguiente →</button>
  <button class="btn btn-d" id="bd12" onclick="done(12)">marcar listo</button>
</div>
</div>`,
      m13: `<div class="mod" id="m13">
<div class="mod-hd">
  <div class="ey">módulo 13 · cierre</div>
  <div class="mt">workflow completo — <strong>de cero a track en 90 min</strong></div>
  <div class="md">Este módulo no añade teoría nueva: conecta todo lo que ya sabes. Es el mapa del curso. Cada paso enlaza a la sección exacta donde aprendiste esa herramienta, para usarlo como guía rápida mientras produces.</div>
  <div class="mm-row"><div class="mm">90 min</div><div class="mm">OP-1 Field</div><div class="mm">el track completo</div></div>
</div>

<div class="sec" id="m13-s0">
<div class="st">reset rápido antes de empezar</div>
<div class="steps">
  <div class="step"><div class="sl">mixer</div><div class="sb"><strong>arranca limpio para no heredar suciedad</strong><p>Antes de hacer el workflow, deja Mixer en estado neutro: canales alrededor de 80 y paneo al centro (T1), EQ en clean (T2), efecto en OFF (T3), y master L/R a 99 con drive y release en 0.</p></div></div>
  <div class="step"><div class="sl">sequencers</div><div class="sb"><strong>apaga secuenciadores activos</strong><p>Si queda un secuenciador encendido, puede alterar el comportamiento del patch y confundir el resultado. Desactiva cualquier secuenciador antes de grabar.</p></div></div>
  <div class="step"><div class="sl">por qué</div><div class="sb"><strong>evita diagnósticos falsos de sonido “sucio”</strong><p>Muchos problemas de mezcla o timbre vienen de estados previos del master/mixer, no del patch actual. Este reset de 20–30 segundos te ahorra perder tiempo.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>nota práctica</strong>En OP-1 Field estos valores pueden mantenerse entre cambios de contexto. Si algo suena raro al inicio de sesión, haz este reset antes de tocar el synth.</div></div>
</div>

<div class="sec" id="m13-s1">
<div class="st">el flujo — 90 minutos de principio a fin</div>
<div class="steps">
  <div class="step"><div class="sl">0–5 min</div><div class="sb"><strong>setup — BPM y tape base</strong><p>Elige un BPM antes de grabar nada. <a href="#" onclick="go(1);buildSub(1);document.getElementById('m1-s3').scrollIntoView();return false;">Tabla de BPM por género →</a> · 85 BPM es un punto de partida seguro para experimental. Duplica la tape actual como punto de retorno. <a href="#" onclick="go(3);buildSub(3);document.getElementById('m3-s4').scrollIntoView();return false;">Presets y versionado →</a></p></div></div>
  <div class="step"><div class="sl">5–20 min</div><div class="sb"><strong>drums — el groove primero</strong><p>Empieza siempre por el elemento rítmico. Kick + snare + hi-hat en Pista 1. Si no tienes samples: síntesis directa. <a href="#" onclick="go(9);buildSub(9);return false;">Percusión por síntesis →</a> · Si tienes el EP-133: graba el groove en los pads y captura en Pista 1. <a href="#" onclick="go(14);buildSub(14);return false;">Flujos OP-1 + EP-133 →</a> · Herramienta generativa: <a href="#" onclick="go(10);buildSub(10);document.getElementById('m10-s2').scrollIntoView();return false;">Tombola para drums →</a></p></div></div>
  <div class="step"><div class="sl">20–35 min</div><div class="sb"><strong>bajo — la nota base del track</strong><p>Pista 2. FM para bajo pluck con carácter. <a href="#" onclick="go(5);buildSub(5);document.getElementById('m5-s2').scrollIntoView();return false;">FM Synth →</a> · Synth sustractivo para bajo analógico. <a href="#" onclick="go(6);buildSub(6);document.getElementById('m6-s1').scrollIntoView();return false;">Synth engine →</a> · String para bajo con cuerpo. <a href="#" onclick="go(6);buildSub(6);document.getElementById('m6-s3').scrollIntoView();return false;">String engine →</a> · El bajo siempre al centro en el paneo. El kick y el bajo no al mismo tiempo en la misma nota.</p></div></div>
  <div class="step"><div class="sl">35–50 min</div><div class="sb"><strong>melodía — Pista 3</strong><p>FM para melodías con definición. DNA para melodías extrañas. <a href="#" onclick="go(5);buildSub(5);return false;">Engines FM · DNA · Cluster →</a> · Drwave con LFO para melodías que evolucionan. <a href="#" onclick="go(7);buildSub(7);document.getElementById('m7-s3').scrollIntoView();return false;">Value LFO + Drwave →</a> · Usa los secuenciadores para que la melodía se genere sola: <a href="#" onclick="go(10);buildSub(10);document.getElementById('m10-s2').scrollIntoView();return false;">Tombola →</a> · <a href="#" onclick="go(10);buildSub(10);document.getElementById('m10-s4').scrollIntoView();return false;">Endless →</a></p></div></div>
  <div class="step"><div class="sl">50–65 min</div><div class="sb"><strong>textura — Pista 4</strong><p>El fondo que da espacio. Cluster con volumen bajo. <a href="#" onclick="go(5);buildSub(5);document.getElementById('m5-s4').scrollIntoView();return false;">Cluster →</a> · Drwave con LFO lento. <a href="#" onclick="go(6);buildSub(6);document.getElementById('m6-s2').scrollIntoView();return false;">Drwave →</a> · Random LFO para que la textura nunca suene exactamente igual. <a href="#" onclick="go(7);buildSub(7);document.getElementById('m7-s4').scrollIntoView();return false;">Random LFO →</a> · Samples de field recording para texturas que no suenan a ningún synth. <a href="#" onclick="go(11);buildSub(11);return false;">Sampler y field recording →</a></p></div></div>
  <div class="step"><div class="sl">65–80 min</div><div class="sb"><strong>mezcla — volúmenes, paneo y efectos</strong><p>Mixer mode. Kick y bajo al centro. Textura a los lados. Melodía según el balance. <a href="#" onclick="go(12);buildSub(12);document.getElementById('m12-s3').scrollIntoView();return false;">Técnicas de mezcla para 4 pistas →</a> · Paneo: <a href="#" onclick="go(12);buildSub(12);document.getElementById('m12-s4').scrollIntoView();return false;">Diseño del campo estéreo →</a> · Compresión master y headroom: <a href="#" onclick="go(12);buildSub(12);document.getElementById('m12-s5').scrollIntoView();return false;">Masterización en el OP-1 →</a></p></div></div>
  <div class="step"><div class="sl">80–90 min</div><div class="sb"><strong>exportar — cuando suena el timer, exportas</strong><p>No hay "un ajuste más". Una mezcla buena que existe es mejor que una mezcla perfecta que nunca terminas. <a href="#" onclick="go(15);buildSub(15);return false;">Tres rutas de exportación →</a> · Checklist antes de exportar: bajo en móvil, colas de reverb, clipping. Si estás sincronizado con EP-133 como master, revisa antes el comportamiento de transporte (resume vs rewind). <a href="#" onclick="go(14);buildSub(14);document.getElementById('m14-s8').scrollIntoView();return false;">Ver test rápido →</a></p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>el timer es la herramienta más importante</strong>Trabaja en fases con límite de tiempo. Los límites fuerzan decisiones — el cerebro no puede seguir analizando y empieza a confiar en el instinto. 90 minutos para un track completo es factible. Pruébalo.</div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>pieza interactiva</strong>Planificador de 90 minutos: mueve el minuto actual, marca fases completadas y usa la recomendación automática para no quedarte bloqueado entre etapas.</div></div>
<div class="widget" id="w-workflow-90">
  <div class="w-title">workflow 90 min — guía de fase en tiempo real</div>
  <div class="w-row">
    <span class="w-label">minuto actual</span>
    <input type="range" class="w-range" id="wwf-min" min="0" max="90" value="0" oninput="wwfUpdate()">
    <span class="w-val" id="wwf-minv">0</span>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wwf-stage">fase: setup (0–5). Define BPM, duplica tape y prepara contexto.</div>
  </div>
  <div class="w-checks">
    <label><input type="checkbox" id="wwf-c1" onchange="wwfUpdate()">setup listo</label>
    <label><input type="checkbox" id="wwf-c2" onchange="wwfUpdate()">drums grabados</label>
    <label><input type="checkbox" id="wwf-c3" onchange="wwfUpdate()">bajo grabado</label>
    <label><input type="checkbox" id="wwf-c4" onchange="wwfUpdate()">melodía grabada</label>
    <label><input type="checkbox" id="wwf-c5" onchange="wwfUpdate()">textura grabada</label>
    <label><input type="checkbox" id="wwf-c6" onchange="wwfUpdate()">mezcla base hecha</label>
    <label><input type="checkbox" id="wwf-c7" onchange="wwfUpdate()">export realizado</label>
  </div>
  <div class="w-row">
    <button class="w-btn inactive" onclick="wwfReset()">reset checklist</button>
    <span class="w-tag" id="wwf-progress">0/7 fases completadas.</span>
  </div>
</div>

<div class="sec" id="m13-s2">
<div class="st">estrategias cuando hay bloqueo</div>
<div class="steps">
  <div class="step"><div class="sl">A</div><div class="sb"><strong>Tombola → curar → refinar</strong><p>Activa <a href="#" onclick="go(10);buildSub(10);document.getElementById('m10-s2').scrollIntoView();return false;">Tombola</a> en Drum mode con aleatoriedad media. Genera 8 patrones distintos. Cuando uno tenga algo interesante: grábalo. La idea no es tuya — es de Tombola. Tú eres el editor que eligió qué conservar.</p></div></div>
  <div class="step"><div class="sl">B</div><div class="sb"><strong>captura → pitch → melodía</strong><p>Sal a grabar con el OP-1 o el EP-133. Cualquier sonido. Asígnalo a Drum sampler en slots distintos con pitches +3, +7, +12. Toca esas teclas melódicamente. Un sonido de 1 segundo se convierte en un instrumento que no existe en ninguna librería. <a href="#" onclick="go(11);buildSub(11);return false;">Sampler →</a></p></div></div>
  <div class="step"><div class="sl">C</div><div class="sb"><strong>restricción de material — solo 2 elementos</strong><p>Un kick y una melodía de 3 notas. O solo teclas negras y un sample de campo. La restricción fuerza creatividad dentro de límites. Boards of Canada, Burial, y buena parte del ambient minimalista funciona con muy pocos elementos.</p></div></div>
  <div class="step"><div class="sl">D</div><div class="sb"><strong>jam → graba todo → edita después</strong><p>Tape rodando en Pista 1. <a href="#" onclick="go(10);buildSub(10);document.getElementById('m10-s3').scrollIntoView();return false;">Sketch</a> activo. Improvisa 4–5 minutos sin parar ni evaluar. Luego usa <a href="#" onclick="go(4);buildSub(4);document.getElementById('m4-s4').scrollIntoView();return false;">Lift/Drop</a> para cortar los mejores fragmentos.</p></div></div>
</div>
</div>

<div class="sec" id="m13-s3">
<div class="st">gestión de sesión — hábitos</div>
<div class="steps">
  <div class="step"><div class="sl">ritual</div><div class="sb"><strong>los primeros 5 minutos de una sesión productiva</strong><p>1. Duplica la tape actual. 2. Escucha el tape completo con ojos cerrados. 3. Decide UNA sola cosa que quieres hacer hoy. 4. Pon el timer. 5. Empieza. No decidas mientras trabajas — decide antes y ejecuta.</p></div></div>
  <div class="step"><div class="sl">versiones</div><div class="sb"><strong>versiona tape y sonido por separado</strong><p>Antes de reestructurar arreglo o mezcla, duplica tape. Antes de rediseñar timbres, guarda un preset de sonido. Ese hábito te da control y evita perder ideas por editar en caliente.</p></div></div>
</div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">track completo en 90 minutos — sin excepciones</div>
  <ul class="ex-ul">
    <li>Pon el timer en 90 minutos. Elige un BPM. Sigue el flujo de las 7 fases de esta sección. Cuando suene el timer: exportas. Lo que haya.</li>
    <li>No importa si el resultado no es lo que esperabas. Un track terminado enseña más que diez que se quedan a medias.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(12)">← anterior</button>
  <button class="btn btn-p" onclick="go(14)">siguiente →</button>
  <button class="btn btn-d" id="bd13" onclick="done(13)">marcar listo</button>
</div>
</div>`,
      m14: `<div class="mod" id="m14">
<div class="mod-hd">
  <div class="ey">módulo 14 · setup</div>
  <div class="mt">OP-1 Field + <strong>ep–133 ko ii</strong></div>
  <div class="md">Tienes los dos: no son rivales ni redundantes. Tienen personalidades distintas que se complementan. Este módulo cubre, con base en manual oficial, cómo conectarlos, cómo funciona el stereo en el EP-133, cómo sincronizar tempo y qué flujos funcionan en práctica real.</div>
  <div class="mm-row"><div class="mm">~3h</div><div class="mm">los dos dispositivos</div><div class="mm">cable 3.5mm + USB-C</div></div>
</div>

<div class="sec" id="m14-s1">
<div class="st">el ep–133 ko ii — capacidades reales</div>
<div class="steps">
  <div class="step"><div class="sl">qué es</div><div class="sb"><strong>128 MB · 999 slots · 12 pads + 4 grupos</strong><p>El EP-133 KO II es un sampler/compositor de 128 MB con 999 slots de sample, 12 pads de performance y 4 pads de grupo. Puede samplear desde el micrófono integrado, entrada de línea estéreo, o recibir archivos desde el ordenador vía USB-C y la EP Sample Tool. Su secuenciador interno tiene 80.000 notas por proyecto y 9 páginas de patrones por grupo.</p></div></div>
  <div class="step"><div class="sl">pads</div><div class="sb"><strong>sensibilidad de presión — se activa en ajustes</strong><p>Los 12 pads responden a la presión, pero la velocity sensitivity está desactivada por defecto. Para activarla: <kbd>Shift</kbd> + <kbd>Erase</kbd> para entrar en system settings → navega a "pad" → entra → navega a "vel" → elige hi (para tocar con poca fuerza) o low (para tocar con más fuerza). Sin esto activado, todos los golpes suenan al mismo volumen.</p></div></div>
  <div class="step"><div class="sl">keys mode</div><div class="sb"><strong>los 12 pads como teclado cromático con cualquier sample</strong><p>Pulsa <kbd>Keys</kbd> para entrar en Keys mode: los 12 pads se convierten en un teclado que reproduce el sample seleccionado transpuesto a lo largo de una escala. Cambia octava con <kbd>Keys</kbd> + minus/plus. Cambia escala en system settings → pad → sca: mayor, menor, dórico, pentatónica menor, etc. Esto convierte cualquier sample — incluyendo síntesis capturada del OP-1 — en un instrumento melódico completamente controlable.</p></div></div>
  <div class="step"><div class="sl">chop</div><div class="sb"><strong>auto-chop vs live chop — dos enfoques distintos</strong><p><strong>Auto-chop</strong> (<kbd>Shift</kbd> + <kbd>Sample</kbd>): el EP-133 detecta automáticamente los beats del sample y distribuye los slices entre los pads. Usa minus/plus para elegir el número de slices. Ideal para loops de batería. <strong>Live chop</strong>: tú decides los puntos de corte — el sample reproduce y pulsas pads en los momentos donde quieres cortar. Ideal para samples de acorde o melodía donde quieres control preciso. KnobX y KnobY refinan los puntos de entrada y salida de cada slice después del chop.</p></div></div>
  <div class="step"><div class="sl">FX</div><div class="sb"><strong>un send estéreo con 6 opciones + distorsión built-in</strong><p>El EP-133 tiene un único send de efecto estéreo (no un insert) que puedes enviar por grupo. Las opciones son: Delay, Reverb, Distortion, Filter, Compression, y Chorus. Además tiene distorsión analógica built-in siempre disponible en el output. El fader asignado a "→FX" controla cuánta señal de cada grupo va al send. No es lo mismo que los efectos del OP-1: en el EP-133 el efecto es compartido entre todos los grupos que le mandes señal.</p></div></div>
  <div class="step"><div class="sl">timing</div><div class="sb"><strong>swing propio con cuantización configurable</strong><p>El EP-133 tiene su propio control de swing (knobY en timing mode, solo para intervalos 1/8 y 1/16), y permite alternar entre grabación cuantizada y free time. En free time graba exactamente como tocas — groove humano. Note repeat (mantener <kbd>Timing</kbd> + pulsar un pad) repite el sample al tempo del secuenciador: útil para hi-hats automáticos mientras te concentras en el kick y el snare.</p></div></div>
</div>
</div>

<div class="sec" id="m14-s2">
<div class="st">captura de audio — estéreo vs mono, paso a paso</div>
<div class="steps">
  <div class="step"><div class="sl">entrar</div><div class="sb"><strong>pulsa <kbd>Sample</kbd> para entrar en modo de sampleo</strong><p>Todos los botones se iluminan. Los LEDs parpadean para indicar que estás en sample mode. Desde aquí puedes capturar a cualquier pad vacío.</p></div></div>
  <div class="step"><div class="sl">fuente</div><div class="sb"><strong>minus / plus — selecciona la fuente de audio</strong><p>Mientras estás en sample mode, pulsa minus o plus para navegar por las opciones de fuente: <strong>mic</strong> (micrófono integrado), <strong>in</strong> mono (entrada de línea sumada a mono), <strong>in</strong> estéreo (entrada de línea en stereo completo), <strong>rsp</strong> mono (resample interno en mono), <strong>rsp</strong> estéreo (resample interno en stereo), <strong>L.IN</strong> (solo canal izquierdo de la entrada), <strong>R.IN</strong> (solo canal derecho). Para capturar el OP-1 en estéreo: selecciona "in estéreo".</p></div></div>
  <div class="step"><div class="sl">nivel</div><div class="sb"><strong>knobX = nivel de entrada · knobY = umbral de disparo</strong><p>KnobX sube o baja la ganancia de lo que entra. KnobY ajusta el threshold: con threshold activado, la grabación empieza automáticamente cuando la señal supera ese nivel — útil cuando necesitas las dos manos para tocar el OP-1 y no puedes pulsar el pad del EP-133 al mismo tiempo. Para grabar manualmente sin threshold: deja knobY al mínimo.</p></div></div>
  <div class="step"><div class="sl">grabar</div><div class="sb"><strong>mantén un pad → graba → suelta el pad → para</strong><p>Mantén el pad donde quieres guardar el sample. La grabación empieza inmediatamente. Suelta el pad para detenerla. El pad deja de parpadear y queda iluminado — el sample está asignado. Pruébalo pulsando el pad una vez. Para volver a intentarlo: pulsa <kbd>Sample</kbd> de nuevo y repite.</p></div></div>
  <div class="step"><div class="sl">hands free</div><div class="sb"><strong><kbd>Shift</kbd> + pad — graba sin necesitar las dos manos</strong><p>Si necesitas las dos manos para tocar (por ejemplo, tocas en el OP-1 mientras el EP-133 graba), usa hands free: <kbd>Shift</kbd> + pad activa la grabación automática. Combinado con la fuente "rsp" y el patrón en play, puedes resamplear un patrón entero del EP-133 automáticamente — el EP-133 graba exactamente la duración del patrón activo y se detiene solo.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>el OP-1 en estéreo al EP-133</strong>Cuando conectas la salida del OP-1 a la entrada del EP-133 con un cable 3.5mm estéreo, el EP-133 recibe ambos canales. Selecciona "in estéreo" como fuente. Engines como Cluster o sonidos procesados con Mother/Spring/Delay en estéreo se capturan con toda su amplitud. Engines más centrados (como muchos patches FM/Synth) pueden llegar casi mono en L y R; en esos casos, "in mono" puede ahorrar espacio.</div></div>
</div>

<div class="sec" id="m14-s3">
<div class="st">conexión y sincronización — lo que funciona realmente</div>
<div class="steps">
  <div class="step"><div class="sl">audio</div><div class="sb"><strong>cable 3.5mm estéreo — la conexión base</strong><p>Ambos dispositivos tienen jack de 3.5mm estéreo para entrada y salida. Un cable de minijack a minijack es suficiente para pasar audio. La dirección del cable define el flujo: OP-1 salida → EP-133 entrada (para samplear síntesis), o EP-133 salida → OP-1 entrada (para grabar el groove en el tape).</p></div></div>
  <div class="step"><div class="sl">MIDI</div><div class="sb"><strong>rutas MIDI frecuentes: USB-C o BLE</strong><p>En muchos setups de OP-1 Field, el reloj MIDI se integra por USB-C o BLE. Tómalo como flujo habitual y valida siempre en tu firmware/rig antes de sesión larga.</p></div></div>
  <div class="step"><div class="sl">USB-C</div><div class="sb"><strong>si usas USB clock, verifica host y transporte</strong><p>En varios rigs USB, hace falta un host/hub que ordene el reloj. Define un único master, prueba arranque/parada dos veces y deja ese esquema fijo para evitar deriva.</p></div></div>
  <div class="step"><div class="sl">sync pulso</div><div class="sb"><strong>sincronía analógica cuando quieras jam rápido</strong><p>Si prefieres una ruta sin DAW, usa pulso analógico compatible (PO sync / 1/16 según el setup) para mantener tempo común entre dispositivos. Es muy útil para directos o sesiones rápidas sin ordenador.</p></div></div>
  <div class="step"><div class="sl">configurar clock</div><div class="sb"><strong>elige un único master y verifica transporte</strong><p>Regla práctica: un solo master de clock, el resto en receive. Haz prueba de 8–16 compases, para y vuelve a reproducir: si arranca sólido dos veces seguidas, deja esa configuración fija para la sesión.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>resumen de cables por uso</strong><br>
Solo audio (samplear): 1 cable 3.5mm estéreo.<br>
Audio + sync MIDI: 1 cable 3.5mm estéreo (audio) + conexión MIDI por USB/BLE con host.<br>
Sync con Pocket Operators: 1 cable del EP-133 sync out al PO sync in (recuerda que PO sync trabaja en dual mono).<br>
Sync por pulso: cable sync compatible + elegir modo de pulso (PO sync / 1/16 según el rig).<br>
Via ordenador (DAW como hub): USB-C del OP-1 + USB-C del EP-133 → DAW enruta el clock.</div></div>
</div>

<div class="sec" id="m14-s4">
<div class="st">diferencias clave — cuándo usar cada uno</div>
<div class="steps">
  <div class="step"><div class="sl">OP-1</div><div class="sb"><strong>síntesis, estructura, composición, secuenciadores generativos</strong><p>El OP-1 es donde vive la síntesis compleja (FM, DNA, Cluster, Vocoder), el tape de 4 pistas, y los secuenciadores generativos (Tombola, Endless, Arp). Es el instrumento de las decisiones deliberadas: diseñar timbres, construir loops capa a capa, editar con Lift/Drop. Su secuenciador es generativo y aleatorio — ideal para melodías que emergen por sí solas. Su punto débil: el sampling rápido y los chops agresivos.</p></div></div>
  <div class="step"><div class="sl">EP-133</div><div class="sb"><strong>sampling inmediato, groove físico, chops, performance</strong><p>El EP-133 está diseñado para capturar rápido, cortar, y tocar de forma percusiva e inmediata. Su secuenciador es de step fijo — sabes exactamente qué va en qué paso, con quantización precisa o free time. Keys mode lo convierte en un instrumento melódico inmediato. Su punto débil: la síntesis — ahí depende completamente de lo que captures.</p></div></div>
  <div class="step"><div class="sl">juntos</div><div class="sb"><strong>el OP-1 diseña los timbres — el EP-133 los hace vivir</strong><p>La división de trabajo más natural: el OP-1 sintetiza y estructura, el EP-133 captura esa síntesis y la convierte en instrumento de performance. O al revés: el EP-133 genera el groove físico y el OP-1 lo graba en el tape como base para capas de síntesis. Los dos juntos cubren el espectro completo entre producción deliberada y performance espontánea.</p></div></div>
</div>
</div>

<div class="sec" id="m14-s5">
<div class="st">flujos de trabajo — de básico a avanzado</div>
<div class="steps">
  <div class="step"><div class="sl">flujo A</div><div class="sb"><strong>OP-1 sintetiza → EP-133 samplea en estéreo</strong><p>Cable del OP-1 salida → EP-133 entrada. En sample mode del EP-133, selecciona "in estéreo". Diseña un sonido en el OP-1 (FM bass, textura Cluster, pad Drwave con LFO). Activa hands free en el EP-133 si necesitas las dos manos. Captura el sonido. Ahora ese timbre OP-1 vive en el EP-133 con toda la expresividad de los pads y Keys mode.</p></div></div>
  <div class="step"><div class="sl">flujo B</div><div class="sb"><strong>EP-133 genera el groove → OP-1 lo graba en el tape</strong><p>Cable del EP-133 salida → OP-1 entrada. En el OP-1: Tape mode, Pista 1, Rec+Play. Toca el groove en los pads del EP-133 durante 4–8 compases. Ese groove con su timing físico queda en el tape. Añade síntesis del OP-1 en Pistas 2, 3, 4 encima.</p></div></div>
  <div class="step"><div class="sl">flujo C</div><div class="sb"><strong>chop de síntesis — textura OP-1 como instrumento percusivo</strong><p>Genera 20–30 segundos de textura en el OP-1 (DNA con mutación alta, Cluster evolucionando). Captúrala en el EP-133 con "in estéreo". Usa Auto-chop: el EP-133 divide la textura en slices basados en el análisis de la forma de onda y los distribuye entre los pads. Cada pad es un fragmento distinto de la textura. Toca los pads rítmicamente mientras el tape del OP-1 corre.</p></div></div>
  <div class="step"><div class="sl">flujo D</div><div class="sb"><strong>EP-133 en Keys mode con síntesis FM del OP-1</strong><p>Captura 5 notas de la pentatónica menor del OP-1 (La, Do, Re, Mi, Sol) como 5 samples individuales en el EP-133. En Keys mode, los 12 pads se convierten en un teclado que transpone esas notas según la escala seleccionada. Toca líneas de bajo melódico en el EP-133 con el timbre FM del OP-1 — el groove físico de los pads más la riqueza de síntesis FM.</p></div></div>
  <div class="step"><div class="sl">flujo E</div><div class="sb"><strong>los dos a tempo — performance en vivo (si tu setup lo confirma)</strong><p>Configura una única ruta de clock (USB/BLE o pulso compatible), valida estabilidad en una prueba corta y luego graba performance. Deja el OP-1 corriendo tape en loop y toca pads del EP-133 encima.</p></div></div>
  <div class="step"><div class="sl">flujo F</div><div class="sb"><strong>K.O. II como módulo rítmico opcional para liberar pistas</strong><p>Si ya tienes EP-133/K.O. II, úsalo como generador rápido de patrón de batería y deja el OP-1 Field para síntesis y arreglo. Crea el beat en KO II, grábalo al tape del OP-1 en una toma clara (4–8 compases) y después apaga la dependencia externa para seguir dentro del OP-1 con pistas 2–4. No es obligación: es una ruta opcional para ganar velocidad y espacio de producción.</p></div></div>
</div>
<div class="co"><div class="co-b"></div><div class="co-bd"><strong>progresión recomendada</strong>Semanas 1–3: Flujo A. Aprende a samplear síntesis del OP-1 en el EP-133 en estéreo. Semanas 4–6: Flujo B. Aprende a estructurar el groove del EP-133 en el tape. Semana 7+: Flujos C y D. Chop de síntesis y Keys mode cuando A y B sean automáticos. Flujo E cuando ya tengas validada en tu rig una ruta de sync estable (USB/BLE o pulso). Flujo F cuando quieras producir rápido y dejar el KO II como módulo rítmico opcional.</div></div>
</div>

<div class="sec" id="m14-s6">
<div class="st">ideas de tracks que solo suenan con los dos</div>
<div class="steps">
  <div class="step"><div class="sl">idea 1</div><div class="sb"><strong>hip-hop experimental — timbre FM con groove físico</strong><p>EP-133: 4 compases de drums tocados en los pads con velocity activada y swing al gusto — no programados, tocados. Graba ese groove en el tape del OP-1 (Flujo B). OP-1: FM bass pluck en Pista 2, textura DNA lenta en Pista 3. La base tiene el groove físico del EP-133, la síntesis tiene el color del OP-1. Exactamente la combinación que caracteriza al hardware beat-making.</p></div></div>
  <div class="step"><div class="sl">idea 2</div><div class="sb"><strong>electrónica densa — capas generativas con variación de pads</strong><p>OP-1: Tombola generando una melodía en loop en Pista 4. Cluster como fondo en Pista 3. EP-133: auto-chop de la textura Cluster en 6 slices, tocando fragmentos rítmicamente encima del loop. El EP-133 en Keys mode con el FM bass: melodía reactiva encima de la generación aleatoria del OP-1. Múltiples capas de aleatoriedad pero estructuradas.</p></div></div>
  <div class="step"><div class="sl">idea 3</div><div class="sb"><strong>ambient activo — pad Drwave evolucionando con eventos de EP-133</strong><p>OP-1: Drwave con LFO en posición de wavetable (sync a 1/4) en el tape, Pistas 2–4. EP-133: samples de field recording en los pads, tocados como percusión de textura espaciada — no ritmo, sino eventos sonoros. El OP-1 da el movimiento lento, el EP-133 da los eventos impredecibles. Si tu ruta de clock quedó validada, úsala para reducir deriva de tempo.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>el denominador común</strong>En los tres ejemplos, el OP-1 diseña los timbres y el EP-133 los hace vivir con el cuerpo. Esa división no es una limitación — es la forma de sacar lo mejor de cada uno. Cuando el clock queda bien validado en tu configuración, el resultado suele sentirse más cohesionado.</div></div>
</div>

<div class="sec" id="m14-s7">
<div class="st">conectividad field avanzada — ble, host y control list</div>
<div class="steps">
  <div class="step"><div class="sl">ble midi</div><div class="sb"><strong>sin cables para control y clock ligero</strong><p>BLE MIDI puede ser útil para setup móvil y pruebas rápidas. Si notas inestabilidad en sesiones largas o con más dispositivos, USB con host suele dar más consistencia de reloj.</p></div></div>
  <div class="step"><div class="sl">host/device</div><div class="sb"><strong>elige rol antes de arrancar sesión</strong><p>En OP-1 Field puedes trabajar en escenarios host/device compatibles. Decidir el rol desde el inicio evita reconexiones a mitad de toma, que suelen romper tempo o ruteo de control.</p></div></div>
  <div class="step"><div class="sl">control list</div><div class="sb"><strong>filtra qué mensajes midi entran y salen</strong><p>Usa control list para dejar pasar solo lo necesario (clock, notas o CC concretos). Reducir ruido MIDI evita cambios accidentales de parámetro y hace más estable el comportamiento en directo.</p></div></div>
  <div class="step"><div class="sl">check rápido</div><div class="sb"><strong>test de estabilidad en 60 segundos</strong><p>1) play/stop dos veces seguidas. 2) comprueba que ambos arrancan en el mismo beat. 3) mueve un control externo y confirma que solo afecta el parámetro esperado. Si pasa este test, puedes grabar sin miedo.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>pieza interactiva</strong>Matriz interactiva de conexión (USB host, BLE, pulso) con semáforo de riesgo: verde=estable para grabar, amarillo=jam, rojo=evitar para toma final.</div></div>
<div class="widget" id="w-conn-matrix">
  <div class="w-title">matriz de conexión — riesgo y recomendación</div>
  <div class="w-row">
    <span class="w-label">ruta de clock</span>
    <select id="wcm-path" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wcmUpdate()">
      <option value="usb_host">USB host</option>
      <option value="ble">BLE</option>
      <option value="pulse">PO / 1/16 pulse</option>
    </select>
    <span class="w-label">objetivo</span>
    <select id="wcm-goal" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wcmUpdate()">
      <option value="record">grabar toma final</option>
      <option value="jam">jam / boceto</option>
      <option value="live">directo ligero</option>
    </select>
  </div>
  <div class="w-row">
    <span class="w-label">dispositivos</span>
    <input type="range" class="w-range" id="wcm-dev" min="2" max="5" value="2" oninput="wcmUpdate()">
    <span class="w-val" id="wcm-devv">2</span>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wcm-risk">riesgo: verde · estable para grabar.</div>
    <div class="w-small" id="wcm-note" style="margin-top:8px">recomendación: valida play/stop dos veces y graba.</div>
  </div>
</div>
</div>

<div class="sec" id="m14-s8">
<div class="st">transporte con clock externo — resume vs rewind</div>
<div class="steps">
  <div class="step"><div class="sl">beat match</div><div class="sb"><strong>sin clock MIDI externo, Play suele retomar desde donde quedó el cabezal</strong><p>En flujo manual (tempo por beat matching/tap), el tape normalmente continúa desde el último punto de reproducción o grabación. Esto favorece jams continuos y edición por fragmentos.</p></div></div>
  <div class="step"><div class="sl">clock sync</div><div class="sb"><strong>con clock MIDI externo (EP-133 master), Play puede arrancar desde el inicio del tape</strong><p>En algunos setups, al recibir transporte/clock externo el OP-1 Field prioriza arranque alineado y vuelve al principio de la cinta. Tómalo como comportamiento posible del rig, no como regla universal.</p></div></div>
  <div class="step"><div class="sl">impacto</div><div class="sb"><strong>misma canción, dos lógicas de trabajo</strong><p>Resume (continuidad) funciona mejor para performance y captura de ideas largas. Rewind al inicio funciona mejor para tomas repetibles de arreglo. Elegir una lógica antes de grabar evita confusión.</p></div></div>
  <div class="step"><div class="sl">test 30s</div><div class="sb"><strong>valídalo al inicio de sesión</strong><p>1) Marca un punto claro en mitad del tape y para. 2) Pulsa Play en modo manual y observa si retoma. 3) Activa clock externo con EP-133 master y repite. 4) Documenta en una nota rápida qué hace tu rig hoy (resume o rewind).</p></div></div>
  <div class="step"><div class="sl">nota</div><div class="sb"><strong>puede variar por firmware/configuración</strong><p>Si cambia tras una actualización, repite este test y ajusta tu rutina de grabación. La referencia útil es el comportamiento real de tu setup actual.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>idea práctica</strong>Si quieres empezar siempre desde el mismo compás, usa clock sync y estructura lineal. Si quieres continuar desde el punto creativo donde paraste, trabaja en beat matching y lanza Play desde el cabezal actual.</div></div>
</div>

<div class="ex">
  <div class="ex-lb">ejercicio del módulo</div>
  <div class="ex-ti">sesión completa con los dos — 90 min</div>
  <ul class="ex-ul">
    <li><strong>Setup (10 min):</strong> Activa velocity sensitivity en el EP-133 (Shift+Erase → pad → vel → hi). Conecta cable 3.5mm OP-1 salida → EP-133 entrada. Verifica el nivel de entrada en el EP-133 con knobX.</li>
    <li><strong>Captura estéreo (15 min):</strong> En sample mode del EP-133, selecciona "in estéreo". Diseña un pad Drwave o Cluster en el OP-1. Captura 3 versiones distintas del mismo sonido en 3 pads del EP-133. Después captura un FM bass pluck en 5 pads separados (5 notas de la pentatónica).</li>
    <li><strong>Keys mode (15 min):</strong> Selecciona el pad del FM bass. Pulsa Keys. Toca una línea de bajo en los 12 pads. ¿El groove es diferente al arpeggiator del OP-1?</li>
    <li><strong>Chop (15 min):</strong> Captura 20 segundos de textura DNA del OP-1 en "in estéreo". Usa Auto-chop. Explora los slices resultantes tocando los pads de forma rítmica.</li>
    <li><strong>Flujo B (25 min):</strong> Invierte el cable. EP-133 salida → OP-1 entrada. Graba 4 compases de groove del EP-133 en Pista 1 del tape. Añade FM en Pista 2, textura Drwave en Pista 3.</li>
    <li><strong>Sync (10 min):</strong> Elige una sola ruta de clock (USB/BLE o pulso compatible), define master/slave y haz prueba de 16 compases. Si deriva, vuelve a ruta manual por tap tempo y sigue la sesión.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(13)">← anterior</button>
  <button class="btn btn-p" onclick="go(15)">siguiente →</button>
  <button class="btn btn-d" id="bd14" onclick="done(14)">marcar listo</button>
</div>
</div>`,
      m15: `<div class="mod" id="m15">
<div class="mod-hd">
  <div class="ey">módulo 15 · cierre</div>
  <div class="mt">exportar y <strong>el siguiente track</strong></div>
  <div class="md">Cerrar un tema también es técnica: eliges ruta de salida, pasas un checklist y exportas sin quedarte en un bucle infinito de retoques.</div>
  <div class="mm-row"><div class="mm">~1h</div><div class="mm">finalización</div></div>
</div>
<div class="sec" id="m15-s1">
<div class="st">tres rutas de exportación</div>
<div class="steps">
  <div class="step"><div class="sl">ruta 1</div><div class="sb"><strong>terminar dentro del OP-1 Field</strong><p>Si el balance funciona y la energía del track está clara, cierra en el propio OP-1 Field. Duplica y nombra la tape final para conservar esa versión.</p></div></div>
  <div class="step"><div class="sl">ruta 2</div><div class="sb"><strong>mixdown estéreo en tiempo real</strong><p>Graba la salida estéreo vía USB audio o salida analógica cuando tu prioridad sea capturar la interpretación completa tal como suena en el hardware.</p></div></div>
  <div class="step"><div class="sl">ruta 3</div><div class="sb"><strong>stems vía USB — terminar en DAW</strong><p>Conecta por USB y copia los 4 archivos .aif del tape cuando necesites edición fina, procesamiento por pista o mezcla en DAW.</p></div></div>
</div>
</div>
<div class="sec" id="m15-s2">
<div class="st">checklist previo a exportar</div>
<div class="steps">
  <div class="step"><div class="sl">01</div><div class="sb"><strong>balance general</strong><p>Escucha sin tocar nada. ¿Queda claro qué elemento manda y cuáles acompañan?</p></div></div>
  <div class="step"><div class="sl">02</div><div class="sb"><strong>clipping</strong><p>¿Hay distorsión no intencionada en los momentos más densos? Baja primero la pista que más volumen tiene y luego revisa el master.</p></div></div>
  <div class="step"><div class="sl">03</div><div class="sb"><strong>colas de reverb</strong><p>¿Las colas ayudan o embarran el final de frase? Si lo segundo, acorta el reverb o baja el send.</p></div></div>
  <div class="step"><div class="sl">04</div><div class="sb"><strong>bajo en móvil</strong><p>Escucha en el móvil antes de exportar: si el bajo desaparece o lo tapa todo, ajusta nivel o cambia de octava antes de cerrar.</p></div></div>
</div>
</div>

<div class="widget" id="w-export-route">
  <div class="w-title">recomendador de salida — ruta 1 / 2 / 3</div>
  <div class="w-checks">
    <label><input type="checkbox" id="wex-balance" onchange="wexUpdate()">balance claro</label>
    <label><input type="checkbox" id="wex-clip" onchange="wexUpdate()">sin clipping</label>
    <label><input type="checkbox" id="wex-tails" onchange="wexUpdate()">colas de reverb ok</label>
    <label><input type="checkbox" id="wex-trans" onchange="wexUpdate()">transiciones limpias</label>
    <label><input type="checkbox" id="wex-gaps" onchange="wexUpdate()">sin huecos no deseados</label>
    <label><input type="checkbox" id="wex-bass" onchange="wexUpdate()">bajo controlado</label>
  </div>
  <div class="w-row">
    <span class="w-label">prioridad</span>
    <select id="wex-prio" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wexUpdate()">
      <option value="fast">cerrar hoy</option>
      <option value="perf">capturar performance</option>
      <option value="edit">editar fuera en detalle</option>
    </select>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wex-result">marca el checklist y elige prioridad para sugerir ruta de exportación.</div>
  </div>
</div>

<div class="sec" id="m15-s3">
<div class="st">qué hacer después</div>
<div class="steps">
  <div class="step"><div class="sl">01</div><div class="sb"><strong>1 track por semana — sin excepciones</strong><p>No cuando "esté listo". Una sesión de 90 minutos a la semana con exportación incluida. La consistencia construye más habilidad que cualquier sesión maratón ocasional.</p></div></div>
  <div class="step"><div class="sl">02</div><div class="sb"><strong>escucha con objetivo, no solo por placer</strong><p>Cuando escuches un track que te guste — Flying Lotus, Burial, Daft Punk, Arca, Boards of Canada — identifica un elemento concreto que quieras replicar: el tipo de bajo, el timing del hi-hat, la textura del pad. Pon el OP-1 e intenta conseguirlo.</p></div></div>
  <div class="step"><div class="sl">03</div><div class="sb"><strong>el EP como objetivo concreto</strong><p>5–6 tracks. 90 minutos cada uno. 6 semanas. No perfecto — tuyo. La diferencia entre un artista y alguien que "está produciendo" es terminar cosas y pasar al siguiente.</p></div></div>
</div>
</div>

<div class="sec" id="m15-s4">
<div class="st">roadmap de expansión field — tareas uno a uno</div>
<div class="steps">
  <div class="step"><div class="sl">alta 01</div><div class="sb"><strong>consolidar tape browser + tape styles en 3 sesiones</strong><p>Objetivo: que versionar y elegir style sea automático. Entregable: 3 tapes del mismo track (base, edit, performance) con decisión de style justificada por escucha.</p></div></div>
  <div class="step"><div class="sl">alta 02</div><div class="sb"><strong>input/resampling como flujo central</strong><p>Objetivo: reciclar material sin bloquearte por falta de pistas. Entregable: un track donde al menos 2 capas provengan de resampling interno y 1 de captura externa.</p></div></div>
  <div class="step"><div class="sl">alta 03</div><div class="sb"><strong>lfo avanzado: velocity + midi en contexto musical</strong><p>Objetivo: evitar secuencias planas. Entregable: mismo loop en versión estática y versión expresiva, con comparación A/B documentada.</p></div></div>
  <div class="step"><div class="sl">media 01</div><div class="sb"><strong>secuenciadores: incorporar hold al laboratorio</strong><p>Objetivo: separar armonía de ritmo para iterar más rápido. Entregable: 20 s por secuenciador (Arp/Hold/Pattern) con selección final argumentada por carácter.</p></div></div>
  <div class="step"><div class="sl">media 02</div><div class="sb"><strong>efectos field extra (grid/mother/phone/punch/terminal)</strong><p>Objetivo: ampliar paleta sin depender siempre de delay/reverb. Entregable: banco de 5 renders del mismo riff, uno por efecto, y elección del mejor para mezcla final.</p></div></div>
  <div class="step"><div class="sl">media 03</div><div class="sb"><strong>conectividad avanzada: ble/usb/control list</strong><p>Objetivo: setup estable desde el minuto 1. Entregable: plantilla de conexión favorita + checklist de estabilidad de 60 segundos antes de grabar.</p></div></div>
  <div class="step"><div class="sl">baja 01</div><div class="sb"><strong>cierre expandido: mixdown largo y salida por rutas</strong><p>Objetivo: decidir rápido cómo cerrar cada tema (interno, estéreo, stems). Entregable: tres exports del mismo track con notas de uso para cada ruta.</p></div></div>
  <div class="step"><div class="sl">baja 02</div><div class="sb"><strong>fm transmit + OB–4 auto sync para performance</strong><p>Objetivo: dominar flujo inalámbrico de escucha/performance en ecosistema field. Entregable: prueba funcional de transmisión FM, sincronía y grabación de una mini-performance de 2 minutos.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>bloques prácticos del curso</strong>1) comparador A/B de tape style. 2) tablero "fuente → proceso → destino" para input/resampling. 3) visualizador de velocity vs timbre. 4) comparador de secuenciadores sobre mismo patrón. 5) selector ciego de efectos. 6) matriz de conexión con semáforo de estabilidad.</div></div>
</div>

<div class="sec" id="m15-s5">
<div class="st">salida field avanzada — fm transmit y OB–4 auto sync</div>
<div class="steps">
  <div class="step"><div class="sl">fm tx</div><div class="sb"><strong>transmite audio para escucha/performance sin cable</strong><p>FM transmit abre una ruta creativa para monitoreo externo y pequeñas performances. Antes de usarlo en sesión, prueba canal libre, nivel de salida y estabilidad durante al menos 2 minutos continuos.</p></div></div>
  <div class="step"><div class="sl">ob–4</div><div class="sb"><strong>auto sync para ecosistema field</strong><p>Si trabajas con OB–4, auto sync te permite alinear reproducción y mantener experiencia más integrada. Úsalo como opción de performance y referencia de escucha; el control final sigue en la mezcla.</p></div></div>
  <div class="step"><div class="sl">criterio</div><div class="sb"><strong>cuándo usar esta ruta</strong><p>Ideal para rehearsals, escucha compartida y sets ligeros. Para entrega final o edición crítica, conserva ruta cableada/USB además de esta vía, así comparas coherencia y evitas sorpresas de última hora.</p></div></div>
</div>
<div class="co"><div class="co-b gr"></div><div class="co-bd"><strong>pieza interactiva</strong>Checklist interactivo pre-performance (canal FM, nivel, sync, latencia percibida, fallback cableado). Si una casilla falla, el sistema propone automáticamente la ruta alternativa.</div></div>
<div class="widget" id="w-preperf-check">
  <div class="w-title">pre-performance — checklist y fallback</div>
  <div class="w-checks">
    <label><input type="checkbox" id="wpf-fm" onchange="wpfUpdate()">canal FM libre</label>
    <label><input type="checkbox" id="wpf-level" onchange="wpfUpdate()">nivel de salida estable</label>
    <label><input type="checkbox" id="wpf-sync" onchange="wpfUpdate()">sync validado</label>
    <label><input type="checkbox" id="wpf-lat" onchange="wpfUpdate()">latencia aceptable</label>
    <label><input type="checkbox" id="wpf-fallback" onchange="wpfUpdate()">fallback cableado listo</label>
  </div>
  <div class="w-row">
    <span class="w-label">escenario</span>
    <select id="wpf-mode" class="w-btn inactive" style="text-transform:none;padding:6px 10px" onchange="wpfUpdate()">
      <option value="performance">performance</option>
      <option value="rehearsal">ensayo</option>
      <option value="capture">captura final</option>
    </select>
    <button class="w-btn inactive" onclick="wpfReset()">reset</button>
  </div>
  <div class="w-panel">
    <div class="w-small" id="wpf-status">pendiente: completa checks para confirmar ruta.</div>
  </div>
</div>
</div>

<div class="sec" id="m15-s6">
<div class="st">bloque extra — errores típicos clave y corrección rápida</div>
<div class="steps">
  <div class="step"><div class="sl">teoría/teclado</div><div class="sb"><strong>error típico:</strong> tocar notas “al azar” sin referencia de centro tonal.<p><strong>por qué pasa:</strong> se intenta improvisar antes de fijar una nota base o una zona segura.<br><strong>cómo corregir en OP-1 Field:</strong> fija una nota ancla (por ejemplo La) y limita primero el rango; luego expande.</p></div></div>
  <div class="step"><div class="sl">tape</div><div class="sb"><strong>error típico:</strong> grabar encima sin versionar tape.<p><strong>por qué pasa:</strong> se entra en modo prueba sin copiar versión previa.<br><strong>cómo corregir en OP-1 Field:</strong> duplica tape antes de editar fuerte (cut/lift/drop/speed) y nombra versiones por objetivo.</p></div></div>
  <div class="step"><div class="sl">fm</div><div class="sb"><strong>error típico:</strong> subir modulación/feedback hasta perder nota y definición.<p><strong>por qué pasa:</strong> se busca “más carácter” solo con intensidad.<br><strong>cómo corregir en OP-1 Field:</strong> primero elige ratio útil, luego sube modulación hasta el borde y retrocede un punto.</p></div></div>
  <div class="step"><div class="sl">secuenciadores</div><div class="sb"><strong>error típico:</strong> juzgar ideas demasiado pronto y descartar material en 10 segundos.<p><strong>por qué pasa:</strong> se mezcla fase de generación con fase de selección.<br><strong>cómo corregir en OP-1 Field:</strong> sprint de captura (10 ideas x 20s) sin editar, selección al final con escucha ciega.</p></div></div>
</div>
<div class="co"><div class="co-b bl"></div><div class="co-bd"><strong>regla operativa final</strong>Cuando algo no funciona, evita cambiar todo a la vez. Ajusta una sola variable (registro, secuenciador, modulación o nivel), escucha en contexto y decide.</div></div>
</div>
<div class="ex">
  <div class="ex-lb">ejercicio final</div>
  <div class="ex-ti">exporta y escucha tu primer track — 30 min</div>
  <ul class="ex-ul">
    <li>Toma el track del módulo 13 (workflow completo). Elige una de las 3 rutas antes de tocar nada.</li>
    <li>Pasa el checklist: balance, clipping, colas, bajo en móvil.</li>
    <li>Exporta una versión final y escúchala en auriculares, móvil y altavoces pequeños.</li>
    <li>Anota 3 mejoras para el próximo track sin reabrir esta versión. Empieza el segundo la semana que viene.</li>
  </ul>
</div>
<div class="mf">
  <button class="btn" onclick="go(14)">← anterior</button>
  <button class="btn" disabled>fin del curso</button>
  <button class="btn btn-d" id="bd15" onclick="done(15)">marcar listo</button>
</div>
</div>`,
    },
  },
};
