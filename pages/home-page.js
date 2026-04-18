import { BasePage } from './base-page.js';

export class HomePage extends BasePage {
  get path() { return '/'; }

  get signInLink() {
    return this.page.getByRole('link', { name: /sign[- ]?in|увійти/i });
  }

  get heroHeading() {
    return this.page.getByRole('heading').first();
  }

  get navigation() {
    return this.page.getByRole('navigation');
  }

  get featuresSection() {
    return this.page.locator('section').filter({ hasText: /Можливості|Features/i });
  }

  async openSignIn() {
    await this.signInLink.click();
  }

  async getHeroText() {
    return this.heroHeading.innerText();
  }
}
