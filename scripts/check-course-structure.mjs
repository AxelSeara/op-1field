import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const LOCALES = [
  { code: 'es', file: 'assets/locales/es.js' },
  { code: 'en', file: 'assets/locales/en.js' },
  { code: 'ja', file: 'assets/locales/ja.js' },
];
const JS_FILES = ['assets/js/core.js', 'assets/js/widgets.js', 'assets/js/app-shell.js'];

function loadLocale(fileRel, code) {
  const fileAbs = path.join(ROOT, fileRel);
  const source = fs.readFileSync(fileAbs, 'utf8');
  const sandbox = { window: { CourseLocales: {} } };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: fileAbs });
  const locale = sandbox.window?.CourseLocales?.[code];
  if (!locale || typeof locale !== 'object') {
    throw new Error(`Locale ${code} not found in ${fileRel}`);
  }
  return locale;
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function matchAllValues(text, regex, group = 1) {
  return [...text.matchAll(regex)].map((m) => m[group]);
}

function getSignature(modules) {
  const html = Object.values(modules).join('\n');
  const anchors = new Set(matchAllValues(html, /id="(m\d+-s\d+)"/g));
  const onclickFns = new Set(matchAllValues(html, /onclick="([A-Za-z_$][\w$]*)\(/g));
  const widgetIds = new Set(matchAllValues(html, /<div class="widget"\s+id="([^"]+)"/g));
  return { anchors, onclickFns, widgetIds };
}

function getDuplicateIds(modules) {
  const idCounts = new Map();
  const html = Object.values(modules).join('\n');
  for (const id of matchAllValues(html, /\sid="([^"]+)"/g)) {
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
  }
  return [...idCounts.entries()].filter(([, count]) => count > 1);
}

function getDeclaredFunctions() {
  const declared = new Set();
  for (const fileRel of JS_FILES) {
    const src = fs.readFileSync(path.join(ROOT, fileRel), 'utf8');
    for (const fn of matchAllValues(src, /function\s+([A-Za-z_$][\w$]*)\s*\(/g)) {
      declared.add(fn);
    }
  }
  return declared;
}

const errors = [];
const loaded = {};

try {
  for (const { code, file } of LOCALES) {
    loaded[code] = loadLocale(file, code);
  }
} catch (err) {
  console.error(`❌ Structure load error: ${err.message}`);
  process.exit(1);
}

const declaredFns = getDeclaredFunctions();

for (const { code } of LOCALES) {
  const modules = loaded[code]?.course?.modules;
  assert(modules && typeof modules === 'object', `[${code}] Missing course.modules`, errors);
  if (!modules || typeof modules !== 'object') continue;

  const duplicates = getDuplicateIds(modules);
  assert(
    duplicates.length === 0,
    `[${code}] Duplicate HTML ids: ${duplicates.slice(0, 20).map(([id, n]) => `${id}(${n})`).join(', ')}`,
    errors,
  );

  const signature = getSignature(modules);
  const missingFns = [...signature.onclickFns].filter((fn) => !declaredFns.has(fn));
  assert(
    missingFns.length === 0,
    `[${code}] onclick functions not found in JS: ${missingFns.join(', ')}`,
    errors,
  );
}

const baseSig = getSignature(loaded.en.course.modules);
for (const code of ['es', 'ja']) {
  const sig = getSignature(loaded[code].course.modules);
  const missingAnchors = [...baseSig.anchors].filter((x) => !sig.anchors.has(x));
  const extraAnchors = [...sig.anchors].filter((x) => !baseSig.anchors.has(x));
  const missingOnclick = [...baseSig.onclickFns].filter((x) => !sig.onclickFns.has(x));
  const extraOnclick = [...sig.onclickFns].filter((x) => !baseSig.onclickFns.has(x));
  const missingWidgets = [...baseSig.widgetIds].filter((x) => !sig.widgetIds.has(x));
  const extraWidgets = [...sig.widgetIds].filter((x) => !baseSig.widgetIds.has(x));

  assert(
    missingAnchors.length + extraAnchors.length === 0,
    `[${code}] Anchor diff vs en. missing=${missingAnchors.slice(0, 10).join(', ')} extra=${extraAnchors.slice(0, 10).join(', ')}`,
    errors,
  );
  assert(
    missingOnclick.length + extraOnclick.length === 0,
    `[${code}] onclick diff vs en. missing=${missingOnclick.slice(0, 10).join(', ')} extra=${extraOnclick.slice(0, 10).join(', ')}`,
    errors,
  );
  assert(
    missingWidgets.length + extraWidgets.length === 0,
    `[${code}] widget id diff vs en. missing=${missingWidgets.slice(0, 10).join(', ')} extra=${extraWidgets.slice(0, 10).join(', ')}`,
    errors,
  );
}

if (errors.length) {
  console.error('❌ Course structure QA failed');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log('✅ Course structure QA passed');
console.log(`- JS onclick functions indexed: ${declaredFns.size}`);
console.log(`- Canonical anchors (en): ${baseSig.anchors.size}`);
console.log(`- Canonical widgets (en): ${baseSig.widgetIds.size}`);
