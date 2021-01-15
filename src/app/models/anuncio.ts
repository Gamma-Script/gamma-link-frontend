import { Proveedor } from './proveedor';

export class Anuncio {
    
constructor(
    public id : number,
    public nombre : string,
    public descripcion : string,
    public imagen : string,
    public fecha_publicacion : string,
    public fecha_baja : string,
    public estado : number,
    public proveedor_id : number
)
{}

}
