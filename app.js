const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const keys = require('./config');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
app.use(cors());
mongoose.connect(
  keys.mongoURI[keys.conf.env],
  { useNewUrlParser: true },
  function(err){
    if(err) process.stdout.write(err);
    process.stdout.write('Connected to Database: ' + keys.mongoURI[keys.conf.env]);
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
