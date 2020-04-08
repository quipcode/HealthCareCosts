const express = require('express');
const User = require('../models/user');
const authenticate = require('../authenticate');
const passport = require('passport');
const bodyParser = require('body-parser');

const router = express.Router();


const userRouter = express.Router();

userRouter.use(bodyParser.json());

/* GET users listing. */
userRouter.get('/',function (req, res, next) {
  User.find()
    .then(users => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
    })
    .catch(err => next(err));  
});

userRouter.post('/signup', (req, res) => {
  User.register(new User({ username: req.body.username }),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        if (req.body.firstname) {
          user.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          user.lastname = req.body.lastname;
        }
        if(req.body.admin){
          user.admin = req.body.admin
        }
        user.save(err => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({ err: err });
            return;
          }
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        });
      }
    });
});

userRouter.post('/update', (req, res) => {
  User.register(new User({ username: req.body.username }),
    req.body.password, (err, user) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({ err: err });
      } else {
        if (req.body.firstname) {
          user.firstname = req.body.firstname;
        }
        if (req.body.lastname) {
          user.lastname = req.body.lastname;
        }
        if(req.body.admin){
          user.admin = req.body.admin
        }
        user.save(err => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({ err: err });
            return;
          }
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ success: true, status: 'Registration Successful!' });
          });
        });
      }
    });
});

userRouter.post('/login', passport.authenticate('local'), (req, res) => {
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token, status: 'You are successfully logged in!' });
});


userRouter.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  } else {
    const err = new Error('You are not logged in!');
    err.status = 403;
    return next(err);
  }
});

userRouter.route('/:username')
  .get((req,res,next) => {
    // User.findById(req.params.username)
    User.findOne({"username": req.params.username})
      .then(user => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(user)
      })
      .catch(err => next(err))
  })
  .put(authenticate.verifyUser, (req, res, next) => {
    User.findOne({"username": req.params.username})
    
    // User.findByIdAndUpdate(req.params.username, {
    //   $set : req.body
    // }, {new: true})
      .then(user => {
        if(user){
          
          if(user.username == req.user.username ||  req.user.admin  ){
            console.log('body is', req.params.username)
            User.findOneAndUpdate({username : req.params.username}, {
              $set : req.body
            }, {new: true}, (err, result) => {
              if(err){
                res.send(err)
              }else{
                res.send(result)
              }
            })
              .catch(err => next(err));
          }else{
            console.log(user.username, req.params.username, req.user, user)
            const err = new Error(`You are not authorized to update this record ${user} !`);
            err.status = 403;
            return next(err);
          }
        }else{
          const err = new Error(`User with username ${req.params.username} not found`);
          err.status = 404;
          return next(err);
        }
      })
      .catch(err => next(err));
  })

module.exports = userRouter;