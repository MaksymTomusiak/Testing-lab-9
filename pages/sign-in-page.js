import { BasePage } from './base-page.js';

export class SignInPage extends BasePage {
  get path() { return '/sign-in'; }

  get emailInput()    { return this.page.locator('input[type="email"], input[name*="email" i]'); }
  get passwordInput() { return this.page.locator('input[type="password"], input[name*="password" i]'); }
  get submitButton()  { return this.page.locator('button[type="submit"], button:has-text("Увійти"), button:has-text("Sign in")'); }
  get errorMessage()  { return this.page.getByRole('alert'); }
  get forgotPasswordLink() { return this.page.locator('a:has-text("Забули"), a:has-text("Forgot")'); }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}
