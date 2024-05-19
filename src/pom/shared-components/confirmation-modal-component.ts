import { Locator, Page } from "@playwright/test";

export default class ConfirmationModalComponent {
  readonly page: Page;
  readonly discoverMoreButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.discoverMoreButton = this.page
      .locator('[data-testid="customButton"]')
      .getByText("Yes, discover more");
  }
}
