import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
/**
 * Created by apple on 6/16/17.
 */


@Injectable()
export class LoginService {

  constructor(private router : Router){

  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
