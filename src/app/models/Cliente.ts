import { Usuario } from './usuario';

export class Cliente {
    constructor(
        public id: number, 
        public usuario_id: number,
        public usuario?: Usuario
         
    ) { }

}
