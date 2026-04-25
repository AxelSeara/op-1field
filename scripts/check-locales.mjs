import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const LOCALES = [
  { code: 'es', file: 'assets/locales/es.js' },
  { code: 'en', file: 'assets/locales/en.js' },
  { code: 'ja', file: 'assets/locales/ja.js' },
];
const EXPECTED_MODULES = Array.from({ length: 16 }, (_, i) => `m${i}`);

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

function collectLeafPaths(obj, base = '', out = new Set()) {
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [k, v] of Object.entries(obj)) {
      const next = base ? `${base}.${k}` : k;
      collectLeafPaths(v, next, out);
    }
    return out;
  }
  out.add(base);
  return out;
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

let errors = [];
const loaded = {};

try {
  for (const { code, file } of LOCALES) {
    loaded[code] = loadLocale(file, code);
  }
} catch (err) {
  console.error(`❌ Locale load error: ${err.message}`);
  process.exit(1);
}

for (const { code } of LOCALES) {
  const locale = loaded[code];
  const modules = locale?.course?.modules;
  assert(modules && typeof modules === 'object', `[${code}] Missing course.modules`, errors);
  if (!modules || typeof modules !== 'object') continue;

  const moduleKeys = Object.keys(modules);
  const missing = EXPECTED_MODULES.filter((m) => !moduleKeys.includes(m));
  const extra = moduleKeys.filter((m) => !EXPECTED_MODULES.includes(m));

  assert(missing.length === 0, `[${code}] Missing modules: ${missing.join(', ')}`, errors);
  assert(extra.length === 0, `[${code}] Unexpected modules: ${extra.join(', ')}`, errors);

  for (const moduleId of EXPECTED_MODULES) {
    const html = modules[moduleId];
    assert(typeof html === 'string' && html.trim().length > 0, `[${code}] ${moduleId} is empty`, errors);
    if (typeof html === 'string') {
      assert(
        html.includes('<div class="mod"') || html.includes('<div class="mod" '),
        `[${code}] ${moduleId} does not look like module HTML`,
        errors,
      );
    }
  }
}

const baseLeafPaths = collectLeafPaths(loaded.en);
for (const code of ['es', 'ja']) {
  const leafPaths = collectLeafPaths(loaded[code]);
  const missing = [...baseLeafPaths].filter((k) => !leafPaths.has(k));
  const extra = [...leafPaths].filter((k) => !baseLeafPaths.has(k));

  assert(missing.length === 0, `[${code}] Missing i18n leaf keys vs en: ${missing.slice(0, 20).join(', ')}`, errors);
  assert(extra.length === 0, `[${code}] Extra i18n leaf keys vs en: ${extra.slice(0, 20).join(', ')}`, errors);
}

if (errors.length) {
  console.error('❌ Locale QA failed');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log('✅ Locale QA passed');
for (const { code } of LOCALES) {
  const count = Object.keys(loaded[code].course.modules).length;
  console.log(`- ${code}: ${count}/16 modules`);
}
