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
  proveedores: Proveedor[] = [];

  constructor(
    private proveedorService: ProveedorService
  ) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedoresRaiting(data) {
    if (data.rating == 0) this.getProveedores();
    else {
      this.proveedorService.getProveedoresPuntuacion(data.rating).subscribe({
        next: (proveedores) => this.proveedores = proveedores,
        error: (e) => console.log(e)
      });
    }
  }

  getProveedoresUbicacion(data) {
    if (data.deptoId == 0) this.getProveedores();
    else {
      this.proveedorService.getProveedoresUbicacion(data.deptoId).subscribe({
        next: (proveedores) => this.proveedores = proveedores,
        error: (e) => console.log(e)
      });
    }
  }

  getProveedores() {
    this.proveedorService.getProveedores().subscribe({
      next: (proveedores) => {
        this.proveedores = proveedores;
      },
      error: (e) => console.log(e)
    });
  }

  getProveedoresBusqueda(data) {
    if (data) {
      this.proveedorService.findProviders(data).subscribe({
        next: (proveedores) => this.proveedores = proveedores
      });
    }else{
      this.getProveedores();
    }
  }
}
