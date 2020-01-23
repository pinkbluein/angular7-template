import { filter } from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DataService} from './data.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private dataService: DataService, private router: Router) {}

  login(username: string, password: string) {
    return this.http.post(this.dataService.NETWORK_URL + 'auth/api/login/', {
      username: username,
      password: password
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth']);
  }
}
