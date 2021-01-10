import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service'

@Component({
  selector: 'app-deshabilitar-categoria',
  templateUrl: './deshabilitar-categoria.component.html',
  styleUrls: ['./deshabilitar-categoria.component.css']
})
export class DeshabilitarCategoriaComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  categoriasService = CategoriasService;
  
}
