const express = require("express");
/* const  Productos  = require("../../controller/metodosProductos");
const productos = new Productos */
const router = express.Router();

router.get("/", (req, res) => {
/* res.render('index',{listaDeProductos: true, productos:productos()}) */

});

router.get("/:productoId", (req, res) => {

});

router.post("/", (req, res) => {

});

router.put("/:productoId", (req, res) => {

});

router.delete("/:productoId", (req, res) => {
    
});


module.exports = router;