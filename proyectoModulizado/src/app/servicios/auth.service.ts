import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logueado: boolean = false
  onCambioEstado = new Subject<boolean>()

  constructor(private router: Router) { }

  login() {
    sessionStorage.setItem("usuarioLogueado", "si")
    this.logueado = true
    this.onCambioEstado.next(true)
  }

  logout() {
    sessionStorage.clear()
    this.logueado = false
    this.router.navigate(["/"])
    this.onCambioEstado.next(false)
  }

  estaLogueado() {
    if (sessionStorage.getItem("usuarioLogueado") || this.logueado) {
      return true
    }
    return false
  }
}
