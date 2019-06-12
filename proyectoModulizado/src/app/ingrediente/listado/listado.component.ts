import { Component, OnInit } from '@angular/core';
import { Ingrediente } from 'src/app/modelos/ingrediente';
import { Router } from '@angular/router';
import { IngredienteService } from 'src/app/servicios/ingrediente.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  ingredientes: Ingrediente[] = []

  constructor(private ingredienteService: IngredienteService, private router: Router) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.ingredienteService.listar()
      .subscribe(
        (respuesta: any) => this.ingredientes = respuesta.results
      )
  }

  eliminar(_id: string) {
    if (confirm("Esta seguro?")) {
      this.ingredienteService.eliminar(_id)
        .subscribe(
          respuesta => this.listar()
        )
    }
  }

  editar(_id: string) {
    this.router.navigate(["/ingrediente", "edicion", _id])
  }

  nuevo(_id: string) {
    this.router.navigate(["/ingrediente", "nuevo"])
  }

}
