# Editing Guide (for collaborators)

This project was restructured to make maintenance easier.

## Project layout

- `index.html`: main course page (content + structure)
- `assets/css/main.css`: all styles
- `assets/js/core.js`: navigation, progress, language switch/detection
- `assets/js/widgets.js`: interactive audio/teaching widgets
- `op1-curso-final.html`: compatibility redirect to `index.html`

## Quick edit map

If you want to edit...

- Course text/content: edit `index.html`
- Visual style: edit `assets/css/main.css`
- Sidebar/subsection navigation logic: edit `assets/js/core.js` (`secs` map)
- Dynamic labs/widgets: edit `assets/js/widgets.js`

## Add a new section safely

1. Add the HTML block in `index.html` with a unique id (example: `m10-s9`).
2. Add the section label in `assets/js/core.js` inside `secs[moduleNumber]`.
3. Verify the anchor scroll works from the sidebar.
4. Check there are no duplicate ids.

## Add a new module safely

1. Add the new module button in the sidebar (HTML).
2. Add the module container (`<div class="mod" id="mX">...`).
3. Increase `total` in `assets/js/core.js`.
4. Add its section list in `secs`.
5. Add/update next/previous buttons in module footer.

## Language switch notes

Language switching and auto-detection are handled in `assets/js/core.js`:

- `detectManualLanguage()`
- `setManualLanguage()`
- `initManualLanguageSwitch()`

If you change language behavior, test both ES and EN flows.

## Before committing

- Validate JavaScript syntax:
  - `node --check assets/js/core.js`
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
