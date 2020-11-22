import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'any'
})
export class UsuarioService {

  constructor() { }

//-------------------------------------------------------
//metodo que muestra el error en caso de que las contraseñas sean diferentes
errorNew()
{
  console.log("son diferentes")
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Las contraseñas son diferentes',
    footer: '<a> debes de confirmar con la misma contraseña </a>'
  })
}
}




