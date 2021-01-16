import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';
import { CategoriasService } from '../../../services/categorias.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  categorias: Categoria[];
  nombreBuscador: string = '';
  categoria: Categoria = new Categoria(0, null, '', '', '', 0);

  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));

  constructor(
    private categoriasService: CategoriasService,
    private modal: NgbModal
  ) { }

  editarCategoria(categoria: Categoria) {
    this.categoriasService.getCategoria(categoria.id).subscribe({
      next: (categoria) => {
        this.categoria = categoria;
      },
      error: (e) => console.log(e)
    });
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  finder() {
    if (this.nombreBuscador != '') {
      this.categoriasService.findCategories(this.nombreBuscador).subscribe({
        next: (categorias) => {
          this.categorias = categorias;
        }
      });
    } else {
      this.getCategorias();
    }
  }


  getCategorias(data?) {
    if (this.proveedor) {
      this.categoriasService.getCategoriasByProvider(this.proveedor.id).subscribe(
        categorias => {
          this.categorias = categorias;
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.categoriasService.getCategorias().subscribe(
        categorias => {
          this.categorias = categorias;
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }

  delete(categoria) {
    Swal.fire({
      title: 'Eliminar Categoria',
      text: `¿Esta seguro que desea eliminar la categoria ${categoria.nombre}? Todos los productos asociados con ella tambien seran eliminados.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categoriasService.deleteCategory(categoria.id).subscribe({
          next: (data) => {
            this.getCategorias(this.proveedor.id);
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
}
