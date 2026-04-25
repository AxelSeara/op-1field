const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const APP_URL = pathToFileURL(path.join(process.cwd(), 'index.html')).toString();

async function openFreshCourse(page) {
  await page.goto(APP_URL);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await expect(page.locator('#onboarding')).not.toHaveClass(/hidden/);
  await page.click('#onb-start');
  await expect(page.locator('#onboarding')).toHaveClass(/hidden/);
}

test('language switch updates sidebar and module content', async ({ page }) => {
  await openFreshCourse(page);

  await expect(page.locator('#m0 .ey').first()).toContainText('módulo 00');

  await page.click('.lang-btn[data-lang="en"]');
  await expect(page.locator('.ni[data-index="0"] .nt')).toContainText('minimum theory');
  await expect(page.locator('#m0 .ey').first()).toContainText('module 00');

  await page.click('.lang-btn[data-lang="ja"]');
  await expect(page.locator('#m0 .ey').first()).toContainText('モジュール00');

  await page.click('.lang-btn[data-lang="es"]');
  await expect(page.locator('.ni[data-index="0"] .nt')).toContainText('teoría mínima');
  await expect(page.locator('#m0 .ey').first()).toContainText('módulo 00');
});

test('core UX controls: progress, bookmarks, filters, tracks, view modes', async ({ page }) => {
  await openFreshCourse(page);

  await page.click('#bd0');
  await expect(page.locator('#pt')).toHaveText('1 / 16');

  await page.click('.ni[data-index="4"] .fav-toggle');
  await page.click('.ni[data-index="4"]');
  await page.click('#filter-bookmarks');
  await expect(page.locator('.ni[data-index="4"]')).not.toHaveClass(/hidden-by-filter/);
  await expect(page.locator('.ni[data-index="0"]')).toHaveClass(/hidden-by-filter/);

  await page.click('#filter-bookmarks');
  await page.fill('#module-search', 'tape');
  await expect(page.locator('.ni[data-index="0"]')).toHaveClass(/hidden-by-filter/);
  await expect(page.locator('.ni[data-index="4"]')).not.toHaveClass(/hidden-by-filter/);
  await page.fill('#module-search', '');

  await page.click('#track-core-btn');
  await expect(page.locator('.ni[data-index="1"]')).toHaveClass(/hidden-by-filter/);
  await expect(page.locator('.ni[data-index="4"]')).not.toHaveClass(/hidden-by-filter/);

  await page.click('#track-full-btn');
  await expect(page.locator('.ni[data-index="1"]')).not.toHaveClass(/hidden-by-filter/);

  await page.click('#mode-practice');
  await expect(page.locator('body')).toHaveClass(/view-practice/);

  await page.click('#mode-reading');
  await expect(page.locator('body')).toHaveClass(/view-reading/);

  await page.click('#mode-reading');
  await expect(page.locator('body')).not.toHaveClass(/view-reading/);
});

test('resume state after reload keeps language and current module', async ({ page }) => {
  await openFreshCourse(page);

  await page.click('.lang-btn[data-lang="en"]');
  await page.click('.ni[data-index="5"]');
  await expect(page.locator('.ni.active')).toHaveAttribute('data-index', '5');

  await page.reload();

  await expect(page.locator('.lang-btn[data-lang="en"]')).toHaveClass(/active/);
  await expect(page.locator('.ni.active')).toHaveAttribute('data-index', '5');
  await expect(page.locator('#m5 .ey').first()).toContainText('module 05');

  const state = await page.evaluate(() => ({
    lang: localStorage.getItem('manual_lang'),
    raw: localStorage.getItem('op1f_learning_app_state_v1'),
  }));

  expect(state.lang).toBe('en');
  expect(state.raw).toBeTruthy();
});
