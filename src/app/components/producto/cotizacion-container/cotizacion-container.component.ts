import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-cotizacion-container',
  templateUrl: './cotizacion-container.component.html',
  styleUrls: ['./cotizacion-container.component.css']
})
export class CotizacionContainerComponent implements OnInit {

  @Input() product: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
