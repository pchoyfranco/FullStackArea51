import { Component, OnInit } from '@angular/core';
import { RecetaService } from 'src/app/servicios/receta.service';
import { Receta } from 'src/app/modelos/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  recetas: Receta[] = []

  constructor(private recetaService: RecetaService, private router: Router) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
    this.recetaService.listar()
      .subscribe(
        (respuesta: any) => this.recetas = respuesta.results
      )
  }

  eliminar(_id: string) {
    if (confirm("Esta seguro?")) {
      this.recetaService.eliminar(_id)
        .subscribe(
          respuesta => this.listar()
        )
    }
  }

  editar(_id: string) {
    this.router.navigate(["/receta", "edicion", _id])
  }

  nuevo(_id: string) {
    this.router.navigate(["/receta", "nuevo"])
  }


}
