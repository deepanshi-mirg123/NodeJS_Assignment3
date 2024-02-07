const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is Required Field'],
    },
    email: {
        type: String,
        required: [true, 'Please enter an email.'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, ' Please enter a valid email.']
    },
    address: {
        type: String,
        required: [true, 'Address is Required Field']
    },
    occupation: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'Please enter a Password.'],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your  Password.'],
        validate: {
            validator: function (val) {
                return val == this.password;
            },
            message: 'Password and Confirm Password does not match!'
        }
    }
});

//for hashing password
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return (next);
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();

})

const User = mongoose.model('User', userSchema);
module.exports = User;