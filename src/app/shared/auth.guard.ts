import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { KnownService } from '../services/known.service';
import { AuthService } from '../services/auth.service';

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
    alert('You have to login first')
    this.router.navigate(['/login'])
    return false;
  }
    
  
}
