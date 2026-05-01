import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = process.cwd();
const LOCALES = [
  { code: 'es', file: 'assets/locales/es.js' },
  { code: 'en', file: 'assets/locales/en.js' },
  { code: 'ja', file: 'assets/locales/ja.js' },
];
const CONTENT = [
  { code: 'es', file: 'assets/content/es.js' },
  { code: 'en', file: 'assets/content/en.js' },
  { code: 'ja', file: 'assets/content/ja.js' },
];

const LABELS = {
  es: { interactive: 'pieza interactiva', optional: 'ejercicio guiado opcional' },
  en: { interactive: 'Interactive module', optional: 'Optional guided exercise' },
};

const DEPRECATED_LABELS = [
  'dynamic piece',
  'optional dynamic part',
  'pieza dinámica',
  'pieza dinamica',
  'parte dinámica opcional',
  'parte dinamica opcional',
];

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

function loadContent(fileRel, code) {
  const fileAbs = path.join(ROOT, fileRel);
  const source = fs.readFileSync(fileAbs, 'utf8');
  const sandbox = { window: { CourseContent: {} } };
  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: fileAbs });
  const content = sandbox.window?.CourseContent?.[code];
  if (!content || typeof content !== 'object') {
    throw new Error(`Content ${code} not found in ${fileRel}`);
  }
  return content;
}

function resolvedModules(locale, content) {
  const localeModules = locale?.course?.modules;
  const base = localeModules && typeof localeModules === 'object' ? localeModules : {};
  const extra = content && typeof content === 'object' ? content : {};
  return { ...base, ...extra };
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function escapeForRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getLabelMatchesWithNearbyWidget(html, label) {
  const blocks = [];
  const re = new RegExp(`<strong>${escapeForRegExp(label)}</strong>`, 'g');
  let match;
  while ((match = re.exec(html))) {
    const start = match.index;
    const rest = html.slice(start);
    const nextSectionIndex = rest.search(/<div class="sec"\s+id="/);
    const localWindow = rest.slice(0, nextSectionIndex >= 0 ? nextSectionIndex : 1800);
    blocks.push({
      hasWidgetNear: /<div class="widget"\s+id="/.test(localWindow),
    });
  }
  return blocks;
}

const errors = [];
const loaded = {};
const loadedContent = {};

try {
  for (const { code, file } of LOCALES) {
    loaded[code] = loadLocale(file, code);
  }
  for (const { code, file } of CONTENT) {
    loadedContent[code] = loadContent(file, code);
  }
} catch (err) {
  console.error(`❌ Content QA load error: ${err.message}`);
  process.exit(1);
}

for (const { code } of LOCALES) {
  const modules = resolvedModules(loaded[code], loadedContent[code]);
  if (!modules || typeof modules !== 'object') {
    errors.push(`[${code}] Missing resolved modules`);
    continue;
  }

  for (const [moduleId, html] of Object.entries(modules)) {
    const text = String(html || '');

    for (const oldLabel of DEPRECATED_LABELS) {
      const re = new RegExp(escapeForRegExp(oldLabel), 'i');
      assert(!re.test(text), `[${code}] ${moduleId} uses deprecated label: "${oldLabel}"`, errors);
    }

    if (code === 'en') {
      assert(!/pieza interactiva/i.test(text), `[en] ${moduleId} contains Spanish interactive label`, errors);
      assert(!/ejercicio guiado opcional/i.test(text), `[en] ${moduleId} contains Spanish optional label`, errors);
    }
    if (code === 'es') {
      assert(!/Interactive module/i.test(text), `[es] ${moduleId} contains English interactive label`, errors);
      assert(!/Optional guided exercise/i.test(text), `[es] ${moduleId} contains English optional label`, errors);
    }

    if (code === 'es' && /\b\d+\s*semitonos?\s*=\s*[^\s<]+/i.test(text)) {
      console.warn(`⚠️ [es] ${moduleId} has rigid semitone equation pattern (review suggested)`);
    }
    if (code === 'en' && /\b\d+\s*semitones?\s*=\s*[^\s<]+/i.test(text)) {
      console.warn(`⚠️ [en] ${moduleId} has rigid semitone equation pattern (review suggested)`);
    }

    if (LABELS[code]) {
      const interactiveBlocks = getLabelMatchesWithNearbyWidget(text, LABELS[code].interactive);
      const optionalBlocks = getLabelMatchesWithNearbyWidget(text, LABELS[code].optional);

      for (const block of interactiveBlocks) {
        assert(block.hasWidgetNear, `[${code}] ${moduleId} interactive label without widget nearby`, errors);
      }
      for (const block of optionalBlocks) {
        assert(
          !block.hasWidgetNear,
          `[${code}] ${moduleId} optional guided exercise should not include widget in same local block`,
          errors,
        );
      }
    }
  }
}

if (errors.length) {
  console.error('❌ Content QA failed');
  for (const e of errors) console.error(`- ${e}`);
  process.exit(1);
}

console.log('✅ Content QA passed');
console.log('- interactive labels, widget pairing, language leaks and deprecated labels validated');
