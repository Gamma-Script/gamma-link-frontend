import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoContainerComponent } from '../app/components/producto/producto-container/producto-container.component';
import { CuentaContainerComponent } from './components/cuenta/cuenta-container/cuenta-container.component';
import { CuentaFormComponent } from './components/cuenta/cuenta-form/cuenta-form.component';

const routes: Routes = [
{path : 'productos', component : ProductoContainerComponent},
{path: 'content', component : CuentaContainerComponent
,
children: [{
  path: 'new', component: CuentaFormComponent
}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
