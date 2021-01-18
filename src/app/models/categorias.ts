export class Categoria {

    constructor(
        public id: number,
        public categoria_padre_id: number,
        public nombre: string,
        public descripcion: string,
        public imagen: string,
        public proveedor_id: number
    ) {}
}
