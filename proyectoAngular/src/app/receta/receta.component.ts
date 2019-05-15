import { DataService } from '../servicios/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: IReceta
  @Input() indice: number

  @Output() onFinalizar: EventEmitter<number> = new EventEmitter<number>()

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  eliminar() {
    this.dataService.eliminar(this.indice)
  }

  modificar() {
    this.onFinalizar.emit(4)
  }

}
