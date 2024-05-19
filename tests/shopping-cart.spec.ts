import { test, expect } from "@playwright/test";
import { url } from "../src/utils/consts";
import LandingPage from "../src/pom/page/landing-page";
import CartPage from "../src/pom/page/cart-page";
import ProductPage from "../src/pom/page/product-page";
import ShopPage from "../src/pom/page/shop-page";

test.describe("Adding product to the shopping cart", () => {
  test("User should be able to add product to the shopping cart", async ({
    page,
  }) => {
    const productName = "Ploom X Advanced";

    const landingPage = new LandingPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);
    const shopPage = new ShopPage(page);

    await landingPage.visit(url.landingPage);
    await landingPage.acceptCookies();
    await landingPage.confirmAge();

    await landingPage.goTo("SHOP");
    await shopPage.goToProductDetails(productName);
    await productPage.addToCart();
    await landingPage.expectCartItemNumber(1);
    await landingPage.goToCheckout();
    await cartPage.expectProductOnTheCart(productName);
  });
});

/*
    ## COMMENT TO THE RECRUITMENT TASK
    
    Not implemented:

  - extended product configurations for API, WEB, browsers, visual regression etc
  - splitting current test flow into smaller tests (to reduce time execution) and using API requests for entry data
  - adding separate classes for ButtonElement, DropdownElement, InputElement etc. to not repeat code for these common elements
  - adding lint for every commit (for example using Husky)
  - adding prettier rules
  - adding helper interfaces, helper functions
  - moving pages to the fixtures
  - enable parallel execution
  */
