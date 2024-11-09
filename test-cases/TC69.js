
const { addToCart } = require("../components/addToCart");
const { iphoneProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");
const { redeemGiftcard } = require("../components/redeemGiftcard");

// TC69 - Try to redeem a gift card with a balance of 0
module.exports = async function (page) {
    // TODO: FINISH
    var giftcardCode = "l1a5h1o5"; //enter your giftcard code here

    await addToCart(page, iphoneProduct);

    await addGiftcardToCart(page, giftcardCode);

    let cartItemTotalPrices = await page.locator(elements.checkout.cartItemTotalPrice)

    let cartItemPriceSum = 0;

    cartItemTotalPrices.forEach(async (cartItemTotalPrice) => {
        let itemPriceString = await cartItemTotalPrice.innerHTML();
        let itemPriceNum = Number(itemPriceString.replace(/\D/g, ""));
        cartItemPriceSum += itemPriceNum;
    })
    console.log(price);

    let totalPriceString = (await page.locator(elements.checkout.cartTotalPrice)).innerHTML();

    expect(totalPriceString).toContain(cartItemPriceSum)
    //await expect(page).toHaveURL(/.*wallee/);
};