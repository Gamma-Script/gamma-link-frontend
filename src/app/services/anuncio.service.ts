import { Injectable } from '@angular/core';
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
}
