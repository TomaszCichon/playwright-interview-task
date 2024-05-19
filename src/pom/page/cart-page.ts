import { Locator, Page, expect } from "@playwright/test";
import BasePage from "./base-page";
import HeaderComponent from "../shared-components/header-component";

export default class CartPage extends BasePage {
  readonly page: Page;
  readonly productList: Locator;
  readonly productName: Locator;

  // Components
  readonly headerComponent: HeaderComponent;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.productList = this.page.locator('[class^="CartItemList"]');
    this.productName = this.productList.locator('[class*="productName"]');
    this.headerComponent = new HeaderComponent(page);
  }

  async expectProductOnTheCart(name: string) {
    await expect(this.productName).toContainText(name);
  }
}
