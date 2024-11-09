
const { addToCart } = require("../components/addToCart");
const { giftcardProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");

// TC61 - Purchase digital gift card in Shopware AT-Channel
module.exports = async function (page) {
    await loginExistingUser(page);
    await addToCart(page, giftcardProduct);
    await checkoutCreditCard(page);
};