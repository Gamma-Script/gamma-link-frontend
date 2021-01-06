import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../../services/producto.service';
import { Router } from '@angular/router';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-gestionar-productos-container',
  templateUrl: './gestionar-productos-container.component.html',
  styleUrls: ['./gestionar-productos-container.component.css']
})
export class GestionarProductosContainerComponent implements OnInit {
  
  products: Producto[];

  constructor(private router: Router, private pService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  addProducto(){
   this.router.navigate(["agregar-producto"]);
  }

  getProductos(){
    this.pService.getProductos().subscribe(
      productos => {
        this.products = productos;
        console.log(this.products);
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }
}
