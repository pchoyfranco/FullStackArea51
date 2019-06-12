import { AuthService } from '../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  usuarioLogueado: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.usuarioLogueado = this.authService.estaLogueado()
    this.authService.onCambioEstado.subscribe(
      estado => this.usuarioLogueado = estado
    )
  }

  logout() {
    this.authService.logout()
  }

}
