import express from 'express';
import routerApi from './routes/index.js';
import cors from 'cors';

import { logErrors, errorHandler, boomErrorHandler } from './middlewares/error.handler.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080', 'https://myapp.com'];
const option = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin){
      callback(null, true);
    }
    else{
      callback(new Error("No permitido"));
    }
  }
}
app.use(cors());

/*app.get("/", (req, res) =>{
  res.send("Hello world!")
});

app.get("/nueva-ruta", (req, res) =>{
  res.send("Nueva ruta!!!!!!!!!!!!")
});*/

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get("/products", (req, res) =>{
  res.json({
    name: "producto 1",
    price: 1000
  })
});

app.listen(port,() =>{
  console.log("Servidor corriendo en el puerto " + port);
});
