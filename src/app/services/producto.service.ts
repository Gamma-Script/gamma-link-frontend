import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class ProductoService {

  private url: string = `${urlBase}/products`;

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

  getProducto(ident: string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto>(`${this.url}/${ident}`, { headers: headers });
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.url}`, producto);
  }

  //metodo para actualizar el producto
  updateProducto(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.url}/${producto.id}`, producto);
  }

}