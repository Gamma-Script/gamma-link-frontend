import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductoContainerComponent } from './components/producto/producto-container/producto-container.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuentaContainerComponent } from './components/cuenta/cuenta-container/cuenta-container.component';
import { CuentaFormComponent } from './components/cuenta/cuenta-form/cuenta-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CuentaContainerComponent,
    CuentaFormComponent,
    ProductoContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
