const elements = require('../helper/elements');

var doWalleeCardPayment = async (page) => {
    await page.waitForTimeout(4000);

    await page
        .frameLocator("#paymentForm_19708")
        .locator('input[name="ccnumber"]')
        .click({
            force: true,
        });
    await page
        .frameLocator("#paymentForm_19708")
        .locator('input[name="ccnumber"]')
        .fill("3434 343434 34343");
    await page
        .frameLocator("#paymentForm_19708")
        .locator(".combined-input-container")
        .click();
    await page
        .frameLocator("#paymentForm_19708")
        .locator('[placeholder="MM"]')
        .fill("11");
    await page
        .frameLocator("#paymentForm_19708")
        .locator('[id="\\31 515056233076_field_expiryDate-year"]')
        .fill("25");
    await page
        .frameLocator("#paymentForm_19708")
        .locator('[id="\\31 515056233076_field_cardVerificationCode-input"]')
        .click();
    await page
        .frameLocator("#paymentForm_19708")
        .locator('[id="\\31 515056233076_field_cardVerificationCode-input"]')
        .fill("1234");

    await page.locator(elements.checkout.walleeConfirmBtn).click();
};
module.exports = {
    doWalleeCardPayment,
};
