const express = require('express');
const UsersService = require('./../services/usersService');
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

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.status(200).json(user)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
