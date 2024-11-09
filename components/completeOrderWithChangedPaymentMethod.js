const elements = require('../helper/elements');
const { getOrderNumberFromFinishPage } = require('../helper/getOrderNumberFromFinishPage')
const { doWalleeCardPayment } = require('./doWalleeCardPayment');

var completeOrderWithChangedPaymentMethod = async (page) => {
  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.menuBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.offcanvas.displayShoppingCartBtn).click();

  await page.waitForTimeout(2000);
  await page.locator(elements.cart.checkoutBtn).click();

  await page.getByText("Twint").click();

  await page.waitForTimeout(3000);
  await page.locator(elements.checkout.tosCheckbox).click({
    force: true,
  });

  await page.locator(elements.checkout.confirmOrderBtn).click();

  await page.waitForTimeout(4000);
  await page.locator(elements.checkout.walleeCancelBtn).click();
  await page.getByText("Kredit-/Debitkarte").click();

  await page.waitForTimeout(3000);
  await page.locator(elements.checkout.completePaymentBtn).click();

  await doWalleeCardPayment(page);

  const { orderIdNoHash, orderId } = await getOrderNumberFromFinishPage(page);

  console.log(
    `Succesfully completed the order with the order id: ${orderIdNoHash}`
  );

  return {
    orderIdNoHash,
    orderId,
    typeOfPayment: "CreditCard",
  };
};
module.exports = {
  completeOrderWithChangedPaymentMethod,
};
