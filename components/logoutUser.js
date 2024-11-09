const elements = require('../helper/elements')
const { expect } = require("@playwright/test");

var logoutUser = async (page) => {
  await page.locator(elements.logoBtn).click();
  await page.locator(elements.account.menuBtn).click();
  await page.locator(elements.account.logoutBtn).click();

  await expect(page).toHaveURL(/.*login/);

  console.log(`User logged out`);
};

module.exports = {
  logoutUser,
};
