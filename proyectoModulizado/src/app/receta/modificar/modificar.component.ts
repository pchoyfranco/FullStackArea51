import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/servicios/receta.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  grupo: FormGroup
  _id: string

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private recetaService: RecetaService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })

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

}
