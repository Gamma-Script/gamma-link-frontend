import { Proveedor } from '../../../models/proveedor';
export let proveedores : Proveedor[];

proveedores = [
    new Proveedor(1, 1, "Pizza Hut", "", "Pizzeria a nivel mundial"),
    new Proveedor(2, 2, "Nike", "", "Marca de zapatos"),
    new Proveedor(3, 3, "Adidas", "", "Marca de zapatos"),
    new Proveedor(4, 4, "Nintendo", "", "Los mejores videojuegos")
]