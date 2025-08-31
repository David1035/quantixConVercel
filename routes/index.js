const express = require('express');
const productsRouter = require('./productsRoutes');
const usersRouter = require('./usersRoutes');
const customerRouter = require('./customerRoutes');
const categoryRouter = require('./categoryRoutes');
const ordersRouter = require('./orderRoutes');



function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)

  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customerRouter);
  router.use('/categories', categoryRouter);
  router.use('/orders', ordersRouter)

}


module.exports = routerApi;
