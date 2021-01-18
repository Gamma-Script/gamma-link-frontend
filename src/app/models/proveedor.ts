import { Usuario } from "./usuario";

export class Proveedor {

    constructor(
        public id: number,
        public user_id: number,
        public nombre: string,
        public imagen: string,
        public descripcion: string,
        public usuario?: Usuario
    ) {}
}
