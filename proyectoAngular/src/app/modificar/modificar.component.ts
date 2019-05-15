import { Component, OnInit } from '@angular/core';
import { IReceta } from '../modelos/receta';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  receta: IReceta = { titulo: "", descripcion: "" }

  constructor() { }

  ngOnInit() {
  }

}
