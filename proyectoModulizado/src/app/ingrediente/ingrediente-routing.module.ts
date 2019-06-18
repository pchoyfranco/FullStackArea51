import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { AuthGuard } from '../servicios/auth.guard';
import { ValidarSalirGuard } from '../validar-salir.guard';

const routes: Routes = [
  { path: "", component: ListadoComponent, canActivate: [AuthGuard]},
  { path: "nuevo", component: NuevoComponent, canActivate: [AuthGuard], canDeactivate: [ValidarSalirGuard]  },
  { path: "edicion/:_id", component: ModificarComponent, canActivate: [AuthGuard], canDeactivate: [ValidarSalirGuard]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredienteRoutingModule { }
