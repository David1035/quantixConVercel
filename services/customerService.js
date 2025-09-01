const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');

class CustomerService {
  constructor() {

  }

  async create(data) {
    const hash = await  bcrypt.hash(myPassword, 10);
    const newdata = {
      ...data,
      user: {
        ...data.user,
        password: hash
      }
    }
    const customer = await models.Customer.create(newdata, {
      include: ['user']
    });
    //delete customer.dataValues.password
    return customer;
  }

  async find(){
    const rta = await models.Customer.findAll({
      include: ['user']
    });
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id, {
      include: ['user']
    });
    if(!customer){
      throw boom.notFound('Customer not found')
    }
    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const rta = await customer.update(changes);
    return rta;
  }

  async delete(id) {
    const rta = await this.findOne(id);
    await rta.destroy()
    return { id }
  }

}

module.exports = CustomerService;
