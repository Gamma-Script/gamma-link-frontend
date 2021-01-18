import { Cliente } from './cliente';
import { Proveedor } from './proveedor';

export class Puntuacion {
    constructor(
        public id: number,
        public proveedor_id: number,
        public cliente_id: number,
        public comentario: string,
        public calificacion: number,
        public created_at?: string,
        public cliente?: Cliente
    ) {

    }
}
