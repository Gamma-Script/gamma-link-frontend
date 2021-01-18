import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';
import { Puntuacion } from '../models/puntuacion';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class PuntuacionService {

  private url: string = `${urlBase}/providers`;
  constructor(
    private http: HttpClient
  ) { }
  //service de prueba
  ///////////////////////////////////////////////////////
  getPuntuaciones(idProveedor): Observable<Puntuacion[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Puntuacion[]>(`${this.url}/${idProveedor}/puntuaciones`, { headers: headers });
  }

  addComment(puntuacion: Puntuacion): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.post(`${this.url}/puntuaciones`,puntuacion, { headers: headers });
  }
}
