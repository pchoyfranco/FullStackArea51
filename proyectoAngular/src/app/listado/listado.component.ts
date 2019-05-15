import { DataService } from '../servicios/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: Array<IReceta>
  @Output() onCambiarVista: EventEmitter<number> = new EventEmitter<number>()

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.listar()

    this.dataService.onCambioData
      .subscribe(
        elementos => this.data = elementos
      )
  }

  nuevaReceta() {
    this.onCambiarVista.emit(3)
  }

  finalizar(num) {
    this.onCambiarVista.emit(num)
  }

}
