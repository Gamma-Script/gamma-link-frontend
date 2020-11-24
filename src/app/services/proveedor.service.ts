import { Injectable } from '@angular/core';
import {proveedoresData} from '../models/prueba-proveedor-data'
import Swal from 'sweetalert2';
import { Proveedor } from '../models/proveedor';

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



//-------------------------------------------------
//metodo para añadir el nuevo proveedor a la DB
addProveedor( proveedor : Proveedor )
{
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
}


