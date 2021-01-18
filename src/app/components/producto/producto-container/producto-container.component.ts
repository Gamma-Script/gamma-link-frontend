import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-container',
  templateUrl: './producto-container.component.html',
  styleUrls: ['./producto-container.component.css']
})
export class ProductoContainerComponent implements OnInit {

  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));
  productos: Producto[] = [];
  isCliente: boolean;
  productoEditar: Producto = new Producto(0, '', 0, 0, '', 0, '');
  p: Producto;

  constructor(
    private productoService: ProductoService
  ) { }


  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(data?) {
    this.productoService.getProductos().subscribe(
      productos => {
        this.productos = productos;
      },
      (error: any) => {
        console.log(error);
      }
    );
    /*if(this.proveedor){
      this.productoService.getProductosByProvider(this.proveedor.id).subscribe({
        next: (productos) => this.productos = productos,
        error: (e) => console.log(e)
      });
    }else{
      this.productoService.getProductos().subscribe(
        productos => {
          this.productos = productos;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }*/
  }

  //metodo para pasar el producto
  pasar(prod: Producto): void {
    this.p = prod;
  }

  editarProducto(producto) {
    console.log(producto);
    this.productoEditar = producto;
  }
}
