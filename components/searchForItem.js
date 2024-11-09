const { iphoneProduct } = require("../helper/globalProduct");
const elements = require('../helper/elements');
const { expect } = require("@playwright/test");

var searchForItem = async (page) => {
  await page.waitForTimeout(2000);

  await page.waitForTimeout(1000);
  await page.locator(elements.searchInput);

  await page.waitForTimeout(500);
  await page.locator(elements.searchInput).fill(`${iphoneProduct}`);

  await page.locator(elements.searchShowAllBtn).click();

  await page.waitForTimeout(1500);

  await expect(page).toHaveURL(/.*search/);
};

module.exports = {
  searchForItem,
};
