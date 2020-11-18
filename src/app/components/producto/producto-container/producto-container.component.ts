import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-container',
  templateUrl: './producto-container.component.html',
  styleUrls: ['./producto-container.component.css']
})
export class ProductoContainerComponent implements OnInit {

  productos : Producto[];
  isCliente : boolean;
  constructor(
    private productoService : ProductoService
  ) { }

    
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productos = this.productoService.getProductos();
  }








  
/*
  deleteContainer(value:any){
    console.log("Container data: "+value);
    this.productService.deleteProduct(value);
  }

  addContainer(data:Product){
    this.productService.addProduct(data);
    console.log(data);
  }
*/
}
