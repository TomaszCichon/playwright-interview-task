import { Locator, Page, expect } from "@playwright/test";

export default class HeaderComponent {
  readonly page: Page;
  readonly cartIcon: Locator;
  readonly cartIconIndicator: Locator;
  readonly cartCheckoutButton: Locator;

  // Menu buttons
  readonly shopButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shopButton = this.page.getByTestId("headerItem-1");
    this.cartIcon = this.page.locator("[data-testid='cart']");
    this.cartIconIndicator = this.cartIcon.locator(".mini-cart__icon-label");
    this.cartCheckoutButton = this.page.getByTestId("miniCartCheckoutButton");
  }
}
