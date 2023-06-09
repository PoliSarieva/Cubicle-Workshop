const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userShema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
});

userShema.virtual('repeatPassword')
    .set(function(value) {
        if (value !== this.password) {
            throw new mongoose.MongooseError('Password missmatch!');
        }
    });

    userShema.pre('save', async function () {
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
    })

const User = mongoose.model('User', userShema)

module.exports = User;