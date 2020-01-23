import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../services/login.service';
import {DataService} from '../services/data.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router, private loginService: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.dataService.isLogin()) {
      this.router.navigate(['/auth'], { queryParams: {}});
      return false;
    }
    return true;
  }
}
