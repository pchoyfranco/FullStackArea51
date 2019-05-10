import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  onCambioData: EventEmitter<Array<{}>> = new EventEmitter<Array<{}>>()

  private data: Array<{}> = [
    { titulo: "Arroz con pato", descripcion: "plato tradicional norteño" },
    { titulo: "Picante de cuy", descripcion: "plato típico de la sierra" },
    { titulo: "Tacacho con cecina", descripcion: "plato típico de la selva" }
  ]

  constructor() { }

  listar(): Array<{}> {
    return this.data
  }

  eliminar(indice: number): void {
    if (confirm("¿Está seguro?")) {
      this.data.splice(indice, 1)
    }
    this.onCambioData.emit(this.data)
  }
}
