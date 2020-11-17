import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoContainerComponent } from '../app/components/producto/producto-container/producto-container.component';


const routes: Routes = [
  {path : 'productos', component : ProductoContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
