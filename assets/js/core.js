const CORE_MODULES = new Set([0, 3, 4, 5, 6, 10, 11, 13, 15]);

let cur = 0;
let mods = [];
let navButtons = [];
let done_set = new Set();
let bookmarks_set = new Set();
let appState = null;

function t(key, fallback) {
  if (window.CourseI18n && typeof window.CourseI18n.t === 'function') {
    return window.CourseI18n.t(key, null, fallback !== undefined ? fallback : key);
  }
  return fallback !== undefined ? fallback : key;
}

function detectManualLanguage() {
  const htmlLang = (document.documentElement.getAttribute('lang') || '').toLowerCase();
  if (window.CourseI18n && typeof window.CourseI18n.getAvailableLanguages === 'function') {
    const langs = window.CourseI18n.getAvailableLanguages();
    if (langs.includes(htmlLang)) return htmlLang;
    const short = htmlLang.split('-')[0];
    if (langs.includes(short)) return short;
    return langs.includes('es') ? 'es' : (langs[0] || 'es');
  }
  if (htmlLang.startsWith('en')) return 'en';
  if (htmlLang.startsWith('ja')) return 'ja';
  return 'es';
}

function updateLangButtons(lang) {
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
}

function setManualLanguage(target) {
  const next = String(target || '').toLowerCase() || 'es';
  if (window.CourseI18n && typeof window.CourseI18n.setLanguage === 'function') {
    window.CourseI18n.setLanguage(next, { persist: true, applyDom: true });
    updateLangButtons(window.CourseI18n.getLanguage());
    return;
  }
  localStorage.setItem('manual_lang', next);
  document.documentElement.setAttribute('lang', next);
  updateLangButtons(next);
}

function initManualLanguageSwitch() {
  const detected = detectManualLanguage();
  const pref = localStorage.getItem('manual_lang');
  const current = pref || detected;
  if (window.CourseI18n && typeof window.CourseI18n.setLanguage === 'function') {
    window.CourseI18n.setLanguage(current, { persist: false, applyDom: true });
  } else {
    document.documentElement.setAttribute('lang', current);
  }
  updateLangButtons(current);
}

function getDefaultState() {
  if (window.CourseState && typeof window.CourseState.defaultState === 'function') {
    return window.CourseState.defaultState();
  }
  return {
    version: 1,
    lastModule: 0,
    completed: [],
    bookmarks: [],
    trackMode: 'full',
    searchQuery: '',
    bookmarksOnly: false,
    viewMode: 'normal',
    hasOnboarded: false,
  };
}

function loadState() {
  const raw = window.CourseState && typeof window.CourseState.load === 'function'
    ? window.CourseState.load()
    : getDefaultState();

  const fallback = getDefaultState();
  const merged = { ...fallback, ...raw };
  if (!Array.isArray(merged.completed)) merged.completed = [];
  if (!Array.isArray(merged.bookmarks)) merged.bookmarks = [];
  if (merged.trackMode !== 'core' && merged.trackMode !== 'full') merged.trackMode = 'full';
  if (!['normal', 'practice', 'reading'].includes(merged.viewMode)) merged.viewMode = 'normal';
  if (typeof merged.searchQuery !== 'string') merged.searchQuery = '';
  if (typeof merged.bookmarksOnly !== 'boolean') merged.bookmarksOnly = false;
  if (typeof merged.hasOnboarded !== 'boolean') merged.hasOnboarded = false;

  const maxIdx = Math.max(0, mods.length - 1);
  const n = Number(merged.lastModule);
  merged.lastModule = Number.isInteger(n) ? Math.max(0, Math.min(maxIdx, n)) : 0;

  appState = merged;
  done_set = new Set(merged.completed.filter((x) => Number.isInteger(x) && x >= 0 && x < mods.length));
  bookmarks_set = new Set(merged.bookmarks.filter((x) => Number.isInteger(x) && x >= 0 && x < mods.length));
}

function saveState() {
  appState.completed = Array.from(done_set).sort((a, b) => a - b);
  appState.bookmarks = Array.from(bookmarks_set).sort((a, b) => a - b);
  appState.lastModule = cur;
  if (window.CourseState && typeof window.CourseState.save === 'function') {
    window.CourseState.save(appState);
  }
  document.dispatchEvent(new CustomEvent('course:state-change', { detail: getState() }));
}

function getState() {
  return {
    ...appState,
    completed: Array.from(done_set),
    bookmarks: Array.from(bookmarks_set),
    currentModule: cur,
    coreModules: Array.from(CORE_MODULES),
  };
}

function updateProgressUI() {
  const total = mods.length;
  const p = total > 0 ? (done_set.size / total) * 100 : 0;
  const pf = document.getElementById('pf');
  const pt = document.getElementById('pt');
  if (pf) pf.style.width = `${p.toFixed(0)}%`;
  if (pt) pt.textContent = `${done_set.size} / ${total}`;
}

function applyDoneUi() {
  const doneLabel = t('actions.completed', 'completado ✓');
  const markReadyLabel = t('actions.markReady', 'marcar listo');
  navButtons.forEach((btn, i) => {
    const isDone = done_set.has(i);
    btn.classList.toggle('done', isDone);
    const dot = document.getElementById(`nc${i}`);
    if (dot) dot.textContent = isDone ? '●' : '○';

    const markBtn = document.getElementById(`bd${i}`);
    if (markBtn) {
      if (isDone) {
        markBtn.textContent = doneLabel;
        markBtn.classList.add('mk');
        markBtn.disabled = true;
      } else {
        markBtn.textContent = markReadyLabel;
        markBtn.classList.remove('mk');
        markBtn.disabled = false;
      }
    }
  });
  updateProgressUI();
}

function enhanceBookmarksUi() {
  const bookmarkTitle = t('core.bookmarkToggleTitle', 'toggle bookmark');
  navButtons.forEach((btn, i) => {
    let fav = btn.querySelector('.fav-toggle');
    if (!fav) {
      fav = document.createElement('span');
      fav.className = 'fav-toggle';
      fav.textContent = '☆';
      fav.title = bookmarkTitle;
      fav.setAttribute('aria-label', bookmarkTitle);
      fav.setAttribute('role', 'button');
      fav.tabIndex = 0;
      fav.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleBookmark(i);
      });
      fav.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleBookmark(i);
        }
      });
      btn.appendChild(fav);
    }
    fav.title = bookmarkTitle;
    fav.setAttribute('aria-label', bookmarkTitle);
    fav.classList.toggle('on', bookmarks_set.has(i));
    fav.textContent = bookmarks_set.has(i) ? '★' : '☆';
  });
}

function localizeModuleFooterButtons() {
  const prevLabel = t('actions.previous', 'anterior');
  const nextLabel = t('actions.next', 'siguiente');
  const finishLabel = t('actions.finish', 'fin del curso');

  document.querySelectorAll('.mf').forEach((footer, idx) => {
    const buttons = footer.querySelectorAll('.btn');
    if (!buttons.length) return;

    const prevBtn = buttons[0];
    if (prevBtn && !prevBtn.classList.contains('btn-d')) {
      prevBtn.textContent = `\u2190 ${prevLabel}`;
    }

    const middleBtn = buttons[1];
    if (middleBtn && !middleBtn.classList.contains('btn-d')) {
      middleBtn.textContent = idx === mods.length - 1 ? finishLabel : `${nextLabel} \u2192`;
    }
  });
}

function updateModuleClasses() {
  navButtons.forEach((btn, i) => {
    btn.classList.toggle('core-mark', CORE_MODULES.has(i));
    btn.classList.toggle('non-core', !CORE_MODULES.has(i));
    btn.classList.toggle('core-track', appState.trackMode === 'core' && !CORE_MODULES.has(i));
  });
}

function normalizeText(v) {
  return (v || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function moduleMatchesQuery(i, q) {
  if (!q) return true;
  const nav = navButtons[i];
  if (!nav) return false;
  const navText = `${nav.querySelector('.nn')?.textContent || ''} ${nav.querySelector('.nt')?.textContent || ''}`;
  const modTitle = mods[i]?.querySelector('.mt')?.textContent || '';
  return normalizeText(`${navText} ${modTitle}`).includes(q);
}

function moduleVisibleForTrack(i) {
  return appState.trackMode === 'full' || CORE_MODULES.has(i);
}

function updateGroupVisibility() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  const children = Array.from(sidebar.children);
  let group = null;
  let hasVisibleButton = false;

  const flush = () => {
    if (group) group.style.display = hasVisibleButton ? '' : 'none';
  };

  children.forEach((child) => {
    if (child.classList && child.classList.contains('ngl')) {
      flush();
      group = child;
      hasVisibleButton = false;
      return;
    }
    if (child.classList && child.classList.contains('ni')) {
      const hidden = child.classList.contains('hidden-by-filter');
      if (!hidden) hasVisibleButton = true;
    }
  });
  flush();
}

function applySidebarFilters() {
  const q = normalizeText(appState.searchQuery.trim());
  navButtons.forEach((btn, i) => {
    const queryOk = moduleMatchesQuery(i, q);
    const bookmarkOk = !appState.bookmarksOnly || bookmarks_set.has(i);
    const trackOk = moduleVisibleForTrack(i);
    const keepCurrent = i === cur;
    const visible = keepCurrent || (queryOk && bookmarkOk && trackOk);
    btn.classList.toggle('hidden-by-filter', !visible);
  });
  updateModuleClasses();
  updateGroupVisibility();
}

function resolveTrackIndex(i) {
  if (appState.trackMode !== 'core' || CORE_MODULES.has(i)) return i;
  const sorted = Array.from(CORE_MODULES).sort((a, b) => a - b);
  if (!sorted.length) return i;

  if (i >= cur) {
    const next = sorted.find((v) => v >= i);
    return next !== undefined ? next : sorted[sorted.length - 1];
  }

  for (let p = sorted.length - 1; p >= 0; p -= 1) {
    if (sorted[p] <= i) return sorted[p];
  }
  return sorted[0];
}

function sectionItemsForModule(moduleIndex) {
  const mod = mods[moduleIndex];
  if (!mod) return [];
  const sections = Array.from(mod.querySelectorAll('.sec[id]'));
  return sections.map((sec, idx) => {
    const st = sec.querySelector('.st');
    const raw = (st ? st.textContent : `${t('core.sectionFallback', 'section')} ${idx + 1}`).trim().replace(/\s+/g, ' ');
    const label = raw.length > 28 ? `${raw.slice(0, 27)}…` : raw;
    return { i: sec.id, t: label };
  });
}

function buildSub(i) {
  const box = document.getElementById('subnav');
  if (!box) return;
  const list = sectionItemsForModule(i);
  if (!list.length) {
    box.innerHTML = '';
    return;
  }
  box.innerHTML = list.map((s, n) =>
    `<button class="sni" onclick="goSec('${s.i}')"><span class="sni-num">${String(i).padStart(2, '0')}.${n + 1}</span>${s.t}</button>`,
  ).join('');
}

function go(i, opts = {}) {
  const max = mods.length - 1;
  const parsed = Number(i);
  if (Number.isNaN(parsed) || max < 0) return;
  const bounded = Math.max(0, Math.min(max, parsed));
  const target = opts.allowNonCore ? bounded : resolveTrackIndex(bounded);

  if (mods[cur]) mods[cur].style.display = 'none';
  if (navButtons[cur]) navButtons[cur].classList.remove('active');

  cur = target;

  if (mods[cur]) mods[cur].style.display = 'block';
  if (navButtons[cur]) navButtons[cur].classList.add('active');

  buildSub(cur);
  applySidebarFilters();

  if (cur === 12 && typeof ws2Reset === 'function') {
    setTimeout(() => {
      if (!ws2Reset()) setTimeout(ws2Reset, 140);
    }, 80);
  }

  if (!opts.noScroll) {
    window.scrollTo({ top: 0, behavior: opts.instant ? 'auto' : 'smooth' });
  }

  if (!opts.noSave) {
    appState.lastModule = cur;
    saveState();
  }

  document.dispatchEvent(new CustomEvent('course:module-change', { detail: { index: cur } }));
}

function goSec(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 20;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

function done(i) {
  if (done_set.has(i)) return;
  done_set.add(i);
  applyDoneUi();
  saveState();
}

function toggleBookmark(i) {
  if (bookmarks_set.has(i)) bookmarks_set.delete(i);
  else bookmarks_set.add(i);
  enhanceBookmarksUi();
  applySidebarFilters();
  saveState();
}

function setSearchQuery(value) {
  appState.searchQuery = typeof value === 'string' ? value : '';
  applySidebarFilters();
  saveState();
}

function setBookmarksOnly(value) {
  appState.bookmarksOnly = Boolean(value);
  applySidebarFilters();
  saveState();
}

function toggleBookmarksOnly() {
  setBookmarksOnly(!appState.bookmarksOnly);
}

function setTrackMode(mode, opts = {}) {
  const next = mode === 'core' ? 'core' : 'full';
  appState.trackMode = next;
  applySidebarFilters();
  saveState();
  if (next === 'core' && !opts.keepModule && !CORE_MODULES.has(cur)) {
    go(cur, { allowNonCore: false, instant: true });
  }
  document.dispatchEvent(new CustomEvent('course:track-change', { detail: { trackMode: next } }));
}

function applyViewModeClass() {
  document.body.classList.toggle('view-practice', appState.viewMode === 'practice');
  document.body.classList.toggle('view-reading', appState.viewMode === 'reading');
}

function setViewMode(mode) {
  const next = ['normal', 'practice', 'reading'].includes(mode) ? mode : 'normal';
  appState.viewMode = next;
  applyViewModeClass();
  saveState();
  document.dispatchEvent(new CustomEvent('course:view-mode-change', { detail: { viewMode: next } }));
}

function toggleViewMode(mode) {
  if (appState.viewMode === mode) setViewMode('normal');
  else setViewMode(mode);
}

function clearDoneProgress() {
  done_set.clear();
  applyDoneUi();
}

function startCourse() {
  clearDoneProgress();
  const start = appState.trackMode === 'core' ? Math.min(...Array.from(CORE_MODULES)) : 0;
  go(start, { allowNonCore: true, instant: true });
  saveState();
}

function continueCourse() {
  const target = Number.isInteger(appState.lastModule) ? appState.lastModule : 0;
  go(target, { allowNonCore: true, instant: true });
  saveState();
}

function setOnboarded(value) {
  appState.hasOnboarded = Boolean(value);
  saveState();
}

function hasProgress() {
  return done_set.size > 0 || appState.lastModule > 0;
}

function initNavButtons() {
  navButtons = Array.from(document.querySelectorAll('.ni'));
  navButtons.forEach((btn, i) => {
    btn.dataset.index = String(i);
  });
}

function initCore() {
  initManualLanguageSwitch();

  mods = Array.from(document.querySelectorAll('.mod'));
  initNavButtons();
  loadState();

  mods.forEach((m) => { m.style.display = 'none'; });

  enhanceBookmarksUi();
  localizeModuleFooterButtons();
  applyDoneUi();
  applyViewModeClass();
  applySidebarFilters();

  const initial = Number.isInteger(appState.lastModule) ? appState.lastModule : 0;
  go(initial, { allowNonCore: true, noSave: true, noScroll: true, instant: true });

  const searchInput = document.getElementById('module-search');
  if (searchInput) searchInput.value = appState.searchQuery;

  document.addEventListener('course:i18n-change', () => {
    const lang = window.CourseI18n && typeof window.CourseI18n.getLanguage === 'function'
      ? window.CourseI18n.getLanguage()
      : detectManualLanguage();
    updateLangButtons(lang);
    enhanceBookmarksUi();
    localizeModuleFooterButtons();
    applyDoneUi();
    buildSub(cur);
    applySidebarFilters();
  });

  document.dispatchEvent(new CustomEvent('course:ready', { detail: getState() }));
}

window.go = go;
window.done = done;
window.goSec = goSec;
window.setManualLanguage = setManualLanguage;
window.CourseApp = {
  getState,
  setSearchQuery,
  setBookmarksOnly,
  toggleBookmarksOnly,
  toggleBookmark,
  setTrackMode,
  setViewMode,
  toggleViewMode,
  startCourse,
  continueCourse,
  setOnboarded,
  hasProgress,
  coreModules: Array.from(CORE_MODULES),
};

document.addEventListener('DOMContentLoaded', initCore);
