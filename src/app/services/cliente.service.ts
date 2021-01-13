import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Cliente } from '../models/Cliente';
import { urlBase } from './global';

@Injectable({
  providedIn: 'any'
})
export class ClienteService {

  private url: string = `${urlBase}/FALTA VALIDAR`;

  constructor(
  ) { }


//-------------------------------------------------
//metodo para añadir el nuevo cliente a la DB
addCliente( cliente : Cliente )
{
console.log("La cuenta ha sido agregada");
console.log(cliente)

Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'La cuenta cliente ha sido creada con exito :3',
  showConfirmButton: false,
  timer: 1500
})
}




}
