import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';
import { Producto } from '../models/producto';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class ProductoService {

  //private url: string = `${urlBase}/products`;
  private url: string = `http://localhost:8000/api/productos`;


  constructor(
    private http: HttpClient
  ) { }

  getProductos(): Observable<Producto[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto[]>(`${this.url}`, { headers: headers });
  }

  getProductosByProvider(idProveedor){
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Producto[]>(`${this.url}/proveedor/${idProveedor}`, { headers: headers });
  }

  getProducto(ident: string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto>(`${this.url}/${ident}`, { headers: headers });
  }

  getMarcas():Observable<Marca[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Marca[]>(`${this.url}/marcas`, { headers: headers });
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.url}`, producto);
  }

  //metodo para actualizar el producto
  updateProducto(producto: Producto): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.put(`${this.url}/${producto.id}`, producto, {headers:headers});
  }

}