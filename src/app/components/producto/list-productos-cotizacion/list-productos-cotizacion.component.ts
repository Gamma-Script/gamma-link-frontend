import { Component, OnInit } from '@angular/core';
import { ProductoCotizado } from '../../../models/ProductoCotizado';
import { CotizacionService } from '../../../services/cotizacion.service';

@Component({
  selector: 'app-list-productos-cotizacion',
  templateUrl: './list-productos-cotizacion.component.html',
  styleUrls: ['./list-productos-cotizacion.component.css']
})
export class ListProductosCotizacionComponent implements OnInit {

  //atributos
  productoC: ProductoCotizado[] = this.serviceProdC.getProductosCotizacion();

  constructor(private serviceProdC: CotizacionService) { }

  ngOnInit(): void { }

  //metodo para verificar si hay productos en la lista de cotizacion o no
  isEmpty(): boolean {
    if (this.productoC.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}
