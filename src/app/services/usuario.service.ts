import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class UsuarioService {

  private url: string = `${urlBase}/user`;
  private token: string = '';

  constructor(
    private http: HttpClient
  ) { }

  //-------------------------------------------------------
  //metodo que muestra el error en caso de que las contraseñas sean diferentes
  errorNew() {
    console.log("son diferentes")
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Las contraseñas son diferentes',
      footer: '<a> debes de confirmar con la misma contraseña </a>'
    })
  }

  getUser(email): Observable<any>{
    let headers = new HttpHeaders({
      'Authorization': `${this.token}`,
      'Content-type': 'application/json'
    });

    return this.http.get(`${this.url}/${email}`, { headers: headers }).pipe(
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
}




