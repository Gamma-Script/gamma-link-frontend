import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-filtros-proveedor',
  templateUrl: './filtros-proveedor.component.html',
  styleUrls: ['./filtros-proveedor.component.css']
})
export class FiltrosProveedorComponent implements OnInit {

  @Output() eventEmiterFiltros = new EventEmitter();
  @Output() eventEmitUbicacion = new EventEmitter();
  @Output() eventEmiterBuscar = new EventEmitter<string>();
  deptos : Departamento[] = [];
  nombreBuscador: string = '';
  rating = 0;
  deptoId = 0;

  constructor(
    private ProveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.ProveedorService.getDeptos().subscribe({
      next: (deptos) => this.deptos = deptos
    });
  }

  selected(){
    let valores = {
      "deptoId": 0,
      "rating":this.rating
    };
    this.deptoId = 0;
    this.eventEmiterFiltros.emit(valores);
  } 

  selectedUbicacion(){
    let valores = {
      "deptoId": this.deptoId,
      "rating":0
    };
    this.rating = 0;
    this.eventEmitUbicacion.emit(valores);
  } 
  
  finder(){
    this.eventEmiterBuscar.emit(this.nombreBuscador);
  }

  resetFiltro(){
    this.deptoId = 0;
    this.rating = 0;
    this.nombreBuscador = '';
    this.selected();
  }
}
