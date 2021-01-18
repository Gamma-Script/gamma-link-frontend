import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Anuncio } from '../models/anuncio';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBase } from './global';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'any'
})
export class AnuncioService {

  //---------------------------------------------------------------
  private url: string = `${urlBase}/providers/anuncios`;
  private urlProveedor: string = `${urlBase}/provider/anuncios`
  private token: string = '';

  constructor(
    private http: HttpClient
  ) { }

  getAnuncios(idProveedor?): Observable<Anuncio[]> {
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    if(idProveedor)return this.http.get<Anuncio[]>(`${this.urlProveedor}/${idProveedor}/anuncios`, { headers: headers });

    return this.http.get<Anuncio[]>(`${this.url}`, { headers: headers });
    
  }

  //---------------------------------------------------------------  
  getAnuncio(id: number): Observable<Anuncio> {
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.get<Anuncio>(`${this.url}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );
  }
  //---------------------------------------------------------------
  updateAnuncio(anuncio: Anuncio) {
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.put<Anuncio>(`${this.url}/${anuncio.id}`, anuncio,{ headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );
  }

  deleteAnuncio(id: number): Observable<any> {

    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.delete(`${this.url}/${id}`, { headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );

  }
  //---------------------------------------------------------------
  addAnuncio(anuncio: Anuncio): Observable<any> {

    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.post(`${this.url}`, anuncio, { headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );
  }

  subidaAnuncio(id){
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.put(`${this.url}/${id}/subida`, { headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );
  }

  bajadaAnuncio(id){
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.put(`${this.url}/${id}/baja`, { headers: headers }).pipe(
      catchError(e => {
        Swal.fire({
          icon: 'error',
          title: 'Ooops',
          text: 'A ocurrido un error. Estamos intentando resolverlo.'
        });
        return throwError(e);
      })
    );
  }
  //---------------------------------------------------------------
}
