const Validator = require("validator");
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data){
    let errors = {}
    
    // empty fields made into empty strings to allow validator function to work
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    //Email validation
    if(Validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }else if(!Validator.isEmail(data.email)){
        errors.email = "Email is invalid"
    }

    //Password check
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
