var createError = require('http-errors');
const redis = require("redis");
var express = require('express');
const PORT = 8080;
var path = require('path');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var serversRouter = require('./routes/server');

const client = redis.createClient();

client.on("error", function(error) {
  console.error(error);
});

module.exports.client =  client;
var app = express();


const server = require('http').Server(app);
// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', indexRouter);
app.use('/device', usersRouter);
app.use('/server', serversRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var result = {status: "false", message: "404"};
  res.status(404).json(result);
});
client.on("error", function(error) {
  console.error(error);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(PORT);
