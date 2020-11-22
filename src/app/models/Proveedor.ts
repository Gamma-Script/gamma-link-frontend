import { Usuario } from './Usuario';

export class Proveedor {
constructor(
public id : string = "",
public  usuario : Usuario,
public nombreProveedor : String,
public descripcionProveedor : String = ""
)
{}

}
