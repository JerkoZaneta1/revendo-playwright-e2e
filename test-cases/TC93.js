
const { addToCart } = require("../components/addToCart");
const { giftcardProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");
const { config } = require("../config/config");

// TC97 - Purchase digital gift card in Shopware EU-Channel
module.exports = async function (page) {
    await page.goto(config.globalUrlEu);
    await page.waitForTimeout(2000);

    var userName = "jt+testcreditcardpayment@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here

    await loginExistingUser(page, userName, password);
    await addToCart(page, giftcardProduct);
    await checkoutCreditCard(page);
};
