import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-listado-proveedor',
  templateUrl: './listado-proveedor.component.html',
  styleUrls: ['./listado-proveedor.component.css']
})
export class ListadoProveedorComponent implements OnInit {

  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));
  proveedores: Proveedor[];

  constructor(
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedoresFiltro(data?) {
    if (data.deptoId == 0 && data.rating == 0) this.getProveedores();
    else {
      this.proveedorService.getProveedoresFiltro(data).subscribe({
        next: (proveedores) => this.proveedores = proveedores,
        error: (e) => console.log(e)
      });
    }
  }

  getProveedores() {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores) => this.proveedores = proveedores,
      error: (e) => console.log(e)
    });
  }
}
