const express = require("express");
const PORT = process.env.PORT || 8080;
const cors = require('cors')
const app = express();
const { herramientaFechas } = require("./utils/herramientaFechas");
const noEncontrado = 404;
const rutas = require('./routes/rutas')

app.use(cors())
//!Middlewares (se ponen antes de las rutas)

app.use(express.json());


//!rutas
app.use("/",rutas);

//require = req --- response= res
app.get("/", (req, res) => {
  res.send(
    `biemvenido a la pagina, son las ${herramientaFechas.hora} del dia ${herramientaFechas.fecha}`
  );
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
