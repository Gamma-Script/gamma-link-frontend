import { Categoria } from "./categorias";
import { Marca } from "./marca";

export class Producto {

    constructor(
        public id : number,
        public nombre : string,
        public marca_id : number,
        public categoria_id : number,
        public descripcion : string,
        public precio : number,
        public imagen : string,
        public categoria? : Categoria,
        public marca?: Marca
    ){}

}
