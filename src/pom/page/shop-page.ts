import { Locator, Page } from "@playwright/test";
import BasePage from "./base-page";
import HeaderComponent from "../shared-components/header-component";

export default class ShopPage extends BasePage {
  readonly page: Page;
  readonly productComponent: (productName: string) => Locator;

  // Components
  readonly headerComponent: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.headerComponent = new HeaderComponent(page);
    this.productComponent = (productName) =>
      this.page
        .locator(".aem-productTeaserComponent__content")
        .filter({ has: page.getByRole("heading", { name: productName }) })
        .getByText(" Buy Now ");
  }

  async goToProductDetails(name: string) {
    await this.productComponent(name).click();
  }
}
