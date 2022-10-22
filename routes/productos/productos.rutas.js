const express = require("express");
const Productos = require('../../controller/metodosProductos')
const router = express.Router();

const productos = new Productos

router.get("/", (req, res) => {
 res.send(productos.obtenerTodos()) 

});

router.get("/:productoId", (req, res) => {
    const {productoId} = req.params.productoId;
    console.log(req.params)
    res.send(productos.obtenerPorId(productoId))
    console.log(productoId)

res.send(productos.obtenerPorId())
});



router.post("/", (req, res) => {
    const producto = req.body;
    productos.guardar(producto)
    res.send(`producto recibido y guardado`)
});

router.put("/:productoId", (req, res) => {
    const producto = req.body;
    const {productoId} = req.params;
    productos.actualizar(productoId, producto)
    res.send(`producto actualizado`)

});

router.delete("/:productoId", (req, res) => {
    const {productoId} = req.params;
    productos.eliminar(productoId)
    res.send(`producto eliminado`)
});



module.exports = router;