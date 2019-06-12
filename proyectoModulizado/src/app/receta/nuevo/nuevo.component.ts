import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecetaService } from 'src/app/servicios/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup

  constructor(private recetaService: RecetaService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, Validators.required),
      descripcion: new FormControl(null, Validators.required)
    })
  }

  grabar() {
    this.recetaService.insertar(this.grupo.getRawValue())
      .subscribe(
        respuesta => this.router.navigate(["/receta"])
      )
  }

}
