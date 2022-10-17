const express = require("express")
const PORT = process.env.PORT || 8080;
const app = express();
const fs = require('fs')
const { herramientaFechas } = require("./utils/herramientaFechas");
const noEncontrado = 404;
const { productos } = require("./model/productos");

//! rutas
//require = req --- response= res
app.get("/", (req, res) => {
  res.send(
    `biemvenido a la pagina, son las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`
  );
});
//!Middlewares (se ponen antes de las rutas)

app.use(express.json());


//!rutas
app.get("/productos", (req, res, next) => {
  console.log(req.query);
  const { precio = 9999 } = req.query;
  const precioNumero = +precio;
  const respuestaProductos = productos.filter(
    (producto) => producto.precio < precioNumero
  );
  res.json(respuestaProductos);
});
app.post("/productos", (req,res)=>{
  const{  nombreProducto, imagen, lanzamiento, plataformas, ordenConologico, precio}= req.body;
  const nuevoProducto = {
    id: productos.length +1,
    nombreProducto, 
    imagen, 
    lanzamiento, 
    plataformas, 
    ordenConologico, 
    precio
  }
  productos.push(nuevoProducto)
  fs.writeFileSync('./model/productos',JSON.stringify(productos,null,2))
  res.send("Juego recibido y procesado")
  res.json(nuevoProducto)
})

app.get("/carrito", (req, res) => {
  res.send("<h1>carrito</h1>");
});
app.get("/secret", (req, res) => {
  res.send("<h1>te dejo un genial y fabuloso 404.    Denada bebe</h1>");
});
app.get("*", (req, res) => {
  res.status(noEncontrado).send(`${noEncontrado} pagina no existe`);
});



//! listen

const connectedServer = app.listen(PORT, () => {
  console.log(`servidor activo en ${PORT}`);
  console.log(
    `se conecto un usuario al puerto ${PORT} a las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`
  );
});

connectedServer.on("error", (error) => {
  console.log(error.message);
});
