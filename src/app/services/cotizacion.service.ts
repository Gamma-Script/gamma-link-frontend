import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosCotizados } from '../models/ProductosCotizados';
import { ProductoCotizado } from '../models/ProductoCotizado';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor() { }

  //metodo para agregar el producto a la lista de cotizacion
  addProductoCotizacion(producto: Producto, cantidad: number){
    let prodC: ProductoCotizado = new ProductoCotizado(producto, cantidad);
    for(let pc of this.getProductosCotizacion()){
      if(pc.producto.id === producto.id){
        pc.cantidad += cantidad;
        pc.precioTotal += cantidad * producto.precio;
        return; 
    }
  }
    ProductosCotizados.push(prodC);
    return;
}

  //metodo para obtener la lista de productos cotizados
  getProductosCotizacion(){
    return ProductosCotizados;
  }
}
