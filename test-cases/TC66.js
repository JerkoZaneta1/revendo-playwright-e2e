
const { addToCart } = require("../components/addToCart");
const { iphoneProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");
const { redeemGiftcard } = require("../components/redeemGiftcard");

// TC66 - Redeem gift card in capital letter
module.exports = async function (page) {
    var giftcardCode = "v9a2e9u2"; //enter your giftcard code here
    let upperCaseGiftcardCode = giftcardCode.toUpperCase();

    await loginExistingUser(page);
    await addToCart(page, iphoneProduct);
    await redeemGiftcard(page, upperCaseGiftcardCode);
    await checkoutCreditCard(page);
};