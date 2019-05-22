import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string
  contrasena: string
  mostrar: boolean = true

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()

  constructor(private ruta: Router) { }

  ngOnInit() {
  }

  capturarUsuario(value: string) {
    this.usuario = value
  }

  capturarContrasena(value: string) {
    this.contrasena = value
  }

  ingresar() {
    this.ruta.navigate(["/listado"])
    /* alert(this.usuario + " " + this.contrasena) */
    //this.onLogin.emit()
  }

}
