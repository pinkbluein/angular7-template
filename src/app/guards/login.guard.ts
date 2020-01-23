import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {DataService} from '../services/data.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.dataService.getUser() || !this.dataService.getToken()) {
      return true;
    }

    this.router.navigate([''], { queryParams: {}});
    return false;
  }
}
