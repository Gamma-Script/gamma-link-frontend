import { from } from 'rxjs';
import { Puntuacion } from "./puntuacion";
import {clienteRegistradoData} from './prueba-cliente-registrado-data';
import {proveedoresData} from './prueba-proveedor-data';

export let puntuacionData:Puntuacion[];

puntuacionData=[
    new Puntuacion(1,proveedoresData[1],clienteRegistradoData[1],"Muy buen producto, excelente precio",5),
    new Puntuacion(2,proveedoresData[1],clienteRegistradoData[1],"Producto en buen estado",4),
    new Puntuacion(3,proveedoresData[1],clienteRegistradoData[1],"Muy buen producto, excelente precio",5),
    new Puntuacion(4,proveedoresData[1],clienteRegistradoData[1],"buen producto, puede mejorar",3)
];