import { Injectable } from '@angular/core';
import { Anuncio } from '../models/anuncio';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { urlBase } from './global';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class AnuncioService {

  private url: string = `${urlBase}/proveedor/anuncios`;

  constructor(
    private http : HttpClient
  ) { }

  getsAnuncios():Observable<Anuncio[]>
  {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Anuncio[]>(`${this.url}`,{ headers: headers});
  } 
   
  update(anuncio :Anuncio)
  {

  }

  deleteAnuncio(anuncio :Anuncio):Observable<any> {    
  
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
      
   // this.http.get<Producto[]>(`${this.url}`,{ headers: headers});
  
    return this.http.delete<Anuncio[]>(`${this.url}`,{ headers: headers})
    
  }
}
