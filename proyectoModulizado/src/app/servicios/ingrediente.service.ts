import { Injectable } from '@angular/core';
import { GenericoService } from './generico.class';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngredienteService extends GenericoService {

  constructor(http: HttpClient) {
    super("/ingrediente", http)
  }
}
