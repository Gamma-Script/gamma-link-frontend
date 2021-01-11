import { Injectable } from '@angular/core';
<<<<<<< HEAD
import Swal from 'sweetalert2';
import { anuncios } from '../components/anuncio/anuncio-list/anuncio-data';
=======
>>>>>>> 703008ff93848fc3729758bd66afb6582c75b5d2
import { Anuncio } from '../models/anuncio';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { urlBase } from './global';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'any'
})
export class AnuncioService {

<<<<<<< HEAD

  constructor() { }
//---------------------------------------------------------------
  getsAnuncios():Anuncio[]
=======
  private url: string = `${urlBase}/proveedor/anuncios`;

  constructor(
    private http : HttpClient
  ) { }

  getsAnuncios():Observable<Anuncio[]>
>>>>>>> 703008ff93848fc3729758bd66afb6582c75b5d2
  {
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });

    return this.http.get<Anuncio[]>(`${this.url}`,{ headers: headers});
  } 
 //---------------------------------------------------------------  
  getAnuncio(id: number):Anuncio
  {
  let i : number = 0;
  let bandera : number = 0;
  let idPrueba : number;
  let anuncio : Anuncio;  

<<<<<<< HEAD
    while(bandera == 0)
    {
      
      idPrueba = anuncios[i].idAnuncio;
      console.log(idPrueba);

      if(idPrueba == id)
      {
        anuncio = anuncios[i];
        bandera = 1;
      }
      else
      {
        i++;
      }
    }
    return anuncio;

  }
//---------------------------------------------------------------
  update(anuncio :Anuncio)
  {
    console.log("Se llego al servicio");
    for(var i = 0; i < anuncios.length; i++)
    {
      if(anuncio.idAnuncio == anuncios[i].idAnuncio)
      {
        anuncios[i] = anuncio
      }
    }
   
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'El anuncio ha sido actualizado correctamente :3',
      showConfirmButton: false,
      timer: 2000
    })

    console.log(this.getsAnuncios());
=======
  }

  deleteAnuncio(anuncio :Anuncio):Observable<any> {    
  
    let headers = new HttpHeaders({
      'Authorization': '',
      'Content-type': 'application/json'
    });
      
   // this.http.get<Producto[]>(`${this.url}`,{ headers: headers});
  
    return this.http.delete<Anuncio[]>(`${this.url}`,{ headers: headers})
    
>>>>>>> 703008ff93848fc3729758bd66afb6582c75b5d2
  }
//---------------------------------------------------------------
addAnuncio(anuncio: Anuncio)
{
  console.log("El anuncio ha sido agregado");
  console.log(anuncio)
  
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'El anuncio ha sido agregado correctamente :3',
    showConfirmButton: false,
    timer: 2000
  })
anuncios.push(anuncio);
}
//---------------------------------------------------------------
}
