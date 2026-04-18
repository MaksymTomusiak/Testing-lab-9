import { BasePage } from './base-page.js';

export class PrivacyPage extends BasePage {
  get path() { return '/privacy'; }

  get privacyHeading() {
    return this.page.getByRole('heading', { name: /Конфіденційність|Privacy/i });
  }

  get contentText() {
    return this.page.locator('div.prose, main');
  }
}
