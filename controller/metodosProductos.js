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
      plataformas,
      ordenConologico,
      precio,
    };
    this.lista.push(nuevoProducto);
fs.writeFileSync(path.join(__dirname,'../model/productos.json'), JSON.stringify(this.lista,null,2));
return nuevoProducto  
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
    const productoActualizados = this.lista.filter((producto)=> producto.id !==+productoId)
    this.lista = productoActualizados;
    fs.writeFileSync(path.join(__dirname,'../model/productoss.json'), JSON.stringify(this.lista,null,2));
    return this.lista;
  }
}

module.exports = Productos;
