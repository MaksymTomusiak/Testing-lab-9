import { test, expect } from '../fixtures/pages.js';

test.describe('Privacy Policy page', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.privacy().goto();
  });

  test('loads successfully', async ({ page }) => {
    await expect(page).toHaveURL(/\/privacy/);
  });

  test('shows correct heading', async ({ pages }) => {
    await expect(pages.privacy().privacyHeading).toBeVisible();
  });

  test('has content text', async ({ pages }) => {
    await expect(pages.privacy().contentText).not.toBeEmpty();
  });

  test('footer is visible', async ({ pages }) => {
    await expect(pages.privacy().footer).toBeVisible();
  });

  test('header is visible', async ({ pages }) => {
    await expect(pages.privacy().header).toBeVisible();
  });
});
