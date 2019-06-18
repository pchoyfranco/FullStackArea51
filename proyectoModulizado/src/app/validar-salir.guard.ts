import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { canDeactivateFunction } from './canDeactivateFunction.interface';

@Injectable({
  providedIn: 'root'
})
export class ValidarSalirGuard implements CanDeactivate<canDeactivateFunction>  {
  canDeactivate(componente: canDeactivateFunction): boolean{
    if (componente.canDeactivateData){
      if (confirm("¿Está seguro que desea salir?")){
        return true;
      }
      return false;
    }
    return false;
  }
}
