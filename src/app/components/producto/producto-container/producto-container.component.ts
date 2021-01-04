import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-container',
  templateUrl: './producto-container.component.html',
  styleUrls: ['./producto-container.component.css']
})
export class ProductoContainerComponent implements OnInit {

  productos: Producto[];
  isCliente: boolean;
  p: Producto = null;

  constructor(
    private productoService : ProductoService
  ) { }

    
  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.getProductos().subscribe(
      productos => {
        this.productos = productos;
        console.log(this.productos);
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }

  //metodo para pasar el producto
  pasar(prod: Producto): void{
    this.p = prod;
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
