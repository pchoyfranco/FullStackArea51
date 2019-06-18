import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';
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

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ingredienteService: IngredienteService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })

    this.dataOriginal = this.grupo.getRawValue();

    this.activatedRoute.paramMap
      .subscribe(
        params => {
          this._id = params.get("_id")
          this.ingredienteService.listarUno(params.get("_id"))
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
      this.ingredienteService.modificar(this.grupo.getRawValue(), this._id)
        .subscribe(
          () => this.router.navigate(["/ingrediente"])
        )
    }
  }

  canDeactivateData(): boolean {
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
