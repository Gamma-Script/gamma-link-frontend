import { Component, OnInit } from '@angular/core';

import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';
import {Input} from '@angular/core';

@Component({
  selector: 'app-deshabilitar-producto',
  templateUrl: './deshabilitar-producto.component.html',
  styleUrls: ['./deshabilitar-producto.component.css']
})
export class DeshabilitarProductoComponent implements OnInit {
 
  constructor(private ps: ProductoService) { }
  
  @Input() producto;

  ngOnInit(): void {
    
  }

  /**
  deshabilitarProducto(){
    this.ps.getProducto(this.producto.id).habilitado = false;
    this.onSuccess();
}
 */
onSuccess(){
    Swal.fire({
        position: 'center',
        title: 'Deshabilitar',
        text: `El producto ${this.producto.name} se ha deshabilitado correctamente`,
        icon: 'success',
        showConfirmButton: true
    })
}

}
