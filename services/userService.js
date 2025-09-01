const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const passport = require('passport');

class UserService{
  constructor(){

  }

  async create(data){
    const hash = await  bcrypt.hash(data.password, 10);
    const rta = await models.User.create({
      ...data,
      password: hash
    });
    delete rta.dataValues.password; // eliminar el passwd de la respuesta
    return rta;
  }

  async find() {
    const rta = await models.User.findAll({
      include: 'customer'
    }) // trae todos los datos que tengamos en nuestra base de datos
    return  rta;
  }
  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: { email }
    })
    return  rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id, {
      include: 'customer'
    });
    if(!user) {
      throw boom.notFound('User not found - no encontrado')
    }
    return user;
  }

  async update(id, data) {
    const user = await this.findOne(id);
    const rta = await user.update(data);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id }
  }
}

module.exports = UserService;
