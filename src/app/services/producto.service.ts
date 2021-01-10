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

 addProducto(producto: Producto):Observable<any> {
    return this.http.post<any>(`${this.url}`, producto); 
  }

//metodo para actualizar el producto
updateProducto(producto: Producto):Observable<any> {
  return this.http.put<any>(`${this.url}`, producto);
}


deleteAnuncio(producto: Producto):Observable<any> {    
  
  // Es obligatorio utilizar el header Content-Type: application/json, los compañeros del backend asi lo reciben
  let headers = new HttpHeaders({
    'Authorization': '',
    'Content-type': 'application/json'
  });
    
 // this.http.get<Producto[]>(`${this.url}`,{ headers: headers});

  return this.http.delete<Producto[]>(`${this.url}`,{ headers: headers})
  
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