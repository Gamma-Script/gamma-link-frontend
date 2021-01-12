import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categorias';
import { CategoriasService } from '../../../services/categorias.service'

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  categorias : Categoria[];

  constructor(
    private categoriasService : CategoriasService
  ) { }

  ngOnInit(): void {
    this.categoriasService.getCategorias(1).subscribe(
      categorias => {
        this.categorias = categorias;
        console.log(categorias)
      },
      (error : any) =>{
        console.log(error);
      }
      
    );
    console.log(this.categorias);
  }

}
