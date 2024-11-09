const elements = require("../helper/elements");
const { globalProduct } = require("../helper/globalProduct");

var addToCartMobile = async (page) => {
  await page.locator(elements.mobile.searchBtn).click();

  await page.locator(elements.mobile.searchInput).click();

  await page.locator(elements.mobile.searchInput).fill(`${globalProduct}`);

  await page.waitForTimeout(1500);
  await page.locator(elements.firstSearchProduct).click();

  await page.waitForTimeout(1500);
  await page.locator(elements.productDetail.addToCartBtn).click();
};

module.exports = {
  addToCartMobile,
};
