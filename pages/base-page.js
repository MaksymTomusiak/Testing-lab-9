export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  /** Дочірні класи перевизначають */
  get path() { return '/'; }

  async goto() {
    return this.page.goto(this.path, { waitUntil: 'networkidle' });
  }

  async title() {
    return this.page.title();
  }

  async waitForLoaded() {
    await this.page.waitForLoadState('networkidle');
  }

  get header() {
    return this.page.locator('header');
  }

  get footer() {
    return this.page.locator('footer');
  }
}
