
const { loginExistingUser } = require("../components/loginExistingUser");
const { logoutUser } = require("../components/logoutUser");

// TC82 - Logout existing user
module.exports = async function (page) {
    await loginExistingUser(page)
    await logoutUser(page)
};

