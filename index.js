const express = require('express');
const app = express();
const port=3000;

app.get("/", (req, res) =>{
  res.send("Hello world!")
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Nueva ruta!!!!!!!!!!!!")
});

app.get("/products", (req, res) =>{
  res.json({
    name: "producto 1",
    price: 1000
  })
});

app.listen(port,() =>{
  console.log("Servidor corriendo en el puerto " + port);
});
