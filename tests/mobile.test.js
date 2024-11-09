const elements = require('../helper/elements');
const { test } = require("@playwright/test");
const { config } = require("../config/config");
const {
  checkoutCreditCardMobile,
} = require("../components/checkoutCreditCardMobile");
const { loginExistingUser } = require("../components/loginExistingUser");

const {
  completeOrderWithChangedPaymentMethodMobile,
} = require("../components/completeOrderWithChangedPaymentMethodMobile");
const { addToCartMobile } = require("../components/addToCartMobile");
const {
  changeENVfromCROtoSWIMobile,
} = require("../components/changeENVfromCROtoSWIMobile");

const testsWillBeRunXTimes = 3; //change this to run all tests more then once

test.beforeEach(async ({ page }) => {
  test.setTimeout(120000);
  await page.goto(config.globalUrl);
  await page.locator(elements.acceptCookieBtn).click();
  await page.waitForTimeout(4000);
});

for (var i = 0; i < testsWillBeRunXTimes; i++) {
  var testNumber = `Test No: ${i + 1}`;

  test.only(`Complete an order on CH staging with changing the payment method on mobile Viewport, ${testNumber}`, async ({
    page,
  }) => {
    await changeENVfromCROtoSWIMobile(page); //remove this line if running tests from Switzerland IP
    var userName = "jt+ch2@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here
    await loginExistingUser(page, userName, password);
    await addToCartMobile(page);
    await completeOrderWithChangedPaymentMethodMobile(page);
  });

  test(`Buy a Product via credit card on mobile, ${testNumber}`, async ({
    page,
  }) => {
    await loginExistingUser(page);
    await addToCartMobile(page);
    await checkoutCreditCardMobile(page);
  });
}
