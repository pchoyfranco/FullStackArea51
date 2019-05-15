import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  receta: IReceta = { titulo: "", descripcion: "" }

  @Output() onFinalizar: EventEmitter<number> = new EventEmitter<number>()

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  guardar() {
    this.dataService.agregar(this.receta)
    this.onFinalizar.emit(2)
  }

}
