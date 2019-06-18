import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/servicios/receta.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { canDeactivateFunction } from 'src/app/canDeactivateFunction.interface';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit, canDeactivateFunction {

  grupo: FormGroup;
  _id: string;
  dataOriginal: any;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recetaService: RecetaService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })

    this.dataOriginal = this.grupo.getRawValue();

    this.activatedRoute.paramMap
      .subscribe(
        params => {
          this._id = params.get("_id")
          this.recetaService.listarUno(params.get("_id"))
            .subscribe(
              (respuesta: any) => {
                this.grupo.patchValue(respuesta.result)
              }
            )
        }
      )
  }

  grabar() {
    if (this._id) {
      this.recetaService.modificar(this.grupo.getRawValue(), this._id)
        .subscribe(
          () => this.router.navigate(["/receta"])
        )
    }
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
