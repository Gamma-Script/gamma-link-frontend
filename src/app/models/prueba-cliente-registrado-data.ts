import { from } from 'rxjs';
import { ClienteRegistrado } from './cliente-registrado';
import{usuariosData}from './prueba-usuario-data';
export let clienteRegistradoData :ClienteRegistrado[];

clienteRegistradoData=[
 new ClienteRegistrado(0,usuariosData[0],"Roberto","Carlos"),
 new ClienteRegistrado(1,usuariosData[1],"Juan","Chepe")
];