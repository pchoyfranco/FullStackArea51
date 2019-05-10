import { DataService } from '../servicios/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: Array<{}>

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.listar()

    this.dataService.onCambioData
      .subscribe(
        elementos => this.data = elementos
      )
  }

}
