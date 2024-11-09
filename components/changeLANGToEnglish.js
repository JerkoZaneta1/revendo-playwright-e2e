const elements = require('../helper/elements')
const { expect } = require("@playwright/test");

var changeLANGToEnglish = async (page) => {
  await page.locator(elements.locationSwitcher.menuBtn).click();

  await page.locator(elements.locationSwitcher.languageBtn).click();

  await page
    .getByRole("link", {
      name: "English",
    }).click();

  await page.waitForTimeout(3000);

  await expect(page.locator('.header-actions-right')).toContainText('English');
};

module.exports = {
  changeLANGToEnglish,
};