
const { createNewUser } = require("../components/createNewUser");

// TC78 - Create a new user
module.exports = async function (page) {
    await createNewUser(page)
};

