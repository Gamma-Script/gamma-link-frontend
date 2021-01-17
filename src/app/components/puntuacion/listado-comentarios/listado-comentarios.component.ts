import { Component, Input, OnInit } from '@angular/core';
import { Puntuacion } from 'src/app/models/puntuacion';
///////para pruebas se borrara despues///////////////////////////////////
import { Proveedor } from 'src/app/models/proveedor';
import { PuntuacionService } from 'src/app/services/puntuacion.service';
import { ActivatedRoute } from '@angular/router';
/////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.css']
})
export class ListadoComentariosComponent implements OnInit {
  @Input() puntuaciones: Puntuacion[];

  constructor(
    private puntuacionService: PuntuacionService,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    
  }

}
