export class Producto {

    constructor(
        public id : string,
        public nombre : string,
        public marca_id : number,
        public categoria_id : number,
        public descripcion : string,
        public precio : number,
        public imagen : string
    ){}

}
