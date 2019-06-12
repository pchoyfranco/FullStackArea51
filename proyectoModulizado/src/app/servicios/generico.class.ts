
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class GenericoService {
  http: HttpClient
  constructor(private urlApiRest: string, http: HttpClient) {
    this.http = http
  }

  listar(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApiRest}`)
  }

  listarUno(_id: string): Observable<any> {
    return this.http.get<any[]>(`${this.urlApiRest}/${_id}`)
  }

  insertar(registro: {}): Observable<any> {
    return this.http.post(`${this.urlApiRest}`, registro)
  }

  modificar(registro: {}, _id: string): Observable<any> {
    return this.http.put(`${this.urlApiRest}/${_id}`, registro)
  }

  eliminar(_id): Observable<any> {
    return this.http.delete(`${this.urlApiRest}/${_id}`)
  }
}
