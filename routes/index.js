const express = require('express');
const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const customerRouter = require('./customerRoutes');
const categoryRouter = require('./categoryRoutes')


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customerRouter);
  router.use('/category', categoryRouter)

}


module.exports = routerApi;
