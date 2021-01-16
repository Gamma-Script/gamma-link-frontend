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
  private urlProveedor: string = `${urlBase}/providers`;

  constructor(
    private http: HttpClient
  ) { }

  getCategorias(): Observable<Categoria[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Categoria[]>(`${this.url}`, { headers: headers });
  }

  getCategoriasByProvider(idProveedor: number): Observable<Categoria[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Categoria[]>(`${this.urlProveedor}/${idProveedor}/categorias`, { headers: headers });
  }
  getCategoria(id: number) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Categoria>(`${this.url}/${id}`, { headers: headers });
  }

  deleteCategory(id): Observable<Categoria>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.delete<Categoria>(`${this.url}/${id}`, { headers: headers });
  }

  updateCategory(categoria:Categoria) {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.put<Categoria>(`${this.url}/${categoria.id}`,categoria, { headers: headers });
  }

  addCategory(categoria:Categoria){
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.post<Categoria>(`${this.url}`,categoria, { headers: headers });
  }

  findCategories(nombre):Observable<Categoria[]>{
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Categoria[]>(`${this.url}/buscar/${nombre}`, { headers: headers });
  }
}
