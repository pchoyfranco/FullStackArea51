import { ListadoComponent } from './listado/listado.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';


const routes: Routes = [
  { path: "", component: ListadoComponent },
  { path: "nuevo", component: NuevoComponent },
  { path: "edicion/:_id", component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetaRoutingModule { }
