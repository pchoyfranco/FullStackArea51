import { AuthService } from '../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  grupo: FormGroup
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.authService.login()
    this.router.navigate(["receta"])
  }

}
