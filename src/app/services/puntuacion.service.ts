import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';
import {puntuacionData}  from '../models/prueba-puntuacion-data';
import { Puntuacion } from '../models/puntuacion';

@Injectable({
  providedIn: 'any'
})
export class PuntuacionService {

  constructor() { }
  //service de prueba
  ///////////////////////////////////////////////////////
  getPuntuaciones(proveedor:Proveedor):Puntuacion[]{
    //let array:Puntuacion[];

    //for(var puntuacion of puntuacionData){
      //if(proveedor==puntuacion.proveedor){
        //array.push(puntuacion)
      //}
    //return array;
    //}
    return puntuacionData;
  }
}