const fs = require('fs')
const path = require('path')


const  productos  = require("../model/productos");

class Productos {

  constructor() {
    this.lista = productos;
  }

  obtenerTodos() {
    return this.lista;
  }

  obtenerPorId(productoId) {
    return this.lista.find((producto) => producto.id === +productoId);
  }
  guardar(producto) {
    const { nombreProducto, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    if (!nombreProducto || !imagen || !lanzamiento || !plataformas || !ordenConologico || !precio) {
      return null;
    }
    Productos.ultimoProductoId++;
    const nuevoProducto = {
      id: Productos.ultimoProductoId,
      nombreProducto,
      imagen,
      plataformas,
      ordenConologico,
      precio,
    };
    this.lista.push(nuevoProducto);
    /* fs.writeFileSync('./model/productos'(productos,null,2)) */
    return nuevoProducto;
  }


  actualizarPorId(productoId, producto) {
    const productoIndex = this.lista.findIndex(
      (producto) => producto.id === +productoId
    );
    if (productoIndex < 0) return null;
    const { nombreProducto, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    const actualizarProducto = {
      id: this.lista[productoIndex].id,
      nombreProducto, 
      imagen, 
      lanzamiento, 
      plataformas,
      ordenConologico, 
      precio,
    };
    this.lista[productoIndex] = actualizarProducto;
    return actualizarProducto;
  }

  eliminarPorId(productoId) {
    const productoIndex = this.lista.findIndex(
      (producto) => producto.id === +productoId
    );
    if (productoIndex < 0) return null;
    return this.lista.splice(productoIndex, 1);
  }
}

module.exports = Productos;
