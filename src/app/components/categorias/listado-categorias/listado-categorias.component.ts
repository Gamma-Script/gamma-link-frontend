import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';
import { CategoriasService } from '../../../services/categorias.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  categorias: Categoria[];
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
    console.log(this.categorias);
  }

}
