import { Component, OnInit } from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deshabilitar-producto',
  templateUrl: './deshabilitar-producto.component.html',
  styleUrls: ['./deshabilitar-producto.component.css']
})
export class DeshabilitarProductoComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  deshabilitarProducto(){
    
  }

}
