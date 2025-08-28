const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CustomerService {
  constructor() {

  }

  async create(data) {
    console.log('data service')
    const customer = await models.Customer.create(data);
    return customer;
  }

  async find(){
    const rta = await models.Customer.findAll();
    return rta;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
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
