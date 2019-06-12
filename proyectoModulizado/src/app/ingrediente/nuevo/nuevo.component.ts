import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombre: new FormControl(null, Validators.required)
    })
  }

  grabar() {
    this.ingredienteService.insertar(this.grupo.getRawValue())
      .subscribe(
        respuesta => this.router.navigate(["/ingrediente"])
      )
  }

}
