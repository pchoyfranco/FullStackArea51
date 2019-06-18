import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/servicios/receta.service';
import { Router } from '@angular/router';
import { canDeactivateFunction } from 'src/app/canDeactivateFunction.interface';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit, canDeactivateFunction {
  grupo: FormGroup;
  dataOriginal: any;

  constructor(private recetaService: RecetaService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })
    this.dataOriginal = this.grupo.getRawValue();
  }

  grabar() {
    this.recetaService.insertar(this.grupo.getRawValue())
      .subscribe(
        respuesta => this.router.navigate(["/receta"])
      )
  }

  canDeactivateData(): boolean{
    const dataActual = this.grupo.getRawValue();

    let cambio = false;

    for (const prop in dataActual) {
      if (this.dataOriginal[prop] !== dataActual[prop]){
        cambio = true;
      }
    }
    return cambio;
  }

}
