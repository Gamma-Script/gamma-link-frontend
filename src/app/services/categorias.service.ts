import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class CategoriasService {

  private url: string = `${urlBase}/proveedor/categorias`;

  constructor(
    private http : HttpClient
  ) { }

  getCategorias():Observable<Categoria[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    }); 

    return this.http.get<Categoria[]>(`${this.url}`,{ headers: headers});
  } 

  getCategoria(ident : string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Categoria>(`${this.url}/${ident}`,{ headers: headers});
 }
}
