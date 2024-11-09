const elements = require('../helper/elements');

var getOrderNumberFromFinishPage = async (page) => {
    await page.waitForTimeout(3000);

    let orderString = await page.locator(elements.checkout.finishOrderNumber);
    let orderIdTemp = await orderString.innerText()
    let orderIdArray = await orderIdTemp.match(/#([A-Z]{2}-\d+)$/);
    let orderId = orderIdArray[0]
    let orderIdNoHash = orderIdArray[1]

    return {
        orderIdNoHash,
        orderId,
    };
}

module.exports = {
    getOrderNumberFromFinishPage,
};