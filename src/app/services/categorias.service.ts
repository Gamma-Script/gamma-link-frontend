import { Injectable } from '@angular/core';
import { Categorias } from '../models/categorias';
import { categorias } from '../components/categorias/listado-categorias/categorias-data';

@Injectable({
  providedIn: 'any'
})
export class CategoriasService {

  constructor() { }

  getCategorias():Categorias[]{
    return categorias;
  } 
}
