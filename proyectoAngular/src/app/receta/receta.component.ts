import { DataService } from '../servicios/data.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: {}
  @Input() indice: number

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  eliminar() {
    this.dataService.eliminar(this.indice)
  }

}
