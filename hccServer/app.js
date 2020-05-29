const mongoose = require('mongoose');
const passport = require('passport');
const express = require('express');

var createError = require('http-errors');
var path = require('path');
var logger = require('morgan');
const cors = require('cors')

const config = require('../../keys');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var samplehccRouter = require('./routes/samplehcc')
var usstatesRouter = require('./routes/usstates')
var hccoperationsRouter = require('./routes/hccoperations')
var feedbackRouter = require('./routes/feedback')
var useroperationsRouter = require('./routes/useroperations')
var operationsRequestRouter = require('./routes/operationrequest')

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
connect.then(() => console.log('Connected correctly to server'),
  err => console.log(err)
);
var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

app.use(passport.initialize());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/samplehcc', samplehccRouter)
app.use('/usstates', usstatesRouter)
app.use('/hccoperations', hccoperationsRouter)
app.use('/feedback', feedbackRouter)
app.use('/useroperations', useroperationsRouter)
app.use('/operationrequest', operationsRequestRouter)

app.use(express.static(path.join(__dirname, 'public')));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//cors stuff from stack overflow https://stackoverflow.com/questions/53113295/i-am-not-able-to-make-a-get-request-in-axios
// app.use(function(req, res, next) {

//   //to allow cross domain requests to send cookie information.
//   res.header('Access-Control-Allow-Credentials', true);
  
//   // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
//   res.header('Access-Control-Allow-Origin',  req.headers.origin);
  
//   // list of methods that are supported by the server
//   res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
  
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
  
//       next();
//   });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
