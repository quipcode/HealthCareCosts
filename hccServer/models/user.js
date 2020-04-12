const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    firstname: {
        type: String,
        default: ''
    },
    lastname: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        default: ""
    },
    username: {
        type: String,
        default: ""
    },
    password : { 
        type: String,
        default: "",
        required: true
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField : 'email'});

module.exports = mongoose.model('User', userSchema);