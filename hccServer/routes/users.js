const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../keys");
const passport = require("passport");



const validateLoginInput = require('../validation/login')

//Load User model
const User = require('../models/user')


router.post("/login", (req,res) => {
    const {errors, isValid} = validateLoginInput(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password

    User.findOne({email}).then(user => {
        if(!user) return res.status(404).json({emailnotfound: "Email not found"})
        
        bcrypt.compare(password, user.password).then(isMatch => {
            if(isMatch){
                const payload = {
                    id: user.id,
                    username: user.username
                }
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 //1 year in sec
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        })
                    }
                )
            }else {
                return res
                    .status(400)
                    .json({passwordincorrect: "Password incorrect"})
            }
        })
    })
})

module.exports = router