const sequelize = require('./../lib/sequelize')

class UsersService{
  constructor(){

  }

  async create(data){

  }

  async find() {
    const query = 'SELECT * FROM tasks'
    const [ data, metadata ] = await sequelize.query(query);
    return  data;
  }

  async findOne(id) {
    const data = 'SELECT * FROM tasks WHERE id = $1'
    const rta = await this.pool.query(data,[id])
    return rta.rows[0];
  }

  async update(id, data) {

  }

  async delete(id) {

  }
}

module.exports = UsersService;
