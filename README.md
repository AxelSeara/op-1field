# OP-1 Field Learning App

An offline-first desktop learning app built around a practical OP-1 Field course.

This started as a long HTML manual. It is now packaged like a product app with onboarding, persistent progress, core/full learning paths, search, bookmarks, and study modes.

## What is inside

- 16 course modules (original content preserved)
- Sidebar + subnavigation + progress tracking
- Interactive learning widgets
- Onboarding start screen
- Resume where you left off
- Core track and full track modes
- Practice mode and reading mode
- Offline local persistence (localStorage)

## Install dependencies

```bash
npm install
```

## Run in development

```bash
npm run dev
```

## Run app (same as dev)

```bash
npm start
```

## Package desktop builds

Build all configured targets:

```bash
npm run dist
```

Build Windows installer (NSIS) first:

```bash
npm run dist:win
```

## Where the installer appears

Generated files are written to:

- `dist/`

For Windows target, the `.exe` installer is produced there.

## App structure

- `main.js` — Electron main process and window boot
- `package.json` — scripts + electron-builder config
- `index.html` — app shell + course content
- `assets/css/main.css` — styles (visual identity preserved)
- `assets/js/state.js` — persistence layer
- `assets/js/i18n.js` — translation engine (`data-i18n` + language switching)
- `assets/js/core.js` — course navigation/progress/core-full logic
- `assets/js/app-shell.js` — onboarding and product UI controls
- `assets/js/widgets.js` — interactive audio/learning widgets
- `assets/locales/es.js` — Spanish locale dictionary
- `assets/locales/en.js` — English locale dictionary
- `assets/locales/ja.js` — Japanese locale dictionary
- `docs/EDITING_GUIDE.md` — contributor editing workflow

## Internationalization (i18n)

The app is now structured to translate without rewriting core logic:

- UI text is mapped with `data-i18n`, `data-i18n-placeholder`, etc.
- Locale dictionaries live in `assets/locales/*.js`.
- `assets/js/i18n.js` handles fallback (active locale -> `es` base -> source text).
- Optional full module overrides are supported via `course.modules.<moduleId>` HTML strings.
- Language is persisted in `localStorage` (`manual_lang`).
- Current coverage:
- Spanish (`assets/locales/es.js`): 16/16 modules (`m0..m15`)
- English (`assets/locales/en.js`): 16/16 modules (`m0..m15`)
- Japanese (`assets/locales/ja.js`): 16/16 modules (`m0..m15`)

To add a new language:

1. Create `assets/locales/<lang>.js` based on `assets/locales/en.js` (same key tree).
2. Register the dictionary in `window.CourseLocales.<lang>`.
3. Add a language button in the header (`data-lang="<lang>"`).
4. Translate UI keys first, then `course.modules.m0..m15`.
5. Keep HTML markup inside module strings untouched (ids, anchors, onclick handlers, classes) to avoid breaking widgets/navigation.

## Notes

- Original course content is preserved.
- No cloud backend is required.
- Works offline after install.

---

遊んで、間違えて、作ろう。
