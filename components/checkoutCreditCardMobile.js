const elements = require('../helper/elements');
const { doWalleeCardPayment } = require('./doWalleeCardPayment');
const { getOrderNumberFromFinishPage } = require('../helper/getOrderNumberFromFinishPage')

var checkoutCreditCardMobile = async (page) => {
  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.menuBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.cart.checkoutBtn).click();

  await page.waitForTimeout(2000);
  await page.getByText("Kredit-/Debitkarte").click();

  await page.waitForTimeout(3000);
  await page.locator(elements.checkout.tosCheckbox).click({
    force: true,
  });

  await page.locator(elements.checkout.confirmOrderBtn).click();

  await doWalleeCardPayment(page);

  const { orderIdNoHash, orderId } = await getOrderNumberFromFinishPage(page);

  console.log(
    `Succesfully completed the order with the following id: ${orderIdNoHash}`
  );

  return {
    orderIdNoHash,
    orderId,
    typeOfPayment: "CreditCard",
  };
};
module.exports = {
  checkoutCreditCardMobile,
};