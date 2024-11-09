const { expect } = require("@playwright/test");
const elements = require("../helper/elements")

var loginExistingUser = async (
  page,
  userName = "jt+at@revendo.ch",
  password = "qweqweqwe"
) => {
  await page.locator(elements.logoBtn).click();
  await page.waitForTimeout(2000);
  await page.locator(elements.account.menuBtn).click();

  await page.locator(elements.offcanvas.loginBtn).click();

  await page
    .locator(elements.offcanvas.emailInput)
    .click();
  await page
    .locator(elements.offcanvas.emailInput)
    .fill(userName);
  await page
    .locator(elements.offcanvas.emailInput)
    .press("Tab");
  await page
    .locator(elements.offcanvas.passwordInput)
    .fill(password);

  await page.locator(elements.offcanvas.loginBtn).click();

  await expect(page).toHaveURL(/.*account/);
  console.log(
    `Logged in succesfully with the username: ${userName} and password: ${password}`
  );
};

module.exports = {
  loginExistingUser,
};
