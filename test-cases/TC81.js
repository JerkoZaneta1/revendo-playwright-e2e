
const { loginExistingUser } = require("../components/loginExistingUser");

// TC81 - Login existing user
module.exports = async function (page) {
    await loginExistingUser(page)
};