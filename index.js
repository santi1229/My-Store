//const express = require('express');
import express from 'express';
//const { faker } = require('@faker-js/faker');
import { faker } from '@faker-js/faker';
const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.send("Hello world!")
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Nueva ruta!!!!!!!!!!!!")
});

app.get("/products", (req, res) =>{
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url()
    });

  }
  res.json(products);
});

app.get("/products/filter", (req, res) =>{
  res.send("Yo soy un filter")
});

app.get("/products/:id", (req, res) => {  //: (dos puntos significa que es un parametro)
  const { id } = req.params;
  res.json({
      id,
      name: "producto 2",
      price: 2000
    });
});

app.get("/users", (req, res) => {
  const { limit, offset }= req.query;
    if (limit && offset){
      res.json({
        limit,
        offset
      });
    }
    else {
      res.send("No hay parametros");
    }
  }
);

app.get("/categories/:categoryId/products/:productId", (req, res) =>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  })
})

app.listen(port,() =>{
  console.log("Servidor corriendo en el puerto " + port);
});
