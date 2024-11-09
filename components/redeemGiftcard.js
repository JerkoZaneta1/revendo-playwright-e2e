const elements = require('../helper/elements');
const { expect } = require("@playwright/test");

var redeemGiftcard = async (page, giftcardCode = "j8g2f3c0") => {
    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.menuBtn).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.displayShoppingCartBtn).click();

    await page.locator(elements.cart.addPromotionBtn).click();

    await page.locator(elements.cart.addPromotionInput).click();
    await page.locator(elements.cart.addPromotionInput).fill(giftcardCode);
    await page.locator(elements.cart.addPromotionSubmitBtn).click();

    await page.waitForTimeout(2000);

    let giftcardCodeCheckTemp = await page.locator(elements.cart.giftCardLineItemLabel);

    let giftcardCodeCheck = (await giftcardCodeCheckTemp.innerText()).slice(-8)

    expect(giftcardCodeCheck).toContain(giftcardCode)

    console.log(
        `Succesfully redeemed a giftcard with the following ID: ${giftcardCodeCheck}`
    );
};

module.exports = {
    redeemGiftcard,
};