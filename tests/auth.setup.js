import { test as setup, expect } from '@playwright/test';
import { SignInPage } from '../pages/sign-in-page.js';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  const email = process.env.UMSYS_EMAIL;
  const password = process.env.UMSYS_PASSWORD;
  
  if (!email || !password) {
    console.warn('UMSYS_EMAIL or UMSYS_PASSWORD not set. Skipping authentication setup.');
    return;
  }

  await page.goto('/sign-in');
  const signIn = new SignInPage(page);
  await signIn.login(email, password);

  // Wait for the URL to contain the email or redirect to home/profile
  await page.waitForURL(new RegExp(`/${email.replace(/[.@+]/g, '\\$&')}/?$`));
  await page.context().storageState({ path: authFile });
});
