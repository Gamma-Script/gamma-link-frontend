import { Usuario } from './usuario';

export class ClienteRegistrado {
    constructor(
        public idClienteRegistrado: number, 
        public usuario: Usuario, 
        public nombres: string,
        public apellidos: string
    ) {

    }
}
