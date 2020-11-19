import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoContainerComponent } from '../app/components/producto/producto-container/producto-container.component';
import { CuentaContainerComponent } from './components/cuenta/cuenta-container/cuenta-container.component';
import { CuentaFormComponent } from './components/cuenta/cuenta-form/cuenta-form.component';
import { ListadoCategoriasComponent } from './components/categorias/listado-categorias/listado-categorias.component';
import { CotizacionContainerComponent } from './components/producto/cotizacion-container/cotizacion-container.component';

const routes: Routes = [
  {path: 'productos/cotizados' ,component: CotizacionContainerComponent},
{path : 'productos', component : ProductoContainerComponent},
{path: 'categorias', component : ListadoCategoriasComponent},
{path: 'content', component : CuentaContainerComponent
,
children: [{
  path: 'new', component: CuentaFormComponent
}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }