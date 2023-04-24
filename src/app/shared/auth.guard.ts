import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KnownService } from '../services/known.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router){

  }
  
  canActivate(){
    if(this.auth.isLoggedIn()){
      return true;
    }

    // Poner aquí un aviso ...
    Swal.fire({
      icon: 'error',
      title: 'Stop!',
      text: 'What are you going? You must login before!',
    })

    this.router.navigate(['/login']);
    return false;
  }
    
  
}
