const elements = require('../helper/elements')
const { expect } = require("@playwright/test");

var changeLANGToGermany = async (page) => {
  await page.locator(elements.locationSwitcher.menuBtn).click();

  await page.locator(elements.locationSwitcher.languageBtn).click();

  await page
    .getByRole("link", {
      name: "Deutsch",
    }).click();

  await page.waitForTimeout(3000);

  await expect(page.locator('.header-actions-right')).toContainText('Deutsch');
};

module.exports = {
  changeLANGToGermany,
};