const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const session = require('express-session');
const passport = require('passport');
require('./config/passport');



const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const matchesRouter = require('./routes/matches');
const messagesRouter = require('./routes/messages');
const adminRouter = require('./routes/admin'); // <-- your admin routes
const verifyRoutes = require('./routes/verify');
const passwordResetRoutes = require('./routes/passwordReset');


const app = express();

// view engine setup (optional if you're not rendering views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors()); // allow frontend (like Vue) to talk to backend

// 🔥 Mount your routers
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/matches', matchesRouter);
app.use('/api/messages', messagesRouter);
app.use('/api/admin', adminRouter);
app.use('/api/auth', require('./routes/oauth'));
app.use('/api', verifyRoutes);
app.use('/api/block', require('./routes/block'));
app.use('/api/password', passwordResetRoutes);
app.use('/api/auth', require('./routes/auth'));


//google oauth part
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

console.log("✅ All routers mounted successfully");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;