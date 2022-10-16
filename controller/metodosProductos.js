const { productos } = require("../model/productos");

class Productos {
  static lastProductoId = productos[productos.length - 1].id;

  constructor() {
    this.lista = productos;
  }

  getAll() {
    return this.lista;
  }

  getById(productoId) {
    return this.lista.find((producto) => producto.id === +productoId);
  }
  save(producto) {
    const { nombreProducto, price, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    if (!nombreProducto || !price || !imagen || !lanzamiento || !plataformas || !ordenConologico || !precio) {
      return null;
    }
    Productos.lastProductoId++;
    const newProducto = {
      id: Productos.lastProductoId,
      nombreProducto,
      imagen,
      plataformas,
      ordenConologico,
      precio,
    };
    this.lista.push(newProducto);
    return newProducto;
  }
  updateById(productoId, producto) {
    const productoIndex = this.lista.findIndex(
      (producto) => producto.id === +productoId
    );
    if (productoIndex < 0) return null;
    const { nombreProducto, price, imagen, lanzamiento, plataformas,ordenConologico, precio } = producto;
    const updateProducto = {
      id: this.lista[productoIndex].id,
      nombreProducto, 
      price, 
      imagen, 
      lanzamiento, 
      plataformas,
      ordenConologico, 
      precio,
    };
    this.lista[productoIndex] = updateProducto;
    return updateProducto;
  }

  deleteById(productoId) {
    const productoIndex = this.lista.findIndex(
      (producto) => producto.id === +productoId
    );
    if (productoIndex < 0) return null;
    return this.lista.splice(productoIndex, 1);
  }
}

module.exports = Productos;
