const elements = require('../helper/elements')
const { expect } = require("@playwright/test");

var changeENVToLiechtenstein = async (page) => {
  await page.locator(elements.locationSwitcher.menuBtn).click();

  await page.locator(elements.locationSwitcher.switcherBtn).click();

  await page
    .getByRole("link", {
      name: "Liechtenstein",
    }).click();

  await page.waitForTimeout(3000);

  await expect(page.locator(elements.locationSwitcher.currentCountry)).toContainText('LI');
};

module.exports = {
  changeENVToLiechtenstein,
};