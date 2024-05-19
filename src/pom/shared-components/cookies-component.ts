import { Locator, Page } from "@playwright/test";

export default class CookiesComponent {
  readonly page: Page;
  readonly gotItButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.gotItButton = this.page.getByRole("button", { name: "GOT IT" });
  }
}
