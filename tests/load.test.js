const elements = require('../helper/elements');
const { test } = require("@playwright/test");
const { config } = require("../config/config");

const { getToCheckout } = require("../components/getToCheckout");
const { loginExistingUser } = require("../components/loginExistingUser");
const { getToCart } = require("../components/getToCart");
const { searchForItem } = require("../components/searchForItem");

const testsWillBeRunXTimes = 1; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(config.globalUrlCh);
  await page.locator(elements.acceptCookieBtn).click();
  await page.waitForTimeout(4000);
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

  test(`Login as an existing user, ${testNumber}`, async ({ page }) => {
    var userName = "jt+ch2@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here
    await loginExistingUser(page, userName, password);
  });

  test(`Get to checkout with logging in as existing user and adding an item to cart, ${testNumber}`, async ({
    page,
  }) => {
    var userName = "jt+ch2@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here
    await loginExistingUser(page, userName, password);
    await getToCart(page);
    await getToCheckout(page);
  });

  test(`Search for an item, ${testNumber}`, async ({ page }) => {
    await searchForItem(page);
  });

  test(`Search for an item and add it to cart without logging in, ${testNumber}`, async ({
    page,
  }) => {
    await getToCart(page);
  });
}
