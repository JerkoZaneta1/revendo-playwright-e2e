
const { addToCart } = require("../components/addToCart");
const { giftcardProduct } = require("../helper/globalProduct");
const { checkoutCreditCard } = require("../components/checkoutCreditCard");
const { loginExistingUser } = require("../components/loginExistingUser");
const { changeENVfromCROtoSWI } = require("../components/changeENVfromCROtoSWI");

// TC58 - Purchase digital gift card in Shopware CH-Channel
module.exports = async function (page) {
    await changeENVfromCROtoSWI(page); //remove this line if running tests from Switzerland IP

    var userName = "jt+ch2@revendo.ch"; //input your username here
    var password = "qweqweqwe"; //input your password here

    await loginExistingUser(page, userName, password);
    await addToCart(page, giftcardProduct);
    await checkoutCreditCard(page);
};

