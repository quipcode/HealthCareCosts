const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../../keys");
const passport = require("passport");
const cors = require('./cors');



const validateLoginInput = require('../validation/login')
const validateRegisterInput = require('../validation/register')
//Load User model
const User = require('../models/user')

router.post('/register', (req,res) => {
    const {errors, isValid} = validateRegisterInput(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }

    User.findOne({email: req.body.email}).then(user => {
        if(user){
            return res.status(400).json({email: "Email already exists"})
        }else{
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                admin: req.body.admin
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(user => res.json(user))
                    // .catch(err => console.log(err));
                });
              });
        }
    })
})

router.post("/login", cors.corsWithOptions ,(req,res, next) => {
    const {errors, isValid} = validateLoginInput(req.body)
    if(!isValid){
        return res.status(400).json(errors)
    }
    const email = req.body.email
    const password = req.body.password
    // console.log(email, password)
    User.findOne({email}).then(user => {
        if(!user) return next(res.status(404).json({emailnotfound: "Email not found"}))
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

router.get("/",(req,res) =>{
    User.find()
    .then(user => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json')
        res.json(user);
    })
    .catch(err => next(err))
})

router.route("/:userId", cors.corsWithOptions)
.get((req,res,next) => {
    User.findById(req.params.userId)
    .then(user => {
        res.statusCode = 200,
        res.setHeader('Content-Type', 'application/json')
        res.json(user);
    })
    .catch(err => next(err))
})
.patch((req,res,next) => {
    User.findById(req.params.userId)
    .then(user => {
        if(user){
            if(!user.id.equals(req.params.userId)){
                const err = new Error('You are not authorized to update this comment!');
                err.status = 403;
                return next(err);
            }
            req.body.author = req.user._id;
            Users.findByIdAndUpdate(req.params.userId, {
                $set: req.body
            }, { new: true })
            .then(comment => {
                Comment.findById(comment._id)
                .populate('author')
                .then(comment => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(comment); 
                })
                .catch(err => next(err));               
            })
            .catch(err => next(err));

        }else{
            const err = new Error(`User ${req.params.userId} not found`)
            err.status = 404;
            return next(err);
        }
    })
    .catch(err => next(err));
})
module.exports = router