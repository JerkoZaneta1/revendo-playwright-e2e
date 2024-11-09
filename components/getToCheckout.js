const elements = require('../helper/elements');
const { expect } = require("@playwright/test");
const { addToCart } = require("./addToCart");

var getToCheckout = async (page) => {
  await addToCart(page);

  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.menuBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.displayShoppingCartBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.cart.checkoutBtn).click();

  await page.waitForTimeout(2000);
  await page.getByText("Kredit-/Debitkarte").click();

  await page.waitForTimeout(2000);
  await page.locator(elements.checkout.tosCheckbox).click({
    force: true,
  });

  await page.locator(elements.checkout.confirmOrderBtn).click();

  await expect(page).toHaveURL(/.*wallee/);
};
module.exports = {
  getToCheckout,
};