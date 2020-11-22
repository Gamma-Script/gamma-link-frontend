import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/puntuacion/formulario/formulario.component';
import { ListadoComentariosComponent } from './components/puntuacion/listado-comentarios/listado-comentarios.component';
import { PuntuarProveedorContenedorComponent } from './components/puntuacion/puntuar-proveedor-contenedor/puntuar-proveedor-contenedor.component';


const routes: Routes = [
  {path: 'puntuarProveedor',component:PuntuarProveedorContenedorComponent,
  children:[{path:'',component:ListadoComentariosComponent},{path:'',component:FormularioComponent}]
  },
 // {path : '', pathMatch: 'full',redirectTo: 'puntuarProveedor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
