const bcrypt = require('bcrypt');

const User = require('../models/User');

exports.register = (userData) => User.create(userData);
exports.login = async (username, password) => {

    const user = await User.findOne({username});

    if (!user) {
        throw new Error('Not found username or password');
    }

    const isValid =await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Not found username or password');
    }

    return user;

}