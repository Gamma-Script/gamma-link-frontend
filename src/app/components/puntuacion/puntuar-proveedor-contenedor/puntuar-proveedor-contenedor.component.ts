import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';
import { Puntuacion } from 'src/app/models/puntuacion';
import { Usuario } from 'src/app/models/usuario';
import { ProveedorService } from '../../../services/proveedor.service';
import { PuntuacionService } from '../../../services/puntuacion.service';

@Component({
  selector: 'app-puntuar-proveedor-contenedor',
  templateUrl: './puntuar-proveedor-contenedor.component.html',
  styleUrls: ['./puntuar-proveedor-contenedor.component.css']
})
export class PuntuarProveedorContenedorComponent implements OnInit {
  proveedor: Proveedor = new Proveedor(0,0,'','','', new Usuario(0,'','',0,'','',''));
  puntuaciones: Puntuacion[] = [];
  id = this.activateRoute.snapshot.paramMap.get("id");

  constructor(
    private proveedorService: ProveedorService,
    private puntuacionService: PuntuacionService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    
    this.getPuntuaciones();
    this.proveedorService.getProveedor(this.id).subscribe({
      next: (proveedor) => {
        this.proveedor = proveedor;
      }
    });
  }

  getPuntuaciones(data?) {
    this.puntuacionService.getPuntuaciones(this.id).subscribe({
      next: (puntuaciones) => {
        this.puntuaciones = puntuaciones;        
      }
    });
  }

}
