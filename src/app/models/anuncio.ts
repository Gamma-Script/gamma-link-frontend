import { Proveedor } from './Proveedor';

export class Anuncio {
    
constructor(
    public idAnuncio : number,
    public nombre : string,
    public descripcion : string,
    public urlImagen : string,
    public fechaPublicacion : string,
    public fechaBaja : string,
    public estado : number,
    public proveedor : Proveedor
)
{}

}
