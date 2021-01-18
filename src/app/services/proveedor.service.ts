import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Proveedor } from '../models/proveedor';
import { urlBase } from './global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Departamento } from '../models/departamento';

@Injectable({
  providedIn: 'any'
})
export class ProveedorService {

  private url: string = `${urlBase}/providers`;
  constructor(
    private http: HttpClient
  ) {

  }
  //servicios de prueba
  /////////////////////////////////////////////
  getProveedor(id): Observable<Proveedor> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Proveedor>(`${this.url}/${id}`, { headers: headers });
  }

  getProveedores(): Observable<Proveedor[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Proveedor[]>(`${this.url}`, { headers: headers });
  }

  getProveedoresPuntuacion(raiting): Observable<Proveedor[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Proveedor[]>(`${this.url}/buscar/puntuacion/${raiting}`, { headers: headers });
  }

  getDeptos(): Observable<Departamento[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Departamento[]>(`${this.url}/departamentos`, { headers: headers });
  }

  getProveedoresUbicacion(deptoId): Observable<Proveedor[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Proveedor[]>(`${this.url}/buscar/ubicacion/${deptoId}`, { headers: headers });
  }


  //-------------------------------------------------
  //metodo para añadir el nuevo proveedor a la DB
  addProveedor(proveedor: Proveedor) {
    console.log("La cuenta ha sido agregada");
    console.log(proveedor)

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'La cuenta proveedor ha sido creada con exito :3',
      showConfirmButton: false,
      timer: 1500
    })

  }

  findProviders(nombre): Observable<Proveedor[]> {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
    return this.http.get<Proveedor[]>(`${this.url}/buscar/${nombre}`, { headers: headers });
  }
}


