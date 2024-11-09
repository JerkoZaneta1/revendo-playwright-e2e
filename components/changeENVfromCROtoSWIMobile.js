var changeENVfromCROtoSWIMobile = async (page) => {
    await page.waitForTimeout(1000);
    await page.getByRole('button', {
        name: 'Select country & language'
    }).click()
    await page.waitForTimeout(2000);

    await page.locator('.dropdown-arrow-icon').first().click({
        force: true,
    })
    await page.getByRole('link', {
        name: 'Switzerland'
    }).click()
    await page.waitForTimeout(3000);
}

module.exports = {
    changeENVfromCROtoSWIMobile,
};