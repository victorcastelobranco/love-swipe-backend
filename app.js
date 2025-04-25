const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors'); // <-- You need this!

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const matchesRouter = require('./routes/matches');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // <-- Needed for frontend requests like Vue

// 🔽 This is where you wire your routes 🔽
app.use('/', indexRouter);
app.use('/api/users', usersRouter); // <-- ✅ This is what activates /api/users/signup
app.use('/api/matches', matchesRouter);
console.log("✅ matchesRouter mounted");


app.post('/api/users/signup', (req, res) => {
  console.log('🔥 /api/users/signup reached');
  res.send('🔥 It works!');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
