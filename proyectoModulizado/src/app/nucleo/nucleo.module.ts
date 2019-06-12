import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { LoginComponent } from './login/login.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [LoginComponent, CabeceraComponent],
  imports: [
    CommonModule,
    NucleoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    NucleoRoutingModule,
    CabeceraComponent
  ]
})
export class NucleoModule { }
