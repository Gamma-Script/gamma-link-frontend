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

  getProducto(name : string) {
    // Falta
 }
}