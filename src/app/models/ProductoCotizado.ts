import { Producto } from './producto';

export class ProductoCotizado{

    public producto: Producto; 
    public cantidad: number;
    public precioTotal: number;

    constructor(proc: Producto, cant: number){
        this.producto = proc;
        this.cantidad = cant;
        this.precioTotal = this.cantidad * this.producto.precio;
    }
}