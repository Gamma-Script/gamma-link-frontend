import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { CategoriasService } from '../../../services/categorias.service'

@Component({
  selector: 'app-listado-categorias',
  templateUrl: './listado-categorias.component.html',
  styleUrls: ['./listado-categorias.component.css']
})
export class ListadoCategoriasComponent implements OnInit {

  categorias : Categorias[];

  constructor(
    private categoriasService : CategoriasService
  ) { }

  ngOnInit(): void {
    this.categorias = this.categoriasService.getCategorias();
    console.log(this.categorias);
  }

}
