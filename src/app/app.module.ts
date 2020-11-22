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
    MoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
