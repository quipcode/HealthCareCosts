const express = require('express');
const User = require('../models/user');
const authenticate = require('../authenticate');
const passport = require('passport');
const bodyParser = require('body-parser');
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
        if(req.body.email){
          user.email = req.body.email
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



// userRouter.route('/login')
//   .post( (req,res,next) => {
//     console.log("in sudo login post", req.user)
//     var email = req.body.email;
//     var password = req.body.password;
//     var username = req.body.username;
//     var data;
//     if (email.length > 0 && password.length > 0) {
//       data = {
//           email: email,
//           // password: password
//       };
//     }else if(username.length > 0 && password.length > 0) {
//         data = {
//             username: username,
//             // password: password
//         };
//     }else {
//         res.json({
//             status: 0,
//             message: err
//         });
//     }

//     // User.findOne({email: "james@bond.com"}, (err, us) => {
//     //   console.log("test find err then us", err, us)
//     // })
    
//     User.findOne(data, function(err, user) {
//       console.log("user is ", user, "data is ", data, "eerr is ", err, "USERS is", User)
//       if (err) {
//         res.json({
//             status: 0,
//             message: err
//         });
//       }
//       if (!user) {
//         res.json({
//             status: 0,
//             msg: "not found"
//         });
//       }
//       if(user){
//         res.json({
//           status: 1,
//           id: user._id,
//           message: " success"
//         });
//       }
//       // else{
//       //     res.json({
//       //         status: 0,
//       //         msg: "Invalid Fields"
//       //     });
//       // }
//     })

 
// })


userRouter.post('/login', passport.authenticate('local'),  (req, res) => {
  console.log("in login post", req)
  const token = authenticate.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.json({ success: true, token: token, status: 'You are successfully logged in!' });
});


userRouter.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/login');
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
  .post(authenticate.verifyUser, (req,res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported /users/' + req.params.username);
  })
  .patch(authenticate.verifyUser, (req,res, next) => {
    res.statusCode = 403;
    res.end('PATCH operation not supported /users/' + req.params.username);
  })
  .put(authenticate.verifyUser, (req, res, next) => {
     User.findOne({"username": req.params.username})
    
    // User.findByIdAndUpdate(req.params.username, {
    //   $set : req.body
    // }, {new: true})
      .then(user => {
        if(user){
          
          if(user.username == req.user.username ||  req.user.admin  ){
            // console.log(user.username == req.user.username, req.user.admin, req.user, user.username == req.user.username ||  req.user.admin)
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
            // console.log(user.username, req.params.username, req.user, user)
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
  .delete(authenticate.verifyUser, (req, res, next) => {
    
     User.findOne({"username": req.params.username})
    .then(user => {
      if(user){
        if(user.username == req.user.username){
          User.findOneAndDelete({username : req.params.username}, (err, offer) => {
            console.log("in the user delete", req.params.username)
            res.redirect('/login')
          })
        }else if(req.user.admin){
          User.findOneAndDelete({username : req.params.username}, (err, offer) => {
            console.log("in the admin delete", req.params.username)
            res.redirect('/')
          })
        }else{
          // console.log("not authed")
          const err = new Error(`You are not authorized to delete this record ${user}!`);
          err.status = 403;
          return next(err);
        }

      }else{
        const err = new Error(`User with username ${req.params.username} not found`);
        err.status = 404;
        return next(err);
      }

    })
    console.log( req.params.username, req.user.admin)
   
  })
module.exports = userRouter;