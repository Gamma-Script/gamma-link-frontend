import { Component, Input, OnInit } from '@angular/core';
import { Puntuacion } from 'src/app/models/puntuacion';
///////para pruebas se borrara despues///////////////////////////////////
import { Proveedor } from 'src/app/models/Proveedor';
import { PuntuacionService } from 'src/app/services/puntuacion.service';
/////////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-listado-comentarios',
  templateUrl: './listado-comentarios.component.html',
  styleUrls: ['./listado-comentarios.component.css']
})
export class ListadoComentariosComponent implements OnInit {
  @Input() comentarios:Puntuacion[];
  comentarios2:Puntuacion[];
  constructor(/*Tambien se borrara ->*/private puntuacionService:PuntuacionService/*<-*/) { 
  }

  ngOnInit(): void {
    this.comentarios2=this.puntuacionService.getPuntuaciones(new Proveedor(1,1,"Nike","url","zapatos"));
  }

}
