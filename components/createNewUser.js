const elements = require('../helper/elements')
const { expect } = require("@playwright/test");

const uuid = () => {
  const head = Date.now().toString();
  const tail = Math.random().toString().substr(2);
  return head + tail;
};
let id = uuid();
let userName = `jt+${id}@revendo.ch`;
let password = `qweqweqwe`;
let array = [];

var createNewUser = async (page) => {
  userName = `jt+${id}@revendo.ch`;
  await page.locator(elements.account.menuBtn).click();
  await page
    .getByRole("link", {
      name: "Register here", //TODO: move to element selector
    })
    .click();

  await page.locator(elements.register.selectAccountType).selectOption('private');

  await page.locator(elements.register.selectSalution).selectOption("c4e5abf16b0b44be84c5a19a9fb58080");

  await page.locator(elements.register.firstNameInput).click();
  await page.locator(elements.register.firstNameInput).fill("Jerko");

  await page.locator(elements.register.lastNameInput).click();
  await page.locator(elements.register.lastNameInput).fill("Zaneta");

  await page.locator(elements.register.phoneInput).click();
  await page.locator(elements.register.phoneInput).fill("+385917649468");

  await page.locator(elements.register.emailInput).click();
  await page.locator(elements.register.emailInput).fill(userName);

  await page.locator(elements.register.confirmEmailInput).click();
  await page.locator(elements.register.confirmEmailInput).fill(userName);

  await page.locator(elements.register.passwordInput).click();
  await page.locator(elements.register.passwordInput).fill(password);

  await page.locator(elements.register.confirmPasswordInput).click();
  await page.locator(elements.register.confirmPasswordInput).fill("qweqweqwe");

  await page.locator(elements.register.addressInput).click();
  await page.locator(elements.register.addressInput).fill("Senjska");

  await page.locator(elements.register.zipCodeInput).click();
  await page.locator(elements.register.zipCodeInput).fill("21000");

  await page.locator(elements.register.cityInput).click();
  await page.locator(elements.register.cityInput).fill("Split");

  await page.locator(elements.register.submitBtn).click();

  await expect(page).toHaveURL(/.*account/);
  console.log(
    `Registered succesfully with the username: ${userName} and password: ${password} `
  );

  id = uuid();
  array[0] = userName;
  array[1] = password;
  return array;
};

module.exports = {
  createNewUser,
  password,
  id,
};
