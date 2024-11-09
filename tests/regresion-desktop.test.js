const { test } = require("@playwright/test");
const { config } = require("../config/config");
const elements = require('../helper/elements');
const testCases = require('../test-cases');

const testsWillBeRunXTimes = 1; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(config.globalUrl);
  await page.locator(elements.acceptCookieBtn).click();
  await page.waitForTimeout(4000);
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

  test(`TC61 - Purchase digital gift card in Shopware AT-Channel, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC61(page);
  });

  test(`TC97 - Purchase digital gift card in Shopware EU-Channel, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC97(page);
  });

  test(`TC58 - Purchase digital gift card in Shopware CH-Channel, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC58(page);
  });

  test(`TC66 - Redeem gift card in capital letter, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC66(page);
  });

  test(`TC78 - Create a new use, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC78(page);
  });

  test(`TC81 - Login existing user, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC81(page);
  });

  test(`TC82 - Logout existing user, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC66(page)
  });

  test(`TC93 - Purchase a product via Credit card, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC93(page)
  });

  test(`TC69 - Try to redeem a gift card with a balance of 0, ${testNumber}`, async ({
    page,
  }) => {
    await testCases.TC69(page)
  });
}
