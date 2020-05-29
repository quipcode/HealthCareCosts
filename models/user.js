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
    },
    address1 :{
        type: String,
        default: ""
    },
    address2 :{
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    state : {
        type: String,
        default: ""
    },
    zipcode: {
        type: Number,
        default: 0
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField : 'email'});

module.exports = mongoose.model('User', userSchema);