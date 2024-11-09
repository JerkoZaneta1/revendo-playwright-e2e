
const { addToCart } = require("../components/addToCart");
const { iphoneProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");

// TC97 - Purchase a product via Credit card
module.exports = async function (page) {
    await loginExistingUser(page);
    await addToCart(page, iphoneProduct);
    await checkoutCreditCard(page);
};
