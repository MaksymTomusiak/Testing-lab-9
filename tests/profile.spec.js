import { test, expect } from '../fixtures/pages.js';

const EMAIL = process.env.UMSYS_EMAIL;

test.describe('Profile page (authenticated)', () => {
  test.skip(!EMAIL, 'UMSYS_EMAIL not set');

  test.beforeEach(async ({ pages }) => {
    const profile = pages.profile(EMAIL);
    await profile.goto();
  });

  test('loads for authenticated user', async ({ page }) => {
    await expect(page).toHaveURL(new RegExp(`/${EMAIL.replace(/[.@+]/g, '\\$&')}/?$`));
  });

  test('profile heading is visible', async ({ pages }) => {
    await expect(pages.profile(EMAIL).profileHeading).toBeVisible();
  });

  test('sign-out button is visible', async ({ pages }) => {
    await expect(pages.profile(EMAIL).signOutButton).toBeVisible();
  });

  test('user email is displayed in profile', async ({ pages }) => {
    await expect(pages.profile(EMAIL).userEmailDisplay).toBeVisible();
  });

  test('sign-out returns to sign-in or home', async ({ pages, page }) => {
    await pages.profile(EMAIL).signOut();
    await expect(page).toHaveURL(/\/(sign-in)?\/?$/);
  });

  test('footer is visible on profile page', async ({ pages }) => {
    await expect(pages.profile(EMAIL).footer).toBeVisible();
  });
});

test.describe('Profile page (anonymous)', () => {
  test.use({ storageState: { cookies: [], origins: [] } }); // reset auth for this block

  test('anonymous visitor is redirected to /sign-in', async ({ page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    await page.goto(`/${EMAIL}`);
    await expect(page).toHaveURL(/\/sign-in/);
  });
});
