const express = require("express");
const Productos = require('../../controller/metodosProductos')
const router = express.Router();

const productos = new Productos

router.get("/", (req, res) => {
 res.send(productos.obtenerTodos()) 

});

router.get("/:productoId", (req, res) => {
    const id = req.params.productoId;

res.send(productos.obtenerPorId())
});

router.post("/", (req, res) => {
    const producto = req.body;
    productos.guardar(producto);
    console.log(`producto recibido y guardado`)
});

router.put("/:productoId", (req, res) => {

});

router.delete("/:productoId", (req, res) => {
    const id = req.params.productoId;
    productos.eliminarPorId(id);
});


module.exports = router;