import express from 'express';
import ProductService from '/services/product.service.js'; //Importo el servicio
import validatorHandler from '/middlewares/validator.handler.js';
import {createProductSchema, updateProductSchema, getProductSchema} from '/schemas/product.schema.js'

const router = express.Router();
const service = new ProductService(); //Creo una instancia del servicio

router.get("/", async (req, res) =>{
  const products = await  service.find();
  res.json(products);
});

router.get("/filter", (req, res) =>{
  res.send("Yo soy un filter")
});

router.get("/:id",
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {  //: (dos puntos significa que es un parametro)
    try{
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch(error){
      next(error);
    }
});

router.post("/",
  validatorHandler(createProductSchema, 'body'),
  async (req, res) =>{
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json({newProduct});
});

router.patch('/:id',
  validatorHandler(getProductSchema, 'param'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) =>{
    try{
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch(error){
      next(error);
    }
});

router.delete('/:id', async (req, res) =>{
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta)
});

export default router;
