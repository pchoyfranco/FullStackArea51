import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authService.estaLogueado()) this.router.navigate(["/"])
    return this.authService.estaLogueado();
  }
  canLoad(): boolean {
    return this.canActivate();
  }
}
