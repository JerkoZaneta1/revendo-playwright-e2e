const { test } = require("@playwright/test");
const { config } = require("../config/config");
const { createNewUser } = require("../components/createNewUser");
const { addGiftcardToCart } = require("../components/addGiftcardToCart");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");
const { logoutUser } = require("../components/logoutUser");
const { checkoutPayPal } = require("../components/checkoutPayPal");
const {
  completeOrderWithChangedPaymentMethod,
} = require("../components/completeOrderWithChangedPaymentMethod");
const { addToCart } = require("../components/addToCart");
const {
  changeENVfromCROtoSWI,
} = require("../components/changeENVfromCROtoSWI");
const { redeemGiftcard } = require("../components/redeemGiftcard");
const elements = require("../helper/elements");
const { iphoneProduct } = require("../helper/globalProduct");

const testsWillBeRunXTimes = 1; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(config.globalUrl);
  await page.locator(elements.acceptCookieBtn).click();
  await page.waitForTimeout(4000);
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

  test(`Login as an existing user, ${testNumber}`, async ({ page }) => {
    await loginExistingUser(page);
  });

  test(`Create a new user, ${testNumber}`, async ({ page }) => {
    await createNewUser(page);
  });

  test(`Create a new user, log out, then log back in with the same user, ${testNumber}`, async ({
    page,
  }) => {
    var loginCredentials = await createNewUser(page);
    var userName = loginCredentials[0];
    var password = loginCredentials[1];
    await logoutUser(page);
    await loginExistingUser(page, userName, password);
  });

  test(`Complete an order on CH staging with changing the payment method, ${testNumber}`, async ({
    page,
  }) => {
    await changeENVfromCROtoSWI(page); //remove this line if running tests from Switzerland IP
    var userName = "jt+ch2@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here
    await loginExistingUser(page, userName, password);
    await addToCart(page);
    await completeOrderWithChangedPaymentMethod(page);
  });

  test(`Buy a Product via credit card, ${testNumber}`, async ({ page }) => {
    await loginExistingUser(page);
    await addToCart(page);
    await checkoutCreditCard(page);
  });

  test(`Create a user, then buy a product via PayPal on EU , ${testNumber}`, async ({
    page,
  }) => {
    await page.goto("https://sw.revendo.dev/en");
    await page.waitForTimeout(2000);

    await createNewUser(page);
    await addToCart(page);
    await checkoutPayPal(page);
  });
}

test(`Create a user, reedem a giftcard and checkout via credit card, ${testNumber}`, async ({
  page,
}) => {
  var giftcardCode = "v9a2e9u2"; //enter your giftcard code here
  await createNewUser(page);
  await addToCart(page);
  await redeemGiftcard(page, giftcardCode);
  await checkoutCreditCard(page);
});
