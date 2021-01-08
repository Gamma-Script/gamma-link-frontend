import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { anuncios } from '../components/anuncio/anuncio-list/anuncio-data';
import { Anuncio } from '../models/anuncio';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor() { }

  getsAnuncios():Anuncio[]
  {
    return anuncios;
  } 
   
  update(anuncio :Anuncio)
  {

    for(var i = 0; i < anuncios.length; i++)
    {
      if(anuncio.idAnuncio == anuncios[i].idAnuncio)
      {
        anuncios[i] = anuncio
      }
    }

   console.log(anuncio) 
  }

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



}
