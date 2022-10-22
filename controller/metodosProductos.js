const fs = require('fs')
const path = require('path')

const  productos  = require("../model/productos.json");

class Productos {

  constructor() {
    this.lista = productos;
  }

  obtenerTodos() {
    return this.lista;
  }

  obtenerPorId(productoId) {
    return this.lista.filter((producto) => producto.id === +productoId);
  }
  guardar(producto) {
    const { nombreProducto, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    if (!nombreProducto || !imagen || !lanzamiento || !plataformas || !ordenConologico || !precio) {
      return null;
    }
  
    const nuevoProducto = {
      id: this.lista.length+1,
      nombreProducto,
      imagen,
      lanzamiento,
      plataformas,
      ordenConologico,
      precio,
    };
    this.lista.push(nuevoProducto);
fs.writeFileSync(path.join(__dirname,'../model/productos.json'), JSON.stringify(this.lista,null,2));
return nuevoProducto  
}


  actualizar (productoId, producto) {
    const { nombreProducto, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    if (!nombreProducto || !imagen || !lanzamiento || !plataformas || !ordenConologico || !precio) {
      return null;
    }
    const productoActualizado = {
      id: productoId,
      nombreProducto,
      imagen,
      lanzamiento,
      plataformas,
      ordenConologico,
      precio,
    };
    const indice = this.lista.findIndex((producto) => producto.id === +productoId);
    this.lista[indice] = productoActualizado;
    fs.writeFileSync(path.join(__dirname,'../model/productos.json'), JSON.stringify(this.lista,null,2));
    return productoActualizado;
  } 




  eliminar (productoId) {
    // eliminar con filter
    this.lista = this.lista.filter((producto) => producto.id !== +productoId);
    fs.writeFileSync(path.join(__dirname,'../model/productos.json'), JSON.stringify(this.lista,null,2));
    return this.lista;
  }
}

module.exports = Productos;
