import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { productos } from '../models/producto-data';

@Injectable({
  providedIn: 'any'
})
export class ProductoService {

  constructor() { }
  
  getProductos():Producto[]{
    return productos;
  }

  getProducto(id : string) : Producto{
    for(let producto of productos){
      if(producto.id == id){
        return producto;
      }
    }
    return null;
  }

  //metodo para agregar un nuevo producto
  addProducto(producto: Producto){
    productos.push(producto);
    return;
  }

  //metodo para actualizar el producto
  updateProducto(producto: Producto){
    let p: Producto[] = this.getProductos();
    p[p.indexOf(this.getProducto(producto.id))] = producto;
  }
}