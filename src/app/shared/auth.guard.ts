/*
 * File: auth.guard.ts
 * Authors: Hegedus Gyorgy
 * Copyright: 2022, Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/Gyuri21
 * Licenc: GNU GPL
*/
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}