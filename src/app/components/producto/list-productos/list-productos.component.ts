import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../models/producto';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  @Input() productos: Producto[];
  producto: Producto;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //Metodo para editar un producto
  edithProducto(producto: Producto){
    localStorage.setItem("id", producto.id.toString());
    this.router.navigate(["editar-producto"]);
  }

  pasar(producto: Producto){
    this.producto = producto;
  }
}
