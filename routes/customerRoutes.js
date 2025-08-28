const express = require('express');
const CustomerService = require('./../services/customerService')
const validatorHandler = require('./../middlewares/validatorHandler');
const { createCustomerSchema, updateCustomerSchema, getCustomerSchema } = require('./../schemas/customerSchema')

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const data = await service.find();
    res.json(data)
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      console.log(body)
      const createCustomer = await service.create(body);
      res.json(createCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const customer = await service.update(id, body);
      res.json(customer)
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteCustumer = await service.delete(id);
      res.json(deleteCustumer);
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
