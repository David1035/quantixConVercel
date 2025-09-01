const passport = require('passport');
const localStrategy = require('./stragegies/local.strategy')
const JwtStrategy = require('./stragegies/jwt.strategy');


passport.use(localStrategy);
passport.use(JwtStrategy);
