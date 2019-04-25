const bcrypt = require('bcryptjs');

const helper_functions = {};

helper_functions.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPass = await bcrypt.hash(password, salt);
    return encryptedPass;
}

module.exports = helper_functions;