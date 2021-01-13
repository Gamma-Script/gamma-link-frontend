import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { productos } from '../models/producto-data';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class ProductoService {

  private url: string = `${urlBase}/proveedor/productos`;
  
  constructor(
    private http : HttpClient
  ) { }

  getProductos():Observable<Producto[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto[]>(`${this.url}`,{ headers: headers});
  }

  getProducto(ident : string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto>(`${this.url}/${ident}`,{ headers: headers});
 }

 addProducto(producto: Producto):Observable<Producto> {
    return this.http.post<Producto>(`${this.url}`, producto); 
  }

//metodo para actualizar el producto
updateProducto(producto: Producto):Observable<Producto> {
  return this.http.put<Producto>(`${this.url}/${producto.id}`, producto);
}



  //-----------metodos del servicio de prueba------
 /* getProducto(id : string) : Producto{
    for(let producto of productos){
      if(producto.id == id){
        return producto;
      }
    }
    return null;
  }

  /*getProductos(): Producto[]{
    return productos;
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
  }*/

}