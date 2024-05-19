import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";
import HeaderComponent from "../shared-components/header-component";

export default class ProductPage extends BasePage {
  readonly page: Page;
  readonly addToCartButton: Locator;

  // Components
  readonly headerComponent: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addToCartButton = this.page.locator('[data-testid="pdpAddToProduct"]');
    this.headerComponent = new HeaderComponent(page);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}
