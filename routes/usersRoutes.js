const express = require('express');
const UsersService = require('../services/userService');
const validatorHandler = require('./../middlewares/validatorHandler');
const { createUserSchema, getUserSchema, updateUserSchema } = require('./../schemas/userSchema');
const boom = require('@hapi/boom');

const service = new UsersService();
const router = express.Router();


router.get('/', async (req, res, next) => {
  try {
    const user = await service.find();
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
})

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error)
    }
  }
);

router.patch('/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateUser = await service.update(id, body);
      res.status(boom.badData()).json(updateUser)
    } catch (error) {
      next(error)
    }
  }
);

router.delete('/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userDelete = await service.delete(id);
      res.json(userDelete);
    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;
