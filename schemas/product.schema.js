import Joi from 'joi';

const id = Joi.string();//.guid() No puedo poner la funcion guid por que mis ids no cumplen con ese formato
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name : name.required(),
  price: price.required(),
  image: image.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price
});

const getProductSchema = Joi.object({
  id: id.required()
});

export {createProductSchema, updateProductSchema, getProductSchema};
