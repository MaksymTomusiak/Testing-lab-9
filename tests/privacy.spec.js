import { test, expect } from '../fixtures/pages.js';

test.describe('Privacy Policy page redirect', () => {
  test('unauthenticated visitor is redirected to sign-in', async ({ pages, page }) => {
    await pages.privacy().goto();
    // Site redirects to sign-in with a 'from' parameter
    await expect(page).toHaveURL(/\/sign-in\?from=%2Fprivacy/);
  });
});
