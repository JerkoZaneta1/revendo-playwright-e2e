
const { changeENVToLiechtenstein } = require("../components/changeENVToLiechtenstein");
const { changeENVToGermany } = require("../components/changeENVToGermany");
const { changeLANGToGermany } = require("../components/changeLANGToGermany");
const { changeLANGToEnglish } = require("../components/changeLANGToEnglish");

// TC00 - Location switcher test
module.exports = async function (page) {
    await changeENVToLiechtenstein(page);
    await changeENVToGermany(page);
    await changeENVToLiechtenstein(page);
    await changeLANGToGermany(page);
    await changeLANGToEnglish(page);
};

