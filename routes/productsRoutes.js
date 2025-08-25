const express = require('express');
const ProductService = require('./../services/productService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('./../schemas/productSchema')

const router = express.Router();
const service = new ProductService();



router.get('/', async (req, res, next) => {
  try {
    const product = await service.find();
    res.json(product);
  } catch (error) {
    next(error)
  }
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const productId = await service.findOne(id);
      res.json(productId)
    } catch (error) {
      next(error);
    }
  }
);


router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body;
      const product = await service.update(id, body)
      res.json(product)
    } catch (error) {
      next(error)
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) =>{
    try {
      const body = req.body;
      const product = await service.create(body);
    res.json(product)
    } catch (error) {
      next(error)
    }
  }
);



module.exports = router;
