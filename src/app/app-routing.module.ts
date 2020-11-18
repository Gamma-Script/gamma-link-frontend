import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCategoriasComponent } from './components/categorias/listado-categorias/listado-categorias.component';

const routes: Routes = [
  {path: 'categorias', component : ListadoCategoriasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
