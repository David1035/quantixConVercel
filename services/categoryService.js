const { models } = require('./../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {
  constructor() {
    // Aquí podrías inyectar dependencias si fuera necesario
  }

  async create(data) {
    const category = await models.Category.create(data);
    return category;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      include: 'products'
    });
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updated = await category.update(changes);
    return updated;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoryService;
