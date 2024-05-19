import { Page, expect } from "@playwright/test";

import HeaderComponent from "../shared-components/header-component";
import BasePage from "./base-page";
import CookiesComponent from "../shared-components/cookies-component";
import ConfirmationModalComponent from "../shared-components/confirmation-modal-component";

export default class LandingPage extends BasePage {
  readonly page: Page;

  // Components
  readonly headerComponent: HeaderComponent;
  readonly cookiesComponent: CookiesComponent;
  readonly confirmationModalComponent: ConfirmationModalComponent;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.headerComponent = new HeaderComponent(page);
    this.cookiesComponent = new CookiesComponent(page);
    this.confirmationModalComponent = new ConfirmationModalComponent(page);
  }

  async acceptCookies() {
    await this.cookiesComponent.gotItButton.click();
  }

  async confirmAge() {
    await this.confirmationModalComponent.discoverMoreButton.click();
  }

  async goTo(menuName: "BLOG" | "SHOP") {
    switch (menuName) {
      case "SHOP":
        await this.headerComponent.shopButton.click();
        break;
      case "BLOG":
        console.log("Blog button clicked");
        break;

      default:
        break;
    }
  }

  async expectCartItemNumber(numberOfItems: number) {
    await this.page.waitForSelector("[class^='Loading-module-']", {
      state: "detached",
      timeout: 10000,
    });

    await expect(this.headerComponent.cartIconIndicator).toHaveText(
      numberOfItems.toString()
    );
  }

  async goToCheckout() {
    // TODO : Add condition to check if "YOUR CART" window is visible, if not click if first
    await this.headerComponent.cartCheckoutButton.click();
  }
}
