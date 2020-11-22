import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import {proveedoresData} from '../models/prueba-proveedor-data'

@Injectable({
  providedIn: 'any'
})
export class ProveedorService {

  constructor() {

   }
   //servicios de prueba
   /////////////////////////////////////////////
   getProveedor(id :number):Proveedor{
    for(var proveedor of proveedoresData){
      if(proveedor.idProveedor==id){
        return proveedor;
      }
    }
   }

}
