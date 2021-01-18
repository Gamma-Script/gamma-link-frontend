import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
import { Categoria } from 'src/app/models/categorias';
import { Marca } from 'src/app/models/marca';
import { CategoriasService } from 'src/app/services/categorias.service';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { Anuncio } from 'src/app/models/anuncio';
declare var jQuery: any;

@Component({
  selector: 'app-producto-container',
  templateUrl: './producto-container.component.html',
  styleUrls: ['./producto-container.component.css']
})
export class ProductoContainerComponent implements OnInit {

  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));
  nombreBuscador: string = '';
  productos: Producto[] = [];
  categorias : Categoria[] = [];
  marcas : Marca[] = [];
  isCliente: boolean;
  productoCrear = new Producto(0, '', 0, 0, '', 0, '');
  productoEditar: Producto = new Producto(0, '', 0, 0, '', 0, '');
  p: Producto;
  catFilter = 0;
  marcaFilter = 0;
  precioFilter = 0;
  anuncios: Anuncio[] = [];

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriasService,
    private anuncioService: AnuncioService
  ) { }


  ngOnInit(): void {
    this.getProductos();
    this.categoriaService.getCategorias().subscribe({
      next: (categorias) => this.categorias = categorias,
      error: (e) => console.log(e)
    });

    this.productoService.getMarcas().subscribe({
      next: (marcas) => this.marcas = marcas,
      error: (e) => console.log(e)
    });

    this.anuncioService.getAnuncios().subscribe({
      next: (anuncios) => this.anuncios = anuncios
    });
  }

  getProductos(data?) {
   if(this.proveedor){
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
    }
  }

  finder(){
    if (this.nombreBuscador!='') {
      this.productoService.findProductsByName(this.nombreBuscador).subscribe({
        next: (productos) => this.productos = productos
      });
    }else{
      this.getProductos();
    }
  }

  //metodo para pasar el producto
  pasar(prod: Producto): void {
    this.p = prod;
  }

  productosFilter(){
    let data = {
      'marca':this.marcaFilter,
      'categoria': this.catFilter,
      'precio': this.precioFilter
    };
    this.productoService.getProductosByFilter(data).subscribe({
      next: (productos) => this.productos = productos,
      error: (e) => console.log(e)
    });
  }

  editarProducto(producto) {
    this.productoEditar = producto;
  }

  deleteProducto(producto) {
    Swal.fire({
      title: 'Eliminar Categoria',
      text: `¿Esta seguro que desea eliminar la categoria ${producto.nombre}? Todos los productos asociados con ella tambien seran eliminados.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProducto(producto.id).subscribe({
          next: (data) => {
            this.getProductos();
          },
          error: (e) => console.log(e)
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El anuncio ha sido eliminado de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  resetFiltro(){
    this.precioFilter = 0;
    this.catFilter = 0;
    this.marcaFilter =0;
    this.getProductos();
  }
}
