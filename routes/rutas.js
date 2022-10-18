const express = require('express');
const productosRutas = require('./productos/productos.rutas');
const carritoRutas = require('./carrito/carrito.rutas');

//!ruta precipal
const router = express.Router();

router.use('/productos',productosRutas);
 router.use('/carrito', carritoRutas); 



module.exports = router;