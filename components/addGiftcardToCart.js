const elements = require('../helper/elements');

var addGiftcardToCart = async (page, giftcardCode) => {
    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.menuBtn).click();

    await page.waitForTimeout(2000);
    await page.locator(elements.offcanvas.displayShoppingCartBtn).click();

    await page.locator(elements.cart.addPromotionBtn).click();

    await page.locator(elements.cart.addPromotionInput).click();
    await page.locator(elements.cart.addPromotionInput).fill(giftcardCode);
    await page.locator(elements.cart.addPromotionSubmitBtn).click();

    await page.waitForTimeout(2000);
};

module.exports = {
    addGiftcardToCart,
};