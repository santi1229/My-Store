import express from 'express';

import productsRouter from "/routes/products.router.js";
import usersRouter from "/routes/users.router.js";
import categoriesRouter from "/routes/categories.router.js";


function routerApi(app){
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

export default routerApi;
