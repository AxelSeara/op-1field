(function i18nBootstrap() {
  const DEFAULT_LANG = 'es';
  const STORAGE_KEY = 'manual_lang';

  function locales() {
    return window.CourseLocales || {};
  }

  function availableLanguages() {
    return Object.keys(locales());
  }

  function normalizeLang(lang) {
    const v = String(lang || '').toLowerCase();
    if (locales()[v]) return v;
    if (v.startsWith('en') && locales().en) return 'en';
    if (v.startsWith('es') && locales().es) return 'es';
    if (v.startsWith('ja') && locales().ja) return 'ja';
    return locales()[DEFAULT_LANG] ? DEFAULT_LANG : availableLanguages()[0] || DEFAULT_LANG;
  }

  function deepGet(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);
  }

  let currentLang = normalizeLang(localStorage.getItem(STORAGE_KEY) || document.documentElement.getAttribute('lang') || DEFAULT_LANG);
  let modulesHydratedLang = null;

  function t(key, vars, fallback) {
    const safeFallback = fallback !== undefined ? fallback : key;
    const curr = locales()[currentLang] || {};
    const base = locales()[DEFAULT_LANG] || {};
    let msg = deepGet(curr, key);
    if (msg === undefined) msg = deepGet(base, key);
    if (msg === undefined) msg = safeFallback;
    if (typeof msg !== 'string') return safeFallback;

    if (vars && typeof vars === 'object') {
      return msg.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name) =>
        Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : ''
      );
    }

    return msg;
  }

  function apply(root) {
    const target = root || document;
    document.title = t('app.meta.title', null, document.title);

    // Hydrate full module HTML on initial load and whenever language changes.
    // Module content is stored as full HTML per locale.
    if (modulesHydratedLang !== currentLang) {
      const curr = locales()[currentLang] || {};
      const base = locales()[DEFAULT_LANG] || {};
      const currModules = deepGet(curr, 'course.modules');
      const baseModules = deepGet(base, 'course.modules');
      const moduleOverrides = {
        ...(baseModules && typeof baseModules === 'object' ? baseModules : {}),
        ...(currModules && typeof currModules === 'object' ? currModules : {}),
      };

      Object.entries(moduleOverrides).forEach(([moduleId, moduleHtml]) => {
        if (typeof moduleHtml !== 'string' || !moduleHtml.trim()) return;
        const mod = document.getElementById(moduleId);
        if (!mod) return;

        const tpl = document.createElement('template');
        tpl.innerHTML = moduleHtml.trim();
        const nextMod = tpl.content.firstElementChild;
        if (!nextMod) return;
        mod.innerHTML = nextMod.innerHTML;
      });

      modulesHydratedLang = currentLang;
      document.dispatchEvent(new CustomEvent('course:modules-hydrated', { detail: { lang: currentLang } }));
    }

    target.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      el.textContent = t(key, null, el.textContent);
    });

    target.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      el.innerHTML = t(key, null, el.innerHTML);
    });

    target.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', t(key, null, el.getAttribute('placeholder') || ''));
    });

    target.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      if (!key) return;
      el.setAttribute('title', t(key, null, el.getAttribute('title') || ''));
    });

    target.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (!key) return;
      el.setAttribute('aria-label', t(key, null, el.getAttribute('aria-label') || ''));
    });
  }

  function setLanguage(lang, opts) {
    const options = { persist: true, applyDom: true, ...opts };
    currentLang = normalizeLang(lang);
    document.documentElement.setAttribute('lang', currentLang);
    if (options.persist) localStorage.setItem(STORAGE_KEY, currentLang);
    if (options.applyDom) apply(document);
    document.dispatchEvent(new CustomEvent('course:i18n-change', { detail: { lang: currentLang } }));
    return currentLang;
  }

  function init() {
    setLanguage(currentLang, { persist: false, applyDom: true });
  }

  window.CourseI18n = {
    t,
    apply,
    init,
    setLanguage,
    getLanguage: () => currentLang,
    getAvailableLanguages: availableLanguages,
    has: (key) => deepGet(locales()[currentLang] || {}, key) !== undefined || deepGet(locales()[DEFAULT_LANG] || {}, key) !== undefined,
  };

  document.addEventListener('DOMContentLoaded', init);
})();
