import { Categoria } from '../models/categorias';
import { Marca } from '../models/marca';

export class Producto {

    constructor(
        public name : string,
        public id : string,
        public marca : string,
        public categoria : string,
        /*
        public marca : Marca,
        public categoria : Categoria,
        */
        public descripcion : string,
        public precio : number,
        public imagen : string,
        public habilitado: boolean = true
    ){}

}
