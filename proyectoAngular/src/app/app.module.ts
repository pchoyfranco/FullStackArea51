import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { RecetaComponent } from './receta/receta.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ModificarComponent } from './modificar/modificar.component';
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    RecetaComponent,
    NuevoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
