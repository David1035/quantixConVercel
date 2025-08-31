const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
const { or } = require('sequelize');

class OrderService {
	constructor() {
	}

	async create(data) {
		const newOrder = await models.Order.create(data);
		return newOrder;
	}

  async addItem (data) {
		const newItem = await models.OrderProduct.create(data);
		return newItem;
	}
	async find() {
    const order = await models.Order.findAll();
		return order;
	}


	async findOne(id) {
		const order = await models.Order.findByPk(id, {
			include: [
				{
					association: 'customer',
					include: ['user'],
				},
        'items' //Se agrega adicional para que nos traiga la relación
			],
		});
		return order;
	}

	async update(id, changes) {
		return {
			id,
			changes,
		};
	}

	async delete(id) {
		return { id };
	}
}

module.exports = OrderService;
