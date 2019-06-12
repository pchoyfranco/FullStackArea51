
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../servicios/auth.guard';


const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "receta", loadChildren: () => import("../receta/receta.module").then(m => m.RecetaModule), canLoad: [AuthGuard] },
  { path: "ingrediente", loadChildren: () => import("../ingrediente/ingrediente.module").then(m => m.IngredienteModule), canLoad: [AuthGuard] },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class NucleoRoutingModule { }
