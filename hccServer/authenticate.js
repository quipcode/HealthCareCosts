const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const config = require('./config.js');

exports.getToken = function (user) {
    return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

exports.verifyAdmin = (req, res, next) => {
    if (req.user.admin) {
        return next();
    } else {
        err = new Error("You are not authorized to perform this operation!");
        err.status = 403;
        return next(err);
    }
};

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
    new JwtStrategy(
        opts,
        (jwt_payload, done) => {
            console.log('JWT payload:', jwt_payload);
            User.findOne({ _id: jwt_payload._id }, (err, user) => {
                if (err) {
                    return done(err, false);
                } else if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
    )
);

// exports.jwtPassport = passport => {
//     passport.use(
//         new JwtStrategy(opts, (jwt_payload, done) => {
//             console.log('JWT payload:', jwt_payload);
//             User.findById(jwt_payload.id)
//                 .then(user => {
//                     if (user) return done(null, user);
//                     return done(null, false);
//                 })
//                 .catch(err => {
//                     return done(err, false, {message: 'Server Error'});
//                 });
//         })
//     );
// };

exports.verifyUser = passport.authenticate('jwt', { session: false });

// following josiah's comment here https://stackoverflow.com/questions/45250545/how-to-authenticate-via-email-rather-than-username-in-passport-js we got it boys
exports.local = passport.use(new LocalStrategy( {usernameField : "email"},User.authenticate()));


// following JordanForeman's model of using createStrategy I was able to get email to work: https://github.com/saintedlama/passport-local-mongoose/issues/35
// exports.local = passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());