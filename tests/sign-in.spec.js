import { test, expect } from '../fixtures/pages.js';

test.describe('Sign In page UI', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.signIn().goto();
  });

  test('sign-in form is visible', async ({ pages }) => {
    const signIn = pages.signIn();
    await expect(signIn.emailInput).toBeVisible();
    await expect(signIn.passwordInput).toBeVisible();
    await expect(signIn.submitButton).toBeVisible();
  });

  test('email input has correct type', async ({ pages }) => {
    await expect(pages.signIn().emailInput).toHaveAttribute('type', 'email');
  });

  test('password input has correct type', async ({ pages }) => {
    await expect(pages.signIn().passwordInput).toHaveAttribute('type', 'password');
  });

  test('forgot password link is visible', async ({ pages }) => {
    await expect(pages.signIn().forgotPasswordLink).toBeVisible();
  });

  test('navigation back to home is possible', async ({ pages, page }) => {
    await pages.signIn().header.getByRole('link').first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});
