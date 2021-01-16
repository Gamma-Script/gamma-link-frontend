import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.css']
})
export class ListadoProveedorComponent implements OnInit {

  proveedor : Proveedor[];

  constructor(
    private proveedorService : ProveedorService
  ) { }

  ngOnInit(): void {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores) => {this.proveedor = proveedores; 
        console.log(this.proveedor);},
      error: (e) => console.log(e)
    });
    
  }

}
