import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredienteRoutingModule } from './ingrediente-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListadoComponent, NuevoComponent, ModificarComponent],
  imports: [
    CommonModule,
    IngredienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class IngredienteModule { }
