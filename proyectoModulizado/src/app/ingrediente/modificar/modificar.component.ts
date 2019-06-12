import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  grupo: FormGroup
  _id: string

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ingredienteService: IngredienteService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })

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

}
