const { globalProduct } = require("../helper/globalProduct");
const elements = require('../helper/elements');

var addToCart = async (page, product = globalProduct) => {
  await page.waitForTimeout(1000);
  await page.locator(elements.searchInput);

  await page.waitForTimeout(500);
  await page.locator(elements.searchInput).fill(`${product}`);

  await page.waitForTimeout(1500);
  await page.locator(elements.firstSearchProduct).click();

  await page.waitForTimeout(1500);
  await page.locator(elements.productDetail.addToCartBtn).click();
};

module.exports = {
  addToCart,
};
