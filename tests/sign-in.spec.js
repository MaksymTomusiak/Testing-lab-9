import { test, expect } from "../fixtures/pages.js";

test.describe("Sign In page UI", () => {
  test.beforeEach(async ({ pages }) => {
    await pages.signIn().goto();
  });

  test("navigation back to home is possible", async ({ pages, page }) => {
    await pages.signIn().header.getByRole("link").first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});
