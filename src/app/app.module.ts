import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoContainerComponent } from './components/producto/producto-container/producto-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormularioComponent } from './components/puntuacion/formulario/formulario.component';
import { ListadoComentariosComponent } from './components/puntuacion/listado-comentarios/listado-comentarios.component';
import { PuntuarProveedorContenedorComponent } from './components/puntuacion/puntuar-proveedor-contenedor/puntuar-proveedor-contenedor.component';
import { ListadoCategoriasComponent } from './components/categorias/listado-categorias/listado-categorias.component';
import { CuentaContainerComponent } from './components/cuenta/cuenta-container/cuenta-container.component';
import { CuentaFormComponent } from './components/cuenta/cuenta-form/cuenta-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CotizacionContainerComponent } from './components/producto/cotizacion-container/cotizacion-container.component';
import { FormProductosCotizacionComponent } from './components/producto/form-productos-cotizacion/form-productos-cotizacion.component';
import { ListProductosCotizacionComponent } from './components/producto/list-productos-cotizacion/list-productos-cotizacion.component';
import { MoneyPipe } from './pipes/money.pipe';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionarProductosContainerComponent } from './components/producto/gestionar-productos-container/gestionar-productos-container.component';
import { ListProductosComponent } from './components/producto/list-productos/list-productos.component';
import { CrearProductoComponent } from './components/producto/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './components/producto/editar-producto/editar-producto.component';
import { AnuncioListComponent } from './components/anuncio/anuncio-list/anuncio-list.component';
import { AnuncioContentComponent } from './components/anuncio/anuncio-content/anuncio-content.component';
import { AnuncioNewComponent } from './components/anuncio/anuncio-new/anuncio-new.component';
import { AnuncioEditComponent } from './components/anuncio/anuncio-edit/anuncio-edit.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { CrearCategoriaComponent } from './components/categorias/crear-categoria/crear-categoria.component';
import { LoginComponent } from './components/login/login.component';
import { ListadoProveedorComponent } from './components/proveedores/listado-proveedor/listado-proveedor.component';
import { FiltrosProveedorComponent } from './components/proveedores/filtros-proveedor/filtros-proveedor.component';

// Authentication
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListadoComentariosComponent,
    PuntuarProveedorContenedorComponent,
    ListadoCategoriasComponent,
    CuentaContainerComponent,
    CuentaFormComponent,
    ProductoContainerComponent,
    CotizacionContainerComponent,
    FormProductosCotizacionComponent,
    ListProductosCotizacionComponent,
    MoneyPipe,
    GestionarProductosContainerComponent,
    ListProductosComponent,
    CrearProductoComponent,
    EditarProductoComponent,
    AnuncioListComponent,
    AnuncioContentComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    HomeComponent,
    AnuncioNewComponent,
    AnuncioEditComponent,
    EditarCategoriaComponent,
    CrearCategoriaComponent,
    LoginComponent,
    ListadoProveedorComponent,
    FiltrosProveedorComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
