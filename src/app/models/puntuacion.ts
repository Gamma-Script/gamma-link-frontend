import { ClienteRegistrado } from './cliente-registrado';
import { Proveedor } from './Proveedor';

export class Puntuacion {
constructor(public idPuntuacion:number,public proveedor:Proveedor, 
    public clienteRegistrado:ClienteRegistrado,public comentario:string,public calificacion:number
    ){

}
}