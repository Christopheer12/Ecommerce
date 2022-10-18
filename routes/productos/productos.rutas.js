const express = require("express");
const Productos= require('../../controller/metodosProductos')
const router = express.Router();

const productos = new Productos

router.get("/", (req, res) => {
 res.send(productos.obtenerTodos()) 

});

router.get("/:productoId", (req, res) => {
res.send(productos.obtenerPorId())
});

router.post("/", (req, res) => {

});

router.put("/:productoId", (req, res) => {

});

router.delete("/:productoId", (req, res) => {
    res.send(productos.eliminarPorId())
});


module.exports = router;