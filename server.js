const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var samplehccRouter = require('./routes/samplehcc')
var usstatesRouter = require('./routes/usstates')
var hccoperationsRouter = require('./routes/hccoperations')
var feedbackRouter = require('./routes/feedback')
var useroperationsRouter = require('./routes/useroperations')
var operationsRequestRouter = require('./routes/operationrequest')

const PORT = process.env.PORT || 8080;// connect to db

mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});
mongoose.connection.on('error', (error) => {
    console.log(error);
});

const app = express();

// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/samplehcc', samplehccRouter)
app.use('/usstates', usstatesRouter)
app.use('/hccoperations', hccoperationsRouter)
app.use('/feedback', feedbackRouter)
app.use('/useroperations', useroperationsRouter)
app.use('/operationrequest', operationsRequestRouter)

// HTTP request logger
app.use(morgan('tiny'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));