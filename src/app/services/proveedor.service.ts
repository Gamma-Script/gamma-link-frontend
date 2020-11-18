import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Proveedor } from '../models/Proveedor';

@Injectable({
  providedIn: 'any'
})
export class ProveedorService {

  constructor() { }


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


