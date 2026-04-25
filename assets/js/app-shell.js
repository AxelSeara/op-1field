(function initAppShell() {
  function byId(id) {
    return document.getElementById(id);
  }

  function updateModeButtons(state) {
    const practice = byId('mode-practice');
    const reading = byId('mode-reading');
    if (practice) practice.classList.toggle('active', state.viewMode === 'practice');
    if (reading) reading.classList.toggle('active', state.viewMode === 'reading');
  }

  function updateTrackButtons(state) {
    const core = byId('track-core-btn');
    const full = byId('track-full-btn');
    const onbCore = byId('onb-core');
    const onbFull = byId('onb-full');

    if (core) core.classList.toggle('active', state.trackMode === 'core');
    if (full) full.classList.toggle('active', state.trackMode === 'full');
    if (onbCore) onbCore.classList.toggle('active', state.trackMode === 'core');
    if (onbFull) onbFull.classList.toggle('active', state.trackMode === 'full');
  }

  function updateBookmarkFilterButton(state) {
    const btn = byId('filter-bookmarks');
    if (btn) btn.classList.toggle('active', Boolean(state.bookmarksOnly));
  }

  function syncUi() {
    const app = window.CourseApp;
    if (!app) return;
    const state = app.getState();
    updateModeButtons(state);
    updateTrackButtons(state);
    updateBookmarkFilterButton(state);
  }

  function showOnboarding(show) {
    const onb = byId('onboarding');
    if (!onb) return;
    onb.classList.toggle('hidden', !show);
  }

  function bindSettingsPanel() {
    const toggle = byId('settings-toggle');
    const panel = byId('settings-panel');
    if (!toggle || !panel) return;

    const setOpen = (open) => {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    setOpen(false);

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      setOpen(panel.hidden);
    });

    document.addEventListener('click', (e) => {
      if (panel.hidden) return;
      const target = e.target;
      if (target instanceof Node && (panel.contains(target) || toggle.contains(target))) return;
      setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) setOpen(false);
    });
  }

  function bindControls() {
    const app = window.CourseApp;
    if (!app) return;

    const search = byId('module-search');
    if (search) {
      search.addEventListener('input', (e) => {
        app.setSearchQuery(e.target.value || '');
      });
    }

    const bookmarkFilter = byId('filter-bookmarks');
    if (bookmarkFilter) {
      bookmarkFilter.addEventListener('click', () => app.toggleBookmarksOnly());
    }

    const trackCore = byId('track-core-btn');
    if (trackCore) {
      trackCore.addEventListener('click', () => app.setTrackMode('core'));
    }

    const trackFull = byId('track-full-btn');
    if (trackFull) {
      trackFull.addEventListener('click', () => app.setTrackMode('full', { keepModule: true }));
    }

    const modePractice = byId('mode-practice');
    if (modePractice) {
      modePractice.addEventListener('click', () => app.toggleViewMode('practice'));
    }

    const modeReading = byId('mode-reading');
    if (modeReading) {
      modeReading.addEventListener('click', () => app.toggleViewMode('reading'));
    }

    const onbStart = byId('onb-start');
    if (onbStart) {
      onbStart.addEventListener('click', () => {
        app.startCourse();
        app.setOnboarded(true);
        showOnboarding(false);
      });
    }

    const onbContinue = byId('onb-continue');
    if (onbContinue) {
      onbContinue.addEventListener('click', () => {
        app.continueCourse();
        app.setOnboarded(true);
        showOnboarding(false);
      });
    }

    const onbCore = byId('onb-core');
    if (onbCore) {
      onbCore.addEventListener('click', () => app.setTrackMode('core', { keepModule: true }));
    }

    const onbFull = byId('onb-full');
    if (onbFull) {
      onbFull.addEventListener('click', () => app.setTrackMode('full', { keepModule: true }));
    }
  }

  function setupOnboarding() {
    const app = window.CourseApp;
    if (!app) return;

    const state = app.getState();
    const continueBtn = byId('onb-continue');
    if (continueBtn) {
      continueBtn.disabled = !app.hasProgress();
      continueBtn.style.opacity = app.hasProgress() ? '1' : '.4';
      continueBtn.style.cursor = app.hasProgress() ? 'pointer' : 'default';
    }

    showOnboarding(!state.hasOnboarded);
  }

  document.addEventListener('DOMContentLoaded', () => {
    bindControls();
    bindSettingsPanel();
    syncUi();
    setupOnboarding();
  });

  document.addEventListener('course:state-change', syncUi);
  document.addEventListener('course:view-mode-change', syncUi);
  document.addEventListener('course:track-change', syncUi);
  document.addEventListener('course:ready', () => {
    syncUi();
    setupOnboarding();
  });
})();
