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

  getProducto(name : string) : Producto{

    for(let producto of productos){
      if(producto.name == name){
        return producto;
      }
    }

 }
}