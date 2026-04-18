import { test, expect } from '../fixtures/pages.js';

test.describe('Home page', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.home().goto();
  });

  test('loads successfully and shows a non-empty title', async ({ pages }) => {
    const title = await pages.home().title();
    expect(title).not.toBe('');
  });

  test('has a visible sign-in link on load', async ({ pages }) => {
    await expect(pages.home().signInLink).toBeVisible();
  });

  test('sign-in link navigates to /sign-in', async ({ pages, page }) => {
    await pages.home().openSignIn();
    await expect(page).toHaveURL(/\/sign-in\/?$/);
  });

  test('hero heading is visible and not empty', async ({ pages }) => {
    const hero = pages.home().heroHeading;
    await expect(hero).toBeVisible();
    await expect(hero).not.toBeEmpty();
  });

  test('navigation bar is visible', async ({ pages }) => {
    await expect(pages.home().navigation).toBeVisible();
  });

  test('main content area is present', async ({ pages }) => {
    await expect(pages.home().mainContent).toBeVisible();
  });

  test('footer is present on the page', async ({ pages }) => {
    await expect(pages.home().footer).toBeVisible();
  });

  test('header is present on the page', async ({ pages }) => {
    await expect(pages.home().header).toBeVisible();
  });
});
