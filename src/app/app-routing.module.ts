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
import { GestionarProductosContainerComponent } from './components/producto/gestionar-productos-container/gestionar-productos-container.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component'
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component'
import { AnuncioContentComponent } from './components/anuncio/anuncio-content/anuncio-content.component';
import { AnuncioListComponent } from './components/anuncio/anuncio-list/anuncio-list.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './components/categorias/crear-categoria/crear-categoria.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoProveedorComponent } from './components/proveedores/listado-proveedor/listado-proveedor.component';

const routes: Routes = [
  //para probar el caso de uso puntuar proveedor poner de un solo en la url   /puntuarProveedor
  {path: 'puntuar-proveedor', component: PuntuarProveedorContenedorComponent,
    children: [{ path: '', component: ListadoComentariosComponent }, { path: '', component: FormularioComponent }]
  },
  {path: 'productos/cotizados' ,component: CotizacionContainerComponent},
  {path : 'productos', component : ProductoContainerComponent},
  {path: 'categorias', component : ListadoCategoriasComponent,children:[{path:'',component:EditarCategoriaComponent},{path:'',component:CrearCategoriaComponent}]},
  {path: 'gestionar-productos' ,component: GestionarProductosContainerComponent},
  {path: 'editar-producto', component: EditarProductoComponent},
  {path: 'agregar-producto', component: CrearProductoComponent},
  {path: 'content', component : CuentaContainerComponent
    ,
    children: [{
      path: 'new', component: CuentaFormComponent}
    ]
  },
  {
    path: 'content', component: CuentaContainerComponent,
    children: [{
      path: 'new', component: CuentaFormComponent
    }]
  },
  {
    path: 'anuncio', component: AnuncioContentComponent,
    children: [{
      path: 'list', component: AnuncioListComponent
    }]
  },
  {path: 'login', component: LoginComponent},
  {path: 'proveedores', component: ListadoProveedorComponent}

  // {path : '', pathMatch: 'full',redirectTo: 'puntuarProveedor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }