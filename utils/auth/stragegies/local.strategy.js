const { Strategy} = require('passport-local');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const UserService = require('./../../../services/userService');

const service = new UserService();


const localStrategy = new Strategy( async (email, password, done)=> {
  try {
    const user = await  service.findByEmail(email);
    if(!user){
      done(boom.unauthorized(), false) // así se envían los errores
    }

    const isMactch = await  bcrypt.compare(password, user.password);
    if(!isMactch) {
      done(boom.unauthorized(), false)
    }

    done(null, user); // manda el usuario con la información

  } catch (error) {
    done(error)
  }
});

module.exports = localStrategy;
