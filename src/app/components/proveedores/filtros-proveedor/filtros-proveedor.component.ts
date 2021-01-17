import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtros-proveedor',
  templateUrl: './filtros-proveedor.component.html',
  styleUrls: ['./filtros-proveedor.component.css']
})
export class FiltrosProveedorComponent implements OnInit {

  @Output() eventEmiterFiltros = new EventEmitter();
  rating = 0;
  deptoId = 0;

  constructor() { }

  ngOnInit(): void {
  }

  selected(){
    let valores = {
      "deptoId": this.deptoId,
      "rating":this.rating
    };
    this.eventEmiterFiltros.emit(valores);
  }  

  resetFiltro(){
    this.deptoId = 0;
    this.rating = 0;
    this.selected();
  }
}
