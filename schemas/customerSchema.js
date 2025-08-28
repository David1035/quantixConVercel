const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const phone = Joi.string().min(10);
const address = Joi.string();
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email: email.required(),
  phone: phone.required(),
  address: address.required(),
  userId: userId.required(),
})

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  email: email,
  phone: phone,
  address: address,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required()
})

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
