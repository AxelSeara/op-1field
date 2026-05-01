# Editing Guide (for collaborators)

This project was restructured to make maintenance easier.

Primary references:

- `CONTRIBUTING.md` for process and QA expectations.
- `STYLE_GUIDE.md` for editorial consistency.

## Project layout

- `index.html`: main course page (content + structure)
- `assets/css/main.css`: all styles
- `assets/js/state.js`: local persistence storage
- `assets/js/i18n.js`: translation runtime + fallback logic
- `assets/js/core.js`: course engine (navigation, progress, core/full path logic)
- `assets/js/app-shell.js`: onboarding + product UI controls
- `assets/js/widgets.js`: interactive audio/teaching widgets
- `assets/content/*.js`: modular course content (pilot modules m0..m3 by language)
- `assets/locales/es.js`: Spanish UI dictionary (labels, buttons, copy outside modules)
- `assets/locales/en.js`: English UI dictionary
- `assets/locales/ja.js`: Japanese UI dictionary
- `main.js`: Electron main process
- `package.json`: desktop scripts and packaging config
- `op1-curso-final.html`: compatibility redirect to `index.html`

## Quick edit map

If you want to edit...

- Full course text/content (`m0..m15`): edit `assets/content/es.js`, `assets/content/en.js`, `assets/content/ja.js`
- Layout shell and static chrome: edit `index.html`
- Visual style: edit `assets/css/main.css`
- Sidebar/subsection navigation logic: edit `assets/js/core.js`
- Product controls (onboarding/search/modes): edit `assets/js/app-shell.js`
- Persistence schema: edit `assets/js/state.js`
- UI translations: edit `assets/locales/es.js` and `assets/locales/en.js`
- Translation engine behavior: edit `assets/js/i18n.js`
- Dynamic labs/widgets: edit `assets/js/widgets.js`

## Add a new section safely

1. Add the HTML block in `index.html` with a unique id (example: `m10-s9`).
2. Make sure it includes `.sec` and `.st` so subnavigation can auto-detect it.
3. Verify the anchor scroll works from the sidebar.
4. Check there are no duplicate ids.

## Add a new module safely

1. Add the new module button in the sidebar (HTML).
2. Add the module container (`<div class="mod" id="mX">...`).
3. Add/update `CORE_MODULES` in `assets/js/core.js` if it belongs to core track.
4. Add/update next/previous buttons in module footer.
5. Add translation keys for sidebar labels in `assets/locales/*.js`.

## Language switch notes

Language switching is split across:

- `assets/js/i18n.js`: locale registry, fallback, `data-i18n` application
- `assets/js/core.js`: language buttons + UI refresh after language change

For translatable UI text:

- use `data-i18n="..."` for text nodes
- use `data-i18n-placeholder="..."` for inputs
- add matching keys in `assets/locales/es.js` and `assets/locales/en.js`

For module-level content, use `assets/content/<lang>.js` (`m0..m15`).
Locale files now focus on UI text keys and app chrome labels.

Current setup:

- `m0..m15` are served from `assets/content/<lang>.js`.
- `assets/locales/<lang>.js` remains as UI i18n + compatibility fallback.
- Runtime precedence is: current language content file → default language content file → current locale module → default locale module.

## Before committing

- Validate JavaScript syntax:
  - `node --check assets/js/core.js`
  - `node --check assets/js/i18n.js`
  - `node --check assets/js/widgets.js`
- Open `index.html` in browser and verify:
  - module navigation
  - subsection navigation
  - progress tracking
  - widgets audio interaction
  - ES/EN switch buttons

## Collaboration recommendations

- Prefer small pull requests by module (Tape, FM, LFO, etc.)
- Keep claims OP-1 Field specific and sourced where possible
- Avoid hardcoded "universal" values in music decisions; use ranges and listening criteria
