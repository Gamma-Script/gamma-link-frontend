import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class CategoriasService {

  private url: string = `${urlBase}/categories`;

  constructor(
    private http : HttpClient
  ) { }

  getCategorias(id):Observable<Categoria[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    }); 

    return this.http.post<Categoria[]>(`${this.url}`,{ headers: headers});
  } 

  getCategoria(ident : string) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Categoria>(`${this.url}/${ident}`,{ headers: headers});
 }
}
