import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/puntuacion/formulario/formulario.component';
import { ListadoComentariosComponent } from './components/puntuacion/listado-comentarios/listado-comentarios.component';
import { PuntuarProveedorContenedorComponent } from './components/puntuacion/puntuar-proveedor-contenedor/puntuar-proveedor-contenedor.component';
import { ProductoContainerComponent } from '../app/components/producto/producto-container/producto-container.component';
import { CuentaContainerComponent } from './components/cuenta/cuenta-container/cuenta-container.component';
import { CuentaFormComponent } from './components/cuenta/cuenta-form/cuenta-form.component';
import { ListadoCategoriasComponent } from './components/categorias/listado-categorias/listado-categorias.component';
import { CotizacionContainerComponent } from './components/producto/cotizacion-container/cotizacion-container.component';
import { AnuncioContentComponent } from './components/anuncio/anuncio-content/anuncio-content.component';
import { AnuncioListComponent } from './components/anuncio/anuncio-list/anuncio-list.component';
import { AnuncioNewComponent } from './components/anuncio/anuncio-new/anuncio-new.component';
import { AnuncioEditComponent } from './components/anuncio/anuncio-edit/anuncio-edit.component';

const routes: Routes = [
  //para probar el caso de uso puntuar proveedor poner de un solo en la url   /puntuarProveedor
  {path: 'puntuarProveedor',component:PuntuarProveedorContenedorComponent,
  children:[{path:'',component:ListadoComentariosComponent},{path:'',component:FormularioComponent}]
  },
  {path: 'productos/cotizados' ,component: CotizacionContainerComponent},
  {path : 'productos', component : ProductoContainerComponent},
  {path: 'categorias', component : ListadoCategoriasComponent},
  {path: 'content', component : CuentaContainerComponent
  ,
  children: [{
    path: 'new', component: CuentaFormComponent
  }]
  },
  {path : 'anuncioContainer', component : AnuncioContentComponent,
  children:[
    {path : 'list', component : AnuncioListComponent},
     {path : 'new', component : AnuncioNewComponent},
    {path : 'edit', component : AnuncioEditComponent}
    ]
}

 // {path : '', pathMatch: 'full',redirectTo: 'puntuarProveedor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }