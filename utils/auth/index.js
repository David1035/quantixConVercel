const passport = require('passport');
const localStrategy = require('./stragegies/local.strategy')

passport.use(localStrategy)
