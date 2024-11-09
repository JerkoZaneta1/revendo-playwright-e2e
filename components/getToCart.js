const elements = require('../helper/elements');
const { addToCart } = require("./addToCart");
const { expect } = require("@playwright/test");

var getToCart = async (page) => {
  await addToCart(page);

  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.menuBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.displayShoppingCartBtn).click();
  await expect(page).toHaveURL(/.*cart/);
};

module.exports = {
  getToCart,
};
