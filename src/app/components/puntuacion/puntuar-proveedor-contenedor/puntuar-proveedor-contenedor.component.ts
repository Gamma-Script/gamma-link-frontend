import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { Puntuacion } from 'src/app/models/puntuacion';
import {ProveedorService} from '../../../services/proveedor.service';
import {PuntuacionService} from '../../../services/puntuacion.service';

@Component({
  selector: 'app-puntuar-proveedor-contenedor',
  templateUrl: './puntuar-proveedor-contenedor.component.html',
  styleUrls: ['./puntuar-proveedor-contenedor.component.css']
})
export class PuntuarProveedorContenedorComponent implements OnInit {
  proveedorPadre:Proveedor;
  puntuaciones:Puntuacion[];

  constructor(private proveedorService:ProveedorService,private puntuacionService:PuntuacionService) {
    this.proveedorService.getProveedor(1);
    this.puntuaciones=this.puntuacionService.getPuntuaciones(this.proveedorPadre);
   }

  ngOnInit(): void {
  }

}
