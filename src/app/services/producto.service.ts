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

  getProductosByProvider(idProveedor):Observable<Producto[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Producto[]>(`${this.url}/proveedor/${idProveedor}`, { headers: headers });
  }

  getProductosByFilter(data):Observable<Producto[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Producto[]>(`${this.url}/filtrados/${data.marca}/${data.categoria}/${data.precio}`, { headers: headers });
  }

  getProducto(ident: string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Producto>(`${this.url}/${ident}`, { headers: headers });
  }

  getMarcas(): Observable<Marca[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Marca[]>(`${this.url}/marcas`, { headers: headers });
  }

  findProductsByName(nombre):Observable<Producto[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Producto[]>(`${this.url}/buscar/${nombre}`, { headers: headers });
  }

  addProducto(producto: Producto): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.post(`${this.url}`, producto, { headers: headers });
  }

  updateProducto(producto: Producto): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.put(`${this.url}/${producto.id}`, producto, { headers: headers });
  }

  deleteProducto(id) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.delete(`${this.url}/${id}`, { headers: headers });
  }
}