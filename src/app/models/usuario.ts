export class Usuario {

    constructor(
        public id: number,
        public email: string,
        public pasword: string,
        public tipo: number,
        public nombre: string,
        public username: string,
        public apellido: string
    ) {}
}
