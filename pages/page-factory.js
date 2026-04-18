import { HomePage }    from './home-page.js';
import { SignInPage }  from './sign-in-page.js';
import { PrivacyPage } from './privacy-page.js';

export class PageFactory {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  home()    { return new HomePage(this.page); }
  signIn()  { return new SignInPage(this.page); }
  privacy() { return new PrivacyPage(this.page); }
}
