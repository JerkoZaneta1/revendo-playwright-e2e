const elements = require('../helper/elements');
const { getOrderNumberFromFinishPage } = require('../helper/getOrderNumberFromFinishPage')

var checkoutPayPal = async (page) => {
    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.menuBtn).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.displayShoppingCartBtn).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.cart.checkoutBtn).click();

    await page.waitForTimeout(2000);
    await page.getByText('Paypal new', {
        exact: true
    }).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.checkout.tosCheckbox).click({
        force: true,
    });

    await page.waitForTimeout(1000);
    await page.locator(elements.checkout.confirmOrderBtn).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.checkout.walleeConfirmBtn).click();

    await page.waitForTimeout(6000);
    await page.locator('[placeholder="Email or mobile number"]').click();
    await page.locator('[placeholder="Email or mobile number"]').fill('sb-rtt0x15517267@personal.example.com');
    await page.locator('[placeholder="Enter your password"]').click();
    await page.locator('[placeholder="Enter your password"]').fill('revrevrev2');
    await page.locator('button:has-text("Log In")').click();
    await page.locator('[data-testid="submit-button-initial"]').click();
    await page.waitForTimeout(2000);

    const { orderIdNoHash, orderId } = await getOrderNumberFromFinishPage(page);

    return {
        orderIdNoHash,
        orderId,
        typeOfPayment: 'PayPal'
    };
}

module.exports = {
    checkoutPayPal,
};