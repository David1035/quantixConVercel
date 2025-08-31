const Joi = require('joi');
const { joinSQLFragments } = require('sequelize/lib/utils/join-sql-fragments');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer();
const description = Joi.string();
const image = Joi.string().uri();
const categoryId = Joi.number().integer();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  description: description,
  categoryId: categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit: limit,
  offset: offset
})

module.exports = { createProductSchema, updateProductSchema, getProductSchema, queryProductSchema }
