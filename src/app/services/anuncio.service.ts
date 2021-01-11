import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { anuncios } from '../components/anuncio/anuncio-list/anuncio-data';
import { Anuncio } from '../models/anuncio';

@Injectable({
  providedIn: 'any'
})
export class AnuncioService {


  constructor() { }
//---------------------------------------------------------------
  getsAnuncios():Anuncio[]
  {
    return anuncios;
  } 
 //---------------------------------------------------------------  
  getAnuncio(id: number):Anuncio
  {
  let i : number = 0;
  let bandera : number = 0;
  let idPrueba : number;
  let anuncio : Anuncio;  

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
