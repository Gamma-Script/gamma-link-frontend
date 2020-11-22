import { Categorias } from '../../../models/categorias';
export let categorias : Categorias[];

categorias = [
    new Categorias("Tecnologia", "Articulos Tech", "assets/tecnologia.jpeg"),
    new Categorias("Belleza", "Productos de cuidado corporal", "assets/belleza.jpg"),
    new Categorias("Comida", "Tu comida favorita en un solo lugar", "assets/comida.jpg"),
    new Categorias("Automoviles", "Todo tipo de automotriz y repuestos", "assets/automoviles.jpg")
]